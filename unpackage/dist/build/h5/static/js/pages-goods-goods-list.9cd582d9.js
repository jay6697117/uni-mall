(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-goods-list"],{"26d1":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */@font-face{font-family:HMfont-home;src:url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMMAAsAAAAAB3gAAALAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCfgqCXII4ATYCJAMMCwgABCAFhG0HQxuDBsiemjxBRCmUAtQ2VRCBG4ig2u+zZ3c/ortTgBIoQOVPBYSJYkUggWRSPqyjY2yEQyPe5FzmkfXucrOArBAKSdt/TjNmNTZyfrOTKAwgNQXmqbkEBgj2eS6nNz3A+YFyXHs9P2raURxQgHtR7yiyEknMW4bXLsaDeEygbVEkxYXiyhqgV+BVgbgmCQzQ55xKS2doCvWag0W8o9FMz9M24G34/fgvPvQktQxvPL5axIPc38m/U/JI9VSLIKjm80M7RsYWoBAXa4PHVHFxi0rbKaotAfuaFfxOqSp+Jwvlbv/wCImow+1dsAaGdEcqZnRrKhAggQzqaOI24Bmw02JRZmZ88bS/fq2vH6Y1yywb576F7tn3l1/5e7zm6Ze2+cW37DBXjFEftC+6U7vil0/zOvXIl3lf7cx/3DkeysBDV/tDQ5N7tli9AzsiHDgcO55136FS8LLTzBygm4Q9u6bCp1zAy0lh7v/L+PnQ0P71YAZeG0pE3eWwRIIOANX5dz4JQCX8hQLB+5z/hXZb5ofeVMCvjc0fKFEp+rs1bzkU/H5Vz67iarArF1vJlH4oO8g0SGi7EVU4OnY43jzr3U5omqVIGhaQNS2Rhd1CTcc26ppOo21TyfGOCUIlSgsbJhHC0DqSvp/IhnbIwh6gZu4BdcNQoe1iuC7sWAnJWEAQQxEP2V4ocQE/ph5qjDqrkNDpZUhWE4rrEJGlDIyLji1WSpAfkTm2yF1CPKUYYhLwwWL0HPJ6AzBIAm7E0WiR0mB6TAyue1M0F/ABo/MIhEEhPIjVC5JwAvywGE8ZS5+vggg6eTFIC6ejWAchZNL0UJxosT3IEqO/F+dehMi6COJRFAZhRIAPVIz8iJcUA6Bg/Tw3hENFE0fkg9LFSP1wX2P0+mbf952ANvxUjhQ5is4tRurpjHJLjF9IRbKIHAAA") format("woff2")}.icon[data-v-0eafbfd6]{font-family:HMfont-home!important;font-size:%?26?%;font-style:normal}.icon.sheng[data-v-0eafbfd6]:before{content:"\\E737"}.icon.jiang[data-v-0eafbfd6]:before{content:"\\E736"}.header[data-v-0eafbfd6]{width:92%;padding:0 4%;height:%?79?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;position:fixed;top:0;z-index:10;background-color:#fff;border-bottom:solid %?1?% #eee}.header .target[data-v-0eafbfd6]{width:20%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?28?%;margin-bottom:%?-2?%;color:#aaa}.header .target.on[data-v-0eafbfd6]{color:#555;border-bottom:%?4?% solid #f06c7a;font-weight:600;font-size:%?30?%}.place[data-v-0eafbfd6]{background-color:#fff;height:%?100?%}.goods-list .loading-text[data-v-0eafbfd6]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?60?%;color:#979797;font-size:%?24?%}.goods-list .product-list[data-v-0eafbfd6]{width:92%;padding:0 4% 3vw 4%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.goods-list .product-list .product[data-v-0eafbfd6]{width:48%;border-radius:%?20?%;background-color:#fff;margin:0 0 %?15?% 0;-webkit-box-shadow:%?0?% %?5?% %?25?% rgba(0,0,0,.1);box-shadow:%?0?% %?5?% %?25?% rgba(0,0,0,.1)}.goods-list .product-list .product uni-image[data-v-0eafbfd6]{width:100%;border-radius:%?20?% %?20?% 0 0}.goods-list .product-list .product .name[data-v-0eafbfd6]{width:92%;padding:%?10?% 4%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;text-align:justify;overflow:hidden;font-size:%?30?%}.goods-list .product-list .product .info[data-v-0eafbfd6]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;width:92%;padding:%?10?% 4% %?10?% 4%}.goods-list .product-list .product .info .price[data-v-0eafbfd6]{color:#e65339;font-size:%?30?%;font-weight:600}.goods-list .product-list .product .info .slogan[data-v-0eafbfd6]{color:#807c87;font-size:%?24?%}',""])},"350e":function(e,t,i){"use strict";var o=i("7ca4"),s=i.n(o);s.a},"51b6":function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"header",style:{position:e.headerPosition,top:e.headerTop}},e._l(e.orderbyList,function(t,o){return i("v-uni-view",{key:o,staticClass:"target",class:[t.selected?"on":""],on:{click:function(t){t=e.$handleEvent(t),e.select(o)}}},[e._v(e._s(t.text)),t.orderbyicon?i("v-uni-view",{staticClass:"icon",class:t.orderbyicon[t.orderby]}):e._e()],1)}),1),i("v-uni-view",{staticClass:"place"}),i("v-uni-view",{staticClass:"goods-list"},[i("v-uni-view",{staticClass:"product-list"},e._l(e.goodsList,function(t){return i("v-uni-view",{key:t.goods_id,staticClass:"product",on:{click:function(i){i=e.$handleEvent(i),e.toGoods(t)}}},[i("v-uni-image",{attrs:{mode:"widthFix",src:t.img}}),i("v-uni-view",{staticClass:"name"},[e._v(e._s(t.name))]),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"price"},[e._v(e._s(t.price))]),i("v-uni-view",{staticClass:"slogan"},[e._v(e._s(t.slogan))])],1)],1)}),1),i("v-uni-view",{staticClass:"loading-text"},[e._v(e._s(e.loadingText))])],1)],1)},s=[];i.d(t,"a",function(){return o}),i.d(t,"b",function(){return s})},"57c0":function(e,t,i){"use strict";i.r(t);var o=i("51b6"),s=i("a6cf");for(var n in s)"default"!==n&&function(e){i.d(t,e,function(){return s[e]})}(n);i("350e");var a=i("2877"),d=Object(a["a"])(s["default"],o["a"],o["b"],!1,null,"0eafbfd6",null);t["default"]=d.exports},"6b04":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{goodsList:[{goods_id:0,img:"../../static/img/goods/p1.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:1,img:"../../static/img/goods/p2.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:2,img:"../../static/img/goods/p3.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:3,img:"../../static/img/goods/p4.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:4,img:"../../static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:5,img:"../../static/img/goods/p6.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:6,img:"../../static/img/goods/p7.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:7,img:"../../static/img/goods/p8.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:8,img:"../../static/img/goods/p9.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:9,img:"../../static/img/goods/p10.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"}],loadingText:"正在加载...",headerTop:"0px",headerPosition:"fixed",orderbyList:[{text:"销量",selected:!0,orderbyicon:!1,orderby:0},{text:"价格",selected:!1,orderbyicon:["sheng","jiang"],orderby:0},{text:"好评",selected:!1,orderbyicon:!1,orderby:0}],orderby:"sheng"}},onLoad:function(e){var t=this;console.log(e.cid),uni.setNavigationBarTitle({title:e.name});var i=setInterval(function(){var e=document.getElementsByTagName("uni-page-head");e.length>0&&(t.headerTop=e[0].offsetHeight+"px",clearInterval(i))},1)},onPageScroll:function(e){e.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){var e=this;setTimeout(function(){e.reload(),uni.stopPullDownRefresh()},1e3)},onReachBottom:function(){uni.showToast({title:"触发上拉加载"});var e=this.goodsList.length;if(e>=40)return this.loadingText="到底了",!1;this.loadingText="正在加载...";for(var t=this.goodsList[e-1].goods_id,i=1;i<=10;i++){var o=t+i,s={goods_id:o,img:"../../static/img/goods/p"+(o%10==0?10:o%10)+".jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"};this.goodsList.push(s)}},methods:{reload:function(){console.log("reload");this.goodsList=[];for(var e=0,t=1;t<=10;t++){var i=e+t,o={goods_id:i,img:"../../static/img/goods/p"+(i%10==0?10:i%10)+".jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"};this.goodsList.push(o)}},toGoods:function(e){uni.showToast({title:"商品"+e.goods_id,icon:"none"}),uni.navigateTo({url:"../goods/goods"})},select:function(e){var t=this.orderbyList[e].text+"排序 ";if(this.orderbyList[e].orderbyicon){var i=0==this.orderbyList[e].orderby?"升序":"降序";this.orderbyList[e].selected&&(i=0==this.orderbyList[e].orderby?"降序":"升序",this.orderbyList[e].orderby=0==this.orderbyList[e].orderby?1:0),t+=i}this.orderbyList[e].selected=!0;for(var o=this.orderbyList.length,s=0;s<o;s++)s!=e&&(this.orderbyList[s].selected=!1);uni.showToast({title:t,icon:"none"})}}};t.default=o},"7ca4":function(e,t,i){var o=i("26d1");"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var s=i("4f06").default;s("6f452ee4",o,!0,{sourceMap:!1,shadowMode:!1})},a6cf:function(e,t,i){"use strict";i.r(t);var o=i("6b04"),s=i.n(o);for(var n in o)"default"!==n&&function(e){i.d(t,e,function(){return o[e]})}(n);t["default"]=s.a}}]);