(function(g){var f=window||{};f.define&&f.define.amd?f.define([],g):f.exports?f.exports=g():f.doc=g()})(function(){var g=function(b){return"string"===typeof b},f=function(b){return b&&"[object Function]"==={}.toString.call(b)},k=function(b,a){if(!g(b))return"";var d=b?b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""):b||"";return d&&a?d.replace(/\r?\n|\r/g," ").replace(/\s\s+|\r/g," "):d},e;e=function(b){var a=(g(b)?document.getElementById(b):b)||null;if(a&&a instanceof HTMLElement){var d=a.classList;a.hasClass=
function(a){return(a=k(a,!0))?d.contains(a):!1};a.addClass=function(c){c=k(c,!0);if(!c)return!1;var b=c.split(" ");1<b.length?b.forEach(function(a){d.add(a)}):d.add(c);return a};a.removeClass=function(c){c=k(c,!0);if(!c)return!1;var b=c.split(" ");1<b.length?b.forEach(function(a){d.remove(a)}):d.remove(c);return a};a.toggleClass=function(c){c=k(c,!0);if(!c)return!1;var b=c.split(" ");1<b.length?b.forEach(function(a){d.toggle(a)}):d.toggle(c);return a};a.setProperty=function(c){for(var b in c)if(""!==
c[b]){var d=c[b];(g(d)||"number"===typeof d)&&a.setAttribute(b,d)}return a};a.setStyle=function(c){var b,d,e=[];if(void 0===c||"object"!==typeof c)g(c)&&(e=c.split(";"));else for(var f in c)if(""!==c[f]&&(d=c[f],g(d)||"number"===typeof d)){b=f;var h=b.match(/^([a-z]+)([A-Z]{1})([a-z]+)$/);h&&0===h.index&&(b=[],b.push(h[1]),b.push("-"),b.push(h[2]),b.push(h[3]),b=b.join("").toLowerCase());"number"===typeof d&&(d+="px");e.push([b,d].join(":"))}if(c=a.getAttribute("style"))c=c.split(";"),e=e.concat(c);
e.push("");a.setAttribute("style",e.join(";"));return a};a.empty=function(){a.innerHTML="";return a};a.html=function(b){if(void 0===b)return a.innerHTML;a.innerHTML=b;return a};a.destroy=function(){a.parentNode&&a.parentNode.removeChild(a)}}return a};var l=function(){var b=function(a){a=a.toLowerCase();return/gecko/i.test(a)}(navigator.userAgent);return{on:function(a,d,c){c&&f(c)&&(a=g(a)?e(a):a)&&a instanceof HTMLElement&&("wheel"===d&&(d=b?"DOMMouseScroll":"mousewheel"),a.addEventListener?a.addEventListener(d,
c,!1):a.attachEvent&&a.attachEvent("on"+d,c))},off:function(a,b,c){c&&f(c)&&(a=g(a)?e(a):a)&&a instanceof HTMLElement&&(a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c))},simulate:function(a,b){var c,f=g(a)?e(a):a;document.createEventObject?(c=document.createEventObject(),f.fireEvent("on"+b,c)):(c=document.createEvent("HTMLEvents"),c.initEvent(b,!0,!0),f.dispatchEvent(c))},stop:function(a){a.cancelBubble=!0;a.stopPropagation&&a.stopPropagation();a.preventDefault&&
a.preventDefault();return!1},locate:function(a){a=a||window.event;(a=a.target||a.srcElement)&&3===a.nodeType&&(a=a.parentNode);return e(a)}}}();return{ready:function(b){"loading"!==document.readyState?setTimeout(b,0):document.addEventListener("DOMContentLoaded",b)},one:function(b){var a;(b=document.querySelector(b))&&(a=e(b));return a},all:function(b){var a=[];if(b=document.querySelectorAll(b))for(var d=0;d<b.length;d++)a.push(e(b[d]));return a},get:e,add:function(b,a){var d=a?e(a):document.body,
c=b instanceof HTMLElement?b:document.createElement(b);d.appendChild(c);return e(c)},create:function(b){return e(document.createElement(b))},Event:l}});