(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tiwen-tiwen"],{"034c":function(t,e,n){"use strict";n.r(e);var r=n("1f55"),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=i.a},"1f55":function(t,e,n){"use strict";var r=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=r(n("3b8d")),a=[["camera"],["album"],["camera","album"]],o={data:function(){return{imageList:[],imageLength:9,sourceTypeIndex:2,sizeTypeIndex:2,indexJsr:0,array:[{name:"张某某"},{name:"王某某"},{name:"刘某某"}]}},methods:{chooseImage:function(){var t=(0,i.default)(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:uni.chooseImage({sourceType:a[this.sourceTypeIndex],count:this.imageLength-this.imageList.length,success:function(t){e.imageList=e.imageList.concat(t.tempFilePaths)}});case 1:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),previewImage:function(t){var e=t.target.dataset.src;uni.previewImage({current:e,urls:this.imageList})},deleteImage:function(t){console.log("index"+t.target.dataset.index);var e=t.target.dataset.index,n=this,r=n.imageList;r.splice(e,1),n.imageList=r},bindPickerChange:function(t){this.indexJsr=t.detail.value}}};e.default=o},"3b8d":function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return o});var r=n("795b"),i=n.n(r);function a(t,e,n,r,a,o,c){try{var s=t[o](c),u=s.value}catch(l){return void n(l)}s.done?e(u):i.a.resolve(u).then(r,a)}function o(t){return function(){var e=this,n=arguments;return new i.a(function(r,i){var o=t.apply(e,n);function c(t){a(o,r,i,c,s,"next",t)}function s(t){a(o,r,i,c,s,"throw",t)}c(void 0)})}}},5981:function(t,e,n){"use strict";n.r(e);var r=n("6eab"),i=n("034c");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);var o,c=n("f0c5"),s=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"5fc46164",null,!1,r["a"],o);e["default"]=s.exports},"6eab":function(t,e,n){"use strict";var r={"uni-icons":n("aacb").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"tiwenBox"},[n("v-uni-form",{on:{submit:function(e){arguments[0]=e=t.$handleEvent(e)},reset:function(e){arguments[0]=e=t.$handleEvent(e)}}},[n("v-uni-view",{staticClass:"twCard"},[n("v-uni-view",{staticClass:"twCa-tit fl"},[t._v("标题：")]),n("v-uni-view",{staticClass:"twCa-con fl"},[n("v-uni-input",{attrs:{type:"text",value:"",placeholder:"关于西山煤矿"}})],1),n("v-uni-view",{staticClass:"clear"})],1),n("v-uni-view",{staticClass:"twCard"},[n("v-uni-view",{staticClass:"twCa-tit fl"},[t._v("内容：")]),n("v-uni-view",{staticClass:"twCa-con fl"},[n("v-uni-textarea",{attrs:{placeholder:"请输入内容","auto-height":!0}})],1),n("v-uni-view",{staticClass:"clear"})],1),n("v-uni-view",{staticClass:"twCard"},[n("v-uni-view",{staticClass:"twCa-con clear",staticStyle:{width:"100%"}},[t._l(t.imageList,function(e,r){return[n("v-uni-view",{key:r+"_0",staticClass:"twPicBox fl"},[n("v-uni-image",{attrs:{src:e,"data-src":e},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.previewImage.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"del-btn",attrs:{"data-index":r},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteImage.apply(void 0,arguments)}}},[t._v("x")])],1)]}),t.imageList.length<t.imageLength?n("v-uni-label",{staticClass:"twPicBox fl",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.chooseImage.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:"../../static/icon_addFile.png",mode:""}})],1):t._e()],2)],1),n("v-uni-view",{staticClass:"twCard"},[n("v-uni-picker",{attrs:{value:t.indexJsr,range:t.array,"range-key":"name"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"twCa-tit fl"},[t._v("选择接收人")]),n("v-uni-view",{staticClass:"twCa-tit text333 fl"},[t._v(t._s(t.array[t.indexJsr].name))]),n("uni-icons",{staticClass:"twCa-icons fr",attrs:{type:"plus"}}),n("v-uni-view",{staticClass:"clear"})],1)],1),n("v-uni-view",{staticClass:"twSubmitZhan"}),n("v-uni-view",{staticClass:"twSubCz"},[n("v-uni-button",{staticClass:"twSubmit",attrs:{"form-type":"submit"}},[t._v("提交")])],1)],1)],1)},a=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return r})},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=x;var f="suspendedStart",h="suspendedYield",v="executing",p="completed",d={},y={};y[o]=function(){return this};var g=Object.getPrototypeOf,w=g&&g(g(T([])));w&&w!==r&&i.call(w,o)&&(y=w);var m=_.prototype=L.prototype=Object.create(y);C.prototype=m.constructor=_,_.constructor=C,_[s]=C.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===C||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(m),t},l.awrap=function(t){return{__await:t}},E(k.prototype),k.prototype[c]=function(){return this},l.AsyncIterator=k,l.async=function(t,e,n,r){var i=new k(x(t,e,n,r));return l.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(m),m[s]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},l.values=T,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return c.type="throw",c.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;P(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),d}}}function x(t,e,n,r){var i=e&&e.prototype instanceof L?e:L,a=Object.create(i.prototype),o=new S(r||[]);return a._invoke=j(t,n,o),a}function b(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function L(){}function C(){}function _(){}function E(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function k(t){function e(n,r,a,o){var c=b(t[n],t,r);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&i.call(u,"__await")?Promise.resolve(u.__await).then(function(t){e("next",t,a,o)},function(t){e("throw",t,a,o)}):Promise.resolve(u).then(function(t){s.value=t,a(s)},function(t){return e("throw",t,a,o)})}o(c.arg)}var n;function r(t,r){function i(){return new Promise(function(n,i){e(t,r,n,i)})}return n=n?n.then(i,i):i()}this._invoke=r}function j(t,e,n){var r=f;return function(i,a){if(r===v)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw a;return F()}n.method=i,n.arg=a;while(1){var o=n.delegate;if(o){var c=I(o,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var s=b(t,e,n);if("normal"===s.type){if(r=n.done?p:h,s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}function I(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,I(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=b(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,d;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(t){if(t){var e=t[o];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:F}}function F(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())}}]);