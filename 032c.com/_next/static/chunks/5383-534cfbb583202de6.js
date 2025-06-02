(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5383],{99949:function(e,t,i){"use strict";var a=i(88877);function r(){}function n(){}n.resetWarningCache=r,e.exports=function(){function e(e,t,i,r,n,s){if(s!==a){var o=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:r};return i.PropTypes=i,i}},41448:function(e,t,i){e.exports=i(99949)()},88877:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},20450:function(e){var t="undefined"!=typeof Element,i="function"==typeof Map,a="function"==typeof Set,r="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,n){try{return function e(n,s){if(n===s)return!0;if(n&&s&&"object"==typeof n&&"object"==typeof s){var o,l,d,u;if(n.constructor!==s.constructor)return!1;if(Array.isArray(n)){if((o=n.length)!=s.length)return!1;for(l=o;0!=l--;)if(!e(n[l],s[l]))return!1;return!0}if(i&&n instanceof Map&&s instanceof Map){if(n.size!==s.size)return!1;for(u=n.entries();!(l=u.next()).done;)if(!s.has(l.value[0]))return!1;for(u=n.entries();!(l=u.next()).done;)if(!e(l.value[1],s.get(l.value[0])))return!1;return!0}if(a&&n instanceof Set&&s instanceof Set){if(n.size!==s.size)return!1;for(u=n.entries();!(l=u.next()).done;)if(!s.has(l.value[0]))return!1;return!0}if(r&&ArrayBuffer.isView(n)&&ArrayBuffer.isView(s)){if((o=n.length)!=s.length)return!1;for(l=o;0!=l--;)if(n[l]!==s[l])return!1;return!0}if(n.constructor===RegExp)return n.source===s.source&&n.flags===s.flags;if(n.valueOf!==Object.prototype.valueOf&&"function"==typeof n.valueOf&&"function"==typeof s.valueOf)return n.valueOf()===s.valueOf();if(n.toString!==Object.prototype.toString&&"function"==typeof n.toString&&"function"==typeof s.toString)return n.toString()===s.toString();if((o=(d=Object.keys(n)).length)!==Object.keys(s).length)return!1;for(l=o;0!=l--;)if(!Object.prototype.hasOwnProperty.call(s,d[l]))return!1;if(t&&n instanceof Element)return!1;for(l=o;0!=l--;)if(("_owner"!==d[l]&&"__v"!==d[l]&&"__o"!==d[l]||!n.$$typeof)&&!e(n[d[l]],s[d[l]]))return!1;return!0}return n!=n&&s!=s}(e,n)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}},62625:function(e,t,i){"use strict";let a,r,n,s,o,l,d,u;i.d(t,{ZP:function(){return EV}});var c=i(2265),h=Object.create,m=Object.defineProperty,p=Object.getOwnPropertyDescriptor,v=Object.getOwnPropertyNames,b=Object.getPrototypeOf,f=Object.prototype.hasOwnProperty,E=function(e,t){return function(){return e&&(t=e(e=0)),t}},g=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}},y=function(e,t,i,a){if(t&&"object"==typeof t||"function"==typeof t)for(var r,n=v(t),s=0,o=n.length;s<o;s++)r=n[s],f.call(e,r)||r===i||m(e,r,{get:(function(e){return t[e]}).bind(null,r),enumerable:!(a=p(t,r))||a.enumerable});return e},_=function(e,t,i){return i=null!=e?h(b(e)):{},y(!t&&e&&e.__esModule?i:m(i,"default",{value:e,enumerable:!0}),e)},A=g(function(e,t){var i;"undefined"!=typeof window?i=window:"undefined"!=typeof global?i=global:"undefined"!=typeof self?i=self:i={},t.exports=i});function k(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e}var T=E(function(){}),w=g(function(e,t){var i;T(),i=function(){var e=function(){},t="undefined",i=("undefined"==typeof window?"undefined":k(window))!==t&&k(window.navigator)!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),a=["trace","debug","info","warn","error"];function r(e,t){var i=e[t];if("function"==typeof i.bind)return i.bind(e);try{return Function.prototype.bind.call(i,e)}catch(t){return function(){return Function.prototype.apply.apply(i,[e,arguments])}}}function n(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function s(t,i){for(var r=0;r<a.length;r++){var n=a[r];this[n]=r<t?e:this.methodFactory(n,t,i)}this.log=this.debug}function o(e,i,a){return function(){("undefined"==typeof console?"undefined":k(console))!==t&&(s.call(this,i,a),this[e].apply(this,arguments))}}function l(a,s,l){var d;return"debug"===(d=a)&&(d="log"),("undefined"==typeof console?"undefined":k(console))!==t&&("trace"===d&&i?n:void 0!==console[d]?r(console,d):void 0!==console.log?r(console,"log"):e)||o.apply(this,arguments)}function d(e,i,r){var n,o=this;i=null==i?"WARN":i;var d="loglevel";function u(){var e;if(!(("undefined"==typeof window?"undefined":k(window))===t||!d)){try{e=window.localStorage[d]}catch(e){}if((void 0===e?"undefined":k(e))===t)try{var i=window.document.cookie,a=i.indexOf(encodeURIComponent(d)+"=");-1!==a&&(e=/^([^;]+)/.exec(i.slice(a))[1])}catch(e){}return void 0===o.levels[e]&&(e=void 0),e}}"string"==typeof e?d+=":"+e:(void 0===e?"undefined":k(e))==="symbol"&&(d=void 0),o.name=e,o.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},o.methodFactory=r||l,o.getLevel=function(){return n},o.setLevel=function(i,r){if("string"==typeof i&&void 0!==o.levels[i.toUpperCase()]&&(i=o.levels[i.toUpperCase()]),"number"==typeof i&&i>=0&&i<=o.levels.SILENT){if(n=i,!1!==r&&function(e){var i=(a[e]||"silent").toUpperCase();if(!(("undefined"==typeof window?"undefined":k(window))===t||!d)){try{window.localStorage[d]=i;return}catch(e){}try{window.document.cookie=encodeURIComponent(d)+"="+i+";"}catch(e){}}}(i),s.call(o,i,e),("undefined"==typeof console?"undefined":k(console))===t&&i<o.levels.SILENT)return"No console available for logging"}else throw"log.setLevel() called with invalid level: "+i},o.setDefaultLevel=function(e){i=e,u()||o.setLevel(e,!1)},o.resetLevel=function(){o.setLevel(i,!1),function(){if(!(("undefined"==typeof window?"undefined":k(window))===t||!d)){try{window.localStorage.removeItem(d);return}catch(e){}try{window.document.cookie=encodeURIComponent(d)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}()},o.enableAll=function(e){o.setLevel(o.levels.TRACE,e)},o.disableAll=function(e){o.setLevel(o.levels.SILENT,e)};var c=u();null==c&&(c=i),o.setLevel(c,!1)}var u=new d,c={};u.getLogger=function(e){if((void 0===e?"undefined":k(e))!=="symbol"&&"string"!=typeof e||""===e)throw TypeError("You must supply a name when creating a logger.");var t=c[e];return t||(t=c[e]=new d(e,u.getLevel(),u.methodFactory)),t};var h=("undefined"==typeof window?"undefined":k(window))!==t?window.log:void 0;return u.noConflict=function(){return("undefined"==typeof window?"undefined":k(window))!==t&&window.log===u&&(window.log=h),u},u.getLoggers=function(){return c},u.default=u,u},"function"==typeof define&&define.amd?define(i):"object"==typeof t&&t.exports?t.exports=i():e.log=i()});function S(e,t){return null!=t&&"undefined"!=typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):S(e,t)}var I=E(function(){I()}),C=g(function(e){var t,i=Object.prototype.hasOwnProperty;function a(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function r(e){try{return encodeURIComponent(e)}catch(e){return null}}e.stringify=function(e,a){var n,s,o=[];for(s in"string"!=typeof(a=a||"")&&(a="?"),e)if(i.call(e,s)){if(!(n=e[s])&&(null===n||n===t||isNaN(n))&&(n=""),s=r(s),n=r(n),null===s||null===n)continue;o.push(s+"="+n)}return o.length?a+o.join("&"):""},e.parse=function(e){for(var t,i=/([^=?#&]+)=?([^&]*)/g,r={};t=i.exec(e);){var n=a(t[1]),s=a(t[2]);null===n||null===s||n in r||(r[n]=s)}return r}}),R=g(function(e,t){!function(i){var a=!1;if("function"==typeof define&&define.amd&&(define(i),a=!0),"object"==typeof e&&(t.exports=i(),a=!0),!a){var r=window.Cookies,n=window.Cookies=i();n.noConflict=function(){return window.Cookies=r,n}}}(function(){var e=function(){for(var e=0,t={};e<arguments.length;e++){var i=arguments[e];for(var a in i)t[a]=i[a]}return t};return function t(i){function a(t,r,n){var s;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(n=e({path:"/"},a.defaults,n)).expires){var o=new Date;o.setMilliseconds(o.getMilliseconds()+864e5*n.expires),n.expires=o}try{s=JSON.stringify(r),/^[\{\[]/.test(s)&&(r=s)}catch(e){}return r=i.write?i.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=[t,"=",r,n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("")}t||(s={});for(var l=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<l.length;u++){var c=l[u].split("="),h=c.slice(1).join("=");'"'===h.charAt(0)&&(h=h.slice(1,-1));try{var m=c[0].replace(d,decodeURIComponent);if(h=i.read?i.read(h,m):i(h,m)||h.replace(d,decodeURIComponent),this.json)try{h=JSON.parse(h)}catch(e){}if(t===m){s=h;break}t||(s[m]=h)}catch(e){}}return s}}return a.set=a,a.get=function(e){return a.call(a,e)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(t,i){a(t,"",e(i,{expires:-1}))},a.withConverter=t,a}(function(){})})}),L=g(function(e,t){var i=Array.prototype.slice;t.exports=function(e,t){for(("length"in e)||(e=[e]),e=i.call(e);e.length;){var a=e.shift(),r=t(a);if(r)return r;a.childNodes&&a.childNodes.length&&(e=i.call(a.childNodes).concat(e))}}}),D=g(function(e,t){function i(e,t){if(!S(this,i))return new i(e,t);this.data=e,this.nodeValue=e,this.length=e.length,this.ownerDocument=t||null}I(),t.exports=i,i.prototype.nodeType=8,i.prototype.nodeName="#comment",i.prototype.toString=function(){return"[object Comment]"}}),x=g(function(e,t){function i(e,t){if(!S(this,i))return new i(e);this.data=e||"",this.length=this.data.length,this.ownerDocument=t||null}I(),t.exports=i,i.prototype.type="DOMTextNode",i.prototype.nodeType=3,i.prototype.nodeName="#text",i.prototype.toString=function(){return this.data},i.prototype.replaceData=function(e,t,i){var a=this.data,r=a.substring(0,e),n=a.substring(e+t,a.length);this.data=r+i+n,this.length=this.data.length}}),M=g(function(e,t){t.exports=function(e){var t=this,i=e.type;e.target||(e.target=t),t.listeners||(t.listeners={});var a=t.listeners[i];if(a)return a.forEach(function(i){e.currentTarget=t,"function"==typeof i?i(e):i.handleEvent(e)});t.parentNode&&t.parentNode.dispatchEvent(e)}}),O=g(function(e,t){t.exports=function(e,t){this.listeners||(this.listeners={}),this.listeners[e]||(this.listeners[e]=[]),-1===this.listeners[e].indexOf(t)&&this.listeners[e].push(t)}}),N=g(function(e,t){t.exports=function(e,t){if(this.listeners&&this.listeners[e]){var i=this.listeners[e],a=i.indexOf(t);-1!==a&&i.splice(a,1)}}}),P=g(function(e,t){T(),t.exports=function e(t){switch(t.nodeType){case 3:return r(t.data);case 8:return"<!--"+t.data+"-->";default:var n,s;return n=[],s=t.tagName,"http://www.w3.org/1999/xhtml"===t.namespaceURI&&(s=s.toLowerCase()),n.push("<"+s+function(e){var t=[];for(var i in e)(function(e,t){var i=k(e[t]);return"style"===t&&Object.keys(e.style).length>0||e.hasOwnProperty(t)&&("string"===i||"boolean"===i||"number"===i)&&"nodeName"!==t&&"className"!==t&&"tagName"!==t&&"textContent"!==t&&"innerText"!==t&&"namespaceURI"!==t&&"innerHTML"!==t})(e,i)&&t.push({name:i,value:e[i]});for(var r in e._attributes)for(var n in e._attributes[r]){var s=e._attributes[r][n],o=(s.prefix?s.prefix+":":"")+n;t.push({name:o,value:s.value})}return e.className&&t.push({name:"class",value:e.className}),t.length?a(t):""}(t)+function(e){var t=e.dataset,i=[];for(var r in t)i.push({name:"data-"+r,value:t[r]});return i.length?a(i):""}(t)),i.indexOf(s)>-1?n.push(" />"):(n.push(">"),t.childNodes.length?n.push.apply(n,t.childNodes.map(e)):t.textContent||t.innerText?n.push(r(t.textContent||t.innerText)):t.innerHTML&&n.push(t.innerHTML),n.push("</"+s+">")),n.join("")}};var i=["area","base","br","col","embed","hr","img","input","keygen","link","menuitem","meta","param","source","track","wbr"];function a(e){var t=[];return e.forEach(function(e){var i=e.name,a=e.value;"style"===i&&(a=function(e){if("string"==typeof e)return e;var t="";return Object.keys(e).forEach(function(i){var a=e[i];i=i.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}),t+=i+":"+a+";"}),t}(a)),t.push(i+'="'+r(a).replace(/"/g,"&quot;")+'"')}),t.length?" "+t.join(" "):""}function r(e){var t="";return"string"==typeof e?t=e:e&&(t=e.toString()),t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}}),U=g(function(e,t){I();var i=L(),a=M(),r=O(),n=N(),s=P(),o="http://www.w3.org/1999/xhtml";function l(e,t,i){if(!S(this,l))return new l(e);var a=void 0===i?o:i||null;this.tagName=a===o?String(e).toUpperCase():e,this.nodeName=this.tagName,this.className="",this.dataset={},this.childNodes=[],this.parentNode=null,this.style={},this.ownerDocument=t||null,this.namespaceURI=a,this._attributes={},"INPUT"===this.tagName&&(this.type="text")}t.exports=l,l.prototype.type="DOMElement",l.prototype.nodeType=1,l.prototype.appendChild=function(e){return e.parentNode&&e.parentNode.removeChild(e),this.childNodes.push(e),e.parentNode=this,e},l.prototype.replaceChild=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=this.childNodes.indexOf(t);return t.parentNode=null,this.childNodes[i]=e,e.parentNode=this,t},l.prototype.removeChild=function(e){var t=this.childNodes.indexOf(e);return this.childNodes.splice(t,1),e.parentNode=null,e},l.prototype.insertBefore=function(e,t){e.parentNode&&e.parentNode.removeChild(e);var i=null==t?-1:this.childNodes.indexOf(t);return i>-1?this.childNodes.splice(i,0,e):this.childNodes.push(e),e.parentNode=this,e},l.prototype.setAttributeNS=function(e,t,i){var a=null,r=t,n=t.indexOf(":");(n>-1&&(a=t.substr(0,n),r=t.substr(n+1)),"INPUT"===this.tagName&&"type"===t)?this.type=i:(this._attributes[e]||(this._attributes[e]={}))[r]={value:i,prefix:a}},l.prototype.getAttributeNS=function(e,t){var i=this._attributes[e],a=i&&i[t]&&i[t].value;return"INPUT"===this.tagName&&"type"===t?this.type:"string"!=typeof a?null:a},l.prototype.removeAttributeNS=function(e,t){var i=this._attributes[e];i&&delete i[t]},l.prototype.hasAttributeNS=function(e,t){var i=this._attributes[e];return!!i&&t in i},l.prototype.setAttribute=function(e,t){return this.setAttributeNS(null,e,t)},l.prototype.getAttribute=function(e){return this.getAttributeNS(null,e)},l.prototype.removeAttribute=function(e){return this.removeAttributeNS(null,e)},l.prototype.hasAttribute=function(e){return this.hasAttributeNS(null,e)},l.prototype.removeEventListener=n,l.prototype.addEventListener=r,l.prototype.dispatchEvent=a,l.prototype.focus=function(){},l.prototype.toString=function(){return s(this)},l.prototype.getElementsByClassName=function(e){var t=e.split(" "),a=[];return i(this,function(e){if(1===e.nodeType){var i=(e.className||"").split(" ");t.every(function(e){return -1!==i.indexOf(e)})&&a.push(e)}}),a},l.prototype.getElementsByTagName=function(e){e=e.toLowerCase();var t=[];return i(this.childNodes,function(i){1===i.nodeType&&("*"===e||i.tagName.toLowerCase()===e)&&t.push(i)}),t},l.prototype.contains=function(e){return i(this,function(t){return e===t})||!1}}),B=g(function(e,t){I();var i=U();function a(e){if(!S(this,a))return new a;this.childNodes=[],this.parentNode=null,this.ownerDocument=e||null}t.exports=a,a.prototype.type="DocumentFragment",a.prototype.nodeType=11,a.prototype.nodeName="#document-fragment",a.prototype.appendChild=i.prototype.appendChild,a.prototype.replaceChild=i.prototype.replaceChild,a.prototype.removeChild=i.prototype.removeChild,a.prototype.toString=function(){return this.childNodes.map(function(e){return String(e)}).join("")}}),W=g(function(e,t){function i(e){}t.exports=i,i.prototype.initEvent=function(e,t,i){this.type=e,this.bubbles=t,this.cancelable=i},i.prototype.preventDefault=function(){}}),H=g(function(e,t){I();var i=L(),a=D(),r=x(),n=U(),s=B(),o=W(),l=M(),d=O(),u=N();function c(){if(!S(this,c))return new c;this.head=this.createElement("head"),this.body=this.createElement("body"),this.documentElement=this.createElement("html"),this.documentElement.appendChild(this.head),this.documentElement.appendChild(this.body),this.childNodes=[this.documentElement],this.nodeType=9}t.exports=c;var h=c.prototype;h.createTextNode=function(e){return new r(e,this)},h.createElementNS=function(e,t){return new n(t,this,null===e?null:String(e))},h.createElement=function(e){return new n(e,this)},h.createDocumentFragment=function(){return new s(this)},h.createEvent=function(e){return new o(e)},h.createComment=function(e){return new a(e,this)},h.getElementById=function(e){return e=String(e),i(this.childNodes,function(t){if(String(t.id)===e)return t})||null},h.getElementsByClassName=n.prototype.getElementsByClassName,h.getElementsByTagName=n.prototype.getElementsByTagName,h.contains=n.prototype.contains,h.removeEventListener=u,h.addEventListener=d,h.dispatchEvent=l}),V=g(function(e,t){var i=H();t.exports=new i}),q=g(function(e,t){var i,a="undefined"!=typeof global?global:"undefined"!=typeof window?window:{},r=V();"undefined"!=typeof document?i=document:(i=a["__GLOBAL_DOCUMENT_CACHE@4"])||(i=a["__GLOBAL_DOCUMENT_CACHE@4"]=r),t.exports=i});function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=Array(t);i<t;i++)a[i]=e[i];return a}function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var a,r,n=[],s=!0,o=!1;try{for(i=i.call(e);!(s=(a=i.next()).done)&&(n.push(a.value),!(t&&n.length===t));s=!0);}catch(e){o=!0,r=e}finally{try{s||null==i.return||i.return()}finally{if(o)throw r}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);if("Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return F(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var j=_(A()),K=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},Y=function(){return("000000"+(2176782336*Math.random()<<0).toString(36)).slice(-6)},G=function(e){var t;if(e&&void 0!==e.nodeName)return e.muxId||(e.muxId=Y()),e.muxId;try{t=document.querySelector(e)}catch(e){}return t&&!t.muxId&&(t.muxId=e),(null==t?void 0:t.muxId)||e},Z=function(e){e&&void 0!==e.nodeName?e=G(t=e):t=document.querySelector(e);var t,i=t&&t.nodeName?t.nodeName.toLowerCase():"";return[t,e,i]},Q=_(w()),z=Q.default.methodFactory;Q.default.methodFactory=function(e,t,i){var a=z(e,t,i);return function(){for(var e=["[mux]"],t=0;t<arguments.length;t++)e.push(arguments[t]);a.apply(void 0,e)}},Q.default.setLevel(Q.default.getLevel());var X=Q.default,J=_(A());function ee(){return"1"===(J.default.doNotTrack||J.default.navigator&&J.default.navigator.doNotTrack)}var et=_(A()),ei={now:function(){var e=et.default.performance,t=e&&e.timing,i=t&&t.navigationStart;return Math.round("number"==typeof i&&"function"==typeof e.now?i+e.now():Date.now())}};function ea(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function er(e,t){if(!S(e,t))throw TypeError("Cannot call a class as a function")}function en(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function es(e,t,i){return t&&en(e.prototype,t),i&&en(e,i),e}function eo(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function el(e,t){return(el=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ed(e){return(ed=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}I(),T();var eu=function(e){return ec(e)[0]},ec=function(e){if("string"!=typeof e||""===e)return["localhost"];var t,i=(e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)||[])[4];return i&&(t=(i.match(/[^\.]+\.[^\.]+$/)||[])[0]),[i,t]},eh=_(A()),em={exists:function(){var e=eh.default.performance;return void 0!==(e&&e.timing)},domContentLoadedEventEnd:function(){var e=eh.default.performance,t=e&&e.timing;return t&&t.domContentLoadedEventEnd},navigationStart:function(){var e=eh.default.performance,t=e&&e.timing;return t&&t.navigationStart}};function ep(e,t,i){i=void 0===i?1:i,e[t]=e[t]||0,e[t]+=i}function ev(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){eo(e,t,i[t])})}return e}function eb(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i.push.apply(i,a)}return i})(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}),e}var ef=["x-request-id","cf-ray","x-amz-cf-id","x-akamai-request-id"],eE=["x-cdn","content-type"].concat(ef);function eg(e){var t={};return(e=e||"").trim().split(/[\r\n]+/).forEach(function(e){if(e){var i=e.split(": "),a=i.shift();a&&(eE.indexOf(a.toLowerCase())>=0||0===a.toLowerCase().indexOf("x-litix-"))&&(t[a]=i.join(": "))}}),t}function ey(e){if(e){var t=ef.find(function(t){return void 0!==e[t]});return t?e[t]:void 0}}var e_=function(e){var t={};for(var i in e){var a=e[i];-1!==a["DATA-ID"].search("io.litix.data.")&&(t[a["DATA-ID"].replace("io.litix.data.","")]=a.VALUE)}return t},eA=function(e){if(!e)return{};var t=em.navigationStart(),i=e.loading,a=i?i.start:e.trequest,r=i?i.first:e.tfirst,n=i?i.end:e.tload;return{bytesLoaded:e.total,requestStart:Math.round(t+a),responseStart:Math.round(t+r),responseEnd:Math.round(t+n)}},ek=function(e){if(!(!e||"function"!=typeof e.getAllResponseHeaders))return eg(e.getAllResponseHeaders())},eT=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=arguments.length>4?arguments[4]:void 0,r=e.log,n=e.utils.secondsToMs,s=function(e){var t,i=parseInt(a.version);return 1===i&&null!==e.programDateTime&&(t=e.programDateTime),0===i&&null!==e.pdt&&(t=e.pdt),t};if(!em.exists()){r.warn("performance timing not supported. Not tracking HLS.js.");return}var o=function(i,a){return e.emit(t,i,a)},l=function(e,t){var i=t.levels,a=t.audioTracks,r=t.url,n=t.stats,s=t.networkDetails,l=t.sessionData,d={},u={};i.forEach(function(e,t){d[t]={width:e.width,height:e.height,bitrate:e.bitrate,attrs:e.attrs}}),a.forEach(function(e,t){u[t]={name:e.name,language:e.lang,bitrate:e.bitrate}});var c=eA(n),h=c.bytesLoaded,m=c.requestStart,p=c.responseStart,v=c.responseEnd;o("requestcompleted",eb(ev({},e_(l)),{request_event_type:e,request_bytes_loaded:h,request_start:m,request_response_start:p,request_response_end:v,request_type:"manifest",request_hostname:eu(r),request_response_headers:ek(s),request_rendition_lists:{media:d,audio:u,video:{}}}))};i.on(a.Events.MANIFEST_LOADED,l);var d=function(e,t){var i=t.details,a=t.level,r=t.networkDetails,l=eA(t.stats),d=l.bytesLoaded,u=l.requestStart,c=l.responseStart,h=l.responseEnd,m=i.fragments[i.fragments.length-1],p=s(m)+n(m.duration);o("requestcompleted",{request_event_type:e,request_bytes_loaded:d,request_start:u,request_response_start:c,request_response_end:h,request_current_level:a,request_type:"manifest",request_hostname:eu(i.url),request_response_headers:ek(r),video_holdback:i.holdBack&&n(i.holdBack),video_part_holdback:i.partHoldBack&&n(i.partHoldBack),video_part_target_duration:i.partTarget&&n(i.partTarget),video_target_duration:i.targetduration&&n(i.targetduration),video_source_is_live:i.live,player_manifest_newest_program_time:isNaN(p)?void 0:p})};i.on(a.Events.LEVEL_LOADED,d);var u=function(e,t){var i=t.details,a=t.networkDetails,r=eA(t.stats);o("requestcompleted",{request_event_type:e,request_bytes_loaded:r.bytesLoaded,request_start:r.requestStart,request_response_start:r.responseStart,request_response_end:r.responseEnd,request_type:"manifest",request_hostname:eu(i.url),request_response_headers:ek(a)})};i.on(a.Events.AUDIO_TRACK_LOADED,u);var c=function(e,t){var a=t.stats,r=t.networkDetails,n=t.frag,s=eA(a=a||n.stats),l=s.bytesLoaded,d=s.requestStart,u=s.responseStart,c=s.responseEnd,h=r?ek(r):void 0,m={request_event_type:e,request_bytes_loaded:l,request_start:d,request_response_start:u,request_response_end:c,request_hostname:r?eu(r.responseURL):void 0,request_id:h?ey(h):void 0,request_response_headers:h,request_media_duration:n.duration,request_url:null==r?void 0:r.responseURL};"main"===n.type?(m.request_type="media",m.request_current_level=n.level,m.request_video_width=(i.levels[n.level]||{}).width,m.request_video_height=(i.levels[n.level]||{}).height,m.request_labeled_bitrate=(i.levels[n.level]||{}).bitrate):m.request_type=n.type,o("requestcompleted",m)};i.on(a.Events.FRAG_LOADED,c);var h=function(e,t){var i=t.frag,a=i.start;o("fragmentchange",{currentFragmentPDT:s(i),currentFragmentStart:n(a)})};i.on(a.Events.FRAG_CHANGED,h);var m=function(e,t){var i,r=t.type,n=t.details,s=t.response,l=t.fatal,d=t.frag,u=t.networkDetails,c=(null==d?void 0:d.url)||t.url||"",h=u?ek(u):void 0;(n===a.ErrorDetails.MANIFEST_LOAD_ERROR||n===a.ErrorDetails.MANIFEST_LOAD_TIMEOUT||n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT||n===a.ErrorDetails.LEVEL_LOAD_ERROR||n===a.ErrorDetails.LEVEL_LOAD_TIMEOUT||n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT||n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT||n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT)&&o("requestfailed",{request_error:n,request_url:c,request_hostname:eu(c),request_id:h?ey(h):void 0,request_type:n===a.ErrorDetails.FRAG_LOAD_ERROR||n===a.ErrorDetails.FRAG_LOAD_TIMEOUT?"media":n===a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR||n===a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT?"audio":n===a.ErrorDetails.SUBTITLE_LOAD_ERROR||n===a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT?"subtitle":n===a.ErrorDetails.KEY_LOAD_ERROR||n===a.ErrorDetails.KEY_LOAD_TIMEOUT?"encryption":"manifest",request_error_code:null==s?void 0:s.code,request_error_text:null==s?void 0:s.text}),l&&o("error",{player_error_code:r,player_error_message:n,player_error_context:"".concat(c?"url: ".concat(c,"\n"):"")+"".concat(s&&(s.code||s.text)?"response: ".concat(s.code,", ").concat(s.text,"\n"):"")+"".concat(t.reason?"failure reason: ".concat(t.reason,"\n"):"")+"".concat(t.level?"level: ".concat(t.level,"\n"):"")+"".concat(t.parent?"parent stream controller: ".concat(t.parent,"\n"):"")+"".concat(t.buffer?"buffer length: ".concat(t.buffer,"\n"):"")+"".concat(t.error?"error: ".concat(t.error,"\n"):"")+"".concat(t.event?"event: ".concat(t.event,"\n"):"")+"".concat(t.err?"error message: ".concat(null===(i=t.err)||void 0===i?void 0:i.message,"\n"):"")})};i.on(a.Events.ERROR,m);var p=function(e,t){var i=t.frag,a=i&&i._url||"";o("requestcanceled",{request_event_type:e,request_url:a,request_type:"media",request_hostname:eu(a)})};i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p);var v=function(e,t){var a=t.level,n=i.levels[a];if(n&&n.attrs&&n.attrs.BANDWIDTH){var s,l=n.attrs.BANDWIDTH,d=parseFloat(n.attrs["FRAME-RATE"]);isNaN(d)||(s=d),l?o("renditionchange",{video_source_fps:s,video_source_bitrate:l,video_source_width:n.width,video_source_height:n.height,video_source_rendition_name:n.name,video_source_codec:null==n?void 0:n.videoCodec}):r.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js")}};i.on(a.Events.LEVEL_SWITCHED,v),i._stopMuxMonitor=function(){i.off(a.Events.MANIFEST_LOADED,l),i.off(a.Events.LEVEL_LOADED,d),i.off(a.Events.AUDIO_TRACK_LOADED,u),i.off(a.Events.FRAG_LOADED,c),i.off(a.Events.FRAG_CHANGED,h),i.off(a.Events.ERROR,m),i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED,p),i.off(a.Events.LEVEL_SWITCHED,v),i.off(a.Events.DESTROYING,i._stopMuxMonitor),delete i._stopMuxMonitor},i.on(a.Events.DESTROYING,i._stopMuxMonitor)},ew=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},eS=function(e,t){if(!e||!e.requestEndDate)return{};var i,a=eu(e.url),r=e.url,n=e.bytesLoaded,s=new Date(e.requestStartDate).getTime(),o=new Date(e.firstByteDate).getTime(),l=new Date(e.requestEndDate).getTime(),d=isNaN(e.duration)?0:e.duration,u="function"==typeof t.getMetricsFor?t.getMetricsFor(e.mediaType).HttpList:t.getDashMetrics().getHttpRequests(e.mediaType);u.length>0&&(i=eg(u[u.length-1]._responseHeaders||""));var c=i?ey(i):void 0;return{requestStart:s,requestResponseStart:o,requestResponseEnd:l,requestBytesLoaded:n,requestResponseHeaders:i,requestMediaDuration:d,requestHostname:a,requestUrl:r,requestId:c}},eI=function(e,t){var i=t.getQualityFor(e),a=t.getCurrentTrackFor(e).bitrateList;return a?{currentLevel:i,renditionWidth:a[i].width||null,renditionHeight:a[i].height||null,renditionBitrate:a[i].bandwidth}:{}},eC=function(e){var t;return null===(t=e.match(/.*codecs\*?="(.*)"/))||void 0===t?void 0:t[1]},eR=function(e){try{var t,i;return null===(i=e.getVersion)||void 0===i||null===(t=i.call(e))||void 0===t?void 0:t.split(".").map(function(e){return parseInt(e)})[0]}catch(e){return!1}},eL=function(e,t,i){arguments.length>3&&void 0!==arguments[3]&&arguments[3];var a=e.log;if(!i||!i.on){a.warn("Invalid dash.js player reference. Monitoring blocked.");return}var r=eR(i),n=function(i,a){return e.emit(t,i,a)},s=function(e){var t=e.type,i=(e.data||{}).url;n("requestcompleted",{request_event_type:t,request_start:0,request_response_start:0,request_response_end:0,request_bytes_loaded:-1,request_type:"manifest",request_hostname:eu(i),request_url:i})};i.on("manifestLoaded",s);var o={},l=function(e){if("function"!=typeof e.getRequests)return null;var t=e.getRequests({state:"executed"});return 0===t.length?null:t[t.length-1]},d=function(e){var t=e.type,a=e.chunk,r=e.request,s=(a||{}).mediaInfo||{},l=s.type,d=s.bitrateList,u={};(d=d||[]).forEach(function(e,t){u[t]={},u[t].width=e.width,u[t].height=e.height,u[t].bitrate=e.bandwidth,u[t].attrs={}}),"video"===l?o.video=u:"audio"===l?o.audio=u:o.media=u;var c=eS(r,i),h=c.requestStart,m=c.requestResponseStart,p=c.requestResponseEnd,v=c.requestResponseHeaders,b=c.requestMediaDuration,f=c.requestHostname,E=c.requestUrl;n("requestcompleted",{request_event_type:t,request_start:h,request_response_start:m,request_response_end:p,request_bytes_loaded:-1,request_type:l+"_init",request_response_headers:v,request_hostname:f,request_id:c.requestId,request_url:E,request_media_duration:b,request_rendition_lists:o})};r>=4?i.on("initFragmentLoaded",d):i.on("initFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;d({type:t,request:l(i),chunk:a})});var u=function(e){var t=e.type,a=e.chunk,r=e.request,s=a||{},o=s.mediaInfo,l=s.start,d=(o||{}).type,u=eS(r,i),c=u.requestStart,h=u.requestResponseStart,m=u.requestResponseEnd,p=u.requestBytesLoaded,v=u.requestResponseHeaders,b=u.requestMediaDuration,f=u.requestHostname,E=u.requestUrl,g=u.requestId,y=eI(d,i),_=y.currentLevel,A=y.renditionWidth,k=y.renditionHeight;n("requestcompleted",{request_event_type:t,request_start:c,request_response_start:h,request_response_end:m,request_bytes_loaded:p,request_type:d,request_response_headers:v,request_hostname:f,request_id:g,request_url:E,request_media_start_time:l,request_media_duration:b,request_current_level:_,request_labeled_bitrate:y.renditionBitrate,request_video_width:A,request_video_height:k})};r>=4?i.on("mediaFragmentLoaded",u):i.on("mediaFragmentLoaded",function(e){var t=e.type,i=e.fragmentModel,a=e.chunk;u({type:t,request:l(i),chunk:a})});var c={video:void 0,audio:void 0,totalBitrate:void 0},h=function(){if(c.video&&"number"==typeof c.video.bitrate){if(!(c.video.width&&c.video.height)){a.warn("have bitrate info for video but missing width/height");return}var e=c.video.bitrate;if(c.audio&&"number"==typeof c.audio.bitrate&&(e+=c.audio.bitrate),e!==c.totalBitrate)return c.totalBitrate=e,{video_source_bitrate:e,video_source_height:c.video.height,video_source_width:c.video.width,video_source_codec:eC(c.video.codec)}}},m=function(e,t,r){if("number"!=typeof e.newQuality){a.warn("missing evt.newQuality in qualityChangeRendered event",e);return}var s=e.mediaType;if("audio"===s||"video"===s){var o=i.getBitrateInfoListFor(s).find(function(t){return t.qualityIndex===e.newQuality});if(!(o&&"number"==typeof o.bitrate)){a.warn("missing bitrate info for ".concat(s));return}c[s]=eb(ev({},o),{codec:i.getCurrentTrackFor(s).codec});var l=h();l&&n("renditionchange",l)}};i.on("qualityChangeRendered",m);var p=function(e){var t=e.request,i=e.mediaType;n("requestcanceled",{request_event_type:(t=t||{}).type+"_"+t.action,request_url:t.url,request_type:i,request_hostname:eu(t.url)})};i.on("fragmentLoadingAbandoned",p);var v=function(e){var t,i,a=e.error,r=(null==a||null===(t=a.data)||void 0===t?void 0:t.request)||{},s=(null==a||null===(i=a.data)||void 0===i?void 0:i.response)||{};(null==a?void 0:a.code)===27&&n("requestfailed",{request_error:r.type+"_"+r.action,request_url:r.url,request_hostname:eu(r.url),request_type:r.mediaType,request_error_code:s.status,request_error_text:s.statusText});var o="".concat(null!=r&&r.url?"url: ".concat(r.url,"\n"):"")+"".concat(null!=s&&s.status||null!=s&&s.statusText?"response: ".concat(null==s?void 0:s.status,", ").concat(null==s?void 0:s.statusText,"\n"):"");n("error",{player_error_code:null==a?void 0:a.code,player_error_message:null==a?void 0:a.message,player_error_context:o})};i.on("error",v),i._stopMuxMonitor=function(){i.off("manifestLoaded",s),i.off("initFragmentLoaded",d),i.off("mediaFragmentLoaded",u),i.off("qualityChangeRendered",m),i.off("error",v),i.off("fragmentLoadingAbandoned",p),delete i._stopMuxMonitor}},eD=function(e){e&&"function"==typeof e._stopMuxMonitor&&e._stopMuxMonitor()},ex=0,eM=function(){function e(){er(this,e),eo(this,"_listeners",void 0)}return es(e,[{key:"on",value:function(e,t,i){return t._eventEmitterGuid=t._eventEmitterGuid||++ex,this._listeners=this._listeners||{},this._listeners[e]=this._listeners[e]||[],i&&(t=t.bind(i)),this._listeners[e].push(t),t}},{key:"off",value:function(e,t){var i=this._listeners&&this._listeners[e];i&&i.forEach(function(e,a){e._eventEmitterGuid===t._eventEmitterGuid&&i.splice(a,1)})}},{key:"one",value:function(e,t,i){var a=this;t._eventEmitterGuid=t._eventEmitterGuid||++ex;var r=function(){a.off(e,r),t.apply(i||this,arguments)};r._eventEmitterGuid=t._eventEmitterGuid,this.on(e,r)}},{key:"emit",value:function(e,t){var i=this;if(this._listeners){t=t||{};var a=this._listeners["before*"]||[],r=this._listeners[e]||[],n=this._listeners["after"+e]||[],s=function(t,a){(t=t.slice()).forEach(function(t){t.call(i,{type:e},a)})};s(a,t),s(r,t),s(n,t)}}}]),e}(),eO=_(A()),eN=function(){function e(t){var i=this;er(this,e),eo(this,"_playbackHeartbeatInterval",void 0),eo(this,"_playheadShouldBeProgressing",void 0),eo(this,"pm",void 0),this.pm=t,this._playbackHeartbeatInterval=null,this._playheadShouldBeProgressing=!1,t.on("playing",function(){i._playheadShouldBeProgressing=!0}),t.on("play",this._startPlaybackHeartbeatInterval.bind(this)),t.on("playing",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adbreakstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplay",this._startPlaybackHeartbeatInterval.bind(this)),t.on("adplaying",this._startPlaybackHeartbeatInterval.bind(this)),t.on("devicewake",this._startPlaybackHeartbeatInterval.bind(this)),t.on("viewstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("rebufferstart",this._startPlaybackHeartbeatInterval.bind(this)),t.on("pause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("ended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("viewend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("error",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("aderror",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adpause",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adended",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("adbreakend",this._stopPlaybackHeartbeatInterval.bind(this)),t.on("seeked",function(){t.data.player_is_paused?i._stopPlaybackHeartbeatInterval():i._startPlaybackHeartbeatInterval()}),t.on("timeupdate",function(){null!==i._playbackHeartbeatInterval&&t.emit("playbackheartbeat")}),t.on("devicesleep",function(e,a){null!==i._playbackHeartbeatInterval&&(eO.default.clearInterval(i._playbackHeartbeatInterval),t.emit("playbackheartbeatend",{viewer_time:a.viewer_time}),i._playbackHeartbeatInterval=null)})}return es(e,[{key:"_startPlaybackHeartbeatInterval",value:function(){var e=this;null===this._playbackHeartbeatInterval&&(this.pm.emit("playbackheartbeat"),this._playbackHeartbeatInterval=eO.default.setInterval(function(){e.pm.emit("playbackheartbeat")},this.pm.playbackHeartbeatTime))}},{key:"_stopPlaybackHeartbeatInterval",value:function(){this._playheadShouldBeProgressing=!1,null!==this._playbackHeartbeatInterval&&(eO.default.clearInterval(this._playbackHeartbeatInterval),this.pm.emit("playbackheartbeatend"),this._playbackHeartbeatInterval=null)}}]),e}(),eP=function e(t){var i=this;er(this,e),eo(this,"viewErrored",void 0),t.on("viewinit",function(){i.viewErrored=!1}),t.on("error",function(e,a){try{var r=t.errorTranslator({player_error_code:a.player_error_code,player_error_message:a.player_error_message,player_error_context:a.player_error_context,player_error_severity:a.player_error_severity,player_error_business_exception:a.player_error_business_exception});r&&(t.data.player_error_code=r.player_error_code||a.player_error_code,t.data.player_error_message=r.player_error_message||a.player_error_message,t.data.player_error_context=r.player_error_context||a.player_error_context,t.data.player_error_severity=r.player_error_severity||a.player_error_severity,t.data.player_error_business_exception=r.player_error_business_exception||a.player_error_business_exception,i.viewErrored=!0)}catch(e){t.mux.log.warn("Exception in error translator callback.",e),i.viewErrored=!0}}),t.on("aftererror",function(){var e,i,a,r,n;null===(e=t.data)||void 0===e||delete e.player_error_code,null===(i=t.data)||void 0===i||delete i.player_error_message,null===(a=t.data)||void 0===a||delete a.player_error_context,null===(r=t.data)||void 0===r||delete r.player_error_severity,null===(n=t.data)||void 0===n||delete n.player_error_business_exception})},eU=function(){function e(t){er(this,e),eo(this,"_watchTimeTrackerLastCheckedTime",void 0),eo(this,"pm",void 0),this.pm=t,this._watchTimeTrackerLastCheckedTime=null,t.on("playbackheartbeat",this._updateWatchTime.bind(this)),t.on("playbackheartbeatend",this._clearWatchTimeState.bind(this))}return es(e,[{key:"_updateWatchTime",value:function(e,t){var i=t.viewer_time;null===this._watchTimeTrackerLastCheckedTime&&(this._watchTimeTrackerLastCheckedTime=i),ep(this.pm.data,"view_watch_time",i-this._watchTimeTrackerLastCheckedTime),this._watchTimeTrackerLastCheckedTime=i}},{key:"_clearWatchTimeState",value:function(e,t){this._updateWatchTime(e,t),this._watchTimeTrackerLastCheckedTime=null}}]),e}(),eB=function(){function e(t){var i=this;er(this,e),eo(this,"_playbackTimeTrackerLastPlayheadPosition",void 0),eo(this,"_lastTime",void 0),eo(this,"_isAdPlaying",void 0),eo(this,"_callbackUpdatePlaybackTime",void 0),eo(this,"pm",void 0),this.pm=t,this._playbackTimeTrackerLastPlayheadPosition=-1,this._lastTime=ei.now(),this._isAdPlaying=!1,this._callbackUpdatePlaybackTime=null;var a=this._startPlaybackTimeTracking.bind(this);t.on("playing",a),t.on("adplaying",a),t.on("seeked",a);var r=this._stopPlaybackTimeTracking.bind(this);t.on("playbackheartbeatend",r),t.on("seeking",r),t.on("adplaying",function(){i._isAdPlaying=!0}),t.on("adended",function(){i._isAdPlaying=!1}),t.on("adpause",function(){i._isAdPlaying=!1}),t.on("adbreakstart",function(){i._isAdPlaying=!1}),t.on("adbreakend",function(){i._isAdPlaying=!1}),t.on("adplay",function(){i._isAdPlaying=!1}),t.on("viewinit",function(){i._playbackTimeTrackerLastPlayheadPosition=-1,i._lastTime=ei.now(),i._isAdPlaying=!1,i._callbackUpdatePlaybackTime=null})}return es(e,[{key:"_startPlaybackTimeTracking",value:function(){null===this._callbackUpdatePlaybackTime&&(this._callbackUpdatePlaybackTime=this._updatePlaybackTime.bind(this),this._playbackTimeTrackerLastPlayheadPosition=this.pm.data.player_playhead_time,this.pm.on("playbackheartbeat",this._callbackUpdatePlaybackTime))}},{key:"_stopPlaybackTimeTracking",value:function(){this._callbackUpdatePlaybackTime&&(this._updatePlaybackTime(),this.pm.off("playbackheartbeat",this._callbackUpdatePlaybackTime),this._callbackUpdatePlaybackTime=null,this._playbackTimeTrackerLastPlayheadPosition=-1)}},{key:"_updatePlaybackTime",value:function(){var e=this.pm.data.player_playhead_time,t=ei.now(),i=-1;this._playbackTimeTrackerLastPlayheadPosition>=0&&e>this._playbackTimeTrackerLastPlayheadPosition?i=e-this._playbackTimeTrackerLastPlayheadPosition:this._isAdPlaying&&(i=t-this._lastTime),i>0&&i<=1e3&&ep(this.pm.data,"view_content_playback_time",i),this._playbackTimeTrackerLastPlayheadPosition=e,this._lastTime=t}}]),e}(),eW=function(){function e(t){er(this,e),eo(this,"pm",void 0),this.pm=t;var i=this._updatePlayheadTime.bind(this);t.on("playbackheartbeat",i),t.on("playbackheartbeatend",i),t.on("timeupdate",i),t.on("destroy",function(){t.off("timeupdate",i)})}return es(e,[{key:"_updateMaxPlayheadPosition",value:function(){this.pm.data.view_max_playhead_position=void 0===this.pm.data.view_max_playhead_position?this.pm.data.player_playhead_time:Math.max(this.pm.data.view_max_playhead_position,this.pm.data.player_playhead_time)}},{key:"_updatePlayheadTime",value:function(e,t){var i=this,a=function(){i.pm.currentFragmentPDT&&i.pm.currentFragmentStart&&(i.pm.data.player_program_time=i.pm.currentFragmentPDT+i.pm.data.player_playhead_time-i.pm.currentFragmentStart)};if(t&&t.player_playhead_time)this.pm.data.player_playhead_time=t.player_playhead_time,a(),this._updateMaxPlayheadPosition();else if(this.pm.getPlayheadTime){var r=this.pm.getPlayheadTime();void 0!==r&&(this.pm.data.player_playhead_time=r,a(),this._updateMaxPlayheadPosition())}}}]),e}(),eH=function e(t){if(er(this,e),!t.disableRebufferTracking){var i,a=function(e,t){r(t),i=void 0},r=function(e){if(i){var a=e.viewer_time-i;ep(t.data,"view_rebuffer_duration",a),i=e.viewer_time,t.data.view_rebuffer_duration>3e5&&(t.emit("viewend"),t.send("viewend"),t.mux.log.warn("Ending view after rebuffering for longer than ".concat(3e5,"ms, future events will be ignored unless a programchange or videochange occurs.")))}t.data.view_watch_time>=0&&t.data.view_rebuffer_count>0&&(t.data.view_rebuffer_frequency=t.data.view_rebuffer_count/t.data.view_watch_time,t.data.view_rebuffer_percentage=t.data.view_rebuffer_duration/t.data.view_watch_time)};t.on("playbackheartbeat",function(e,t){return r(t)}),t.on("rebufferstart",function(e,r){i||(ep(t.data,"view_rebuffer_count",1),i=r.viewer_time,t.one("rebufferend",a))}),t.on("viewinit",function(){i=void 0,t.off("rebufferend",a)})}},eV=function(){function e(t){var i=this;er(this,e),eo(this,"_lastCheckedTime",void 0),eo(this,"_lastPlayheadTime",void 0),eo(this,"_lastPlayheadTimeUpdatedTime",void 0),eo(this,"_rebuffering",void 0),eo(this,"pm",void 0),this.pm=t,t.disableRebufferTracking||t.disablePlayheadRebufferTracking||(this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null,t.on("playbackheartbeat",this._checkIfRebuffering.bind(this)),t.on("playbackheartbeatend",this._cleanupRebufferTracker.bind(this)),t.on("seeking",function(){i._cleanupRebufferTracker(null,{viewer_time:ei.now()})}))}return es(e,[{key:"_checkIfRebuffering",value:function(e,t){if(this.pm.seekingTracker.isSeeking||this.pm.adTracker.isAdBreak||!this.pm.playbackHeartbeat._playheadShouldBeProgressing){this._cleanupRebufferTracker(e,t);return}if(null===this._lastCheckedTime){this._prepareRebufferTrackerState(t.viewer_time);return}if(this._lastPlayheadTime!==this.pm.data.player_playhead_time){this._cleanupRebufferTracker(e,t,!0);return}var i=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.sustainedRebufferThreshold&&i>=this.pm.sustainedRebufferThreshold&&(this._rebuffering||(this._rebuffering=!0,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}))),this._lastCheckedTime=t.viewer_time}},{key:"_clearRebufferTrackerState",value:function(){this._lastCheckedTime=null,this._lastPlayheadTime=null,this._lastPlayheadTimeUpdatedTime=null}},{key:"_prepareRebufferTrackerState",value:function(e){this._lastCheckedTime=e,this._lastPlayheadTime=this.pm.data.player_playhead_time,this._lastPlayheadTimeUpdatedTime=e}},{key:"_cleanupRebufferTracker",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this._rebuffering)this._rebuffering=!1,this.pm.emit("rebufferend",{viewer_time:t.viewer_time});else{if(null===this._lastCheckedTime)return;var a=this.pm.data.player_playhead_time-this._lastPlayheadTime,r=t.viewer_time-this._lastPlayheadTimeUpdatedTime;"number"==typeof this.pm.minimumRebufferDuration&&a>0&&r-a>this.pm.minimumRebufferDuration&&(this._lastCheckedTime=null,this.pm.emit("rebufferstart",{viewer_time:this._lastPlayheadTimeUpdatedTime}),this.pm.emit("rebufferend",{viewer_time:this._lastPlayheadTimeUpdatedTime+r-a}))}i?this._prepareRebufferTrackerState(t.viewer_time):this._clearRebufferTrackerState()}}]),e}(),eq=function(){function e(t){var i=this;er(this,e),eo(this,"NAVIGATION_START",void 0),eo(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){var e=t.data,a=e.view_id;if(!e.view_program_changed){var r=function(e,r){var n=r.viewer_time;"playing"===e.type&&void 0===t.data.view_time_to_first_frame?i.calculateTimeToFirstFrame(n||ei.now(),a):"adplaying"===e.type&&(void 0===t.data.view_time_to_first_frame||i._inPrerollPosition())&&i.calculateTimeToFirstFrame(n||ei.now(),a)};t.one("playing",r),t.one("adplaying",r),t.one("viewend",function(){t.off("playing",r),t.off("adplaying",r)})}})}return es(e,[{key:"_inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"calculateTimeToFirstFrame",value:function(e,t){t===this.pm.data.view_id&&(this.pm.watchTimeTracker._updateWatchTime(null,{viewer_time:e}),this.pm.data.view_time_to_first_frame=this.pm.data.view_watch_time,(this.pm.data.player_autoplay_on||this.pm.data.video_is_autoplay)&&this.NAVIGATION_START&&(this.pm.data.view_aggregate_startup_time=this.pm.data.view_start+this.pm.data.view_watch_time-this.NAVIGATION_START))}}]),e}(),eF=function e(t){var i=this;er(this,e),eo(this,"_lastPlayerHeight",void 0),eo(this,"_lastPlayerWidth",void 0),eo(this,"_lastPlayheadPosition",void 0),eo(this,"_lastSourceHeight",void 0),eo(this,"_lastSourceWidth",void 0),t.on("viewinit",function(){i._lastPlayheadPosition=-1}),["pause","rebufferstart","seeking","error","adbreakstart","hb"].forEach(function(e){t.on(e,function(){if(i._lastPlayheadPosition>=0&&t.data.player_playhead_time>=0&&i._lastPlayerWidth>=0&&i._lastSourceWidth>0&&i._lastPlayerHeight>=0&&i._lastSourceHeight>0){var e=t.data.player_playhead_time-i._lastPlayheadPosition;if(e<0){i._lastPlayheadPosition=-1;return}var a=Math.min(i._lastPlayerWidth/i._lastSourceWidth,i._lastPlayerHeight/i._lastSourceHeight),r=Math.max(0,a-1),n=Math.max(0,1-a);t.data.view_max_upscale_percentage=Math.max(t.data.view_max_upscale_percentage||0,r),t.data.view_max_downscale_percentage=Math.max(t.data.view_max_downscale_percentage||0,n),ep(t.data,"view_total_content_playback_time",e),ep(t.data,"view_total_upscaling",r*e),ep(t.data,"view_total_downscaling",n*e)}i._lastPlayheadPosition=-1})}),["playing","hb"].forEach(function(e){t.on(e,function(){i._lastPlayheadPosition=t.data.player_playhead_time,i._lastPlayerWidth=t.data.player_width,i._lastPlayerHeight=t.data.player_height,i._lastSourceWidth=t.data.video_source_width,i._lastSourceHeight=t.data.video_source_height})})},e$=function e(t){var i=this;er(this,e),eo(this,"isSeeking",void 0),this.isSeeking=!1;var a=-1,r=function(){var e=ei.now(),r=(t.data.viewer_time||e)-(a||e);ep(t.data,"view_seek_duration",r),t.data.view_max_seek_time=Math.max(t.data.view_max_seek_time||0,r),i.isSeeking=!1,a=-1};t.on("seeking",function(e,n){if(Object.assign(t.data,n),i.isSeeking&&n.viewer_time-a<=2e3){a=n.viewer_time;return}i.isSeeking&&r(),i.isSeeking=!0,a=n.viewer_time,ep(t.data,"view_seek_count",1),t.send("seeking")}),t.on("seeked",function(){r()}),t.on("viewend",function(){i.isSeeking&&(r(),t.send("seeked")),i.isSeeking=!1,a=-1})},ej=function(e,t){e.push(t),e.sort(function(e,t){return e.viewer_time-t.viewer_time})},eK=["adbreakstart","adrequest","adresponse","adplay","adplaying","adpause","adended","adbreakend","aderror","adclicked","adskipped"],eY=function(){function e(t){var i=this;er(this,e),eo(this,"_adHasPlayed",void 0),eo(this,"_adRequests",void 0),eo(this,"_adResponses",void 0),eo(this,"_currentAdRequestNumber",void 0),eo(this,"_currentAdResponseNumber",void 0),eo(this,"_prerollPlayTime",void 0),eo(this,"_wouldBeNewAdPlay",void 0),eo(this,"isAdBreak",void 0),eo(this,"pm",void 0),this.pm=t,t.on("viewinit",function(){i.isAdBreak=!1,i._currentAdRequestNumber=0,i._currentAdResponseNumber=0,i._adRequests=[],i._adResponses=[],i._adHasPlayed=!1,i._wouldBeNewAdPlay=!0,i._prerollPlayTime=void 0}),eK.forEach(function(e){return t.on(e,i._updateAdData.bind(i))});var a=function(){i.isAdBreak=!1};t.on("adbreakstart",function(){i.isAdBreak=!0}),t.on("play",a),t.on("playing",a),t.on("viewend",a),t.on("adrequest",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdRequestNumber++},a),ej(i._adRequests,a),ep(t.data,"view_ad_request_count"),i.inPrerollPosition()&&(t.data.view_preroll_requested=!0,i._adHasPlayed||ep(t.data,"view_preroll_request_count"))}),t.on("adresponse",function(e,a){a=Object.assign({ad_request_id:"generatedAdRequestId"+i._currentAdResponseNumber++},a),ej(i._adResponses,a);var r=i.findAdRequest(a.ad_request_id);r&&ep(t.data,"view_ad_request_time",Math.max(0,a.viewer_time-r.viewer_time))}),t.on("adplay",function(e,a){i._adHasPlayed=!0,i._wouldBeNewAdPlay&&(i._wouldBeNewAdPlay=!1,ep(t.data,"view_ad_played_count")),i.inPrerollPosition()&&!t.data.view_preroll_played&&(t.data.view_preroll_played=!0,i._adRequests.length>0&&(t.data.view_preroll_request_time=Math.max(0,a.viewer_time-i._adRequests[0].viewer_time)),t.data.view_start&&(t.data.view_startup_preroll_request_time=Math.max(0,a.viewer_time-t.data.view_start)),i._prerollPlayTime=a.viewer_time)}),t.on("adplaying",function(e,a){i.inPrerollPosition()&&void 0===t.data.view_preroll_load_time&&void 0!==i._prerollPlayTime&&(t.data.view_preroll_load_time=a.viewer_time-i._prerollPlayTime,t.data.view_startup_preroll_load_time=a.viewer_time-i._prerollPlayTime)}),t.on("adclicked",function(e,a){i._wouldBeNewAdPlay||ep(t.data,"view_ad_clicked_count")}),t.on("adskipped",function(e,a){i._wouldBeNewAdPlay||ep(t.data,"view_ad_skipped_count")}),t.on("adended",function(){i._wouldBeNewAdPlay=!0}),t.on("aderror",function(){i._wouldBeNewAdPlay=!0})}return es(e,[{key:"inPrerollPosition",value:function(){return void 0===this.pm.data.view_content_playback_time||this.pm.data.view_content_playback_time<=1e3}},{key:"findAdRequest",value:function(e){for(var t=0;t<this._adRequests.length;t++)if(this._adRequests[t].ad_request_id===e)return this._adRequests[t]}},{key:"_updateAdData",value:function(e,t){if(this.inPrerollPosition()){if(!this.pm.data.view_preroll_ad_tag_hostname&&t.ad_tag_url){var i=$(ec(t.ad_tag_url),2),a=i[0],r=i[1];this.pm.data.view_preroll_ad_tag_domain=r,this.pm.data.view_preroll_ad_tag_hostname=a}if(!this.pm.data.view_preroll_ad_asset_hostname&&t.ad_asset_url){var n=$(ec(t.ad_asset_url),2),s=n[0],o=n[1];this.pm.data.view_preroll_ad_asset_domain=o,this.pm.data.view_preroll_ad_asset_hostname=s}}this.pm.data.ad_asset_url=null==t?void 0:t.ad_asset_url,this.pm.data.ad_tag_url=null==t?void 0:t.ad_tag_url,this.pm.data.ad_creative_id=null==t?void 0:t.ad_creative_id,this.pm.data.ad_id=null==t?void 0:t.ad_id,this.pm.data.ad_universal_id=null==t?void 0:t.ad_universal_id}}]),e}(),eG=_(A()),eZ=function e(t){er(this,e);var i,a,r=function(){t.disableRebufferTracking||(ep(t.data,"view_waiting_rebuffer_count",1),i=ei.now(),a=eG.default.setInterval(function(){if(i){var e=ei.now();ep(t.data,"view_waiting_rebuffer_duration",e-i),i=e}},250))},n=function(){t.disableRebufferTracking||i&&(ep(t.data,"view_waiting_rebuffer_duration",ei.now()-i),i=!1,eG.default.clearInterval(a))},s=!1,o=function(){s=!0},l=function(){s=!1,n()};t.on("waiting",function(){s&&r()}),t.on("playing",function(){n(),o()}),t.on("pause",l),t.on("seeking",l)},eQ=function e(t){var i=this;er(this,e),eo(this,"lastWallClockTime",void 0);var a=function(){i.lastWallClockTime=ei.now(),t.on("before*",r)},r=function(e){var a=ei.now(),r=i.lastWallClockTime;i.lastWallClockTime=a,a-r>3e4&&(t.emit("devicesleep",{viewer_time:r}),Object.assign(t.data,{viewer_time:r}),t.send("devicesleep"),t.emit("devicewake",{viewer_time:a}),Object.assign(t.data,{viewer_time:a}),t.send("devicewake"))};t.one("playbackheartbeat",a),t.on("playbackheartbeatend",function(){t.off("before*",r),t.one("playbackheartbeat",a)})},ez=_(A()),eX=_(C()),eJ=_(R()),e0="muxData",e1=function(){var e;try{e=eX.default.parse(eJ.default.get(e0)||"")}catch(t){e={}}return e},e2=function(e){try{eJ.default.set(e0,eX.default.stringify(e),{expires:365})}catch(e){}},e3=function(){var e=e1();return e.mux_viewer_id=e.mux_viewer_id||K(),e.msn=e.msn||Math.random(),e2(e),{mux_viewer_id:e.mux_viewer_id,mux_sample_number:e.msn}},e5=function(){var e=e1(),t=ei.now();return e.session_start&&(e.sst=e.session_start,delete e.session_start),e.session_id&&(e.sid=e.session_id,delete e.session_id),e.session_expires&&(e.sex=e.session_expires,delete e.session_expires),(!e.sex||e.sex<t)&&(e.sid=K(),e.sst=t),e.sex=t+15e5,e2(e),{session_id:e.sid,session_start:e.sst,session_expires:e.sex}},e4=_(A()),e9=function(){var e;switch(e8()){case"cellular":e="cellular";break;case"ethernet":e="wired";break;case"wifi":e="wifi";break;case void 0:break;default:e="other"}return e},e8=function(){var e=e4.default.navigator,t=e&&(e.connection||e.mozConnection||e.webkitConnection);return t&&t.type};e9.getConnectionFromAPI=e8;var e7=te({a:"env",b:"beacon",c:"custom",d:"ad",e:"event",f:"experiment",i:"internal",m:"mux",n:"response",p:"player",q:"request",r:"retry",s:"session",t:"timestamp",u:"viewer",v:"video",w:"page",x:"view",y:"sub"}),e6=te({ad:"ad",ag:"aggregate",ap:"api",al:"application",ar:"architecture",as:"asset",au:"autoplay",av:"average",bi:"bitrate",br:"break",bw:"browser",by:"bytes",bz:"business",ca:"cached",cb:"cancel",cc:"codec",cd:"code",cg:"category",ch:"changed",ck:"clicked",cl:"canceled",cn:"config",co:"count",ce:"counter",cp:"complete",cr:"creative",ct:"content",cu:"current",cx:"connection",cz:"context",dg:"downscaling",dm:"domain",dn:"cdn",do:"downscale",dr:"drm",dp:"dropped",du:"duration",dv:"device",ec:"encoding",ed:"edge",en:"end",eg:"engine",em:"embed",er:"error",ep:"experiments",es:"errorcode",et:"errortext",ee:"event",ev:"events",ex:"expires",ez:"exception",fa:"failed",fi:"first",fm:"family",ft:"format",fp:"fps",fq:"frequency",fr:"frame",fs:"fullscreen",ha:"has",hb:"holdback",he:"headers",ho:"host",hn:"hostname",ht:"height",id:"id",ii:"init",in:"instance",ip:"ip",is:"is",ke:"key",la:"language",lb:"labeled",le:"level",li:"live",ld:"loaded",lo:"load",ls:"lists",lt:"latency",ma:"max",md:"media",me:"message",mf:"manifest",mi:"mime",ml:"midroll",mm:"min",mn:"manufacturer",mo:"model",mx:"mux",ne:"newest",nm:"name",no:"number",on:"on",os:"os",pa:"paused",pb:"playback",pd:"producer",pe:"percentage",pf:"played",pg:"program",ph:"playhead",pi:"plugin",pl:"preroll",pn:"playing",po:"poster",pr:"preload",ps:"position",pt:"part",py:"property",ra:"rate",rd:"requested",re:"rebuffer",rf:"rendition",rm:"remote",ro:"ratio",rp:"response",rq:"request",rs:"requests",sa:"sample",sd:"skipped",se:"session",sk:"seek",sm:"stream",so:"source",sq:"sequence",sr:"series",st:"start",su:"startup",sv:"server",sw:"software",sy:"severity",ta:"tag",tc:"tech",te:"text",tg:"target",th:"throughput",ti:"time",tl:"total",to:"to",tt:"title",ty:"type",ug:"upscaling",un:"universal",up:"upscale",ur:"url",us:"user",va:"variant",vd:"viewed",vi:"video",ve:"version",vw:"view",vr:"viewer",wd:"width",wa:"watch",wt:"waiting"});function te(e){var t={};for(var i in e)e.hasOwnProperty(i)&&(t[e[i]]=i);return t}function tt(e){var t={},i={};return Object.keys(e).forEach(function(a){var r=!1;if(e.hasOwnProperty(a)&&void 0!==e[a]){var n=a.split("_"),s=n[0],o=e7[s];o||(X.info("Data key word `"+n[0]+"` not expected in "+a),o=s+"_"),n.splice(1).forEach(function(e){"url"===e&&(r=!0),e6[e]?o+=e6[e]:Number(e)&&Math.floor(Number(e))===Number(e)?o+=e:(X.info("Data key word `"+e+"` not expected in "+a),o+="_"+e+"_")}),r?i[o]=e[a]:t[o]=e[a]}}),Object.assign(t,i)}var ti=_(A()),ta={maxBeaconSize:300,maxQueueLength:3600,baseTimeBetweenBeacons:1e4,maxPayloadKBSize:500},tr=["hb","requestcompleted","requestfailed","requestcanceled"],tn=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._beaconUrl=e||"https://img.litix.io",this._eventQueue=[],this._postInFlight=!1,this._failureCount=0,this._sendTimeout=!1,this._options=Object.assign({},ta,t)};tn.prototype.queueEvent=function(e,t){var i=Object.assign({},t);return(this._eventQueue.length<=this._options.maxQueueLength||"eventrateexceeded"===e)&&(this._eventQueue.push(i),this._sendTimeout||this._startBeaconSending(),this._eventQueue.length<=this._options.maxQueueLength)},tn.prototype.flushEvents=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&1===this._eventQueue.length){this._eventQueue.pop();return}this._eventQueue.length&&this._sendBeaconQueue(),this._startBeaconSending()},tn.prototype.destroy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.destroyed=!0,e?this._clearBeaconQueue():this.flushEvents(),ti.default.clearTimeout(this._sendTimeout)},tn.prototype._clearBeaconQueue=function(){var e=this._eventQueue.length>this._options.maxBeaconSize?this._eventQueue.length-this._options.maxBeaconSize:0,t=this._eventQueue.slice(e);e>0&&Object.assign(t[t.length-1],tt({mux_view_message:"event queue truncated"}));var i=this._createPayload(t);ts(this._beaconUrl,i,!0,function(){})},tn.prototype._sendBeaconQueue=function(){var e=this;if(!this._postInFlight){var t=this._eventQueue.slice(0,this._options.maxBeaconSize);this._eventQueue=this._eventQueue.slice(this._options.maxBeaconSize),this._postInFlight=!0;var i=this._createPayload(t),a=ei.now();ts(this._beaconUrl,i,!1,function(i,r){r?(e._eventQueue=t.concat(e._eventQueue),e._failureCount+=1,X.info("Error sending beacon: "+r)):e._failureCount=0,e._roundTripTime=ei.now()-a,e._postInFlight=!1})}},tn.prototype._getNextBeaconTime=function(){if(!this._failureCount)return this._options.baseTimeBetweenBeacons;var e=Math.pow(2,this._failureCount-1);return(1+(e*=Math.random()))*this._options.baseTimeBetweenBeacons},tn.prototype._startBeaconSending=function(){var e=this;ti.default.clearTimeout(this._sendTimeout),this.destroyed||(this._sendTimeout=ti.default.setTimeout(function(){e._eventQueue.length&&e._sendBeaconQueue(),e._startBeaconSending()},this._getNextBeaconTime()))},tn.prototype._createPayload=function(e){var t=this,i={transmission_timestamp:Math.round(ei.now())};this._roundTripTime&&(i.rtt_ms=Math.round(this._roundTripTime));var a,r,n,s=function(){n=(a=JSON.stringify({metadata:i,events:r||e})).length/1024},o=function(){return n<=t._options.maxPayloadKBSize};return s(),o()||(X.info("Payload size is too big ("+n+" kb). Removing unnecessary events."),r=e.filter(function(e){return -1===tr.indexOf(e.e)}),s()),o()||(X.info("Payload size still too big ("+n+" kb). Cropping fields.."),r.forEach(function(e){for(var t in e){var i=e[t];"string"==typeof i&&i.length>51200&&(e[t]=i.substring(0,51200))}}),s()),a};var ts=function(e,t,i,a){if(i&&navigator&&navigator.sendBeacon&&navigator.sendBeacon(e,t)){a();return}if(ti.default.fetch){ti.default.fetch(e,{method:"POST",body:t,headers:{"Content-Type":"text/plain"},keepalive:t.length<=57344}).then(function(e){return a(null,e.ok?null:"Error")}).catch(function(e){return a(null,e)});return}if(ti.default.XMLHttpRequest){var r=new ti.default.XMLHttpRequest;r.onreadystatechange=function(){if(4===r.readyState)return a(null,200!==r.status?"error":void 0)},r.open("POST",e),r.setRequestHeader("Content-Type","text/plain"),r.send(t);return}a()},to=["env_key","view_id","view_sequence_number","player_sequence_number","beacon_domain","player_playhead_time","viewer_time","mux_api_version","event","video_id","player_instance_id","player_error_code","player_error_message","player_error_context","player_error_severity","player_error_business_exception"],tl=["adplay","adplaying","adpause","adfirstquartile","admidpoint","adthirdquartile","adended","adresponse","adrequest"],td=["ad_id","ad_creative_id","ad_universal_id"],tu=["viewstart","error","ended","viewend"],tc=function(){function e(t,i){var a,r,n,s,o,l,d,u,c,h,m,p,v,b,f,E,g,y,_,A=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};er(this,e),eo(this,"mux",void 0),eo(this,"envKey",void 0),eo(this,"options",void 0),eo(this,"eventQueue",void 0),eo(this,"sampleRate",void 0),eo(this,"disableCookies",void 0),eo(this,"respectDoNotTrack",void 0),eo(this,"previousBeaconData",void 0),eo(this,"lastEventTime",void 0),eo(this,"rateLimited",void 0),eo(this,"pageLevelData",void 0),eo(this,"viewerData",void 0),this.mux=t,this.envKey=i,this.options=A,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.eventQueue=new tn((a=this.envKey,n=(r=this.options).beaconCollectionDomain,s=r.beaconDomain,n?"https://"+n:(a=a||"inferred").match(/^[a-z0-9]+$/)?"https://"+a+"."+(s||"litix.io"):"https://img.litix.io/a.gif")),this.sampleRate=null!==(g=this.options.sampleRate)&&void 0!==g?g:1,this.disableCookies=null!==(y=this.options.disableCookies)&&void 0!==y&&y,this.respectDoNotTrack=null!==(_=this.options.respectDoNotTrack)&&void 0!==_&&_,this.previousBeaconData=null,this.lastEventTime=0,this.rateLimited=!1,this.pageLevelData={mux_api_version:this.mux.API_VERSION,mux_embed:this.mux.NAME,mux_embed_version:this.mux.VERSION,viewer_application_name:null===(o=this.options.platform)||void 0===o?void 0:o.name,viewer_application_version:null===(l=this.options.platform)||void 0===l?void 0:l.version,viewer_application_engine:null===(d=this.options.platform)||void 0===d?void 0:d.layout,viewer_device_name:null===(u=this.options.platform)||void 0===u?void 0:u.product,viewer_device_category:"",viewer_device_manufacturer:null===(c=this.options.platform)||void 0===c?void 0:c.manufacturer,viewer_os_family:null===(m=this.options.platform)||void 0===m||null===(h=m.os)||void 0===h?void 0:h.family,viewer_os_architecture:null===(v=this.options.platform)||void 0===v||null===(p=v.os)||void 0===p?void 0:p.architecture,viewer_os_version:null===(f=this.options.platform)||void 0===f||null===(b=f.os)||void 0===b?void 0:b.version,viewer_connection_type:e9(),page_url:null===ez.default||void 0===ez.default||null===(E=ez.default.location)||void 0===E?void 0:E.href},this.viewerData=this.disableCookies?{}:e3()}return es(e,[{key:"send",value:function(e,t){if(!(!e||!(null!=t&&t.view_id))){if(this.respectDoNotTrack&&ee())return X.info("Not sending `"+e+"` because Do Not Track is enabled");if(!t||"object"!=typeof t)return X.error("A data object was expected in send() but was not provided");var i=this.disableCookies?{}:e5(),a=eb(ev({},this.pageLevelData,t,i,this.viewerData),{event:e,env_key:this.envKey});a.user_id&&(a.viewer_user_id=a.user_id,delete a.user_id);var r,n=(null!==(r=a.mux_sample_number)&&void 0!==r?r:0)>=this.sampleRate,s=tt(this._deduplicateBeaconData(e,a));if(this.lastEventTime=this.mux.utils.now(),n)return X.info("Not sending event due to sample rate restriction",e,a,s);if(this.envKey||X.info("Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",e,a,s),!this.rateLimited){if(X.info("Sending event",e,a,s),this.rateLimited=!this.eventQueue.queueEvent(e,s),this.mux.WINDOW_UNLOADING&&"viewend"===e)this.eventQueue.destroy(!0);else if(this.mux.WINDOW_HIDDEN&&"hb"===e?this.eventQueue.flushEvents(!0):tu.indexOf(e)>=0&&this.eventQueue.flushEvents(),this.rateLimited)return a.event="eventrateexceeded",s=tt(a),this.eventQueue.queueEvent(a.event,s),X.error("Beaconing disabled due to rate limit.")}}}},{key:"destroy",value:function(){this.eventQueue.destroy(!1)}},{key:"_deduplicateBeaconData",value:function(e,t){var i=this,a={},r=t.view_id;if("-1"===r||"viewstart"===e||"viewend"===e||!this.previousBeaconData||this.mux.utils.now()-this.lastEventTime>=6e5)a=ev({},t),r&&(this.previousBeaconData=a),r&&"viewend"===e&&(this.previousBeaconData=null);else{var n=0===e.indexOf("request");Object.entries(t).forEach(function(t){var r=$(t,2),s=r[0],o=r[1];i.previousBeaconData&&(o!==i.previousBeaconData[s]||to.indexOf(s)>-1||i.objectHasChanged(n,s,o,i.previousBeaconData[s])||i.eventRequiresKey(e,s))&&(a[s]=o,i.previousBeaconData[s]=o)})}return a}},{key:"objectHasChanged",value:function(e,t,i,a){return!!e&&0===t.indexOf("request_")&&("request_response_headers"===t||"object"!=typeof i||"object"!=typeof a||Object.keys(i||{}).length!==Object.keys(a||{}).length)}},{key:"eventRequiresKey",value:function(e,t){return!!("renditionchange"===e&&0===t.indexOf("video_source_")||td.includes(t)&&tl.includes(e))}}]),e}(),th=function e(t){er(this,e);var i=0,a=0,r=0,n=0,s=0,o=0,l=0;t.on("requestcompleted",function(e,o){var l,d,u=o.request_start,c=o.request_response_start,h=o.request_response_end,m=o.request_bytes_loaded;if(n++,c?(l=c-(null!=u?u:0),d=(null!=h?h:0)-c):d=(null!=h?h:0)-(null!=u?u:0),d>0&&m&&m>0){var p=m/d*8e3;s++,a+=m,r+=d,t.data.view_min_request_throughput=Math.min(t.data.view_min_request_throughput||1/0,p),t.data.view_average_request_throughput=a/r*8e3,t.data.view_request_count=n,l>0&&(i+=l,t.data.view_max_request_latency=Math.max(t.data.view_max_request_latency||0,l),t.data.view_average_request_latency=i/s)}}),t.on("requestfailed",function(e,i){n++,o++,t.data.view_request_count=n,t.data.view_request_failed_count=o}),t.on("requestcanceled",function(e,i){n++,l++,t.data.view_request_count=n,t.data.view_request_canceled_count=l})},tm=function e(t){var i=this;er(this,e),eo(this,"_lastEventTime",void 0),t.on("before*",function(e,a){var r=a.viewer_time,n=ei.now(),s=i._lastEventTime;if(i._lastEventTime=n,s&&n-s>36e5){var o=Object.keys(t.data).reduce(function(e,i){return 0===i.indexOf("video_")?Object.assign(e,eo({},i,t.data[i])):e},{});t.mux.log.info("Received event after at least an hour inactivity, creating a new view"),t.emit("viewinit",Object.assign({viewer_time:r},o)),t.playbackHeartbeat._playheadShouldBeProgressing&&"play"!==e.type&&"adbreakstart"!==e.type&&(t.emit("play",{viewer_time:r}),"playing"!==e.type&&t.emit("playing",{viewer_time:r}))}})},tp=["viewstart","ended","loadstart","pause","play","playing","ratechange","waiting","adplay","adpause","adended","aderror","adplaying","adrequest","adresponse","adbreakstart","adbreakend","adfirstquartile","admidpoint","adthirdquartile","rebufferstart","rebufferend","seeked","error","hb","requestcompleted","requestfailed","requestcanceled","renditionchange"],tv=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&el(e,t)}(a,e);var t,i=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,i=ed(a);return e=t?Reflect.construct(i,arguments,ed(this).constructor):i.apply(this,arguments),e&&("object"===k(e)||"function"==typeof e)?e:ea(this)});function a(e,t,r){er(this,a),eo(ea(n=i.call(this)),"DOM_CONTENT_LOADED_EVENT_END",void 0),eo(ea(n),"NAVIGATION_START",void 0),eo(ea(n),"_destroyed",void 0),eo(ea(n),"_heartBeatTimeout",void 0),eo(ea(n),"adTracker",void 0),eo(ea(n),"dashjs",void 0),eo(ea(n),"data",void 0),eo(ea(n),"disablePlayheadRebufferTracking",void 0),eo(ea(n),"disableRebufferTracking",void 0),eo(ea(n),"errorTracker",void 0),eo(ea(n),"errorTranslator",void 0),eo(ea(n),"getAdData",void 0),eo(ea(n),"getPlayheadTime",void 0),eo(ea(n),"getStateData",void 0),eo(ea(n),"hlsjs",void 0),eo(ea(n),"id",void 0),eo(ea(n),"longResumeTracker",void 0),eo(ea(n),"minimumRebufferDuration",void 0),eo(ea(n),"mux",void 0),eo(ea(n),"oldEmit",void 0),eo(ea(n),"playbackEventDispatcher",void 0),eo(ea(n),"playbackHeartbeat",void 0),eo(ea(n),"playbackHeartbeatTime",void 0),eo(ea(n),"playheadTime",void 0),eo(ea(n),"seekingTracker",void 0),eo(ea(n),"sustainedRebufferThreshold",void 0),eo(ea(n),"watchTimeTracker",void 0),eo(ea(n),"currentFragmentPDT",void 0),eo(ea(n),"currentFragmentStart",void 0),n.DOM_CONTENT_LOADED_EVENT_END=em.domContentLoadedEventEnd(),n.NAVIGATION_START=em.navigationStart(),n.mux=e,n.id=t,null!=r&&r.beaconDomain&&n.mux.log.warn("The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`."),(r=Object.assign({debug:!1,minimumRebufferDuration:250,sustainedRebufferThreshold:1e3,playbackHeartbeatTime:25,beaconDomain:"litix.io",sampleRate:1,disableCookies:!1,respectDoNotTrack:!1,disableRebufferTracking:!1,disablePlayheadRebufferTracking:!1,errorTranslator:function(e){return e}},r)).data=r.data||{},r.data.property_key&&(r.data.env_key=r.data.property_key,delete r.data.property_key),X.setLevel(r.debug?"debug":"warn"),n.getPlayheadTime=r.getPlayheadTime,n.getStateData=r.getStateData||function(){return{}},n.getAdData=r.getAdData||function(){},n.minimumRebufferDuration=r.minimumRebufferDuration,n.sustainedRebufferThreshold=r.sustainedRebufferThreshold,n.playbackHeartbeatTime=r.playbackHeartbeatTime,n.disableRebufferTracking=r.disableRebufferTracking,n.disableRebufferTracking&&n.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."),n.disablePlayheadRebufferTracking=r.disablePlayheadRebufferTracking,n.errorTranslator=r.errorTranslator,n.playbackEventDispatcher=new tc(e,r.data.env_key,r),n.data={player_instance_id:K(),mux_sample_rate:r.sampleRate,beacon_domain:r.beaconCollectionDomain||r.beaconDomain},n.data.view_sequence_number=1,n.data.player_sequence_number=1,n.oldEmit=n.emit,n.emit=function(e,t){t=Object.assign({viewer_time:this.mux.utils.now()},t),this.oldEmit(e,t)};var n,s=(function(){void 0===this.data.view_start&&(this.data.view_start=this.mux.utils.now(),this.emit("viewstart"))}).bind(ea(n));n.on("viewinit",function(e,t){this._resetVideoData(),this._resetViewData(),this._resetErrorData(),this._updateStateData(),Object.assign(this.data,t),this._initializeViewData(),this.one("play",s),this.one("adbreakstart",s)});var o=(function(e){this.emit("viewend"),this.send("viewend"),this.emit("viewinit",e)}).bind(ea(n));if(n.on("videochange",function(e,t){o(t)}),n.on("programchange",function(e,t){this.data.player_is_paused&&this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."),o(Object.assign(t,{view_program_changed:!0})),s(),this.emit("play"),this.emit("playing")}),n.on("fragmentchange",function(e,t){this.currentFragmentPDT=t.currentFragmentPDT,this.currentFragmentStart=t.currentFragmentStart}),n.on("destroy",n.destroy),"undefined"!=typeof window&&"function"==typeof window.addEventListener&&"function"==typeof window.removeEventListener){var l=function(){var e=void 0!==n.data.view_start;n.mux.WINDOW_HIDDEN="hidden"===document.visibilityState,e&&n.mux.WINDOW_HIDDEN&&(n.data.player_is_paused||n.emit("hb"))};window.addEventListener("visibilitychange",l,!1);var d=function(e){e.persisted||n.destroy()};window.addEventListener("pagehide",d,!1),n.on("destroy",function(){window.removeEventListener("visibilitychange",l),window.removeEventListener("pagehide",d)})}return n.on("playerready",function(e,t){Object.assign(this.data,t)}),tp.forEach(function(e){n.on(e,function(t,i){0!==e.indexOf("ad")&&this._updateStateData(),Object.assign(this.data,i),this._sanitizeData()}),n.on("after"+e,function(){("error"!==e||this.errorTracker.viewErrored)&&this.send(e)})}),n.on("viewend",function(e,t){Object.assign(n.data,t)}),n.one("playerready",function(e){var t=this.mux.utils.now();this.data.player_init_time&&(this.data.player_startup_time=t-this.data.player_init_time),!this.mux.PLAYER_TRACKED&&this.NAVIGATION_START&&(this.mux.PLAYER_TRACKED=!0,(this.data.player_init_time||this.DOM_CONTENT_LOADED_EVENT_END)&&(this.data.page_load_time=Math.min(this.data.player_init_time||1/0,this.DOM_CONTENT_LOADED_EVENT_END||1/0)-this.NAVIGATION_START)),this.send("playerready"),delete this.data.player_startup_time,delete this.data.page_load_time}),n.longResumeTracker=new tm(ea(n)),n.errorTracker=new eP(ea(n)),new eQ(ea(n)),n.seekingTracker=new e$(ea(n)),n.playheadTime=new eW(ea(n)),n.playbackHeartbeat=new eN(ea(n)),new eF(ea(n)),n.watchTimeTracker=new eU(ea(n)),new eB(ea(n)),n.adTracker=new eY(ea(n)),new eV(ea(n)),new eH(ea(n)),new eq(ea(n)),new eZ(ea(n)),new th(ea(n)),r.hlsjs&&n.addHLSJS(r),r.dashjs&&n.addDashJS(r),n.emit("viewinit",r.data),n}return es(a,[{key:"destroy",value:function(){this._destroyed||(this._destroyed=!0,void 0!==this.data.view_start&&(this.emit("viewend"),this.send("viewend")),this.playbackEventDispatcher.destroy(),this.removeHLSJS(),this.removeDashJS(),window.clearTimeout(this._heartBeatTimeout))}},{key:"send",value:function(e){if(this.data.view_id){var t=Object.assign({},this.data);if(void 0===t.video_source_is_live&&(t.player_source_duration===1/0||t.video_source_duration===1/0?t.video_source_is_live=!0:(t.player_source_duration>0||t.video_source_duration>0)&&(t.video_source_is_live=!1)),t.video_source_is_live||["player_program_time","player_manifest_newest_program_time","player_live_edge_program_time","player_program_time","video_holdback","video_part_holdback","video_target_duration","video_part_target_duration"].forEach(function(e){t[e]=void 0}),t.video_source_url=t.video_source_url||t.player_source_url,t.video_source_url){var i=$(ec(t.video_source_url),2),a=i[0],r=i[1];t.video_source_domain=r,t.video_source_hostname=a}delete t.ad_request_id,this.playbackEventDispatcher.send(e,t),this.data.view_sequence_number++,this.data.player_sequence_number++,this._restartHeartBeat(),"viewend"===e&&delete this.data.view_id}}},{key:"_updateStateData",value:function(){Object.assign(this.data,this.getStateData()),this.playheadTime._updatePlayheadTime(),this._sanitizeData()}},{key:"_sanitizeData",value:function(){var e=this;["player_width","player_height","video_source_width","video_source_height","player_playhead_time","video_source_bitrate"].forEach(function(t){var i=parseInt(e.data[t],10);e.data[t]=isNaN(i)?void 0:i}),["player_source_url","video_source_url"].forEach(function(t){if(e.data[t]){var i=e.data[t].toLowerCase();(0===i.indexOf("data:")||0===i.indexOf("blob:"))&&(e.data[t]="MSE style URL")}})}},{key:"_resetVideoData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("video_")&&delete e.data[t]})}},{key:"_resetViewData",value:function(){var e=this;Object.keys(this.data).forEach(function(t){0===t.indexOf("view_")&&delete e.data[t]}),this.data.view_sequence_number=1}},{key:"_resetErrorData",value:function(){delete this.data.player_error_code,delete this.data.player_error_message,delete this.data.player_error_context,delete this.data.player_error_severity,delete this.data.player_error_business_exception}},{key:"_initializeViewData",value:function(){var e=this,t=this.data.view_id=K(),i=function(){t===e.data.view_id&&ep(e.data,"player_view_count",1)};this.data.player_is_paused?this.one("play",i):i()}},{key:"_restartHeartBeat",value:function(){var e=this;window.clearTimeout(this._heartBeatTimeout),this._heartBeatTimeout=window.setTimeout(function(){e.data.player_is_paused||e.emit("hb")},1e4)}},{key:"addHLSJS",value:function(e){if(!e.hlsjs){this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");return}if(this.hlsjs){this.mux.log.warn("An instance of HLS.js is already being monitored for this player.");return}this.hlsjs=e.hlsjs,eT(this.mux,this.id,e.hlsjs,{},e.Hls||window.Hls)}},{key:"removeHLSJS",value:function(){this.hlsjs&&(ew(this.hlsjs),this.hlsjs=void 0)}},{key:"addDashJS",value:function(e){if(!e.dashjs){this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");return}if(this.dashjs){this.mux.log.warn("An instance of Dash.js is already being monitored for this player.");return}this.dashjs=e.dashjs,eL(this.mux,this.id,e.dashjs)}},{key:"removeDashJS",value:function(){this.dashjs&&(eD(this.dashjs),this.dashjs=void 0)}}]),a}(eM);T();var tb,tf=_(q()),tE=["loadstart","pause","play","playing","seeking","seeked","timeupdate","ratechange","stalled","waiting","error","ended"],tg={1:"MEDIA_ERR_ABORTED",2:"MEDIA_ERR_NETWORK",3:"MEDIA_ERR_DECODE",4:"MEDIA_ERR_SRC_NOT_SUPPORTED"},ty=_(A());ty.default&&ty.default.WeakMap&&(tb=new WeakMap);var t_={TARGET_DURATION:"#EXT-X-TARGETDURATION",PART_INF:"#EXT-X-PART-INF",SERVER_CONTROL:"#EXT-X-SERVER-CONTROL",INF:"#EXTINF",PROGRAM_DATE_TIME:"#EXT-X-PROGRAM-DATE-TIME",VERSION:"#EXT-X-VERSION",SESSION_DATA:"#EXT-X-SESSION-DATA"},tA=function(e){return this.buffer="",this.manifest={segments:[],serverControl:{},sessionData:{}},this.currentUri={},this.process(e),this.manifest};tA.prototype.process=function(e){var t;for(this.buffer+=e,t=this.buffer.indexOf("\n");t>-1;t=this.buffer.indexOf("\n"))this.processLine(this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},tA.prototype.processLine=function(e){var t=e.indexOf(":"),i=tR(e,t),a=i[0],r=2===i.length?tw(i[1]):void 0;if("#"!==a[0])this.currentUri.uri=a,this.manifest.segments.push(this.currentUri),!this.manifest.targetDuration||"duration"in this.currentUri||(this.currentUri.duration=this.manifest.targetDuration),this.currentUri={};else switch(a){case t_.TARGET_DURATION:if(!isFinite(r)||r<0)return;this.manifest.targetDuration=r,this.setHoldBack();break;case t_.PART_INF:tk(this.manifest,i),this.manifest.partInf.partTarget&&(this.manifest.partTargetDuration=this.manifest.partInf.partTarget),this.setHoldBack();break;case t_.SERVER_CONTROL:tk(this.manifest,i),this.setHoldBack();break;case t_.INF:0===r?this.currentUri.duration=.01:r>0&&(this.currentUri.duration=r);break;case t_.PROGRAM_DATE_TIME:var n=new Date(r);this.manifest.dateTimeString||(this.manifest.dateTimeString=r,this.manifest.dateTimeObject=n),this.currentUri.dateTimeString=r,this.currentUri.dateTimeObject=n;break;case t_.VERSION:tk(this.manifest,i);break;case t_.SESSION_DATA:var s=e_(tL(i[1]));Object.assign(this.manifest.sessionData,s)}},tA.prototype.setHoldBack=function(){var e=this.manifest,t=e.serverControl,i=e.targetDuration,a=e.partTargetDuration;if(t){var r="holdBack",n="partHoldBack",s=i&&3*i,o=a&&2*a;i&&!t.hasOwnProperty(r)&&(t[r]=s),s&&t[r]<s&&(t[r]=s),a&&!t.hasOwnProperty(n)&&(t[n]=3*a),a&&t[n]<o&&(t[n]=o)}};var tk=function(e,t){var i,a=tT(t[0].replace("#EXT-X-",""));tC(t[1])?(i={},i=Object.assign(tI(t[1]),i)):i=tw(t[1]),e[a]=i},tT=function(e){return e.toLowerCase().replace(/-(\w)/g,function(e){return e[1].toUpperCase()})},tw=function(e){if("yes"===e.toLowerCase()||"no"===e.toLowerCase())return"yes"===e.toLowerCase();var t=-1!==e.indexOf(":")?e:parseFloat(e);return isNaN(t)?e:t},tS=function(e){var t={},i=e.split("=");return i.length>1&&(t[tT(i[0])]=tw(i[1])),t},tI=function(e){for(var t=e.split(","),i={},a=0;t.length>a;a++)i=Object.assign(tS(t[a]),i);return i},tC=function(e){return e.indexOf("=")>-1},tR=function(e,t){return -1===t?[e]:[e.substring(0,t),e.substring(t+1)]},tL=function(e){var t={};if(e){var i=e.search(",");return[e.slice(0,i),e.slice(i+1)].forEach(function(e,i){for(var a=e.replace(/['"]+/g,"").split("="),r=0;r<a.length;r++)"DATA-ID"===a[r]&&(t["DATA-ID"]=a[1-r]),"VALUE"===a[r]&&(t.VALUE=a[1-r])}),{data:t}}},tD={safeCall:function(e,t,i,a){var r=a;if(e&&"function"==typeof e[t])try{r=e[t].apply(e,i)}catch(e){X.info("safeCall error",e)}return r},safeIncrement:ep,getComputedStyle:function(e,t){var i;return e&&t&&ty.default&&"function"==typeof ty.default.getComputedStyle?(tb&&tb.has(e)&&(i=tb.get(e)),i||(i=ty.default.getComputedStyle(e,null),tb&&tb.set(e,i)),i.getPropertyValue(t)):""},secondsToMs:function(e){return Math.floor(1e3*e)},assign:Object.assign,headersStringToObject:eg,cdnHeadersToRequestId:ey,extractHostnameAndDomain:ec,extractHostname:eu,manifestParser:tA,generateShortID:Y,generateUUID:K,now:ei.now},tx={},tM=function(e){var t=arguments;"string"==typeof e?tM.hasOwnProperty(e)?j.default.setTimeout(function(){t=Array.prototype.splice.call(t,1),tM[e].apply(null,t)},0):X.warn("`"+e+"` is an unknown task"):"function"==typeof e?j.default.setTimeout(function(){e(tM)},0):X.warn("`"+e+"` is invalid.")},tO={loaded:ei.now(),NAME:"mux-embed",VERSION:"5.2.1",API_VERSION:"2.1",PLAYER_TRACKED:!1,monitor:function(e,t){return function(e,t,i){var a=$(Z(t),3),r=a[0],n=a[1],s=a[2],o=e.log,l=e.utils.getComputedStyle,d=e.utils.secondsToMs;if(!r)return o.error("No element was found with the `"+n+"` query selector.");if("video"!==s&&"audio"!==s)return o.error("The element of `"+n+"` was not a media element.");r.mux&&(r.mux.destroy(),delete r.mux,o.warn("Already monitoring this video element, replacing existing event listeners")),(i=Object.assign({automaticErrorTracking:!0},i)).data=Object.assign({player_software:"HTML5 Video Element",player_mux_plugin_name:"VideoElementMonitor",player_mux_plugin_version:e.VERSION},i.data),i.getPlayheadTime=function(){return d(r.currentTime)},i.getStateData=function(){var e,t=this.hlsjs&&this.hlsjs.url,a=this.dashjs&&k("function"===this.dashjs.getSource)&&this.dashjs.getSource(),n={player_is_paused:r.paused,player_playhead_time:d(r.currentTime),player_width:parseInt(l(r,"width")),player_height:parseInt(l(r,"height")),player_autoplay_on:r.autoplay,player_preload_on:r.preload,player_language_code:r.lang,player_is_fullscreen:tf.default&&!!(tf.default.fullscreenElement||tf.default.webkitFullscreenElement||tf.default.mozFullScreenElement||tf.default.msFullscreenElement),video_poster_url:r.poster,video_source_url:t||a||r.currentSrc,video_source_duration:d(r.duration),video_source_height:r.videoHeight,video_source_width:r.videoWidth,view_dropped_frame_count:null==r||null===(e=r.getVideoPlaybackQuality)||void 0===e?void 0:e.call(r).droppedVideoFrames},s=i.getPlayheadTime();if(r.getStartDate&&s>0){var o=r.getStartDate();if(o&&"function"==typeof o.getTime&&o.getTime()){var u=o.getTime();if(n.player_program_time=u+s,r.seekable.length>0){var c=u+r.seekable.end(r.seekable.length-1);n.player_live_edge_program_time=c}}}return n},r.mux=r.mux||{},r.mux.deleted=!1,r.mux.emit=function(t,i){e.emit(n,t,i)};var u=function(){o.error("The monitor for this video element has already been destroyed.")};r.mux.destroy=function(){Object.keys(r.mux.listeners).forEach(function(e){r.removeEventListener(e,r.mux.listeners[e],!1)}),delete r.mux.listeners,r.mux.destroy=u,r.mux.swapElement=u,r.mux.emit=u,r.mux.addHLSJS=u,r.mux.addDashJS=u,r.mux.removeHLSJS=u,r.mux.removeDashJS=u,r.mux.deleted=!0,e.emit(n,"destroy")},r.mux.swapElement=function(t){var i=$(Z(t),3),a=i[0],n=i[1],s=i[2];return a?"video"!==s&&"audio"!==s?e.log.error("The element of `"+n+"` was not a media element."):void(a.muxId=r.muxId,delete r.muxId,a.mux=a.mux||{},a.mux.listeners=Object.assign({},r.mux.listeners),delete r.mux.listeners,Object.keys(a.mux.listeners).forEach(function(e){r.removeEventListener(e,a.mux.listeners[e],!1),a.addEventListener(e,a.mux.listeners[e],!1)}),a.mux.swapElement=r.mux.swapElement,a.mux.destroy=r.mux.destroy,delete r.mux,r=a):e.log.error("No element was found with the `"+n+"` query selector.")},r.mux.addHLSJS=function(t){e.addHLSJS(n,t)},r.mux.addDashJS=function(t){e.addDashJS(n,t)},r.mux.removeHLSJS=function(){e.removeHLSJS(n)},r.mux.removeDashJS=function(){e.removeDashJS(n)},e.init(n,i),e.emit(n,"playerready"),r.paused||(e.emit(n,"play"),r.readyState>2&&e.emit(n,"playing")),r.mux.listeners={},tE.forEach(function(t){("error"!==t||i.automaticErrorTracking)&&(r.mux.listeners[t]=function(){var i={};if("error"===t){if(!r.error||1===r.error.code)return;i.player_error_code=r.error.code,i.player_error_message=tg[r.error.code]||r.error.message}e.emit(n,t,i)},r.addEventListener(t,r.mux.listeners[t],!1))})}(tM,e,t)},destroyMonitor:function(e){var t=$(Z(e),1)[0];t&&t.mux&&"function"==typeof t.mux.destroy?t.mux.destroy():X.error("A video element monitor for `"+e+"` has not been initialized via `mux.monitor`.")},addHLSJS:function(e,t){var i=G(e);tx[i]?tx[i].addHLSJS(t):X.error("A monitor for `"+i+"` has not been initialized.")},addDashJS:function(e,t){var i=G(e);tx[i]?tx[i].addDashJS(t):X.error("A monitor for `"+i+"` has not been initialized.")},removeHLSJS:function(e){var t=G(e);tx[t]?tx[t].removeHLSJS():X.error("A monitor for `"+t+"` has not been initialized.")},removeDashJS:function(e){var t=G(e);tx[t]?tx[t].removeDashJS():X.error("A monitor for `"+t+"` has not been initialized.")},init:function(e,t){ee()&&t&&t.respectDoNotTrack&&X.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");var i=G(e);tx[i]=new tv(tM,i,t)},emit:function(e,t,i){var a=G(e);tx[a]?(tx[a].emit(t,i),"destroy"===t&&delete tx[a]):X.error("A monitor for `"+a+"` has not been initialized.")},checkDoNotTrack:ee,log:X,utils:tD,events:{PLAYER_READY:"playerready",VIEW_INIT:"viewinit",VIDEO_CHANGE:"videochange",PLAY:"play",PAUSE:"pause",PLAYING:"playing",TIME_UPDATE:"timeupdate",SEEKING:"seeking",SEEKED:"seeked",REBUFFER_START:"rebufferstart",REBUFFER_END:"rebufferend",ERROR:"error",ENDED:"ended",RENDITION_CHANGE:"renditionchange",ORIENTATION_CHANGE:"orientationchange",AD_REQUEST:"adrequest",AD_RESPONSE:"adresponse",AD_BREAK_START:"adbreakstart",AD_PLAY:"adplay",AD_PLAYING:"adplaying",AD_PAUSE:"adpause",AD_FIRST_QUARTILE:"adfirstquartile",AD_MID_POINT:"admidpoint",AD_THIRD_QUARTILE:"adthirdquartile",AD_ENDED:"adended",AD_BREAK_END:"adbreakend",AD_ERROR:"aderror",REQUEST_COMPLETED:"requestcompleted",REQUEST_FAILED:"requestfailed",REQUEST_CANCELLED:"requestcanceled"},WINDOW_HIDDEN:!1,WINDOW_UNLOADING:!1};Object.assign(tM,tO),void 0!==j.default&&"function"==typeof j.default.addEventListener&&j.default.addEventListener("pagehide",function(e){e.persisted||(tM.WINDOW_UNLOADING=!0)},!1);var tN=i(13915).ZP,tP=class e extends Error{constructor(t,i=e.MEDIA_ERR_CUSTOM,a,r){var n;super(t),this.name="MediaError",this.code=i,this.context=r,this.fatal=null!=a?a:i>=e.MEDIA_ERR_NETWORK&&i<=e.MEDIA_ERR_ENCRYPTED,this.message||(this.message=null!=(n=e.defaultMessages[this.code])?n:"")}};tP.MEDIA_ERR_ABORTED=1,tP.MEDIA_ERR_NETWORK=2,tP.MEDIA_ERR_DECODE=3,tP.MEDIA_ERR_SRC_NOT_SUPPORTED=4,tP.MEDIA_ERR_ENCRYPTED=5,tP.MEDIA_ERR_CUSTOM=100,tP.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail.",3:"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",4:"An unsupported error occurred. The server or network failed, or your browser does not support this format.",5:"The media is encrypted and there are no keys to decrypt it."};var tU=e=>null==e,tB=(e,t)=>!tU(t)&&e in t,tW={ANY:"any",MUTED:"muted"},tH={ON_DEMAND:"on-demand",LIVE:"live",UNKNOWN:"unknown"},tV={MSE:"mse",NATIVE:"native"},tq={HEADER:"header",QUERY:"query",NONE:"none"},tF=Object.values(tq),t$={M3U8:"application/vnd.apple.mpegurl",MP4:"video/mp4"},tj={HLS:t$.M3U8};Object.keys(tj),[...Object.values(t$)];var tK=(e,t,i,a,r=e)=>{r.addEventListener(t,i,a),e.addEventListener("teardown",()=>{r.removeEventListener(t,i)},{once:!0})},tY=e=>{let t=e.indexOf("?");return t<0?[e]:[e.slice(0,t),e.slice(t)]},tG=e=>{let t=e.type;if(t){let e=t.toUpperCase();return tB(e,tj)?tj[e]:t}let{src:i}=e;return i?tz(i):""},tZ=e=>"VOD"===e?tH.ON_DEMAND:tH.LIVE,tQ=e=>"EVENT"===e?Number.POSITIVE_INFINITY:"VOD"===e?Number.NaN:0,tz=e=>{let t="";try{t=new URL(e).pathname}catch{console.error("invalid url")}let i=t.lastIndexOf(".");if(i<0)return"";let a=t.slice(i+1).toUpperCase();return tB(a,t$)?t$[a]:""},tX=Object.values(tW),tJ=e=>"boolean"==typeof e||"string"==typeof e&&tX.includes(e),t0=(e,t,i)=>{let{autoplay:a}=e,r=!1,n=!1,s=tJ(a)?a:!!a,o=()=>{r||tK(t,"playing",()=>{r=!0},{once:!0})};if(o(),tK(t,"loadstart",()=>{r=!1,o(),t1(t,s)},{once:!0}),tK(t,"loadstart",()=>{i||(n=e.streamType&&e.streamType!==tH.UNKNOWN?e.streamType===tH.LIVE:!Number.isFinite(t.duration)),t1(t,s)},{once:!0}),i&&i.once(tN.Events.LEVEL_LOADED,(t,i)=>{var a;n=e.streamType&&e.streamType!==tH.UNKNOWN?e.streamType===tH.LIVE:null!=(a=i.details.live)&&a}),!s){let a=()=>{!n||Number.isFinite(e.startTime)||(null!=i&&i.liveSyncPosition?t.currentTime=i.liveSyncPosition:Number.isFinite(t.seekable.end(0))&&(t.currentTime=t.seekable.end(0)))};i&&tK(t,"play",()=>{"metadata"===t.preload?i.once(tN.Events.LEVEL_UPDATED,a):a()},{once:!0})}return e=>{r||t1(t,s=tJ(e)?e:!!e)}},t1=(e,t)=>{if(!t)return;let i=e.muted,a=()=>e.muted=i;switch(t){case tW.ANY:e.play().catch(()=>{e.muted=!0,e.play().catch(a)});break;case tW.MUTED:e.muted=!0,e.play().catch(a);break;default:e.play().catch(()=>{})}},t2=({preload:e,src:t},i,a)=>{let r=e=>{null!=e&&["","none","metadata","auto"].includes(e)?i.setAttribute("preload",e):i.removeAttribute("preload")};if(!a)return r(e),r;let n=!1,s=!1,o=a.config.maxBufferLength,l=a.config.maxBufferSize,d=e=>{r(e);let t=null!=e?e:i.preload;s||"none"===t||("metadata"===t?(a.config.maxBufferLength=1,a.config.maxBufferSize=1):(a.config.maxBufferLength=o,a.config.maxBufferSize=l),u())},u=()=>{!n&&t&&(n=!0,a.loadSource(t))};return tK(i,"play",()=>{s=!0,a.config.maxBufferLength=o,a.config.maxBufferSize=l,u()},{once:!0}),d(e),d},t3=e=>"time"in e?e.time:e.startTime;function t5(e,t,i,a,r){let n=document.createElement("track");return n.kind=t,n.label=i,a&&(n.srclang=a),r&&(n.id=r),n.track.mode=["subtitles","captions"].includes(t)?"disabled":"hidden",n.setAttribute("data-removeondestroy",""),e.append(n),n.track}function t4(e,t,i){var a;return null==(a=Array.from(e.querySelectorAll("track")).find(e=>e.track.label===t&&e.track.kind===i))?void 0:a.track}async function t9(e,t,i,a){let r=t4(e,i,a);return r||((r=t5(e,a,i)).mode="hidden",await new Promise(e=>setTimeout(()=>e(void 0),0))),"hidden"!==r.mode&&(r.mode="hidden"),[...t].sort((e,t)=>t3(t)-t3(e)).forEach(t=>{var i,n;let s=t.value,o=t3(t);if("endTime"in t&&null!=t.endTime)null==r||r.addCue(new VTTCue(o,t.endTime,"chapters"===a?s:JSON.stringify(null!=s?s:null)));else{let t=Array.prototype.findIndex.call(null==r?void 0:r.cues,e=>e.startTime>=o),l=null==(i=null==r?void 0:r.cues)?void 0:i[t],d=l?l.startTime:Number.isFinite(e.duration)?e.duration:Number.MAX_SAFE_INTEGER,u=null==(n=null==r?void 0:r.cues)?void 0:n[t-1];u&&(u.endTime=o),null==r||r.addCue(new VTTCue(o,d,"chapters"===a?s:JSON.stringify(null!=s?s:null)))}}),e.textTracks.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),r}var t8="cuepoints",t7=Object.freeze({label:t8});async function t6(e,t,i=t7){return t9(e,t,i.label,"metadata")}var ie=e=>({time:e.startTime,value:JSON.parse(e.text)});function it(e,t={label:t8}){var i,a;let r=t4(e,t.label,"metadata");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return ie(r.activeCues[0]);let{currentTime:n}=e;return ie(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function ii(e,t=t7){return new Promise(i=>{tK(e,"loadstart",async()=>{let a=await t6(e,[],t);tK(e,"cuechange",()=>{let t=it(e);if(t){let i=new CustomEvent("cuepointchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var ia="chapters",ir=Object.freeze({label:ia}),is=e=>({startTime:e.startTime,endTime:e.endTime,value:e.text});async function io(e,t,i=ir){return t9(e,t,i.label,"chapters")}function il(e,t={label:ia}){var i,a;let r=t4(e,t.label,"chapters");if(!(null!=(i=null==r?void 0:r.activeCues)&&i.length))return;if(1===r.activeCues.length)return is(r.activeCues[0]);let{currentTime:n}=e;return is(Array.prototype.find.call(null!=(a=r.activeCues)?a:[],({startTime:e,endTime:t})=>e<=n&&t>n)||r.activeCues[0])}async function id(e,t=ir){return new Promise(i=>{tK(e,"loadstart",async()=>{let a=await io(e,[],t);tK(e,"cuechange",()=>{let t=il(e);if(t){let i=new CustomEvent("chapterchange",{composed:!0,bubbles:!0,detail:t});e.dispatchEvent(i)}},{},a),i(a)})})}var iu,ic,ih,im=async e=>fetch(e).then(e=>e.text()).then(e=>fetch(e.split(`
`).find((e,t,i)=>t&&i[t-1].startsWith("#EXT-X-STREAM-INF"))).then(e=>e.text()).then(e=>e.split(`
`))),ip=e=>{var t,i,a;let r=null==(i=(null!=(t=e.find(e=>e.startsWith("#EXT-X-PLAYLIST-TYPE")))?t:"").split(":")[1])?void 0:i.trim(),n=tZ(r),s=tQ(r),o;if(n===tH.LIVE){let t=e.find(e=>e.startsWith("#EXT-X-PART-INF"));if(t)o=2*+t.split(":")[1].split("=")[1];else{let t=e.find(e=>e.startsWith("#EXT-X-TARGETDURATION")),i=null==(a=null==t?void 0:t.split(":"))?void 0:a[1];o=3*+(null!=i?i:6)}}return{streamType:n,targetLiveWindow:s,liveEdgeStartOffset:o}},iv=async(e,t)=>t===t$.MP4?{streamType:tH.ON_DEMAND,targetLiveWindow:Number.NaN,liveEdgeStartOffset:void 0}:t===t$.M3U8?ip(await im(e)):(console.error(`Media type ${t} is an unrecognized or unsupported type for src ${e}.`),{streamType:void 0,targetLiveWindow:void 0,liveEdgeStartOffset:void 0}),ib=async(e,t,i=tG({src:e}))=>{var a,r,n;let{streamType:s,targetLiveWindow:o,liveEdgeStartOffset:l}=await iv(e,i);(null!=(a=i_.get(t))?a:{}).liveEdgeStartOffset=l,(null!=(r=i_.get(t))?r:{}).targetLiveWindow=o,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(n=i_.get(t))?n:{}).streamType=s,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},iE=e=>{var t;let i=e.type,a=tZ(i),r=tQ(i),n,s=!!(null!=(t=e.partList)&&t.length);return a===tH.LIVE&&(n=s?2*e.partTarget:3*e.targetduration),{streamType:a,targetLiveWindow:r,liveEdgeStartOffset:n,lowLatency:s}},ig=(e,t,i)=>{var a,r,n,s,o,l,d,u;let{streamType:c,targetLiveWindow:h,liveEdgeStartOffset:m,lowLatency:p}=iE(e);if(c===tH.LIVE){p?(i.config.backBufferLength=null!=(a=i.userConfig.backBufferLength)?a:4,i.config.maxFragLookUpTolerance=null!=(r=i.userConfig.maxFragLookUpTolerance)?r:.001,i.config.abrBandWidthUpFactor=null!=(n=i.userConfig.abrBandWidthUpFactor)?n:i.config.abrBandWidthFactor):i.config.backBufferLength=null!=(s=i.userConfig.backBufferLength)?s:8;let e=Object.freeze({get length(){return t.seekable.length},start:e=>t.seekable.start(e),end(e){var a;return e>this.length||e<0||Number.isFinite(t.duration)?t.seekable.end(e):null!=(a=i.liveSyncPosition)?a:t.seekable.end(e)}});(null!=(o=i_.get(t))?o:{}).seekable=e}(null!=(l=i_.get(t))?l:{}).liveEdgeStartOffset=m,(null!=(d=i_.get(t))?d:{}).targetLiveWindow=h,t.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0})),(null!=(u=i_.get(t))?u:{}).streamType=c,t.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}))},iy=-1!==(null!=(ic=null==(iu=null==globalThis?void 0:globalThis.navigator)?void 0:iu.userAgent)?ic:"").toLowerCase().indexOf("android"),i_=new WeakMap,iA="mux.com",ik=null==(ih=tN.isSupported)?void 0:ih.call(tN),iT=()=>tM.utils.now(),iw=tM.utils.generateUUID,iS=({playbackId:e,customDomain:t=iA,maxResolution:i,minResolution:a,renditionOrder:r,programStartTime:n,programEndTime:s,tokens:{playback:o}={},extraSourceParams:l={}}={})=>{if(!e)return;let[d,u=""]=tY(e),c=new URL(`https://stream.${t}/${d}.m3u8${u}`);return o||c.searchParams.has("token")?(c.searchParams.forEach((e,t)=>{"token"!=t&&c.searchParams.delete(t)}),o&&c.searchParams.set("token",o)):(i&&c.searchParams.set("max_resolution",i),a&&(c.searchParams.set("min_resolution",a),i&&+i.slice(0,-1)<+a.slice(0,-1)&&console.error("minResolution must be <= maxResolution","minResolution",a,"maxResolution",i)),r&&c.searchParams.set("rendition_order",r),n&&c.searchParams.set("program_start_time",`${n}`),s&&c.searchParams.set("program_end_time",`${s}`),Object.entries(l).forEach(([e,t])=>{null!=t&&c.searchParams.set(e,t)})),c.toString()},iI=e=>{if(!e)return;let[t]=e.split("?");return t||void 0},iC=e=>{if(!e||!e.startsWith("https://stream."))return;let[t]=new URL(e).pathname.slice(1).split(".m3u8");return t||void 0},iR=e=>{var t,i,a;return null!=(t=null==e?void 0:e.metadata)&&t.video_id?e.metadata.video_id:iK(e)&&null!=(a=null!=(i=iI(e.playbackId))?i:iC(e.src))?a:e.src},iL=e=>{var t;return null==(t=i_.get(e))?void 0:t.error},iD=e=>{var t,i;return null!=(i=null==(t=i_.get(e))?void 0:t.streamType)?i:tH.UNKNOWN},ix=e=>{var t,i;return null!=(i=null==(t=i_.get(e))?void 0:t.targetLiveWindow)?i:Number.NaN},iM=e=>{var t,i;return null!=(i=null==(t=i_.get(e))?void 0:t.seekable)?i:e.seekable},iO=e=>{var t;let i=null==(t=i_.get(e))?void 0:t.liveEdgeStartOffset;if("number"!=typeof i)return Number.NaN;let a=iM(e);return a.length?a.end(a.length-1)-i:Number.NaN},iN=.034,iP=(e,t,i=iN)=>Math.abs(e-t)<=i,iU=(e,t,i=iN)=>e>t||iP(e,t,i),iB=(e,t=iN)=>e.paused&&iU(e.currentTime,e.duration,t),iW=(e,t)=>{var i,a,r;if(!t)return;if(e.readyState>2)return!1;let n=t.currentLevel>=0?null==(a=null==(i=t.levels)?void 0:i[t.currentLevel])?void 0:a.details:null==(r=t.levels.find(e=>!!e.details))?void 0:r.details;if(!n||n.live)return;let{fragments:s}=n;if(!(null!=s&&s.length))return;if(e.currentTime<e.duration-(n.targetduration+.5))return!1;let o=s[s.length-1];if(e.currentTime<=o.start)return!1;let l=o.start+o.duration/2,d=e.buffered.start(e.buffered.length-1),u=e.buffered.end(e.buffered.length-1);return l>d&&l<u},iH=(e,t)=>e.ended||e.loop?e.ended:!!(t&&iW(e,t))||iB(e),iV=(e,t,i)=>{iq(t,i);let{metadata:a={}}=e,{view_session_id:r=iw()}=a,n=iR(e);a.view_session_id=r,a.video_id=n,e.metadata=a,i_.set(t,{});let s=i$(e,t),o=t2(e,t,s);iY(e,t,s),iG(e,t,s),ii(t),id(t);let l=t0(e,t,s);return{engine:s,setAutoplay:l,setPreload:o}},iq=(e,t)=>{let i=null==t?void 0:t.engine;i&&(i.detachMedia(),i.destroy()),null!=e&&e.mux&&!e.mux.deleted&&(e.mux.destroy(),delete e.mux),e&&(e.removeAttribute("src"),e.load(),e.removeEventListener("error",iQ),e.removeEventListener("error",iz),e.removeEventListener("durationchange",iZ),i_.delete(e),e.dispatchEvent(new Event("teardown")))};function iF(e,t){var i;let a=tG(e);if(a!==t$.M3U8)return!0;let r=!a||null==(i=t.canPlayType(a))||i,{preferPlayback:n}=e,s=n===tV.MSE,o=n===tV.NATIVE;return r&&(o||!(ik&&(s||iy)))}var i$=(e,t)=>{let{debug:i,streamType:a,startTime:r=-1,metadata:n,preferCmcd:s,_hlsConfig:o={}}=e,l=tG(e)===t$.M3U8,d=iF(e,t);if(l&&!d&&ik){let e=ij(a);return new tN({debug:i,startPosition:r,cmcd:s!==tq.NONE?{useHeaders:s===tq.HEADER,sessionId:null==n?void 0:n.view_session_id,contentId:null==n?void 0:n.video_id}:void 0,xhrSetup:(e,t)=>{var i,a;if(s&&s!==tq.QUERY)return;let r=new URL(t);if(!r.searchParams.has("CMCD"))return;let n=(null!=(a=null==(i=r.searchParams.get("CMCD"))?void 0:i.split(","))?a:[]).filter(e=>e.startsWith("sid")||e.startsWith("cid")).join(",");r.searchParams.set("CMCD",n),e.open("GET",r)},backBufferLength:30,renderTextTracksNatively:!1,liveDurationInfinity:!0,capLevelToPlayerSize:!0,capLevelOnFPSDrop:!0,...e,...o})}},ij=e=>e===tH.LIVE?{backBufferLength:8}:{},iK=({playbackId:e,src:t,customDomain:i})=>{if(e)return!0;if("string"!=typeof t)return!1;let a=new URL(t,null==window?void 0:window.location.href).hostname.toLocaleLowerCase();return a.includes(iA)||!!i&&a.includes(i.toLocaleLowerCase())},iY=(e,t,i)=>{var a;let{envKey:r,disableTracking:n}=e,s=iK(e);if(!n&&(r||s)){let{playerInitTime:n,playerSoftwareName:s,playerSoftwareVersion:o,beaconCollectionDomain:l,debug:d,disableCookies:u}=e,c={...e.metadata,video_title:(null==(a=null==e?void 0:e.metadata)?void 0:a.video_title)||void 0};tM.monitor(t,{debug:d,beaconCollectionDomain:l,hlsjs:i,Hls:i?tN:void 0,automaticErrorTracking:!1,errorTranslator:t=>"string"!=typeof t.player_error_code&&("function"==typeof e.errorTranslator?e.errorTranslator(t):t),disableCookies:u,data:{...r?{env_key:r}:{},player_software_name:s,player_software:s,player_software_version:o,player_init_time:n,...c}})}},iG=(e,t,i)=>{var a;let r=iF(e,t),{src:n}=e,s=()=>{t.ended||!iH(t,i)||(iW(t,i)?t.currentTime=t.buffered.end(t.buffered.length-1):t.dispatchEvent(new Event("ended")))},o,l,d=()=>{var e,i;let a=null==(e=iM(t))?void 0:e.start(0),r=null==(i=iM(t))?void 0:i.end(0);(l!==r||o!==a)&&t.dispatchEvent(new CustomEvent("seekablechange",{composed:!0})),o=a,l=r};if(tK(t,"durationchange",d),t&&r){let i=tG(e);if("string"==typeof n){let r=()=>{if(iD(t)!==tH.LIVE||Number.isFinite(t.duration))return;let e=setInterval(d,1e3);t.addEventListener("teardown",()=>{clearInterval(e)},{once:!0}),tK(t,"durationchange",()=>{Number.isFinite(t.duration)&&clearInterval(e)})};if("none"===t.preload){let e=()=>{ib(n,t,i).then(r),t.removeEventListener("loadedmetadata",a)},a=()=>{ib(n,t,i).then(r),t.removeEventListener("play",e)};tK(t,"play",e,{once:!0}),tK(t,"loadedmetadata",a,{once:!0})}else ib(n,t,i).then(r);t.setAttribute("src",n),e.startTime&&((null!=(a=i_.get(t))?a:{}).startTime=e.startTime,t.addEventListener("durationchange",iZ,{once:!0}))}else t.removeAttribute("src");t.addEventListener("error",iQ),t.addEventListener("error",iz),t.addEventListener("emptied",()=>{t.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})},{once:!0}),tK(t,"pause",s),tK(t,"seeked",s),tK(t,"play",()=>{t.ended||iU(t.currentTime,t.duration)&&(t.currentTime=t.seekable.start(0))})}else i&&n?(i.once(tN.Events.LEVEL_LOADED,(e,a)=>{ig(a.details,t,i),d(),iD(t)!==tH.LIVE||Number.isFinite(t.duration)||(i.on(tN.Events.LEVEL_UPDATED,d),tK(t,"durationchange",()=>{Number.isFinite(t.duration)&&i.off(tN.Events.LEVELS_UPDATED,d)}))}),i.on(tN.Events.ERROR,(e,i)=>{let a={[tN.ErrorTypes.NETWORK_ERROR]:tP.MEDIA_ERR_NETWORK,[tN.ErrorTypes.MEDIA_ERROR]:tP.MEDIA_ERR_DECODE},r=new tP("",a[i.type]);r.fatal=i.fatal,r.data=i,t.dispatchEvent(new CustomEvent("error",{detail:r}))}),t.addEventListener("error",iz),tK(t,"waiting",s),function(e,t){var i;if(!("videoTracks"in e))return;let a=new WeakMap;t.on(tN.Events.MANIFEST_PARSED,function(t,i){o();let r=e.addVideoTrack("main");for(let[e,t]of(r.selected=!0,i.levels.entries())){let i=r.addRendition(t.url[0],t.width,t.height,t.videoCodec,t.bitrate);a.set(t,`${e}`),i.id=`${e}`}}),t.on(tN.Events.AUDIO_TRACKS_UPDATED,function(t,i){for(let t of(s(),i.audioTracks)){let i=t.default?"main":"alternative",a=e.addAudioTrack(i,t.name,t.lang);a.id=`${t.id}`,t.default&&(a.enabled=!0)}}),e.audioTracks.addEventListener("change",()=>{var i;let a=+(null==(i=[...e.audioTracks].find(e=>e.enabled))?void 0:i.id),r=t.audioTracks.map(e=>e.id);a!=t.audioTrack&&r.includes(a)&&(t.audioTrack=a)}),t.on(tN.Events.LEVELS_UPDATED,function(t,i){var r;let n=e.videoTracks[null!=(r=e.videoTracks.selectedIndex)?r:0];if(!n)return;let s=i.levels.map(e=>a.get(e));for(let t of e.videoRenditions)t.id&&!s.includes(t.id)&&n.removeRendition(t)});let r=i=>{let a=e.currentTime,r=!1,n=(e,t)=>{r||(r=!Number.isFinite(t.endOffset))};t.on(tN.Events.BUFFER_FLUSHING,n),t.nextLevel=i,t.off(tN.Events.BUFFER_FLUSHING,n),r||t.trigger(tN.Events.BUFFER_FLUSHING,{startOffset:a+10,endOffset:1/0,type:"video"})};null==(i=e.videoRenditions)||i.addEventListener("change",e=>{let i=e.target.selectedIndex;i!=t.nextLevel&&r(i)});let n=()=>{for(let t of e.videoTracks)e.removeVideoTrack(t)},s=()=>{for(let t of e.audioTracks)e.removeAudioTrack(t)},o=()=>{n(),s()};t.once(tN.Events.DESTROYING,o)}(e,i),function(e,t){t.on(tN.Events.NON_NATIVE_TEXT_TRACKS_FOUND,(i,{tracks:a})=>{a.forEach(i=>{var a;let r=null!=(a=i.subtitleTrack)?a:i.closedCaptions,n=t.subtitleTracks.findIndex(({lang:e,name:t,type:a})=>e==(null==r?void 0:r.lang)&&t===i.label&&a.toLowerCase()===i.kind);t5(e,i.kind,i.label,null==r?void 0:r.lang,`${i.kind}${n}`)})});let i=()=>{var i;if(!t.subtitleTracks.length)return;let a=Array.from(e.textTracks).find(e=>e.id&&"showing"===e.mode&&["subtitles","captions"].includes(e.kind)),r=`${null==(i=t.subtitleTracks[t.subtitleTrack])?void 0:i.type.toLowerCase()}${t.subtitleTrack}`;if(a&&(t.subtitleTrack<0||(null==a?void 0:a.id)!==r)){let e=t.subtitleTracks.findIndex(({lang:e,name:t,type:i})=>e==a.language&&t===a.label&&i.toLowerCase()===a.kind);t.subtitleTrack=e}a&&(null==a?void 0:a.id)===r&&a.cues&&Array.from(a.cues).forEach(e=>{a.addCue(e)})};e.textTracks.addEventListener("change",i),t.on(tN.Events.CUES_PARSED,(t,{track:i,cues:a})=>{let r=e.textTracks.getTrackById(i);if(!r)return;let n="disabled"===r.mode;n&&(r.mode="hidden"),a.forEach(e=>{var t;null!=(t=r.cues)&&t.getCueById(e.id)||r.addCue(e)}),n&&(r.mode="disabled")}),t.once(tN.Events.DESTROYING,()=>{e.textTracks.removeEventListener("change",i),e.querySelectorAll("track[data-removeondestroy]").forEach(e=>{e.remove()})});let a=()=>{Array.from(e.textTracks).forEach(t=>{var i,a;if(!["subtitles","caption"].includes(t.kind)&&"thumbnails"===t.label){if(!(null!=(i=t.cues)&&i.length)){let t=e.querySelector('track[label="thumbnails"]'),i=null!=(a=null==t?void 0:t.getAttribute("src"))?a:"";null==t||t.removeAttribute("src"),setTimeout(()=>{null==t||t.setAttribute("src",i)},0)}"hidden"!==t.mode&&(t.mode="hidden")}})};t.once(tN.Events.MANIFEST_LOADED,a),t.once(tN.Events.MEDIA_ATTACHED,a)}(t,i),i.attachMedia(t)):console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.")};function iZ(e){var t;let i=e.target,a=null==(t=i_.get(i))?void 0:t.startTime;if(a&&function(e,t,i){t&&i>t&&(i=t);for(let t=0;t<e.length;t++)if(e.start(t)<=i&&e.end(t)>=i)return!0;return!1}(i.seekable,i.duration,a)){let e="auto"===i.preload;e&&(i.preload="none"),i.currentTime=a,e&&(i.preload="auto")}}async function iQ(e){if(!e.isTrusted)return;e.stopImmediatePropagation();let t=e.target;if(!(null!=t&&t.error))return;let{message:i,code:a}=t.error,r=new tP(i,a);if(t.src&&(a!==tP.MEDIA_ERR_DECODE||void 0!==a))try{let{status:e}=await fetch(t.src);r.data={response:{code:e}}}catch{}t.dispatchEvent(new CustomEvent("error",{detail:r}))}function iz(e){var t,i;if(!(e instanceof CustomEvent)||!(e.detail instanceof tP))return;let a=e.target,r=e.detail;r&&r.fatal&&((null!=(t=i_.get(a))?t:{}).error=r,null==(i=a.mux)||i.emit("error",{player_error_code:r.code,player_error_message:r.message,player_error_context:r.context}))}let iX={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},iJ={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},i0={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_PAUSED:"mediaPaused",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_ENDED:"mediaEnded",MEDIA_MUTED:"mediaMuted",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_IS_PIP:"mediaIsPip",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_LOADING:"mediaLoading",MEDIA_BUFFERED:"mediaBuffered",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_CHAPTERS_CUES:"mediaChaptersCues"},i1=Object.entries(i0),i2=i1.reduce((e,[t,i])=>(e[t]=`${i.toLowerCase()}`,e),{}),i3=i1.reduce((e,[t,i])=>(e[t]=`${i.toLowerCase()}`,e),{USER_INACTIVE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"});Object.entries(i3).reduce((e,[t,i])=>{let a=i2[t];return a&&(e[i]=a),e},{userinactivechange:"userinactive"});let i5=Object.entries(i2).reduce((e,[t,i])=>{let a=i3[t];return a&&(e[i]=a),e},{userinactive:"userinactivechange"}),i4={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},i9={DISABLED:"disabled",SHOWING:"showing"},i8={MOUSE:"mouse",TOUCH:"touch"},i7={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},i6={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},ae={FULLSCREEN:"fullscreen"},at={AUDIO_PLAYER:()=>"audio player",VIDEO_PLAYER:()=>"video player",VOLUME:()=>"volume",SEEK:()=>"seek",CLOSED_CAPTIONS:()=>"closed captions",PLAYBACK_RATE:({playbackRate:e=1}={})=>`current playback rate ${e}`,PLAYBACK_TIME:()=>"playback time",MEDIA_LOADING:()=>"media loading",SETTINGS:()=>"settings",AUDIO_TRACKS:()=>"audio tracks",QUALITY:()=>"quality"},ai={PLAY:()=>"play",PAUSE:()=>"pause",MUTE:()=>"mute",UNMUTE:()=>"unmute",ENTER_AIRPLAY:()=>"start airplay",EXIT_AIRPLAY:()=>"stop airplay",ENTER_CAST:()=>"start casting",EXIT_CAST:()=>"stop casting",ENTER_FULLSCREEN:()=>"enter fullscreen mode",EXIT_FULLSCREEN:()=>"exit fullscreen mode",ENTER_PIP:()=>"enter picture in picture mode",EXIT_PIP:()=>"exit picture in picture mode",SEEK_FORWARD_N_SECS:({seekOffset:e=30}={})=>`seek forward ${e} seconds`,SEEK_BACK_N_SECS:({seekOffset:e=30}={})=>`seek back ${e} seconds`,SEEK_LIVE:()=>"seek to live",PLAYING_LIVE:()=>"playing live"};function aa(e){return null==e?void 0:e.split(/\s+/).map(an)}function ar(e){if(e){let{id:t,width:i,height:a}=e;return[t,i,a].filter(e=>null!=e).join(":")}}function an(e){if(e){let[t,i,a]=e.split(":");return{id:t,width:i,height:a}}}function as(e){return null==e?void 0:e.split(/\s+/).map(al)}function ao(e){if(e){let{id:t,kind:i,language:a,label:r}=e;return[t,i,a,r].filter(e=>null!=e).join(":")}}function al(e){if(e){let[t,i,a,r]=e.split(":");return{id:t,kind:i,language:a,label:r}}}function ad(e){return"string"==typeof e&&!isNaN(e)&&!isNaN(parseFloat(e))}({...at,...ai});let au=e=>new Promise(t=>setTimeout(t,e)),ac=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],ah=(e,t)=>{let i=1===e?ac[t].singular:ac[t].plural;return`${e} ${i}`},am=e=>{if(!("number"==typeof e&&!Number.isNaN(e)&&Number.isFinite(e)))return"";let t=Math.abs(e),i=new Date(0,0,0,0,0,t,0),a=[i.getHours(),i.getMinutes(),i.getSeconds()].map((e,t)=>e&&ah(e,t)).filter(e=>e).join(", ");return`${a}${t!==e?" remaining":""}`};function ap(e,t){let i=!1;e<0&&(i=!0,e=0-e);let a=Math.floor((e=e<0?0:e)%60),r=Math.floor(e/60%60),n=Math.floor(e/3600);return(isNaN(e)||e===1/0)&&(n=r=a="0"),r=(((n=n>0||Math.floor(t/3600)>0?n+":":"")||Math.floor(t/60%60)>=10)&&r<10?"0"+r:r)+":",(i?"-":"")+n+r+(a=a<10?"0"+a:a)}Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}});class av{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class ab extends av{}class af{observe(){}unobserve(){}disconnect(){}}let aE={createElement:function(){return new ag.HTMLElement},createElementNS:function(){return new ag.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent:e=>!1},ag={ResizeObserver:af,document:aE,Node:ab,HTMLElement:class extends ab{},DocumentFragment:class extends av{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem:e=>null,setItem(e,t){},removeItem(e){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia:e=>({matches:!1,media:e})},ay="undefined"==typeof window||void 0===window.customElements,a_=Object.keys(ag).every(e=>e in globalThis),aA=ay&&!a_?ag:globalThis,ak=ay&&!a_?aE:globalThis.document,aT=new WeakMap,aw=e=>{let t=aT.get(e);return t||aT.set(e,t=new Set),t},aS=new aA.ResizeObserver(e=>{for(let t of e)for(let e of aw(t.target))e(t)});function aI(e,t){aw(e).add(t),aS.observe(e)}function aC(e,t){let i=aw(e);i.delete(t),i.size||aS.unobserve(e)}function aR(e){var t;return null!=(t=aL(e))?t:aN(e,"media-controller")}function aL(e){var t;let{MEDIA_CONTROLLER:i}=iJ,a=e.getAttribute(i);if(a)return null==(t=aU(e))?void 0:t.getElementById(a)}let aD=(e,t,i=".value")=>{let a=e.querySelector(i);a&&(a.textContent=t)},ax=(e,t)=>{let i=`slot[name="${t}"]`,a=e.shadowRoot.querySelector(i);return a?a.children:[]},aM=(e,t)=>ax(e,t)[0],aO=(e,t)=>!!e&&!!t&&(null!=e&&!!e.contains(t)||aO(e,t.getRootNode().host)),aN=(e,t)=>e?e.closest(t)||aN(e.getRootNode().host,t):null;function aP(e=document){var t;let i=null==e?void 0:e.activeElement;return i?null!=(t=aP(i.shadowRoot))?t:i:null}function aU(e){var t;let i=null==(t=null==e?void 0:e.getRootNode)?void 0:t.call(e);return i instanceof ShadowRoot||i instanceof Document?i:null}function aB(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function aW(e,t){return function(e,t){var i;let a;for(a of e.querySelectorAll("style")){let e;try{e=null==(i=a.sheet)?void 0:i.cssRules}catch{continue}for(let i of null!=e?e:[])if(t(i.selectorText))return i}}(e,e=>e===t)||aH(e,t)}function aH(e,t){var i,a;let r=null!=(i=e.querySelectorAll("style"))?i:[],n=null==r?void 0:r[r.length-1];return(null==n?void 0:n.sheet)?(null==n||n.sheet.insertRule(`${t}{}`,n.sheet.cssRules.length),null==(a=n.sheet.cssRules)?void 0:a[n.sheet.cssRules.length-1]):(console.warn("Media Chrome: No style sheet found on style tag of",e),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}})}function aV(e,t,i=Number.NaN){let a=e.getAttribute(t);return null!=a?+a:i}function aq(e,t,i){let a=+i;if(null==i||Number.isNaN(a)){e.hasAttribute(t)&&e.removeAttribute(t);return}aV(e,t,void 0)!==a&&e.setAttribute(t,`${a}`)}function aF(e,t){return e.hasAttribute(t)}function a$(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}aF(e,t)!=i&&e.toggleAttribute(t,i)}function aj(e,t,i=null){var a;return null!=(a=e.getAttribute(t))?a:i}function aK(e,t,i){if(null==i){e.hasAttribute(t)&&e.removeAttribute(t);return}let a=`${i}`;aj(e,t,void 0)!==a&&e.setAttribute(t,a)}var aY=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},aG=(e,t,i)=>(aY(e,t,"read from private field"),i?i.call(e):t.get(e)),aZ=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},aQ=(e,t,i,a)=>(aY(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let az=ak.createElement("template");az.innerHTML=`
<style>
  :host {
    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
    box-sizing: border-box;
  }
</style>
`;class aX extends aA.HTMLElement{constructor(e={}){if(super(),aZ(this,ut,void 0),!this.shadowRoot){let t=this.attachShadow({mode:"open"}),i=az.content.cloneNode(!0);this.nativeEl=i;let a=e.slotTemplate;a||((a=ak.createElement("template")).innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(a.content.cloneNode(!0)),t.appendChild(i)}}static get observedAttributes(){return[iJ.MEDIA_CONTROLLER,i2.MEDIA_PAUSED]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===iJ.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=aG(this,ut))?void 0:a.unassociateElement)||r.call(a,this),aQ(this,ut,null)),i&&this.isConnected&&(aQ(this,ut,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=aG(this,ut))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i,a;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),aQ(this,ut,function(e){var t;let i=e.getAttribute(iJ.MEDIA_CONTROLLER);return i?null==(t=e.getRootNode())?void 0:t.getElementById(i):aN(e,"media-controller")}(this)),this.getAttribute(iJ.MEDIA_CONTROLLER)&&(null==(t=null==(e=aG(this,ut))?void 0:e.associateElement)||t.call(e,this)),null==(i=aG(this,ut))||i.addEventListener("pointerdown",this),null==(a=aG(this,ut))||a.addEventListener("click",this)}disconnectedCallback(){var e,t,i,a;this.getAttribute(iJ.MEDIA_CONTROLLER)&&(null==(t=null==(e=aG(this,ut))?void 0:e.unassociateElement)||t.call(e,this)),null==(i=aG(this,ut))||i.removeEventListener("pointerdown",this),null==(a=aG(this,ut))||a.removeEventListener("click",this),aQ(this,ut,null)}handleEvent(e){var t;let i=null==(t=e.composedPath())?void 0:t[0];if(["video","media-controller"].includes(null==i?void 0:i.localName)){if("pointerdown"===e.type)this._pointerType=e.pointerType;else if("click"===e.type){let{clientX:t,clientY:i}=e,{left:a,top:r,width:n,height:s}=this.getBoundingClientRect(),o=t-a,l=i-r;if(o<0||l<0||o>n||l>s||0===n&&0===s)return;let{pointerType:d=this._pointerType}=e;if(this._pointerType=void 0,d===i8.TOUCH){this.handleTap(e);return}if(d===i8.MOUSE){this.handleMouseClick(e);return}}}}get mediaPaused(){return aF(this,i2.MEDIA_PAUSED)}set mediaPaused(e){a$(this,i2.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){let t=this.mediaPaused?iX.MEDIA_PLAY_REQUEST:iX.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new aA.CustomEvent(t,{composed:!0,bubbles:!0}))}}ut=new WeakMap,aA.customElements.get("media-gesture-receiver")||aA.customElements.define("media-gesture-receiver",aX);var aJ=Object.defineProperty,a0=(e,t,i)=>t in e?aJ(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,a1=(e,t,i)=>(a0(e,"symbol"!=typeof t?t+"":t,i),i),a2=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},a3=(e,t,i)=>(a2(e,t,"read from private field"),i?i.call(e):t.get(e)),a5=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},a4=(e,t,i,a)=>(a2(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),a9=(e,t,i)=>(a2(e,t,"access private method"),i);let a8={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive"},a7=ak.createElement("template");a7.innerHTML=`
  <style>
    
    :host([${i2.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([${a8.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    slot[name=media] {
      display: var(--media-slot-display, contents);
    }

    
    :host([${a8.AUDIO}]) slot[name=media] {
      display: var(--media-slot-display, none);
    }

    
    :host([${a8.AUDIO}]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    
    :host(:not([${a8.AUDIO}])[${a8.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
    :host(:not([${a8.AUDIO}])[${a8.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([hidden])) {
      pointer-events: auto;
    }

    :host(:not([${a8.AUDIO}])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([${a8.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([${a8.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    
    :host(:not([${a8.AUDIO}])) .spacer {
      flex-grow: 1;
    }

    
    :host(:-webkit-full-screen) {
      
      width: 100% !important;
      height: 100% !important;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not([${a8.NO_AUTOHIDE}]):not([hidden])) {
      opacity: 1;
      transition: opacity 0.25s;
    }

    
    :host([${a8.USER_INACTIVE}]:not([${i2.MEDIA_PAUSED}]):not([${i2.MEDIA_IS_AIRPLAYING}]):not([${i2.MEDIA_IS_CASTING}]):not([${a8.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${a8.NO_AUTOHIDE}])) {
      opacity: 0;
      transition: opacity 1s;
    }

    :host([${a8.USER_INACTIVE}]:not([${i2.MEDIA_PAUSED}]):not([${i2.MEDIA_IS_CASTING}]):not([${a8.AUDIO}])) ::slotted([slot=media]) {
      cursor: none;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    
    :host(:not([${a8.AUDIO}])[${i2.MEDIA_HAS_PLAYED}]) slot[name=poster] {
      display: none;
    }

    ::slotted([role="menu"]) {
      align-self: end;
    }

    ::slotted([role="dialog"]) {
      align-self: center;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    
    <slot part="bottom chrome"></slot>
  </span>
`;let a6=Object.values(i2);class re extends aA.HTMLElement{constructor(){super(),a5(this,ur),a5(this,us),a5(this,ul),a5(this,uu),a5(this,uh),a5(this,ui,0),a5(this,ua,void 0),a1(this,"breakpointsComputed",!1),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(a7.content.cloneNode(!0))),new MutationObserver(e=>{let t=this.media;for(let i of e)"childList"===i.type&&(i.removedNodes.forEach(e=>{if("media"==e.slot&&i.target==this){let a=i.previousSibling&&i.previousSibling.previousElementSibling;if(a&&t){let t="media"!==a.slot;for(;null!==(a=a.previousSibling);)"media"==a.slot&&(t=!1);t&&this.mediaUnsetCallback(e)}else this.mediaUnsetCallback(e)}}),t&&i.addedNodes.forEach(e=>{e===t&&this.handleMediaUpdated(t)}))}).observe(this,{childList:!0,subtree:!0});let e=!1;aI(this,t=>{e||(setTimeout(()=>{(function(e,t){var i;if(!e.isConnected)return;let a=Object.fromEntries((null!=(i=e.getAttribute(a8.BREAKPOINTS))?i:"sm:384 md:576 lg:768 xl:960").split(/\s+/).map(e=>e.split(":"))),r=Object.keys(a).filter(e=>t>=a[e]),n=!1;if(Object.keys(a).forEach(t=>{if(r.includes(t)){e.hasAttribute(`breakpoint${t}`)||(e.setAttribute(`breakpoint${t}`,""),n=!0);return}e.hasAttribute(`breakpoint${t}`)&&(e.removeAttribute(`breakpoint${t}`),n=!0)}),n){let t=new CustomEvent(i3.BREAKPOINTS_CHANGE,{detail:r});e.dispatchEvent(t)}})(t.target,t.contentRect.width),e=!1,this.breakpointsComputed||(this.breakpointsComputed=!0,this.dispatchEvent(new CustomEvent(i3.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))},0),e=!0)});let t=this.querySelector(":scope > slot[slot=media]");t&&t.addEventListener("slotchange",()=>{if(!t.assignedElements({flatten:!0}).length){a3(this,ua)&&this.mediaUnsetCallback(a3(this,ua));return}this.handleMediaUpdated(this.media)})}static get observedAttributes(){return[a8.AUTOHIDE,a8.GESTURES_DISABLED].concat(a6).filter(e=>![i2.MEDIA_RENDITION_LIST,i2.MEDIA_AUDIO_TRACK_LIST,i2.MEDIA_CHAPTERS_CUES].includes(e))}attributeChangedCallback(e,t,i){e.toLowerCase()==a8.AUTOHIDE&&(this.autohide=i)}get media(){let e=this.querySelector(":scope > [slot=media]");return(null==e?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(a4(this,ua,e),e.localName.includes("-")&&await aA.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;let t=null!=this.getAttribute(a8.AUDIO)?at.AUDIO_PLAYER():at.VIDEO_PLAYER();this.setAttribute("role","region"),this.setAttribute("aria-label",t),this.handleMediaUpdated(this.media),this.setAttribute(a8.USER_INACTIVE,""),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),null==(e=aA.window)||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;this.media&&this.mediaUnsetCallback(this.media),null==(e=aA.window)||e.removeEventListener("mouseup",this)}mediaSetCallback(e){}mediaUnsetCallback(e){a4(this,ua,null)}handleEvent(e){switch(e.type){case"pointerdown":a4(this,ui,e.timeStamp);break;case"pointermove":a9(this,ur,un).call(this,e);break;case"pointerup":a9(this,us,uo).call(this,e);break;case"mouseleave":a9(this,ul,ud).call(this);break;case"mouseup":this.removeAttribute(a8.KEYBOARD_CONTROL);break;case"keyup":a9(this,uh,um).call(this),this.setAttribute(a8.KEYBOARD_CONTROL,"")}}set autohide(e){e=Number(e),this._autohide=isNaN(e)?0:e}get autohide(){return void 0===this._autohide?2:this._autohide}}ui=new WeakMap,ua=new WeakMap,ur=new WeakSet,un=function(e){!("mouse"!==e.pointerType&&e.timeStamp-a3(this,ui)<250)&&(a9(this,uu,uc).call(this),clearTimeout(this._inactiveTimeout),[this,this.media].includes(e.target)&&a9(this,uh,um).call(this))},us=new WeakSet,uo=function(e){if("touch"===e.pointerType){let t=!this.hasAttribute(a8.USER_INACTIVE);[this,this.media].includes(e.target)&&t?a9(this,ul,ud).call(this):a9(this,uh,um).call(this)}else e.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(null==e?void 0:e.localName))&&a9(this,uh,um).call(this)},ul=new WeakSet,ud=function(){if(this.autohide<0||this.hasAttribute(a8.USER_INACTIVE))return;this.setAttribute(a8.USER_INACTIVE,"");let e=new aA.CustomEvent(i3.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(e)},uu=new WeakSet,uc=function(){if(!this.hasAttribute(a8.USER_INACTIVE))return;this.removeAttribute(a8.USER_INACTIVE);let e=new aA.CustomEvent(i3.USER_INACTIVE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(e)},uh=new WeakSet,um=function(){a9(this,uu,uc).call(this),clearTimeout(this._inactiveTimeout),this.autohide<0||(this._inactiveTimeout=setTimeout(()=>{a9(this,ul,ud).call(this)},1e3*this.autohide))},aA.customElements.get("media-container")||aA.customElements.define("media-container",re);var rt=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ri=(e,t,i)=>(rt(e,t,"read from private field"),i?i.call(e):t.get(e)),ra=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rr=(e,t,i,a)=>(rt(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class rn{constructor(e,t,{defaultValue:i}={defaultValue:void 0}){ra(this,uE),ra(this,up,void 0),ra(this,uv,void 0),ra(this,ub,void 0),ra(this,uf,new Set),rr(this,up,e),rr(this,uv,t),rr(this,ub,new Set(i))}[Symbol.iterator](){return ri(this,uE,ug).values()}get length(){return ri(this,uE,ug).size}get value(){var e;return null!=(e=[...ri(this,uE,ug)].join(" "))?e:""}set value(e){var t;e!==this.value&&(rr(this,uf,new Set),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return[...ri(this,uE,ug)][e]}values(){return ri(this,uE,ug).values()}forEach(e){ri(this,uE,ug).forEach(e)}add(...e){var t,i;e.forEach(e=>ri(this,uf).add(e)),(""!==this.value||(null==(t=ri(this,up))?void 0:t.hasAttribute(`${ri(this,uv)}`)))&&(null==(i=ri(this,up))||i.setAttribute(`${ri(this,uv)}`,`${this.value}`))}remove(...e){var t;e.forEach(e=>ri(this,uf).delete(e)),null==(t=ri(this,up))||t.setAttribute(`${ri(this,uv)}`,`${this.value}`)}contains(e){return ri(this,uE,ug).has(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){return this.remove(e),this.add(t),e===t}}up=new WeakMap,uv=new WeakMap,ub=new WeakMap,uf=new WeakMap,uE=new WeakSet,ug=function(){return ri(this,uf).size?ri(this,uf):ri(this,ub)};let rs=(e="")=>e.split(/\s+/),ro=(e="")=>{let[t,i,a]=e.split(":");return{kind:t="cc"===t?"captions":"subtitles",language:i,label:a?decodeURIComponent(a):void 0}},rl=(e="",t={})=>rs(e).map(e=>{let i=ro(e);return{...t,...i}}),rd=e=>e?Array.isArray(e)?e.map(e=>"string"==typeof e?ro(e):e):"string"==typeof e?rl(e):[e]:[],ru=({kind:e,label:t,language:i}={kind:"subtitles"})=>t?`${"captions"===e?"cc":"sb"}:${i}:${encodeURIComponent(t)}`:i,rc=(e=[])=>Array.prototype.map.call(e,ru).join(" "),rh=(e,t)=>i=>i[e]===t,rm=e=>{let t=Object.entries(e).map(([e,t])=>rh(e,t));return e=>t.every(t=>t(e))},rp=(e,t=[],i=[])=>{let a=rd(i).map(rm);Array.from(t).filter(e=>a.some(t=>t(e))).forEach(t=>{t.mode=e})},rv=(e,t=()=>!0)=>{if(!(null==e?void 0:e.textTracks))return[];let i="function"==typeof t?t:rm(t);return Array.from(e.textTracks).filter(i)},rb=e=>{var t;return!!(null==(t=e.mediaSubtitlesShowing)?void 0:t.length)||e.hasAttribute(i2.MEDIA_SUBTITLES_SHOWING)},rf={enter:"requestFullscreen",exit:"exitFullscreen",rootEvents:["fullscreenchange"],mediaEvents:[],element:"fullscreenElement",error:"fullscreenerror",enabled:"fullscreenEnabled"};void 0===ak.fullscreenElement&&(rf.enter="webkitRequestFullScreen",rf.exit=null!=ak.webkitExitFullscreen?"webkitExitFullscreen":"webkitCancelFullScreen",rf.rootEvents=["webkitfullscreenchange"],rf.mediaEvents=["webkitbeginfullscreen","webkitendfullscreen"],rf.element="webkitFullscreenElement",rf.error="webkitfullscreenerror",rf.enabled="webkitFullscreenEnabled");let rE=()=>{var e;return a||(a=null==(e=null==ak?void 0:ak.createElement)?void 0:e.call(ak,"video"))},rg=async(e=rE())=>{if(!e)return!1;let t=e.volume;return e.volume=t/2+.1,await au(0),e.volume!==t},ry=/.*Version\/.*Safari\/.*/.test(aA.navigator.userAgent),r_=(e=rE())=>(!aA.matchMedia("(display-mode: standalone)").matches||!ry)&&"function"==typeof(null==e?void 0:e.requestPictureInPicture),rA=(e=rE())=>{let t=ak[rf.enabled];return!t&&e&&(t="webkitSupportsFullscreen"in e),t},rk=rA(),rT=r_(),rw=!!aA.WebKitPlaybackTargetAvailabilityEvent,rS=!!aA.chrome,rI=e=>rv(e.media,e=>[i4.SUBTITLES,i4.CAPTIONS].includes(e.kind)).sort((e,t)=>e.kind>=t.kind?1:-1),rC=e=>rv(e.media,e=>e.mode===i9.SHOWING&&[i4.SUBTITLES,i4.CAPTIONS].includes(e.kind)),rR=(e,t)=>{let i=rI(e),a=rC(e),r=!!a.length;if(i.length){if(!1===t||r&&!0!==t)rp(i9.DISABLED,i,a);else if(!0===t||!r&&!1!==t){let t=i[0],{options:r}=e;if(!(null==r?void 0:r.noSubtitlesLangPref)){let e=globalThis.localStorage.getItem("media-chrome-pref-subtitles-lang"),a=e?[e,...globalThis.navigator.languages]:globalThis.navigator.languages,r=i.filter(e=>a.some(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))).sort((e,t)=>a.findIndex(t=>e.language.toLowerCase().startsWith(t.split("-")[0]))-a.findIndex(e=>t.language.toLowerCase().startsWith(e.split("-")[0])));r[0]&&(t=r[0])}let{language:n,label:s,kind:o}=t;rp(i9.DISABLED,i,a),rp(i9.SHOWING,i,[{language:n,label:s,kind:o}])}}},rL=(e,t)=>e===t||typeof e==typeof t&&(!!("number"==typeof e&&Number.isNaN(e)&&Number.isNaN(t))||"object"==typeof e&&(Array.isArray(e)?rD(e,t):Object.entries(e).every(([e,i])=>e in t&&rL(i,t[e])))),rD=(e,t)=>{let i=Array.isArray(e),a=Array.isArray(t);return i===a&&(!i&&!a||e.length===t.length&&e.every((e,i)=>rL(e,t[i])))},rx=Object.values(i6),rM=rg().then(e=>r=e),rO=async(...e)=>{await Promise.all(e.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof aA.HTMLElement))return;let t=e.localName;if(!t.includes("-"))return;let i=aA.customElements.get(t);i&&e instanceof i||(await aA.customElements.whenDefined(t),aA.customElements.upgrade(e))}))},rN={mediaPaused:{get(e){var t;let{media:i}=e;return null==(t=null==i?void 0:i.paused)||t},set(e,t){var i;let{media:a}=t;a&&(e?a.pause():null==(i=a.play())||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(e,t){let{media:i}=e;return!!i&&(t?"playing"===t.type:!i.paused)},mediaEvents:["playing","emptied"]},mediaEnded:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.ended)&&t},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.playbackRate)?t:1},set(e,t){let{media:i}=t;i&&Number.isFinite(+e)&&(i.playbackRate=+e)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.muted)&&t},set(e,t){let{media:i}=t;i&&(i.muted=e)},mediaEvents:["volumechange"]},mediaVolume:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.volume)?t:1},set(e,t){let{media:i}=t;if(i){try{null==e?aA.localStorage.removeItem("media-chrome-pref-volume"):aA.localStorage.setItem("media-chrome-pref-volume",e.toString())}catch(e){}Number.isFinite(+e)&&(i.volume=+e)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(e,t)=>{let{options:{noVolumePref:i}}=t;if(!i)try{let i=aA.localStorage.getItem("media-chrome-pref-volume");if(null==i)return;rN.mediaVolume.set(+i,t),e(i)}catch(e){console.debug("Error getting volume pref",e)}}]},mediaVolumeLevel:{get(e){let{media:t}=e;return void 0===(null==t?void 0:t.volume)?"high":t.muted||0===t.volume?"off":t.volume<.5?"low":t.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(e){var t;let{media:i}=e;return null!=(t=null==i?void 0:i.currentTime)?t:0},set(e,t){let{media:i}=t;i&&0!==i.readyState&&(i.currentTime=e)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(e){let{media:t,options:{defaultDuration:i}={}}=e;return i&&(!t||!t.duration||Number.isNaN(t.duration)||!Number.isFinite(t.duration))?i:Number.isFinite(null==t?void 0:t.duration)?t.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(e){let{media:t}=e;return(null==t?void 0:t.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(e){var t;let{media:i}=e;if(!(null==(t=null==i?void 0:i.seekable)?void 0:t.length))return;let a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(a||r)return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(e){var t;let{media:i}=e,a=null!=(t=null==i?void 0:i.buffered)?t:[];return Array.from(a).map((e,t)=>[Number(a.start(t).toFixed(3)),Number(a.end(t).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(e){let{media:t,options:{defaultStreamType:i}={}}=e,a=[i6.LIVE,i6.ON_DEMAND].includes(i)?i:void 0;if(!t)return a;let{streamType:r}=t;if(rx.includes(r))return r===i6.UNKNOWN?a:r;let n=t.duration;return n===1/0?i6.LIVE:Number.isFinite(n)?i6.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(e){let{media:t}=e;if(!t)return Number.NaN;let{targetLiveWindow:i}=t,a=rN.mediaStreamType.get(e);return(null==i||Number.isNaN(i))&&a===i6.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(e){let{media:t,options:{liveEdgeOffset:i=10}={}}=e;if(!t)return!1;if("number"==typeof t.liveEdgeStart)return!Number.isNaN(t.liveEdgeStart)&&t.currentTime>=t.liveEdgeStart;if(rN.mediaStreamType.get(e)!==i6.LIVE)return!1;let a=t.seekable;if(!a)return!0;if(!a.length)return!1;let r=a.end(a.length-1)-i;return t.currentTime>=r},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get:e=>rI(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get:e=>rC(e).map(({kind:e,label:t,language:i})=>({kind:e,label:t,language:i})),mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{var i,a;let{media:r,options:n}=t;if(!r)return;let s=e=>{var i;n.defaultSubtitles&&(e&&![i4.CAPTIONS,i4.SUBTITLES].includes(null==(i=null==e?void 0:e.track)?void 0:i.kind)||rR(t,!0))};return null==(i=r.textTracks)||i.addEventListener("addtrack",s),null==(a=r.textTracks)||a.addEventListener("removetrack",s),s(),()=>{var e,t;null==(e=r.textTracks)||e.removeEventListener("addtrack",s),null==(t=r.textTracks)||t.removeEventListener("removetrack",s)}}]},mediaChaptersCues:{get(e){var t;let{media:i}=e;if(!i)return[];let[a]=rv(i,{kind:i4.CHAPTERS});return Array.from(null!=(t=null==a?void 0:a.cues)?t:[]).map(({text:e,startTime:t,endTime:i})=>({text:e,startTime:t,endTime:i}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(e,t)=>{let{media:i}=t;if(!i)return;let a=i.querySelector('track[kind="chapters"][default][src]');return null==a||a.addEventListener("load",e),()=>{null==a||a.removeEventListener("load",e)}}]},mediaIsPip:{get(e){var t,i;let{media:a,documentElement:r}=e;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return null!=(t=a.localName)&&!!t.includes("-")&&aO(a,r.pictureInPictureElement);if(r.pictureInPictureElement.localName.includes("-")){let e=r.pictureInPictureElement.shadowRoot;for(;null==e?void 0:e.pictureInPictureElement;){if(e.pictureInPictureElement===a)return!0;e=null==(i=e.pictureInPictureElement)?void 0:i.shadowRoot}}return!1},set(e,t){let{media:i}=t;if(i){if(e){if(!ak.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}let e=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(t=>{if(11===t.code){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(0===i.readyState&&"none"===i.preload){let t=()=>{i.removeEventListener("loadedmetadata",a),i.preload="none"},a=()=>{i.requestPictureInPicture().catch(e),t()};i.addEventListener("loadedmetadata",a),i.preload="metadata",setTimeout(()=>{0===i.readyState&&e(),t()},1e3)}else throw t}else throw t})}else ak.pictureInPictureElement&&ak.exitPictureInPicture()}},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.videoRenditions)?t:[]].map(e=>({...e}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(e){var t,i,a;let{media:r}=e;return null==(a=null==(i=null==r?void 0:r.videoRenditions)?void 0:i[null==(t=r.videoRenditions)?void 0:t.selectedIndex])?void 0:a.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}let a=Array.prototype.findIndex.call(i.videoRenditions,t=>t.id==e);i.videoRenditions.selectedIndex!=a&&(i.videoRenditions.selectedIndex=a)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(e){var t;let{media:i}=e;return[...null!=(t=null==i?void 0:i.audioTracks)?t:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(e){var t,i;let{media:a}=e;return null==(i=[...null!=(t=null==a?void 0:a.audioTracks)?t:[]].find(e=>e.enabled))?void 0:i.id},set(e,t){let{media:i}=t;if(!(null==i?void 0:i.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}for(let t of i.audioTracks)t.enabled=e==t.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(e){var t;let{media:i,documentElement:a,fullscreenElement:r=i}=e;if(!i||!a)return!1;if(!a[rf.element])return"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===ae.FULLSCREEN;if(a[rf.element]===r)return!0;if(a[rf.element].localName.includes("-")){let e=a[rf.element].shadowRoot;if(!(rf.element in e))return aO(a[rf.element],r);for(;null==e?void 0:e[rf.element];){if(e[rf.element]===r)return!0;e=null==(t=e[rf.element])?void 0:t.shadowRoot}}return!1},set(e,t){var i,a;let{media:r,fullscreenElement:n,documentElement:s}=t;if(!e&&(null==s?void 0:s[rf.exit])){let e=null==(i=null==s?void 0:s[rf.exit])?void 0:i.call(s);e instanceof Promise&&e.catch(()=>{});return}if(null==n?void 0:n[rf.enter]){let e=null==(a=n[rf.enter])?void 0:a.call(n);e instanceof Promise&&e.catch(()=>{})}else(null==r?void 0:r.webkitEnterFullscreen)?r.webkitEnterFullscreen():(null==r?void 0:r.requestFullscreen)&&r.requestFullscreen()},rootEvents:rf.rootEvents,mediaEvents:rf.mediaEvents},mediaIsCasting:{get(e){var t;let{media:i}=e;return null!=i&&!!i.remote&&(null==(t=i.remote)?void 0:t.state)!=="disconnected"&&!!i.remote.state},set(e,t){var i,a;let{media:r}=t;if(r&&(!e||(null==(i=r.remote)?void 0:i.state)==="disconnected")&&(e||(null==(a=r.remote)?void 0:a.state)==="connected")){if("function"!=typeof r.remote.prompt){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get:()=>!1,set(e,t){let{media:i}=t;if(i){if(!(i.webkitShowPlaybackTargetPicker&&aA.WebKitPlaybackTargetAvailabilityEvent)){console.warn("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(e){let{media:t}=e;if(!rk||!rA(t))return i7.UNSUPPORTED}},mediaPipUnavailable:{get(e){let{media:t}=e;if(!rT||!r_(t))return i7.UNSUPPORTED}},mediaVolumeUnavailable:{get(e){let{media:t}=e;if(!1===r||(null==t?void 0:t.volume)==void 0)return i7.UNSUPPORTED},stateOwnersUpdateHandlers:[e=>{null==r&&rM.then(t=>e(t?void 0:i7.UNSUPPORTED))}]},mediaCastUnavailable:{get(e,{availability:t="not-available"}={}){var i;let{media:a}=e;return rS&&(null==(i=null==a?void 0:a.remote)?void 0:i.state)?null!=t&&"available"!==t?i7.UNAVAILABLE:void 0:i7.UNSUPPORTED},stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaAirplayUnavailable:{get:(e,t)=>rw?(null==t?void 0:t.availability)==="not-available"?i7.UNAVAILABLE:void 0:i7.UNSUPPORTED,mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(e,t)=>{var i;let{media:a}=t;if(a)return a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||null==(i=null==a?void 0:a.remote)||i.watchAvailability(t=>{e({availability:t?"available":"not-available"})}).catch(t=>{"NotSupportedError"===t.name?e({availability:null}):e({availability:"not-available"})}),()=>{var e;null==(e=null==a?void 0:a.remote)||e.cancelWatchAvailability().catch(()=>{})}}]},mediaRenditionUnavailable:{get(e){var t;let{media:i}=e;return(null==i?void 0:i.videoRenditions)?(null==(t=i.videoRenditions)?void 0:t.length)?void 0:i7.UNAVAILABLE:i7.UNSUPPORTED},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(e){var t,i;let{media:a}=e;return(null==a?void 0:a.audioTracks)?(null!=(i=null==(t=a.audioTracks)?void 0:t.length)?i:0)<=1?i7.UNAVAILABLE:void 0:i7.UNSUPPORTED},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]}},rP={[iX.MEDIA_PREVIEW_REQUEST](e,t,{detail:i}){var a,r,n;let s,o;let{media:l}=t,d=null!=i?i:void 0;if(l&&null!=d){let[e]=rv(l,{kind:i4.METADATA,label:"thumbnails"}),t=Array.prototype.find.call(null!=(a=null==e?void 0:e.cues)?a:[],(e,t,i)=>0===t?e.endTime>d:t===i.length-1?e.startTime<=d:e.startTime<=d&&e.endTime>d);if(t){let e=/'^(?:[a-z]+:)?\/\//i.test(t.text)?void 0:null==(r=null==l?void 0:l.querySelector('track[label="thumbnails"]'))?void 0:r.src,i=new URL(t.text,e);o=new URLSearchParams(i.hash).get("#xywh").split(",").map(e=>+e),s=i.href}}let u=e.mediaDuration.get(t),c=null==(n=e.mediaChaptersCues.get(t).find((e,t,i)=>t===i.length-1&&u===e.endTime?e.startTime<=d&&e.endTime>=d:e.startTime<=d&&e.endTime>d))?void 0:n.text;return null!=i&&null==c&&(c=""),{mediaPreviewTime:d,mediaPreviewImage:s,mediaPreviewCoords:o,mediaPreviewChapter:c}},[iX.MEDIA_PAUSE_REQUEST](e,t){e.mediaPaused.set(!0,t)},[iX.MEDIA_PLAY_REQUEST](e,t){var i;if(e.mediaStreamType.get(t)===i6.LIVE){let a=!(e.mediaTargetLiveWindow.get(t)>0),r=null==(i=e.mediaSeekable.get(t))?void 0:i[1];a&&r&&e.mediaCurrentTime.set(r,t)}e.mediaPaused.set(!1,t)},[iX.MEDIA_PLAYBACK_RATE_REQUEST](e,t,{detail:i}){e.mediaPlaybackRate.set(i,t)},[iX.MEDIA_MUTE_REQUEST](e,t){e.mediaMuted.set(!0,t)},[iX.MEDIA_UNMUTE_REQUEST](e,t){e.mediaVolume.get(t)||e.mediaVolume.set(.25,t),e.mediaMuted.set(!1,t)},[iX.MEDIA_VOLUME_REQUEST](e,t,{detail:i}){i&&e.mediaMuted.get(t)&&e.mediaMuted.set(!1,t),e.mediaVolume.set(i,t)},[iX.MEDIA_SEEK_REQUEST](e,t,{detail:i}){e.mediaCurrentTime.set(i,t)},[iX.MEDIA_SEEK_TO_LIVE_REQUEST](e,t){var i;let a=null==(i=e.mediaSeekable.get(t))?void 0:i[1];Number.isNaN(Number(a))&&e.mediaCurrentTime.set(a,t)},[iX.MEDIA_SHOW_SUBTITLES_REQUEST](e,t,{detail:i}){var a;let{options:r}=t,n=rI(t),s=rd(i),o=null==(a=s[0])?void 0:a.language;o&&!r.noSubtitlesLangPref&&aA.localStorage.setItem("media-chrome-pref-subtitles-lang",o),rp(i9.SHOWING,n,s)},[iX.MEDIA_DISABLE_SUBTITLES_REQUEST](e,t,{detail:i}){let a=rI(t);rp(i9.DISABLED,a,null!=i?i:[])},[iX.MEDIA_TOGGLE_SUBTITLES_REQUEST](e,t,{detail:i}){rR(t,i)},[iX.MEDIA_RENDITION_REQUEST](e,t,{detail:i}){e.mediaRenditionSelected.set(i,t)},[iX.MEDIA_AUDIO_TRACK_REQUEST](e,t,{detail:i}){e.mediaAudioTrackEnabled.set(i,t)},[iX.MEDIA_ENTER_PIP_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsPip.set(!0,t)},[iX.MEDIA_EXIT_PIP_REQUEST](e,t){e.mediaIsPip.set(!1,t)},[iX.MEDIA_ENTER_FULLSCREEN_REQUEST](e,t){e.mediaIsPip.get(t)&&e.mediaIsPip.set(!1,t),e.mediaIsFullscreen.set(!0,t)},[iX.MEDIA_EXIT_FULLSCREEN_REQUEST](e,t){e.mediaIsFullscreen.set(!1,t)},[iX.MEDIA_ENTER_CAST_REQUEST](e,t){e.mediaIsFullscreen.get(t)&&e.mediaIsFullscreen.set(!1,t),e.mediaIsCasting.set(!0,t)},[iX.MEDIA_EXIT_CAST_REQUEST](e,t){e.mediaIsCasting.set(!1,t)},[iX.MEDIA_AIRPLAY_REQUEST](e,t){e.mediaIsAirplaying.set(!0,t)}};var rU=({media:e,fullscreenElement:t,documentElement:i,stateMediator:a=rN,requestMap:r=rP,options:n={},monitorStateOwnersOnlyWithSubscriptions:s=!0})=>{let o;let l=[],d={options:{...n}},u=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0}),c=e=>{void 0==e||rL(e,u)||(u=Object.freeze({...u,...e}),l.forEach(e=>e(u)))},h=()=>{c(Object.entries(a).reduce((e,[t,{get:i}])=>(e[t]=i(d),e),{}))},m={},p=async(e,t)=>{var i,r,n,u,p,v,b,f,E,g,y,_,A,k,T,w;let S=!!o;if(o={...d,...null!=o?o:{},...e},S)return;await rO(...Object.values(e));let I=l.length>0&&0===t&&s,C=d.media!==o.media,R=(null==(i=d.media)?void 0:i.textTracks)!==(null==(r=o.media)?void 0:r.textTracks),L=(null==(n=d.media)?void 0:n.videoRenditions)!==(null==(u=o.media)?void 0:u.videoRenditions),D=(null==(p=d.media)?void 0:p.audioTracks)!==(null==(v=o.media)?void 0:v.audioTracks),x=(null==(b=d.media)?void 0:b.remote)!==(null==(f=o.media)?void 0:f.remote),M=d.documentElement!==o.documentElement,O=!!d.media&&(C||I),N=!!(null==(E=d.media)?void 0:E.textTracks)&&(R||I),P=!!(null==(g=d.media)?void 0:g.videoRenditions)&&(L||I),U=!!(null==(y=d.media)?void 0:y.audioTracks)&&(D||I),B=!!(null==(_=d.media)?void 0:_.remote)&&(x||I),W=!!d.documentElement&&(M||I),H=O||N||P||U||B||W,V=0===l.length&&1===t&&s,q=!!o.media&&(C||V),F=!!(null==(A=o.media)?void 0:A.textTracks)&&(R||V),$=!!(null==(k=o.media)?void 0:k.videoRenditions)&&(L||V),j=!!(null==(T=o.media)?void 0:T.audioTracks)&&(D||V),K=!!(null==(w=o.media)?void 0:w.remote)&&(x||V),Y=!!o.documentElement&&(M||V),G=q||F||$||j||K||Y;if(!(H||G)){Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0;return}Object.entries(a).forEach(([e,{get:t,mediaEvents:i=[],textTracksEvents:a=[],videoRenditionsEvents:r=[],audioTracksEvents:n=[],remoteEvents:s=[],rootEvents:l=[],stateOwnersUpdateHandlers:u=[]}])=>{let h;m[e]||(m[e]={});let p=i=>{c({[e]:t(d,i)})};h=m[e].mediaEvents,i.forEach(t=>{h&&O&&(d.media.removeEventListener(t,h),m[e].mediaEvents=void 0),q&&(o.media.addEventListener(t,p),m[e].mediaEvents=p)}),h=m[e].textTracksEvents,a.forEach(t=>{var i,a;h&&N&&(null==(i=d.media.textTracks)||i.removeEventListener(t,h),m[e].textTracksEvents=void 0),F&&(null==(a=o.media.textTracks)||a.addEventListener(t,p),m[e].textTracksEvents=p)}),h=m[e].videoRenditionsEvents,r.forEach(t=>{var i,a;h&&P&&(null==(i=d.media.videoRenditions)||i.removeEventListener(t,h),m[e].videoRenditionsEvents=void 0),$&&(null==(a=o.media.videoRenditions)||a.addEventListener(t,p),m[e].videoRenditionsEvents=p)}),h=m[e].audioTracksEvents,n.forEach(t=>{var i,a;h&&U&&(null==(i=d.media.audioTracks)||i.removeEventListener(t,h),m[e].audioTracksEvents=void 0),j&&(null==(a=o.media.audioTracks)||a.addEventListener(t,p),m[e].audioTracksEvents=p)}),h=m[e].remoteEvents,s.forEach(t=>{var i,a;h&&B&&(null==(i=d.media.remote)||i.removeEventListener(t,h),m[e].remoteEvents=void 0),K&&(null==(a=o.media.remote)||a.addEventListener(t,p),m[e].remoteEvents=p)}),h=m[e].rootEvents,l.forEach(t=>{h&&W&&(d.documentElement.removeEventListener(t,h),m[e].rootEvents=void 0),Y&&(o.documentElement.addEventListener(t,p),m[e].rootEvents=p)});let v=m[e].stateOwnersUpdateHandlers;u.forEach(t=>{v&&H&&v(),G&&(m[e].stateOwnersUpdateHandlers=t(p,o))})}),Object.entries(o).forEach(([e,t])=>{d[e]=t}),h(),o=void 0};return p({media:e,fullscreenElement:t,documentElement:i,options:n}),{dispatch(e){let{type:t,detail:i}=e;if(r[t]){c(r[t](a,d,e));return}"mediaelementchangerequest"===t?p({media:i}):"fullscreenelementchangerequest"===t?p({fullscreenElement:i}):"documentelementchangerequest"===t?p({documentElement:i}):"optionschangerequest"===t&&Object.entries(null!=i?i:{}).forEach(([e,t])=>{d.options[e]=t})},getState:()=>u,subscribe:e=>(p({},l.length+1),l.push(e),e(u),()=>{let t=l.indexOf(e);t>=0&&(p({},l.length-1),l.splice(t,1))})}},rB=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},rW=(e,t,i)=>(rB(e,t,"read from private field"),i?i.call(e):t.get(e)),rH=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},rV=(e,t,i,a)=>(rB(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),rq=(e,t,i)=>(rB(e,t,"access private method"),i);let rF=["ArrowLeft","ArrowRight","Enter"," ","f","m","k","c"],r$={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYS_USED:"keysused",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_HOTKEYS:"nohotkeys",NO_VOLUME_PREF:"novolumepref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_DEFAULT_STORE:"nodefaultstore",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset"};class rj extends re{constructor(){super(),rH(this,uS),rH(this,uC),rH(this,uL),rH(this,uy,new rn(this,r$.HOTKEYS)),rH(this,u_,void 0),rH(this,uA,void 0),rH(this,uk,void 0),rH(this,uT,void 0),rH(this,uw,e=>{var t;null==(t=rW(this,uA))||t.dispatch(e)}),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,this.associateElement(this);let e={};rV(this,uk,t=>{Object.entries(t).forEach(([t,i])=>{if(t in e&&e[t]===i)return;this.propagateMediaState(t,i);let a=t.toLowerCase(),r=new aA.CustomEvent(i5[a],{composed:!0,detail:i});this.dispatchEvent(r)}),e=t}),this.enableHotkeys()}static get observedAttributes(){return super.observedAttributes.concat(r$.NO_HOTKEYS,r$.HOTKEYS,r$.DEFAULT_STREAM_TYPE,r$.DEFAULT_SUBTITLES,r$.DEFAULT_DURATION)}get mediaStore(){return rW(this,uA)}set mediaStore(e){var t,i;if(rW(this,uA)&&(null==(t=rW(this,uT))||t.call(this),rV(this,uT,void 0)),rV(this,uA,e),!rW(this,uA)&&!this.hasAttribute(r$.NO_DEFAULT_STORE)){rq(this,uS,uI).call(this);return}rV(this,uT,null==(i=rW(this,uA))?void 0:i.subscribe(rW(this,uk)))}get fullscreenElement(){var e;return null!=(e=rW(this,u_))?e:this}set fullscreenElement(e){var t;this.hasAttribute(r$.FULLSCREEN_ELEMENT)&&this.removeAttribute(r$.FULLSCREEN_ELEMENT),rV(this,u_,e),null==(t=rW(this,uA))||t.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}attributeChangedCallback(e,t,i){var a,r,n,s,o,l;if(super.attributeChangedCallback(e,t,i),e===r$.NO_HOTKEYS)i!==t&&""===i?(this.hasAttribute(r$.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):i!==t&&null===i&&this.enableHotkeys();else if(e===r$.HOTKEYS)rW(this,uy).value=i;else if(e===r$.DEFAULT_SUBTITLES&&i!==t)null==(a=rW(this,uA))||a.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(r$.DEFAULT_SUBTITLES)}});else if(e===r$.DEFAULT_STREAM_TYPE)null==(n=rW(this,uA))||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:null!=(r=this.getAttribute(r$.DEFAULT_STREAM_TYPE))?r:void 0}});else if(e===r$.LIVE_EDGE_OFFSET)null==(s=rW(this,uA))||s.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(r$.LIVE_EDGE_OFFSET)?+this.getAttribute(r$.LIVE_EDGE_OFFSET):void 0}});else if(e===r$.FULLSCREEN_ELEMENT){let e=i?null==(o=this.getRootNode())?void 0:o.getElementById(i):void 0;rV(this,u_,e),null==(l=rW(this,uA))||l.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}}connectedCallback(){var e,t;rW(this,uA)||this.hasAttribute(r$.NO_DEFAULT_STORE)||rq(this,uS,uI).call(this),null==(e=rW(this,uA))||e.dispatch({type:"documentelementchangerequest",detail:ak}),super.connectedCallback(),rW(this,uA)&&!rW(this,uT)&&rV(this,uT,null==(t=rW(this,uA))?void 0:t.subscribe(rW(this,uk))),this.enableHotkeys()}disconnectedCallback(){var e,t,i,a;null==(e=super.disconnectedCallback)||e.call(this),rW(this,uA)&&(null==(t=rW(this,uA))||t.dispatch({type:"documentelementchangerequest",detail:void 0}),null==(i=rW(this,uA))||i.dispatch({type:iX.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})),rW(this,uT)&&(null==(a=rW(this,uT))||a.call(this),rV(this,uT,void 0))}mediaSetCallback(e){var t;super.mediaSetCallback(e),null==(t=rW(this,uA))||t.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var t;super.mediaUnsetCallback(e),null==(t=rW(this,uA))||t.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,t){r2(this.mediaStateReceivers,e,t)}associateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;if(t.has(e))return;let i=r3(e,this.registerMediaStateReceiver.bind(this),this.unregisterMediaStateReceiver.bind(this));Object.values(iX).forEach(t=>{e.addEventListener(t,rW(this,uw))}),t.set(e,i)}unassociateElement(e){if(!e)return;let{associatedElementSubscriptions:t}=this;t.has(e)&&(t.get(e)(),t.delete(e),Object.values(iX).forEach(t=>{e.removeEventListener(t,rW(this,uw))}))}registerMediaStateReceiver(e){if(!e)return;let t=this.mediaStateReceivers;!(t.indexOf(e)>-1)&&(t.push(e),rW(this,uA)&&Object.entries(rW(this,uA).getState()).forEach(([t,i])=>{r2([e],t,i)}))}unregisterMediaStateReceiver(e){let t=this.mediaStateReceivers,i=t.indexOf(e);i<0||t.splice(i,1)}enableHotkeys(){this.addEventListener("keydown",rq(this,uL,uD))}disableHotkeys(){this.removeEventListener("keydown",rq(this,uL,uD)),this.removeEventListener("keyup",rq(this,uC,uR))}get hotkeys(){return rW(this,uy)}keyboardShortcutHandler(e){var t,i,a,r,n,s;let o,l,d;if(!((null!=(r=null!=(a=null==(t=e.target.getAttribute(r$.KEYS_USED))?void 0:t.split(" "))?a:null==(i=e.target)?void 0:i.keysUsed)?r:[]).map(e=>"Space"===e?" ":e).filter(Boolean).includes(e.key)||rW(this,uy).contains(`no${e.key.toLowerCase()}`))&&!(" "===e.key&&rW(this,uy).contains("nospace")))switch(e.key){case" ":case"k":o=rW(this,uA).getState().mediaPaused?iX.MEDIA_PLAY_REQUEST:iX.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new aA.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"m":o="off"===this.mediaStore.getState().mediaVolumeLevel?iX.MEDIA_UNMUTE_REQUEST:iX.MEDIA_MUTE_REQUEST,this.dispatchEvent(new aA.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"f":o=this.mediaStore.getState().mediaIsFullscreen?iX.MEDIA_EXIT_FULLSCREEN_REQUEST:iX.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new aA.CustomEvent(o,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new aA.CustomEvent(iX.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":{let e=this.hasAttribute(r$.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(r$.KEYBOARD_BACKWARD_SEEK_OFFSET):10;l=Math.max((null!=(n=this.mediaStore.getState().mediaCurrentTime)?n:0)-e,0),d=new aA.CustomEvent(iX.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(d);break}case"ArrowRight":{let e=this.hasAttribute(r$.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(r$.KEYBOARD_FORWARD_SEEK_OFFSET):10;l=Math.max((null!=(s=this.mediaStore.getState().mediaCurrentTime)?s:0)+e,0),d=new aA.CustomEvent(iX.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:l}),this.dispatchEvent(d)}}}}uy=new WeakMap,u_=new WeakMap,uA=new WeakMap,uk=new WeakMap,uT=new WeakMap,uw=new WeakMap,uS=new WeakSet,uI=function(){var e;this.mediaStore=rU({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(r$.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(r$.DEFAULT_DURATION)?+this.getAttribute(r$.DEFAULT_DURATION):void 0,defaultStreamType:null!=(e=this.getAttribute(r$.DEFAULT_STREAM_TYPE))?e:void 0,liveEdgeOffset:this.hasAttribute(r$.LIVE_EDGE_OFFSET)?+this.getAttribute(r$.LIVE_EDGE_OFFSET):void 0,noVolumePref:this.hasAttribute(r$.NO_VOLUME_PREF),noSubtitlesLangPref:this.hasAttribute(r$.NO_SUBTITLES_LANG_PREF)}})},uC=new WeakSet,uR=function(e){let{key:t}=e;if(!rF.includes(t)){this.removeEventListener("keyup",rq(this,uC,uR));return}this.keyboardShortcutHandler(e)},uL=new WeakSet,uD=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!rF.includes(a)){this.removeEventListener("keyup",rq(this,uC,uR));return}[" ","ArrowLeft","ArrowRight"].includes(a)&&!(rW(this,uy).contains(`no${a.toLowerCase()}`)||" "===a&&rW(this,uy).contains("nospace"))&&e.preventDefault(),this.addEventListener("keyup",rq(this,uC,uR),{once:!0})};let rK=Object.values(i2),rY=Object.values(i0),rG=e=>{var t,i,a,r;let{observedAttributes:n}=e.constructor;!n&&(null==(t=e.nodeName)?void 0:t.includes("-"))&&(aA.customElements.upgrade(e),{observedAttributes:n}=e.constructor);let s=null==(r=null==(a=null==(i=null==e?void 0:e.getAttribute)?void 0:i.call(e,iJ.MEDIA_CHROME_ATTRIBUTES))?void 0:a.split)?void 0:r.call(a,/\s+/);return Array.isArray(n||s)?(n||s).filter(e=>rK.includes(e)):[]},rZ=e=>{var t,i;return(null==(t=e.nodeName)?void 0:t.includes("-"))&&aA.customElements.get(null==(i=e.nodeName)?void 0:i.toLowerCase())&&!(e instanceof aA.customElements.get(e.nodeName.toLowerCase()))&&aA.customElements.upgrade(e),rY.some(t=>t in e)},rQ=e=>rZ(e)||!!rG(e).length,rz=e=>{var t;return null==(t=null==e?void 0:e.join)?void 0:t.call(e,":")},rX={[i2.MEDIA_SUBTITLES_LIST]:rc,[i2.MEDIA_SUBTITLES_SHOWING]:rc,[i2.MEDIA_SEEKABLE]:rz,[i2.MEDIA_BUFFERED]:e=>null==e?void 0:e.map(rz).join(" "),[i2.MEDIA_PREVIEW_COORDS]:e=>null==e?void 0:e.join(" "),[i2.MEDIA_RENDITION_LIST]:function(e){return null==e?void 0:e.map(ar).join(" ")},[i2.MEDIA_AUDIO_TRACK_LIST]:function(e){return null==e?void 0:e.map(ao).join(" ")}},rJ=async(e,t,i)=>{var a,r;if(e.isConnected||await au(0),"boolean"==typeof i||null==i)return a$(e,t,i);if("number"==typeof i)return aq(e,t,i);if("string"==typeof i)return aK(e,t,i);if(Array.isArray(i)&&!i.length)return e.removeAttribute(t);let n=null!=(r=null==(a=rX[t])?void 0:a.call(rX,i))?r:i;return e.setAttribute(t,n)},r0=e=>{var t;return!!(null==(t=e.closest)?void 0:t.call(e,'*[slot="media"]'))},r1=(e,t)=>{if(r0(e))return;let i=(e,t)=>{var i,a;rQ(e)&&t(e);let{children:r=[]}=null!=e?e:{};[...r,...null!=(a=null==(i=null==e?void 0:e.shadowRoot)?void 0:i.children)?a:[]].forEach(e=>r1(e,t))},a=null==e?void 0:e.nodeName.toLowerCase();if(a.includes("-")&&!rQ(e)){aA.customElements.whenDefined(a).then(()=>{i(e,t)});return}i(e,t)},r2=(e,t,i)=>{e.forEach(e=>{if(t in e){e[t]=i;return}let a=rG(e),r=t.toLowerCase();a.includes(r)&&rJ(e,r,i)})},r3=(e,t,i)=>{r1(e,t);let a=e=>{var i;t(null!=(i=null==e?void 0:e.composedPath()[0])?i:e.target)},r=e=>{var t;i(null!=(t=null==e?void 0:e.composedPath()[0])?t:e.target)};e.addEventListener(iX.REGISTER_MEDIA_STATE_RECEIVER,a),e.addEventListener(iX.UNREGISTER_MEDIA_STATE_RECEIVER,r);let n=[],s=e=>{let a=e.target;"media"!==a.name&&(n.forEach(e=>r1(e,i)),(n=[...a.assignedElements({flatten:!0})]).forEach(e=>r1(e,t)))};e.addEventListener("slotchange",s);let o=new MutationObserver(e=>{e.forEach(e=>{let{addedNodes:a=[],removedNodes:r=[],type:n,target:s,attributeName:o}=e;"childList"===n?(Array.prototype.forEach.call(a,e=>r1(e,t)),Array.prototype.forEach.call(r,e=>r1(e,i))):"attributes"===n&&o===iJ.MEDIA_CHROME_ATTRIBUTES&&(rQ(s)?t(s):i(s))})});return o.observe(e,{childList:!0,attributes:!0,subtree:!0}),()=>{r1(e,i),e.removeEventListener("slotchange",s),o.disconnect(),e.removeEventListener(iX.REGISTER_MEDIA_STATE_RECEIVER,a),e.removeEventListener(iX.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};aA.customElements.get("media-controller")||aA.customElements.define("media-controller",rj);var r5=Object.defineProperty,r4=(e,t,i)=>t in e?r5(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,r9=(e,t,i)=>(r4(e,"symbol"!=typeof t?t+"":t,i),i),r8=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},r7=(e,t,i)=>(r8(e,t,"read from private field"),i?i.call(e):t.get(e)),r6=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},ne=(e,t,i,a)=>(r8(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let nt=ak.createElement("template");nt.innerHTML=`
<style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, bold)
      var(--media-font-size, 14px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
    padding: var(--media-button-padding, var(--media-control-padding, 10px));
    justify-content: var(--media-button-justify-content, center);
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    box-sizing: border-box;
    transition: background .15s linear;
    pointer-events: auto;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }
  
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }
</style>
`;class ni extends aA.HTMLElement{constructor(e={}){if(super(),r6(this,ux,void 0),r9(this,"preventClick",!1),r6(this,uM,e=>{this.preventClick||this.handleClick(e)}),r6(this,uO,e=>{let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",r7(this,uO));return}this.preventClick||this.handleClick(e)}),r6(this,uN,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",r7(this,uO));return}this.addEventListener("keyup",r7(this,uO),{once:!0})}),!this.shadowRoot){this.attachShadow({mode:"open"});let t=nt.content.cloneNode(!0);this.nativeEl=t;let i=e.slotTemplate;i||((i=ak.createElement("template")).innerHTML=`<slot>${e.defaultContent||""}</slot>`),this.nativeEl.appendChild(i.content.cloneNode(!0)),this.shadowRoot.appendChild(t)}}static get observedAttributes(){return["disabled",iJ.MEDIA_CONTROLLER]}enable(){this.addEventListener("click",r7(this,uM)),this.addEventListener("keydown",r7(this,uN)),this.tabIndex=0}disable(){this.removeEventListener("click",r7(this,uM)),this.removeEventListener("keydown",r7(this,uN)),this.removeEventListener("keyup",r7(this,uO)),this.tabIndex=-1}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===iJ.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=r7(this,ux))?void 0:a.unassociateElement)||r.call(a,this),ne(this,ux,null)),i&&this.isConnected&&(ne(this,ux,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=r7(this,ux))?void 0:s.associateElement)||o.call(s,this))):"disabled"===e&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){var e,t,i;let{style:a}=aW(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","button");let r=this.getAttribute(iJ.MEDIA_CONTROLLER);r&&(ne(this,ux,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=r7(this,ux))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=r7(this,ux))?void 0:e.unassociateElement)||t.call(e,this),ne(this,ux,null)}get keysUsed(){return["Enter"," "]}handleClick(e){}}ux=new WeakMap,uM=new WeakMap,uO=new WeakMap,uN=new WeakMap,aA.customElements.get("media-chrome-button")||aA.customElements.define("media-chrome-button",ni);let na=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,nr=ak.createElement("template");nr.innerHTML=`
  <style>
  :host([${i2.MEDIA_IS_AIRPLAYING}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${i2.MEDIA_IS_AIRPLAYING}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${na}</slot>
    <slot name="exit">${na}</slot>
  </slot>
`;let nn=e=>{let t=e.mediaIsAirplaying?ai.EXIT_AIRPLAY():ai.ENTER_AIRPLAY();e.setAttribute("aria-label",t)};class ns extends ni{static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_IS_AIRPLAYING,i2.MEDIA_AIRPLAY_UNAVAILABLE]}constructor(e={}){super({slotTemplate:nr,...e})}connectedCallback(){super.connectedCallback(),nn(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i2.MEDIA_IS_AIRPLAYING&&nn(this)}get mediaIsAirplaying(){return aF(this,i2.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){a$(this,i2.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return aj(this,i2.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){aK(this,i2.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){let e=new aA.CustomEvent(iX.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}function no(e){return e.split("-")[0]}aA.customElements.get("media-airplay-button")||aA.customElements.define("media-airplay-button",ns);var nl=Object.defineProperty,nd=(e,t,i)=>t in e?nl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,nu=(e,t,i)=>(nd(e,"symbol"!=typeof t?t+"":t,i),i);class nc extends Event{constructor({action:e="auto",relatedTarget:t,...i}){super("invoke",i),nu(this,"action"),nu(this,"relatedTarget"),this.action=e,this.relatedTarget=t}}class nh extends Event{constructor({newState:e,oldState:t,...i}){super("toggle",i),nu(this,"newState"),nu(this,"oldState"),this.newState=e,this.oldState=t}}var nm=Object.defineProperty,np=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nv=(e,t,i)=>(np(e,t,"read from private field"),i?i.call(e):t.get(e)),nb=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nf=(e,t,i,a)=>(np(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nE=(e,t,i)=>(np(e,t,"access private method"),i);function ng({type:e,text:t,value:i,checked:a}){let r=ak.createElement("media-chrome-menu-item");r.type=null!=e?e:"",r.part.add("menu-item"),e&&r.part.add(e),r.value=i,r.checked=a;let n=ak.createElement("span");return n.textContent=t,r.append(n),r}function ny(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);if((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)return i.cloneNode(!0);let a=e.shadowRoot.querySelector(`[name="${t}"] > svg`);return a?a.cloneNode(!0):""}let n_=ak.createElement("template");n_.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
      border-radius: var(--media-menu-border-radius);
      border: var(--media-menu-border, none);
      display: var(--media-menu-display, inline-flex);
      transition: var(--media-menu-transition-in,
        visibility 0s,
        opacity .2s ease-out,
        transform .15s ease-out,
        left .2s ease-in-out,
        min-width .2s ease-in-out,
        min-height .2s ease-in-out
      ) !important;
      
      visibility: var(--media-menu-visibility, visible);
      opacity: var(--media-menu-opacity, 1);
      max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
      transform: var(--media-menu-transform-in, translateY(0) scale(1));
      flex-direction: column;
      
      min-height: 0;
      position: relative;
      box-sizing: border-box;
    }

    :host([hidden]) {
      transition: var(--media-menu-transition-out,
        visibility .15s ease-in,
        opacity .15s ease-in,
        transform .15s ease-in
      ) !important;
      visibility: var(--media-menu-hidden-visibility, hidden);
      opacity: var(--media-menu-hidden-opacity, 0);
      max-height: var(--media-menu-hidden-max-height,
        var(--media-menu-max-height, var(--_menu-max-height, 300px)));
      transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
      pointer-events: none;
    }

    :host([slot="submenu"]) {
      background: none;
      width: 100%;
      min-height: 100%;
      position: absolute;
      bottom: 0;
      right: -100%;
    }

    #container {
      display: flex;
      flex-direction: column;
      min-height: 0;
      transition: transform .2s ease-out;
      transform: translate(0, 0);
    }

    #container.has-expanded {
      transition: transform .2s ease-in;
      transform: translate(-100%, 0);
    }

    slot[name="header"] {
      display: flex;
      padding: .4em .7em;
      border-bottom: 1px solid rgb(255 255 255 / .25);
      cursor: default;
    }

    slot[name="header"][hidden] {
      display: none;
    }

    button[part~="back"] {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      display: inline-flex;
      align-items: center;
      cursor: pointer;
    }

    svg[part~="back"] {
      height: var(--media-menu-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
      margin-right: .5ch;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap);
      flex-direction: var(--media-menu-flex-direction, column);
      overflow: var(--media-menu-overflow, hidden auto);
      display: flex;
      min-height: 0;
    }

    :host([role="menu"]) slot:not([name]) {
      padding-block: .4em;
    }

    slot:not([name])::slotted([role="menu"]) {
      background: none;
    }

    media-chrome-menu-item > span {
      margin-right: .5ch;
      max-width: var(--media-menu-item-max-width);
      text-overflow: ellipsis;
      overflow: hidden;
    }
  </style>
  <style id="layout-row" media="width:0">

    slot[name="header"] {
      padding: .4em .5em;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap, .25em);
      flex-direction: var(--media-menu-flex-direction, row);
      padding-inline: .5em;
    }

    media-chrome-menu-item {
      padding: .3em .5em;
    }

    media-chrome-menu-item[aria-checked="true"] {
      background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
    }

    
    media-chrome-menu-item::part(checked-indicator) {
      display: var(--media-menu-item-checked-indicator-display, none);
    }
  </style>
  <div id="container">
    <slot name="header" hidden>
      <button part="back button" aria-label="Back to previous menu">
        <slot name="back-icon">
          <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
            <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
          </svg>
        </slot>
        <slot name="title"></slot>
      </button>
    </slot>
    <slot></slot>
  </div>
  <slot name="checked-indicator" hidden></slot>
`;let nA={STYLE:"style",HIDDEN:"hidden",DISABLED:"disabled",ANCHOR:"anchor"};class nk extends aA.HTMLElement{constructor(){super(),nb(this,u$),nb(this,uY),nb(this,uZ),nb(this,uz),nb(this,uJ),nb(this,u3),nb(this,u4),nb(this,u8),nb(this,u6),nb(this,ct),nb(this,ca),nb(this,cn),nb(this,co),nb(this,cd),nb(this,cc),nb(this,cm),nb(this,cv),nb(this,uP,void 0),nb(this,uU,void 0),nb(this,uB,void 0),nb(this,uW,""),nb(this,uH,null),nb(this,uV,new Set),nb(this,uq,void 0),nb(this,uF,!1),nb(this,uK,()=>{let e=nv(this,uV),t=new Set(this.items);for(let i of e)t.has(i)||this.dispatchEvent(new CustomEvent("removemenuitem",{detail:i}));for(let i of t)e.has(i)||this.dispatchEvent(new CustomEvent("addmenuitem",{detail:i}));nf(this,uV,t)}),nb(this,u1,()=>{nE(this,u3,u5).call(this,!1),nE(this,u4,u9).call(this,!1)}),nb(this,u2,()=>{nE(this,u3,u5).call(this,!1)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=this.constructor.template.content.cloneNode(!0),this.shadowRoot.append(this.nativeEl)),this.container=this.shadowRoot.querySelector("#container"),this.defaultSlot=this.shadowRoot.querySelector("slot:not([name])"),this.shadowRoot.addEventListener("slotchange",this),nf(this,uq,new MutationObserver(nv(this,uK))),nv(this,uq).observe(this.defaultSlot,{childList:!0})}static get observedAttributes(){return[nA.DISABLED,nA.HIDDEN,nA.STYLE,nA.ANCHOR,iJ.MEDIA_CONTROLLER]}static formatMenuItemText(e){return e}enable(){this.addEventListener("click",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this),this.addEventListener("invoke",this),this.addEventListener("toggle",this)}disable(){this.removeEventListener("click",this),this.removeEventListener("focusout",this),this.removeEventListener("keyup",this),this.removeEventListener("invoke",this),this.removeEventListener("toggle",this)}handleEvent(e){switch(e.type){case"slotchange":nE(this,u$,uj).call(this,e);break;case"invoke":nE(this,uZ,uQ).call(this,e);break;case"click":nE(this,u8,u7).call(this,e);break;case"toggle":nE(this,ct,ci).call(this,e);break;case"focusout":nE(this,cn,cs).call(this,e);break;case"keydown":nE(this,co,cl).call(this,e)}}connectedCallback(){var e,t;nE(this,uY,uG).call(this),this.hasAttribute("disabled")||this.enable(),this.role||(this.role="menu"),nf(this,uP,aL(this)),null==(t=null==(e=nv(this,uP))?void 0:e.associateElement)||t.call(e,this),this.hidden||(aI(nw(this),nv(this,u1)),aI(this,nv(this,u2)))}disconnectedCallback(){var e,t;aC(nw(this),nv(this,u1)),aC(this,nv(this,u2)),this.disable(),null==(t=null==(e=nv(this,uP))?void 0:e.unassociateElement)||t.call(e,this),nf(this,uP,null)}attributeChangedCallback(e,t,i){var a,r,n,s;e===nA.HIDDEN&&i!==t?(nv(this,uF)||nf(this,uF,!0),this.hidden?nE(this,uJ,u0).call(this):nE(this,uz,uX).call(this),this.dispatchEvent(new nh({oldState:this.hidden?"open":"closed",newState:this.hidden?"closed":"open",bubbles:!0}))):e===iJ.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=nv(this,uP))?void 0:a.unassociateElement)||r.call(a,this),nf(this,uP,null)),i&&this.isConnected&&(nf(this,uP,aL(this)),null==(s=null==(n=nv(this,uP))?void 0:n.associateElement)||s.call(n,this))):e===nA.DISABLED&&i!==t?null==i?this.enable():this.disable():e===nA.STYLE&&i!==t&&nE(this,uY,uG).call(this)}formatMenuItemText(e,t){return this.constructor.formatMenuItemText(e,t)}get anchor(){return this.getAttribute("anchor")}set anchor(e){this.setAttribute("anchor",`${e}`)}get anchorElement(){var e;return this.anchor?null==(e=aU(this))?void 0:e.querySelector(`#${this.anchor}`):null}get items(){return this.defaultSlot.assignedElements({flatten:!0}).filter(nT)}get radioGroupItems(){return this.items.filter(e=>"menuitemradio"===e.role)}get checkedItems(){return this.items.filter(e=>e.checked)}get value(){var e,t;return null!=(t=null==(e=this.checkedItems[0])?void 0:e.value)?t:""}set value(e){let t=this.items.find(t=>t.value===e);t&&nE(this,cv,cb).call(this,t)}focus(){if(nf(this,uU,aP()),this.items.length){nE(this,cm,cp).call(this,this.items[0]),this.items[0].focus();return}let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}handleSelect(e){var t;let i=nE(this,cd,cu).call(this,e);i&&(nE(this,cv,cb).call(this,i,"checkbox"===i.type),nv(this,uB)&&!this.hidden&&(null==(t=nv(this,uU))||t.focus(),this.hidden=!0))}get keysUsed(){return["Enter","Escape","Tab"," ","ArrowDown","ArrowUp","Home","End"]}handleMove(e){var t,i;let{key:a}=e,r=this.items,n=null!=(i=null!=(t=nE(this,cd,cu).call(this,e))?t:nE(this,cc,ch).call(this))?i:r[0],s=Math.max(0,r.indexOf(n));"ArrowDown"===a?s++:"ArrowUp"===a?s--:"Home"===e.key?s=0:"End"===e.key&&(s=r.length-1),s<0&&(s=r.length-1),s>r.length-1&&(s=0),nE(this,cm,cp).call(this,r[s]),r[s].focus()}}function nT(e){return["menuitem","menuitemradio","menuitemcheckbox"].includes(null==e?void 0:e.role)}function nw(e){var t;return null!=(t=e.getAttribute("bounds")?aN(e,`#${e.getAttribute("bounds")}`):aR(e)||e.parentElement)?t:e}uP=new WeakMap,uU=new WeakMap,uB=new WeakMap,uW=new WeakMap,uH=new WeakMap,uV=new WeakMap,uq=new WeakMap,uF=new WeakMap,u$=new WeakSet,uj=function(e){let t=e.target;for(let e of t.assignedNodes({flatten:!0}))3===e.nodeType&&""===e.textContent.trim()&&e.remove();["header","title"].includes(t.name)&&(this.shadowRoot.querySelector('slot[name="header"]').hidden=0===t.assignedNodes().length),t.name||nv(this,uK).call(this)},uK=new WeakMap,uY=new WeakSet,uG=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=null==(e=getComputedStyle(this).getPropertyValue("--media-menu-layout"))?void 0:e.trim();t.setAttribute("media","row"===i?"":"width:0")},uZ=new WeakSet,uQ=function(e){nf(this,uB,e.relatedTarget),aO(this,e.relatedTarget)||(this.hidden=!this.hidden)},uz=new WeakSet,uX=function(){var e;null==(e=nv(this,uB))||e.setAttribute("aria-expanded","true"),requestAnimationFrame(()=>nE(this,u3,u5).call(this,!1)),this.addEventListener("transitionend",()=>this.focus(),{once:!0}),aI(nw(this),nv(this,u1)),aI(this,nv(this,u2))},uJ=new WeakSet,u0=function(){var e;null==(e=nv(this,uB))||e.setAttribute("aria-expanded","false"),aC(nw(this),nv(this,u1)),aC(this,nv(this,u2))},u1=new WeakMap,u2=new WeakMap,u3=new WeakSet,u5=function(e,t){if(this.hasAttribute("mediacontroller")&&!this.anchor||this.hidden||!this.anchorElement)return;let{x:i,y:a}=function({anchor:e,floating:t,placement:i}){let{x:a,y:r}=function({anchor:e,floating:t},i){let a;let r="x"==(["top","bottom"].includes(no(i))?"y":"x")?"y":"x",n="y"===r?"height":"width",s=no(i),o=e.x+e.width/2-t.width/2,l=e.y+e.height/2-t.height/2,d=e[n]/2-t[n]/2;switch(s){case"top":a={x:o,y:e.y-t.height};break;case"bottom":a={x:o,y:e.y+e.height};break;case"right":a={x:e.x+e.width,y:l};break;case"left":a={x:e.x-t.width,y:l};break;default:a={x:e.x,y:e.y}}switch(i.split("-")[1]){case"start":a[r]-=d;break;case"end":a[r]+=d}return a}(function({anchor:e,floating:t}){var i;let a,r;return{anchor:(i=t.offsetParent,a=e.getBoundingClientRect(),r=i.getBoundingClientRect(),{x:a.x-r.x,y:a.y-r.y,width:a.width,height:a.height}),floating:{x:0,y:0,width:t.offsetWidth,height:t.offsetHeight}}}({anchor:e,floating:t}),i);return{x:a,y:r}}({anchor:this.anchorElement,floating:this,placement:"top-start"});null!=t||(t=this.offsetWidth);let r=nw(this).getBoundingClientRect(),n=this.anchorElement.getBoundingClientRect(),s=r.width-i-t,o=r.height-a-this.offsetHeight,l=r.height-n.height,{style:d}=aW(this.shadowRoot,":host");e||d.setProperty("--media-menu-transition-in","none"),d.setProperty("position","absolute"),d.setProperty("right",`${Math.max(0,s)}px`),d.setProperty("bottom",`${o}px`),d.setProperty("--_menu-max-height",`${l}px`),d.removeProperty("--media-menu-transition-in")},u4=new WeakSet,u9=function(e){let t=this.querySelector('[role="menuitem"][aria-haspopup][aria-expanded="true"]'),i=null==t?void 0:t.querySelector('[role="menu"]'),{style:a}=aW(this.shadowRoot,":host");if(e||a.setProperty("--media-menu-transition-in","none"),i){let a=i.offsetHeight,r=Math.max(i.offsetWidth,t.offsetWidth);this.style.setProperty("min-width",`${r}px`),this.style.setProperty("min-height",`${a}px`),nE(this,u3,u5).call(this,e,r)}else this.style.removeProperty("min-width"),this.style.removeProperty("min-height"),nE(this,u3,u5).call(this,e);a.removeProperty("--media-menu-transition-in")},u8=new WeakSet,u7=function(e){var t;if(e.stopPropagation(),e.composedPath().includes(nv(this,u6,ce))){null==(t=nv(this,uU))||t.focus(),this.hidden=!0;return}let i=nE(this,cd,cu).call(this,e);!i||i.hasAttribute("disabled")||(nE(this,cm,cp).call(this,i),this.handleSelect(e))},u6=new WeakSet,ce=function(){var e;return null==(e=this.shadowRoot.querySelector('slot[name="header"]').assignedElements({flatten:!0}))?void 0:e.find(e=>e.part.contains("back")&&e.part.contains("button"))},ct=new WeakSet,ci=function(e){if(e.target===this)return;nE(this,ca,cr).call(this);let t=Array.from(this.querySelectorAll('[role="menuitem"][aria-haspopup]'));for(let i of t)i.invokeTargetElement==e.target||"open"!=e.newState||"true"!=i.getAttribute("aria-expanded")||i.invokeTargetElement.hidden||i.invokeTargetElement.dispatchEvent(new nc({relatedTarget:i}));for(let e of t)e.setAttribute("aria-expanded",`${!e.submenuElement.hidden}`);nE(this,u4,u9).call(this,!0)},ca=new WeakSet,cr=function(){let e=this.querySelector('[role="menuitem"] > [role="menu"]:not([hidden])');this.container.classList.toggle("has-expanded",!!e)},cn=new WeakSet,cs=function(e){var t;aO(this,e.relatedTarget)||(nv(this,uF)&&(null==(t=nv(this,uU))||t.focus()),!nv(this,uB)||nv(this,uB)===e.relatedTarget||this.hidden||(this.hidden=!0))},co=new WeakSet,cl=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;if(!o&&!l&&!d&&this.keysUsed.includes(s)){if(e.preventDefault(),e.stopPropagation(),"Tab"===s){if(nv(this,uF)){this.hidden=!0;return}e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()}else"Escape"===s?(null==(n=nv(this,uU))||n.focus(),nv(this,uF)&&(this.hidden=!0)):"Enter"===s||" "===s?this.handleSelect(e):this.handleMove(e)}},cd=new WeakSet,cu=function(e){return e.composedPath().find(e=>["menuitemradio","menuitemcheckbox"].includes(e.role))},cc=new WeakSet,ch=function(){return this.items.find(e=>0===e.tabIndex)},cm=new WeakSet,cp=function(e){for(let t of this.items)t.tabIndex=t===e?0:-1},cv=new WeakSet,cb=function(e,t){let i=[...this.checkedItems];"radio"===e.type&&this.radioGroupItems.forEach(e=>e.checked=!1),t?e.checked=!e.checked:e.checked=!0,this.checkedItems.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},(n="symbol"!=typeof(d4="template")?d4+"":d4)in nk?nm(nk,n,{enumerable:!0,configurable:!0,writable:!0,value:n_}):nk[n]=n_,aA.customElements.get("media-chrome-menu")||aA.customElements.define("media-chrome-menu",nk);var nS=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nI=(e,t,i)=>(nS(e,t,"read from private field"),i?i.call(e):t.get(e)),nC=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nR=(e,t,i,a)=>(nS(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nL=(e,t,i)=>(nS(e,t,"access private method"),i);class nD extends nk{constructor(){super(...arguments),nC(this,cg),nC(this,c_),nC(this,cf,[]),nC(this,cE,void 0)}static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_AUDIO_TRACK_LIST,i2.MEDIA_AUDIO_TRACK_ENABLED,i2.MEDIA_AUDIO_TRACK_UNAVAILABLE]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i2.MEDIA_AUDIO_TRACK_ENABLED&&t!==i?this.value=i:e===i2.MEDIA_AUDIO_TRACK_LIST&&t!==i&&(nR(this,cf,as(i)),nL(this,cg,cy).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",nL(this,c_,cA))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",nL(this,c_,cA))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aR(this).querySelector("media-audio-track-menu-button")}get mediaAudioTrackList(){return nI(this,cf)}set mediaAudioTrackList(e){nR(this,cf,e),nL(this,cg,cy).call(this)}get mediaAudioTrackEnabled(){return aj(this,i2.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(e){aK(this,i2.MEDIA_AUDIO_TRACK_ENABLED,e)}}cf=new WeakMap,cE=new WeakMap,cg=new WeakSet,cy=function(){if(nI(this,cE)===JSON.stringify(this.mediaAudioTrackList))return;nR(this,cE,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList;for(let t of(this.defaultSlot.textContent="",e)){let e=ng({type:"radio",text:this.formatMenuItemText(t.label,t),value:`${t.id}`,checked:t.enabled});e.prepend(ny(this,"checked-indicator")),this.defaultSlot.append(e)}},c_=new WeakSet,cA=function(){if(null==this.value)return;let e=new aA.CustomEvent(iX.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aA.customElements.get("media-audio-track-menu")||aA.customElements.define("media-audio-track-menu",nD);class nx extends ni{connectedCallback(){super.connectedCallback(),this.invokeTargetElement&&this.setAttribute("aria-haspopup","menu")}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=aU(this))?void 0:e.querySelector(`#${this.invokeTarget}`):null}handleClick(){this.invokeTargetElement.dispatchEvent(new nc({relatedTarget:this}))}}aA.customElements.get("media-chrome-menu-button")||aA.customElements.define("media-chrome-menu-button",nx);let nM=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,nO=ak.createElement("template");nO.innerHTML=`
  <slot name="icon">${nM}</slot>
`;class nN extends nx{static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_AUDIO_TRACK_ENABLED,i2.MEDIA_AUDIO_TRACK_UNAVAILABLE]}constructor(){super({slotTemplate:nO})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",at.AUDIO_TRACKS())}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aR(this).querySelector("media-audio-track-menu")}get mediaAudioTrackEnabled(){return aj(this,i2.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(e){aK(this,i2.MEDIA_AUDIO_TRACK_ENABLED,e)}}aA.customElements.get("media-audio-track-menu-button")||aA.customElements.define("media-audio-track-menu-button",nN);let nP=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,nU=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,nB=ak.createElement("template");nB.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }
  </style>

  <slot name="icon">
    <slot name="on">${nP}</slot>
    <slot name="off">${nU}</slot>
  </slot>
`;let nW=e=>{e.setAttribute("aria-checked",rb(e))};class nH extends ni{static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_SUBTITLES_LIST,i2.MEDIA_SUBTITLES_SHOWING]}constructor(e={}){super({slotTemplate:nB,...e}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","switch"),this.setAttribute("aria-label",at.CLOSED_CAPTIONS()),nW(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i2.MEDIA_SUBTITLES_SHOWING&&nW(this)}get mediaSubtitlesList(){return nV(this,i2.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){nq(this,i2.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return nV(this,i2.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){nq(this,i2.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new aA.CustomEvent(iX.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}let nV=(e,t)=>{let i=e.getAttribute(t);return i?rl(i):[]},nq=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=rc(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};aA.customElements.get("media-captions-button")||aA.customElements.define("media-captions-button",nH);var nF=Object.defineProperty,n$=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},nj=(e,t,i)=>(n$(e,t,"read from private field"),i?i.call(e):t.get(e)),nK=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},nY=(e,t,i,a)=>(n$(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),nG=(e,t,i)=>(n$(e,t,"access private method"),i);let nZ=`
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`,nQ=ak.createElement("template");nQ.innerHTML=nk.template.innerHTML+`
  <slot name="captions-indicator" hidden>${nZ}</slot>`;class nz extends nk{constructor(){super(...arguments),nK(this,cT),nK(this,cS),nK(this,ck,void 0)}static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_SUBTITLES_LIST,i2.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i2.MEDIA_SUBTITLES_LIST&&t!==i?nG(this,cT,cw).call(this):e===i2.MEDIA_SUBTITLES_SHOWING&&t!==i&&(this.value=i)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",nG(this,cS,cI))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",nG(this,cS,cI))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aR(this).querySelector("media-captions-menu-button")}get mediaSubtitlesList(){return nX(this,i2.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){nJ(this,i2.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return nX(this,i2.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){nJ(this,i2.MEDIA_SUBTITLES_SHOWING,e)}}ck=new WeakMap,cT=new WeakSet,cw=function(){var e;if(nj(this,ck)===JSON.stringify(this.mediaSubtitlesList))return;nY(this,ck,JSON.stringify(this.mediaSubtitlesList)),this.defaultSlot.textContent="";let t=!this.value,i=ng({type:"radio",text:this.formatMenuItemText("Off"),value:"off",checked:t});for(let t of(i.prepend(ny(this,"checked-indicator")),this.defaultSlot.append(i),this.mediaSubtitlesList)){let i=ng({type:"radio",text:this.formatMenuItemText(t.label,t),value:ru(t),checked:this.value==ru(t)});i.prepend(ny(this,"checked-indicator")),"captions"===(null!=(e=t.kind)?e:"subs")&&i.append(ny(this,"captions-indicator")),this.defaultSlot.append(i)}},cS=new WeakSet,cI=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(i2.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new aA.CustomEvent(iX.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new aA.CustomEvent(iX.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)},(s="symbol"!=typeof(d9="template")?d9+"":d9)in nz?nF(nz,s,{enumerable:!0,configurable:!0,writable:!0,value:nQ}):nz[s]=nQ;let nX=(e,t)=>{let i=e.getAttribute(t);return i?rl(i):[]},nJ=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=rc(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};aA.customElements.get("media-captions-menu")||aA.customElements.define("media-captions-menu",nz);let n0=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,n1=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,n2=ak.createElement("template");n2.innerHTML=`
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }
  </style>

  <slot name="icon">
    <slot name="on">${n0}</slot>
    <slot name="off">${n1}</slot>
  </slot>
`;let n3=e=>{e.setAttribute("aria-checked",rb(e))};class n5 extends nx{static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_SUBTITLES_LIST,i2.MEDIA_SUBTITLES_SHOWING]}constructor(e={}){super({slotTemplate:n2,...e}),this._captionsReady=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",at.CLOSED_CAPTIONS()),n3(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i2.MEDIA_SUBTITLES_SHOWING&&n3(this)}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aR(this).querySelector("media-captions-menu")}get mediaSubtitlesList(){return n4(this,i2.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){n9(this,i2.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return n4(this,i2.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){n9(this,i2.MEDIA_SUBTITLES_SHOWING,e)}}let n4=(e,t)=>{let i=e.getAttribute(t);return i?rl(i):[]},n9=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=rc(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};aA.customElements.get("media-captions-menu-button")||aA.customElements.define("media-captions-menu-button",n5);let n8=ak.createElement("template");n8.innerHTML=`
  <style>
  :host([${i2.MEDIA_IS_CASTING}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${i2.MEDIA_IS_CASTING}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
    <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
  </slot>
`;let n7=e=>{let t=e.mediaIsCasting?ai.EXIT_CAST():ai.ENTER_CAST();e.setAttribute("aria-label",t)};class n6 extends ni{static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_IS_CASTING,i2.MEDIA_CAST_UNAVAILABLE]}constructor(e={}){super({slotTemplate:n8,...e})}connectedCallback(){super.connectedCallback(),n7(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i2.MEDIA_IS_CASTING&&n7(this)}get mediaIsCasting(){return aF(this,i2.MEDIA_IS_CASTING)}set mediaIsCasting(e){a$(this,i2.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return aj(this,i2.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){aK(this,i2.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){let e=this.mediaIsCasting?iX.MEDIA_EXIT_CAST_REQUEST:iX.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new aA.CustomEvent(e,{composed:!0,bubbles:!0}))}}aA.customElements.get("media-cast-button")||aA.customElements.define("media-cast-button",n6);var se=Object.defineProperty,st=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},si=(e,t,i)=>(st(e,t,"read from private field"),i?i.call(e):t.get(e)),sa=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sr=(e,t,i,a)=>(st(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sn=(e,t,i)=>(st(e,t,"access private method"),i);let ss=ak.createElement("template");ss.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-dialog-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
      border-radius: var(--media-dialog-border-radius);
      border: var(--media-dialog-border, none);
      display: var(--media-dialog-display, inline-flex);
      transition: var(--media-dialog-transition-in,
        visibility 0s,
        opacity .2s ease-out,
        transform .15s ease-out
      ) !important;
      
      visibility: var(--media-dialog-visibility, visible);
      opacity: var(--media-dialog-opacity, 1);
      transform: var(--media-dialog-transform-in, translateY(0) scale(1));
    }

    :host([hidden]) {
      transition: var(--media-dialog-transition-out,
        visibility .15s ease-in,
        opacity .15s ease-in,
        transform .15s ease-in
      ) !important;
      visibility: var(--media-dialog-hidden-visibility, hidden);
      opacity: var(--media-dialog-hidden-opacity, 0);
      transform: var(--media-dialog-transform-out, translateY(2px) scale(.99));
      pointer-events: none;
    }
  </style>
  <slot></slot>
`;let so="hidden";class sl extends aA.HTMLElement{constructor(){super(),sa(this,cL),sa(this,cx),sa(this,cO),sa(this,cP),sa(this,cB),sa(this,cC,void 0),sa(this,cR,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=this.constructor.template.content.cloneNode(!0),this.shadowRoot.append(this.nativeEl)),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}static get observedAttributes(){return[so,"anchor"]}handleEvent(e){switch(e.type){case"invoke":sn(this,cO,cN).call(this,e);break;case"focusout":sn(this,cP,cU).call(this,e);break;case"keydown":sn(this,cB,cW).call(this,e)}}connectedCallback(){this.role||(this.role="dialog")}attributeChangedCallback(e,t,i){e===so&&i!==t&&(this.hidden?sn(this,cx,cM).call(this):sn(this,cL,cD).call(this))}focus(){sr(this,cC,aP());let e=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');null==e||e.focus()}get keysUsed(){return["Escape","Tab"]}}cC=new WeakMap,cR=new WeakMap,cL=new WeakSet,cD=function(){var e;null==(e=si(this,cR))||e.setAttribute("aria-expanded","true"),this.addEventListener("transitionend",()=>this.focus(),{once:!0})},cx=new WeakSet,cM=function(){var e;null==(e=si(this,cR))||e.setAttribute("aria-expanded","false")},cO=new WeakSet,cN=function(e){sr(this,cR,e.relatedTarget),aO(this,e.relatedTarget)||(this.hidden=!this.hidden)},cP=new WeakSet,cU=function(e){var t;aO(this,e.relatedTarget)||(null==(t=si(this,cC))||t.focus(),!si(this,cR)||si(this,cR)===e.relatedTarget||this.hidden||(this.hidden=!0))},cB=new WeakSet,cW=function(e){var t,i,a,r,n;let{key:s,ctrlKey:o,altKey:l,metaKey:d}=e;!o&&!l&&!d&&this.keysUsed.includes(s)&&(e.preventDefault(),e.stopPropagation(),"Tab"===s?(e.shiftKey?null==(i=null==(t=this.previousElementSibling)?void 0:t.focus)||i.call(t):null==(r=null==(a=this.nextElementSibling)?void 0:a.focus)||r.call(a),this.blur()):"Escape"===s&&(null==(n=si(this,cC))||n.focus(),this.hidden=!0))},(o="symbol"!=typeof(d8="template")?d8+"":d8)in sl?se(sl,o,{enumerable:!0,configurable:!0,writable:!0,value:ss}):sl[o]=ss,aA.customElements.get("media-chrome-dialog")||aA.customElements.define("media-chrome-dialog",sl);var sd=Object.defineProperty,su=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sc=(e,t,i)=>(su(e,t,"read from private field"),i?i.call(e):t.get(e)),sh=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sm=(e,t,i,a)=>(su(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sp=(e,t,i)=>(su(e,t,"access private method"),i);let sv=ak.createElement("template");sv.innerHTML=`
  <style>
    :host {
      transition: var(--media-menu-item-transition,
        background .15s linear,
        opacity .2s ease-in-out
      );
      outline: var(--media-menu-item-outline, 0);
      outline-offset: var(--media-menu-item-outline-offset, -1px);
      cursor: pointer;
      display: flex;
      align-items: center;
      align-self: stretch;
      justify-self: stretch;
      white-space: nowrap;
      white-space-collapse: collapse;
      text-wrap: nowrap;
      padding: .4em .8em .4em 1em;
    }

    :host(:focus-visible) {
      box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      outline: var(--media-menu-item-hover-outline, 0);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host(:hover) {
      cursor: pointer;
      background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
      outline: var(--media-menu-item-hover-outline);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host([aria-checked="true"]) {
      background: var(--media-menu-item-checked-background);
    }

    :host([hidden]) {
      display: none;
    }

    :host([disabled]) {
      pointer-events: none;
      color: rgba(255, 255, 255, .3);
    }

    slot:not([name]) {
      width: 100%;
    }

    slot:not([name="submenu"]) {
      display: inline-flex;
      align-items: center;
      transition: inherit;
      opacity: var(--media-menu-item-opacity, 1);
    }

    slot[name="description"] {
      justify-content: end;
    }

    slot[name="description"] > span {
      display: inline-block;
      margin-inline: 1em .2em;
      max-width: var(--media-menu-item-description-max-width, 100px);
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: .8em;
      font-weight: 400;
      text-align: right;
      position: relative;
      top: .04em;
    }

    slot[name="checked-indicator"] {
      display: none;
    }

    :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
      display: var(--media-menu-item-checked-indicator-display, inline-block);
    }

    
    svg, img, ::slotted(svg), ::slotted(img) {
      height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
    }

    
    [part~="indicator"],
    ::slotted([part~="indicator"]) {
      fill: var(--media-menu-item-indicator-fill,
        var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
      height: var(--media-menu-item-indicator-height, 1.25em);
      margin-right: .5ch;
    }

    [part~="checked-indicator"] {
      visibility: hidden;
    }

    :host([aria-checked="true"]) [part~="checked-indicator"] {
      visibility: visible;
    }
  </style>
  <slot name="checked-indicator">
    <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
      <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
    </svg>
  </slot>
  <slot name="prefix"></slot>
  <slot></slot>
  <slot name="description"></slot>
  <slot name="suffix"></slot>
  <slot name="submenu"></slot>
`;let sb={TYPE:"type",VALUE:"value",CHECKED:"checked",DISABLED:"disabled"};class sf extends aA.HTMLElement{constructor(){super(),sh(this,cq),sh(this,c$),sh(this,cK),sh(this,cZ),sh(this,cz),sh(this,cJ),sh(this,cH,!1),sh(this,cV,void 0),sh(this,cG,()=>{var e,t;this.setAttribute("submenusize",`${this.submenuElement.items.length}`);let i=this.shadowRoot.querySelector('slot[name="description"]'),a=null==(t=null==(e=this.submenuElement.checkedItems)?void 0:e[0])?void 0:t.text,r=ak.createElement("span");r.textContent=null!=a?a:"",i.replaceChildren(r)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.append(this.constructor.template.content.cloneNode(!0))),this.shadowRoot.addEventListener("slotchange",this)}static get observedAttributes(){return[sb.TYPE,sb.DISABLED,sb.CHECKED,sb.VALUE]}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","-1"),sE(this)&&!this.hasAttribute("aria-checked")&&this.setAttribute("aria-checked","false"),this.addEventListener("click",this),this.addEventListener("keydown",this)}disable(){this.removeAttribute("tabindex"),this.removeEventListener("click",this),this.removeEventListener("keydown",this),this.removeEventListener("keyup",this)}handleEvent(e){switch(e.type){case"slotchange":sp(this,cq,cF).call(this,e);break;case"click":this.handleClick(e);break;case"keydown":sp(this,cz,cX).call(this,e);break;case"keyup":sp(this,cZ,cQ).call(this,e)}}attributeChangedCallback(e,t,i){e===sb.CHECKED&&sE(this)&&!sc(this,cH)?this.setAttribute("aria-checked",null!=i?"true":"false"):e===sb.TYPE&&i!==t?this.role="menuitem"+i:e===sb.DISABLED&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){this.hasAttribute(sb.DISABLED)||this.enable(),this.role="menuitem"+this.type,sm(this,cV,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.items)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),sp(this,cJ,c0).call(this)}disconnectedCallback(){this.disable(),sp(this,cJ,c0).call(this),sm(this,cV,null)}get invokeTarget(){return this.getAttribute("invoketarget")}set invokeTarget(e){this.setAttribute("invoketarget",`${e}`)}get invokeTargetElement(){var e;return this.invokeTarget?null==(e=aU(this))?void 0:e.querySelector(`#${this.invokeTarget}`):this.submenuElement}get submenuElement(){return this.shadowRoot.querySelector('slot[name="submenu"]').assignedElements({flatten:!0})[0]}get type(){var e;return null!=(e=this.getAttribute(sb.TYPE))?e:""}set type(e){this.setAttribute(sb.TYPE,`${e}`)}get value(){var e;return null!=(e=this.getAttribute(sb.VALUE))?e:this.text}set value(e){this.setAttribute(sb.VALUE,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get checked(){if(sE(this))return"true"===this.getAttribute("aria-checked")}set checked(e){sE(this)&&(sm(this,cH,!0),this.setAttribute("aria-checked",e?"true":"false"),e?this.part.add("checked"):this.part.remove("checked"))}handleClick(e){!sE(this)&&this.invokeTargetElement&&aO(this,e.target)&&this.invokeTargetElement.dispatchEvent(new nc({relatedTarget:this}))}get keysUsed(){return["Enter"," "]}}function sE(e){return"radio"===e.type||"checkbox"===e.type}cH=new WeakMap,cV=new WeakMap,cq=new WeakSet,cF=function(e){let t=e.target;if(!(null==t?void 0:t.name))for(let e of t.assignedNodes({flatten:!0}))e instanceof Text&&""===e.textContent.trim()&&e.remove();"submenu"===t.name&&(this.submenuElement?sp(this,c$,cj).call(this):sp(this,cK,cY).call(this))},c$=new WeakSet,cj=async function(){this.setAttribute("aria-haspopup","menu"),this.setAttribute("aria-expanded",`${!this.submenuElement.hidden}`),this.submenuElement.addEventListener("change",sc(this,cG)),this.submenuElement.addEventListener("addmenuitem",sc(this,cG)),this.submenuElement.addEventListener("removemenuitem",sc(this,cG)),sc(this,cG).call(this)},cK=new WeakSet,cY=function(){this.removeAttribute("aria-haspopup"),this.removeAttribute("aria-expanded"),this.submenuElement.removeEventListener("change",sc(this,cG)),this.submenuElement.removeEventListener("addmenuitem",sc(this,cG)),this.submenuElement.removeEventListener("removemenuitem",sc(this,cG)),sc(this,cG).call(this)},cG=new WeakMap,cZ=new WeakSet,cQ=function(e){let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",sp(this,cZ,cQ));return}this.handleClick(e)},cz=new WeakSet,cX=function(e){let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",sp(this,cZ,cQ));return}this.addEventListener("keyup",sp(this,cZ,cQ),{once:!0})},cJ=new WeakSet,c0=function(){var e;let t=null==(e=sc(this,cV))?void 0:e.radioGroupItems;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-checked")).pop();for(let e of(i||(i=t[0]),t))e.setAttribute("aria-checked","false");null==i||i.setAttribute("aria-checked","true")},(l="symbol"!=typeof(d7="template")?d7+"":d7)in sf?sd(sf,l,{enumerable:!0,configurable:!0,writable:!0,value:sv}):sf[l]=sv,aA.customElements.get("media-chrome-menu-item")||aA.customElements.define("media-chrome-menu-item",sf);var sg=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sy=(e,t,i)=>(sg(e,t,"read from private field"),i?i.call(e):t.get(e)),s_=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sA=(e,t,i,a)=>(sg(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),sk=(e,t,i)=>(sg(e,t,"access private method"),i);let sT=ak.createElement("template");sT.innerHTML=`
  <style>
    :host {
      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

      box-shadow: var(--_focus-visible-box-shadow, none);
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      display: inline-flex;
      align-items: center;
      
      vertical-align: middle;
      box-sizing: border-box;
      position: relative;
      width: 100px;
      transition: background .15s linear;
      cursor: pointer;
      pointer-events: auto;
      touch-action: none; 
      z-index: 1; 
    }

    
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgb(50 50 70 / .7));
    }

    #leftgap {
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
    }

    #rightgap {
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
    }

    #startpoint,
    #endpoint {
      position: absolute;
    }

    #endpoint {
      right: 0;
    }

    #container {
      
      width: var(--media-range-track-width, 100%);
      transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      min-width: 40px;
    }

    #range {
      
      display: var(--media-time-range-hover-display, block);
      bottom: var(--media-time-range-hover-bottom, -7px);
      height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
      width: 100%;
      position: absolute;
      cursor: pointer;

      -webkit-appearance: none; 
      -webkit-tap-highlight-color: transparent;
      background: transparent; 
      margin: 0;
      z-index: 1;
    }

    @media (hover: hover) {
      #range {
        bottom: var(--media-time-range-hover-bottom, -5px);
        height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
      }
    }

    
    
    #range::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: transparent;
      width: .1px;
      height: .1px;
    }

    
    #range::-moz-range-thumb {
      background: transparent;
      border: transparent;
      width: .1px;
      height: .1px;
    }

    #appearance {
      height: var(--media-range-track-height, 4px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      position: absolute;
      
      will-change: transform;
    }

    #background,
    #track {
      border-radius: var(--media-range-track-border-radius, 1px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #background {
      background: var(--media-range-track-background, rgb(255 255 255 / .2));
      backdrop-filter: var(--media-range-track-background-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-background-backdrop-filter);
    }

    #track {
      border: var(--media-range-track-border, none);
      outline: var(--media-range-track-outline);
      outline-offset: var(--media-range-track-outline-offset);
      backdrop-filter: var(--media-range-track-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
      box-shadow: var(--media-range-track-box-shadow, none);
      overflow: hidden;
    }

    #progress,
    #highlight,
    #pointer {
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #progress {
      background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
      transition: var(--media-range-track-transition);
    }

    #pointer {
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    @media (hover: hover) {
      :host(:hover) #pointer {
        transition: visibility .5s, opacity .5s;
        visibility: visible;
        opacity: 1;
      }
    }

    #thumb {
      width: var(--media-range-thumb-width, 10px);
      height: var(--media-range-thumb-height, 10px);
      margin-left: calc(var(--media-range-thumb-width, 10px) / -2);
      border: var(--media-range-thumb-border, none);
      border-radius: var(--media-range-thumb-border-radius, 10px);
      background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
      box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
      transition: var(--media-range-thumb-transition);
      transform: var(--media-range-thumb-transform, none);
      opacity: var(--media-range-thumb-opacity, 1);
      position: absolute;
      left: 0;
      cursor: pointer;
    }

    :host([disabled]) #thumb {
      background-color: #777;
    }

    .segments #appearance {
      height: var(--media-range-segment-hover-height, 7px);
    }

    #background,
    #track {
      clip-path: url(#segments-clipping);
    }

    #segments {
      --segments-gap: var(--media-range-segments-gap, 2px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #segments-clipping {
      transform: translateX(calc(var(--segments-gap) / 2));
    }

    #segments-clipping:empty {
      display: none;
    }

    #segments-clipping rect {
      height: var(--media-range-track-height, 4px);
      y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
      transition: var(--media-range-segment-transition, transform .1s ease-in-out);
      transform: var(--media-range-segment-transform, scaleY(1));
      transform-origin: center;
    }
  </style>
  <div id="leftgap"></div>
  <div id="container">
    <div id="startpoint"></div>
    <div id="endpoint"></div>
    <div id="appearance" part="appearance">
      <div id="background"></div>
      <div id="track">
        <div id="highlight"></div>
        <div id="pointer"></div>
        <div id="progress"></div>
      </div>
      <div id="thumb"></div>
      <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
    </div>
    <input id="range" type="range" min="0" max="1" step="any" value="0">
  </div>
  <div id="rightgap"></div>
`;class sw extends aA.HTMLElement{constructor(){super(),s_(this,he),s_(this,hi),s_(this,hr),s_(this,hs),s_(this,hl),s_(this,hu),s_(this,hh),s_(this,hp),s_(this,c1,void 0),s_(this,c2,void 0),s_(this,c3,void 0),s_(this,c5,void 0),s_(this,c4,{}),s_(this,c9,[]),s_(this,c8,()=>{if(this.range.matches(":focus-visible")){let{style:e}=aW(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),s_(this,c7,()=>{let{style:e}=aW(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),s_(this,c6,()=>{let e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(sT.content.cloneNode(!0))),this.container=this.shadowRoot.querySelector("#container"),sA(this,c3,this.shadowRoot.querySelector("#startpoint")),sA(this,c5,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",iJ.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===iJ.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=sy(this,c1))?void 0:a.unassociateElement)||r.call(a,this),sA(this,c1,null)),i&&this.isConnected&&(sA(this,c1,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=sy(this,c1))?void 0:s.associateElement)||o.call(s,this))):("disabled"===e||"aria-disabled"===e&&t!==i)&&(null==i?(this.range.removeAttribute(e),sk(this,hi,ha).call(this)):(this.range.setAttribute(e,i),sk(this,hr,hn).call(this)))}connectedCallback(){var e,t,i;let{style:a}=aW(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),sy(this,c4).pointer=aW(this.shadowRoot,"#pointer"),sy(this,c4).progress=aW(this.shadowRoot,"#progress"),sy(this,c4).thumb=aW(this.shadowRoot,"#thumb");let r=this.getAttribute(iJ.MEDIA_CONTROLLER);r&&(sA(this,c1,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=sy(this,c1))?void 0:t.associateElement)||i.call(t,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",sy(this,c8)),this.shadowRoot.addEventListener("focusout",sy(this,c7)),sk(this,hi,ha).call(this),aI(this.container,sy(this,c6))}disconnectedCallback(){var e,t;sk(this,hr,hn).call(this),null==(t=null==(e=sy(this,c1))?void 0:e.unassociateElement)||t.call(e,this),sA(this,c1,null),this.shadowRoot.removeEventListener("focusin",sy(this,c8)),this.shadowRoot.removeEventListener("focusout",sy(this,c7)),aC(this.container,sy(this,c6))}updatePointerBar(e){var t;null==(t=sy(this,c4).pointer)||t.style.setProperty("width",`${100*this.getPointerRatio(e)}%`)}updateBar(){var e,t;let i=100*this.range.valueAsNumber;null==(e=sy(this,c4).progress)||e.style.setProperty("width",`${i}%`),null==(t=sy(this,c4).thumb)||t.style.setProperty("left",`${i}%`)}updateSegments(e){let t=this.shadowRoot.querySelector("#segments-clipping");if(t.textContent="",this.container.classList.toggle("segments",!!(null==e?void 0:e.length)),!(null==e?void 0:e.length))return;sy(this,c4).activeSegment=aH(this.shadowRoot,"#segments-clipping rect:nth-child(0)");let i=[...new Set([+this.range.min,...e.flatMap(e=>[e.start,e.end]),+this.range.max])];sA(this,c9,[...i]);let a=i.pop();for(let[e,r]of i.entries()){let[n,s]=[0===e,e===i.length-1],o=n?"calc(var(--segments-gap) / -1)":`${100*r}%`,l=s?a:i[e+1],d=`calc(${(l-r)*100}%${n||s?"":" - var(--segments-gap)"})`,u=ak.createElementNS("http://www.w3.org/2000/svg","rect"),c=aW(this.shadowRoot,`#segments-clipping rect:nth-child(${e+1})`);c.style.setProperty("x",o),c.style.setProperty("width",d),t.append(u)}}getPointerRatio(e){return Math.max(0,Math.min(1,function(e,t,i,a){let r=aB(i,a),n=aB(i,{x:e,y:t}),s=aB(a,{x:e,y:t});return n>r||s>r?n>s?1:0:n/r}(e.clientX,e.clientY,sy(this,c3).getBoundingClientRect(),sy(this,c5).getBoundingClientRect())))}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":sk(this,hp,hv).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":sk(this,hl,hd).call(this,e);break;case"pointerdown":sk(this,hs,ho).call(this,e);break;case"pointerup":sk(this,hu,hc).call(this);break;case"pointerleave":sk(this,hh,hm).call(this)}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}c1=new WeakMap,c2=new WeakMap,c3=new WeakMap,c5=new WeakMap,c4=new WeakMap,c9=new WeakMap,c8=new WeakMap,c7=new WeakMap,c6=new WeakMap,he=new WeakSet,ht=function(e){let t=sy(this,c4).activeSegment;if(!t)return;let i=this.getPointerRatio(e),a=sy(this,c9).findIndex((e,t,a)=>{let r=a[t+1];return null!=r&&i>=e&&i<=r}),r=`#segments-clipping rect:nth-child(${a+1})`;t.selectorText==r&&t.style.transform||(t.selectorText=r,t.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))},hi=new WeakSet,ha=function(){this.hasAttribute("disabled")||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))},hr=new WeakSet,hn=function(){var e,t;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),null==(e=aA.window)||e.removeEventListener("pointerup",this),null==(t=aA.window)||t.removeEventListener("pointermove",this)},hs=new WeakSet,ho=function(e){var t;sA(this,c2,e.composedPath().includes(this.range)),null==(t=aA.window)||t.addEventListener("pointerup",this)},hl=new WeakSet,hd=function(e){var t;"mouse"!==e.pointerType&&sk(this,hs,ho).call(this,e),this.addEventListener("pointerleave",this),null==(t=aA.window)||t.addEventListener("pointermove",this)},hu=new WeakSet,hc=function(){var e;null==(e=aA.window)||e.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")},hh=new WeakSet,hm=function(){var e,t;this.removeEventListener("pointerleave",this),null==(e=aA.window)||e.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),null==(t=sy(this,c4).activeSegment)||t.style.removeProperty("transform")},hp=new WeakSet,hv=function(e){this.toggleAttribute("dragging",1===e.buttons||"mouse"!==e.pointerType),this.updatePointerBar(e),sk(this,he,ht).call(this,e),this.dragging&&("mouse"!==e.pointerType||!sy(this,c2))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(e),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))},aA.customElements.get("media-chrome-range")||aA.customElements.define("media-chrome-range",sw);var sS=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sI=(e,t,i)=>(sS(e,t,"read from private field"),i?i.call(e):t.get(e)),sC=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sR=(e,t,i,a)=>(sS(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let sL=ak.createElement("template");sL.innerHTML=`
  <style>
    :host {
      
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --media-loading-indicator-icon-height: 44px;
    }

    ::slotted(media-time-range),
    ::slotted(media-volume-range) {
      min-height: 100%;
    }

    ::slotted(media-time-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }
  </style>

  <slot></slot>
`;class sD extends aA.HTMLElement{constructor(){super(),sC(this,hb,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(sL.content.cloneNode(!0)))}static get observedAttributes(){return[iJ.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===iJ.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=sI(this,hb))?void 0:a.unassociateElement)||r.call(a,this),sR(this,hb,null)),i&&this.isConnected&&(sR(this,hb,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=sI(this,hb))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(iJ.MEDIA_CONTROLLER);a&&(sR(this,hb,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=sI(this,hb))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=sI(this,hb))?void 0:e.unassociateElement)||t.call(e,this),sR(this,hb,null)}}hb=new WeakMap,aA.customElements.get("media-control-bar")||aA.customElements.define("media-control-bar",sD);var sx=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sM=(e,t,i)=>(sx(e,t,"read from private field"),i?i.call(e):t.get(e)),sO=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sN=(e,t,i,a)=>(sx(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let sP=ak.createElement("template");sP.innerHTML=`
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
      padding: var(--media-control-padding, 10px);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      text-align: center;
      pointer-events: auto;
    }

    
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
      outline: 0;
    }

    
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <slot></slot>
`;class sU extends aA.HTMLElement{constructor(){super(),sO(this,hf,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(sP.content.cloneNode(!0)))}static get observedAttributes(){return[iJ.MEDIA_CONTROLLER]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===iJ.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=sM(this,hf))?void 0:a.unassociateElement)||r.call(a,this),sN(this,hf,null)),i&&this.isConnected&&(sN(this,hf,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=sM(this,hf))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let{style:a}=aW(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(iJ.MEDIA_CONTROLLER);r&&(sN(this,hf,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=sM(this,hf))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=sM(this,hf))?void 0:e.unassociateElement)||t.call(e,this),sN(this,hf,null)}}hf=new WeakMap,aA.customElements.get("media-text-display")||aA.customElements.define("media-text-display",sU);var sB=sU,sW=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},sH=(e,t,i)=>(sW(e,t,"read from private field"),i?i.call(e):t.get(e)),sV=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},sq=(e,t,i,a)=>(sW(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class sF extends sU{constructor(){super(),sV(this,hE,void 0),sq(this,hE,this.shadowRoot.querySelector("slot")),sH(this,hE).textContent=ap(0)}static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_DURATION]}attributeChangedCallback(e,t,i){e===i2.MEDIA_DURATION&&(sH(this,hE).textContent=ap(+i)),super.attributeChangedCallback(e,t,i)}get mediaDuration(){return aV(this,i2.MEDIA_DURATION)}set mediaDuration(e){aq(this,i2.MEDIA_DURATION,e)}}hE=new WeakMap,aA.customElements.get("media-duration-display")||aA.customElements.define("media-duration-display",sF);let s$=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,sj=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,sK=ak.createElement("template");sK.innerHTML=`
  <style>
  :host([${i2.MEDIA_IS_FULLSCREEN}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${i2.MEDIA_IS_FULLSCREEN}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${s$}</slot>
    <slot name="exit">${sj}</slot>
  </slot>
`;let sY=e=>{let t=e.mediaIsFullscreen?ai.EXIT_FULLSCREEN():ai.ENTER_FULLSCREEN();e.setAttribute("aria-label",t)};class sG extends ni{static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_IS_FULLSCREEN,i2.MEDIA_FULLSCREEN_UNAVAILABLE]}constructor(e={}){super({slotTemplate:sK,...e})}connectedCallback(){super.connectedCallback(),sY(this)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i2.MEDIA_IS_FULLSCREEN&&sY(this)}get mediaFullscreenUnavailable(){return aj(this,i2.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){aK(this,i2.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return aF(this,i2.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){a$(this,i2.MEDIA_IS_FULLSCREEN,e)}handleClick(){let e=this.mediaIsFullscreen?iX.MEDIA_EXIT_FULLSCREEN_REQUEST:iX.MEDIA_ENTER_FULLSCREEN_REQUEST;this.dispatchEvent(new aA.CustomEvent(e,{composed:!0,bubbles:!0}))}}aA.customElements.get("media-fullscreen-button")||aA.customElements.define("media-fullscreen-button",sG);let{MEDIA_TIME_IS_LIVE:sZ,MEDIA_PAUSED:sQ}=i2,{MEDIA_SEEK_TO_LIVE_REQUEST:sz,MEDIA_PLAY_REQUEST:sX}=iX,sJ=ak.createElement("template");sJ.innerHTML=`
  <style>

  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${sZ}]:not([${sQ}])) slot[name=indicator] > *,
  :host([${sZ}]:not([${sQ}])) ::slotted([slot=indicator]) {
    fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
  }

  :host([${sZ}]:not([${sQ}])) {
    cursor: not-allowed;
  }

  </style>

  <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
  
  <slot name="spacer">&nbsp;</slot><slot name="text">LIVE</slot>
`;let s0=e=>{let t=e.mediaPaused||!e.mediaTimeIsLive,i=t?ai.SEEK_LIVE():ai.PLAYING_LIVE();e.setAttribute("aria-label",i),t?e.removeAttribute("aria-disabled"):e.setAttribute("aria-disabled","true")};class s1 extends ni{static get observedAttributes(){return[...super.observedAttributes,sQ,sZ]}constructor(e={}){super({slotTemplate:sJ,...e})}connectedCallback(){s0(this),super.connectedCallback()}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),s0(this)}get mediaPaused(){return aF(this,i2.MEDIA_PAUSED)}set mediaPaused(e){a$(this,i2.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return aF(this,i2.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){a$(this,i2.MEDIA_TIME_IS_LIVE,e)}handleClick(){(this.mediaPaused||!this.mediaTimeIsLive)&&(this.dispatchEvent(new aA.CustomEvent(sz,{composed:!0,bubbles:!0})),this.hasAttribute(sQ)&&this.dispatchEvent(new aA.CustomEvent(sX,{composed:!0,bubbles:!0})))}}aA.customElements.get("media-live-button")||aA.customElements.define("media-live-button",s1);var s2=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},s3=(e,t,i)=>(s2(e,t,"read from private field"),i?i.call(e):t.get(e)),s5=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},s4=(e,t,i,a)=>(s2(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let s9="loadingdelay",s8=ak.createElement("template"),s7=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;s8.innerHTML=`
<style>
:host {
  display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
  vertical-align: middle;
  box-sizing: border-box;
  --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=icon] > *,
:host ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 0);
  transition: opacity 0.15s;
}

:host([${i2.MEDIA_LOADING}]:not([${i2.MEDIA_PAUSED}])) slot[name=icon] > *,
:host([${i2.MEDIA_LOADING}]:not([${i2.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 1);
  transition: opacity 0.15s var(--_loading-indicator-delay);
}

:host #status {
  visibility: var(--media-loading-indicator-opacity, hidden);
  transition: visibility 0.15s;
}

:host([${i2.MEDIA_LOADING}]:not([${i2.MEDIA_PAUSED}])) #status {
  visibility: var(--media-loading-indicator-opacity, visible);
  transition: visibility 0.15s var(--_loading-indicator-delay);
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-indicator-icon-width);
  height: var(--media-loading-indicator-icon-height, 100px);
  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
  vertical-align: middle;
}
</style>

<slot name="icon">${s7}</slot>
<div id="status" role="status" aria-live="polite">${at.MEDIA_LOADING()}</div>
`;class s6 extends aA.HTMLElement{constructor(){if(super(),s5(this,hg,void 0),s5(this,hy,500),!this.shadowRoot){let e=this.attachShadow({mode:"open"}),t=s8.content.cloneNode(!0);e.appendChild(t)}}static get observedAttributes(){return[iJ.MEDIA_CONTROLLER,i2.MEDIA_PAUSED,i2.MEDIA_LOADING,s9]}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===s9&&t!==i?this.loadingDelay=Number(i):e===iJ.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=s3(this,hg))?void 0:a.unassociateElement)||r.call(a,this),s4(this,hg,null)),i&&this.isConnected&&(s4(this,hg,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=s3(this,hg))?void 0:s.associateElement)||o.call(s,this)))}connectedCallback(){var e,t,i;let a=this.getAttribute(iJ.MEDIA_CONTROLLER);a&&(s4(this,hg,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=s3(this,hg))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=s3(this,hg))?void 0:e.unassociateElement)||t.call(e,this),s4(this,hg,null)}get loadingDelay(){return s3(this,hy)}set loadingDelay(e){s4(this,hy,e);let{style:t}=aW(this.shadowRoot,":host");t.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return aF(this,i2.MEDIA_PAUSED)}set mediaPaused(e){a$(this,i2.MEDIA_PAUSED,e)}get mediaLoading(){return aF(this,i2.MEDIA_LOADING)}set mediaLoading(e){a$(this,i2.MEDIA_LOADING,e)}}hg=new WeakMap,hy=new WeakMap,aA.customElements.get("media-loading-indicator")||aA.customElements.define("media-loading-indicator",s6);let{MEDIA_VOLUME_LEVEL:oe}=i2,ot=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,oi=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,oa=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,or=ak.createElement("template");or.innerHTML=`
  <style>
  
  :host(:not([${oe}])) slot:not([name=high]):not([name=icon]), 
  :host([${oe}=high]) slot:not([name=high]):not([name=icon]) {
    display: none !important;
  }

  :host([${oe}=off]) slot:not([name=off]):not([name=icon]) {
    display: none !important;
  }

  :host([${oe}=low]) slot:not([name=low]):not([name=icon]) {
    display: none !important;
  }

  :host([${oe}=medium]) slot:not([name=medium]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="off">${ot}</slot>
    <slot name="low">${oi}</slot>
    <slot name="medium">${oi}</slot>
    <slot name="high">${oa}</slot>
  </slot>
`;let on=e=>{let t="off"===e.mediaVolumeLevel?ai.UNMUTE():ai.MUTE();e.setAttribute("aria-label",t)};class os extends ni{static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_VOLUME_LEVEL]}constructor(e={}){super({slotTemplate:or,...e})}connectedCallback(){on(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===i2.MEDIA_VOLUME_LEVEL&&on(this),super.attributeChangedCallback(e,t,i)}get mediaVolumeLevel(){return aj(this,i2.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){aK(this,i2.MEDIA_VOLUME_LEVEL,e)}handleClick(){let e="off"===this.mediaVolumeLevel?iX.MEDIA_UNMUTE_REQUEST:iX.MEDIA_MUTE_REQUEST;this.dispatchEvent(new aA.CustomEvent(e,{composed:!0,bubbles:!0}))}}aA.customElements.get("media-mute-button")||aA.customElements.define("media-mute-button",os);let oo=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,ol=ak.createElement("template");ol.innerHTML=`
  <style>
  :host([${i2.MEDIA_IS_PIP}]) slot:not([name=exit]):not([name=icon]) {
    display: none !important;
  }

  
  :host(:not([${i2.MEDIA_IS_PIP}])) slot:not([name=enter]):not([name=icon]) {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${oo}</slot>
    <slot name="exit">${oo}</slot>
  </slot>
`;let od=e=>{let t=e.mediaIsPip?ai.EXIT_PIP():ai.ENTER_PIP();e.setAttribute("aria-label",t)};class ou extends ni{static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_IS_PIP,i2.MEDIA_PIP_UNAVAILABLE]}constructor(e={}){super({slotTemplate:ol,...e})}connectedCallback(){od(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===i2.MEDIA_IS_PIP&&od(this),super.attributeChangedCallback(e,t,i)}get mediaPipUnavailable(){return aj(this,i2.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){aK(this,i2.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return aF(this,i2.MEDIA_IS_PIP)}set mediaIsPip(e){a$(this,i2.MEDIA_IS_PIP,e)}handleClick(){let e=this.mediaIsPip?iX.MEDIA_EXIT_PIP_REQUEST:iX.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new aA.CustomEvent(e,{composed:!0,bubbles:!0}))}}aA.customElements.get("media-pip-button")||aA.customElements.define("media-pip-button",ou);var oc=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oh=(e,t,i)=>(oc(e,t,"read from private field"),i?i.call(e):t.get(e)),om=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let op="rates",ov=[1,1.2,1.5,1.7,2],ob=ak.createElement("template");ob.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
  </style>
  <slot name="icon"></slot>
`;class of extends ni{constructor(e={}){super({slotTemplate:ob,...e}),om(this,h_,new rn(this,op,{defaultValue:ov})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_PLAYBACK_RATE,op]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===op&&(oh(this,h_).value=i),e===i2.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",at.PLAYBACK_RATE({playbackRate:t}))}}get rates(){return oh(this,h_)}set rates(e){e?Array.isArray(e)&&(oh(this,h_).value=e.join(" ")):oh(this,h_).value=""}get mediaPlaybackRate(){return aV(this,i2.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){aq(this,i2.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,t;let i=Array.from(this.rates.values(),e=>+e).sort((e,t)=>e-t),a=null!=(t=null!=(e=i.find(e=>e>this.mediaPlaybackRate))?e:i[0])?t:1,r=new aA.CustomEvent(iX.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:a});this.dispatchEvent(r)}}h_=new WeakMap,aA.customElements.get("media-playback-rate-button")||aA.customElements.define("media-playback-rate-button",of);var oE=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},og=(e,t,i)=>(oE(e,t,"read from private field"),i?i.call(e):t.get(e)),oy=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},o_=(e,t,i)=>(oE(e,t,"access private method"),i);let oA={RATES:"rates"};class ok extends nk{constructor(){super(),oy(this,hk),oy(this,hw),oy(this,hA,new rn(this,oA.RATES,{defaultValue:ov})),o_(this,hk,hT).call(this)}static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_PLAYBACK_RATE,oA.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i2.MEDIA_PLAYBACK_RATE&&t!=i?this.value=i:e===oA.RATES&&t!=i&&(og(this,hA).value=i,o_(this,hk,hT).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",o_(this,hw,hS))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",o_(this,hw,hS))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aR(this).querySelector("media-playback-rate-menu-button")}get rates(){return og(this,hA)}set rates(e){e?Array.isArray(e)&&(og(this,hA).value=e.join(" ")):og(this,hA).value="",o_(this,hk,hT).call(this)}get mediaPlaybackRate(){return aV(this,i2.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){aq(this,i2.MEDIA_PLAYBACK_RATE,e)}}hA=new WeakMap,hk=new WeakSet,hT=function(){for(let e of(this.defaultSlot.textContent="",this.rates)){let t=ng({type:"radio",text:this.formatMenuItemText(`${e}x`,e),value:e,checked:this.mediaPlaybackRate==e});t.prepend(ny(this,"checked-indicator")),this.defaultSlot.append(t)}},hw=new WeakSet,hS=function(){if(!this.value)return;let e=new aA.CustomEvent(iX.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aA.customElements.get("media-playback-rate-menu")||aA.customElements.define("media-playback-rate-menu",ok);var oT=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},ow=(e,t,i)=>(oT(e,t,"read from private field"),i?i.call(e):t.get(e)),oS=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)};let oI="rates",oC=[1,1.2,1.5,1.7,2],oR=ak.createElement("template");oR.innerHTML=`
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
  </style>
  <slot name="icon"></slot>
`;class oL extends nx{constructor(e={}){super({slotTemplate:oR,...e}),oS(this,hI,new rn(this,oI,{defaultValue:oC})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML="1x"}static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_PLAYBACK_RATE,oI]}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),e===oI&&(ow(this,hI).value=i),e===i2.MEDIA_PLAYBACK_RATE){let e=i?+i:Number.NaN,t=Number.isNaN(e)?1:e;this.container.innerHTML=`${t}x`,this.setAttribute("aria-label",at.PLAYBACK_RATE({playbackRate:t}))}}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aR(this).querySelector("media-playback-rate-menu")}get rates(){return ow(this,hI)}set rates(e){e?Array.isArray(e)&&(ow(this,hI).value=e.join(" ")):ow(this,hI).value=""}get mediaPlaybackRate(){return aV(this,i2.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){aq(this,i2.MEDIA_PLAYBACK_RATE,e)}}hI=new WeakMap,aA.customElements.get("media-playback-rate-menu-button")||aA.customElements.define("media-playback-rate-menu-button",oL);let oD=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,ox=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,oM=ak.createElement("template");oM.innerHTML=`
  <style>
  :host([${i2.MEDIA_PAUSED}]) slot[name=pause] {
    display: none !important;
  }

  :host(:not([${i2.MEDIA_PAUSED}])) slot[name=play] {
    display: none !important;
  }
  </style>

  <slot name="icon">
    <slot name="play">${oD}</slot>
    <slot name="pause">${ox}</slot>
  </slot>
`;let oO=e=>{let t=e.mediaPaused?ai.PLAY():ai.PAUSE();e.setAttribute("aria-label",t)};class oN extends ni{static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_PAUSED,i2.MEDIA_ENDED]}constructor(e={}){super({slotTemplate:oM,...e})}connectedCallback(){oO(this),super.connectedCallback()}attributeChangedCallback(e,t,i){e===i2.MEDIA_PAUSED&&oO(this),super.attributeChangedCallback(e,t,i)}get mediaPaused(){return aF(this,i2.MEDIA_PAUSED)}set mediaPaused(e){a$(this,i2.MEDIA_PAUSED,e)}handleClick(){let e=this.mediaPaused?iX.MEDIA_PLAY_REQUEST:iX.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new aA.CustomEvent(e,{composed:!0,bubbles:!0}))}}aA.customElements.get("media-play-button")||aA.customElements.define("media-play-button",oN);let oP={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"},oU=ak.createElement("template");oU.innerHTML=`
  <style>
    :host {
      pointer-events: none;
      display: var(--media-poster-image-display, inline-block);
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
      background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }
  </style>

  <img part="poster img" aria-hidden="true" id="image"/>
`;let oB=e=>{e.style.removeProperty("background-image")},oW=(e,t)=>{e.style["background-image"]=`url('${t}')`};class oH extends aA.HTMLElement{static get observedAttributes(){return[oP.PLACEHOLDER_SRC,oP.SRC]}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(oU.content.cloneNode(!0))),this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,t,i){e===oP.SRC&&(null==i?this.image.removeAttribute(oP.SRC):this.image.setAttribute(oP.SRC,i)),e===oP.PLACEHOLDER_SRC&&(null==i?oB(this.image):oW(this.image,i))}get placeholderSrc(){return aj(this,oP.PLACEHOLDER_SRC)}set placeholderSrc(e){aK(this,oP.SRC,e)}get src(){return aj(this,oP.SRC)}set src(e){aK(this,oP.SRC,e)}}aA.customElements.get("media-poster-image")||aA.customElements.define("media-poster-image",oH);var oV=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oq=(e,t,i)=>(oV(e,t,"read from private field"),i?i.call(e):t.get(e)),oF=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},o$=(e,t,i,a)=>(oV(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class oj extends sB{constructor(){super(),oF(this,hC,void 0),o$(this,hC,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_PREVIEW_CHAPTER]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i2.MEDIA_PREVIEW_CHAPTER&&i!==t&&null!=i&&(oq(this,hC).textContent=i,""!==i?this.setAttribute("aria-valuetext",`chapter: ${i}`):this.removeAttribute("aria-valuetext"))}get mediaPreviewChapter(){return aj(this,i2.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){aK(this,i2.MEDIA_PREVIEW_CHAPTER,e)}}hC=new WeakMap,aA.customElements.get("media-preview-chapter-display")||aA.customElements.define("media-preview-chapter-display",oj);var oK=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oY=(e,t,i)=>(oK(e,t,"read from private field"),i?i.call(e):t.get(e)),oG=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},oZ=(e,t,i,a)=>(oK(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let oQ=ak.createElement("template");oQ.innerHTML=`
  <style>
    :host {
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async">
`;class oz extends aA.HTMLElement{constructor(){super(),oG(this,hR,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(oQ.content.cloneNode(!0)))}static get observedAttributes(){return[iJ.MEDIA_CONTROLLER,i2.MEDIA_PREVIEW_IMAGE,i2.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,t,i;let a=this.getAttribute(iJ.MEDIA_CONTROLLER);a&&(oZ(this,hR,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=oY(this,hR))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;null==(t=null==(e=oY(this,hR))?void 0:e.unassociateElement)||t.call(e,this),oZ(this,hR,null)}attributeChangedCallback(e,t,i){var a,r,n,s,o;[i2.MEDIA_PREVIEW_IMAGE,i2.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===iJ.MEDIA_CONTROLLER&&(t&&(null==(r=null==(a=oY(this,hR))?void 0:a.unassociateElement)||r.call(a,this),oZ(this,hR,null)),i&&this.isConnected&&(oZ(this,hR,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=oY(this,hR))?void 0:s.associateElement)||o.call(s,this)))}get mediaPreviewImage(){return aj(this,i2.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){aK(this,i2.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){let e=this.getAttribute(i2.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(e=>+e)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(i2.MEDIA_PREVIEW_COORDS);return}this.setAttribute(i2.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){let e=this.mediaPreviewCoords,t=this.mediaPreviewImage;if(!(e&&t))return;let[i,a,r,n]=e,s=t.split("#")[0],{maxWidth:o,maxHeight:l,minWidth:d,minHeight:u}=getComputedStyle(this),c=Math.min(parseInt(o)/r,parseInt(l)/n),h=Math.max(parseInt(d)/r,parseInt(u)/n),m=c<1,p=m?c:h>1?h:1,{style:v}=aW(this.shadowRoot,":host"),b=aW(this.shadowRoot,"img").style,f=this.shadowRoot.querySelector("img"),E=m?"min":"max";v.setProperty(`${E}-width`,"initial","important"),v.setProperty(`${E}-height`,"initial","important"),v.width=`${r*p}px`,v.height=`${n*p}px`;let g=()=>{b.width=`${this.imgWidth*p}px`,b.height=`${this.imgHeight*p}px`,b.display="block"};f.src!==s&&(f.onload=()=>{this.imgWidth=f.naturalWidth,this.imgHeight=f.naturalHeight,g()},f.src=s,g()),g(),b.transform=`translate(-${i*p}px, -${a*p}px)`}}hR=new WeakMap,aA.customElements.get("media-preview-thumbnail")||aA.customElements.define("media-preview-thumbnail",oz);var oX=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},oJ=(e,t,i)=>(oX(e,t,"read from private field"),i?i.call(e):t.get(e)),o0=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},o1=(e,t,i,a)=>(oX(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);class o2 extends sU{constructor(){super(),o0(this,hL,void 0),o1(this,hL,this.shadowRoot.querySelector("slot")),oJ(this,hL).textContent=ap(0)}static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i2.MEDIA_PREVIEW_TIME&&null!=i&&(oJ(this,hL).textContent=ap(i))}get mediaPreviewTime(){return aV(this,i2.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){aq(this,i2.MEDIA_PREVIEW_TIME,e)}}hL=new WeakMap,aA.customElements.get("media-preview-time-display")||aA.customElements.define("media-preview-time-display",o2);var o3=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},o5=(e,t,i)=>(o3(e,t,"read from private field"),i?i.call(e):t.get(e)),o4=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},o9=(e,t,i,a)=>(o3(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),o8=(e,t,i)=>(o3(e,t,"access private method"),i);class o7 extends nk{constructor(){super(...arguments),o4(this,hM),o4(this,hN),o4(this,hD,[]),o4(this,hx,void 0)}static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_RENDITION_LIST,i2.MEDIA_RENDITION_SELECTED,i2.MEDIA_RENDITION_UNAVAILABLE]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i2.MEDIA_RENDITION_SELECTED&&t!==i?this.value=null!=i?i:"auto":e===i2.MEDIA_RENDITION_LIST&&t!==i&&(o9(this,hD,aa(i)),o8(this,hM,hO).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",o8(this,hN,hP))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",o8(this,hN,hP))}get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aR(this).querySelector("media-rendition-menu-button")}get mediaRenditionList(){return o5(this,hD)}set mediaRenditionList(e){o9(this,hD,e),o8(this,hM,hO).call(this)}get mediaRenditionSelected(){return aj(this,i2.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){aK(this,i2.MEDIA_RENDITION_SELECTED,e)}}hD=new WeakMap,hx=new WeakMap,hM=new WeakSet,hO=function(){if(o5(this,hx)===JSON.stringify(this.mediaRenditionList))return;o9(this,hx,JSON.stringify(this.mediaRenditionList));let e=this.mediaRenditionList.sort((e,t)=>t.height-e.height);this.defaultSlot.textContent="";let t=!this.mediaRenditionSelected;for(let i of e){let e=ng({type:"radio",text:this.formatMenuItemText(`${Math.min(i.width,i.height)}p`,i),value:`${i.id}`,checked:i.selected&&!t});e.prepend(ny(this,"checked-indicator")),this.defaultSlot.append(e)}let i=ng({type:"radio",text:this.formatMenuItemText("Auto"),value:"auto",checked:t});i.prepend(ny(this,"checked-indicator")),this.defaultSlot.append(i)},hN=new WeakSet,hP=function(){if(null==this.value)return;let e=new aA.CustomEvent(iX.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aA.customElements.get("media-rendition-menu")||aA.customElements.define("media-rendition-menu",o7);let o6=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`,le=ak.createElement("template");le.innerHTML=`
  <slot name="icon">${o6}</slot>
`;class lt extends nx{static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_RENDITION_SELECTED,i2.MEDIA_RENDITION_UNAVAILABLE]}constructor(){super({slotTemplate:le})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",at.QUALITY())}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aR(this).querySelector("media-rendition-menu")}get mediaRenditionSelected(){return aj(this,i2.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){aK(this,i2.MEDIA_RENDITION_SELECTED,e)}}aA.customElements.get("media-rendition-menu-button")||aA.customElements.define("media-rendition-menu-button",lt);let li={SEEK_OFFSET:"seekoffset"},la=ak.createElement("template");la.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">30</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg></slot>
`;class lr extends ni{static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_CURRENT_TIME,li.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:la,...e})}connectedCallback(){this.seekOffset=aV(this,li.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(e,t,i){e===li.SEEK_OFFSET&&(this.seekOffset=aV(this,li.SEEK_OFFSET,30)),super.attributeChangedCallback(e,t,i)}get seekOffset(){return aV(this,li.SEEK_OFFSET,30)}set seekOffset(e){aq(this,li.SEEK_OFFSET,e),this.setAttribute("aria-label",ai.SEEK_BACK_N_SECS({seekOffset:this.seekOffset})),aD(aM(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return aV(this,i2.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){aq(this,i2.MEDIA_CURRENT_TIME,e)}handleClick(){let e=Math.max(this.mediaCurrentTime-this.seekOffset,0),t=new aA.CustomEvent(iX.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}aA.customElements.get("media-seek-backward-button")||aA.customElements.define("media-seek-backward-button",lr);let ln={SEEK_OFFSET:"seekoffset"},ls=ak.createElement("template");ls.innerHTML=`
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">30</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg></slot>
`;class lo extends ni{static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_CURRENT_TIME,ln.SEEK_OFFSET]}constructor(e={}){super({slotTemplate:ls,...e})}connectedCallback(){this.seekOffset=aV(this,ln.SEEK_OFFSET,30),super.connectedCallback()}attributeChangedCallback(e,t,i){e===ln.SEEK_OFFSET&&(this.seekOffset=aV(this,ln.SEEK_OFFSET,30)),super.attributeChangedCallback(e,t,i)}get seekOffset(){return aV(this,ln.SEEK_OFFSET,30)}set seekOffset(e){aq(this,ln.SEEK_OFFSET,e),this.setAttribute("aria-label",ai.SEEK_FORWARD_N_SECS({seekOffset:this.seekOffset})),aD(aM(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return aV(this,i2.MEDIA_CURRENT_TIME,0)}set mediaCurrentTime(e){aq(this,i2.MEDIA_CURRENT_TIME,e)}handleClick(){let e=this.mediaCurrentTime+this.seekOffset,t=new aA.CustomEvent(iX.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)}}aA.customElements.get("media-seek-forward-button")||aA.customElements.define("media-seek-forward-button",lo);var ll=Object.defineProperty;let ld=ak.createElement("template");ld.innerHTML=nk.template.innerHTML+`
  <style>
    :host {
      background: var(--media-settings-menu-background,
        var(--media-menu-background,
        var(--media-control-background,
        var(--media-secondary-color, rgb(20 20 30 / .8)))));
      min-width: var(--media-settings-menu-min-width, 160px);
      border-radius: 2px 2px 0 0;
      overflow: hidden;
    }

    :host([role="menu"]) {
      
      justify-content: end;
    }

    slot:not([name]) {
      justify-content: var(--media-settings-menu-justify-content);
      flex-direction: var(--media-settings-menu-flex-direction, column);
      overflow: visible;
    }

    #container.has-expanded {
      --media-settings-menu-item-opacity: 0;
    }
  </style>
`;class lu extends nk{get anchorElement(){return"auto"!==this.anchor?super.anchorElement:aR(this).querySelector("media-settings-menu-button")}}(d="symbol"!=typeof(d6="template")?d6+"":d6)in lu?ll(lu,d,{enumerable:!0,configurable:!0,writable:!0,value:ld}):lu[d]=ld,aA.customElements.get("media-settings-menu")||aA.customElements.define("media-settings-menu",lu);let lc=ak.createElement("template");lc.innerHTML=`
  <slot name="icon">
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
    </svg>
  </slot>
`;class lh extends nx{static get observedAttributes(){return[...super.observedAttributes,"target"]}constructor(){super({slotTemplate:lc})}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-label",at.SETTINGS())}get invokeTargetElement(){return void 0!=this.invokeTarget?super.invokeTargetElement:aR(this).querySelector("media-settings-menu")}}aA.customElements.get("media-settings-menu-button")||aA.customElements.define("media-settings-menu-button",lh);var lm=Object.defineProperty;let lp=ak.createElement("template");lp.innerHTML=sf.template.innerHTML+`
  <style>
    slot:not([name="submenu"]) {
      opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
    }

    :host([aria-expanded="true"]:hover) {
      background: transparent;
    }
  </style>
`,(null==(hU=lp.content)?void 0:hU.querySelector)&&(lp.content.querySelector('slot[name="suffix"]').innerHTML=`
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `);class lv extends sf{}(u="symbol"!=typeof(ue="template")?ue+"":ue)in lv?lm(lv,u,{enumerable:!0,configurable:!0,writable:!0,value:lp}):lv[u]=lp,aA.customElements.get("media-settings-menu-item")||aA.customElements.define("media-settings-menu-item",lv);var lb=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lf=(e,t,i)=>(lb(e,t,"read from private field"),i?i.call(e):t.get(e)),lE=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lg=(e,t,i,a)=>(lb(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let ly={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},l_=[...Object.values(ly),i2.MEDIA_CURRENT_TIME,i2.MEDIA_DURATION,i2.MEDIA_SEEKABLE],lA=["Enter"," "],lk="&nbsp;/&nbsp;",lT=(e,{timesSep:t=lk}={})=>{var i,a;let r=e.hasAttribute(ly.REMAINING),n=e.hasAttribute(ly.SHOW_DURATION),s=null!=(i=e.mediaCurrentTime)?i:0,[,o]=null!=(a=e.mediaSeekable)?a:[],l=0;Number.isFinite(e.mediaDuration)?l=e.mediaDuration:Number.isFinite(o)&&(l=o);let d=r?ap(0-(l-s)):ap(s);return n?`${d}${t}${ap(l)}`:d},lw=e=>{var t;let i=e.mediaCurrentTime,[,a]=null!=(t=e.mediaSeekable)?t:[],r=null;if(Number.isFinite(e.mediaDuration)?r=e.mediaDuration:Number.isFinite(a)&&(r=a),null==i||null===r){e.setAttribute("aria-valuetext","video not loaded, unknown time.");return}let n=e.hasAttribute(ly.REMAINING),s=e.hasAttribute(ly.SHOW_DURATION),o=n?am(0-(r-i)):am(i);if(!s){e.setAttribute("aria-valuetext",o);return}let l=am(r),d=`${o} of ${l}`;e.setAttribute("aria-valuetext",d)};class lS extends sU{constructor(){super(),lE(this,hB,void 0),lg(this,hB,this.shadowRoot.querySelector("slot")),lf(this,hB).innerHTML=`${lT(this)}`}static get observedAttributes(){return[...super.observedAttributes,...l_,"disabled"]}connectedCallback(){let{style:e}=aW(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","pointer"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.hasAttribute("disabled")||this.enable(),this.setAttribute("role","progressbar"),this.setAttribute("aria-label",at.PLAYBACK_TIME());let t=e=>{let{key:i}=e;if(!lA.includes(i)){this.removeEventListener("keyup",t);return}this.toggleTimeDisplay()};this.addEventListener("keydown",e=>{let{metaKey:i,altKey:a,key:r}=e;if(i||a||!lA.includes(r)){this.removeEventListener("keyup",t);return}this.addEventListener("keyup",t)}),this.addEventListener("click",this.toggleTimeDisplay),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),super.disconnectedCallback()}attributeChangedCallback(e,t,i){l_.includes(e)?this.update():"disabled"===e&&i!==t&&(null==i?this.enable():this.disable()),super.attributeChangedCallback(e,t,i)}enable(){this.tabIndex=0}disable(){this.tabIndex=-1}get remaining(){return aF(this,ly.REMAINING)}set remaining(e){a$(this,ly.REMAINING,e)}get showDuration(){return aF(this,ly.SHOW_DURATION)}set showDuration(e){a$(this,ly.SHOW_DURATION,e)}get noToggle(){return aF(this,ly.NO_TOGGLE)}set noToggle(e){a$(this,ly.NO_TOGGLE,e)}get mediaDuration(){return aV(this,i2.MEDIA_DURATION)}set mediaDuration(e){aq(this,i2.MEDIA_DURATION,e)}get mediaCurrentTime(){return aV(this,i2.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){aq(this,i2.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){let e=this.getAttribute(i2.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(i2.MEDIA_SEEKABLE);return}this.setAttribute(i2.MEDIA_SEEKABLE,e.join(":"))}update(){let e=lT(this);lw(this),e!==lf(this,hB).innerHTML&&(lf(this,hB).innerHTML=e)}}hB=new WeakMap,aA.customElements.get("media-time-display")||aA.customElements.define("media-time-display",lS);var lI=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lC=(e,t,i)=>(lI(e,t,"read from private field"),i?i.call(e):t.get(e)),lR=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lL=(e,t,i,a)=>(lI(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lD=(e,t,i,a)=>({set _(value){lL(e,t,value,i)},get _(){return lC(e,t,a)}});class lx{constructor(e,t,i){lR(this,hW,void 0),lR(this,hH,void 0),lR(this,hV,void 0),lR(this,hq,void 0),lR(this,hF,void 0),lR(this,h$,void 0),lR(this,hj,void 0),lR(this,hK,void 0),lR(this,hY,0),lR(this,hG,(e=performance.now())=>{lL(this,hY,requestAnimationFrame(lC(this,hG))),lL(this,hq,performance.now()-lC(this,hV));let t=1e3/this.fps;if(lC(this,hq)>t){lL(this,hV,e-lC(this,hq)%t);let i=1e3/((e-lC(this,hH))/++lD(this,hF)._),a=(e-lC(this,h$))/1e3/this.duration,r=lC(this,hj)+a*this.playbackRate;r-lC(this,hW).valueAsNumber>0?lL(this,hK,this.playbackRate/this.duration/i):(lL(this,hK,.995*lC(this,hK)),r=lC(this,hW).valueAsNumber+lC(this,hK)),this.callback(r)}}),lL(this,hW,e),this.callback=t,this.fps=i}start(){0===lC(this,hY)&&(lL(this,hV,performance.now()),lL(this,hH,lC(this,hV)),lL(this,hF,0),lC(this,hG).call(this))}stop(){0!==lC(this,hY)&&(cancelAnimationFrame(lC(this,hY)),lL(this,hY,0))}update({start:e,duration:t,playbackRate:i}){let a=e-lC(this,hW).valueAsNumber,r=Math.abs(t-this.duration);(a>0||a<-.03||r>=.5)&&this.callback(e),lL(this,hj,e),lL(this,h$,performance.now()),this.duration=t,this.playbackRate=i}}hW=new WeakMap,hH=new WeakMap,hV=new WeakMap,hq=new WeakMap,hF=new WeakMap,h$=new WeakMap,hj=new WeakMap,hK=new WeakMap,hY=new WeakMap,hG=new WeakMap;var lM=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lO=(e,t,i)=>(lM(e,t,"read from private field"),i?i.call(e):t.get(e)),lN=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lP=(e,t,i,a)=>(lM(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lU=(e,t,i)=>(lM(e,t,"access private method"),i);let lB=e=>{let t=e.range,i=am(+lV(e)),a=am(+e.mediaSeekableEnd),r=i&&a?`${i} of ${a}`:"video not loaded, unknown time.";t.setAttribute("aria-valuetext",r)},lW=ak.createElement("template");lW.innerHTML=`
  <style>
    :host {
      --media-box-border-radius: 4px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
      --media-preview-border-radius: var(--media-box-border-radius);
      --media-box-arrow-offset: var(--media-box-border-radius);
      --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      --_preview-background: var(--media-preview-background, var(--_control-background));

      
      contain: layout;
    }

    #highlight {
      background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
    }

    #preview-rail,
    #current-rail {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
      will-change: transform;
    }

    [part~="box"] {
      width: min-content;
      
      position: absolute;
      bottom: 100%;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="current-box"] {
      display: var(--media-current-box-display, var(--media-box-display, flex));
      margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
      visibility: hidden;
    }

    [part~="preview-box"] {
      display: var(--media-preview-box-display, var(--media-box-display, flex));
      margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
      transition-property: var(--media-preview-transition-property, visibility, opacity);
      transition-duration: var(--media-preview-transition-duration-out, .25s);
      transition-delay: var(--media-preview-transition-delay-out, 0s);
      visibility: hidden;
      opacity: 0;
    }

    :host(:is([${i2.MEDIA_PREVIEW_IMAGE}], [${i2.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
      transition-duration: var(--media-preview-transition-duration-in, .5s);
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
      opacity: 1;
    }

    @media (hover: hover) {
      :host(:is([${i2.MEDIA_PREVIEW_IMAGE}], [${i2.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      
      transition: visibility 0s .25s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-thumbnail-background, var(--_preview-background));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${i2.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
    :host([${i2.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
    }

    @media (hover: hover) {
      :host([${i2.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
      :host([${i2.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      :host([${i2.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }
    }

    media-preview-chapter-display,
    ::slotted(media-preview-chapter-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      visibility: hidden;
      
      transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-chapter-background, var(--_preview-background));
      border-radius: var(--media-preview-chapter-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-chapter-padding, 3.5px 9px);
      margin: var(--media-preview-chapter-margin, 0 0 5px);
      text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
    }

    :host([${i2.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
    :host([${i2.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-chapter-border-radius, 0);
      padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
      margin: var(--media-preview-chapter-margin, 0);
      min-width: 100%;
    }

    media-preview-chapter-display[${i2.MEDIA_PREVIEW_CHAPTER}],
    ::slotted(media-preview-chapter-display[${i2.MEDIA_PREVIEW_CHAPTER}]) {
      visibility: visible;
    }

    media-preview-chapter-display:not([aria-valuetext]),
    ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
      display: none;
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display),
    media-time-display,
    ::slotted(media-time-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      
      transition: min-width 0s, border-radius 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--_preview-background));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 3.5px 9px);
      margin: var(--media-preview-time-margin, 0);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50%)
      ));
    }

    :host([${i2.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${i2.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
      min-width: 100%;
      transform: translateX(0);
    }

    :host([${i2.MEDIA_PREVIEW_TIME}]:hover) {
      --media-time-range-hover-display: block;
    }

    [part~="arrow"],
    ::slotted([part~="arrow"]) {
      display: var(--media-box-arrow-display, inline-block);
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
      ));
      
      border-color: transparent;
      border-top-color: var(--media-box-arrow-background, var(--_control-background));
      border-width: var(--media-box-arrow-border-width,
        var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
      border-style: solid;
      justify-content: center;
      height: 0;
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-chapter-display></media-preview-chapter-display>
      <media-preview-time-display></media-preview-time-display>
      <slot name="preview-arrow"><div part="arrow"></div></slot>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      
    </slot>
  </div>
`;let lH=(e,t=e.mediaCurrentTime)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:Math.max(0,Math.min((t-i)/(a-i),1))},lV=(e,t=e.range.valueAsNumber)=>{let i=Number.isFinite(e.mediaSeekableStart)?e.mediaSeekableStart:0,a=Number.isFinite(e.mediaDuration)?e.mediaDuration:e.mediaSeekableEnd;return Number.isNaN(a)?0:t*(a-i)+i};class lq extends sw{constructor(){super(),lN(this,h5),lN(this,h9),lN(this,h6),lN(this,mt),lN(this,ma),lN(this,mn),lN(this,mo),lN(this,md),lN(this,hZ,void 0),lN(this,hQ,void 0),lN(this,hz,void 0),lN(this,hX,void 0),lN(this,hJ,void 0),lN(this,h0,void 0),lN(this,h1,void 0),lN(this,h2,void 0),lN(this,h3,void 0),lN(this,h7,e=>{this.dragging||(this.range.valueAsNumber=e,this.updateBar())}),this.container.appendChild(lW.content.cloneNode(!0)),lP(this,hz,this.shadowRoot.querySelectorAll('[part~="box"]')),lP(this,hJ,this.shadowRoot.querySelector('[part~="preview-box"]')),lP(this,h0,this.shadowRoot.querySelector('[part~="current-box"]'));let e=getComputedStyle(this);lP(this,h1,parseInt(e.getPropertyValue("--media-box-padding-left"))),lP(this,h2,parseInt(e.getPropertyValue("--media-box-padding-right"))),lP(this,hQ,new lx(this.range,lO(this,h7),60))}static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_PAUSED,i2.MEDIA_DURATION,i2.MEDIA_SEEKABLE,i2.MEDIA_CURRENT_TIME,i2.MEDIA_PREVIEW_IMAGE,i2.MEDIA_PREVIEW_TIME,i2.MEDIA_PREVIEW_CHAPTER,i2.MEDIA_BUFFERED,i2.MEDIA_PLAYBACK_RATE,i2.MEDIA_LOADING,i2.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",at.SEEK()),lU(this,h5,h4).call(this),lP(this,hZ,this.getRootNode()),null==(e=lO(this,hZ))||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),lU(this,h5,h4).call(this),null==(e=lO(this,hZ))||e.removeEventListener("transitionstart",this),lP(this,hZ,null)}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),t!=i&&(e===i2.MEDIA_CURRENT_TIME||e===i2.MEDIA_PAUSED||e===i2.MEDIA_ENDED||e===i2.MEDIA_LOADING||e===i2.MEDIA_DURATION||e===i2.MEDIA_SEEKABLE?(lO(this,hQ).update({start:lH(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),lU(this,h5,h4).call(this),lB(this)):e===i2.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===i2.MEDIA_DURATION||e===i2.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=lO(this,h3),this.updateBar()))}get mediaChaptersCues(){return lO(this,h3)}set mediaChaptersCues(e){var t;lP(this,h3,e),this.updateSegments(null==(t=lO(this,h3))?void 0:t.map(e=>({start:lH(this,e.startTime),end:lH(this,e.endTime)})))}get mediaPaused(){return aF(this,i2.MEDIA_PAUSED)}set mediaPaused(e){a$(this,i2.MEDIA_PAUSED,e)}get mediaLoading(){return aF(this,i2.MEDIA_LOADING)}set mediaLoading(e){a$(this,i2.MEDIA_LOADING,e)}get mediaDuration(){return aV(this,i2.MEDIA_DURATION)}set mediaDuration(e){aq(this,i2.MEDIA_DURATION,e)}get mediaCurrentTime(){return aV(this,i2.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){aq(this,i2.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return aV(this,i2.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){aq(this,i2.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){let e=this.getAttribute(i2.MEDIA_BUFFERED);return e?e.split(" ").map(e=>e.split(":").map(e=>+e)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(i2.MEDIA_BUFFERED);return}let t=e.map(e=>e.join(":")).join(" ");this.setAttribute(i2.MEDIA_BUFFERED,t)}get mediaSeekable(){let e=this.getAttribute(i2.MEDIA_SEEKABLE);if(e)return e.split(":").map(e=>+e)}set mediaSeekable(e){if(null==e){this.removeAttribute(i2.MEDIA_SEEKABLE);return}this.setAttribute(i2.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;let[,t=this.mediaDuration]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaSeekableStart(){var e;let[t=0]=null!=(e=this.mediaSeekable)?e:[];return t}get mediaPreviewImage(){return aj(this,i2.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){aK(this,i2.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return aV(this,i2.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){aq(this,i2.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return aF(this,i2.MEDIA_ENDED)}set mediaEnded(e){a$(this,i2.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;let t;let i=this.mediaBuffered;if(!i.length)return;if(this.mediaEnded)t=1;else{let a=this.mediaCurrentTime,[,r=this.mediaSeekableStart]=null!=(e=i.find(([e,t])=>e<=a&&a<=t))?e:[];t=lH(this,r)}let{style:a}=aW(this.shadowRoot,"#highlight");a.setProperty("width",`${100*t}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;let e=aW(this.shadowRoot,"#current-rail"),t=aW(this.shadowRoot,'[part~="current-box"]'),i=lU(this,h6,me).call(this,lO(this,h0)),a=lU(this,mt,mi).call(this,i,this.range.valueAsNumber),r=lU(this,ma,mr).call(this,i,this.range.valueAsNumber);e.style.transform=`translateX(${a})`,e.style.setProperty("--_range-width",`${i.range.width}`),t.style.setProperty("--_box-shift",`${r}`),t.style.setProperty("--_box-width",`${i.box.width}px`),t.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":lU(this,md,mu).call(this);break;case"pointermove":lU(this,mn,ms).call(this,e);break;case"pointerup":case"pointerleave":lU(this,mo,ml).call(this,null);break;case"transitionstart":aO(e.target,this)&&setTimeout(()=>lU(this,h5,h4).call(this),0)}}}hZ=new WeakMap,hQ=new WeakMap,hz=new WeakMap,hX=new WeakMap,hJ=new WeakMap,h0=new WeakMap,h1=new WeakMap,h2=new WeakMap,h3=new WeakMap,h5=new WeakSet,h4=function(){lU(this,h9,h8).call(this)?lO(this,hQ).start():lO(this,hQ).stop()},h9=new WeakSet,h8=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&function(e,t=3){if(e.checkVisibility)return e.checkVisibility({checkOpacity:!0,checkVisibilityCSS:!0});let i=e;for(;i&&t>0;){let e=getComputedStyle(i);if("0"===e.opacity||"hidden"===e.visibility||"none"===e.display)return!1;i=i.parentElement,t--}return!0}(this)},h7=new WeakMap,h6=new WeakSet,me=function(e){var t;let i=(null!=(t=this.getAttribute("bounds")?aN(this,`#${this.getAttribute("bounds")}`):this.parentElement)?t:this).getBoundingClientRect(),a=this.range.getBoundingClientRect(),r=e.offsetWidth,n=-(a.left-i.left-r/2),s=i.right-a.left-r/2;return{box:{width:r,min:n,max:s},bounds:i,range:a}},mt=new WeakSet,mi=function(e,t){let i=`${100*t}%`,{width:a,min:r,max:n}=e.box;if(!a)return i;if(!Number.isNaN(r)){let e=`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;i=`max(${e}, ${i})`}if(!Number.isNaN(n)){let e=`calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;i=`min(${i}, ${e})`}return i},ma=new WeakSet,mr=function(e,t){let{width:i,min:a,max:r}=e.box,n=t*e.range.width;if(n<a+lO(this,h1)){let t=e.range.left-e.bounds.left-lO(this,h1);return`${n-i/2+t}px`}if(n>r-lO(this,h2)){let t=e.bounds.right-e.range.right-lO(this,h2);return`${n+i/2-t-e.range.width}px`}return 0},mn=new WeakSet,ms=function(e){let t=[...lO(this,hz)].some(t=>e.composedPath().includes(t));if(!this.dragging&&(t||!e.composedPath().includes(this))){lU(this,mo,ml).call(this,null);return}let i=this.mediaSeekableEnd;if(!i)return;let a=aW(this.shadowRoot,"#preview-rail"),r=aW(this.shadowRoot,'[part~="preview-box"]'),n=lU(this,h6,me).call(this,lO(this,hJ)),s=(e.clientX-n.range.left)/n.range.width;s=Math.max(0,Math.min(1,s));let o=lU(this,mt,mi).call(this,n,s),l=lU(this,ma,mr).call(this,n,s);a.style.transform=`translateX(${o})`,a.style.setProperty("--_range-width",`${n.range.width}`),r.style.setProperty("--_box-shift",`${l}`),r.style.setProperty("--_box-width",`${n.box.width}px`),1>Math.abs(Math.round(lO(this,hX))-Math.round(s*i))&&s>.01&&s<.99||(lP(this,hX,s*i),lU(this,mo,ml).call(this,lO(this,hX)))},mo=new WeakSet,ml=function(e){this.dispatchEvent(new aA.CustomEvent(iX.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:e}))},md=new WeakSet,mu=function(){lO(this,hQ).stop();let e=lV(this);this.dispatchEvent(new aA.CustomEvent(iX.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e}))},aA.customElements.get("media-time-range")||aA.customElements.define("media-time-range",lq);let lF=e=>e.mediaMuted?0:e.mediaVolume,l$=({value:e})=>`${Math.round(100*e)}%`;class lj extends sw{static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_VOLUME,i2.MEDIA_MUTED,i2.MEDIA_VOLUME_UNAVAILABLE]}constructor(){super(),this.range.addEventListener("input",()=>{let e=this.range.value,t=new aA.CustomEvent(iX.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(t)})}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",at.VOLUME())}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),(e===i2.MEDIA_VOLUME||e===i2.MEDIA_MUTED)&&(this.range.valueAsNumber=lF(this),this.range.setAttribute("aria-valuetext",l$(this.range)),this.updateBar())}get mediaVolume(){return aV(this,i2.MEDIA_VOLUME,1)}set mediaVolume(e){aq(this,i2.MEDIA_VOLUME,e)}get mediaMuted(){return aF(this,i2.MEDIA_MUTED)}set mediaMuted(e){a$(this,i2.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return aj(this,i2.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){aK(this,i2.MEDIA_VOLUME_UNAVAILABLE,e)}}aA.customElements.get("media-volume-range")||aA.customElements.define("media-volume-range",lj);var lK=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},lY=(e,t,i)=>(lK(e,t,"read from private field"),i?i.call(e):t.get(e)),lG=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},lZ=(e,t,i,a)=>(lK(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),lQ=(e,t,i)=>(lK(e,t,"access private method"),i);let lz=`
<svg aria-hidden="true" viewBox="0 1 24 24" part="select-indicator indicator">
  <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
</svg>`;function lX(e,t,i){let a=ak.createElement("media-chrome-option");a.part.add("option"),a.value=t,a.selected=i;let r=ak.createElement("span");return r.textContent=e,a.append(r),a}function lJ(e,t){let i=e.querySelector(`:scope > [slot="${t}"]`);return((null==i?void 0:i.nodeName)=="SLOT"&&(i=i.assignedElements({flatten:!0})[0]),i)?((i=i.cloneNode(!0)).removeAttribute("slot"),i):e.shadowRoot.querySelector(`[name="${t}"] > svg`).cloneNode(!0)}let l0=ak.createElement("template");l0.innerHTML=`
<style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, normal)
      var(--media-font-size, 15px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-listbox-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .8))));
    border-radius: var(--media-listbox-border-radius);
    display: inline-flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
  }

  ::slotted([slot="header"]) {
    padding: .4em 1.4em;
    border-bottom: 1px solid rgb(255 255 255 / .25);
  }

  #container {
    gap: var(--media-listbox-gap);
    display: flex;
    flex-direction: var(--media-listbox-flex-direction, column);
    overflow: hidden auto;
    padding-block: .5em;
  }

  media-chrome-option {
    padding-inline: .7em 1.4em;
  }

  media-chrome-option > span {
    margin-inline: .5ch;
  }

  [part~="indicator"] {
    fill: var(--media-option-indicator-fill, var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
    height: var(--media-option-indicator-height, 1.25em);
    vertical-align: var(--media-option-indicator-vertical-align, text-top);
  }

  [part~="select-indicator"] {
    display: var(--media-option-select-indicator-display);
    visibility: hidden;
  }

  [aria-selected="true"] > [part~="select-indicator"] {
    visibility: visible;
  }
</style>
<style id="layout-row" media="width:0">

  ::slotted([slot="header"]) {
    padding: .4em .5em;
  }

  #container {
    gap: var(--media-listbox-gap, .25em);
    flex-direction: var(--media-listbox-flex-direction, row);
    padding-inline: .5em;
  }

  media-chrome-option {
    padding: .3em .24em;
  }

  media-chrome-option[aria-selected="true"] {
    background: var(--media-option-selected-background, rgb(255 255 255 / .2));
  }

  [part~="select-indicator"] {
    display: var(--media-option-select-indicator-display, none);
  }
</style>
<slot name="header"></slot>
<slot id="container"></slot>
<slot name="select-indicator" hidden>${lz}</slot>
`;class l1 extends aA.HTMLElement{constructor(e={}){super(),lG(this,mb),lG(this,my),lG(this,mA),lG(this,mT),lG(this,mS),lG(this,mC),lG(this,mc,void 0),lG(this,mh,""),lG(this,mm,null),lG(this,mp,!1),lG(this,mv,e=>{this.handleClick(e)}),lG(this,mE,e=>{let{key:t}=e;if("Escape"===t){this.removeEventListener("keyup",lY(this,mE));return}if("Meta"===t){lZ(this,mp,!1);return}lQ(this,mb,mf).call(this,e)}),lG(this,mg,e=>{let{key:t,altKey:i}=e;if(i){this.removeEventListener("keyup",lY(this,mE));return}if("Meta"===t){lZ(this,mp,!0);return}if(this.keysUsed.includes(t)&&e.preventDefault(),lY(this,mp)&&this.keysUsed.includes(t)){lQ(this,mb,mf).call(this,e);return}this.addEventListener("keyup",lY(this,mE),{once:!0})}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.nativeEl=l0.content.cloneNode(!0),e.slotTemplate&&this.nativeEl.append(e.slotTemplate.content.cloneNode(!0)),this.shadowRoot.append(this.nativeEl)),this.container=this.shadowRoot.querySelector("#container"),this.container.addEventListener("slotchange",e=>{for(let t of e.target.assignedNodes({flatten:!0}))3===t.nodeType&&""===t.textContent.trim()&&t.remove()})}static get observedAttributes(){return["disabled","style",iJ.MEDIA_CONTROLLER]}static formatOptionText(e){return e}formatOptionText(e,t){return this.constructor.formatOptionText(e,t)}get options(){var e;let t=this.querySelectorAll("media-chrome-option");return t.length||(t=null==(e=this.container)?void 0:e.querySelectorAll("media-chrome-option")),Array.from(t)}get selectedOptions(){return this.options.filter(e=>e.selected)}get value(){var e,t;return null!=(t=null==(e=this.selectedOptions[0])?void 0:e.value)?t:""}set value(e){let t=this.options.find(t=>t.value===e);t&&lQ(this,mT,mw).call(this,t)}focus(){var e;null==(e=this.selectedOptions[0])||e.focus()}enable(){this.addEventListener("click",lY(this,mv)),this.addEventListener("keydown",lY(this,mg))}disable(){this.removeEventListener("click",lY(this,mv)),this.removeEventListener("keyup",lY(this,mE))}attributeChangedCallback(e,t,i){var a,r,n,s,o;"style"===e&&i!==t?lQ(this,my,m_).call(this):e===iJ.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=lY(this,mc))?void 0:a.unassociateElement)||r.call(a,this),lZ(this,mc,null)),i&&this.isConnected&&(lZ(this,mc,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=lY(this,mc))?void 0:s.associateElement)||o.call(s,this))):"disabled"===e&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){var e,t,i;lQ(this,my,m_).call(this),this.hasAttribute("disabled")||this.enable(),this.hasAttribute("role")||this.setAttribute("role","listbox");let a=this.getAttribute(iJ.MEDIA_CONTROLLER);a&&(lZ(this,mc,null==(e=this.getRootNode())?void 0:e.getElementById(a)),null==(i=null==(t=lY(this,mc))?void 0:t.associateElement)||i.call(t,this))}disconnectedCallback(){var e,t;this.disable(),null==(t=null==(e=lY(this,mc))?void 0:e.unassociateElement)||t.call(e,this),lZ(this,mc,null)}get keysUsed(){return["Enter"," ","ArrowDown","ArrowUp","Home","End"]}handleSelection(e,t){let i=lQ(this,mA,mk).call(this,e);i&&lQ(this,mT,mw).call(this,i,t)}handleMovement(e){let t;let{key:i}=e,a=this.options,r=lQ(this,mA,mk).call(this,e);switch(r||(r=a.filter(e=>"0"===e.getAttribute("tabindex"))[0]),i){case"ArrowDown":(null==(t=r.nextElementSibling)?void 0:t.hasAttribute("disabled"))&&(t=t.nextElementSibling);break;case"ArrowUp":(null==(t=r.previousElementSibling)?void 0:t.hasAttribute("disabled"))&&(t=t.previousElementSibling);break;case"Home":t=a[0];break;case"End":t=a[a.length-1];break;default:t=lQ(this,mS,mI).call(this,i)}t&&(a.forEach(e=>e.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),t.focus())}handleClick(e){let t=lQ(this,mA,mk).call(this,e);!t||t.hasAttribute("disabled")||(this.options.forEach(e=>e.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),this.handleSelection(e,this.hasAttribute("aria-multiselectable")&&"true"===this.getAttribute("aria-multiselectable")))}}mc=new WeakMap,mh=new WeakMap,mm=new WeakMap,mp=new WeakMap,mv=new WeakMap,mb=new WeakSet,mf=function(e){let{key:t}=e;"Enter"===t||" "===t?this.handleSelection(e,this.hasAttribute("aria-multiselectable")&&"true"===this.getAttribute("aria-multiselectable")):this.handleMovement(e)},mE=new WeakMap,mg=new WeakMap,my=new WeakSet,m_=function(){var e;let t=this.shadowRoot.querySelector("#layout-row"),i=(null==(e=getComputedStyle(this).getPropertyValue("--media-listbox-layout"))?void 0:e.trim())==="row";t.setAttribute("media",i?"":"width:0")},mA=new WeakSet,mk=function(e){let t=e.composedPath(),i=t.findIndex(e=>"MEDIA-CHROME-OPTION"===e.nodeName);return t[i]},mT=new WeakSet,mw=function(e,t){let i=[...this.selectedOptions];this.hasAttribute("aria-multiselectable")&&"true"===this.getAttribute("aria-multiselectable")||this.options.forEach(e=>e.selected=!1),t?e.selected=!e.selected:e.selected=!0,this.selectedOptions.some((e,t)=>e!=i[t])&&this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))},mS=new WeakSet,mI=function(e){lQ(this,mC,mR).call(this);let t=this.options,i=t.findIndex(e=>"0"===e.getAttribute("tabindex"));lZ(this,mh,lY(this,mh)+e);let a=lY(this,mh).split("").every(t=>t===e),r=t.slice(i+(a?1:0)).filter(e=>e.textContent.toLowerCase().startsWith(lY(this,mh))),n=t.slice(0,i-(a?1:0)).filter(e=>e.textContent.toLowerCase().startsWith(lY(this,mh))),s=[],o=[];return a&&(s=t.slice(i+(a?1:0)).filter(t=>t.textContent.startsWith(e)),o=t.slice(0,i-(a?1:0)).filter(t=>t.textContent.startsWith(e))),[...r,...n,...s,...o][0]},mC=new WeakSet,mR=function(){clearTimeout(lY(this,mm)),lZ(this,mm,null),lZ(this,mm,setTimeout(()=>{lZ(this,mh,""),lZ(this,mm,null)},500))},aA.customElements.get("media-chrome-listbox")||aA.customElements.define("media-chrome-listbox",l1);var l2=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},l3=(e,t,i)=>(l2(e,t,"read from private field"),i?i.call(e):t.get(e)),l5=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},l4=(e,t,i,a)=>(l2(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),l9=(e,t,i)=>(l2(e,t,"access private method"),i);let l8=ak.createElement("template");l8.innerHTML=`
<style>
  :host {
    cursor: pointer;
    display: block;
    line-height: revert;
    white-space: nowrap;
    white-space-collapse: collapse;
    text-wrap: nowrap;
    padding: .4em .5em;
    transition: var(--media-option-transition);
    outline: var(--media-option-outline, 0);
    outline-offset: var(--media-option-outline-offset, -1px);
  }

  :host(:focus-visible) {
    box-shadow: var(--media-option-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
    outline: var(--media-option-hover-outline, 0);
    outline-offset: var(--media-option-hover-outline-offset,  var(--media-option-outline-offset, -1px));
  }

  :host(:hover) {
    cursor: pointer;
    background: var(--media-option-hover-background, rgb(82 82 122 / .8));
    outline: var(--media-option-hover-outline);
    outline-offset: var(--media-option-hover-outline-offset,  var(--media-option-outline-offset, -1px));
  }

  :host([aria-selected="true"]) {
    background: var(--media-option-selected-background);
  }

  :host([disabled]) {
    pointer-events: none;
    color: rgba(255, 255, 255, .3);
  }
</style>
<slot></slot>
`;let l7={VALUE:"value",SELECTED:"selected",DISABLED:"disabled"};class l6 extends aA.HTMLElement{constructor(){super(),l5(this,mx),l5(this,mL,!1),l5(this,mD,void 0),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(l8.content.cloneNode(!0)))}static get observedAttributes(){return[l7.DISABLED,l7.SELECTED,l7.VALUE]}get value(){var e;return null!=(e=this.getAttribute(l7.VALUE))?e:this.text}set value(e){this.setAttribute(l7.VALUE,e)}get text(){var e;return(null!=(e=this.textContent)?e:"").trim()}get selected(){return"true"===this.getAttribute("aria-selected")}set selected(e){l4(this,mL,!0),this.setAttribute("aria-selected",e?"true":"false"),e?this.part.add("option-selected"):this.part.remove("option-selected")}enable(){this.hasAttribute("tabindex")||this.setAttribute("tabindex",-1),this.hasAttribute("aria-selected")||this.setAttribute("aria-selected","false")}disable(){this.removeAttribute("tabindex")}attributeChangedCallback(e,t,i){e!==l7.SELECTED||l3(this,mL)?e===l7.DISABLED&&i!==t&&(null==i?this.enable():this.disable()):this.setAttribute("aria-selected",null!=i?"true":"false")}connectedCallback(){this.hasAttribute(l7.DISABLED)||this.enable(),this.setAttribute("role","option"),l4(this,mD,function e(t,i){if(!t)return null;let{host:a}=t.getRootNode();return!i&&a?e(t,a):(null==i?void 0:i.options)?i:e(i,null==i?void 0:i.parentNode)}(this,this.parentNode)),l9(this,mx,mM).call(this)}disconnectedCallback(){this.disable(),l9(this,mx,mM).call(this),l4(this,mD,null)}handleClick(){}}mL=new WeakMap,mD=new WeakMap,mx=new WeakSet,mM=function(){var e;let t=null==(e=l3(this,mD))?void 0:e.options;if(!t)return;let i=t.filter(e=>"true"===e.getAttribute("aria-selected")).pop();i||(i=t[0]),"true"!==l3(this,mD).getAttribute("aria-multiselectable")&&t.forEach(e=>{e.setAttribute("tabindex","-1"),e.setAttribute("aria-selected","false")}),null==i||i.setAttribute("tabindex","0"),null==i||i.setAttribute("aria-selected","true")},aA.customElements.get("media-chrome-option")||aA.customElements.define("media-chrome-option",l6);var de=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dt=(e,t,i)=>(de(e,t,"read from private field"),i?i.call(e):t.get(e)),di=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},da=(e,t,i,a)=>(de(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dr=(e,t,i)=>(de(e,t,"access private method"),i);let dn=ak.createElement("template");dn.innerHTML=`
  <style>
  :host {
    font: var(--media-font,
      var(--media-font-weight, normal)
      var(--media-font-size, 15px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    display: inline-flex;
    position: relative;
    flex-shrink: .5;
  }

  [name=listbox]::slotted(*),
  [part=listbox] {
    position: absolute;
    bottom: 100%;
    max-height: 300px;
    transition: var(--media-selectmenu-transition-in,
      visibility 0s, transform .15s ease-out, opacity .15s ease-out);
    transform: var(--media-listbox-transform-in, translateY(0) scale(1));
    visibility: visible;
    opacity: 1;
  }

  [name=listbox][hidden]::slotted(*),
  [hidden] [part=listbox] {
    transition: var(--media-selectmenu-transition-out,
      visibility .15s ease-out, transform .15s ease-out, opacity .15s ease-out);
    transform: var(--media-listbox-transform-out, translateY(2px) scale(.99));
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
  }

  slot[name=listbox][hidden] {
    display: block;
  }
  </style>

  <slot name="button">
    <media-chrome-button aria-haspopup="listbox" part="button">
      <slot name="button-content"></slot>
    </media-chrome-button>
  </slot>
  <slot name="listbox" hidden>
    <media-chrome-listbox id="listbox" part="listbox">
      <slot></slot>
    </media-chrome-listbox>
  </slot>
`;class ds extends aA.HTMLElement{constructor(){var e;super(),di(this,m$),di(this,mK),di(this,mG),di(this,mO,void 0),di(this,mN,void 0),di(this,mP,void 0),di(this,mU,void 0),di(this,mB,void 0),di(this,mW,e=>{let{key:t}=e;if(!this.keysUsed.includes(t)){this.removeEventListener("keyup",dt(this,mW));return}e.composedPath().includes(dt(this,mN))&&("Enter"===t||" "===t)?dr(this,m$,mj).call(this):"Escape"===t&&dr(this,mG,mZ).call(this)}),di(this,mH,e=>{let{metaKey:t,altKey:i,key:a}=e;if(t||i||!this.keysUsed.includes(a)){this.removeEventListener("keyup",dt(this,mW));return}e.preventDefault(),this.addEventListener("keyup",dt(this,mW),{once:!0})}),di(this,mV,e=>{e.composedPath().includes(this)||dr(this,mG,mZ).call(this)}),di(this,mq,e=>{e.composedPath().includes(dt(this,mN))&&dr(this,m$,mj).call(this)}),di(this,mF,()=>{dr(this,mG,mZ).call(this)}),di(this,mQ,()=>{if(0===dt(this,mU).offsetWidth)return;let e=dt(this,mU).offsetWidth,t=dt(this,mN).getBoundingClientRect();if(this.hasAttribute("mediacontroller")||dt(this,mN).hasAttribute("mediacontroller")||dt(this,mU).hasAttribute("mediacontroller")){dt(this,mU).style.zIndex="1",dt(this,mU).style.bottom="unset",dt(this,mU).style.right=null,dt(this,mU).style.left="0",dt(this,mU).style.top=`${t.height}px`;return}let i=dl(this).getBoundingClientRect(),a=t.x+e,r=Math.max(t.right-a,t.right-i.right);dt(this,mU).style.left=null,dt(this,mU).style.right=`${r}px`,dt(this,mU).style.maxHeight=`${i.height-t.height}px`}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(dn.content.cloneNode(!0))),null==(e=this.init)||e.call(this),da(this,mN,this.shadowRoot.querySelector("[part=button]")),da(this,mU,this.shadowRoot.querySelector("[part=listbox]")),da(this,mP,this.shadowRoot.querySelector("slot[name=button]")),dt(this,mP).addEventListener("slotchange",()=>{let e=dt(this,mP).assignedElements()[0];e&&(da(this,mN,e),dt(this,mN).preventClick=!0,this.hasAttribute("disabled")||dt(this,mN).hasAttribute("disabled")?this.disable():(this.enable(),dt(this,mN).setAttribute("aria-haspopup","listbox")))}),da(this,mB,this.shadowRoot.querySelector("slot[name=listbox]")),dt(this,mB).addEventListener("slotchange",()=>{da(this,mU,dt(this,mB).assignedElements()[0]||dt(this,mU))})}static get observedAttributes(){return["disabled",iJ.MEDIA_CONTROLLER]}enable(){dt(this,mN).toggleAttribute("disabled",!1),this.addEventListener("change",dt(this,mF)),this.addEventListener("keydown",dt(this,mH)),this.addEventListener("click",dt(this,mq)),ak.addEventListener("click",dt(this,mV))}disable(){dt(this,mN).toggleAttribute("disabled",!0),this.removeEventListener("change",dt(this,mF)),this.removeEventListener("keydown",dt(this,mH)),this.removeEventListener("keyup",dt(this,mW)),this.removeEventListener("click",dt(this,mq)),ak.removeEventListener("click",dt(this,mV))}attributeChangedCallback(e,t,i){var a,r,n,s,o;e===iJ.MEDIA_CONTROLLER?(t&&(null==(r=null==(a=dt(this,mO))?void 0:a.unassociateElement)||r.call(a,this),da(this,mO,null),dt(this,mU).removeAttribute(iJ.MEDIA_CONTROLLER)),i&&this.isConnected&&(da(this,mO,null==(n=this.getRootNode())?void 0:n.getElementById(i)),null==(o=null==(s=dt(this,mO))?void 0:s.associateElement)||o.call(s,this),dt(this,mU).setAttribute(iJ.MEDIA_CONTROLLER,i))):"disabled"===e&&i!==t&&(null==i?this.enable():this.disable())}connectedCallback(){var e,t,i;let{style:a}=aW(this.shadowRoot,":host");a.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);let r=this.getAttribute(iJ.MEDIA_CONTROLLER);r&&(da(this,mO,null==(e=this.getRootNode())?void 0:e.getElementById(r)),null==(i=null==(t=dt(this,mO))?void 0:t.associateElement)||i.call(t,this),dt(this,mU).setAttribute(iJ.MEDIA_CONTROLLER,r)),this.hasAttribute("disabled")||this.enable(),dt(this,mB).hidden||aI(dl(this),dt(this,mQ))}disconnectedCallback(){var e,t;aC(dl(this),dt(this,mQ)),this.disable(),null==(t=null==(e=dt(this,mO))?void 0:e.unassociateElement)||t.call(e,this),da(this,mO,null),dt(this,mU).removeAttribute(iJ.MEDIA_CONTROLLER)}get keysUsed(){return["Enter","Escape"," ","ArrowUp","ArrowDown","f","c","k","m"]}}function dl(e){var t;return null!=(t=e.getAttribute("bounds")?aN(e,`#${e.getAttribute("bounds")}`):function(e){var t;let i=e.getAttribute(iJ.MEDIA_CONTROLLER);return i?null==(t=e.getRootNode())?void 0:t.getElementById(i):aN(e,"media-controller")}(e)||e.parentElement)?t:e}mO=new WeakMap,mN=new WeakMap,mP=new WeakMap,mU=new WeakMap,mB=new WeakMap,mW=new WeakMap,mH=new WeakMap,mV=new WeakMap,mq=new WeakMap,mF=new WeakMap,m$=new WeakSet,mj=function(){dt(this,mB).hidden?dr(this,mK,mY).call(this):dr(this,mG,mZ).call(this)},mK=new WeakSet,mY=function(){dt(this,mB).hidden&&(dt(this,mB).hidden=!1,dt(this,mN).setAttribute("aria-expanded","true"),dt(this,mQ).call(this),dt(this,mU).focus(),aI(dl(this),dt(this,mQ)))},mG=new WeakSet,mZ=function(){if(dt(this,mB).hidden)return;aC(dl(this),dt(this,mQ));let e=aP();dt(this,mB).hidden=!0,dt(this,mN).setAttribute("aria-expanded","false"),aO(dt(this,mU),e)&&dt(this,mN).focus()},mQ=new WeakMap,aA.customElements.get("media-chrome-selectmenu")||aA.customElements.define("media-chrome-selectmenu",ds);var dd=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},du=(e,t,i)=>(dd(e,t,"read from private field"),i?i.call(e):t.get(e)),dc=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dh=(e,t,i,a)=>(dd(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dm=(e,t,i)=>(dd(e,t,"access private method"),i);let dp=`
<svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,dv=ak.createElement("template");dv.innerHTML=`
  <slot name="captions-indicator" hidden>${dp}</slot>
`;class db extends l1{constructor(){super({slotTemplate:dv}),dc(this,mX),dc(this,m0),dc(this,mz,void 0)}static get observedAttributes(){return[...super.observedAttributes,"aria-multiselectable",i2.MEDIA_SUBTITLES_LIST,i2.MEDIA_SUBTITLES_SHOWING]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i2.MEDIA_SUBTITLES_LIST&&t!==i?dm(this,mX,mJ).call(this):e===i2.MEDIA_SUBTITLES_SHOWING&&t!==i?this.value=i:"aria-multiselectable"===e&&(this.removeAttribute("aria-multiselectable"),console.warn("Captions List doesn't currently support multiple selections. You can enable multiple items via the media.textTracks API."))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dm(this,m0,m1))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dm(this,m0,m1))}get mediaSubtitlesList(){return df(this,i2.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){dE(this,i2.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return df(this,i2.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){dE(this,i2.MEDIA_SUBTITLES_SHOWING,e)}}mz=new WeakMap,mX=new WeakSet,mJ=function(){var e;if(du(this,mz)===JSON.stringify(this.mediaSubtitlesList))return;dh(this,mz,JSON.stringify(this.mediaSubtitlesList));let t=this.shadowRoot.querySelector("#container");t.textContent="";let i=!this.value,a=lX(this.formatOptionText("Off"),"off",i);for(let i of(a.prepend(lJ(this,"select-indicator")),t.append(a),this.mediaSubtitlesList)){let a=lX(this.formatOptionText(i.label,i),ru(i),this.value==ru(i));a.prepend(lJ(this,"select-indicator")),"captions"===(null!=(e=i.kind)?e:"subs")&&a.append(lJ(this,"captions-indicator")),t.append(a)}},m0=new WeakSet,m1=function(){let e=this.mediaSubtitlesShowing,t=this.getAttribute(i2.MEDIA_SUBTITLES_SHOWING),i=this.value!==t;if((null==e?void 0:e.length)&&i&&this.dispatchEvent(new aA.CustomEvent(iX.MEDIA_DISABLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:e})),!this.value||!i)return;let a=new aA.CustomEvent(iX.MEDIA_SHOW_SUBTITLES_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(a)};let df=(e,t)=>{let i=e.getAttribute(t);return i?rl(i):[]},dE=(e,t,i)=>{if(!(null==i?void 0:i.length)){e.removeAttribute(t);return}let a=rc(i);e.getAttribute(t)!==a&&e.setAttribute(t,a)};aA.customElements.get("media-captions-listbox")||aA.customElements.define("media-captions-listbox",db);class dg extends ds{init(){let e=ak.createElement("media-captions-button");e.part.add("button"),e.preventClick=!0;let t=ak.createElement("media-captions-listbox");t.part.add("listbox"),t.setAttribute("exportparts","option, option-selected, indicator");let i=this.shadowRoot.querySelector("slot[name=button]"),a=this.shadowRoot.querySelector("slot[name=listbox]");i.textContent="",a.textContent="",i.append(e),a.append(t)}}aA.customElements.get("media-captions-selectmenu")||aA.customElements.define("media-captions-selectmenu",dg);var dy=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},d_=(e,t,i)=>(dy(e,t,"read from private field"),i?i.call(e):t.get(e)),dA=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dk=(e,t,i)=>(dy(e,t,"access private method"),i);let dT={RATES:"rates"};class dw extends l1{constructor(){super(),dA(this,m3),dA(this,m4),dA(this,m2,new rn(this,dT.RATES,{defaultValue:ov})),dk(this,m3,m5).call(this)}static get observedAttributes(){return[...super.observedAttributes,"aria-multiselectable",i2.MEDIA_PLAYBACK_RATE,dT.RATES]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i2.MEDIA_PLAYBACK_RATE&&t!=i?this.value=i:e===dT.RATES&&t!=i&&(d_(this,m2).value=i,dk(this,m3,m5).call(this))}get rates(){return d_(this,m2)}set rates(e){e?Array.isArray(e)&&(d_(this,m2).value=e.join(" ")):d_(this,m2).value="",dk(this,m3,m5).call(this)}get mediaPlaybackRate(){return aV(this,i2.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){aq(this,i2.MEDIA_PLAYBACK_RATE,e)}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dk(this,m4,m9))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dk(this,m4,m9))}}m2=new WeakMap,m3=new WeakSet,m5=function(){let e=this.shadowRoot.querySelector("#container");for(let t of(e.textContent="",this.rates)){let i=lX(this.formatOptionText(`${t}x`,t),t,this.mediaPlaybackRate==t);i.prepend(lJ(this,"select-indicator")),e.append(i)}},m4=new WeakSet,m9=function(){if(!this.value)return;let e=new aA.CustomEvent(iX.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aA.customElements.get("media-playback-rate-listbox")||aA.customElements.define("media-playback-rate-listbox",dw);class dS extends ds{init(){let e=ak.createElement("media-playback-rate-button");e.part.add("button"),e.preventClick=!0;let t=ak.createElement("media-playback-rate-listbox");t.part.add("listbox"),t.setAttribute("exportparts","option, option-selected, indicator");let i=this.shadowRoot.querySelector("slot[name=button]"),a=this.shadowRoot.querySelector("slot[name=listbox]");i.textContent="",a.textContent="",i.append(e),a.append(t)}}aA.customElements.get("media-playback-rate-selectmenu")||aA.customElements.define("media-playback-rate-selectmenu",dS);var dI=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dC=(e,t,i)=>(dI(e,t,"read from private field"),i?i.call(e):t.get(e)),dR=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dL=(e,t,i,a)=>(dI(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dD=(e,t,i)=>(dI(e,t,"access private method"),i);class dx extends l1{constructor(){super(...arguments),dR(this,m6),dR(this,pt),dR(this,m8,[]),dR(this,m7,void 0)}static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_RENDITION_LIST,i2.MEDIA_RENDITION_SELECTED]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i2.MEDIA_RENDITION_SELECTED&&t!==i?this.value=null!=i?i:"auto":e===i2.MEDIA_RENDITION_LIST&&t!==i&&(dL(this,m8,aa(i)),dD(this,m6,pe).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dD(this,pt,pi))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dD(this,pt,pi))}get mediaRenditionList(){return dC(this,m8)}set mediaRenditionList(e){dL(this,m8,e),dD(this,m6,pe).call(this)}get mediaRenditionSelected(){return aj(this,i2.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){aK(this,i2.MEDIA_RENDITION_SELECTED,e)}}m8=new WeakMap,m7=new WeakMap,m6=new WeakSet,pe=function(){if(dC(this,m7)===JSON.stringify(this.mediaRenditionList))return;dL(this,m7,JSON.stringify(this.mediaRenditionList));let e=this.mediaRenditionList.sort((e,t)=>t.height-e.height),t=this.shadowRoot.querySelector("#container");t.textContent="";let i=!this.mediaRenditionSelected;for(let a of e){let e=lX(this.formatOptionText(`${Math.min(a.width,a.height)}p`,a),`${a.id}`,a.selected&&!i);e.prepend(lJ(this,"select-indicator")),t.append(e)}let a=lX(this.formatOptionText("Auto"),"auto",i);a.prepend(lJ(this,"select-indicator")),t.append(a)},pt=new WeakSet,pi=function(){if(null==this.value)return;let e=new aA.CustomEvent(iX.MEDIA_RENDITION_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aA.customElements.get("media-rendition-listbox")||aA.customElements.define("media-rendition-listbox",dx);let dM=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`,dO=ak.createElement("template");dO.innerHTML=`
  <slot name="icon">${dM}</slot>
`;class dN extends ni{static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_RENDITION_SELECTED,i2.MEDIA_RENDITION_UNAVAILABLE]}constructor(){super({slotTemplate:dO})}get mediaRenditionSelected(){return aj(this,i2.MEDIA_RENDITION_SELECTED)}set mediaRenditionSelected(e){aK(this,i2.MEDIA_RENDITION_SELECTED,e)}}aA.customElements.get("media-rendition-button")||aA.customElements.define("media-rendition-button",dN);class dP extends ds{static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_RENDITION_SELECTED,i2.MEDIA_RENDITION_UNAVAILABLE]}init(){let e=ak.createElement("media-rendition-button");e.part.add("button"),e.preventClick=!0;let t=ak.createElement("media-rendition-listbox");t.part.add("listbox"),t.setAttribute("exportparts","option, option-selected, indicator");let i=this.shadowRoot.querySelector("slot[name=button]"),a=this.shadowRoot.querySelector("slot[name=listbox]");i.textContent="",a.textContent="",i.append(e),a.append(t)}}aA.customElements.get("media-rendition-selectmenu")||aA.customElements.define("media-rendition-selectmenu",dP);var dU=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dB=(e,t,i)=>(dU(e,t,"read from private field"),i?i.call(e):t.get(e)),dW=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},dH=(e,t,i,a)=>(dU(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),dV=(e,t,i)=>(dU(e,t,"access private method"),i);class dq extends l1{constructor(){super(...arguments),dW(this,pn),dW(this,po),dW(this,pa,[]),dW(this,pr,void 0)}static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_AUDIO_TRACK_LIST,i2.MEDIA_AUDIO_TRACK_ENABLED]}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),e===i2.MEDIA_AUDIO_TRACK_ENABLED&&t!==i?this.value=i:e===i2.MEDIA_AUDIO_TRACK_LIST&&t!==i&&(dH(this,pa,as(i)),dV(this,pn,ps).call(this))}connectedCallback(){super.connectedCallback(),this.addEventListener("change",dV(this,po,pl))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",dV(this,po,pl))}get mediaAudioTrackList(){return dB(this,pa)}set mediaAudioTrackList(e){dH(this,pa,e),dV(this,pn,ps).call(this)}get mediaAudioTrackEnabled(){return aj(this,i2.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(e){aK(this,i2.MEDIA_AUDIO_TRACK_ENABLED,e)}}pa=new WeakMap,pr=new WeakMap,pn=new WeakSet,ps=function(){if(dB(this,pr)===JSON.stringify(this.mediaAudioTrackList))return;dH(this,pr,JSON.stringify(this.mediaAudioTrackList));let e=this.mediaAudioTrackList,t=this.shadowRoot.querySelector("#container");for(let i of(t.textContent="",e)){let e=lX(this.formatOptionText(i.label,i),`${i.id}`,i.enabled);e.prepend(lJ(this,"select-indicator")),t.append(e)}},po=new WeakSet,pl=function(){if(null==this.value)return;let e=new aA.CustomEvent(iX.MEDIA_AUDIO_TRACK_REQUEST,{composed:!0,bubbles:!0,detail:this.value});this.dispatchEvent(e)},aA.customElements.get("media-audio-track-listbox")||aA.customElements.define("media-audio-track-listbox",dq);let dF=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,d$=ak.createElement("template");d$.innerHTML=`
  <slot name="icon">${dF}</slot>
`;class dj extends ni{static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_AUDIO_TRACK_ENABLED,i2.MEDIA_AUDIO_TRACK_UNAVAILABLE]}constructor(){super({slotTemplate:d$})}get mediaAudioTrackEnabled(){return aj(this,i2.MEDIA_AUDIO_TRACK_ENABLED)}set mediaAudioTrackEnabled(e){aK(this,i2.MEDIA_AUDIO_TRACK_ENABLED,e)}}aA.customElements.get("media-audio-track-button")||aA.customElements.define("media-audio-track-button",dj);class dK extends ds{static get observedAttributes(){return[...super.observedAttributes,i2.MEDIA_AUDIO_TRACK_ENABLED,i2.MEDIA_AUDIO_TRACK_UNAVAILABLE]}init(){let e=ak.createElement("media-audio-track-button");e.part.add("button"),e.preventClick=!0;let t=ak.createElement("media-audio-track-listbox");t.part.add("listbox"),t.setAttribute("exportparts","option, option-selected, indicator");let i=this.shadowRoot.querySelector("slot[name=button]"),a=this.shadowRoot.querySelector("slot[name=listbox]");i.textContent="",a.textContent="",i.append(e),a.append(t)}}aA.customElements.get("media-audio-track-selectmenu")||aA.customElements.define("media-audio-track-selectmenu",dK);var dY=Object.defineProperty,dG=Object.getPrototypeOf,dZ=Reflect.get,dQ=(e,t,i)=>t in e?dY(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,dz=(e,t,i)=>(dQ(e,"symbol"!=typeof t?t+"":t,i),i),dX=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},dJ=(e,t,i)=>(dX(e,t,"read from private field"),i?i.call(e):t.get(e)),d0=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},d1=(e,t,i,a)=>(dX(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),d2=(e,t,i)=>(dX(e,t,"access private method"),i),d3=(e,t,i)=>dZ(dG(e),i,t),d5=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends d5{}globalThis.DocumentFragment=e}var d4,d9,d8,d7,d6,ue,ut,ui,ua,ur,un,us,uo,ul,ud,uu,uc,uh,um,up,uv,ub,uf,uE,ug,uy,u_,uA,uk,uT,uw,uS,uI,uC,uR,uL,uD,ux,uM,uO,uN,uP,uU,uB,uW,uH,uV,uq,uF,u$,uj,uK,uY,uG,uZ,uQ,uz,uX,uJ,u0,u1,u2,u3,u5,u4,u9,u8,u7,u6,ce,ct,ci,ca,cr,cn,cs,co,cl,cd,cu,cc,ch,cm,cp,cv,cb,cf,cE,cg,cy,c_,cA,ck,cT,cw,cS,cI,cC,cR,cL,cD,cx,cM,cO,cN,cP,cU,cB,cW,cH,cV,cq,cF,c$,cj,cK,cY,cG,cZ,cQ,cz,cX,cJ,c0,c1,c2,c3,c5,c4,c9,c8,c7,c6,he,ht,hi,ha,hr,hn,hs,ho,hl,hd,hu,hc,hh,hm,hp,hv,hb,hf,hE,hg,hy,h_,hA,hk,hT,hw,hS,hI,hC,hR,hL,hD,hx,hM,hO,hN,hP,hU,hB,hW,hH,hV,hq,hF,h$,hj,hK,hY,hG,hZ,hQ,hz,hX,hJ,h0,h1,h2,h3,h5,h4,h9,h8,h7,h6,me,mt,mi,ma,mr,mn,ms,mo,ml,md,mu,mc,mh,mm,mp,mv,mb,mf,mE,mg,my,m_,mA,mk,mT,mw,mS,mI,mC,mR,mL,mD,mx,mM,mO,mN,mP,mU,mB,mW,mH,mV,mq,mF,m$,mj,mK,mY,mG,mZ,mQ,mz,mX,mJ,m0,m1,m2,m3,m5,m4,m9,m8,m7,m6,pe,pt,pi,pa,pr,pn,ps,po,pl,pd,pu=class extends d5{},pc=class{constructor(e,t={}){d0(this,pd,void 0),d1(this,pd,null==t?void 0:t.detail)}get detail(){return dJ(this,pd)}initCustomEvent(){}};pd=new WeakMap;var ph={document:{createElement:function(e,t){return new pu}},DocumentFragment,customElements:{get(e){},define(e,t,i){},upgrade(e){},whenDefined:e=>Promise.resolve(pu)},CustomEvent:pc,EventTarget:d5,HTMLElement:pu,HTMLVideoElement:class extends d5{}},pm="undefined"==typeof window||void 0===globalThis.customElements,pp=pm?ph:globalThis;pm&&ph.document;var pv,pb=(()=>{try{return"0.19.0"}catch{}return"UNKNOWN"})(),pf=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting","waitingforkey","resize","enterpictureinpicture","leavepictureinpicture","webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"],pE=null==(pv=globalThis.document)?void 0:pv.createElement("template");pE&&(pE.innerHTML=`
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media"></slot>
    <slot></slot>
  `);var pg,py=null==(pg=globalThis.document)?void 0:pg.createElement("template");py&&(py.innerHTML=`
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media"></slot>
    <slot></slot>
  `);var p_=(e,{tag:t,is:i})=>{var a,r,n,s,o,l,d,u,c,h,m,p,v,b,f,E;let g=null==(a=globalThis.document)?void 0:a.createElement(t,{is:i}),y=g?function(e){let t=[];for(let i=Object.getPrototypeOf(e);i&&i!==HTMLElement.prototype;i=Object.getPrototypeOf(i))t.push(...Object.getOwnPropertyNames(i));return t}(g):[];return r=class extends e{constructor(){super(),d0(this,c),d0(this,m),d0(this,v),d0(this,f),d0(this,l,void 0),d0(this,d,void 0),d0(this,u,new Map),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.append(this.constructor.template.content.cloneNode(!0)))}static get observedAttributes(){var e,t,i;return d2(e=r,s,o).call(e),[...null!=(i=null==(t=null==g?void 0:g.constructor)?void 0:t.observedAttributes)?i:[],"autopictureinpicture","disablepictureinpicture","disableremoteplayback","autoplay","controls","controlslist","crossorigin","loop","muted","playsinline","poster","preload","src"]}get nativeEl(){var e,i,a;return null!=(a=null!=(i=null!=(e=dJ(this,d))?e:this.shadowRoot.querySelector(t))?i:this.querySelector(":scope > [slot=media]"))?a:this.querySelector(t)}set nativeEl(e){d1(this,d,e)}get defaultMuted(){return this.hasAttribute("muted")}set defaultMuted(e){this.toggleAttribute("muted",!!e)}get src(){return this.getAttribute("src")}set src(e){this.setAttribute("src",`${e}`)}get preload(){var e,t;return null!=(t=this.getAttribute("preload"))?t:null==(e=this.nativeEl)?void 0:e.preload}set preload(e){this.setAttribute("preload",`${e}`)}init(){var e,a;if(!this.nativeEl){let e=document.createElement(t,{is:i});e.part=t,this.shadowRoot.querySelector('slot[name="media"]').append(e)}for(let e of(this.nativeEl.muted=this.hasAttribute("muted"),y))d2(this,v,b).call(this,e);for(let t of(this.shadowRoot.addEventListener("slotchange",this),this.constructor.Events))null==(a=(e=this.shadowRoot).addEventListener)||a.call(e,t,this,!0)}handleEvent(e){if("slotchange"===e.type){d2(this,m,p).call(this);return}e.target===this.nativeEl&&this.dispatchEvent(new CustomEvent(e.type,{detail:e.detail}))}attributeChangedCallback(e,t,i){d2(this,c,h).call(this),d2(this,f,E).call(this,e,t,i)}connectedCallback(){d2(this,c,h).call(this)}},n=new WeakMap,s=new WeakSet,o=function(){if(dJ(this,n))return;d1(this,n,!0);let e=new Set(this.observedAttributes);for(let t of(e.delete("muted"),y))if(!(t in this.prototype)){if("function"==typeof g[t])this.prototype[t]=function(...e){return d2(this,c,h).call(this),this.call?this.call(t,...e):this.nativeEl[t].apply(this.nativeEl,e)};else{let i={get(){var i,a,r;d2(this,c,h).call(this);let n=t.toLowerCase();if(e.has(n)){let e=this.getAttribute(n);return null!==e&&(""===e||e)}return null!=(r=null==(i=this.get)?void 0:i.call(this,t))?r:null==(a=this.nativeEl)?void 0:a[t]}};t!==t.toUpperCase()&&(i.set=function(i){d2(this,c,h).call(this);let a=t.toLowerCase();if(e.has(a)){!0===i||!1===i||null==i?this.toggleAttribute(a,!!i):this.setAttribute(a,i);return}if(this.set){this.set(t,i);return}this.nativeEl[t]=i}),Object.defineProperty(this.prototype,t,i)}}},l=new WeakMap,d=new WeakMap,u=new WeakMap,c=new WeakSet,h=function(){dJ(this,l)||(d1(this,l,!0),this.init())},m=new WeakSet,p=function(){let e=new Map(dJ(this,u));this.shadowRoot.querySelector("slot:not([name])").assignedElements().filter(e=>["track","source"].includes(e.localName)).forEach(t=>{var i,a;e.delete(t);let r=dJ(this,u).get(t);r||(r=t.cloneNode(),dJ(this,u).set(t,r)),null==(a=(i=this.nativeEl).append)||a.call(i,r),"track"===r.localName&&r.default&&("chapters"===r.kind||"metadata"===r.kind)&&"disabled"===r.track.mode&&(r.track.mode="hidden")}),e.forEach(e=>e.remove())},v=new WeakSet,b=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},f=new WeakSet,E=function(e,t,i){var a,n,s,o,l,d;["id","class"].includes(e)||!r.observedAttributes.includes(e)&&this.constructor.observedAttributes.includes(e)||(null===i?null==(n=(a=this.nativeEl).removeAttribute)||n.call(a,e):(null==(o=(s=this.nativeEl).getAttribute)?void 0:o.call(s,e))!=i&&(null==(d=(l=this.nativeEl).setAttribute)||d.call(l,e,i)))},d0(r,s),dz(r,"Events",pf),dz(r,"template",t.endsWith("audio")?pE:py),d0(r,n,void 0),r},pA=globalThis.document?p_(HTMLElement,{tag:"video"}):class{};globalThis.document&&p_(HTMLElement,{tag:"audio"});var pk=new WeakMap,pT=class extends Error{},pw=class extends Error{};function pS(){return"undefined"!=typeof chrome&&chrome.cast&&chrome.cast.isAvailable}function pI(){return"undefined"!=typeof cast&&cast.framework}function pC(){if(pI())return cast.framework.CastContext.getInstance()}function pR(){var e;return null==(e=pC())?void 0:e.getCurrentSession()}function pL(){var e;return null==(e=pR())?void 0:e.getSessionObj().media[0]}function pD(e){return pC().setOptions({...px(),...e})}function px(){return{receiverApplicationId:"CC1AD845",autoJoinPolicy:"origin_scoped",androidReceiverCompatible:!1,language:"en-US",resumeSavedSession:!0}}var pM,pO=new(globalThis.WeakRef?class extends Set{add(e){super.add(new WeakRef(e))}forEach(e){super.forEach(t=>{let i=t.deref();i&&e(i)})}}:Set),pN=new WeakSet;pP=e=>{e&&!pM&&(pM=cast.framework,pC().addEventListener(pM.CastContextEventType.CAST_STATE_CHANGED,e=>{pO.forEach(t=>{var i,a;return null==(a=(i=pk.get(t)).onCastStateChanged)?void 0:a.call(i,e)})}),pC().addEventListener(pM.CastContextEventType.SESSION_STATE_CHANGED,e=>{pO.forEach(t=>{var i,a;return null==(a=(i=pk.get(t)).onSessionStateChanged)?void 0:a.call(i,e)})}),pO.forEach(e=>{var t,i;return null==(i=(t=pk.get(e)).init)?void 0:i.call(t)}))},pS()?pI()?pP(chrome.cast.isAvailable):customElements.whenDefined("google-cast-button").then(()=>pP(chrome.cast.isAvailable)):globalThis.__onGCastApiAvailable=()=>{customElements.whenDefined("google-cast-button").then(()=>pP(chrome.cast.isAvailable))};var pP,pU,pB,pW,pH,pV,pq,pF,p$,pj,pK,pY,pG,pZ,pQ,pz,pX,pJ,p0,p1,p2,p3,p5,p4=0,p9=class extends EventTarget{constructor(e){super(),d0(this,pj),d0(this,pY),d0(this,pZ),d0(this,pz),d0(this,pJ),d0(this,p1),d0(this,p3),d0(this,pU,void 0),d0(this,pB,void 0),d0(this,pW,void 0),d0(this,pH,void 0),d0(this,pV,"disconnected"),d0(this,pq,!1),d0(this,pF,new Set),d0(this,p$,new WeakMap),d1(this,pU,e),pO.add(this),pk.set(this,{init:()=>d2(this,pJ,p0).call(this),onCastStateChanged:()=>d2(this,pZ,pQ).call(this),onSessionStateChanged:()=>d2(this,pz,pX).call(this),getCastPlayer:()=>dJ(this,pj,pK)}),d2(this,pJ,p0).call(this)}get state(){return dJ(this,pV)}async watchAvailability(e){if(dJ(this,pU).disableRemotePlayback)throw new pT("disableRemotePlayback attribute is present.");return dJ(this,p$).set(e,++p4),dJ(this,pF).add(e),p4}async cancelWatchAvailability(e){if(dJ(this,pU).disableRemotePlayback)throw new pT("disableRemotePlayback attribute is present.");e?dJ(this,pF).delete(e):dJ(this,pF).clear()}async prompt(){var e,t;if(dJ(this,pU).disableRemotePlayback)throw new pT("disableRemotePlayback attribute is present.");if(!pS())throw new pw("The RemotePlayback API is disabled on this platform.");let i=pN.has(dJ(this,pU));pN.add(dJ(this,pU)),pD(dJ(this,pU).castOptions),Object.entries(dJ(this,pH)).forEach(([e,t])=>{dJ(this,pW).controller.addEventListener(e,t)});try{await pC().requestSession()}catch(e){if("cancel"===e){i||pN.delete(dJ(this,pU));return}throw Error(e)}null==(t=null==(e=pk.get(dJ(this,pU)))?void 0:e.loadOnPrompt)||t.call(e)}};pU=new WeakMap,pB=new WeakMap,pW=new WeakMap,pH=new WeakMap,pV=new WeakMap,pq=new WeakMap,pF=new WeakMap,p$=new WeakMap,pj=new WeakSet,pK=function(){if(pN.has(dJ(this,pU)))return dJ(this,pW)},pY=new WeakSet,pG=function(){pN.has(dJ(this,pU))&&(Object.entries(dJ(this,pH)).forEach(([e,t])=>{dJ(this,pW).controller.removeEventListener(e,t)}),pN.delete(dJ(this,pU)),dJ(this,pU).muted=dJ(this,pW).isMuted,dJ(this,pU).currentTime=dJ(this,pW).savedPlayerState.currentTime,!1===dJ(this,pW).savedPlayerState.isPaused&&dJ(this,pU).play())},pZ=new WeakSet,pQ=function(){let e=pC().getCastState();if(pN.has(dJ(this,pU))&&"CONNECTING"===e&&(d1(this,pV,"connecting"),this.dispatchEvent(new Event("connecting"))),!dJ(this,pq)&&null!=e&&e.includes("CONNECT"))for(let e of(d1(this,pq,!0),dJ(this,pF)))e(!0);else if(dJ(this,pq)&&(!e||"NO_DEVICES_AVAILABLE"===e))for(let e of(d1(this,pq,!1),dJ(this,pF)))e(!1)},pz=new WeakSet,pX=async function(){var e,t;let{SESSION_RESUMED:i}=pM.SessionState;if(pC().getSessionState()===i&&dJ(this,pU).castSrc===(null==(e=pL())?void 0:e.media.contentId)){pN.add(dJ(this,pU)),Object.entries(dJ(this,pH)).forEach(([e,t])=>{dJ(this,pW).controller.addEventListener(e,t)});try{await (t=new chrome.cast.media.GetStatusRequest,new Promise((e,i)=>{pL().getStatus(t,e,i)}))}catch(e){console.error(e)}dJ(this,pH)[pM.RemotePlayerEventType.IS_PAUSED_CHANGED](),dJ(this,pH)[pM.RemotePlayerEventType.PLAYER_STATE_CHANGED]()}},pJ=new WeakSet,p0=function(){!pM||dJ(this,pB)||(d1(this,pB,!0),pD(dJ(this,pU).castOptions),dJ(this,pU).textTracks.addEventListener("change",()=>d2(this,p3,p5).call(this)),d2(this,pZ,pQ).call(this),d1(this,pW,new pM.RemotePlayer),new pM.RemotePlayerController(dJ(this,pW)),d1(this,pH,{[pM.RemotePlayerEventType.IS_CONNECTED_CHANGED]:({value:e})=>{!0===e?(d1(this,pV,"connected"),this.dispatchEvent(new Event("connect"))):(d2(this,pY,pG).call(this),d1(this,pV,"disconnected"),this.dispatchEvent(new Event("disconnect")))},[pM.RemotePlayerEventType.DURATION_CHANGED]:()=>{dJ(this,pU).dispatchEvent(new Event("durationchange"))},[pM.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]:()=>{dJ(this,pU).dispatchEvent(new Event("volumechange"))},[pM.RemotePlayerEventType.IS_MUTED_CHANGED]:()=>{dJ(this,pU).dispatchEvent(new Event("volumechange"))},[pM.RemotePlayerEventType.CURRENT_TIME_CHANGED]:()=>{var e;null!=(e=dJ(this,pj,pK))&&e.isMediaLoaded&&dJ(this,pU).dispatchEvent(new Event("timeupdate"))},[pM.RemotePlayerEventType.VIDEO_INFO_CHANGED]:()=>{dJ(this,pU).dispatchEvent(new Event("resize"))},[pM.RemotePlayerEventType.IS_PAUSED_CHANGED]:()=>{dJ(this,pU).dispatchEvent(new Event(this.paused?"pause":"play"))},[pM.RemotePlayerEventType.PLAYER_STATE_CHANGED]:()=>{var e,t;(null==(e=dJ(this,pj,pK))?void 0:e.playerState)!==chrome.cast.media.PlayerState.PAUSED&&dJ(this,pU).dispatchEvent(new Event({[chrome.cast.media.PlayerState.PLAYING]:"playing",[chrome.cast.media.PlayerState.BUFFERING]:"waiting",[chrome.cast.media.PlayerState.IDLE]:"emptied"}[null==(t=dJ(this,pj,pK))?void 0:t.playerState]))},[pM.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]:async()=>{var e;null!=(e=dJ(this,pj,pK))&&e.isMediaLoaded&&(await Promise.resolve(),d2(this,p1,p2).call(this))}}))},p1=new WeakSet,p2=function(){d2(this,p3,p5).call(this)},p3=new WeakSet,p5=async function(){var e,t,i,a,r;let n;if(!dJ(this,pj,pK))return;let s=(null!=(t=null==(e=dJ(this,pW).mediaInfo)?void 0:e.tracks)?t:[]).filter(({type:e})=>e===chrome.cast.media.TrackType.TEXT),o=[...dJ(this,pU).textTracks].filter(({kind:e})=>"subtitles"===e||"captions"===e),l=s.map(({language:e,name:t,trackId:i})=>{var a;let{mode:r}=null!=(a=o.find(i=>i.language===e&&i.label===t))?a:{};return!!r&&{mode:r,trackId:i}}).filter(Boolean),d=l.filter(({mode:e})=>"showing"!==e).map(({trackId:e})=>e),u=l.find(({mode:e})=>"showing"===e),c=null!=(r=null==(a=null==(i=pR())?void 0:i.getSessionObj().media[0])?void 0:a.activeTrackIds)?r:[],h=c;if(c.length&&(h=h.filter(e=>!d.includes(e))),null!=u&&u.trackId&&(h=[...h,u.trackId]),n=h=[...new Set(h)],!(c.length===n.length&&c.every(e=>n.includes(e))))try{let e=new chrome.cast.media.EditTracksInfoRequest(h);await new Promise((t,i)=>{pL().editTracksInfo(e,t,i)})}catch(e){console.error(e)}};var p8=e=>{var t,i,a,r,n,s,o,l,d;return i=class extends e{constructor(){super(...arguments),d0(this,s),d0(this,l),d0(this,a,{paused:!1}),d0(this,r,px()),d0(this,n,void 0)}get remote(){return dJ(this,n)?dJ(this,n):globalThis.chrome?(function(){let e="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";if(globalThis.chrome.cast||document.querySelector(`script[src="${e}"]`))return;let t=document.createElement("script");t.src=e,document.head.append(t)}(),pk.set(this,{loadOnPrompt:()=>d2(this,l,d).call(this)}),d1(this,n,new p9(this))):super.remote}attributeChangedCallback(e,t,i){if(super.attributeChangedCallback(e,t,i),"cast-receiver"===e&&i){dJ(this,r).receiverApplicationId=i;return}if(dJ(this,s,o))switch(e){case"cast-stream-type":case"cast-src":this.load()}}async load(){var e,t;if(!dJ(this,s,o))return super.load();let i=new chrome.cast.media.MediaInfo(this.castSrc,this.castContentType),r=[...this.querySelectorAll("track")].filter(({kind:e,src:t})=>t&&("subtitles"===e||"captions"===e)),n=[],l=0;r.length&&(i.tracks=r.map(e=>{let t=++l;0===n.length&&"showing"===e.track.mode&&n.push(t);let i=new chrome.cast.media.Track(t,chrome.cast.media.TrackType.TEXT);return i.trackContentId=e.src,i.trackContentType="text/vtt",i.subtype="captions"===e.kind?chrome.cast.media.TextTrackType.CAPTIONS:chrome.cast.media.TextTrackType.SUBTITLES,i.name=e.label,i.language=e.srclang,i})),"live"===this.castStreamType?i.streamType=chrome.cast.media.StreamType.LIVE:i.streamType=chrome.cast.media.StreamType.BUFFERED,i.metadata=new chrome.cast.media.GenericMediaMetadata,i.metadata.title=this.title,i.metadata.images=[{url:this.poster}];let d=new chrome.cast.media.LoadRequest(i);d.currentTime=null!=(e=super.currentTime)?e:0,d.autoplay=!dJ(this,a).paused,d.activeTrackIds=n,await (null==(t=pR())?void 0:t.loadMedia(d)),this.dispatchEvent(new Event("volumechange"))}play(){var e;if(dJ(this,s,o)){dJ(this,s,o).isPaused&&(null==(e=dJ(this,s,o).controller)||e.playOrPause());return}return super.play()}pause(){var e;if(dJ(this,s,o)){dJ(this,s,o).isPaused||null==(e=dJ(this,s,o).controller)||e.playOrPause();return}super.pause()}get castOptions(){return dJ(this,r)}get castReceiver(){var e;return null!=(e=this.getAttribute("cast-receiver"))?e:void 0}set castReceiver(e){this.castReceiver!=e&&this.setAttribute("cast-receiver",`${e}`)}get castSrc(){var e,t,i;return null!=(i=null!=(t=this.getAttribute("cast-src"))?t:null==(e=this.querySelector("source"))?void 0:e.src)?i:this.currentSrc}set castSrc(e){this.castSrc!=e&&this.setAttribute("cast-src",`${e}`)}get castContentType(){var e;return null!=(e=this.getAttribute("cast-content-type"))?e:void 0}set castContentType(e){this.setAttribute("cast-content-type",`${e}`)}get castStreamType(){var e,t;return null!=(t=null!=(e=this.getAttribute("cast-stream-type"))?e:this.streamType)?t:void 0}set castStreamType(e){this.setAttribute("cast-stream-type",`${e}`)}get readyState(){if(dJ(this,s,o))switch(dJ(this,s,o).playerState){case chrome.cast.media.PlayerState.IDLE:return 0;case chrome.cast.media.PlayerState.BUFFERING:return 2;default:return 3}return super.readyState}get paused(){return dJ(this,s,o)?dJ(this,s,o).isPaused:super.paused}get muted(){var e;return dJ(this,s,o)?null==(e=dJ(this,s,o))?void 0:e.isMuted:super.muted}set muted(e){var t;if(dJ(this,s,o)){(e&&!dJ(this,s,o).isMuted||!e&&dJ(this,s,o).isMuted)&&(null==(t=dJ(this,s,o).controller)||t.muteOrUnmute());return}super.muted=e}get volume(){var e,t;return dJ(this,s,o)?null!=(t=null==(e=dJ(this,s,o))?void 0:e.volumeLevel)?t:1:super.volume}set volume(e){var t;if(dJ(this,s,o)){dJ(this,s,o).volumeLevel=+e,null==(t=dJ(this,s,o).controller)||t.setVolumeLevel();return}super.volume=e}get duration(){var e,t,i;return dJ(this,s,o)&&null!=(e=dJ(this,s,o))&&e.isMediaLoaded?null!=(i=null==(t=dJ(this,s,o))?void 0:t.duration)?i:NaN:super.duration}get currentTime(){var e,t,i;return dJ(this,s,o)&&null!=(e=dJ(this,s,o))&&e.isMediaLoaded?null!=(i=null==(t=dJ(this,s,o))?void 0:t.currentTime)?i:0:super.currentTime}set currentTime(e){var t;if(dJ(this,s,o)){dJ(this,s,o).currentTime=e,null==(t=dJ(this,s,o).controller)||t.seek();return}super.currentTime=e}},a=new WeakMap,r=new WeakMap,n=new WeakMap,s=new WeakSet,o=function(){var e,t;return null==(t=null==(e=pk.get(this.remote))?void 0:e.getCastPlayer)?void 0:t.call(e)},l=new WeakSet,d=async function(){dJ(this,a).paused=d3(i.prototype,this,"paused"),d3(i.prototype,this,"pause").call(this),this.muted=d3(i.prototype,this,"muted");try{await this.load()}catch(e){console.error(e)}},dz(i,"observedAttributes",[...null!=(t=e.observedAttributes)?t:[],"cast-src","cast-content-type","cast-stream-type","cast-receiver"]),i},p7=class extends Event{constructor(e,t){super(e),dz(this,"track"),this.track=t.track}},p6=new WeakMap;function ve(e){var t,i;let a;return null!=(t=p6.get(e))?t:(i={},(a=p6.get(e))||p6.set(e,a={}),Object.assign(a,i))}function vt(e,t){let i=e.videoTracks;ve(t).media=e,ve(t).renditionSet||(ve(t).renditionSet=new Set);let a=ve(i).trackSet;a.add(t);let r=a.size-1;r in vl.prototype||Object.defineProperty(vl.prototype,r,{get(){return[...ve(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new p7("addtrack",{track:t}))})}function vi(e){var t;let i=null==(t=ve(e).media)?void 0:t.videoTracks;i&&(ve(i).trackSet.delete(e),queueMicrotask(()=>{i.dispatchEvent(new p7("removetrack",{track:e}))}))}var va,vr,vn,vs,vo,vl=class extends EventTarget{constructor(){super(),d0(this,vs),d0(this,va,void 0),d0(this,vr,void 0),d0(this,vn,void 0),ve(this).trackSet=new Set}[Symbol.iterator](){return dJ(this,vs,vo).values()}get length(){return dJ(this,vs,vo).size}getTrackById(e){var t;return null!=(t=[...dJ(this,vs,vo)].find(t=>t.id===e))?t:null}get selectedIndex(){return[...dJ(this,vs,vo)].findIndex(e=>e.selected)}get onaddtrack(){return dJ(this,va)}set onaddtrack(e){dJ(this,va)&&(this.removeEventListener("addtrack",dJ(this,va)),d1(this,va,void 0)),"function"==typeof e&&(d1(this,va,e),this.addEventListener("addtrack",e))}get onremovetrack(){return dJ(this,vr)}set onremovetrack(e){dJ(this,vr)&&(this.removeEventListener("removetrack",dJ(this,vr)),d1(this,vr,void 0)),"function"==typeof e&&(d1(this,vr,e),this.addEventListener("removetrack",e))}get onchange(){return dJ(this,vn)}set onchange(e){dJ(this,vn)&&(this.removeEventListener("change",dJ(this,vn)),d1(this,vn,void 0)),"function"==typeof e&&(d1(this,vn,e),this.addEventListener("change",e))}};va=new WeakMap,vr=new WeakMap,vn=new WeakMap,vs=new WeakSet,vo=function(){return ve(this).trackSet};var vd=class extends Event{constructor(e,t){super(e),dz(this,"rendition"),this.rendition=t.rendition}};function vu(e){return[...ve(e).media.videoTracks].filter(e=>e.selected).flatMap(e=>[...ve(e).renditionSet])}var vc,vh,vm,vp=class extends EventTarget{constructor(){super(...arguments),d0(this,vc,void 0),d0(this,vh,void 0),d0(this,vm,void 0)}[Symbol.iterator](){return vu(this).values()}get length(){return vu(this).length}getRenditionById(e){var t;return null!=(t=vu(this).find(t=>`${t.id}`==`${e}`))?t:null}get selectedIndex(){return vu(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of vu(this).entries())i.selected=t===e}get onaddrendition(){return dJ(this,vc)}set onaddrendition(e){dJ(this,vc)&&(this.removeEventListener("addrendition",dJ(this,vc)),d1(this,vc,void 0)),"function"==typeof e&&(d1(this,vc,e),this.addEventListener("addrendition",e))}get onremoverendition(){return dJ(this,vh)}set onremoverendition(e){dJ(this,vh)&&(this.removeEventListener("removerendition",dJ(this,vh)),d1(this,vh,void 0)),"function"==typeof e&&(d1(this,vh,e),this.addEventListener("removerendition",e))}get onchange(){return dJ(this,vm)}set onchange(e){dJ(this,vm)&&(this.removeEventListener("change",dJ(this,vm)),d1(this,vm,void 0)),"function"==typeof e&&(d1(this,vm,e),this.addEventListener("change",e))}};vc=new WeakMap,vh=new WeakMap,vm=new WeakMap;var vv,vb=class{constructor(){dz(this,"src"),dz(this,"id"),dz(this,"width"),dz(this,"height"),dz(this,"bitrate"),dz(this,"frameRate"),dz(this,"codec"),d0(this,vv,!1)}get selected(){return dJ(this,vv)}set selected(e){var t;let i;dJ(this,vv)!==e&&(d1(this,vv,e),t=this,(i=ve(t).media.videoRenditions)&&!ve(i).changeRequested&&(ve(i).changeRequested=!0,queueMicrotask(()=>{delete ve(i).changeRequested,ve(t).track.selected&&i.dispatchEvent(new Event("change"))})))}};vv=new WeakMap;var vf,vE=class{constructor(){dz(this,"id"),dz(this,"kind"),dz(this,"label",""),dz(this,"language",""),dz(this,"sourceBuffer"),d0(this,vf,!1)}addRendition(e,t,i,a,r,n){var s;let o,l,d,u=new vb;return u.src=e,u.width=t,u.height=i,u.frameRate=n,u.bitrate=r,u.codec=a,s=this,o=ve(s).media.videoRenditions,ve(u).media=ve(s).media,ve(u).track=s,(l=ve(s).renditionSet).add(u),(d=l.size-1)in vp.prototype||Object.defineProperty(vp.prototype,d,{get(){return vu(this)[d]}}),queueMicrotask(()=>{s.selected&&o.dispatchEvent(new vd("addrendition",{rendition:u}))}),u}removeRendition(e){let t,i;t=ve(e).media.videoRenditions,i=ve(e).track,ve(i).renditionSet.delete(e),queueMicrotask(()=>{ve(e).track.selected&&t.dispatchEvent(new vd("removerendition",{rendition:e}))})}get selected(){return dJ(this,vf)}set selected(e){dJ(this,vf)!==e&&(d1(this,vf,e),!0===e&&function(e){var t;let i=null!=(t=ve(e).media.videoTracks)?t:[],a=!1;for(let t of i)t!==e&&(t.selected=!1,a=!0);if(a){if(ve(i).changeRequested)return;ve(i).changeRequested=!0,queueMicrotask(()=>{delete ve(i).changeRequested,i.dispatchEvent(new Event("change"))})}}(this))}};function vg(e){return[...ve(e).media.audioTracks].filter(e=>e.enabled).flatMap(e=>[...ve(e).renditionSet])}vf=new WeakMap;var vy,v_,vA,vk=class extends EventTarget{constructor(){super(...arguments),d0(this,vy,void 0),d0(this,v_,void 0),d0(this,vA,void 0)}[Symbol.iterator](){return vg(this).values()}get length(){return vg(this).length}getRenditionById(e){var t;return null!=(t=vg(this).find(t=>`${t.id}`==`${e}`))?t:null}get selectedIndex(){return vg(this).findIndex(e=>e.selected)}set selectedIndex(e){for(let[t,i]of vg(this).entries())i.selected=t===e}get onaddrendition(){return dJ(this,vy)}set onaddrendition(e){dJ(this,vy)&&(this.removeEventListener("addrendition",dJ(this,vy)),d1(this,vy,void 0)),"function"==typeof e&&(d1(this,vy,e),this.addEventListener("addrendition",e))}get onremoverendition(){return dJ(this,v_)}set onremoverendition(e){dJ(this,v_)&&(this.removeEventListener("removerendition",dJ(this,v_)),d1(this,v_,void 0)),"function"==typeof e&&(d1(this,v_,e),this.addEventListener("removerendition",e))}get onchange(){return dJ(this,vA)}set onchange(e){dJ(this,vA)&&(this.removeEventListener("change",dJ(this,vA)),d1(this,vA,void 0)),"function"==typeof e&&(d1(this,vA,e),this.addEventListener("change",e))}};vy=new WeakMap,v_=new WeakMap,vA=new WeakMap;var vT,vw=class{constructor(){dz(this,"src"),dz(this,"id"),dz(this,"bitrate"),dz(this,"codec"),d0(this,vT,!1)}get selected(){return dJ(this,vT)}set selected(e){var t;let i;dJ(this,vT)!==e&&(d1(this,vT,e),t=this,(i=ve(t).media.audioRenditions)&&!ve(i).changeRequested&&(ve(i).changeRequested=!0,queueMicrotask(()=>{delete ve(i).changeRequested,ve(t).track.enabled&&i.dispatchEvent(new Event("change"))})))}};function vS(e,t){let i=e.audioTracks;ve(t).media=e,ve(t).renditionSet||(ve(t).renditionSet=new Set);let a=ve(i).trackSet;a.add(t);let r=a.size-1;r in vM.prototype||Object.defineProperty(vM.prototype,r,{get(){return[...ve(this).trackSet][r]}}),queueMicrotask(()=>{i.dispatchEvent(new p7("addtrack",{track:t}))})}function vI(e){var t;let i=null==(t=ve(e).media)?void 0:t.audioTracks;i&&(ve(i).trackSet.delete(e),queueMicrotask(()=>{i.dispatchEvent(new p7("removetrack",{track:e}))}))}vT=new WeakMap;var vC,vR,vL,vD,vx,vM=class extends EventTarget{constructor(){super(),d0(this,vD),d0(this,vC,void 0),d0(this,vR,void 0),d0(this,vL,void 0),ve(this).trackSet=new Set}[Symbol.iterator](){return dJ(this,vD,vx).values()}get length(){return dJ(this,vD,vx).size}getTrackById(e){var t;return null!=(t=[...dJ(this,vD,vx)].find(t=>t.id===e))?t:null}get onaddtrack(){return dJ(this,vC)}set onaddtrack(e){dJ(this,vC)&&(this.removeEventListener("addtrack",dJ(this,vC)),d1(this,vC,void 0)),"function"==typeof e&&(d1(this,vC,e),this.addEventListener("addtrack",e))}get onremovetrack(){return dJ(this,vR)}set onremovetrack(e){dJ(this,vR)&&(this.removeEventListener("removetrack",dJ(this,vR)),d1(this,vR,void 0)),"function"==typeof e&&(d1(this,vR,e),this.addEventListener("removetrack",e))}get onchange(){return dJ(this,vL)}set onchange(e){dJ(this,vL)&&(this.removeEventListener("change",dJ(this,vL)),d1(this,vL,void 0)),"function"==typeof e&&(d1(this,vL,e),this.addEventListener("change",e))}};vC=new WeakMap,vR=new WeakMap,vL=new WeakMap,vD=new WeakSet,vx=function(){return ve(this).trackSet};var vO,vN=class{constructor(){dz(this,"id"),dz(this,"kind"),dz(this,"label",""),dz(this,"language",""),dz(this,"sourceBuffer"),d0(this,vO,!1)}addRendition(e,t,i){var a;let r,n,s,o=new vw;return o.src=e,o.codec=t,o.bitrate=i,a=this,r=ve(a).media.audioRenditions,ve(o).media=ve(a).media,ve(o).track=a,(n=ve(a).renditionSet).add(o),(s=n.size-1)in vk.prototype||Object.defineProperty(vk.prototype,s,{get(){return vg(this)[s]}}),queueMicrotask(()=>{a.enabled&&r.dispatchEvent(new vd("addrendition",{rendition:o}))}),o}removeRendition(e){let t,i;t=ve(e).media.audioRenditions,i=ve(e).track,ve(i).renditionSet.delete(e),queueMicrotask(()=>{ve(e).track.enabled&&t.dispatchEvent(new vd("removerendition",{rendition:e}))})}get enabled(){return dJ(this,vO)}set enabled(e){let t;dJ(this,vO)!==e&&(d1(this,vO,e),(t=ve(this).media.audioTracks)&&!ve(t).changeRequested&&(ve(t).changeRequested=!0,queueMicrotask(()=>{delete ve(t).changeRequested,t.dispatchEvent(new Event("change"))})))}};vO=new WeakMap;var vP=vW(globalThis.HTMLMediaElement,"video"),vU=vW(globalThis.HTMLMediaElement,"audio");function vB(e){if(!(null!=e&&e.prototype))return e;let t=vW(e,"video");(!t||`${t}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"videoTracks",{get(){return function(e){var t;let i=ve(e).videoTracks;if(!i&&(i=new vl,ve(e).videoTracks=i,vP)){let a=vP.call(null!=(t=e.nativeEl)?t:e);for(let t of a)vt(e,t);a.addEventListener("change",()=>{i.dispatchEvent(new Event("change"))}),a.addEventListener("addtrack",t=>{if([...i].some(e=>e instanceof vE)){for(let e of a)vi(e);return}vt(e,t.track)}),a.addEventListener("removetrack",e=>{vi(e.track)})}return i}(this)}});let i=vW(e,"audio");(!i||`${i}`.includes("[native code]"))&&Object.defineProperty(e.prototype,"audioTracks",{get(){return function(e){var t;let i=ve(e).audioTracks;if(!i&&(i=new vM,ve(e).audioTracks=i,vU)){let a=vU.call(null!=(t=e.nativeEl)?t:e);for(let t of a)vS(e,t);a.addEventListener("change",()=>{i.dispatchEvent(new Event("change"))}),a.addEventListener("addtrack",t=>{if([...i].some(e=>e instanceof vN)){for(let e of a)vI(e);return}vS(e,t.track)}),a.addEventListener("removetrack",e=>{vI(e.track)})}return i}(this)}}),"addVideoTrack"in e.prototype||(e.prototype.addVideoTrack=function(e,t="",i=""){let a=new vE;return a.kind=e,a.label=t,a.language=i,vt(this,a),a}),"removeVideoTrack"in e.prototype||(e.prototype.removeVideoTrack=vi),"addAudioTrack"in e.prototype||(e.prototype.addAudioTrack=function(e,t="",i=""){let a=new vN;return a.kind=e,a.label=t,a.language=i,vS(this,a),a}),"removeAudioTrack"in e.prototype||(e.prototype.removeAudioTrack=vI),"videoRenditions"in e.prototype||Object.defineProperty(e.prototype,"videoRenditions",{get(){return a(this)}});let a=e=>{let t=ve(e).videoRenditions;return t||(ve(t=new vp).media=e,ve(e).videoRenditions=t),t};"audioRenditions"in e.prototype||Object.defineProperty(e.prototype,"audioRenditions",{get(){return r(this)}});let r=e=>{let t=ve(e).audioRenditions;return t||(ve(t=new vk).media=e,ve(e).audioRenditions=t),t};return e}function vW(e,t){var i;if(null!=e&&e.prototype)return null==(i=Object.getOwnPropertyDescriptor(e.prototype,`${t}Tracks`))?void 0:i.get}pf.push("castchange","entercast","leavecast");var vH,vV,vq,vF,v$,vj,vK,vY,vG,vZ,vQ={BEACON_COLLECTION_DOMAIN:"beacon-collection-domain",CUSTOM_DOMAIN:"custom-domain",DEBUG:"debug",DISABLE_TRACKING:"disable-tracking",DISABLE_COOKIES:"disable-cookies",ENV_KEY:"env-key",MAX_RESOLUTION:"max-resolution",MIN_RESOLUTION:"min-resolution",RENDITION_ORDER:"rendition-order",PROGRAM_START_TIME:"program-start-time",PROGRAM_END_TIME:"program-end-time",METADATA_URL:"metadata-url",PLAYBACK_ID:"playback-id",PLAYER_SOFTWARE_NAME:"player-software-name",PLAYER_SOFTWARE_VERSION:"player-software-version",PREFER_CMCD:"prefer-cmcd",PREFER_PLAYBACK:"prefer-playback",START_TIME:"start-time",STREAM_TYPE:"stream-type",TARGET_LIVE_WINDOW:"target-live-window",LIVE_EDGE_OFFSET:"live-edge-offset",TYPE:"type"},vz=Object.values(vQ),vX=class extends pA{constructor(){super(),d0(this,vG),d0(this,vH,void 0),d0(this,vV,void 0),d0(this,vq,void 0),d0(this,vF,{}),d0(this,v$,void 0),d0(this,vj,void 0),d0(this,vK,void 0),d0(this,vY,void 0),d1(this,vq,iT())}static get observedAttributes(){var e;return[...vz,...null!=(e=pA.observedAttributes)?e:[]]}get preferCmcd(){var e;return null!=(e=this.getAttribute(vQ.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?tF.includes(e)?this.setAttribute(vQ.PREFER_CMCD,e):console.warn(`Invalid value for preferCmcd. Must be one of ${tF.join()}`):this.removeAttribute(vQ.PREFER_CMCD))}get playerInitTime(){return dJ(this,vq)}get playerSoftwareName(){var e;return null!=(e=dJ(this,vK))?e:"mux-video"}set playerSoftwareName(e){d1(this,vK,e)}get playerSoftwareVersion(){var e;return null!=(e=dJ(this,vj))?e:pb}set playerSoftwareVersion(e){d1(this,vj,e)}get _hls(){var e;return null==(e=dJ(this,vH))?void 0:e.engine}get mux(){var e;return null==(e=this.nativeEl)?void 0:e.mux}get error(){var e;return null!=(e=iL(this.nativeEl))?e:null}get errorTranslator(){return dJ(this,vY)}set errorTranslator(e){d1(this,vY,e)}get src(){return this.getAttribute("src")}set src(e){e!==this.src&&(null==e?this.removeAttribute("src"):this.setAttribute("src",e))}get type(){var e;return null!=(e=this.getAttribute(vQ.TYPE))?e:void 0}set type(e){e!==this.type&&(e?this.setAttribute(vQ.TYPE,e):this.removeAttribute(vQ.TYPE))}get autoplay(){let e=this.getAttribute("autoplay");return null!==e&&(""===e||e)}set autoplay(e){e!==this.autoplay&&(e?this.setAttribute("autoplay","string"==typeof e?e:""):this.removeAttribute("autoplay"))}get preload(){let e=this.getAttribute("preload");return""===e?"auto":["none","metadata","auto"].includes(e)?e:super.preload}set preload(e){e!=this.getAttribute("preload")&&(["","none","metadata","auto"].includes(e)?this.setAttribute("preload",e):this.removeAttribute("preload"))}get debug(){return null!=this.getAttribute(vQ.DEBUG)}set debug(e){e!==this.debug&&(e?this.setAttribute(vQ.DEBUG,""):this.removeAttribute(vQ.DEBUG))}get disableTracking(){return this.hasAttribute(vQ.DISABLE_TRACKING)}set disableTracking(e){e!==this.disableTracking&&this.toggleAttribute(vQ.DISABLE_TRACKING,!!e)}get disableCookies(){return this.hasAttribute(vQ.DISABLE_COOKIES)}set disableCookies(e){e!==this.disableCookies&&(e?this.setAttribute(vQ.DISABLE_COOKIES,""):this.removeAttribute(vQ.DISABLE_COOKIES))}get startTime(){let e=this.getAttribute(vQ.START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set startTime(e){e!==this.startTime&&(null==e?this.removeAttribute(vQ.START_TIME):this.setAttribute(vQ.START_TIME,`${e}`))}get playbackId(){var e;return null!=(e=this.getAttribute(vQ.PLAYBACK_ID))?e:void 0}set playbackId(e){e!==this.playbackId&&(e?this.setAttribute(vQ.PLAYBACK_ID,e):this.removeAttribute(vQ.PLAYBACK_ID))}get maxResolution(){var e;return null!=(e=this.getAttribute(vQ.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(vQ.MAX_RESOLUTION,e):this.removeAttribute(vQ.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(vQ.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(vQ.MIN_RESOLUTION,e):this.removeAttribute(vQ.MIN_RESOLUTION))}get renditionOrder(){var e;return null!=(e=this.getAttribute(vQ.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(vQ.RENDITION_ORDER,e):this.removeAttribute(vQ.RENDITION_ORDER))}get programStartTime(){let e=this.getAttribute(vQ.PROGRAM_START_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programStartTime(e){null==e?this.removeAttribute(vQ.PROGRAM_START_TIME):this.setAttribute(vQ.PROGRAM_START_TIME,`${e}`)}get programEndTime(){let e=this.getAttribute(vQ.PROGRAM_END_TIME);if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}set programEndTime(e){null==e?this.removeAttribute(vQ.PROGRAM_END_TIME):this.setAttribute(vQ.PROGRAM_END_TIME,`${e}`)}get customDomain(){var e;return null!=(e=this.getAttribute(vQ.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(vQ.CUSTOM_DOMAIN,e):this.removeAttribute(vQ.CUSTOM_DOMAIN))}get ended(){return iH(this.nativeEl,this._hls)}get envKey(){var e;return null!=(e=this.getAttribute(vQ.ENV_KEY))?e:void 0}set envKey(e){e!==this.envKey&&(e?this.setAttribute(vQ.ENV_KEY,e):this.removeAttribute(vQ.ENV_KEY))}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(vQ.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(vQ.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(vQ.BEACON_COLLECTION_DOMAIN))}get streamType(){var e;return null!=(e=this.getAttribute(vQ.STREAM_TYPE))?e:iD(this.nativeEl)}set streamType(e){e!==this.streamType&&(e?this.setAttribute(vQ.STREAM_TYPE,e):this.removeAttribute(vQ.STREAM_TYPE))}get targetLiveWindow(){return this.hasAttribute(vQ.TARGET_LIVE_WINDOW)?+this.getAttribute(vQ.TARGET_LIVE_WINDOW):ix(this.nativeEl)}set targetLiveWindow(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(vQ.TARGET_LIVE_WINDOW):this.setAttribute(vQ.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e,t;if(this.hasAttribute(vQ.LIVE_EDGE_OFFSET)){let{liveEdgeOffset:i}=this,a=null!=(e=this.nativeEl.seekable.end(0))?e:0;return Math.max(null!=(t=this.nativeEl.seekable.start(0))?t:0,a-i)}return iO(this.nativeEl)}get liveEdgeOffset(){if(this.hasAttribute(vQ.LIVE_EDGE_OFFSET))return+this.getAttribute(vQ.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){e!=this.targetLiveWindow&&(null==e?this.removeAttribute(vQ.LIVE_EDGE_OFFSET):this.setAttribute(vQ.LIVE_EDGE_OFFSET,`${+e}`))}get seekable(){return iM(this.nativeEl)}async addCuePoints(e){return t6(this.nativeEl,e)}get activeCuePoint(){return it(this.nativeEl)}get cuePoints(){return function(e,t={label:t8}){let i=t4(e,t.label,"metadata");return null!=i&&i.cues?Array.from(i.cues,e=>ie(e)):[]}(this.nativeEl)}async addChapters(e){return io(this.nativeEl,e)}get activeChapter(){return il(this.nativeEl)}get chapters(){return function(e,t={label:ia}){var i;let a=t4(e,t.label,"chapters");return null!=(i=null==a?void 0:a.cues)&&i.length?Array.from(a.cues,e=>is(e)):[]}(this.nativeEl)}getStartDate(){return function(e,t){if(t){let i=t.playingDate;if(null!=i)return new Date(i.getTime()-1e3*e.currentTime)}return"function"==typeof e.getStartDate?e.getStartDate():new Date(NaN)}(this.nativeEl,this._hls)}get currentPdt(){var e,t;return e=this.nativeEl,(t=this._hls)&&t.playingDate?t.playingDate:new Date("function"==typeof e.getStartDate?e.getStartDate().getTime()+1e3*e.currentTime:NaN)}get preferPlayback(){let e=this.getAttribute(vQ.PREFER_PLAYBACK);if(e===tV.MSE||e===tV.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===tV.MSE||e===tV.NATIVE?this.setAttribute(vQ.PREFER_PLAYBACK,e):this.removeAttribute(vQ.PREFER_PLAYBACK))}get metadata(){return{...this.getAttributeNames().filter(e=>e.startsWith("metadata-")&&![vQ.METADATA_URL].includes(e)).reduce((e,t)=>{let i=this.getAttribute(t);return null!=i&&(e[t.replace(/^metadata-/,"").replace(/-/g,"_")]=i),e},{}),...dJ(this,vF)}}set metadata(e){d1(this,vF,null!=e?e:{}),this.mux&&this.mux.emit("hb",dJ(this,vF))}get _hlsConfig(){return dJ(this,v$)}set _hlsConfig(e){d1(this,v$,e)}load(){d1(this,vH,iV(this,this.nativeEl,dJ(this,vH)))}unload(){iq(this.nativeEl,dJ(this,vH)),d1(this,vH,void 0)}attributeChangedCallback(e,t,i){var a,r;switch(pA.observedAttributes.includes(e)&&!["src","autoplay","preload"].includes(e)&&super.attributeChangedCallback(e,t,i),e){case vQ.PLAYER_SOFTWARE_NAME:this.playerSoftwareName=null!=i?i:void 0;break;case vQ.PLAYER_SOFTWARE_VERSION:this.playerSoftwareVersion=null!=i?i:void 0;break;case"src":{let e=!!t,a=!!i;!e&&a?d2(this,vG,vZ).call(this):e&&!a?this.unload():e&&a&&(this.unload(),d2(this,vG,vZ).call(this));break}case"autoplay":if(i===t)break;null==(a=dJ(this,vH))||a.setAutoplay(this.autoplay);break;case"preload":if(i===t)break;null==(r=dJ(this,vH))||r.setPreload(i);break;case vQ.PLAYBACK_ID:this.src=iS(this);break;case vQ.DEBUG:{let e=this.debug;this.mux&&console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."),this._hls&&(this._hls.config.debug=e);break}case vQ.METADATA_URL:i&&fetch(i).then(e=>e.json()).then(e=>this.metadata=e).catch(()=>console.error(`Unable to load or parse metadata JSON from metadata-url ${i}!`));break;case vQ.STREAM_TYPE:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("streamtypechange",{composed:!0,bubbles:!0}));break;case vQ.TARGET_LIVE_WINDOW:(null==i||i!==t)&&this.dispatchEvent(new CustomEvent("targetlivewindowchange",{composed:!0,bubbles:!0,detail:this.targetLiveWindow}))}}connectedCallback(){var e;null==(e=super.connectedCallback)||e.call(this),this.nativeEl&&this.src&&!dJ(this,vH)&&d2(this,vG,vZ).call(this)}disconnectedCallback(){this.unload()}};vH=new WeakMap,vV=new WeakMap,vq=new WeakMap,vF=new WeakMap,v$=new WeakMap,vj=new WeakMap,vK=new WeakMap,vY=new WeakMap,vG=new WeakSet,vZ=async function(){dJ(this,vV)||(await d1(this,vV,Promise.resolve()),d1(this,vV,null),this.load())};var vJ=class extends p8(vB(vX)){};pp.customElements.get("mux-video")||(pp.customElements.define("mux-video",vJ),pp.MuxVideoElement=vJ);var v0=Object.defineProperty,v1=(e,t,i)=>t in e?v0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,v2=(e,t,i)=>(v1(e,"symbol"!=typeof t?t+"":t,i),i),v3=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},v5=(e,t,i)=>(v3(e,t,"read from private field"),i?i.call(e):t.get(e)),v4=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},v9=(e,t,i,a)=>(v3(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i);let v8={processCallback(e,t,i){if(i){for(let[e,a]of t)if(e in i){let t=i[e];"boolean"==typeof t&&a instanceof bn&&"boolean"==typeof a.element[a.attributeName]?a.booleanValue=t:"function"==typeof t&&a instanceof bn?a.element[a.attributeName]=t:a.value=t}}}};class v7 extends aA.DocumentFragment{constructor(e,t,i=v8){var a;super(),v4(this,bB,void 0),v4(this,bW,void 0),this.append(e.content.cloneNode(!0)),v9(this,bB,v6(this)),v9(this,bW,i),null==(a=i.createCallback)||a.call(i,this,v5(this,bB),t),i.processCallback(this,v5(this,bB),t)}update(e){v5(this,bW).processCallback(this,v5(this,bB),e)}}bB=new WeakMap,bW=new WeakMap;let v6=(e,t=[])=>{let i,a;for(let r of e.attributes||[])if(r.value.includes("{{")){let n=new br;for([i,a]of bt(r.value))if(i){let i=new bn(e,r.name,r.namespaceURI);n.append(i),t.push([a,i])}else n.append(a);r.value=n.toString()}for(let r of e.childNodes)if(1!==r.nodeType||r instanceof HTMLTemplateElement){if(1===r.nodeType||r.data.includes("{{")){let n=[];if(r.data)for([i,a]of bt(r.data))if(i){let i=new bs(e);n.push(i),t.push([a,i])}else n.push(new Text(a));else if(r instanceof HTMLTemplateElement){let i=new bo(e,r);n.push(i),t.push([i.expression,i])}r.replaceWith(...n.flatMap(e=>e.replacementNodes||[e]))}}else v6(r,t);return t},be={},bt=e=>{let t="",i=0,a=be[e],r=0,n;if(a)return a;for(a=[];n=e[r];r++)"{"===n&&"{"===e[r+1]&&"\\"!==e[r-1]&&e[r+2]&&1==++i?(t&&a.push([0,t]),t="",r++):"}"!==n||"}"!==e[r+1]||"\\"===e[r-1]||--i?t+=n||"":(a.push([1,t.trim()]),t="",r++);return t&&a.push([0,(i>0?"{{":"")+t]),be[e]=a};class bi{get value(){return""}set value(e){}toString(){return this.value}}let ba=new WeakMap;class br{constructor(){v4(this,bH,[])}[Symbol.iterator](){return v5(this,bH).values()}get length(){return v5(this,bH).length}item(e){return v5(this,bH)[e]}append(...e){for(let t of e)t instanceof bn&&ba.set(t,this),v5(this,bH).push(t)}toString(){return v5(this,bH).join("")}}bH=new WeakMap;class bn extends bi{constructor(e,t,i){super(),v4(this,bj),v4(this,bV,""),v4(this,bq,void 0),v4(this,bF,void 0),v4(this,b$,void 0),v9(this,bq,e),v9(this,bF,t),v9(this,b$,i)}get attributeName(){return v5(this,bF)}get attributeNamespace(){return v5(this,b$)}get element(){return v5(this,bq)}get value(){return v5(this,bV)}set value(e){v5(this,bV)!==e&&(v9(this,bV,e),v5(this,bj,bK)&&1!==v5(this,bj,bK).length?v5(this,bq).setAttributeNS(v5(this,b$),v5(this,bF),v5(this,bj,bK)):null==e?v5(this,bq).removeAttributeNS(v5(this,b$),v5(this,bF)):v5(this,bq).setAttributeNS(v5(this,b$),v5(this,bF),e))}get booleanValue(){return v5(this,bq).hasAttributeNS(v5(this,b$),v5(this,bF))}set booleanValue(e){if(v5(this,bj,bK)&&1!==v5(this,bj,bK).length)throw new DOMException("Value is not fully templatized");this.value=e?"":null}}bV=new WeakMap,bq=new WeakMap,bF=new WeakMap,b$=new WeakMap,bj=new WeakSet,bK=function(){return ba.get(this)};class bs extends bi{constructor(e,t){super(),v4(this,bY,void 0),v4(this,bG,void 0),v9(this,bY,e),v9(this,bG,t?[...t]:[new Text])}get replacementNodes(){return v5(this,bG)}get parentNode(){return v5(this,bY)}get nextSibling(){return v5(this,bG)[v5(this,bG).length-1].nextSibling}get previousSibling(){return v5(this,bG)[0].previousSibling}get value(){return v5(this,bG).map(e=>e.textContent).join("")}set value(e){this.replace(e)}replace(...e){let t=e.flat().flatMap(e=>null==e?[new Text]:e.forEach?[...e]:11===e.nodeType?[...e.childNodes]:e.nodeType?[e]:[new Text(e)]);t.length||t.push(new Text),v9(this,bG,function(e,t,i,a=null){let r=0,n,s,o,l=i.length,d=t.length;for(;r<l&&r<d&&t[r]==i[r];)r++;for(;r<l&&r<d&&i[l-1]==t[d-1];)a=i[--d,--l];if(r==d)for(;r<l;)e.insertBefore(i[r++],a);if(r==l)for(;r<d;)e.removeChild(t[r++]);else{for(n=t[r];r<l;)o=i[r++],s=n?n.nextSibling:a,n==o?n=s:r<l&&i[r]==s?(e.replaceChild(o,n),n=s):e.insertBefore(o,n);for(;n!=a;)s=n.nextSibling,e.removeChild(n),n=s}return i}(v5(this,bG)[0].parentNode,v5(this,bG),t,this.nextSibling))}}bY=new WeakMap,bG=new WeakMap;class bo extends bs{constructor(e,t){let i=t.getAttribute("directive")||t.getAttribute("type"),a=t.getAttribute("expression")||t.getAttribute(i)||"";a.startsWith("{{")&&(a=a.trim().slice(2,-2).trim()),super(e),v2(this,"directive"),this.expression=a,this.template=t,this.directive=i}}let bl={string:e=>String(e)};class bd{constructor(e){this.template=e,this.state=void 0}}let bu=new WeakMap,bc=new WeakMap,bh={partial:(e,t)=>{t[e.expression]=new bd(e.template)},if:(e,t)=>{var i;if(bb(e.expression,t)){if(bu.get(e)!==e.template){bu.set(e,e.template);let i=new v7(e.template,t,bp);e.replace(i),bc.set(e,i)}else null==(i=bc.get(e))||i.update(t)}else e.replace(""),bu.delete(e),bc.delete(e)}},bm=Object.keys(bh),bp={processCallback(e,t,i){var a,r;if(i)for(let[e,n]of t){if(n instanceof bo){if(!n.directive){let e=bm.find(e=>n.template.hasAttribute(e));e&&(n.directive=e,n.expression=n.template.getAttribute(e))}null==(a=bh[n.directive])||a.call(bh,n,i);continue}let t=bb(e,i);if(t instanceof bd){bu.get(n)!==t.template?(bu.set(n,t.template),t=new v7(t.template,t.state,bp),n.value=t,bc.set(n,t)):null==(r=bc.get(n))||r.update(t.state);continue}t?(n instanceof bn&&n.attributeName.startsWith("aria-")&&(t=String(t)),n instanceof bn?"boolean"==typeof t?n.booleanValue=t:"function"==typeof t?n.element[n.attributeName]=t:n.value=t:(n.value=t,bu.delete(n),bc.delete(n))):n instanceof bn?n.value=void 0:(n.value=void 0,bu.delete(n),bc.delete(n))}}},bv={"!":e=>!e,"!!":e=>!!e,"==":(e,t)=>e==t,"!=":(e,t)=>e!=t,">":(e,t)=>e>t,">=":(e,t)=>e>=t,"<":(e,t)=>e<t,"<=":(e,t)=>e<=t,"??":(e,t)=>null!=e?e:t,"|":(e,t)=>{var i;return null==(i=bl[t])?void 0:i.call(bl,e)}};function bb(e,t={}){var i,a,r,n,s,o,l;let d=(function(e,t){let i,a,r,n=[];for(;e;){for(let n in r=null,i=e.length,t)(a=t[n].exec(e))&&a.index<i&&(r={token:a[0],type:n,matches:a.slice(1)},i=a.index);i&&n.push({token:e.substr(0,i),type:void 0}),r&&n.push(r),e=e.substr(i+(r?r.token.length:0))}return n})(e,{boolean:/true|false/,number:/-?\d+\.?\d*/,string:/(["'])((?:\\.|[^\\])*?)\1/,operator:/[!=><][=!]?|\?\?|\|/,ws:/\s+/,param:/[$a-z_][$\w]*/i}).filter(({type:e})=>"ws"!==e);if(0===d.length||d.some(({type:e})=>!e))return bf(e);if((null==(i=d[0])?void 0:i.token)===">"){let i=t[null==(a=d[1])?void 0:a.token];if(!i)return bf(e);let o={...t};i.state=o;let l=d.slice(2);for(let e=0;e<l.length;e+=3){let i=null==(r=l[e])?void 0:r.token,a=null==(n=l[e+1])?void 0:n.token,d=null==(s=l[e+2])?void 0:s.token;i&&"="===a&&(o[i]=bg(d,t))}return i}if(1===d.length)return bE(d[0])?bg(d[0].token,t):bf(e);if(2===d.length){let i=bv[null==(o=d[0])?void 0:o.token];return i&&bE(d[1])?i(bg(d[1].token,t)):bf(e)}if(3===d.length){let i=null==(l=d[1])?void 0:l.token,a=bv[i];return a&&bE(d[0])&&bE(d[2])?a(bg(d[0].token,t),"|"===i?d[2].token:bg(d[2].token,t)):bf(e)}}function bf(e){return console.warn(`Warning: invalid expression \`${e}\``),!1}function bE({type:e}){return["number","boolean","string","param"].includes(e)}function bg(e,t){let i=e[0],a=e.slice(-1);return"true"===e||"false"===e?"true"===e:i===a&&["'",'"'].includes(i)?e.slice(1,-1):ad(e)?parseFloat(e):t[e]}var by=Object.defineProperty,b_=(e,t,i)=>t in e?by(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,bA=(e,t,i)=>(b_(e,"symbol"!=typeof t?t+"":t,i),i),bk=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},bT=(e,t,i)=>(bk(e,t,"read from private field"),i?i.call(e):t.get(e)),bw=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},bS=(e,t,i,a)=>(bk(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),bI=(e,t,i)=>(bk(e,t,"access private method"),i);let bC={mediatargetlivewindow:"targetlivewindow",mediastreamtype:"streamtype"},bR=ak.createElement("template");bR.innerHTML=`
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-controller:not([mediasubtitleslist]) media-captions-selectmenu,
    media-captions-button:not([mediasubtitleslist]),
    media-rendition-selectmenu[mediarenditionunavailable],
    media-audio-track-selectmenu[mediaaudiotrackunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;class bL extends aA.HTMLElement{constructor(){super(),bw(this,bX),bw(this,b0),bA(this,"renderRoot"),bA(this,"renderer"),bw(this,bZ,void 0),bw(this,bQ,void 0),bw(this,bz,void 0),this.shadowRoot?this.renderRoot=this.shadowRoot:(this.renderRoot=this.attachShadow({mode:"open"}),this.createRenderer());let e=new MutationObserver(e=>{var t;(!this.mediaController||(null==(t=this.mediaController)?void 0:t.breakpointsComputed))&&e.some(e=>{let t=e.target;return t===this||"media-controller"===t.localName&&!!(bC[e.attributeName]||e.attributeName.startsWith("breakpoint"))})&&this.render()});e.observe(this,{attributes:!0}),e.observe(this.renderRoot,{attributes:!0,subtree:!0}),this.addEventListener(i3.BREAKPOINTS_COMPUTED,this.render),bI(this,bX,bJ).call(this,"template")}get mediaController(){return this.renderRoot.querySelector("media-controller")}get template(){var e;return null!=(e=bT(this,bZ))?e:this.constructor.template}set template(e){bS(this,bz,null),bS(this,bZ,e),this.createRenderer()}get props(){var e,t,i;let a=[...Array.from(null!=(t=null==(e=this.mediaController)?void 0:e.attributes)?t:[]).filter(({name:e})=>bC[e]||e.startsWith("breakpoint")),...Array.from(this.attributes)],r={};for(let e of a){let t=null!=(i=bC[e.name])?i:e.name.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase()),{value:a}=e;null!=a?(ad(a)&&(a=parseFloat(a)),r[t]=""===a||a):r[t]=!1}return r}attributeChangedCallback(e,t,i){"template"===e&&t!=i&&bI(this,b0,b1).call(this)}connectedCallback(){bI(this,b0,b1).call(this)}createRenderer(){this.template&&this.template!==bT(this,bQ)&&(bS(this,bQ,this.template),this.renderer=new v7(this.template,this.props,this.constructor.processor),this.renderRoot.textContent="",this.renderRoot.append(bR.content.cloneNode(!0),this.renderer))}render(){var e;null==(e=this.renderer)||e.update(this.props)}}async function bD(e){let t=await fetch(e);if(200!==t.status)throw Error(`Failed to load resource: the server responded with a status of ${t.status}`);return t.text()}bZ=new WeakMap,bQ=new WeakMap,bz=new WeakMap,bX=new WeakSet,bJ=function(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}},b0=new WeakSet,b1=function(){var e;let t=this.getAttribute("template");if(!t||t===bT(this,bz))return;let i=this.getRootNode(),a=null==(e=null==i?void 0:i.getElementById)?void 0:e.call(i,t);if(a){bS(this,bz,t),bS(this,bZ,a),this.createRenderer();return}(function(e){if(!/^(\/|\.\/|https?:\/\/)/.test(e))return!1;let t=/^https?:\/\//.test(e)?void 0:location.origin;try{new URL(e,t)}catch(e){return!1}return!0})(t)&&(bS(this,bz,t),bD(t).then(e=>{let t=ak.createElement("template");t.innerHTML=e,bS(this,bZ,t),this.createRenderer()}).catch(console.error))},bA(bL,"template"),bA(bL,"observedAttributes",["template"]),bA(bL,"processor",bp),aA.customElements.get("media-theme")||aA.customElements.define("media-theme",bL);var bx=(e,t,i)=>{if(!t.has(e))throw TypeError("Cannot "+i)},bM=(e,t,i)=>(bx(e,t,"read from private field"),i?i.call(e):t.get(e)),bO=(e,t,i)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,i)},bN=(e,t,i,a)=>(bx(e,t,"write to private field"),a?a.call(e,i):t.set(e,i),i),bP=(e,t,i)=>(bx(e,t,"access private method"),i),bU=class{addEventListener(){}removeEventListener(){}dispatchEvent(e){return!0}};if("undefined"==typeof DocumentFragment){class e extends bU{}globalThis.DocumentFragment=e}var bB,bW,bH,bV,bq,bF,b$,bj,bK,bY,bG,bZ,bQ,bz,bX,bJ,b0,b1,b2,b3=class extends bU{},b5=class{constructor(e,t={}){bO(this,b2,void 0),bN(this,b2,null==t?void 0:t.detail)}get detail(){return bM(this,b2)}initCustomEvent(){}};b2=new WeakMap;var b4={document:{createElement:function(e,t){return new b3}},DocumentFragment,customElements:{get(e){},define(e,t,i){},upgrade(e){},whenDefined:e=>Promise.resolve(b3)},CustomEvent:b5,EventTarget:bU,HTMLElement:b3,HTMLVideoElement:class extends bU{}},b9="undefined"==typeof window||void 0===globalThis.customElements,b8=b9?b4:globalThis,b7=b9?b4.document:globalThis.document,b6={code:"en"};function fe(e,t=!0){var i;return new ft(t&&null!=(i=null==b6?void 0:b6[e])?i:e,t?b6.code:"en")}var ft=class{constructor(e,t=(e=>null!=(e=b6.code)?e:"en")()){this.message=e,this.locale=t}format(e){return this.message.replace(/\{(\w+)\}/g,(t,i)=>{var a;return null!=(a=e[i])?a:""})}toString(){return this.message}};function fi(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function fa(e){return e.replace(/[-_]([a-z])/g,(e,t)=>t.toUpperCase())}function fr(e){if(null==e)return;let t=+e;return Number.isNaN(t)?void 0:t}function fn(e){let t=(function(e){let t={};for(let i in e)null!=e[i]&&(t[i]=e[i]);return new URLSearchParams(t)})(e).toString();return t?"?"+t:""}function fs(e){let t=(null!=e?e:"").split(".")[1];return t?JSON.parse(decodeURIComponent(atob(t.replace(/-/g,"+").replace(/_/g,"/")).split("").map(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)}).join(""))):{}}var fo,fl,fd,fu=(e,t)=>!!e&&!!t&&(!!e.contains(t)||fu(e,t.getRootNode().host)),fc="mux.com",fh=(()=>{try{return"2.7.0"}catch{}return"UNKNOWN"})(),fm=(e,{token:t,customDomain:i=fc,thumbnailTime:a,programTime:r}={})=>{let n=null==t?a:void 0,{aud:s}=fs(t);if(!(t&&"t"!==s))return`https://image.${i}/${e}/thumbnail.webp${fn({token:t,time:n,program_time:r})}`},fp=(e,{token:t,customDomain:i=fc,programStartTime:a,programEndTime:r}={})=>{let{aud:n}=fs(t);if(!(t&&"s"!==n))return`https://image.${i}/${e}/storyboard.vtt${fn({token:t,format:"webp",program_start_time:a,program_end_time:r})}`},fv=e=>{if(e){if([tH.LIVE,tH.ON_DEMAND].includes(e))return e;if(null!=e&&e.includes("live"))return tH.LIVE}},fb={crossorigin:"crossOrigin",playsinline:"playsInline"},ff=class{constructor(e,t){bO(this,fo,void 0),bO(this,fl,void 0),bO(this,fd,[]),bN(this,fo,e),bN(this,fl,t)}[Symbol.iterator](){return bM(this,fd).values()}get length(){return bM(this,fd).length}get value(){var e;return null!=(e=bM(this,fd).join(" "))?e:""}set value(e){var t;e!==this.value&&(bN(this,fd,[]),this.add(...null!=(t=null==e?void 0:e.split(" "))?t:[]))}toString(){return this.value}item(e){return bM(this,fd)[e]}values(){return bM(this,fd).values()}keys(){return bM(this,fd).keys()}forEach(e){bM(this,fd).forEach(e)}add(...e){var t,i;e.forEach(e=>{this.contains(e)||bM(this,fd).push(e)}),(""!==this.value||null!=(t=bM(this,fo))&&t.hasAttribute(`${bM(this,fl)}`))&&null!=(i=bM(this,fo))&&i.setAttribute(`${bM(this,fl)}`,`${this.value}`)}remove(...e){var t;e.forEach(e=>{bM(this,fd).splice(bM(this,fd).indexOf(e),1)}),null==(t=bM(this,fo))||t.setAttribute(`${bM(this,fl)}`,`${this.value}`)}contains(e){return bM(this,fd).includes(e)}toggle(e,t){return void 0!==t?t?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,t){this.remove(e),this.add(t)}};fo=new WeakMap,fl=new WeakMap,fd=new WeakMap;var fE=`[mux-player ${fh}]`;function fg(...e){console.warn(fE,...e)}function fy(...e){console.error(fE,...e)}function f_(e){var t;let i=null!=(t=e.message)?t:"";e.context&&(i+=` ${e.context}`),e.file&&(i+=` ${fe("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),fg(i)}var fA={AUTOPLAY:"autoplay",CROSSORIGIN:"crossorigin",LOOP:"loop",MUTED:"muted",PLAYSINLINE:"playsinline",PRELOAD:"preload"},fk={VOLUME:"volume",PLAYBACKRATE:"playbackrate",MUTED:"muted"},fT=Object.freeze({length:0,start(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0},end(e){let t=e>>>0;if(t>=this.length)throw new DOMException(`Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`);return 0}}),fw=pf.filter(e=>"error"!==e),fS=Object.values(fA).filter(e=>![fA.PLAYSINLINE].includes(e)),fI=Object.values(fk);function fC(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}var fR=class extends b8.HTMLElement{static get observedAttributes(){return[...fS,...fI]}constructor(){super(),this.querySelectorAll(":scope > track").forEach(e=>{var t;null==(t=this.media)||t.append(e.cloneNode())}),new MutationObserver(e=>{for(let t of e)"childList"===t.type&&(t.removedNodes.forEach(e=>{var t,i;let a=null==(t=this.media)?void 0:t.querySelector(`track[src="${e.src}"]`);a&&(null==(i=this.media)||i.removeChild(a))}),t.addedNodes.forEach(e=>{var t;null==(t=this.media)||t.append(e.cloneNode())}))}).observe(this,{childList:!0,subtree:!0})}attributeChangedCallback(e,t,i){var a,r;switch(e){case fk.MUTED:this.media&&(this.media.muted=null!=i,this.media.defaultMuted=null!=i);return;case fk.VOLUME:{let e=null!=(a=fr(i))?a:1;this.media&&(this.media.volume=e);return}case fk.PLAYBACKRATE:{let e=null!=(r=fr(i))?r:1;this.media&&(this.media.playbackRate=e,this.media.defaultPlaybackRate=e);return}}}play(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.play())?t:Promise.reject()}pause(){var e;null==(e=this.media)||e.pause()}requestCast(e){var t;return null==(t=this.media)?void 0:t.requestCast(e)}get media(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video")}get audioTracks(){return this.media.audioTracks}get videoTracks(){return this.media.videoTracks}get audioRenditions(){return this.media.audioRenditions}get videoRenditions(){return this.media.videoRenditions}get paused(){var e,t;return null==(t=null==(e=this.media)?void 0:e.paused)||t}get duration(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.duration)?t:NaN}get ended(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.ended)&&t}get buffered(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.buffered)?t:fT}get seekable(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.seekable)?t:fT}get readyState(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.readyState)?t:0}get videoWidth(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoWidth)?t:0}get videoHeight(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.videoHeight)?t:0}get currentTime(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.currentTime)?t:0}set currentTime(e){this.media&&(this.media.currentTime=Number(e))}get volume(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.volume)?t:1}set volume(e){this.media&&(this.media.volume=Number(e))}get playbackRate(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.playbackRate)?t:1}set playbackRate(e){this.media&&(this.media.playbackRate=Number(e))}get defaultPlaybackRate(){var e;return null!=(e=fr(this.getAttribute(fk.PLAYBACKRATE)))?e:1}set defaultPlaybackRate(e){null!=e?this.setAttribute(fk.PLAYBACKRATE,`${e}`):this.removeAttribute(fk.PLAYBACKRATE)}get crossOrigin(){return fC(this,fA.CROSSORIGIN)}set crossOrigin(e){this.setAttribute(fA.CROSSORIGIN,`${e}`)}get autoplay(){return null!=fC(this,fA.AUTOPLAY)}set autoplay(e){e?this.setAttribute(fA.AUTOPLAY,"string"==typeof e?e:""):this.removeAttribute(fA.AUTOPLAY)}get loop(){return null!=fC(this,fA.LOOP)}set loop(e){e?this.setAttribute(fA.LOOP,""):this.removeAttribute(fA.LOOP)}get muted(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.muted)&&t}set muted(e){this.media&&(this.media.muted=!!e)}get defaultMuted(){return null!=fC(this,fA.MUTED)}set defaultMuted(e){e?this.setAttribute(fA.MUTED,""):this.removeAttribute(fA.MUTED)}get playsInline(){return null!=fC(this,fA.PLAYSINLINE)}set playsInline(e){fy("playsInline is set to true by default and is not currently supported as a setter.")}get preload(){return this.media?this.media.preload:this.getAttribute("preload")}set preload(e){["","none","metadata","auto"].includes(e)?this.setAttribute(fA.PRELOAD,e):this.removeAttribute(fA.PRELOAD)}},fL=`:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-selectmenu-display: var(--captions-selectmenu, var(--media-captions-button-display));
  --media-rendition-selectmenu-display: var(--rendition-selectmenu);
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button);
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-selectmenu-display: var(--playback-rate-selectmenu);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  width: 100%;
  line-height: 0;
}

/* Hide custom elements that are not defined yet */
:not(:defined) {
  display: none;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-captions-button-display, var(--top-captions-selectmenu))
  );
  --media-rendition-selectmenu-display: var(--rendition-selectmenu, var(--top-rendition-selectmenu));
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu, var(--top-audio-track-selectmenu));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-playback-rate-button-display, var(--top-playback-rate-selectmenu))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-captions-button-display, var(--center-captions-selectmenu))
  );
  --media-rendition-selectmenu-display: var(--rendition-selectmenu, var(--center-rendition-selectmenu));
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu, var(--center-audio-track-selectmenu));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-selectmenu-display: var(
    --playback-rate-selectmenu,
    var(--media-playback-rate-button-display, var(--center-playback-rate-selectmenu))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-selectmenu-display: var(
    --captions-selectmenu,
    var(--media-captions-button-display, var(--bottom-captions-selectmenu))
  );
  --media-rendition-selectmenu-display: var(--rendition-selectmenu, var(--bottom-rendition-selectmenu));
  --media-audio-track-selectmenu-display: var(--audio-track-selectmenu, var(--bottom-audio-track-selectmenu));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-selectmenu-display: var(
    --playback-rate-selectmenu,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-selectmenu))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}
`,fD=`
  :host {
    z-index: 100;
    display: var(--media-dialog-display, flex);
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    color: #fff;
    line-height: 18px;
    font-family: Arial, sans-serif;
    padding: var(--media-dialog-backdrop-padding, 0);
    background: var(--media-dialog-backdrop-background,
      linear-gradient(to bottom, rgba(20, 20, 30, 0.7) 50%, rgba(20, 20, 30, 0.9))
    );
    /* Needs to use !important to prevent overwrite of media-chrome */
    transition: var(--media-dialog-transition-open, visibility .2s, opacity .2s) !important;
    transform: var(--media-dialog-transform-open, none) !important;
    visibility: visible !important;
    opacity: 1 !important;
    pointer-events: auto !important;
  }

  :host(:not([open])) {
    /* Needs to use !important to prevent overwrite of media-chrome */
    transition: var(--media-dialog-transition-close, visibility .1s, opacity .1s) !important;
    transform: var(--media-dialog-transform-close, none) !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }

  :focus-visible {
    box-shadow: 0 0 0 2px rgba(27, 127, 204, 0.9);
  }

  .dialog {
    position: relative;
    box-sizing: border-box;
    background: var(--media-dialog-background, none);
    padding: var(--media-dialog-padding, 10px);
    width: min(320px, 100%);
    word-wrap: break-word;
    max-height: 100%;
    overflow: auto;
    text-align: center;
    line-height: 1.4;
  }
`,fx=b7.createElement("template");fx.innerHTML=`
  <style>
    ${fD}
  </style>

  <div class="dialog">
    <slot></slot>
  </div>
`;var fM=class extends b8.HTMLElement{constructor(){var e;super(),this.attachShadow({mode:"open"}),null==(e=this.shadowRoot)||e.appendChild(this.constructor.template.content.cloneNode(!0))}show(){this.setAttribute("open",""),this.dispatchEvent(new CustomEvent("open",{composed:!0,bubbles:!0})),fO(this)}close(){this.hasAttribute("open")&&(this.removeAttribute("open"),this.dispatchEvent(new CustomEvent("close",{composed:!0,bubbles:!0})),this._previouslyFocusedElement instanceof HTMLElement&&this._previouslyFocusedElement.focus())}attributeChangedCallback(e,t,i){"open"===e&&t!==i&&(null!=i?this.show():this.close())}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","dialog"),this.hasAttribute("open")&&fO(this)}};function fO(e){let t=new CustomEvent("initfocus",{composed:!0,bubbles:!0,cancelable:!0});if(e.dispatchEvent(t),t.defaultPrevented)return;let i=e.querySelector("[autofocus]:not([disabled])");!i&&e.tabIndex>=0&&(i=e),i||(i=function e(t){let i=["button","input","keygen","select","textarea"].map(function(e){return e+":not([disabled])"});i.push('[tabindex]:not([disabled]):not([tabindex=""])');let a=null==t?void 0:t.querySelector(i.join(", "));if(!a&&"attachShadow"in Element.prototype){let i=(null==t?void 0:t.querySelectorAll("*"))||[];for(let t=0;t<i.length&&!(i[t].tagName&&i[t].shadowRoot&&(a=e(i[t].shadowRoot)));t++);}return a}(e.shadowRoot)),e._previouslyFocusedElement=b7.activeElement,b7.activeElement instanceof HTMLElement&&b7.activeElement.blur(),e.addEventListener("transitionend",()=>{i instanceof HTMLElement&&i.focus({preventScroll:!0})},{once:!0})}fM.styles=fD,fM.template=fx,fM.observedAttributes=["open"],b8.customElements.get("media-dialog")||(b8.customElements.define("media-dialog",fM),b8.MediaDialog=fM);var fN=fM,fP=b7.createElement("template");fP.innerHTML=`
  <style>
    ${fN.styles}

    .close {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      width: 28px;
      height: 28px;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  </style>

  <div class="dialog">
    <slot></slot>
  </div>

  <slot name="close">
    <button class="close" tabindex="0">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </slot>
`;var fU=class extends fN{constructor(){var e,t;super(),null==(t=null==(e=this.shadowRoot)?void 0:e.querySelector(".close"))||t.addEventListener("click",()=>{this.close()})}};fU.template=fP,b8.customElements.get("mxp-dialog")||(b8.customElements.define("mxp-dialog",fU),b8.MxpDialog=fU);var fB=new WeakMap,fW=class e{constructor(e,t){this.element=e,this.type=t,this.element.addEventListener(this.type,this);let i=fB.get(this.element);i&&i.set(this.type,this)}set(e){if("function"==typeof e)this.handleEvent=e.bind(this.element);else if("object"==typeof e&&"function"==typeof e.handleEvent)this.handleEvent=e.handleEvent.bind(e);else{this.element.removeEventListener(this.type,this);let e=fB.get(this.element);e&&e.delete(this.type)}}static for(t){fB.has(t.element)||fB.set(t.element,new Map);let i=t.attributeName.slice(2),a=fB.get(t.element);return a&&a.has(i)?a.get(i):new e(t.element,i)}},fH=new Map,fV=new WeakMap,fq=new WeakMap,fF=class{constructor(e,t,i){this.strings=e,this.values=t,this.processor=i,this.stringsKey=this.strings.join("\x01")}get template(){if(fH.has(this.stringsKey))return fH.get(this.stringsKey);{let e=b7.createElement("template"),t=this.strings.length-1;return e.innerHTML=this.strings.reduce((e,i,a)=>e+i+(a<t?`{{ ${a} }}`:""),""),fH.set(this.stringsKey,e),e}}renderInto(e){var t;let i=this.template;if(fV.get(e)!==i){fV.set(e,i);let t=new v7(i,this.values,this.processor);fq.set(e,t),e instanceof bs?e.replace(...t.children):e.appendChild(t);return}let a=fq.get(e);null==(t=null==a?void 0:a.update)||t.call(a,this.values)}},f$={processCallback(e,t,i){var a,r,n;if(i)for(let[e,s]of t){e in i&&(function(e,t){if(e instanceof bn&&t instanceof Element){let i=e.element;return i[e.attributeName]!==t&&(e.element.removeAttributeNS(e.attributeNamespace,e.attributeName),i[e.attributeName]=t),!0}return!1}(r=s,n=null!=(a=i[e])?a:"")||function(e,t){if("boolean"==typeof t&&e instanceof bn){let i=e.attributeNamespace;return t!==e.element.hasAttributeNS(i,e.attributeName)&&(e.booleanValue=t),!0}return!1}(r,n)||r instanceof bn&&r.attributeName.startsWith("on")&&(fW.for(r).set(n),r.element.removeAttributeNS(r.attributeNamespace,r.attributeName),1)||!1===n&&r instanceof bs&&(r.replace(""),1)||n instanceof fF&&r instanceof bs&&(n.renderInto(r),1)||n instanceof DocumentFragment&&r instanceof bs&&(n.childNodes.length&&r.replace(...n.childNodes),1)||function(e,t){if(e instanceof bn){let i=e.attributeNamespace,a=e.element.getAttributeNS(i,e.attributeName);return String(t)!==a&&(e.value=String(t))}e.value=String(t)}(r,n))}}};function fj(e,...t){return new fF(e,t,f$)}var fK=e=>fj`
  <style>
    ${fL}
  </style>
  ${fZ(e)}
`,fY=e=>{let t=e.hotKeys?`${e.hotKeys}`:"";return"live"===fv(e.streamType)&&(t+=" noarrowleft noarrowright"),t},fG=Object.values({TOP:"top",CENTER:"center",BOTTOM:"bottom",LAYER:"layer",MEDIA_LAYER:"media-layer",POSTER_LAYER:"poster-layer",VERTICAL_LAYER:"vertical-layer",CENTERED_LAYER:"centered-layer",GESTURE_LAYER:"gesture-layer",CONTROLLER_LAYER:"controller",BUTTON:"button",RANGE:"range",DISPLAY:"display",CONTROL_BAR:"control-bar",SELECTMENU:"selectmenu",LISTBOX:"listbox",OPTION:"option",POSTER:"poster",LIVE:"live",PLAY:"play",PRE_PLAY:"pre-play",SEEK_BACKWARD:"seek-backward",SEEK_FORWARD:"seek-forward",MUTE:"mute",CAPTIONS:"captions",AIRPLAY:"airplay",PIP:"pip",FULLSCREEN:"fullscreen",CAST:"cast",PLAYBACK_RATE:"playback-rate",VOLUME:"volume",TIME:"time",TITLE:"title",AUDIO_TRACK:"audio-track",RENDITION:"rendition"}).join(", "),fZ=e=>{var t,i,a,r,n,s,o,l,d,u,c,h,m,p,v,b,f,E,g,y,_,A,k,T,w,S,I,C,R,L,D,x,M,O,N,P,U;let B;return fj`
  <media-theme
    template="${e.themeTemplate||!1}"
    defaultstreamtype="${null!=(t=e.defaultStreamType)&&t}"
    hotkeys="${fY(e)||!1}"
    nohotkeys="${e.noHotKeys||!e.hasSrc||e.isDialogOpen||!1}"
    noautoseektolive="${!!(null!=(i=e.streamType)&&i.includes(tH.LIVE))&&0!==e.targetLiveWindow}"
    novolumepref="${e.novolumepref||!1}"
    disabled="${!e.hasSrc||e.isDialogOpen}"
    audio="${null!=(a=e.audio)&&a}"
    style="${null!=(U={"--media-primary-color":e.primaryColor,"--media-secondary-color":e.secondaryColor,"--media-accent-color":e.accentColor},B="",Object.entries(U).forEach(([e,t])=>{null!=t&&(B+=`${fi(e)}: ${t}; `)}),r=B?B.trim():void 0)&&r}"
    defaultsubtitles="${!e.defaultHiddenCaptions}"
    forwardseekoffset="${null!=(n=e.forwardSeekOffset)&&n}"
    backwardseekoffset="${null!=(s=e.backwardSeekOffset)&&s}"
    playbackrates="${null!=(o=e.playbackRates)&&o}"
    defaultshowremainingtime="${null!=(l=e.defaultShowRemainingTime)&&l}"
    defaultduration="${null!=(d=e.defaultDuration)&&d}"
    hideduration="${null!=(u=e.hideDuration)&&u}"
    title="${null!=(c=e.title)&&c}"
    exportparts="${fG}"
  >
    <mux-video
      slot="media"
      target-live-window="${null!=(h=e.targetLiveWindow)&&h}"
      stream-type="${null!=(m=fv(e.streamType))&&m}"
      crossorigin="${null!=(p=e.crossOrigin)?p:""}"
      playsinline
      autoplay="${null!=(v=e.autoplay)&&v}"
      muted="${null!=(b=e.muted)&&b}"
      loop="${null!=(f=e.loop)&&f}"
      preload="${null!=(E=e.preload)&&E}"
      debug="${null!=(g=e.debug)&&g}"
      prefer-cmcd="${null!=(y=e.preferCmcd)&&y}"
      disable-tracking="${null!=(_=e.disableTracking)&&_}"
      disable-cookies="${null!=(A=e.disableCookies)&&A}"
      prefer-playback="${null!=(k=e.preferPlayback)&&k}"
      start-time="${null!=e.startTime&&e.startTime}"
      beacon-collection-domain="${null!=(T=e.beaconCollectionDomain)&&T}"
      player-software-name="${null!=(w=e.playerSoftwareName)&&w}"
      player-software-version="${null!=(S=e.playerSoftwareVersion)&&S}"
      env-key="${null!=(I=e.envKey)&&I}"
      custom-domain="${null!=(C=e.customDomain)&&C}"
      src="${e.src?e.src:!!e.playbackId&&iS(e)}"
      cast-src="${e.src?e.src:!!e.playbackId&&iS(e)}"
      exportparts="video"
    >
      ${e.storyboard?fj`<track label="thumbnails" default kind="metadata" src="${e.storyboard}" />`:fj``}
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${""!==e.poster&&null!=(R=e.poster)&&R}"
        placeholdersrc="${null!=(L=e.placeholder)&&L}"
      ></media-poster-image>
    </slot>
    <mxp-dialog
      no-auto-hide
      open="${null!=(D=e.isDialogOpen)&&D}"
      onclose="${e.onCloseErrorDialog}"
      oninitfocus="${e.onInitFocusDialog}"
    >
      ${null!=(x=e.dialog)&&x.title?fj`<h3>${e.dialog.title}</h3>`:fj``}
      <p>
        ${null==(M=e.dialog)?void 0:M.message}
        ${null!=(O=e.dialog)&&O.linkUrl?fj`<a
              href="${e.dialog.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null!=(N=e.dialog.linkText)?N:""} ${fe("(opens in a new window)")}"
              >${null!=(P=e.dialog.linkText)?P:e.dialog.linkUrl}</a
            >`:fj``}
      </p>
    </mxp-dialog>
  </media-theme>
`};function fQ(e,t,i,a,r){var n,s,o;let l={},d={};switch(e.code){case tP.MEDIA_ERR_NETWORK:switch(l.title=fe("Network Error",r),l.message=e.message,null==(n=e.data)?void 0:n.response.code){case 412:l.title=fe("Video is not currently available",r),l.message=fe("The live stream or video file are not yet ready.",r),d.message=fe("This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",r),d.file="412-not-playable.md";break;case 404:l.title=fe("Video does not exist",r),l.message="",d.message=fe("This playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",r),d.file="404-not-found.md";break;case 403:{if(l.title=fe("Invalid playback URL",r),l.message=fe("The video URL or playback-token are formatted with incorrect or incomplete information.",r),d.message=fe("403 error trying to access this playback URL. If this is a signed URL, you might need to provide a playback-token.",r),d.file="missing-signed-tokens.md",!a)break;let{exp:e,aud:t,sub:n}=fs(a),s=Date.now()>1e3*e,o=n!==i,u="v"!==t,c={timeStyle:"medium",dateStyle:"medium"};if(s){l.title=fe("Video URL has expired",r),l.message=fe("The video’s secured playback-token has expired.",r),d.message=fe("The video’s secured playback-token has expired.",r),d.context=fe("Expired at: {expiredDate}. Current time: {currentDate}.",r).format({expiredDate:new Intl.DateTimeFormat(b6.code,c).format(1e3*e),currentDate:new Intl.DateTimeFormat(b6.code,c).format(Date.now())}),d.file="403-expired-token.md";break}if(o){l.title=fe("Video URL is formatted incorrectly",r),l.message=fe("The video’s playback ID does not match the one encoded in the playback-token.",r),d.message=fe("The video’s playback ID does not match the one encoded in the playback-token.",r),d.context=fe("Specified playback ID: {playbackId} and the playback ID encoded in the playback-token: {tokenPlaybackId}",r).format({playbackId:i,tokenPlaybackId:n}),d.file="403-playback-id-mismatch.md";break}if(u){l.title=fe("Video URL is formatted incorrectly",r),l.message=fe("The playback-token is formatted with incorrect information.",r),d.message=fe("The playback-token is formatted with incorrect information.",r),d.context=fe("The playback-token has an incorrect aud value: {tokenType}. aud value should be v.",r).format({tokenType:t}),d.file="403-incorrect-aud-value.md";break}d.message=fe("403 error trying to access this playback URL. If this is a signed playback ID, the token might not have been generated correctly.",r),d.file="403-malformatted-token.md"}}break;case tP.MEDIA_ERR_DECODE:{let{message:t}=e;l={title:fe("Media Error",r),message:t},d.file="media-decode-error.md";break}case tP.MEDIA_ERR_SRC_NOT_SUPPORTED:{let n=null==(o=null==(s=e.data)?void 0:s.response)?void 0:o.code;if(n>=400&&n<500){e.code=tP.MEDIA_ERR_NETWORK,e.data={response:{code:n}},{dialog:l,devlog:d}=fQ(e,t,i,a);break}l={title:fe("Source Not Supported",r),message:e.message},d.file="media-src-not-supported.md";break}default:l={title:fe("Error",r),message:e.message}}return t&&(l={title:fe("Your device appears to be offline",r),message:fe("Check your internet connection and try reloading this video.",r)}),{dialog:l,devlog:d}}var fz=`<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller ::slotted([slot='media']) {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) ::slotted([slot='media']) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='listbox'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: calc(100% + 16px);
      padding: 2.5px 10px;
    }

    [part~='listbox']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='listbox']::part(option) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='listbox']::part(option-selected) {
      font-weight: 700;
    }

    media-captions-selectmenu,
    media-rendition-selectmenu,
    media-audio-track-selectmenu,
    media-playback-rate-listbox[part~='listbox'] {
      --media-listbox-background: var(--_primary-color);
      --media-option-selected-background: transparent;
      --media-option-hover-background: transparent;
      --media-option-hover-outline: var(--_accent-color) solid 1px;
      --media-text-color: var(--_text-color);
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-selectmenu {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-listbox[part~='listbox'] {
      --media-listbox-layout: row;
      --media-option-selected-background: var(--_accent-color);
      margin-right: 6px;
      padding: 0;
    }

    media-playback-rate-listbox[part~='listbox']::part(option) {
      padding: 6px 4px;
    }

    media-playback-rate-listbox[part~='listbox']::part(option-selected) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps: hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%,
        hsl(0 0% 0% / 0.104) 22.5%, hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%,
        hsl(0 0% 0% / 0.45) 47.1%, hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%,
        hsl(0 0% 0% / 0.825) 71%, hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%,
        hsl(0 0% 0%) 100%;
    }

    :host([title]:not([audio])) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 2;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      animation: 0.3s linear forwards pre-play-hide;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-selectmenu: none;
      --bottom-pip-button: none;
    }
  </style>

  <template partial="TitleDisplay">
    <template if="title">
      <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenuButton">
    <media-captions-selectmenu part="bottom captions selectmenu" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-captions-button
        slot="button"
        part="bottom captions button"
        disabled="{{disabled}}"
        aria-disabled="{{disabled}}"
      >
        <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
          <path
            d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
          />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
          <path
            d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
          />
          <path
            d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
          />
          <path
            d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
          />
        </svg>
      </media-captions-button>
      <media-captions-listbox slot="listbox" exportparts="option" part="bottom captions listbox">
        <div slot="select-indicator">
          <style>
            .listbox-indicator {
              position: relative;
              top: 1px;
              width: 0.9em;
              height: auto;
              fill: var(--_accent-color);
            }

            [aria-selected='false'] .listbox-indicator {
              display: none;
            }
          </style>
          <svg viewBox="0 0 14 18" class="listbox-indicator">
            <path
              d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </media-captions-listbox>
    </media-captions-selectmenu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateSelect">
    <media-playback-rate-selectmenu
      part="bottom playback-rate selectmenu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <media-playback-rate-button slot="button" part="bottom playback-rate button"></media-playback-rate-button>
      <media-playback-rate-listbox
        slot="listbox"
        rates="{{playbackrates}}"
        exportparts="option"
        part="bottom playback-rate listbox"
      ></media-playback-rate-listbox>
    </media-playback-rate-selectmenu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackSelect">
    <media-audio-track-selectmenu
      part="bottom audio-track selectmenu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <media-audio-track-button slot="button" part="bottom audio-track button">
        <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
          <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
          <path
            d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
          />
        </svg>
      </media-audio-track-button>
      <media-audio-track-listbox slot="listbox" exportparts="option" part="bottom audio-track listbox">
        <div slot="select-indicator">
          <style>
            .listbox-indicator {
              position: relative;
              top: 1px;
              width: 0.9em;
              height: auto;
              fill: var(--_accent-color);
            }

            [aria-selected='false'] .listbox-indicator {
              display: none;
            }
          </style>
          <svg viewBox="0 0 14 18" class="listbox-indicator">
            <path
              d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </media-audio-track-listbox>
    </media-audio-track-selectmenu>
  </template>

  <template partial="RenditionSelect">
    <media-rendition-selectmenu part="bottom rendition selectmenu" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-rendition-button slot="button" part="bottom rendition button">
        <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
          <path
            d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
          />
        </svg>
      </media-rendition-button>
      <media-rendition-listbox slot="listbox" exportparts="option" part="bottom rendition listbox">
        <div slot="select-indicator">
          <style>
            .listbox-indicator {
              position: relative;
              top: 1px;
              width: 0.9em;
              height: auto;
              fill: var(--_accent-color);
            }

            [aria-selected='false'] .listbox-indicator {
              display: none;
            }
          </style>
          <svg viewBox="0 0 14 18" class="listbox-indicator">
            <path
              d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
              fill-rule="evenodd"
            />
          </svg>
        </div>
      </media-rendition-listbox>
    </media-rendition-selectmenu>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>

    <template if="!audio">
      <!-- Pre-playback UI -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="streamtype == 'on-demand'">
          <template if="!breakpointsm"> {{>SeekBackwardButton section="center"}} </template>
          <template if="!breakpointsm"> {{>PlayButton section="center"}} </template>
          <template if="breakpointsm"> {{>PrePlayButton section="center"}} </template>
          <template if="!breakpointsm"> {{>SeekForwardButton section="center"}} </template>
        </template>

        <template if="streamtype == 'live'">
          <template if="!breakpointsm">
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton section="center"}} </template>
          </template>
          <template if="!breakpointsm"> {{>PlayButton section="center"}} </template>
          <template if="breakpointsm"> {{>PrePlayButton section="center"}} </template>
          <template if="!breakpointsm">
            <template if="targetlivewindow > 0"> {{>SeekForwardButton section="center"}} </template>
          </template>
        </template>
      </div>

      <!-- Auotplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionSelect}} {{>PlaybackRateSelect}} {{>AudioTrackSelect}} {{>CaptionsMenuButton}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionSelect}} {{>AudioTrackSelect}} {{>CaptionsMenuButton}} {{>AirplayButton}} {{>CastButton}}
          {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateSelect}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          <template if="breakpointsm">
            {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}} {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,fX=b7.createElement("template");"innerHTML"in fX&&(fX.innerHTML=fz);var fJ,f0,f1=class extends bL{};f1.template=null==(f0=null==(fJ=fX.content)?void 0:fJ.children)?void 0:f0[0],b8.customElements.get("media-theme-gerwig")||b8.customElements.define("media-theme-gerwig",f1);var f2={SRC:"src",POSTER:"poster"},f3={STYLE:"style",DEFAULT_HIDDEN_CAPTIONS:"default-hidden-captions",PRIMARY_COLOR:"primary-color",SECONDARY_COLOR:"secondary-color",ACCENT_COLOR:"accent-color",FORWARD_SEEK_OFFSET:"forward-seek-offset",BACKWARD_SEEK_OFFSET:"backward-seek-offset",PLAYBACK_TOKEN:"playback-token",THUMBNAIL_TOKEN:"thumbnail-token",STORYBOARD_TOKEN:"storyboard-token",STORYBOARD_SRC:"storyboard-src",THUMBNAIL_TIME:"thumbnail-time",AUDIO:"audio",NOHOTKEYS:"nohotkeys",HOTKEYS:"hotkeys",PLAYBACK_RATES:"playbackrates",DEFAULT_SHOW_REMAINING_TIME:"default-show-remaining-time",DEFAULT_DURATION:"default-duration",TITLE:"title",PLACEHOLDER:"placeholder",THEME:"theme",DEFAULT_STREAM_TYPE:"default-stream-type",TARGET_LIVE_WINDOW:"target-live-window",EXTRA_SOURCE_PARAMS:"extra-source-params",NO_VOLUME_PREF:"no-volume-pref"},f5=["audio","backwardseekoffset","defaultduration","defaultshowremainingtime","defaultsubtitles","noautoseektolive","disabled","exportparts","forwardseekoffset","hideduration","hotkeys","nohotkeys","playbackrates","defaultstreamtype","streamtype","style","targetlivewindow","template","title","novolumepref"];function f4(e){let t=e.hasAttribute(f3.TITLE)?{video_title:e.getAttribute(f3.TITLE)}:{};return e.getAttributeNames().filter(e=>e.startsWith("metadata-")).reduce((t,i)=>{let a=e.getAttribute(i);return null!==a&&(t[i.replace(/^metadata-/,"").replace(/-/g,"_")]=a),t},t)}var f9,f8,f7,f6,Ee,Et,Ei,Ea,Er,En,Es,Eo,El,Ed,Eu,Ec,Eh,Em,Ep,Ev,Eb,Ef=Object.values(vQ),EE=Object.values(f2),Eg=Object.values(f3),Ey={dialog:void 0,isDialogOpen:!1},E_={redundant_streams:!0},EA=class extends fR{constructor(){super(),bO(this,Et),bO(this,Ea),bO(this,En),bO(this,Eo),bO(this,Ed),bO(this,Ec),bO(this,Em),bO(this,Ev),bO(this,f9,!1),bO(this,f8,{}),bO(this,f7,!0),bO(this,f6,new ff(this,"hotkeys")),bO(this,Ee,{...Ey,onCloseErrorDialog:()=>bP(this,En,Es).call(this,{dialog:void 0,isDialogOpen:!1}),onInitFocusDialog:e=>{fu(this,b7.activeElement)||e.preventDefault()}}),this.attachShadow({mode:"open"}),bP(this,Ea,Er).call(this),this.isConnected&&bP(this,Et,Ei).call(this)}static get observedAttributes(){var e;return[...null!=(e=fR.observedAttributes)?e:[],...EE,...Ef,...Eg]}get mediaTheme(){var e;return null==(e=this.shadowRoot)?void 0:e.querySelector("media-theme")}get mediaController(){var e,t;return null==(t=null==(e=this.mediaTheme)?void 0:e.shadowRoot)?void 0:t.querySelector("media-controller")}connectedCallback(){var e;let t=null==(e=this.shadowRoot)?void 0:e.querySelector("mux-video");t&&(t.metadata=f4(this))}attributeChangedCallback(e,t,i){var a;switch(bP(this,Et,Ei).call(this),super.attributeChangedCallback(e,t,i),e){case f3.HOTKEYS:bM(this,f6).value=i;break;case f3.THUMBNAIL_TIME:null!=i&&this.tokens.thumbnail&&fg(fe("Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.").format({}));break;case f3.THUMBNAIL_TOKEN:{let{aud:e}=fs(i);i&&"t"!==e&&fg(fe("The provided thumbnail-token should have audience value 't' instead of '{aud}'.").format({aud:e}));break}case f3.STORYBOARD_TOKEN:{let{aud:e}=fs(i);i&&"s"!==e&&fg(fe("The provided storyboard-token should have audience value 's' instead of '{aud}'.").format({aud:e}));break}case vQ.PLAYBACK_ID:null!=i&&i.includes("?token")&&fy(fe("The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.").format({playbackId:i}));break;case vQ.STREAM_TYPE:i&&![tH.LIVE,tH.ON_DEMAND,tH.UNKNOWN].includes(i)?["ll-live","live:dvr","ll-live:dvr"].includes(this.streamType)?this.targetLiveWindow=i.includes("dvr")?Number.POSITIVE_INFINITY:0:f_({file:"invalid-stream-type.md",message:fe("Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`").format({streamType:this.streamType})}):i===tH.LIVE?null==this.getAttribute(f3.TARGET_LIVE_WINDOW)&&(this.targetLiveWindow=0):this.targetLiveWindow=Number.NaN}[vQ.PLAYBACK_ID,f2.SRC,f3.PLAYBACK_TOKEN].includes(e)&&t!==i&&bN(this,Ee,{...bM(this,Ee),...Ey}),bP(this,Eo,El).call(this,{[null!=(a=fb[e])?a:fa(e)]:i})}get preferCmcd(){var e;return null!=(e=this.getAttribute(vQ.PREFER_CMCD))?e:void 0}set preferCmcd(e){e!==this.preferCmcd&&(e?tF.includes(e)?this.setAttribute(vQ.PREFER_CMCD,e):fg(`Invalid value for preferCmcd. Must be one of ${tF.join()}`):this.removeAttribute(vQ.PREFER_CMCD))}get hasPlayed(){var e,t;return null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(i2.MEDIA_HAS_PLAYED))&&t}get inLiveWindow(){var e;return null==(e=this.mediaController)?void 0:e.hasAttribute(i2.MEDIA_TIME_IS_LIVE)}get _hls(){var e;return null==(e=this.media)?void 0:e._hls}get mux(){var e;return null==(e=this.media)?void 0:e.mux}get theme(){var e;return null!=(e=this.getAttribute(f3.THEME))?e:"gerwig"}set theme(e){this.setAttribute(f3.THEME,`${e}`)}get themeProps(){let e=this.mediaTheme;if(!e)return;let t={};for(let i of e.getAttributeNames()){if(f5.includes(i))continue;let a=e.getAttribute(i);t[fa(i)]=""===a||a}return t}set themeProps(e){var t,i;bP(this,Et,Ei).call(this);let a={...this.themeProps,...e};for(let r in a){if(f5.includes(r))continue;let a=null==e?void 0:e[r];"boolean"==typeof a||null==a?null==(t=this.mediaTheme)||t.toggleAttribute(fi(r),!!a):null==(i=this.mediaTheme)||i.setAttribute(fi(r),a)}}get playbackId(){var e;return null!=(e=this.getAttribute(vQ.PLAYBACK_ID))?e:void 0}set playbackId(e){e?this.setAttribute(vQ.PLAYBACK_ID,e):this.removeAttribute(vQ.PLAYBACK_ID)}get src(){var e,t;return this.playbackId?null!=(e=Ek(this,f2.SRC))?e:void 0:null!=(t=this.getAttribute(f2.SRC))?t:void 0}set src(e){e?this.setAttribute(f2.SRC,e):this.removeAttribute(f2.SRC)}get poster(){var e;let t=this.getAttribute(f2.POSTER);return null!=t?t:this.playbackId&&!this.audio?fm(this.playbackId,{customDomain:this.customDomain,thumbnailTime:null!=(e=this.thumbnailTime)?e:this.startTime,programTime:this.programStartTime,token:this.tokens.thumbnail}):void 0}set poster(e){e||""===e?this.setAttribute(f2.POSTER,e):this.removeAttribute(f2.POSTER)}get storyboardSrc(){var e;return null!=(e=this.getAttribute(f3.STORYBOARD_SRC))?e:void 0}set storyboardSrc(e){e?this.setAttribute(f3.STORYBOARD_SRC,e):this.removeAttribute(f3.STORYBOARD_SRC)}get storyboard(){return this.storyboardSrc&&!this.tokens.storyboard?this.storyboardSrc:this.audio||!this.playbackId||!this.streamType||[tH.LIVE,tH.UNKNOWN].includes(this.streamType)?void 0:fp(this.playbackId,{customDomain:this.customDomain,token:this.tokens.storyboard,programStartTime:this.programStartTime,programEndTime:this.programEndTime})}get audio(){return this.hasAttribute(f3.AUDIO)}set audio(e){if(!e){this.removeAttribute(f3.AUDIO);return}this.setAttribute(f3.AUDIO,"")}get hotkeys(){return bM(this,f6)}get nohotkeys(){return this.hasAttribute(f3.NOHOTKEYS)}set nohotkeys(e){if(!e){this.removeAttribute(f3.NOHOTKEYS);return}this.setAttribute(f3.NOHOTKEYS,"")}get thumbnailTime(){return fr(this.getAttribute(f3.THUMBNAIL_TIME))}set thumbnailTime(e){this.setAttribute(f3.THUMBNAIL_TIME,`${e}`)}get title(){var e;return null!=(e=this.getAttribute(f3.TITLE))?e:""}set title(e){e!==this.title&&(e?this.setAttribute(f3.TITLE,e):this.removeAttribute("title"),super.title=e)}get placeholder(){var e;return null!=(e=Ek(this,f3.PLACEHOLDER))?e:""}set placeholder(e){this.setAttribute(f3.PLACEHOLDER,`${e}`)}get primaryColor(){var e,t;let i=this.getAttribute(f3.PRIMARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=b8.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_primary-color"))?void 0:t.trim()))return i}set primaryColor(e){this.setAttribute(f3.PRIMARY_COLOR,`${e}`)}get secondaryColor(){var e,t;let i=this.getAttribute(f3.SECONDARY_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=b8.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_secondary-color"))?void 0:t.trim()))return i}set secondaryColor(e){this.setAttribute(f3.SECONDARY_COLOR,`${e}`)}get accentColor(){var e,t;let i=this.getAttribute(f3.ACCENT_COLOR);if(null!=i||this.mediaTheme&&(i=null==(t=null==(e=b8.getComputedStyle(this.mediaTheme))?void 0:e.getPropertyValue("--_accent-color"))?void 0:t.trim()))return i}set accentColor(e){this.setAttribute(f3.ACCENT_COLOR,`${e}`)}get defaultShowRemainingTime(){return this.hasAttribute(f3.DEFAULT_SHOW_REMAINING_TIME)}set defaultShowRemainingTime(e){e?this.setAttribute(f3.DEFAULT_SHOW_REMAINING_TIME,""):this.removeAttribute(f3.DEFAULT_SHOW_REMAINING_TIME)}get playbackRates(){if(this.hasAttribute(f3.PLAYBACK_RATES))return this.getAttribute(f3.PLAYBACK_RATES).trim().split(/\s*,?\s+/).map(e=>Number(e)).filter(e=>!Number.isNaN(e)).sort((e,t)=>e-t)}set playbackRates(e){if(!e){this.removeAttribute(f3.PLAYBACK_RATES);return}this.setAttribute(f3.PLAYBACK_RATES,e.join(" "))}get forwardSeekOffset(){var e;return null!=(e=fr(this.getAttribute(f3.FORWARD_SEEK_OFFSET)))?e:10}set forwardSeekOffset(e){this.setAttribute(f3.FORWARD_SEEK_OFFSET,`${e}`)}get backwardSeekOffset(){var e;return null!=(e=fr(this.getAttribute(f3.BACKWARD_SEEK_OFFSET)))?e:10}set backwardSeekOffset(e){this.setAttribute(f3.BACKWARD_SEEK_OFFSET,`${e}`)}get defaultHiddenCaptions(){return this.hasAttribute(f3.DEFAULT_HIDDEN_CAPTIONS)}set defaultHiddenCaptions(e){e?this.setAttribute(f3.DEFAULT_HIDDEN_CAPTIONS,""):this.removeAttribute(f3.DEFAULT_HIDDEN_CAPTIONS)}get defaultDuration(){return fr(this.getAttribute(f3.DEFAULT_DURATION))}set defaultDuration(e){null==e?this.removeAttribute(f3.DEFAULT_DURATION):this.setAttribute(f3.DEFAULT_DURATION,`${e}`)}get playerSoftwareName(){var e;return null!=(e=this.getAttribute(vQ.PLAYER_SOFTWARE_NAME))?e:"mux-player"}get playerSoftwareVersion(){var e;return null!=(e=this.getAttribute(vQ.PLAYER_SOFTWARE_VERSION))?e:fh}get beaconCollectionDomain(){var e;return null!=(e=this.getAttribute(vQ.BEACON_COLLECTION_DOMAIN))?e:void 0}set beaconCollectionDomain(e){e!==this.beaconCollectionDomain&&(e?this.setAttribute(vQ.BEACON_COLLECTION_DOMAIN,e):this.removeAttribute(vQ.BEACON_COLLECTION_DOMAIN))}get maxResolution(){var e;return null!=(e=this.getAttribute(vQ.MAX_RESOLUTION))?e:void 0}set maxResolution(e){e!==this.maxResolution&&(e?this.setAttribute(vQ.MAX_RESOLUTION,e):this.removeAttribute(vQ.MAX_RESOLUTION))}get minResolution(){var e;return null!=(e=this.getAttribute(vQ.MIN_RESOLUTION))?e:void 0}set minResolution(e){e!==this.minResolution&&(e?this.setAttribute(vQ.MIN_RESOLUTION,e):this.removeAttribute(vQ.MIN_RESOLUTION))}get renditionOrder(){var e;return null!=(e=this.getAttribute(vQ.RENDITION_ORDER))?e:void 0}set renditionOrder(e){e!==this.renditionOrder&&(e?this.setAttribute(vQ.RENDITION_ORDER,e):this.removeAttribute(vQ.RENDITION_ORDER))}get programStartTime(){return fr(this.getAttribute(vQ.PROGRAM_START_TIME))}set programStartTime(e){null==e?this.removeAttribute(vQ.PROGRAM_START_TIME):this.setAttribute(vQ.PROGRAM_START_TIME,`${e}`)}get programEndTime(){return fr(this.getAttribute(vQ.PROGRAM_END_TIME))}set programEndTime(e){null==e?this.removeAttribute(vQ.PROGRAM_END_TIME):this.setAttribute(vQ.PROGRAM_END_TIME,`${e}`)}get extraSourceParams(){return this.hasAttribute(f3.EXTRA_SOURCE_PARAMS)?[...new URLSearchParams(this.getAttribute(f3.EXTRA_SOURCE_PARAMS)).entries()].reduce((e,[t,i])=>(e[t]=i,e),{}):E_}set extraSourceParams(e){null==e?this.removeAttribute(f3.EXTRA_SOURCE_PARAMS):this.setAttribute(f3.EXTRA_SOURCE_PARAMS,new URLSearchParams(e).toString())}get customDomain(){var e;return null!=(e=this.getAttribute(vQ.CUSTOM_DOMAIN))?e:void 0}set customDomain(e){e!==this.customDomain&&(e?this.setAttribute(vQ.CUSTOM_DOMAIN,e):this.removeAttribute(vQ.CUSTOM_DOMAIN))}get envKey(){var e;return null!=(e=Ek(this,vQ.ENV_KEY))?e:void 0}set envKey(e){this.setAttribute(vQ.ENV_KEY,`${e}`)}get noVolumePref(){return this.hasAttribute(f3.NO_VOLUME_PREF)}set noVolumePref(e){e?this.setAttribute(f3.NO_VOLUME_PREF,""):this.removeAttribute(f3.NO_VOLUME_PREF)}get debug(){return null!=Ek(this,vQ.DEBUG)}set debug(e){e?this.setAttribute(vQ.DEBUG,""):this.removeAttribute(vQ.DEBUG)}get disableTracking(){return null!=Ek(this,vQ.DISABLE_TRACKING)}set disableTracking(e){this.toggleAttribute(vQ.DISABLE_TRACKING,!!e)}get disableCookies(){return null!=Ek(this,vQ.DISABLE_COOKIES)}set disableCookies(e){e?this.setAttribute(vQ.DISABLE_COOKIES,""):this.removeAttribute(vQ.DISABLE_COOKIES)}get streamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(vQ.STREAM_TYPE))?t:null==(e=this.media)?void 0:e.streamType)?i:tH.UNKNOWN}set streamType(e){this.setAttribute(vQ.STREAM_TYPE,`${e}`)}get defaultStreamType(){var e,t,i;return null!=(i=null!=(t=this.getAttribute(f3.DEFAULT_STREAM_TYPE))?t:null==(e=this.mediaController)?void 0:e.getAttribute(f3.DEFAULT_STREAM_TYPE))?i:tH.ON_DEMAND}set defaultStreamType(e){e?this.setAttribute(f3.DEFAULT_STREAM_TYPE,e):this.removeAttribute(f3.DEFAULT_STREAM_TYPE)}get targetLiveWindow(){var e,t;return this.hasAttribute(f3.TARGET_LIVE_WINDOW)?+this.getAttribute(f3.TARGET_LIVE_WINDOW):null!=(t=null==(e=this.media)?void 0:e.targetLiveWindow)?t:Number.NaN}set targetLiveWindow(e){e==this.targetLiveWindow||Number.isNaN(e)&&Number.isNaN(this.targetLiveWindow)||(null==e?this.removeAttribute(f3.TARGET_LIVE_WINDOW):this.setAttribute(f3.TARGET_LIVE_WINDOW,`${+e}`))}get liveEdgeStart(){var e;return null==(e=this.media)?void 0:e.liveEdgeStart}get startTime(){return fr(Ek(this,vQ.START_TIME))}set startTime(e){this.setAttribute(vQ.START_TIME,`${e}`)}get preferPlayback(){let e=this.getAttribute(vQ.PREFER_PLAYBACK);if(e===tV.MSE||e===tV.NATIVE)return e}set preferPlayback(e){e!==this.preferPlayback&&(e===tV.MSE||e===tV.NATIVE?this.setAttribute(vQ.PREFER_PLAYBACK,e):this.removeAttribute(vQ.PREFER_PLAYBACK))}get metadata(){var e;return null==(e=this.media)?void 0:e.metadata}set metadata(e){if(bP(this,Et,Ei).call(this),!this.media){fy("underlying media element missing when trying to set metadata. metadata will not be set.");return}this.media.metadata={...f4(this),...e}}get _hlsConfig(){var e;return null==(e=this.media)?void 0:e._hlsConfig}set _hlsConfig(e){if(bP(this,Et,Ei).call(this),!this.media){fy("underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.");return}this.media._hlsConfig=e}async addCuePoints(e){var t;if(bP(this,Et,Ei).call(this),!this.media){fy("underlying media element missing when trying to addCuePoints. cuePoints will not be added.");return}return null==(t=this.media)?void 0:t.addCuePoints(e)}get activeCuePoint(){var e;return null==(e=this.media)?void 0:e.activeCuePoint}get cuePoints(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.cuePoints)?t:[]}addChapters(e){var t;if(bP(this,Et,Ei).call(this),!this.media){fy("underlying media element missing when trying to addChapters. chapters will not be added.");return}return null==(t=this.media)?void 0:t.addChapters(e)}get activeChapter(){var e;return null==(e=this.media)?void 0:e.activeChapter}get chapters(){var e,t;return null!=(t=null==(e=this.media)?void 0:e.chapters)?t:[]}getStartDate(){var e;return null==(e=this.media)?void 0:e.getStartDate()}get currentPdt(){var e;return null==(e=this.media)?void 0:e.currentPdt}get tokens(){let e=this.getAttribute(f3.PLAYBACK_TOKEN),t=this.getAttribute(f3.THUMBNAIL_TOKEN),i=this.getAttribute(f3.STORYBOARD_TOKEN);return{...bM(this,f8),...null!=e?{playback:e}:{},...null!=t?{thumbnail:t}:{},...null!=i?{storyboard:i}:{}}}set tokens(e){bN(this,f8,null!=e?e:{})}get playbackToken(){var e;return null!=(e=this.getAttribute(f3.PLAYBACK_TOKEN))?e:void 0}set playbackToken(e){this.setAttribute(f3.PLAYBACK_TOKEN,`${e}`)}get thumbnailToken(){var e;return null!=(e=this.getAttribute(f3.THUMBNAIL_TOKEN))?e:void 0}set thumbnailToken(e){this.setAttribute(f3.THUMBNAIL_TOKEN,`${e}`)}get storyboardToken(){var e;return null!=(e=this.getAttribute(f3.STORYBOARD_TOKEN))?e:void 0}set storyboardToken(e){this.setAttribute(f3.STORYBOARD_TOKEN,`${e}`)}addTextTrack(e,t,i,a){var r;let n=null==(r=this.media)?void 0:r.nativeEl;if(n)return t5(n,e,t,i,a)}removeTextTrack(e){var t;let i=null==(t=this.media)?void 0:t.nativeEl;if(i){let t;return void(null==(t=Array.prototype.find.call(i.querySelectorAll("track"),t=>t.track===e))||t.remove())}}get textTracks(){var e;return null==(e=this.media)?void 0:e.textTracks}};function Ek(e,t){return e.media?e.media.getAttribute(t):e.getAttribute(t)}f9=new WeakMap,f8=new WeakMap,f7=new WeakMap,f6=new WeakMap,Ee=new WeakMap,Et=new WeakSet,Ei=function(){var e,t,i,a;if(!bM(this,f9)){bN(this,f9,!0),bP(this,Eo,El).call(this);try{if(customElements.upgrade(this.mediaTheme),!(this.mediaTheme instanceof b8.HTMLElement))throw""}catch{fy("<media-theme> failed to upgrade!")}try{if(customElements.upgrade(this.media),!(this.media instanceof vJ))throw""}catch{fy("<mux-video> failed to upgrade!")}try{if(customElements.upgrade(this.mediaController),!(this.mediaController instanceof rj))throw""}catch{fy("<media-controller> failed to upgrade!")}a=this,a.querySelectorAll(":scope > track").forEach(e=>{var t;null==(t=a.media)||t.append(e.cloneNode())}),fw.forEach(e=>{var t;null==(t=a.media)||t.addEventListener(e,e=>{a.dispatchEvent(new Event(e.type))})}),bP(this,Ed,Eu).call(this),bP(this,Ec,Eh).call(this),bP(this,Em,Ep).call(this),bN(this,f7,null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(a8.USER_INACTIVE))||t),bP(this,Ev,Eb).call(this),null==(i=this.media)||i.addEventListener("streamtypechange",()=>{bP(this,Eo,El).call(this)})}},Ea=new WeakSet,Er=function(){var e,t;try{null==(e=null==window?void 0:window.CSS)||e.registerProperty({name:"--media-primary-color",syntax:"<color>",inherits:!0}),null==(t=null==window?void 0:window.CSS)||t.registerProperty({name:"--media-secondary-color",syntax:"<color>",inherits:!0})}catch{}},En=new WeakSet,Es=function(e){Object.assign(bM(this,Ee),e),bP(this,Eo,El).call(this)},Eo=new WeakSet,El=function(e={}){var t,i,a;let r;(function(e,t){e.renderInto(t)})(fK((t={...bM(this,Ee),...e},{src:!this.playbackId&&this.src,playbackId:this.playbackId,hasSrc:!!this.playbackId||!!this.src,poster:this.poster,storyboard:this.storyboard,storyboardSrc:this.getAttribute(f3.STORYBOARD_SRC),placeholder:this.getAttribute("placeholder"),themeTemplate:function(e){var t,i;let a=e.theme;if(a){let r=null==(i=null==(t=e.getRootNode())?void 0:t.getElementById)?void 0:i.call(t,a);if(r&&r instanceof HTMLTemplateElement)return r;a.startsWith("media-theme-")||(a=`media-theme-${a}`);let n=b8.customElements.get(a);if(null!=n&&n.template)return n.template}}(this),thumbnailTime:!this.tokens.thumbnail&&this.thumbnailTime,autoplay:this.autoplay,crossOrigin:this.crossOrigin,loop:this.loop,noHotKeys:this.hasAttribute(f3.NOHOTKEYS),hotKeys:this.getAttribute(f3.HOTKEYS),muted:this.muted,paused:this.paused,preload:this.preload,envKey:this.envKey,preferCmcd:this.preferCmcd,debug:this.debug,disableTracking:this.disableTracking,disableCookies:this.disableCookies,tokens:this.tokens,beaconCollectionDomain:this.beaconCollectionDomain,maxResolution:this.maxResolution,minResolution:this.minResolution,programStartTime:this.programStartTime,programEndTime:this.programEndTime,renditionOrder:this.renditionOrder,metadata:this.metadata,playerSoftwareName:this.playerSoftwareName,playerSoftwareVersion:this.playerSoftwareVersion,startTime:this.startTime,preferPlayback:this.preferPlayback,audio:this.audio,defaultStreamType:this.defaultStreamType,targetLiveWindow:this.getAttribute(vQ.TARGET_LIVE_WINDOW),streamType:fv(this.getAttribute(vQ.STREAM_TYPE)),primaryColor:this.getAttribute(f3.PRIMARY_COLOR),secondaryColor:this.getAttribute(f3.SECONDARY_COLOR),accentColor:this.getAttribute(f3.ACCENT_COLOR),forwardSeekOffset:this.forwardSeekOffset,backwardSeekOffset:this.backwardSeekOffset,defaultHiddenCaptions:this.defaultHiddenCaptions,defaultDuration:this.defaultDuration,defaultShowRemainingTime:this.defaultShowRemainingTime,hideDuration:(r=null==(a=this.mediaController)?void 0:a.querySelector("media-time-display"))&&"none"===getComputedStyle(r).getPropertyValue("--media-duration-display-display").trim(),playbackRates:this.getAttribute(f3.PLAYBACK_RATES),customDomain:null!=(i=this.getAttribute(vQ.CUSTOM_DOMAIN))?i:void 0,title:this.getAttribute(f3.TITLE),novolumepref:this.hasAttribute(f3.NO_VOLUME_PREF),...t,extraSourceParams:this.extraSourceParams})),this.shadowRoot)},Ed=new WeakSet,Eu=function(){let e=e=>{var t,i;if(!(null!=e&&e.startsWith("theme-")))return;let a=e.replace(/^theme-/,"");if(f5.includes(a))return;let r=this.getAttribute(e);null!=r?null==(t=this.mediaTheme)||t.setAttribute(a,r):null==(i=this.mediaTheme)||i.removeAttribute(a)};new MutationObserver(t=>{for(let{attributeName:i}of t)e(i)}).observe(this,{attributes:!0}),this.getAttributeNames().forEach(e)},Ec=new WeakSet,Eh=function(){var e;this.addEventListener("error",e=>{let{detail:t}=e;if(t instanceof tP||(t=new tP(t.message,t.code,t.fatal)),!(null!=t&&t.fatal)){fg(t),t.data&&fg(`${t.name} data:`,t.data);return}let{dialog:i,devlog:a}=fQ(t,!window.navigator.onLine,this.playbackId,this.playbackToken);a.message&&f_(a),fy(t),t.data&&fy(`${t.name} data:`,t.data),bP(this,En,Es).call(this,{isDialogOpen:!0,dialog:i})}),this.media&&(this.media.errorTranslator=(e={})=>{var t,i,a;if(!((null==(t=this.media)?void 0:t.error)instanceof tP))return e;let{devlog:r}=fQ(null==(i=this.media)?void 0:i.error,!window.navigator.onLine,this.playbackId,this.playbackToken,!1);return{player_error_code:null==(a=this.media)?void 0:a.error.code,player_error_message:r.message?String(r.message):e.player_error_message,player_error_context:r.context?String(r.context):e.player_error_context}}),null==(e=this.media)||e.addEventListener("error",e=>{var t,i;let{detail:a}=e;if(!a){let{message:e,code:r}=null!=(i=null==(t=this.media)?void 0:t.error)?i:{};a=new tP(e,r)}null!=a&&a.fatal&&this.dispatchEvent(new CustomEvent("error",{detail:a}))})},Em=new WeakSet,Ep=function(){var e,t,i,a;let r=()=>bP(this,Eo,El).call(this);null==(t=null==(e=this.media)?void 0:e.textTracks)||t.addEventListener("addtrack",r),null==(a=null==(i=this.media)?void 0:i.textTracks)||a.addEventListener("removetrack",r)},Ev=new WeakSet,Eb=function(){var e,t;if(!/Firefox/i.test(navigator.userAgent))return;let i,a=new WeakMap,r=()=>this.streamType===tH.LIVE&&!this.secondaryColor&&this.offsetWidth>=800,n=(e,t,i=!1)=>{r()||Array.from(e&&e.activeCues||[]).forEach(e=>{if(!(!e.snapToLines||e.line<-5||e.line>=0&&e.line<10)){if(!t||this.paused){let t=e.text.split(`
`).length,r=-3;this.streamType===tH.LIVE&&(r=-2);let n=r-t;(e.line!==n||i)&&(a.has(e)||a.set(e,e.line),e.line=n)}else setTimeout(()=>{e.line=a.get(e)||"auto"},500)}})},s=()=>{var e,t;n(i,null!=(t=null==(e=this.mediaController)?void 0:e.hasAttribute(a8.USER_INACTIVE))&&t)},o=()=>{var e,t;let a=Array.from((null==(t=null==(e=this.mediaController)?void 0:e.media)?void 0:t.textTracks)||[]).filter(e=>["subtitles","captions"].includes(e.kind)&&"showing"===e.mode)[0];a!==i&&(null==i||i.removeEventListener("cuechange",s)),null==(i=a)||i.addEventListener("cuechange",s),n(i,bM(this,f7))};o(),null==(e=this.textTracks)||e.addEventListener("change",o),null==(t=this.textTracks)||t.addEventListener("addtrack",o),this.addEventListener("userinactivechange",()=>{var e,t;let a=null==(t=null==(e=this.mediaController)?void 0:e.hasAttribute(a8.USER_INACTIVE))||t;bM(this,f7)!==a&&(bN(this,f7,a),n(i,bM(this,f7)))})},b8.customElements.get("mux-player")||(b8.customElements.define("mux-player",EA),b8.MuxPlayerElement=EA);var ET={className:"class",classname:"class",htmlFor:"for",crossOrigin:"crossorigin",viewBox:"viewBox",playsInline:"playsinline",autoPlay:"autoplay",playbackRate:"playbackrate"},Ew=e=>null==e,ES=(e,t)=>!Ew(t)&&e in t,EI=e=>e.replace(/[A-Z]/g,e=>"-".concat(e.toLowerCase())),EC=(e,t)=>{if(!("boolean"==typeof t&&!t))return ES(e,ET)?ET[e]:/[A-Z]/.test(e)?EI(e):e},ER=(e,t)=>"boolean"==typeof e?"":e,EL=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.entries(e).reduce((e,t)=>{let[i,a]=t,r=EC(i,a);if(!r)return e;let n=ER(a,i);return e[r]=n,e},{})},ED=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];let a=(0,c.useRef)(null);return(0,c.useEffect)(()=>{t.forEach(e=>{e&&("function"==typeof e?e(a.current):e.current=a.current)})},[t]),a},Ex=Object.prototype.hasOwnProperty,EM=(e,t)=>{if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.some((e,i)=>t[i]===e);let i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(let a=0;a<i.length;a++)if(!Ex.call(t,i[a])||!Object.is(e[i[a]],t[i[a]]))return!1;return!0},EO=(e,t,i)=>!EM(t,e[i]),EN=(e,t,i)=>{e[i]=t},EP=function(e,t,i){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:EN,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:EO;return(0,c.useEffect)(()=>{let n=null==i?void 0:i.current;n&&r(n,t,e)&&a(n,t,e)},[null==i?void 0:i.current,t])},EU=(()=>{try{return"2.7.0"}catch(e){}return"UNKNOWN"})(),EB=c.forwardRef((e,t)=>{let{children:i,...a}=e;return c.createElement("mux-player",EL({...a,ref:t}),i)}),EW=(e,t,i)=>(0,c.useEffect)(()=>{let a=null==t?void 0:t.current;if(!(!a||!i))return a.addEventListener(e,i),()=>{a.removeEventListener(e,i)}},[null==t?void 0:t.current,i]),EH=(e,t)=>{let{onAbort:i,onCanPlay:a,onCanPlayThrough:r,onEmptied:n,onLoadStart:s,onLoadedData:o,onLoadedMetadata:l,onProgress:d,onDurationChange:u,onVolumeChange:c,onRateChange:h,onResize:m,onWaiting:p,onPlay:v,onPlaying:b,onTimeUpdate:f,onPause:E,onSeeking:g,onSeeked:y,onStalled:_,onSuspend:A,onEnded:k,onError:T,onCuePointChange:w,onCuePointsChange:S,onChapterChange:I,metadata:C,tokens:R,paused:L,playbackId:D,playbackRates:x,currentTime:M,themeProps:O,extraSourceParams:N,_hlsConfig:P,...U}=t;return EP("playbackRates",x,e),EP("metadata",C,e),EP("extraSourceParams",N,e),EP("_hlsConfig",P,e),EP("themeProps",O,e),EP("tokens",R,e),EP("playbackId",D,e),EP("paused",L,e,(e,t)=>{null!=t&&(t?e.pause():e.play())},(e,t,i)=>(!e.hasAttribute("autoplay")||!!e.hasPlayed)&&EO(e,t,i)),EP("currentTime",M,e,(e,t)=>{null!=t&&(e.currentTime=t)}),EW("abort",e,i),EW("canplay",e,a),EW("canplaythrough",e,r),EW("emptied",e,n),EW("loadstart",e,s),EW("loadeddata",e,o),EW("loadedmetadata",e,l),EW("progress",e,d),EW("durationchange",e,u),EW("volumechange",e,c),EW("ratechange",e,h),EW("resize",e,m),EW("waiting",e,p),EW("play",e,v),EW("playing",e,b),EW("timeupdate",e,f),EW("pause",e,E),EW("seeking",e,g),EW("seeked",e,y),EW("stalled",e,_),EW("suspend",e,A),EW("ended",e,k),EW("error",e,T),EW("cuepointchange",e,w),EW("cuepointschange",e,S),EW("chapterchange",e,I),[U]},EV=c.forwardRef((e,t)=>{let i=(0,c.useRef)(null),a=ED(i,t),[r]=EH(i,e);return c.createElement(EB,{ref:a,playerSoftwareName:"mux-player-react",playerSoftwareVersion:EU,...r})})},92535:function(e,t,i){"use strict";i.d(t,{YI:function(){return k}});var a=i(57437),r=i(34071),n=i(2265);let s=["block","list","listItem","marks","types"],o=["listItem"],l=["_key"];function d(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function u(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?d(Object(i),!0).forEach(function(t){var a,r;a=t,r=i[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var a=i.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function c(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}let h={textDecoration:"underline"},m=(e,t)=>`[@portabletext/react] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`,p=e=>m(`block type "${e}"`,"types"),v=e=>m(`mark type "${e}"`,"marks"),b=e=>m(`block style "${e}"`,"block"),f=e=>m(`list style "${e}"`,"list"),E=e=>m(`list item style "${e}"`,"listItem");function g(e){console.warn(e)}let y={display:"none"},_={types:{},block:{normal:({children:e})=>(0,a.jsx)("p",{children:e}),blockquote:({children:e})=>(0,a.jsx)("blockquote",{children:e}),h1:({children:e})=>(0,a.jsx)("h1",{children:e}),h2:({children:e})=>(0,a.jsx)("h2",{children:e}),h3:({children:e})=>(0,a.jsx)("h3",{children:e}),h4:({children:e})=>(0,a.jsx)("h4",{children:e}),h5:({children:e})=>(0,a.jsx)("h5",{children:e}),h6:({children:e})=>(0,a.jsx)("h6",{children:e})},marks:{em:({children:e})=>(0,a.jsx)("em",{children:e}),strong:({children:e})=>(0,a.jsx)("strong",{children:e}),code:({children:e})=>(0,a.jsx)("code",{children:e}),underline:({children:e})=>(0,a.jsx)("span",{style:h,children:e}),"strike-through":({children:e})=>(0,a.jsx)("del",{children:e}),link:({children:e,value:t})=>(0,a.jsx)("a",{href:null==t?void 0:t.href,children:e})},list:{number:({children:e})=>(0,a.jsx)("ol",{children:e}),bullet:({children:e})=>(0,a.jsx)("ul",{children:e})},listItem:({children:e})=>(0,a.jsx)("li",{children:e}),hardBreak:()=>(0,a.jsx)("br",{}),unknownType:({value:e,isInline:t})=>{let i=p(e._type);return t?(0,a.jsx)("span",{style:y,children:i}):(0,a.jsx)("div",{style:y,children:i})},unknownMark:({markType:e,children:t})=>(0,a.jsx)("span",{className:`unknown__pt__mark__${e}`,children:t}),unknownList:({children:e})=>(0,a.jsx)("ul",{children:e}),unknownListItem:({children:e})=>(0,a.jsx)("li",{children:e}),unknownBlockStyle:({children:e})=>(0,a.jsx)("p",{children:e})};function A(e,t,i){let a=t[i],r=e[i];return"function"==typeof a||a&&"function"==typeof r?a:a?u(u({},r),a):r}function k({value:e,components:t,listNestingMode:i,onMissingComponent:o=g}){let l=o||S,d=Array.isArray(e)?e:[e],h=(0,r.zL)(d,i||r.RR),m=(0,n.useMemo)(()=>t?function(e,t){let{block:i,list:a,listItem:r,marks:n,types:o}=t,l=c(t,s);return u(u({},e),{},{block:A(e,t,"block"),list:A(e,t,"list"),listItem:A(e,t,"listItem"),marks:A(e,t,"marks"),types:A(e,t,"types")},l)}(_,t):_,[t]),p=(0,n.useMemo)(()=>T(m,l),[m,l]),v=h.map((e,t)=>p({node:e,index:t,isInline:!1,renderNode:p}));return(0,a.jsx)(a.Fragment,{children:v})}let T=(e,t)=>function i(n){let{node:s,index:d,isInline:h}=n,m=s._key||`node-${d}`;return(0,r.qS)(s)?function(r,n,s){let o=r.children.map((e,t)=>i({node:e._key?e:u(u({},e),{},{_key:`li-${n}-${t}`}),index:t,isInline:!1,renderNode:i})),l=e.list,d=("function"==typeof l?l:l[r.listItem])||e.unknownList;if(d===e.unknownList){let e=r.listItem||"bullet";t(f(e),{nodeType:"listStyle",type:e})}return(0,a.jsx)(d,{value:r,index:n,isInline:!1,renderNode:i,children:o},s)}(s,d,m):(0,r.Ii)(s)?function(r,n,s){let l=w({node:r,index:n,isInline:!1,renderNode:i}),d=e.listItem,u=("function"==typeof d?d:d[r.listItem])||e.unknownListItem;if(u===e.unknownListItem){let e=r.listItem||"bullet";t(E(e),{type:e,nodeType:"listItemStyle"})}let h=l.children;if(r.style&&"normal"!==r.style){let{listItem:e}=r;h=i({node:c(r,o),index:n,isInline:!1,renderNode:i})}return(0,a.jsx)(u,{value:r,index:n,isInline:!1,renderNode:i,children:h},s)}(s,d,m):(0,r.tX)(s)?function(n,s,o){let{markDef:l,markType:d,markKey:u}=n,c=e.marks[d]||e.unknownMark,h=n.children.map((e,t)=>i({node:e,index:t,isInline:!0,renderNode:i}));return c===e.unknownMark&&t(v(d),{nodeType:"mark",type:d}),(0,a.jsx)(c,{text:(0,r.pY)(n),value:l,markType:d,markKey:u,renderNode:i,children:h},o)}(s,0,m):s._type in e.types?function(t,r,n,s){let o=e.types[t._type];return o?(0,a.jsx)(o,u({},{value:t,isInline:s,index:r,renderNode:i}),n):null}(s,d,m,h):(0,r.HW)(s)?function(r,n,s,o){let d=w({node:r,index:n,isInline:o,renderNode:i}),{_key:h}=d,m=c(d,l),p=m.node.style||"normal",v=("function"==typeof e.block?e.block:e.block[p])||e.unknownBlockStyle;return v===e.unknownBlockStyle&&t(b(p),{nodeType:"blockStyle",type:p}),(0,a.jsx)(v,u(u({},m),{},{value:m.node,renderNode:i}),s)}(s,d,m,h):(0,r.m9)(s)?function(t,i){if(t.text===`
`){let t=e.hardBreak;return t?(0,a.jsx)(t,{},i):`
`}return t.text}(s,m):function(r,n,s,o){t(p(r._type),{nodeType:"block",type:r._type});let l=e.unknownType;return(0,a.jsx)(l,u({},{value:r,isInline:o,index:n,renderNode:i}),s)}(s,d,m,h)};function w(e){let{node:t,index:i,isInline:a,renderNode:n}=e,s=(0,r.Ic)(t).map((e,t)=>n({node:e,isInline:!0,index:t,renderNode:n}));return{_key:t._key||`block-${i}`,children:s,index:i,isInline:a,node:t}}function S(){}},34071:function(e,t,i){"use strict";function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,a)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach(function(t){var a,r;a=t,r=i[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var a=i.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function n(e){return"span"===e._type&&"text"in e&&"string"==typeof e.text&&(typeof e.marks>"u"||Array.isArray(e.marks)&&e.marks.every(e=>"string"==typeof e))}function s(e){return"string"==typeof e._type&&"@"!==e._type[0]&&(!("markDefs"in e)||!e.markDefs||Array.isArray(e.markDefs)&&e.markDefs.every(e=>"string"==typeof e._key))&&"children"in e&&Array.isArray(e.children)&&e.children.every(e=>"object"==typeof e&&"_type"in e)}function o(e){return s(e)&&"listItem"in e&&"string"==typeof e.listItem&&(typeof e.level>"u"||"number"==typeof e.level)}function l(e){return"@list"===e._type}function d(e){return"@span"===e._type}function u(e){return"@text"===e._type}i.d(t,{HW:function(){return s},Ic:function(){return m},Ii:function(){return o},Kv:function(){return g},RR:function(){return y},m9:function(){return u},pY:function(){return function e(t){let i="";return t.children.forEach(t=>{u(t)?i+=t.text:d(t)&&(i+=e(t))}),i}},qS:function(){return l},tX:function(){return d},zL:function(){return p}});let c=["strong","em","code","underline","strike-through"];function h(e,t,i){if(!n(e)||!e.marks||!e.marks.length)return[];let a=e.marks.slice(),r={};return a.forEach(e=>{r[e]=1;for(let a=t+1;a<i.length;a++){let t=i[a];if(t&&n(t)&&Array.isArray(t.marks)&&-1!==t.marks.indexOf(e))r[e]++;else break}}),a.sort((e,t)=>(function(e,t,i){let a=e[t],r=e[i];if(a!==r)return r-a;let n=c.indexOf(t),s=c.indexOf(i);return n!==s?n-s:t.localeCompare(i)})(r,e,t))}function m(e){var t;let{children:i,markDefs:a=[]}=e;if(!i||!i.length)return[];let r=i.map(h),s={_type:"@span",children:[],markType:"<unknown>"},o=[s];for(let e=0;e<i.length;e++){let s=i[e];if(!s)continue;let l=r[e]||[],d=1;if(o.length>1)for(;d<o.length;d++){let e=(null==(t=o[d])?void 0:t.markKey)||"",i=l.indexOf(e);if(-1===i)break;l.splice(i,1)}let u=(o=o.slice(0,d))[o.length-1];if(u){for(let e of l){let t=a.find(t=>t._key===e),i=t?t._type:e,r={_type:"@span",_key:s._key,children:[],markDef:t,markType:i,markKey:e};u.children.push(r),o.push(r),u=r}if(n(s)){let e=s.text.split(`
`);for(let t=e.length;t-- >1;)e.splice(t,0,`
`);u.children=u.children.concat(e.map(e=>({_type:"@text",text:e})))}else u.children=u.children.concat(s)}}return s.children}function p(e,t){let i;let a=[];for(let s=0;s<e.length;s++){let l=e[s];if(l){var n;if(!o(l)){a.push(l),i=void 0;continue}if(!i){i=v(l,s,t),a.push(i);continue}if(n=i,(l.level||1)===n.level&&l.listItem===n.listItem){i.children.push(l);continue}if((l.level||1)>i.level){let e=v(l,s,t);if("html"===t){let t=i.children[i.children.length-1],a=r(r({},t),{},{children:[...t.children,e]});i.children[i.children.length-1]=a}else i.children.push(e);i=e;continue}if((l.level||1)<i.level){let e=a[a.length-1],r=e&&b(e,l);if(r){(i=r).children.push(l);continue}i=v(l,s,t),a.push(i);continue}if(l.listItem!==i.listItem){let e=a[a.length-1],r=e&&b(e,{level:l.level||1});if(r&&r.listItem===l.listItem){(i=r).children.push(l);continue}i=v(l,s,t),a.push(i);continue}console.warn("Unknown state encountered for block",l),a.push(l)}}return a}function v(e,t,i){return{_type:"@list",_key:`${e._key||`${t}`}-parent`,mode:i,level:e.level||1,listItem:e.listItem,children:[e]}}function b(e,t){let i=t.level||1,a=t.listItem||"normal",r="string"==typeof t.listItem;if(l(e)&&(e.level||1)===i&&r&&(e.listItem||"normal")===a)return e;if(!("children"in e))return;let s=e.children[e.children.length-1];return s&&!n(s)?b(s,t):void 0}let f=/^\s/,E=/^\s/;function g(e){let t=Array.isArray(e)?e:[e],i="";return t.forEach((e,a)=>{if(!s(e))return;let r=!1;e.children.forEach(e=>{n(e)?(i+=(r&&i&&!E.test(i)&&!f.test(e.text)?" ":"")+e.text,r=!1):r=!0}),a!==t.length-1&&(i+=`

`)}),i}let y="html"},88947:function(e,t,i){"use strict";function a(e,...t){let i=e.length-1;return e.slice(0,i).reduce((e,i,a)=>e+i+t[a],"")+e[i]}i.d(t,{Z:function(){return a}})}}]);