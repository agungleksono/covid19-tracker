!function(n){var r={};function t(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=r,t.d=function(n,r,e){t.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,r){if(1&r&&(n=t(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(t.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)t.d(e,o,function(r){return n[r]}.bind(null,o));return e},t.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(r,"a",r),r},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="",t(t.s=5)}([function(n,r,t){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t=function(n,r){var t=n[1]||"",e=n[3];if(!e)return t;if(r&&"function"==typeof btoa){var o=(c=e,a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(u," */")),i=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([o]).join("\n")}var c,a,u;return[t].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(n,t,e){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(e)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var a=0;a<n.length;a++){var u=[].concat(n[a]);e&&o[u[0]]||(t&&(u[2]?u[2]="".concat(t," and ").concat(u[2]):u[2]=t),r.push(u))}},r}},function(n,r,t){var e=t(2),o=t(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};e(o,i);n.exports=o.locals||{}},function(n,r,t){"use strict";var e,o=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},i=function(){var n={};return function(r){if(void 0===n[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[r]=t}return n[r]}}(),c=[];function a(n){for(var r=-1,t=0;t<c.length;t++)if(c[t].identifier===n){r=t;break}return r}function u(n,r){for(var t={},e=[],o=0;o<n.length;o++){var i=n[o],u=r.base?i[0]+r.base:i[0],f=t[u]||0,l="".concat(u," ").concat(f);t[u]=f+1;var p=a(l),s={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(c[p].references++,c[p].updater(s)):c.push({identifier:l,updater:b(s,r),references:1}),e.push(l)}return e}function f(n){var r=document.createElement("style"),e=n.attributes||{};if(void 0===e.nonce){var o=t.nc;o&&(e.nonce=o)}if(Object.keys(e).forEach((function(n){r.setAttribute(n,e[n])})),"function"==typeof n.insert)n.insert(r);else{var c=i(n.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(r)}return r}var l,p=(l=[],function(n,r){return l[n]=r,l.filter(Boolean).join("\n")});function s(n,r,t,e){var o=t?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(n.styleSheet)n.styleSheet.cssText=p(r,o);else{var i=document.createTextNode(o),c=n.childNodes;c[r]&&n.removeChild(c[r]),c.length?n.insertBefore(i,c[r]):n.appendChild(i)}}function d(n,r,t){var e=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}var h=null,g=0;function b(n,r){var t,e,o;if(r.singleton){var i=g++;t=h||(h=f(r)),e=s.bind(null,t,i,!1),o=s.bind(null,t,i,!0)}else t=f(r),e=d.bind(null,t,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return e(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;e(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=o());var t=u(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var e=0;e<t.length;e++){var o=a(t[e]);c[o].references--}for(var i=u(n,r),f=0;f<t.length;f++){var l=a(t[f]);0===c[l].references&&(c[l].updater(),c.splice(l,1))}t=i}}}},function(n,r,t){"use strict";t.r(r);var e=t(0),o=t.n(e)()(!1);o.push([n.i,"* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nbody {\r\n    font-family: sans-serif;\r\n}\r\n\r\nnav {\r\n    background: linear-gradient(#00ffcc, #00e6b8 70%);\r\n    overflow: hidden;\r\n    width: 100%;\r\n    height: 80px;\r\n    box-shadow: 0 0px 7px 0px grey;\r\n    position: fixed;\r\n    z-index: 1;\r\n}\r\n\r\n.checkbtn {\r\n    font-size: 30px;\r\n    color: white;\r\n    float: right;\r\n    line-height: 80px;\r\n    margin-right: 40px;\r\n    cursor: pointer;\r\n    display: none;\r\n}\r\n\r\n#check {\r\n    display: none;\r\n}\r\n\r\n.logo {\r\n    width: 250px;\r\n    float: left;\r\n    margin-left: 40px;\r\n    margin-top: 25px;\r\n}\r\n\r\nnav ul {\r\n    list-style-type: none;\r\n    float: right;\r\n    margin-right: 70px;\r\n}\r\n\r\nnav ul li {\r\n    display: inline-block;\r\n    padding: 30px 25px;\r\n}\r\n\r\nnav li:hover {\r\n    background-color:#00e699;\r\n}\r\n\r\nnav a {\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n    color: #3d3d29;\r\n}\r\n\r\n.top-content {\r\n    width: 100%;\r\n    height: 600px;\r\n    background: linear-gradient(#00ffcc, #00e6b8);\r\n    overflow: auto;\r\n}\r\n\r\n.top-content h1 {\r\n    padding-top: 150px;\r\n    text-align: center;\r\n    color: #3d3d29;\r\n}\r\n\r\n.box-case-cont {\r\n    width: 100%;\r\n    margin-top: 80px;\r\n}\r\n\r\n.box-case {\r\n    width: 250px;\r\n    height: 150px;\r\n    float: left;\r\n    margin-left: 150px;\r\n    border-radius: 10px;\r\n    box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, .3);\r\n}\r\n\r\n.box-case img {\r\n    width: 50px;\r\n    margin-left: 170px;\r\n}\r\n\r\n#box-positif {\r\n    background: linear-gradient(#0099ff, #007acc);\r\n}\r\n\r\n#box-recovered {\r\n    background: linear-gradient(#ffcc00, #e6b800);\r\n}\r\n\r\n#box-dead {\r\n    background: linear-gradient(#ff3333, #ff0000);\r\n}\r\n\r\n.bottom-content {\r\n    width: 70%;\r\n    height: 800px;\r\n    background-color: white;\r\n    margin-top: -70px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 30px;\r\n    border-radius: 20px;\r\n    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, .3);\r\n}\r\n\r\n.box-case h4 {\r\n    color: #3d3d29;\r\n    font-size: 18px;\r\n    font-weight: bold;\r\n    margin-top: 20px;\r\n    margin-left: 20px;\r\n}\r\n\r\n.box-case h2 {\r\n    color: white;\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    margin-top: 15px;\r\n    margin-left: 20px;\r\n}\r\n\r\n.bottom-content h2 {\r\n    text-align: center;\r\n    padding: 15px 0 15px 0;\r\n    color: #3d3d29;\r\n}\r\n\r\n.table-cont {\r\n    width: 80%;\r\n    height: 600px;\r\n    margin: 20px auto;\r\n    overflow-y: auto;\r\n}\r\n\r\n.table-cont table {\r\n    border-collapse: collapse;\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    font-size: 14px;\r\n    color: #3d3d29;\r\n}\r\n\r\n.table-cont th {\r\n    position: sticky;\r\n    top: 0;\r\n    background-color: #ccfff5;\r\n}\r\n\r\n.table-cont tbody {\r\n    height: 500px;\r\n}\r\n\r\n.table-cont th, .table-cont td {\r\n    text-align: left;\r\n    padding: 12px;\r\n}\r\n\r\n.table-cont tr:nth-child(odd) {\r\n    background-color: #ccfff5;\r\n}\r\n\r\nmy-footer {\r\n    background-color: #00e6b8;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 40px;\r\n    display: block;\r\n}\r\n\r\n@media screen and (max-width: 1000px) {\r\n    .checkbtn {\r\n        display: block;\r\n    }\r\n\r\n    ul {\r\n        position: fixed;\r\n        width: 100%;\r\n        height: 200px;\r\n        background-color: #0aaf8e;\r\n        top: 80px;\r\n        left: -100%;\r\n        text-align: center;\r\n        transition: all .5s;\r\n    }\r\n\r\n    nav ul li {\r\n        display: block;\r\n        padding: 15px;\r\n    }\r\n\r\n    .logo {\r\n        width: 130px;\r\n        margin-left: 20px;\r\n        margin-top: 33px;\r\n    }\r\n\r\n    nav a {\r\n        color: white;\r\n        font-size: 14px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    #check:checked ~ ul {\r\n        left: 0;\r\n    }\r\n\r\n    .top-content {\r\n        width: 100%;\r\n        height: 780px;\r\n    }\r\n    \r\n    .top-content h1 {\r\n        padding-top: 130px;\r\n        font-size: 25px;\r\n    }\r\n    \r\n    .box-case-cont {\r\n        width: 80%;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .box-case {\r\n        width: 50%;\r\n        height: 160px;\r\n        margin-top: 20px;\r\n        margin-left: 190px;\r\n    }\r\n\r\n    .box-case img {\r\n        margin-left: 260px;\r\n    }\r\n    \r\n    .bottom-content {\r\n        width: 80%;\r\n        height: 800px;\r\n        margin-top: -50px;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        margin-bottom: 30px;\r\n    }\r\n    \r\n    .box-case h4 {\r\n        font-size: 15px;\r\n    }\r\n    \r\n    .box-case h2 {\r\n        font-size: 30px;\r\n    }\r\n\r\n    my-footer {\r\n        font-size: 12px;\r\n        padding: 30px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 750px) {\r\n    .top-content {\r\n        height: 720px;\r\n    }\r\n\r\n    .box-case {\r\n        width: 50%;\r\n        height: 140px;\r\n        margin-top: 20px;\r\n        margin-left: 140px;\r\n    }\r\n\r\n    .box-case img {\r\n        margin-left: 200px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n    .top-content {\r\n        height: 720px;\r\n    }\r\n\r\n    .top-content h1 {\r\n        font-size: 22px;\r\n    }\r\n\r\n    .box-case {\r\n        width: 50%;\r\n        height: 140px;\r\n        margin-top: 20px;\r\n        margin-left: 110px;\r\n    }\r\n\r\n    .box-case img {\r\n        margin-left: 150px;\r\n    }\r\n\r\n    .box-case h4 {\r\n        font-size: 14px;\r\n        font-weight: bold;\r\n    }\r\n    \r\n    .box-case h2 {\r\n        font-size: 25px;\r\n        font-weight: bold;\r\n    }\r\n\r\n}",""]),r.default=o},function(n,r){function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function e(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}function o(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function i(n,r){return!r||"object"!==t(r)&&"function"!=typeof r?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):r}function c(n){var r="function"==typeof Map?new Map:void 0;return(c=function(n){if(null===n||(t=n,-1===Function.toString.call(t).indexOf("[native code]")))return n;var t;if("function"!=typeof n)throw new TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(n))return r.get(n);r.set(n,e)}function e(){return a(n,arguments,l(this).constructor)}return e.prototype=Object.create(n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),f(e,n)})(n)}function a(n,r,t){return(a=u()?Reflect.construct:function(n,r,t){var e=[null];e.push.apply(e,r);var o=new(Function.bind.apply(n,e));return t&&f(o,t.prototype),o}).apply(null,arguments)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function f(n,r){return(f=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n})(n,r)}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var p=function(n){!function(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&f(n,r)}(d,n);var r,t,c,a,p,s=(r=d,t=u(),function(){var n,e=l(r);if(t){var o=l(this).constructor;n=Reflect.construct(e,arguments,o)}else n=e.apply(this,arguments);return i(this,n)});function d(){return e(this,d),s.apply(this,arguments)}return c=d,(a=[{key:"connectedCallback",value:function(){this.render()}},{key:"render",value:function(){this.innerHTML="<p>Submission Fundamental Web &#169; 2020, Agung Dwi Leksono</p>"}}])&&o(c.prototype,a),p&&o(c,p),d}(c(HTMLElement));customElements.define("my-footer",p)},function(n,r,t){"use strict";t.r(r);t(1),t(4);(function(){fetch("https://disease.sh/v3/covid-19/all").then((function(n){if(!n.ok)throw Error("Error");return n.json()})).then((function(n){document.querySelector("#positiv-data").innerHTML="".concat(n.cases),document.querySelector("#recovered-data").innerHTML="".concat(n.recovered),document.querySelector("#death-data").innerHTML="".concat(n.deaths)})).catch((function(n){console.log(n)})),fetch("https://disease.sh/v3/covid-19/countries").then((function(n){if(!n.ok)throw Error("Error");return n.json()})).then((function(n){var r=document.querySelector("#data-country");n.forEach((function(n){r.innerHTML+='\n                <tr>\n                    <td><img src="'.concat(n.countryInfo.flag,'" width="20px"> ').concat(n.country,"</td>\n                    <td>").concat(n.cases,"</td>\n                    <td>").concat(n.active,"</td>\n                    <td>").concat(n.recovered,"</td>\n                    <td>").concat(n.deaths,"</td>\n                </tr>\n                ")}))})).catch((function(n){console.log(n)}))})()}]);