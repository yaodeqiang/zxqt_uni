(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"00a0":function(t,i,n){"use strict";n.r(i);var e=n("5af0"),a=n("f24b");for(var o in a)"default"!==o&&function(t){n.d(i,t,function(){return a[t]})}(o);var s,c=n("f0c5"),r=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,"a3663f7c",null,!1,e["a"],s);i["default"]=r.exports},"0a50":function(t,i,n){var e=n("3fcd");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("9b207b10",e,!0,{sourceMap:!1,shadowMode:!1})},"27f4":function(t,i,n){"use strict";var e=n("0a50"),a=n.n(e);a.a},"3fcd":function(t,i,n){i=t.exports=n("2350")(!1),i.push([t.i,".uni-tag[data-v-dc28f9b4]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\tpadding:0 16px;height:30px;line-height:30px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#333;border-radius:%?6?%;background-color:#f8f8f8;border-width:%?1?%;border-style:solid;border-color:#f8f8f8}.uni-tag--circle[data-v-dc28f9b4]{border-radius:15px}.uni-tag--mark[data-v-dc28f9b4]{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:15px;border-bottom-right-radius:15px}.uni-tag--disabled[data-v-dc28f9b4]{opacity:.5}.uni-tag--small[data-v-dc28f9b4]{height:20px;padding:0 8px;line-height:20px;font-size:%?24?%}.uni-tag--default[data-v-dc28f9b4]{color:#333;font-size:%?28?%}.uni-tag-text--small[data-v-dc28f9b4]{font-size:%?24?%!important}.uni-tag-text[data-v-dc28f9b4]{color:#fff;font-size:%?28?%}.uni-tag-text--primary[data-v-dc28f9b4]{color:#007aff!important}.uni-tag-text--success[data-v-dc28f9b4]{color:#4cd964!important}.uni-tag-text--warning[data-v-dc28f9b4]{color:#f0ad4e!important}.uni-tag-text--error[data-v-dc28f9b4]{color:#dd524d!important}.uni-tag--primary[data-v-dc28f9b4]{color:#fff;background-color:#007aff;border-width:%?1?%;border-style:solid;border-color:#007aff}.primary-uni-tag--inverted[data-v-dc28f9b4]{color:#007aff;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#007aff}.uni-tag--success[data-v-dc28f9b4]{color:#fff;background-color:#4cd964;border-width:%?1?%;border-style:solid;border-color:#4cd964}.success-uni-tag--inverted[data-v-dc28f9b4]{color:#4cd964;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#4cd964}.uni-tag--warning[data-v-dc28f9b4]{color:#fff;background-color:#f0ad4e;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.warning-uni-tag--inverted[data-v-dc28f9b4]{color:#f0ad4e;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f0ad4e}.uni-tag--error[data-v-dc28f9b4]{color:#fff;background-color:#dd524d;border-width:%?1?%;border-style:solid;border-color:#dd524d}.error-uni-tag--inverted[data-v-dc28f9b4]{color:#dd524d;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#dd524d}.uni-tag--inverted[data-v-dc28f9b4]{color:#333;background-color:#fff;border-width:%?1?%;border-style:solid;border-color:#f8f8f8}",""])},"5af0":function(t,i,n){"use strict";var e={"uni-nav-bar":n("5431").default,"uni-search-bar":n("9a42").default,"uni-badge":n("4997").default,"uni-tag":n("b487").default,"uni-icons":n("aacb").default},a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"zz",class:t.hotOpen?"cur":""}),n("uni-nav-bar",{staticClass:"indNav",attrs:{"left-icon":"arrowleft"},on:{clickLeft:function(i){arguments[0]=i=t.$handleEvent(i),t.back.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"indNav-tab flexBox jusCenter"},[n("v-uni-view",{staticClass:"indNavTabItem cur"},[t._v("推荐"),n("v-uni-view",{staticClass:"indNavLine"})],1),n("v-uni-view",{staticClass:"indNavTabItem flexBox",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goHot.apply(void 0,arguments)}}},[t._v("热榜"),n("v-uni-view",{staticClass:"indNavLine"})],1),n("v-uni-view",{staticClass:"indNav-sub flexBox around",class:t.hotOpen?"cur":""},[n("v-uni-button",{staticClass:"cur",attrs:{type:"default"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goHot.apply(void 0,arguments)}}},[t._v("全部热榜")]),n("v-uni-button",{attrs:{type:"default"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goHot.apply(void 0,arguments)}}},[t._v("热门问题")]),n("v-uni-button",{attrs:{type:"default"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goHot.apply(void 0,arguments)}}},[t._v("热门知识")])],1)],1),n("v-uni-view",{staticClass:"indNav-usCen fr",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goUserCenter.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:"../../static/logo.png",mode:""}})],1)],1),n("v-uni-view",{staticClass:"indSearch flexBox between"},[n("uni-search-bar",{staticClass:"indSearchInput",attrs:{placeholder:"请输入您要搜索的内容",bgColor:"#EEEEEE",cancelButton:"none"},on:{confirm:function(i){arguments[0]=i=t.$handleEvent(i),t.search.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"indSea-icon flexBox"},[n("v-uni-navigator",{staticClass:"indSea-link",attrs:{url:"../wdzl/wdzl"}},[n("v-uni-image",{attrs:{src:"../../static/icon_fk.png",mode:""}})],1),n("v-uni-navigator",{staticClass:"indSea-link",attrs:{url:"../myXiaoxi/myXiaoxi"}},[n("v-uni-image",{attrs:{src:"../../static/icon_xiaoxi.png",mode:""}}),n("v-uni-view",{staticClass:"grid-dot"},[n("uni-badge",{attrs:{text:"2",type:"error",size:"small"}})],1)],1)],1)],1),n("v-uni-view",{staticClass:"indNotice"},[n("v-uni-view",{staticClass:"indNoticPoint indNotPoi-z1"}),n("v-uni-view",{staticClass:"indNoticPoint indNotPoi-z2"}),n("v-uni-view",{staticClass:"indNoticPoint indNotPoi-y1"}),n("v-uni-view",{staticClass:"indNoticPoint indNotPoi-y2"}),n("v-uni-view",{staticClass:"indNotic-tit"},[t._v("集团公告")]),n("v-uni-view",{staticClass:"indNotic-con"},[n("v-uni-text",[t._v("针对职工杨某某提的问题，解决公告如下：")]),n("v-uni-text",{staticStyle:{"text-indent":"2em"}},[t._v("2019.12.24日某某提出的问题，我们经过研究，认为他的看法合乎常理，所以上下班时间调整为早8点到晚6点。")])],1)],1),n("v-uni-view",{staticClass:"cu-card dynamic no-card"},[n("v-uni-view",{staticClass:"cu-item shadow"},[n("v-uni-view",{staticClass:"cu-list menu-avatar"},[n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"}}),n("v-uni-view",{staticClass:"content flex-sub"},[n("v-uni-view",[t._v("西山煤矿小张")]),n("v-uni-view",{staticClass:"text-gray text-sm flex justify-between"},[t._v("西山煤矿事业部")])],1),n("uni-tag",{attrs:{text:"已解决",type:"primary",size:"small",circle:"true",inverted:"true"}})],1)],1),n("v-uni-view",{staticClass:"text-content uni-ellipsis",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goInfo.apply(void 0,arguments)}}},[t._v("集团领导到机电厂调研契约化管理工作室作秀？")]),n("v-uni-view",{staticClass:"grid flex-sub padding-lr col-3 grid-square",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goInfo.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"bg-img",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"}}),n("v-uni-view",{staticClass:"bg-img",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"}}),n("v-uni-view",{staticClass:"bg-img",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"}})],1),n("v-uni-view",{staticClass:"indTjCard-gf uni-flex",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goInfo.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"indTjGf-tit"},[t._v("官方")]),n("v-uni-view",{staticClass:"indTjGf-con ellipsis-2"},[t._v("集团公司领导到机电厂调研契约化管理工作是审核约束化管理。")])],1),n("v-uni-view",{staticClass:"indTjCard-cz flexBox between"},[n("v-uni-text",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goInfo.apply(void 0,arguments)}}},[t._v("两小时前")]),n("v-uni-view",{staticClass:"indTj-zan flexBox",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goInfo.apply(void 0,arguments)}}},[n("uni-icons",{attrs:{type:"chat"}}),n("v-uni-text",[t._v("102")])],1),n("v-uni-view",{staticClass:"indTj-zan flexBox",class:t.checkList[0]?"indTj-zanCur":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.favClick(0)}}},[n("uni-icons",{attrs:{type:"hand-thumbsup"}}),t.checkList[0]?n("v-uni-text",[t._v("已点")]):n("v-uni-text",[t._v("点赞")])],1)],1)],1)],1),n("v-uni-view",{staticClass:"cu-card dynamic no-card"},[n("v-uni-view",{staticClass:"cu-item shadow"},[n("v-uni-view",{staticClass:"cu-list menu-avatar"},[n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"cu-avatar round lg",staticStyle:{"background-image":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"}}),n("v-uni-view",{staticClass:"content flex-sub"},[n("v-uni-view",[t._v("西山煤矿小张")]),n("v-uni-view",{staticClass:"text-gray text-sm flex justify-between"},[t._v("西山煤矿事业部")])],1),n("uni-tag",{attrs:{text:"解决中",type:"error",size:"small",circle:"true",inverted:"true"}})],1)],1),n("v-uni-view",{staticClass:"text-content uni-ellipsis",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goInfo.apply(void 0,arguments)}}},[t._v("集团领导到机电厂调研契约化管理工作室作秀？")]),n("v-uni-view",{staticClass:"grid flex-sub padding-lr col-1"},[n("v-uni-video",{staticClass:"bg-img only-img",attrs:{src:"https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-03.mp4",controls:!0,"hand-thumbsup":"url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg)"}})],1)],1),n("v-uni-view",{staticClass:"indTjCard-gf uni-flex",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goInfo.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"indTjGf-tit"},[t._v("官方")]),n("v-uni-view",{staticClass:"indTjGf-con ellipsis-2"},[t._v("集团公司领导到机电厂调研契约化管理工作是审核约束化管理。")])],1),n("v-uni-view",{staticClass:"indTjCard-cz flexBox between"},[n("v-uni-text",{on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goInfo.apply(void 0,arguments)}}},[t._v("2019年12月12日")]),n("v-uni-view",{staticClass:"indTj-zan flexBox",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goInfo.apply(void 0,arguments)}}},[n("uni-icons",{attrs:{type:"chat"}}),n("v-uni-text",[t._v("102")])],1),n("v-uni-view",{staticClass:"indTj-zan flexBox",class:t.checkList[1]?"indTj-zanCur":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.favClick(1)}}},[n("uni-icons",{attrs:{type:"hand-thumbsup"}}),t.checkList[1]?n("v-uni-text",[t._v("已点")]):n("v-uni-text",[t._v("点赞")])],1)],1)],1)],1)},o=[];n.d(i,"b",function(){return a}),n.d(i,"c",function(){return o}),n.d(i,"a",function(){return e})},"6b94":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={name:"UniTag",props:{type:{type:String,default:"default"},size:{type:String,default:"normal"},text:{type:String,default:""},disabled:{type:[Boolean,String],defalut:!1},inverted:{type:[Boolean,String],defalut:!1},circle:{type:[Boolean,String],defalut:!1},mark:{type:[Boolean,String],defalut:!1}},methods:{onClick:function(){!0!==this.disabled&&"true"!==this.disabled&&this.$emit("click")}}};i.default=e},b487:function(t,i,n){"use strict";n.r(i);var e=n("f5d0"),a=n("bd18");for(var o in a)"default"!==o&&function(t){n.d(i,t,function(){return a[t]})}(o);n("27f4");var s,c=n("f0c5"),r=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,"dc28f9b4",null,!1,e["a"],s);i["default"]=r.exports},bd18:function(t,i,n){"use strict";n.r(i);var e=n("6b94"),a=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(i,t,function(){return e[t]})}(o);i["default"]=a.a},c7fc:function(t,i,n){"use strict";var e=n("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e(n("bd86")),o={data:function(){return{currentInd:0,hotOpen:!1,checkList:[!1,!1,!1,!1]}},onLoad:function(){},methods:(0,a.default)({favClick:function(t){this.checkList[t]=!this.checkList[t],this.$forceUpdate()},goInfo:function(){uni.navigateTo({url:"../questionInfo/questionInfo"})},goUserCenter:function(){uni.navigateTo({url:"../userCenter/userCenter"})},back:function(){uni.navigateBack({delta:1})},goHot:function(){uni.navigateTo({url:"../index-hot/index-hot"})}},"favClick",function(t){this.checkList[t]=!this.checkList[t],this.$forceUpdate()})};i.default=o},f24b:function(t,i,n){"use strict";n.r(i);var e=n("c7fc"),a=n.n(e);for(var o in e)"default"!==o&&function(t){n.d(i,t,function(){return e[t]})}(o);i["default"]=a.a},f5d0:function(t,i,n){"use strict";var e,a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return t.text?n("v-uni-view",{staticClass:"uni-tag",class:["uni-tag--"+t.type,!0===t.disabled||"true"===t.disabled?"uni-tag--disabled":"",!0===t.inverted||"true"===t.inverted?t.type+"-uni-tag--inverted":"",!0===t.circle||"true"===t.circle?"uni-tag--circle":"",!0===t.mark||"true"===t.mark?"uni-tag--mark":"","uni-tag--"+t.size],on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.onClick()}}},[n("v-uni-text",{class:["default"===t.type?"uni-tag--default":"uni-tag-text",!0===t.inverted||"true"===t.inverted?"uni-tag-text--"+t.type:"","small"===t.size?"uni-tag-text--small":""]},[t._v(t._s(t.text))])],1):t._e()},o=[];n.d(i,"b",function(){return a}),n.d(i,"c",function(){return o}),n.d(i,"a",function(){return e})}}]);