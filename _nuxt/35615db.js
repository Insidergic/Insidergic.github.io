(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{246:function(t,e,n){"use strict";n.r(e);var r=n(2),c=(n(36),n(224)),o={name:"HomePage",components:{ArticleList:n(214).default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,o=t.error,e.next=3,Object(c.a)({$content:n,params:r,error:o});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))()},head:function(){return{title:"Articles Page ".concat(this.$route.params.page),link:[{hid:"canonical",rel:"canonical",href:"".concat(this.$config.baseUrl,"/articles/page/").concat(this.$route.params.page)}]}}},l=n(35),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",{scopedSlots:t._u([{key:"main",fn:function(){return[n("h1",{staticClass:"font-bold text-4xl"},[t._v("Posts page "+t._s(t.params.page))]),t._v(" "),n("ArticleList",{attrs:{articles:t.paginatedArticles,total:t.allArticles.length}})]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticleList:n(214).default,Layout:n(217).default})}}]);