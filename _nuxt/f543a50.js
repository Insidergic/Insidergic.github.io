(window.webpackJsonp=window.webpackJsonp||[]).push([[10,4,14],{209:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"mr-3 flex-1 center"},[e("div",{staticClass:"my-img"},[e("img",{attrs:{src:r(213)}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"mr-3 flex-1 mr-075"},[r("div",{staticClass:"my-regards"},[r("p"),r("h2",[t._v("Hi,")]),r("p"),t._v(" "),r("p"),r("h2",[r("strong",[t._v("I'm Nathan Feitoza")])]),r("p")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"mr-3 flex-1 mr-075"},[r("div",{staticClass:"footer"},[r("p",[t._v("Copyright © 2021 License")]),t._v(" "),r("p",[t._v("Powered by Nathan Feitoza and Nuxt")])])])}],l={name:"Sidebar",data:function(){return{menuItems:[{name:"Home",link:"/",icon:["fas","home"]},{name:"About",link:"/about",icon:["fas","user"]},{name:"Tags",link:"/tags",icon:["fas","tags"]},{name:"Contact",link:"/contact",icon:["fas","envelope"]}]}}},c=r(35),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full md:w-1/5 sidebar-blog md:bg-gray-900 px-2 text-center fixed bottom-0 md:pt-8 md:top-0 md:left-0 h-16 md:h-screen"},[r("div",[r("ul",{staticClass:"list-reset flex flex-row md:flex-col text-center md:text-left"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._l(t.menuItems,(function(e,n){return r("li",{key:n,staticClass:"mr-3 flex-1 item"},[r("NuxtLink",{staticClass:"block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white",attrs:{to:e.link}},[r("i",{staticClass:"fas fa-link pr-0 md:pr-3 text-pink-500"}),r("span",{staticClass:"pb-1 md:pb-0 text-xs md:text-base text-white md:font-bold block md:inline-block"},[r("span",{staticClass:"icon"},[r("font-awesome-icon",{attrs:{icon:e.icon}})],1),t._v(t._s(e.name))])])],1)})),t._v(" "),t._m(2)],2)])])}),n,!1,null,null,null);e.default=component.exports},210:function(t,e,r){"use strict";r.r(e);var n=r(2),l=(r(36),r(95),{data:function(){return{searchQuery:"",articles:[]}},watch:{searchQuery:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t){r.next=3;break}return e.articles=[],r.abrupt("return");case 3:return r.next=5,e.$content("articles").limit(6).search(t).fetch();case 5:e.articles=r.sent;case 6:case"end":return r.stop()}}),r)})))()}}}),c=r(35),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-gray-500 text-gray-700 focus:border-gray-300 rounded-md focus:outline-none focus:bg-white bg-white",attrs:{type:"search",autocomplete:"off",placeholder:"Search Articles"},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),t.articles.length?r("ul",{staticClass:"z-10 absolute w-auto flex-1 top-40 bg-white dark:bg-gray-900 rounded-md border border-gray-300 overflow-hidden"},t._l(t.articles,(function(article){return r("li",{key:article.slug},[r("NuxtLink",{staticClass:"flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-green-500 hover:text-black",attrs:{to:{name:"articles-slug",params:{slug:article.slug}}}},[t._v("\n        "+t._s(article.title)+"\n      ")])],1)})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},213:function(t,e,r){t.exports=r.p+"img/eu_lindo.5b3b45d.jpeg"},217:function(t,e,r){"use strict";r.r(e);var n={name:"Layout",components:{Sidebar:r(209).default}},l=r(35),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",[r("div",{staticClass:"flex md:flex-row-reverse flex-wrap"},[r("div",{staticClass:"w-full md:w-4/5"},[r("div",{staticClass:"container pt-16 px-6"},[r("AppSearchInput",{staticClass:"ml-8 to-right"}),t._v(" "),t._t("main")],2)]),t._v(" "),r("Sidebar")],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppSearchInput:r(210).default,Sidebar:r(209).default})}}]);