(window.webpackJsonp=window.webpackJsonp||[]).push([[1524],{2892:function(t,e,a){"use strict";a.r(e);var i=a(477),r=a(47),s={name:"MyDvAdorn10",mixins:[a(956).a]},d=a(19),l=Object(d.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Box",t._g(t._b({staticClass:"my-dv-adorn-10",class:t.classes,style:t.styles,attrs:{"default-width":"600px","default-height":"20px"}},"Box",t.$attrs,!1),t.$listeners),[a("svg",{attrs:{width:t.width+"px",height:t.height+"px"}},[a("polyline",{attrs:{stroke:t.dark,"stroke-width":"2",points:"0, "+t.height/2+" "+t.width+", "+t.height/2}}),t._v(" "),a("polyline",{attrs:{stroke:t.light,"stroke-width":"2",points:"5, "+t.height/2+" "+(.2*t.width-3)+", "+t.height/2,"stroke-dasharray":"0, "+.2*t.width,fill:"freeze"}},[a("animate",{attrs:{id:"a2"+t._uid,attributeName:"stroke-dasharray",values:"0, "+.2*t.width+";"+.2*t.width+", 0;",dur:"3s",begin:"a1"+t._uid+".end",fill:"freeze"}}),t._v(" "),a("animate",{attrs:{attributeName:"stroke-dasharray",values:.2*t.width+", 0;0, "+.2*t.width,dur:"0.01s",begin:"a7"+t._uid+".end",fill:"freeze"}})]),t._v(" "),a("polyline",{attrs:{stroke:t.light,"stroke-width":"2",points:.2*t.width+3+", "+t.height/2+" "+(.8*t.width-3)+", "+t.height/2,"stroke-dasharray":"0, "+.6*t.width}},[a("animate",{attrs:{id:"a4"+t._uid,attributeName:"stroke-dasharray",values:"0, "+.6*t.width+";"+.6*t.width+", 0",dur:"3s",begin:"a3"+t._uid+".end + 1s",fill:"freeze"}}),t._v(" "),a("animate",{attrs:{attributeName:"stroke-dasharray",values:.6*t.width+", 0;0, "+.6*t.width,dur:"0.01s",begin:"a7"+t._uid+".end",fill:"freeze"}})]),t._v(" "),a("polyline",{attrs:{stroke:t.light,"stroke-width":"2",points:.8*t.width+3+", "+t.height/2+" "+(t.width-5)+", "+t.height/2,"stroke-dasharray":"0, "+.2*t.width}},[a("animate",{attrs:{id:"a6"+t._uid,attributeName:"stroke-dasharray",values:"0, "+.2*t.width+";"+.2*t.width+", 0",dur:"3s",begin:"a5"+t._uid+".end + 1s",fill:"freeze"}}),t._v(" "),a("animate",{attrs:{attributeName:"stroke-dasharray",values:.2*t.width+", 0;0, "+.3*t.width,dur:"0.01s",begin:"a7"+t._uid+".end",fill:"freeze"}})]),t._v(" "),a("circle",{attrs:{cx:"2",cy:t.height/2,r:"2",fill:t.dark}},[a("animate",{attrs:{id:"a1"+t._uid,attributeName:"fill",values:t.dark+";"+t.light,begin:"0s;a7"+t._uid+".end",dur:"0.3s",fill:"freeze"}})]),t._v(" "),a("circle",{attrs:{cx:.2*t.width,cy:t.height/2,r:"2",fill:t.dark}},[a("animate",{attrs:{id:"a3"+t._uid,attributeName:"fill",values:t.dark+";"+t.light,begin:"a2"+t._uid+".end",dur:"0.3s",fill:"freeze"}}),t._v(" "),a("animate",{attrs:{attributeName:"fill",values:t.dark+";"+t.light,dur:"0.01s",begin:"a2"+t._uid+".end",fill:"freeze"}})]),t._v(" "),a("circle",{attrs:{cx:.8*t.width,cy:t.height/2,r:"2",fill:t.dark}},[a("animate",{attrs:{id:"a5"+t._uid,attributeName:"fill",values:t.dark+";"+t.light,begin:"a4"+t._uid+".end",dur:"0.3s",fill:"freeze"}}),t._v(" "),a("animate",{attrs:{attributeName:"fill",values:t.dark+";"+t.light,dur:"0.01s",begin:"a7"+t._uid+".end",fill:"freeze"}})]),t._v(" "),a("circle",{attrs:{cx:t.width-2,cy:t.height/2,r:"2",fill:t.dark}},[a("animate",{attrs:{id:"a7"+t._uid,attributeName:"fill",values:t.dark+";"+t.light,begin:"a6"+t._uid+".end",dur:"0.3s",fill:"freeze"}}),t._v(" "),a("animate",{attrs:{attributeName:"fill",values:t.dark+";"+t.light,dur:"0.01s",begin:"a7"+t._uid+".end",fill:"freeze"}})])])])}),[],!1,null,null,null).exports,n=Object(r.a)(l),u=a(0);u.default.use(n),u.default.use(i.a);var h={},f=Object(d.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"600px"}},[e("my-dv-page",{attrs:{target:"parent",fit:""}},[e("my-dv-adorn10",{attrs:{"x-align":"center","y-align":"middle"}})],1)],1)}),[],!1,null,null,null);e.default=f.exports},956:function(t,e,a){"use strict";a(201);var i=a(422),r=a(501),s=a(733);e.a={mixins:[r.a,s.a],inheritAttrs:!1,components:{Box:i.a},props:{duration:{type:Number,default:3},reverse:Boolean,opacity:{type:Number,default:1}},computed:{classes:function(){return{"my-dv-adorn":!0,"is-reverse":this.reverse}},styles:function(){return{opacity:this.opacity}}}}}}]);