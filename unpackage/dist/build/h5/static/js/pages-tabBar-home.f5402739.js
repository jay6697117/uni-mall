(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-home"],{"024a":function(t,e,i){"use strict";i.r(e);var o=i("4e8a"),a=i("2c7b");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("7e49");var n=i("2877"),r=Object(n["a"])(a["default"],o["a"],o["b"],!1,null,"67e84391",null);e["default"]=r.exports},"2c7b":function(t,e,i){"use strict";i.r(e);var o=i("4045"),a=i.n(o);for(var s in o)"default"!==s&&function(t){i.d(e,t,function(){return o[t]})}(s);e["default"]=a.a},"3bd8":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-67e84391]{position:relative}@font-face{font-family:HMfont-home;src:url("data:application/x-font-woff2;charset=utf-8;base64,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") format("woff2")}.icon[data-v-67e84391]{font-family:HMfont-home!important;font-size:%?60?%;font-style:normal;color:#000}.icon.yuyin[data-v-67e84391]:before{content:"\\E64E"}.icon.tongzhi[data-v-67e84391]:before{content:"\\E729"}.icon.search[data-v-67e84391]:before{content:"\\E628"}.icon.location[data-v-67e84391]:before{content:"\\E611"}.icon.xia[data-v-67e84391]:before{content:"\\E689"}.pullDown-effects[data-v-67e84391]{position:fixed;top:0;z-index:9;width:100%;height:36vw;\n}.pullDown-effects uni-image[data-v-67e84391]{width:100%;height:36vw}.status[data-v-67e84391]{width:100%;position:fixed;z-index:10;background-color:#fff;top:0;\n}.header[data-v-67e84391]{width:92%;padding:0 4%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:fixed;z-index:10;background-color:#fff;\n}.header .addr[data-v-67e84391]{width:%?120?%;height:%?60?%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?28?%}.header .addr .icon[data-v-67e84391]{height:%?60?%;margin-right:%?5?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?42?%;color:#ffc50a}.header .input-box[data-v-67e84391]{width:100%;height:%?60?%;background-color:#f5f5f5;border-radius:%?30?%;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.header .input-box .icon[data-v-67e84391]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:absolute;top:0;right:0;width:%?60?%;height:%?60?%;font-size:%?34?%;color:silver}.header .input-box uni-input[data-v-67e84391]{padding-left:%?28?%;height:%?28?%;font-size:%?28?%}.header .icon-btn[data-v-67e84391]{width:%?120?%;height:%?60?%;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.header .icon-btn .icon[data-v-67e84391]{width:%?60?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?42?%}.place[data-v-67e84391]{background-color:#fff;height:%?100?%;\n}.swiper[data-v-67e84391]{width:100%;margin-top:%?10?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.swiper .swiper-box[data-v-67e84391]{width:92%;height:30.7vw;overflow:hidden;border-radius:%?15?%;-webkit-box-shadow:%?0?% %?8?% %?25?% rgba(0,0,0,.2);box-shadow:%?0?% %?8?% %?25?% rgba(0,0,0,.2);position:relative;z-index:1}.swiper .swiper-box uni-swiper[data-v-67e84391]{width:100%;height:30.7vw}.swiper .swiper-box uni-swiper uni-swiper-item uni-image[data-v-67e84391]{width:100%;height:30.7vw}.swiper .swiper-box .indicator[data-v-67e84391]{position:absolute;bottom:%?20?%;left:%?20?%;background-color:hsla(0,0%,100%,.4);width:%?150?%;height:%?5?%;border-radius:%?3?%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.swiper .swiper-box .indicator .dots[data-v-67e84391]{width:100%}.swiper .swiper-box .indicator .dots.on[data-v-67e84391]{background-color:#fff}.category-list[data-v-67e84391]{width:92%;margin:0 4%;padding:0 0 %?30?% 0;border-bottom:solid %?2?% #f6f6f6;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.category-list .category[data-v-67e84391]{width:25%;margin-top:%?50?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.category-list .category .img[data-v-67e84391]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.category-list .category .img uni-image[data-v-67e84391]{width:9vw;height:9vw}.category-list .category .text[data-v-67e84391]{margin-top:%?16?%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:%?24?%;color:#3c3c3c}.banner[data-v-67e84391]{width:92%;margin:%?40?% 4%}.banner uni-image[data-v-67e84391]{width:100%;height:20vw;border-radius:10vw;-webkit-box-shadow:%?0?% %?5?% %?25?% rgba(0,0,0,.3);box-shadow:%?0?% %?5?% %?25?% rgba(0,0,0,.3)}.promotion[data-v-67e84391]{width:92%;margin:0 4%}.promotion .text[data-v-67e84391]{width:100%;height:%?60?%;font-size:%?34?%;font-weight:600;margin-top:%?-10?%}.promotion .list[data-v-67e84391]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.promotion .list .column[data-v-67e84391]{width:43%;padding:%?15?% 3%;background-color:#ebf9f9;border-radius:%?10?%;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.promotion .list .column .top[data-v-67e84391]{width:100%;height:%?40?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-bottom:%?5?%}.promotion .list .column .top .title[data-v-67e84391]{font-size:%?30?%}.promotion .list .column .top .countdown[data-v-67e84391]{margin-left:%?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;height:%?40?%;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?20?%}.promotion .list .column .top .countdown uni-view[data-v-67e84391]{height:%?30?%;background-color:#f06c7a;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#fff;border-radius:%?4?%;margin:0 %?4?%;padding:0 %?2?%}.promotion .list .column .left[data-v-67e84391]{width:50%;height:18.86vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-content:space-between;-ms-flex-line-pack:justify;align-content:space-between}.promotion .list .column .left .ad[data-v-67e84391]{margin-top:%?5?%;width:100%;font-size:%?22?%;color:#acb0b0}.promotion .list .column .left .into[data-v-67e84391]{width:100%;font-size:%?24?%;color:#aaa;margin-bottom:%?5?%}.promotion .list .column .right[data-v-67e84391]{width:18.86vw;height:18.86vw}.promotion .list .column .right uni-image[data-v-67e84391]{width:18.86vw;height:18.86vw}.goods-list .title[data-v-67e84391]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?80?%;color:#f47825;font-size:%?30?%;margin-top:%?10?%}.goods-list .title uni-image[data-v-67e84391]{width:%?30?%;height:%?30?%}.goods-list .loading-text[data-v-67e84391]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?60?%;color:#979797;font-size:%?24?%}.goods-list .product-list[data-v-67e84391]{width:92%;padding:0 4% 3vw 4%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.goods-list .product-list .product[data-v-67e84391]{width:48%;border-radius:%?20?%;background-color:#fff;margin:0 0 %?15?% 0;-webkit-box-shadow:%?0?% %?5?% %?25?% rgba(0,0,0,.1);box-shadow:%?0?% %?5?% %?25?% rgba(0,0,0,.1)}.goods-list .product-list .product uni-image[data-v-67e84391]{width:100%;border-radius:%?20?% %?20?% 0 0}.goods-list .product-list .product .name[data-v-67e84391]{width:92%;padding:%?10?% 4%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;text-align:justify;overflow:hidden;font-size:%?30?%}.goods-list .product-list .product .info[data-v-67e84391]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;width:92%;padding:%?10?% 4% %?10?% 4%}.goods-list .product-list .product .info .price[data-v-67e84391]{color:#e65339;font-size:%?30?%;font-weight:600}.goods-list .product-list .product .info .slogan[data-v-67e84391]{color:#807c87;font-size:%?24?%}',""])},4045:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("bef9"));function a(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{afterHeaderOpacity:1,headerPosition:"fixed",headerTop:null,statusTop:null,city:"北京",currentSwiper:0,swiperList:[{id:1,src:"url1",img:"../../static/img/1.jpg"},{id:2,src:"url2",img:"../../static/img/2.jpg"},{id:3,src:"url3",img:"../../static/img/3.jpg"}],categoryList:[{id:1,name:"办公",img:"../../static/img/category/1.png"},{id:2,name:"家电",img:"../../static/img/category/2.png"},{id:3,name:"服饰",img:"../../static/img/category/3.png"},{id:4,name:"日用",img:"../../static/img/category/4.png"},{id:5,name:"蔬果",img:"../../static/img/category/5.png"},{id:6,name:"运动",img:"../../static/img/category/6.png"},{id:7,name:"书籍",img:"../../static/img/category/7.png"},{id:8,name:"文具",img:"../../static/img/category/8.png"}],Promotion:[],productList:[{goods_id:0,img:"../../static/img/goods/p1.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:1,img:"../../static/img/goods/p2.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:2,img:"../../static/img/goods/p3.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:3,img:"../../static/img/goods/p4.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:4,img:"../../static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:5,img:"../../static/img/goods/p6.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:6,img:"../../static/img/goods/p7.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:7,img:"../../static/img/goods/p8.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:8,img:"../../static/img/goods/p9.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:9,img:"../../static/img/goods/p10.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"}],loadingText:"正在加载..."}},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onPullDownRefresh:function(){setTimeout(function(){uni.stopPullDownRefresh()},1e3)},onReachBottom:function(){uni.showToast({title:"触发上拉加载"});var t=this.productList.length;if(t>=40)return this.loadingText="到底了",!1;for(var e=this.productList[t-1].goods_id,i=1;i<=10;i++){var o=e+i,a={goods_id:o,img:"../../static/img/goods/p"+(o%10==0?10:o%10)+".jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"};this.productList.push(a)}},onLoad:function(){var t=this;this.amapPlugin=new o.default.AMapWX({key:"7c235a9ac4e25e482614c6b8eac6fd8e"}),this.amapPlugin.getRegeo({success:function(e){t.city=e[0].regeocodeData.addressComponent.city.replace(/市/g,"")}}),this.Timer(),this.loadPromotion()},methods:{loadPromotion:function(){for(var t=new Date,e=t.getFullYear(),i=t.getMonth()+1,o=t.getDate(),a=e+"/"+i+"/"+o+" 23:59:59",s=[{title:"整点秒杀",ad:"整天秒杀专区",img:"../../static/img/s1.jpg",countdown:!1},{title:"限时抢购",ad:"每天23点上线",img:"../../static/img/s2.jpg",countdown:a}],n=0;n<s.length;n++){var r=s[n];if(r.countdown){var c="00",d="00",l="00",p=new Date,u=new Date(a);if(!(p>=u)){var g=parseInt((u.getTime()-p.getTime())/1e3);c=parseInt(g/3600),d=parseInt(g%3600/60),l=g%60,c=c<10?"0"+c:c,d=d<10?"0"+d:d,l=l<10?"0"+l:l}s[n].countdown={h:c,m:d,s:l}}}this.Promotion=s},Timer:function(){var t=this;setInterval(function(){if(t.Promotion.length>0)for(var e=0;e<t.Promotion.length;e++){var i=t.Promotion[e];i.countdown&&(0==i.countdown.h&&0==i.countdown.m&&0==i.countdown.s||(i.countdown.s>0?(i.countdown.s--,i.countdown.s=i.countdown.s<10?"0"+i.countdown.s:i.countdown.s):i.countdown.m>0?(i.countdown.m--,i.countdown.m=i.countdown.m<10?"0"+i.countdown.m:i.countdown.m,i.countdown.s=59):i.countdown.h>0&&(i.countdown.h--,i.countdown.h=i.countdown.h<10?"0"+i.countdown.h:i.countdown.h,i.countdown.m=59,i.countdown.s=59),t.Promotion[e].countdown=i.countdown))}},1e3)},toMsg:function(){uni.navigateTo({url:"../msg/msg"})},toSearch:function(){uni.showToast({title:"建议跳转到新页面做搜索功能"})},toSwiper:function(t){uni.showToast({title:t.src,icon:"none"})},toCategory:function(t){uni.navigateTo({url:"../goods/goods-list?cid="+t.id+"&name="+t.name})},toPromotion:function(t){uni.showToast({title:t.title,icon:"none"})},toGoods:function(t){uni.showToast({title:"商品"+t.goods_id,icon:"none"}),uni.navigateTo({url:"../goods/goods"})},swiperChange:function(t){this.currentSwiper=t.detail.current}}};e.default=s},"4e8a":function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"status",style:{position:t.headerPosition,top:t.statusTop,opacity:t.afterHeaderOpacity}}),i("v-uni-view",{staticClass:"header",style:{position:t.headerPosition,top:t.headerTop,opacity:t.afterHeaderOpacity}},[i("v-uni-view",{staticClass:"addr"},[i("v-uni-view",{staticClass:"icon location"}),t._v(t._s(t.city))],1),i("v-uni-view",{staticClass:"input-box"},[i("v-uni-input",{attrs:{placeholder:"默认关键字","placeholder-style":"color:#c0c0c0;"},on:{click:function(e){e=t.$handleEvent(e),t.toSearch()}}}),i("v-uni-view",{staticClass:"icon search"})],1),i("v-uni-view",{staticClass:"icon-btn"},[i("v-uni-view",{staticClass:"icon yuyin"}),i("v-uni-view",{staticClass:"icon tongzhi",on:{click:function(e){e=t.$handleEvent(e),t.toMsg(e)}}})],1)],1),i("v-uni-view",{staticClass:"place"}),i("v-uni-view",{staticClass:"swiper"},[i("v-uni-view",{staticClass:"swiper-box"},[i("v-uni-swiper",{attrs:{circular:"true",autoplay:"true"},on:{change:function(e){e=t.$handleEvent(e),t.swiperChange(e)}}},t._l(t.swiperList,function(e){return i("v-uni-swiper-item",{key:e.id},[i("v-uni-image",{attrs:{src:e.img},on:{click:function(i){i=t.$handleEvent(i),t.toSwiper(e)}}})],1)}),1),i("v-uni-view",{staticClass:"indicator"},t._l(t.swiperList,function(e,o){return i("v-uni-view",{key:o,staticClass:"dots",class:[t.currentSwiper>=o?"on":""]})}),1)],1)],1),i("v-uni-view",{staticClass:"category-list"},t._l(t.categoryList,function(e,o){return i("v-uni-view",{key:o,staticClass:"category",on:{click:function(i){i=t.$handleEvent(i),t.toCategory(e)}}},[i("v-uni-view",{staticClass:"img"},[i("v-uni-image",{attrs:{src:e.img}})],1),i("v-uni-view",{staticClass:"text"},[t._v(t._s(e.name))])],1)}),1),i("v-uni-view",{staticClass:"banner"},[i("v-uni-image",{attrs:{src:"../../static/img/banner.jpg"}})],1),i("v-uni-view",{staticClass:"promotion"},[i("v-uni-view",{staticClass:"text"},[t._v("优惠专区")]),i("v-uni-view",{staticClass:"list"},t._l(t.Promotion,function(e,o){return i("v-uni-view",{key:o,staticClass:"column",on:{click:function(i){i=t.$handleEvent(i),t.toPromotion(e)}}},[i("v-uni-view",{staticClass:"top"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(e.title))]),e.countdown?i("v-uni-view",{staticClass:"countdown"},[i("v-uni-view",[t._v(t._s(e.countdown.h))]),t._v(":"),i("v-uni-view",[t._v(t._s(e.countdown.m))]),t._v(":"),i("v-uni-view",[t._v(t._s(e.countdown.s))])],1):t._e()],1),i("v-uni-view",{staticClass:"left"},[i("v-uni-view",{staticClass:"ad"},[t._v(t._s(e.ad))]),i("v-uni-view",{staticClass:"into"},[t._v("点击进入")])],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-image",{attrs:{src:e.img}})],1)],1)}),1)],1),i("v-uni-view",{staticClass:"goods-list"},[i("v-uni-view",{staticClass:"title"},[i("v-uni-image",{attrs:{src:"../../static/img/hua.png"}}),t._v("猜你喜欢"),i("v-uni-image",{attrs:{src:"../../static/img/hua.png"}})],1),i("v-uni-view",{staticClass:"product-list"},t._l(t.productList,function(e){return i("v-uni-view",{key:e.goods_id,staticClass:"product",on:{click:function(i){i=t.$handleEvent(i),t.toGoods(e)}}},[i("v-uni-image",{attrs:{mode:"widthFix",src:e.img}}),i("v-uni-view",{staticClass:"name"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"info"},[i("v-uni-view",{staticClass:"price"},[t._v(t._s(e.price))]),i("v-uni-view",{staticClass:"slogan"},[t._v(t._s(e.slogan))])],1)],1)}),1),i("v-uni-view",{staticClass:"loading-text"},[t._v(t._s(t.loadingText))])],1)],1)},a=[];i.d(e,"a",function(){return o}),i.d(e,"b",function(){return a})},"7e49":function(t,e,i){"use strict";var o=i("fd77"),a=i.n(o);a.a},bef9:function(t,e,i){"use strict";function o(t){this.key=t.key,this.requestConfig={key:t.key,s:"rsx",platform:"WXJS",appname:t.key,sdkversion:"1.2.0",logversion:"2.0"}}o.prototype.getWxLocation=function(t,e){wx.getLocation({type:"gcj02",success:function(t){var i=t.longitude+","+t.latitude;wx.setStorage({key:"userLocation",data:i}),e(i)},fail:function(i){wx.getStorage({key:"userLocation",success:function(t){t.data&&e(t.data)}}),t.fail({errCode:"0",errMsg:i.errMsg||""})}})},o.prototype.getRegeo=function(t){function e(e){var o=i.requestConfig;wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:i.key,location:e,extensions:"all",s:o.s,platform:o.platform,appname:i.key,sdkversion:o.sdkversion,logversion:o.logversion},method:"GET",header:{"content-type":"application/json"},success:function(i){var o,a,s,n,r,c,d,l,p;i.data.status&&"1"==i.data.status?(o=i.data.regeocode,a=o.addressComponent,s=[],n="",o&&o.roads[0]&&o.roads[0].name&&(n=o.roads[0].name+"附近"),r=e.split(",")[0],c=e.split(",")[1],o.pois&&o.pois[0]&&(n=o.pois[0].name+"附近",d=o.pois[0].location,d&&(r=parseFloat(d.split(",")[0]),c=parseFloat(d.split(",")[1]))),a.provice&&s.push(a.provice),a.city&&s.push(a.city),a.district&&s.push(a.district),a.streetNumber&&a.streetNumber.street&&a.streetNumber.number?(s.push(a.streetNumber.street),s.push(a.streetNumber.number)):(l="",o&&o.roads[0]&&o.roads[0].name&&(l=o.roads[0].name),s.push(l)),s=s.join(""),p=[{iconPath:t.iconPath,width:t.iconWidth,height:t.iconHeight,name:s,desc:n,longitude:r,latitude:c,id:0,regeocodeData:o}],t.success(p)):t.fail({errCode:i.data.infocode,errMsg:i.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var i=this;t.location?e(t.location):i.getWxLocation(t,function(t){e(t)})},o.prototype.getWeather=function(t){function e(e){var i="base";t.type&&"forecast"==t.type&&(i="all"),wx.request({url:"https://restapi.amap.com/v3/weather/weatherInfo",data:{key:o.key,city:e,extensions:i,s:a.s,platform:a.platform,appname:o.key,sdkversion:a.sdkversion,logversion:a.logversion},method:"GET",header:{"content-type":"application/json"},success:function(e){function i(t){var e={city:{text:"城市",data:t.city},weather:{text:"天气",data:t.weather},temperature:{text:"温度",data:t.temperature},winddirection:{text:"风向",data:t.winddirection+"风"},windpower:{text:"风力",data:t.windpower+"级"},humidity:{text:"湿度",data:t.humidity+"%"}};return e}var o,a;e.data.status&&"1"==e.data.status?e.data.lives?(o=e.data.lives,o&&o.length>0&&(o=o[0],a=i(o),a["liveData"]=o,t.success(a))):e.data.forecasts&&e.data.forecasts[0]&&t.success({forecast:e.data.forecasts[0]}):t.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}function i(i){wx.request({url:"https://restapi.amap.com/v3/geocode/regeo",data:{key:o.key,location:i,extensions:"all",s:a.s,platform:a.platform,appname:o.key,sdkversion:a.sdkversion,logversion:a.logversion},method:"GET",header:{"content-type":"application/json"},success:function(i){var o,a;i.data.status&&"1"==i.data.status?(a=i.data.regeocode,a.addressComponent?o=a.addressComponent.adcode:a.aois&&a.aois.length>0&&(o=a.aois[0].adcode),e(o)):t.fail({errCode:i.data.infocode,errMsg:i.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var o=this,a=o.requestConfig;t.city?e(t.city):o.getWxLocation(t,function(t){i(t)})},o.prototype.getPoiAround=function(t){function e(e){var a={key:i.key,location:e,s:o.s,platform:o.platform,appname:i.key,sdkversion:o.sdkversion,logversion:o.logversion};t.querytypes&&(a["types"]=t.querytypes),t.querykeywords&&(a["keywords"]=t.querykeywords),wx.request({url:"https://restapi.amap.com/v3/place/around",data:a,method:"GET",header:{"content-type":"application/json"},success:function(e){var i,o,a,s;if(e.data.status&&"1"==e.data.status){if(e=e.data,e&&e.pois){for(i=[],o=0;o<e.pois.length;o++)a=0==o?t.iconPathSelected:t.iconPath,i.push({latitude:parseFloat(e.pois[o].location.split(",")[1]),longitude:parseFloat(e.pois[o].location.split(",")[0]),iconPath:a,width:22,height:32,id:o,name:e.pois[o].name,address:e.pois[o].address});s={markers:i,poisData:e.pois},t.success(s)}}else t.fail({errCode:e.data.infocode,errMsg:e.data.info})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})}var i=this,o=i.requestConfig;t.location?e(t.location):i.getWxLocation(t,function(t){e(t)})},o.prototype.getStaticmap=function(t){function e(e){a.push("location="+e),t.zoom&&a.push("zoom="+t.zoom),t.size&&a.push("size="+t.size),t.scale&&a.push("scale="+t.scale),t.markers&&a.push("markers="+t.markers),t.labels&&a.push("labels="+t.labels),t.paths&&a.push("paths="+t.paths),t.traffic&&a.push("traffic="+t.traffic);var i=s+a.join("&");t.success({url:i})}var i,o=this,a=[],s="https://restapi.amap.com/v3/staticmap?";a.push("key="+o.key),i=o.requestConfig,a.push("s="+i.s),a.push("platform="+i.platform),a.push("appname="+i.appname),a.push("sdkversion="+i.sdkversion),a.push("logversion="+i.logversion),t.location?e(t.location):o.getWxLocation(t,function(t){e(t)})},o.prototype.getInputtips=function(t){var e=this,i=e.requestConfig,o={key:e.key,s:i.s,platform:i.platform,appname:e.key,sdkversion:i.sdkversion,logversion:i.logversion};t.location&&(o["location"]=t.location),t.keywords&&(o["keywords"]=t.keywords),t.type&&(o["type"]=t.type),t.city&&(o["city"]=t.city),t.citylimit&&(o["citylimit"]=t.citylimit),wx.request({url:"https://restapi.amap.com/v3/assistant/inputtips",data:o,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.tips&&t.success({tips:e.data.tips})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},o.prototype.getDrivingRoute=function(t){var e=this,i=e.requestConfig,o={key:e.key,s:i.s,platform:i.platform,appname:e.key,sdkversion:i.sdkversion,logversion:i.logversion};t.origin&&(o["origin"]=t.origin),t.destination&&(o["destination"]=t.destination),t.strategy&&(o["strategy"]=t.strategy),t.waypoints&&(o["waypoints"]=t.waypoints),t.avoidpolygons&&(o["avoidpolygons"]=t.avoidpolygons),t.avoidroad&&(o["avoidroad"]=t.avoidroad),wx.request({url:"https://restapi.amap.com/v3/direction/driving",data:o,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&t.success({paths:e.data.route.paths,taxi_cost:e.data.route.taxi_cost||""})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},o.prototype.getWalkingRoute=function(t){var e=this,i=e.requestConfig,o={key:e.key,s:i.s,platform:i.platform,appname:e.key,sdkversion:i.sdkversion,logversion:i.logversion};t.origin&&(o["origin"]=t.origin),t.destination&&(o["destination"]=t.destination),wx.request({url:"https://restapi.amap.com/v3/direction/walking",data:o,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.route&&t.success({paths:e.data.route.paths})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},o.prototype.getTransitRoute=function(t){var e=this,i=e.requestConfig,o={key:e.key,s:i.s,platform:i.platform,appname:e.key,sdkversion:i.sdkversion,logversion:i.logversion};t.origin&&(o["origin"]=t.origin),t.destination&&(o["destination"]=t.destination),t.strategy&&(o["strategy"]=t.strategy),t.city&&(o["city"]=t.city),t.cityd&&(o["cityd"]=t.cityd),wx.request({url:"https://restapi.amap.com/v3/direction/transit/integrated",data:o,method:"GET",header:{"content-type":"application/json"},success:function(e){if(e&&e.data&&e.data.route){var i=e.data.route;t.success({distance:i.distance||"",taxi_cost:i.taxi_cost||"",transits:i.transits})}},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},o.prototype.getRidingRoute=function(t){var e=this,i=e.requestConfig,o={key:e.key,s:i.s,platform:i.platform,appname:e.key,sdkversion:i.sdkversion,logversion:i.logversion};t.origin&&(o["origin"]=t.origin),t.destination&&(o["destination"]=t.destination),wx.request({url:"https://restapi.amap.com/v4/direction/bicycling",data:o,method:"GET",header:{"content-type":"application/json"},success:function(e){e&&e.data&&e.data.data&&t.success({paths:e.data.data.paths})},fail:function(e){t.fail({errCode:"0",errMsg:e.errMsg||""})}})},t.exports.AMapWX=o},fd77:function(t,e,i){var o=i("3bd8");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=i("4f06").default;a("286959af",o,!0,{sourceMap:!1,shadowMode:!1})}}]);