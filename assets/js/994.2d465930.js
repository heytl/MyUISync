(window.webpackJsonp=window.webpackJsonp||[]).push([[994],{1033:function(t,e,i){},1329:function(t,e,i){},1337:function(t,e,i){"use strict";var n=i(47),s=(i(201),i(366)),r={name:"MySlideLayout",props:{type:{type:String,default:"horizontal",validator:function(t){return"horizontal"===t||"vertical"===t}},edageWidth:{type:Number,default:50,validator:function(t){return t>=5&&t<=95}},range:{type:Array,default:function(){return[5,95]},validator:function(t){return 2===t.length&&t[1]>t[0]&&t[1]<=95&&t[0]>=5}}},data:function(){return{defaultLength:0,minLength:0,maxLength:0,finish:!1}},computed:{},watch:{type:function(){this.setLayout()},edageWidth:function(){this.setLayout()},range:function(){this.setLayout()}},methods:{setLayout:function(){var t="horizontal"===this.type?this.$refs.body.offsetWidth:this.$refs.body.offsetHeight,e=this.edageWidth/100,i=Math.round(t*e),n=this.range[1]/100,s=this.range[0]/100,r=Math.round(t*n),a=Math.round(t*s);this.defaultLength=i,this.maxLength=r,this.minLength=a,this.finish=!0,this.$emit("on-ready")},resizeHandle:function(){this.$emit("on-resize",this.$refs.resizeBar)}},created:function(){},mounted:function(){var t=this;setTimeout((function(){t.setLayout()}),200),Object(s.addResizeListener)(this.$el,this.setLayout),Object(s.addResizeListener)(this.$refs.resizeBar,this.resizeHandle)},beforeDestroy:function(){Object(s.removeResizeListener)(this.$el,this.setLayout),Object(s.removeResizeListener)(this.$refs.resizeBar,this.resizeHandle)}},a=i(19),o=Object(a.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"body",class:{"my-slide-layout":!0,horizontal:"horizontal"===t.type,vertical:"vertical"===t.type}},["horizontal"===t.type?i("div",{staticClass:"left-warp"},[i("div",{ref:"resizeBar",staticClass:"resize-bar",style:{width:t.defaultLength+"px","max-width":t.maxLength+"px","min-Width":t.minLength+"px"},on:{resize:t.resizeHandle}}),t._v(" "),i("div",{staticClass:"resize-line"}),t._v(" "),i("div",{staticClass:"resize-save"},[t.finish?i("div",{staticClass:"content-warp"},[t._t("odd")],2):t._e()])]):t._e(),t._v(" "),"horizontal"===t.type?i("div",{staticClass:"right-warp"},[t.finish?i("div",{staticClass:"content-warp"},[t._t("even")],2):t._e()]):t._e(),t._v(" "),"vertical"===t.type?i("div",{staticClass:"top-warp"},[i("div",{staticClass:"resize-bar",staticStyle:{height:"250px","max-height":"450px"},style:{height:t.defaultLength+"px","max-height":t.maxLength+"px","min-height":t.minLength+"px"}}),t._v(" "),i("div",{staticClass:"resize-line"}),t._v(" "),i("div",{staticClass:"resize-save"},[t.finish?i("div",{staticClass:"content-warp"},[t._t("odd")],2):t._e()])]):t._e(),t._v(" "),"vertical"===t.type?i("div",{staticClass:"bottom-warp"},[t.finish?i("div",{staticClass:"content-warp"},[t._t("even")],2):t._e()]):t._e()])}),[],!1,null,null,null).exports;e.a=Object(n.a)(o)},2225:function(t,e,i){},2226:function(t,e,i){},2262:function(t,e,i){"use strict";var n=i(47),s=(i(201),i(77),i(75),i(118)),r=i(908),a=i(899),o={mixins:[r.a],components:{},props:{data:{type:Array,default:function(){return[]}},margin:{type:Number,default:5}},data:function(){return{screens:{},colArr:[],dataList:[]}},computed:{maxHeight:function(){if(this.colArr.length){var t=this._findMaxHeight(this.colArr);return this.colArr[t].height}return 0}},watch:{currentColumn:{immediate:!0,handler:function(t){var e=this;setTimeout((function(){e.setItemsPos()}),400)}},data:function(){var t=this;this.$nextTick((function(){t.setItemsPos()}))},margin:function(){var t=this;this.$nextTick((function(){t.setItemsPos()}))}},methods:{getColData:function(){this.colArr=this.$refs.colWarp.map((function(t){return{width:t.offsetWidth,height:0,left:t.offsetLeft}}))},sortItems:function(){var t=this;this.dataList=this.data.map((function(e,i){var n=t._findMinHeight(t.colArr),s=t.colArr[n].height,r=t.colArr[n].width,a=r*e.height/e.width;return e.$width=r,e.$height=a,e.$top=s,e.$left=t.colArr[n].left,e.$index=i,t.colArr[n].height+=a+2*t.margin,e}))},setItemWarpStyle:function(t){return{width:t.$width+"px",height:t.$height+"px",left:t.$left+"px",top:t.$top+"px"}},setItemsPos:function(){this.getColData(),this.sortItems()},setItemsPosForEl:function(){this.listenEl&&this.setItemsPos()},_findMinHeight:function(t){var e=t[0].height,i=0;return t.forEach((function(t,n){t.height<e&&(e=t.height,i=n)})),i},_findMaxHeight:function(t){var e=t[0].height,i=0;return t.forEach((function(t,n){t.height>=e&&(e=t.height,i=n)})),i}},created:function(){},mounted:function(){this.setItemPosProxy=Object(s.c)(this.setItemsPos,300),window.addEventListener("resize",this.setItemPosProxy),this.setItemPosForElProxy=Object(s.c)(this.setItemsPosForEl,300),Object(a.a)(this.elDom,this.setItemPosForElProxy)},beforeDestroy:function(){window.removeEventListener("resize",this.setItemPosProxy),Object(a.b)(this.elDom,this.setItemPosForElProxy)}},h=i(19),l=Object(h.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-v-water-fall",style:{height:t.maxHeight+"px"}},[t._l(t.currentColumn,(function(e){return i("div",{key:"col_"+e,ref:"colWarp",refInFor:!0,staticClass:"col-warp",style:{"margin-left":t.margin+"px","margin-right":t.margin+"px"}})})),t._v(" "),t._t("default",null,{scope:{data:t.data}})],2)}),[],!1,null,null,null).exports,u=i(46),c={components:{},props:{data:{type:Array,default:function(){return[]}},itemHeight:{type:Number,default:200},margin:{type:Number,default:5}},data:function(){return{}},computed:{dataProxy:function(){return this.data.map((function(t,e){return Object(u.a)(Object(u.a)({},t),{},{$width:t.width,$height:t.height,$index:t.index})}))}},watch:{itemHeight:function(t){var e=this;this.$children.forEach((function(i){i.itemHeight=t,i.margin=e.margin}))},margin:function(t){var e=this;this.$children.forEach((function(i){i.itemHeight=e.itemHeight,i.margin=t}))}},methods:{itemWarpStyle:function(t){return{margin:this.margin+"px",width:t.width*this.itemHeight/t.height+"px",flexGrow:t.width/t.height}},warpHeightStyle:function(t){return{paddingBottom:"".concat(t.height/t.width*100,"%")}}}},d={name:"MyWaterFall",components:{Vertical:l,Horizontal:Object(h.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"my-h-water-fall"},[this._t("default",null,{scope:{data:this.dataProxy}})],2)}),[],!1,null,null,null).exports},props:{isHorizontal:{type:Boolean,default:!0},data:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{},methods:{itemWarpStyle:function(t){return{margin:this.margin+"px",width:t.width*this.itemHeight/t.height+"px",flexGrow:t.width/t.height}},warpHeightStyle:function(t){return{paddingBottom:"".concat(t.height/t.width*100,"%")}}},created:function(){},mounted:function(){}},f=Object(h.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isHorizontal?i("Horizontal",t._b({ref:"waterFall",attrs:{data:t.data},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.scope;return[t._t("default",null,{scope:i})]}}],null,!0)},"Horizontal",t.$attrs,!1)):i("Vertical",t._b({ref:"waterFall",attrs:{data:t.data},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.scope;return[t._t("default",null,{scope:i})]}}],null,!0)},"Vertical",t.$attrs,!1))}),[],!1,null,null,null).exports;e.a=Object(n.a)(f)},2273:function(t,e,i){"use strict";var n=i(47),s=(i(201),{name:"MyWaterFallSlot",components:{},props:{width:{type:Number,default:0},height:{type:Number,default:0},left:{type:Number},top:{type:Number}},data:function(){return{isHorizontal:this.$parent.$parent.isHorizontal,itemHeight:this.$parent.itemHeight,margin:this.$parent.margin}},computed:{hItemWarpStyle:function(){return{margin:this.margin+"px",width:this.width*this.itemHeight/this.height+"px",flexGrow:this.width/this.height}},hWarpHeightStyle:function(){return{paddingBottom:"".concat(this.height/this.width*100,"%")}},vItemWarpStyle:function(){return{width:this.width+"px",height:this.height+"px",left:this.left+"px",top:this.top+"px"}}},methods:{}}),r=i(19),a=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return this.isHorizontal?e("div",{staticClass:"item-warp",style:this.hItemWarpStyle},[e("div",{staticClass:"padding",style:this.hWarpHeightStyle}),this._v(" "),e("div",{staticClass:"content-warp"},[this._t("default")],2)]):e("div",{staticClass:"item-warp",style:this.vItemWarpStyle},[e("div",{staticClass:"content-warp"},[this._t("default")],2)])}),[],!1,null,null,null).exports;e.a=Object(n.a)(a)},3447:function(t,e,i){"use strict";i.r(e);i(2225),i(117);var n=i(2273),s=(i(2226),i(2262)),r=(i(1329),i(1337)),a=(i(1033),i(364),i(1019)),o=i.n(a),h=(i(202),i(0)),l=i(896),u=i.n(l),c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return t+Math.floor(Math.random()*(e-t))},d={data:function(){return{isListenEl:!1,showImgs:[]}},computed:{},methods:{getImgs:function(){for(var t=[],e=0;e<10;e++){var i=c(100,350),n=c(100,350);t.push({width:i,height:n,name:"img"+e,src:u.a.Random.dataImage("".concat(i,"x").concat(n))})}return t},loadMore:function(){this.showImgs=this.showImgs.concat(this.getImgs()),console.log(this.showImgs)}},created:function(){this.showImgs=this.getImgs()}};h.default.use(o.a),h.default.use(r.a),h.default.use(s.a),h.default.use(n.a);var f=d,m=i(19),p=Object(m.a)(f,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"400px"}},[i("my-slide-layout",{attrs:{type:"horizontal","edage-width":40,range:[5,55]}},[i("div",{staticStyle:{width:"100%",height:"100%",background:"lightgreen"},attrs:{slot:"odd"},slot:"odd"},[i("el-switch",{model:{value:t.isListenEl,callback:function(e){t.isListenEl=e},expression:"isListenEl"}}),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isListenEl,expression:"isListenEl"}]},[t._v("\n      监听自身宽度实现动态列变化（滑动左侧面板，卡片可以自适应）\n    ")]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isListenEl,expression:"!isListenEl"}]},[t._v("\n      媒体查询实现动态列变化 （滑动左侧面板，卡片不会自适应，但改变浏览器宽可以）\n    ")])],1),t._v(" "),i("div",{staticStyle:{width:"100%",height:"100%"},attrs:{slot:"even"},slot:"even"},[i("my-water-fall",{ref:"waterFall",attrs:{"is-horizontal":!1,data:t.showImgs,margin:5,"item-height":200,columns:{xxl:8,xl:6,lg:4,md:3,sm:2,xs:1},"listen-el":t.isListenEl},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.scope;return t._l(n.data,(function(t,e){return i("my-water-fall-slot",{key:e,attrs:{width:t.$width,height:t.$height,left:t.$left,top:t.$top}},[i("div",{staticStyle:{height:"100%"}},[i("img",{staticStyle:{width:"100%"},attrs:{src:t.src}})])])}))}}])})],1)])],1)}),[],!1,null,null,null);e.default=p.exports},364:function(t,e,i){},574:function(t,e,i){"use strict";i.d(e,"b",(function(){return a}));var n,s=i(76),r=i(46);i(75),i(9),i(204),i(31),i(121),i(77);if("undefined"!=typeof window){window.matchMedia=window.matchMedia||function(t){return{media:t,matches:!1,addListener:function(){},removeListener:function(){}}},n=i(591)}var a=["xxl","xl","lg","md","sm","xs"],o={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},h=[],l=-1,u={},c={fire:function(t){return u=t,!(h.length<1)&&(h.forEach((function(t){t.func(u)})),!0)},on:function(t){0===h.length&&this.register();var e=(++l).toString();return h.push({token:e,func:t}),t(u),e},off:function(t){0===(h=h.filter((function(e){return e.token!==t}))).length&&this.unregister()},register:function(){var t=this;Object.keys(o).forEach((function(e){n.register(o[e],{match:function(){var i=Object(r.a)(Object(r.a)({},u),{},Object(s.a)({},e,!0));t.fire(i)},unmatch:function(){var i=Object(r.a)(Object(r.a)({},u),{},Object(s.a)({},e,!1));t.fire(i)},destroy:function(){}})}))},unregister:function(){Object.keys(o).map((function(t){return n.unregister(o[t])}))}};e.a=c},908:function(t,e,i){"use strict";var n=i(119),s=i(46),r=(i(201),i(899)),a=i(574),o=i(118),h={xxl:5,xl:4,lg:4,md:3,sm:2,xs:1};e.a={props:{listenEl:{type:Boolean,default:!1},columns:{type:[Number,Object],default:function(){return Object(s.a)({},h)},validator:function(t){return"number"!=typeof t||24%t==0}}},data:function(){return{currentColumn:h,screens:{},elDom:null}},watch:{listenEl:function(t){var e=this;t?this.elDom&&this.setupElResponsive():this.setupResponsive(),this.$nextTick((function(){e.currentColumn=e.getResponsiveValue()}))},columns:{immediate:!0,handler:function(){var t=this;this.listenEl?this.elDom&&this.setupElResponsive():this.setupResponsive(),this.$nextTick((function(){t.currentColumn=t.getResponsiveValue()}))}},screens:{deep:!0,handler:function(){this.currentColumn=this.getResponsiveValue()}}},methods:{setupResponsive:function(){var t=this;this.token&&a.a.off(this.token),"object"===Object(n.a)(this.columns)&&(this.token=a.a.on((function(e){t.screens=e})))},setupElResponsive:function(){if(this.listenEl){var t={};t[function(t){return t<=575?"xs":t>=576&&t<=767?"sm":t>=768&&t<=991?"md":t>=992&&t<=1199?"lg":t>=1200&&t<=1599?"xl":t>=1600?"xxl":void 0}(this.elDom.offsetWidth)]=!0,this.screens=t}},getResponsiveValue:function(){var t=this.columns,e=h;if(!t)return e;if("object"===Object(n.a)(t))for(var i=0;i<a.b.length;i++){var s=a.b[i];if(this.screens[s])return t[s]||e}return t}},mounted:function(){this.elDom=this.$el,this.setupElResponsive(),this.setupElResponsiveProxy=Object(o.g)(this.setupElResponsive,300,!1,this),Object(r.a)(this.elDom,this.setupElResponsiveProxy)},beforeDestroy:function(){this.token&&a.a.off(this.token),Object(r.b)(this.elDom,this.setupElResponsiveProxy)}}}}]);