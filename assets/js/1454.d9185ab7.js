(window.webpackJsonp=window.webpackJsonp||[]).push([[1454],{2372:function(t,n,e){},2690:function(t,n,e){"use strict";e(2372)},3115:function(t,n,e){"use strict";e.r(n);e(677),e(364);var a=e(540),r=e.n(a),s=(e(692),e(545)),o=e.n(s),u=(e(1803),e(117),e(2183)),l=(e(543),e(544)),c=e(0),p={components:{MyDrag:l.a,MyDrop:u.a},data:function(){return{text:"请放置在这里"}},methods:{handleDrop:function(t){this.$message.info("放置在："+t)}}};c.default.use(o.a),c.default.use(r.a),c.default.use(l.a),c.default.use(u.a);var d=p,i=(e(2690),e(19)),f=Object(i.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("el-row",[e("el-col",{attrs:{span:12}},[e("my-drag",[t._v("我是不能被放置的")])],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("my-drop",{staticClass:"parent",attrs:{prevent:""},on:{drop:function(n){return t.handleDrop("parent")}}},[t._v("\n             parent\n          "),e("my-drop",{staticClass:"child",attrs:{prevent:""},on:{drop:function(n){return t.handleDrop("child")}}},[t._v("\n                          child\n            ")])],1)],1)],1)}),[],!1,null,"2214bd6e",null);n.default=f.exports}}]);