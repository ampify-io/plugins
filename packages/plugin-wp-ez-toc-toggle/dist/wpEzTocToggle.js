window.wpEzTocToggle=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),t.default=(e={})=>{const t=document.querySelector("#ez-toc-container").querySelector("ul.ez-toc-list");if(!t)return;t.removeAttribute("style");const n=`\n    .__ampify__ez_toc { width: 0; max-height: 0; transition: all 400ms ease-in-out } \n    .__ampify__ez_toc_show {\n        width: ${t.offsetWidth}px;\n        max-height: 100vh;\n    }`,o=document.createElement("style");o.innerHTML=n,document.head.appendChild(o),t.classList.add("__ampify__ez_toc"),t.setAttribute("data-amp-bind-class",`'${t.className} ' + (ezTocToggle ? '__ampify__ez_toc_show': '')`),t.setAttribute("ampify-keep",""),document.querySelector(".ez-toc-toggle").setAttribute("on","tap:AMP.setState({ezTocToggle: !ezTocToggle})")}}]);