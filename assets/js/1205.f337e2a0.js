(window.webpackJsonp=window.webpackJsonp||[]).push([[1205],{3407:function(e,t,n){"use strict";n.r(t);n(642),n(364);var s=n(700),a=n.n(s),i=(n(647),n(704)),r=n.n(i),o=n(0);o.default.use(r.a),o.default.use(a.a);var _={data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄"}]}}},l=n(19),c=Object(l.a)(_,(function(){var e=this.$createElement,t=this._self._c||e;return t("el-table",{staticStyle:{width:"100%"},attrs:{data:this.tableData,stripe:""}},[t("el-table-column",{attrs:{prop:"date",label:"日期",width:"180"}}),this._v(" "),t("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),this._v(" "),t("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)}),[],!1,null,null,null);t.default=c.exports},364:function(e,t,n){},366:function(e,t,n){"use strict";t.__esModule=!0,t.removeResizeListener=t.addResizeListener=void 0;var s,a=n(395),i=(s=a)&&s.__esModule?s:{default:s};var r="undefined"==typeof window,o=function(e){var t=e,n=Array.isArray(t),s=0;for(t=n?t:t[Symbol.iterator]();;){var a;if(n){if(s>=t.length)break;a=t[s++]}else{if((s=t.next()).done)break;a=s.value}var i=a.target.__resizeListeners__||[];i.length&&i.forEach((function(e){e()}))}};t.addResizeListener=function(e,t){r||(e.__resizeListeners__||(e.__resizeListeners__=[],e.__ro__=new i.default(o),e.__ro__.observe(e)),e.__resizeListeners__.push(t))},t.removeResizeListener=function(e,t){e&&e.__resizeListeners__&&(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),e.__resizeListeners__.length||e.__ro__.disconnect())}},370:function(e,t,n){"use strict";function s(e,t,n){this.$children.forEach((function(a){a.$options.componentName===e?a.$emit.apply(a,[t].concat(n)):s.apply(a,[e,t].concat([n]))}))}t.__esModule=!0,t.default={methods:{dispatch:function(e,t,n){for(var s=this.$parent||this.$root,a=s.$options.componentName;s&&(!a||a!==e);)(s=s.$parent)&&(a=s.$options.componentName);s&&s.$emit.apply(s,[t].concat(n))},broadcast:function(e,t,n){s.call(this,e,t,n)}}}},532:function(e,t,n){"use strict";t.__esModule=!0;n(369);t.default={mounted:function(){},methods:{getMigratingConfig:function(){return{props:{},events:{}}}}}},642:function(e,t,n){},647:function(e,t,n){}}]);