(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{216:function(t,n,e){"use strict";var o=e(6),r=e(144)(5),l=!0;"find"in[]&&Array(1).find((function(){l=!1})),o(o.P+o.F*l,"Array",{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),e(109)("find")},230:function(t,n){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},237:function(t,n,e){var o=e(254),r="object"==typeof self&&self&&self.Object===Object&&self,l=o||r||Function("return this")();t.exports=l},238:function(t,n,e){var o=e(237).Symbol;t.exports=o},251:function(t,n,e){var o=e(252),r=e(230);t.exports=function(t,n,e){var l=!0,c=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return r(e)&&(l="leading"in e?!!e.leading:l,c="trailing"in e?!!e.trailing:c),o(t,n,{leading:l,maxWait:n,trailing:c})}},252:function(t,n,e){var o=e(230),r=e(253),l=e(255),c=Math.max,f=Math.min;t.exports=function(t,n,e){var h,v,d,m,x,y,w=0,_=!1,k=!1,$=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function C(time){var n=h,e=v;return h=v=void 0,w=time,m=t.apply(e,n)}function T(time){return w=time,x=setTimeout(E,n),_?C(time):m}function j(time){var t=time-y;return void 0===y||t>=n||t<0||k&&time-w>=d}function E(){var time=r();if(j(time))return O(time);x=setTimeout(E,function(time){var t=n-(time-y);return k?f(t,d-(time-w)):t}(time))}function O(time){return x=void 0,$&&h?C(time):(h=v=void 0,m)}function N(){var time=r(),t=j(time);if(h=arguments,v=this,y=time,t){if(void 0===x)return T(y);if(k)return clearTimeout(x),x=setTimeout(E,n),C(y)}return void 0===x&&(x=setTimeout(E,n)),m}return n=l(n)||0,o(e)&&(_=!!e.leading,d=(k="maxWait"in e)?c(l(e.maxWait)||0,n):d,$="trailing"in e?!!e.trailing:$),N.cancel=function(){void 0!==x&&clearTimeout(x),w=0,h=y=v=x=void 0},N.flush=function(){return void 0===x?m:O(r())},N}},253:function(t,n,e){var o=e(237);t.exports=function(){return o.Date.now()}},254:function(t,n,e){(function(n){var e="object"==typeof n&&n&&n.Object===Object&&n;t.exports=e}).call(this,e(26))},255:function(t,n,e){var o=e(230),r=e(256),l=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,h=/^0o[0-7]+$/i,v=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(r(t))return NaN;if(o(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=o(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var e=f.test(t);return e||h.test(t)?v(t.slice(2),e?2:8):c.test(t)?NaN:+t}},256:function(t,n,e){var o=e(257),r=e(260);t.exports=function(t){return"symbol"==typeof t||r(t)&&"[object Symbol]"==o(t)}},257:function(t,n,e){var o=e(238),r=e(258),l=e(259),c=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":c&&c in Object(t)?r(t):l(t)}},258:function(t,n,e){var o=e(238),r=Object.prototype,l=r.hasOwnProperty,c=r.toString,f=o?o.toStringTag:void 0;t.exports=function(t){var n=l.call(t,f),e=t[f];try{t[f]=void 0;var o=!0}catch(t){}var r=c.call(t);return o&&(n?t[f]=e:delete t[f]),r}},259:function(t,n){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},260:function(t,n){t.exports=function(t){return null!=t&&"object"==typeof t}},266:function(t,n,e){"use strict";e.r(n);e(64),e(216),e(25);var o=e(251),r=e.n(o),l=e(134),c=e(135),f={components:{tpUiCaretDown:l.a,tpUiTimes:c.a},data:function(){return{current:0,setInter:null,showNav:!1,defaultAsideMenu:this.$store.state.asideMenu}},computed:{list:function(){return this.$store.state.menu[this.$route.params.section]||[]},visible:function(){return this.$store.state.visibleAffix},path:function(){return"/"===this.$route.path.slice(-1)?this.$route.path.slice(0,-1):this.$route.path},menu:function(){return"/"+this.$route.params.section},breadcrumb:function(){var t=this,n=null;return this.list.forEach((function(e){e.links.forEach((function(link){(t.$route.params.slug&&link.to==="/"+t.$route.params.slug||!t.$route.params.slug&&(""===link.to||"/"===link.to))&&(n={group:e.title,title:link.name})}))})),n},contents:function(){var t=this,n=[];return this.list.forEach((function(e){if(Array.isArray(e.links)&&!n.length){var o=e.links.find((function(link){return t.path===t.menu+link.to}));o&&o.contents&&o.contents.forEach((function(content){var t=document.getElementById(content.to.slice(1));t&&n.push(t.offsetTop)}))}})),n}},watch:{"$route.fullPath":"hashChanged"},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("scroll",r()((function(){return t.scrolled()}),100)),t.$route.hash.length&&t.scrollTo(t.$route.hash),t.scrolled()}))},methods:{hashChanged:function(t,n){var e=this;this.showNav=!1,t=t.split("#"),n=n.split("#"),this.$nextTick((function(){return e.scrollTo(e.$route.hash)}))},toggle:function(){this.$store.commit("toggle","visibleAffix")},scrolled:function(){var t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,n=document.documentElement,e=(window.pageYOffset||n.scrollTop)-(n.clientTop||0),o=this.contents.find((function(n){return n>e+t/2}));this.current=(o?this.contents.indexOf(o):this.contents.length)-1},scrollTo:function(t){var n=this;this._scrolling||(this._scrolling=!0,this.$store.state.visibleAffix&&this.toggle(),t!==this.$route.hash&&this.$router.push(this.$route.fullPath.split("#")[0]+t),this.$nextTick((function(){var e=document.getElementById(t.slice(1));if(e){var o=e.offsetTop-(window.outerWidth<1024?90:120),r=document.documentElement,l=(window.pageYOffset||r.scrollTop)-(r.clientTop||0),c=(o>l?o-l:l-o)/25,i=0;window.clearInterval(n.setInter),n.setInter=window.setInterval((function(){l=o>l?l+c:l-c,window.scrollTo(0,l),25===++i&&(n._scrolling=!1,window.clearInterval(n.setInter))}),10)}else n._scrolling=!1})))}}},h=e(0),v={components:{tpUiAside:Object(h.a)(f,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("aside",{staticClass:"opacity-transition block bg-gray-100 mt-8 -mx-4 lg:bg-transparent lg:mt-0 lg:mx-0 lg:inset-0 z-90 lg:mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-1/4 lg:block",class:{"opacity-25":t.$store.state.focusMode}},[e("div",{staticClass:"h-full overflow-y-auto scrolling-touch text-center lg:text-left lg:h-auto lg:block lg:relative lg:sticky lg:top-24"},[t.breadcrumb?e("a",{staticClass:"block text-left p-4 lg:hidden",attrs:{href:"#nav"},on:{click:function(n){n.preventDefault(),t.showNav=!t.showNav}}},[t.showNav?e("tp-ui-times",{staticClass:"float-right mt-1 mr-1 h-5"}):e("tp-ui-caret-down",{staticClass:"float-right mt-2 mr-1"}),t._v(" "),e("span",{staticClass:"uppercase text-gray-500 ml-1"},[t._v(t._s(t.breadcrumb.group)+" :")]),t._v(" "+t._s(t.breadcrumb.title)+"\n    ")],1):t._e(),t._v(" "),e("nav",{staticClass:"pt-8 lg:overflow-y-auto lg:block lg:pl-0 lg:pr-8 sticky?lg:h-(screen-24)",class:{hidden:!t.showNav}},[e("div",{staticClass:"p-4 mb-4 bg-gray-300"},[t._l(t.defaultAsideMenu,(function(n,o){return[e("h3",{key:"title-"+o,staticClass:"uppercase text-gray-500 pb-2"},[t._v("\n            "+t._s(n.title)+"\n          ")]),t._v(" "),e("ul",{key:"list-"+o,staticClass:"pl-2"},t._l(n.links,(function(n){return e("li",{key:n.to,staticClass:"py-1"},[e("nuxt-link",{staticClass:"block text-gray-700 hover:text-apt-lightGreen",class:{"text-apt-lightGreen":t.path===n.to},attrs:{to:{name:"section-slug",params:{section:n.to}},exact:""}},[t._v("\n                "+t._s(n.name)+"\n              ")])],1)})),0)]}))],2),t._v(" "),t._l(t.list,(function(n,o){return[e("h3",{key:"title-"+o,staticClass:"uppercase text-gray-500 pb-2"},[t._v("\n          "+t._s(n.title)+"\n        ")]),t._v(" "),e("ul",{key:"list-"+o,staticClass:"pb-8"},t._l(n.links,(function(link){return e("li",{key:link.to,staticClass:"py-2"},[e("nuxt-link",{staticClass:"text-gray-700 hover:text-apt-lightGreen",class:{"text-apt-lightGreen":t.path===t.menu+link.to},attrs:{to:t.menu+link.to,exact:""}},[t._v("\n              "+t._s(link.name)+"\n            ")]),t._v(" "),t.path===t.menu+link.to&&link.contents?e("ul",{staticClass:"pl-2 py-1"},t._l(link.contents,(function(content,i){return e("li",{key:content.to,staticClass:"py-1 text-sm"},[e("a",{staticClass:"text-gray-600",class:{"text-apt-lightGreen":t.current===i},attrs:{href:t.menu+link.to+content.to},on:{click:function(n){return n.preventDefault(),t.scrollTo(content.to)}}},[t._v("\n                  "+t._s(content.name)+"\n                ")])])})),0):t._e()],1)})),0)]}))],2)])])}),[],!1,null,null,null).exports},validate:function(t){var n=t.store,e=t.params;return void 0!==n.state.menu[e.section]}},d=Object(h.a)(v,(function(){var t=this.$createElement,n=this._self._c||t;return n("tp-ui-container",[n("div",{staticClass:"lg:flex"},[n("tp-ui-aside",{staticClass:"hidden lg:block"}),this._v(" "),n("div",{staticClass:"min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4"},[n("nuxt-child")],1)],1)])}),[],!1,null,null,null);n.default=d.exports}}]);