(window.webpackJsonp=window.webpackJsonp||[]).push([[1279],{1233:function(e,t,r){},1234:function(e,t,r){},3596:function(e,t,r){"use strict";r.r(t);r(1234),r(364);var n=r(687),a=r.n(n),i=(r(1233),r(688)),o=r.n(i),u=(r(75),r(30),r(31),r(0));u.default.use(o.a),u.default.use(a.a);var c={data:function(){return{editableTabsValue:"2",editableTabs:[{title:"Tab 1",name:"1",content:"Tab 1 content"},{title:"Tab 2",name:"2",content:"Tab 2 content"}],tabIndex:2}},methods:{handleTabsEdit:function(e,t){if("add"===t){var r=++this.tabIndex+"";this.editableTabs.push({title:"New Tab",name:r,content:"New Tab content"}),this.editableTabsValue=r}if("remove"===t){var n=this.editableTabs,a=this.editableTabsValue;a===e&&n.forEach((function(t,r){if(t.name===e){var i=n[r+1]||n[r-1];i&&(a=i.name)}})),this.editableTabsValue=a,this.editableTabs=n.filter((function(t){return t.name!==e}))}}}},l=r(19),f=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-tabs",{attrs:{type:"card",editable:""},on:{edit:e.handleTabsEdit},model:{value:e.editableTabsValue,callback:function(t){e.editableTabsValue=t},expression:"editableTabsValue"}},e._l(e.editableTabs,(function(t,n){return r("el-tab-pane",{key:t.name,attrs:{label:t.title,name:t.name}},[e._v("\n      "+e._s(t.content)+"\n    ")])})),1)],1)}),[],!1,null,null,null);t.default=f.exports},364:function(e,t,r){},369:function(e,t,r){"use strict";t.__esModule=!0,t.isEmpty=t.isEqual=t.arrayEquals=t.looseEqual=t.capitalize=t.kebabCase=t.autoprefixer=t.isFirefox=t.isEdge=t.isIE=t.coerceTruthyValueToArray=t.arrayFind=t.arrayFindIndex=t.escapeRegexpString=t.valueEquals=t.generateId=t.getValueByPath=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.noop=function(){},t.hasOwn=function(e,t){return c.call(e,t)},t.toObject=function(e){for(var t={},r=0;r<e.length;r++)e[r]&&l(t,e[r]);return t},t.getPropByPath=function(e,t,r){for(var n=e,a=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),i=0,o=a.length;i<o-1&&(n||r);++i){var u=a[i];if(!(u in n)){if(r)throw new Error("please transfer a valid prop path to form item!");break}n=n[u]}return{o:n,k:a[i],v:n?n[a[i]]:null}},t.rafThrottle=function(e){var t=!1;return function(){for(var r=this,n=arguments.length,a=Array(n),i=0;i<n;i++)a[i]=arguments[i];t||(t=!0,window.requestAnimationFrame((function(n){e.apply(r,a),t=!1})))}},t.objToArray=function(e){if(Array.isArray(e))return e;return d(e)?[]:[e]};var a,i=r(0),o=(a=i)&&a.__esModule?a:{default:a},u=r(447);var c=Object.prototype.hasOwnProperty;function l(e,t){for(var r in t)e[r]=t[r];return e}t.getValueByPath=function(e,t){for(var r=(t=t||"").split("."),n=e,a=null,i=0,o=r.length;i<o;i++){var u=r[i];if(!n)break;if(i===o-1){a=n[u];break}n=n[u]}return a};t.generateId=function(){return Math.floor(1e4*Math.random())},t.valueEquals=function(e,t){if(e===t)return!0;if(!(e instanceof Array))return!1;if(!(t instanceof Array))return!1;if(e.length!==t.length)return!1;for(var r=0;r!==e.length;++r)if(e[r]!==t[r])return!1;return!0},t.escapeRegexpString=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return String(e).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")};var f=t.arrayFindIndex=function(e,t){for(var r=0;r!==e.length;++r)if(t(e[r]))return r;return-1},s=(t.arrayFind=function(e,t){var r=f(e,t);return-1!==r?e[r]:void 0},t.coerceTruthyValueToArray=function(e){return Array.isArray(e)?e:e?[e]:[]},t.isIE=function(){return!o.default.prototype.$isServer&&!isNaN(Number(document.documentMode))},t.isEdge=function(){return!o.default.prototype.$isServer&&navigator.userAgent.indexOf("Edge")>-1},t.isFirefox=function(){return!o.default.prototype.$isServer&&!!window.navigator.userAgent.match(/firefox/i)},t.autoprefixer=function(e){if("object"!==(void 0===e?"undefined":n(e)))return e;var t=["ms-","webkit-"];return["transform","transition","animation"].forEach((function(r){var n=e[r];r&&n&&t.forEach((function(t){e[t+r]=n}))})),e},t.kebabCase=function(e){var t=/([^-])([A-Z])/g;return e.replace(t,"$1-$2").replace(t,"$1-$2").toLowerCase()},t.capitalize=function(e){return(0,u.isString)(e)?e.charAt(0).toUpperCase()+e.slice(1):e},t.looseEqual=function(e,t){var r=(0,u.isObject)(e),n=(0,u.isObject)(t);return r&&n?JSON.stringify(e)===JSON.stringify(t):!r&&!n&&String(e)===String(t)}),b=t.arrayEquals=function(e,t){if(t=t||[],(e=e||[]).length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!s(e[r],t[r]))return!1;return!0},d=(t.isEqual=function(e,t){return Array.isArray(e)&&Array.isArray(t)?b(e,t):s(e,t)},t.isEmpty=function(e){if(null==e)return!0;if("boolean"==typeof e)return!1;if("number"==typeof e)return!e;if(e instanceof Error)return""===e.message;switch(Object.prototype.toString.call(e)){case"[object String]":case"[object Array]":return!e.length;case"[object File]":case"[object Map]":case"[object Set]":return!e.size;case"[object Object]":return!Object.keys(e).length}return!1})},447:function(e,t,r){"use strict";t.__esModule=!0,t.isString=function(e){return"[object String]"===Object.prototype.toString.call(e)},t.isObject=function(e){return"[object Object]"===Object.prototype.toString.call(e)},t.isHtmlElement=function(e){return e&&e.nodeType===Node.ELEMENT_NODE};t.isFunction=function(e){return e&&"[object Function]"==={}.toString.call(e)},t.isUndefined=function(e){return void 0===e},t.isDefined=function(e){return null!=e}}}]);