(function(){"use strict";var e={8508:function(e,t,i){var n=i(144),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",{attrs:{id:"inspire"}},[i("app-navigation",{staticClass:"d-none d-sm-block"}),i("v-app-bar",{staticClass:"d-sm-none",attrs:{absolute:"",color:"#4158d0",dark:"",dense:"",app:"","shrink-on-scroll":"",src:"https://picsum.photos/1920/1080?random","fade-img-on-scroll":"","scroll-target":"#scrolling-techniques-3",prominent:""},scopedSlots:e._u([{key:"img",fn:function(t){var n=t.props;return[i("v-img",e._b({attrs:{gradient:"to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"}},"v-img",n,!1))]}}])},[i("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),i("v-app-bar-title",{staticClass:"small"},[e._v("Meta Data")]),i("v-spacer"),i("v-btn",{attrs:{icon:""}},[i("v-icon",[e._v("mdi-magnify")])],1),i("v-btn",{attrs:{icon:""}},[i("v-icon",[e._v("mdi-dots-vertical")])],1)],1),i("v-navigation-drawer",{staticClass:"d-sm-none",staticStyle:{"z-index":"123456"},attrs:{absolute:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",{staticClass:"text-h6"},[e._v(" Meta Data ")])],1)],1),i("v-divider"),i("v-list",{attrs:{nav:"","active-class":"active-class"}},[e._l(e.sideNavLinks,(function(t){return[t.divider?[i("v-divider",{key:t.title})]:[i("v-list-item",{key:t.title,attrs:{to:{name:t.route},exact:""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[i("v-list-item-icon",[i("v-icon",[e._v(e._s(t.icon))])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"text-capitalize"},[e._v(e._s(t.title))])],1)],1)]]})),i("v-list-item",{staticStyle:{cursor:"pointer"}},[i("v-list-item-icon",[i("v-icon",[e._v("mdi-share-variant")])],1),i("v-list-item-content",[i("v-list-item-title",{staticClass:"text-capitalize"},[e._v("invite friend")])],1)],1)],2)],1),i("v-main",{staticClass:"px-4"},[i("router-view",{staticClass:"mt-4"})],1),i("v-bottom-navigation",{staticClass:"d-sm-none",attrs:{app:"",grow:"",shift:"","background-color":"#fff",value:e.value,color:"#4158d0"}},e._l(e.bottomNavLinks,(function(t){return i("v-btn",{key:t.title,attrs:{text:""},on:{click:function(i){return e.goto(t.route)}}},[i("span",{staticClass:"text-capitalize"},[e._v(e._s(t.title))]),i("v-icon",[e._v(e._s(t.icon))])],1)})),1),i("app-aside",{staticClass:"d-none"})],1)},r=[],a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("aside",[i("v-form",{on:{submit:function(t){return t.preventDefault(),e.searchFiles.apply(null,arguments)}}},[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[i("v-text-field",{attrs:{outlined:"",dense:"",type:"search",placeholder:"search here","append-icon":"mdi-magnify"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search.apply(null,arguments)}},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1)],1)],1),i("v-list",{staticClass:"d-none"},e._l(e.categories,(function(t){return i("v-list-item",{key:t.title,staticClass:"text--disabled small"},[i("v-list-item-content",[i("v-list-item-title",[e._v(e._s(t.title)+" "),i("v-chip",{attrs:{small:""}},[e._v(e._s(t.count))])],1)],1)],1)})),1)],1)},s=[],l={name:"AppAside",data:()=>({categories:[{title:"Animation",count:0},{title:"Code generator",count:0},{title:"Bookmark",count:0},{title:"Activities",count:0}],search:""}),methods:{async searchFiles(){console.log(this.search)}}},c=l,u=i(1001),d=i(3453),m=i.n(d),p=i(5424),v=i(2102),f=i(9846),h=i(6232),g=i(6816),b=i(7620),k=i(3403),y=i(2877),_=i(5351),w=(0,u.Z)(c,a,s,!1,null,null,null),Z=w.exports;m()(w,{VChip:p.Z,VCol:v.Z,VContainer:f.Z,VForm:h.Z,VList:g.Z,VListItem:b.Z,VListItemContent:k.km,VListItemTitle:k.V9,VRow:y.Z,VTextField:_.Z});var C=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("nav",{attrs:{id:"app-navigation"}},[i("div",{staticClass:"user-image-and-name"},[i("v-avatar",{attrs:{color:"indigo"}},[i("v-icon",{attrs:{dark:""}},[e._v(" mdi-account-circle ")])],1),e._m(0)],1),i("ul",e._l(e.links,(function(e){return i("li",{key:e.title},[i("nav-item",{staticClass:"text-capitalize",attrs:{icon:e.icon,title:e.title,route:e.route}})],1)})),0),i("a",{staticClass:"logout-button",attrs:{href:"/logout"}},[i("v-icon",{attrs:{right:"",color:"#fff"}},[e._v("mdi-logout")]),e._v(" logout")],1)])},V=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"name"},[i("span",{staticClass:"user-name-surname"},[e._v("Opeoluwa")]),i("span",{staticClass:"user-email"},[e._v("Opeoluwa")])])}],x=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("router-link",{staticClass:"nav-item",attrs:{to:{name:e.route}}},[i("v-icon",[e._v(e._s(e.icon))]),e._v(" "+e._s(e.title)+" ")],1)},A=[],N={name:"NavItem",props:{icon:{type:String,required:!0},title:{type:String,required:!0},route:{type:String,required:!0}}},O=N,j=i(6428),I=(0,u.Z)(O,x,A,!1,null,null,null),L=I.exports;m()(I,{VIcon:j.Z});var E=n.Z.extend({name:"AppNavigation",components:{NavItem:L},data:()=>({links:[{icon:"mdi-home-variant-outline",title:"home",route:"home"},{icon:"mdi-account-circle-outline",title:"profile",route:"profile"},{icon:"mdi-post",title:"activities",route:"activities"},{icon:"mdi-bookmark-outline",title:"bookmark",route:"bookmark"},{icon:"mdi-security",title:"security",route:"security"},{icon:"mdi-cog-outline",title:"settings",route:"settings"},{icon:"mdi-share-variant",title:"invite friend",route:""}]})}),S=E,T=i(6370),z=(0,u.Z)(S,C,V,!1,null,"32ade6a1",null),P=z.exports;m()(z,{VAvatar:T.Z,VIcon:j.Z});var q=n.Z.extend({components:{AppNavigation:P,AppAside:Z},name:"App",data:()=>({drawer:null,active:1,value:null,bottomNavLinks:[{icon:"mdi-home-variant-outline",title:"home",route:"home"},{icon:"mdi-bookmark-outline",title:"bookmark",route:"bookmark"},{icon:"mdi-cog-outline",title:"settings",route:"settings"},{icon:"mdi-account-circle",title:"profile",route:"profile"}],sideNavLinks:[{icon:"mdi-home-variant-outline",title:"home",route:"home"},{icon:"mdi-account-circle",title:"profile",route:"profile"},{icon:"mdi-bookmark-outline",title:"bookmark",route:"bookmark"},{icon:"mdi-security",title:"security",route:"security"},{divider:!0},{icon:"mdi-cog-outline",title:"settings",route:"settings"}]}),methods:{goto(e){this.$router.replace({name:e})}}}),B=q,F=i(7524),$=i(4143),M=i(5206),D=i(7905),H=i(1049),R=i(4995),G=i(1418),J=i(7047),K=i(459),Q=i(7877),U=i(4216),W=i(9762),X=(0,u.Z)(B,o,r,!1,null,null,null),Y=X.exports;m()(X,{VApp:F.Z,VAppBar:$.Z,VAppBarNavIcon:M.Z,VAppBarTitle:D.Z,VBottomNavigation:H.Z,VBtn:R.Z,VDivider:G.Z,VIcon:j.Z,VImg:J.Z,VList:g.Z,VListItem:b.Z,VListItemContent:k.km,VListItemIcon:K.Z,VListItemTitle:k.V9,VMain:Q.Z,VNavigationDrawer:U.Z,VSpacer:W.Z});var ee=i(5205);(0,ee.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var te=i(8345),ie=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._v(" ride stock nice sides hurry classroom mathematics fully meal balance hard our shadow writing long knife you nation donkey rice gone rubbed rear gray hello africa llllllllltaught been build fight population earn receive whole today cowboy silent inch greatly sitting article unhappy drop opposite as done meet neighborhood dollar twentydish themselves colony vote becoming potatoes clay detail butter open scale solid finger stopped surprise balloon me gas congress club force exchange trace talkimportance account men war range popular house scale lead noise sick until identity headed swung sign improve occasionally large planning dream gravity consist brushability position class nine certain modern rod shinning stage choice tales composed fact realize become to except condition score open send earn plastic policedone lungs physical various metal teacher customs off correctly think whose remarkable dead wise help composed joy shade round dinner basis condition pure depthdoes copy enter wonder ought tank drive prize shall laugh case idea label shallow touch hospital apartment industrial bark upper middle raise promised tinharbor outside simple planning factor blind position together rhyme phrase row shelf word breeze amount voyage year peace view information section choose equipment bowlrailroad month instant although book object fallen shade oldest hat impossible last north roar end spin silly larger determine special ourselves comfortable equipment train ")])},ne=[],oe={name:"HomeView"},re=oe,ae=(0,u.Z)(re,ie,ne,!1,null,null,null),se=ae.exports;const le=()=>i.e(626).then(i.bind(i,5626)),ce=()=>i.e(395).then(i.bind(i,6395)),ue=()=>i.e(983).then(i.bind(i,6983)),de=()=>i.e(948).then(i.bind(i,6948)),me=()=>i.e(726).then(i.bind(i,7726));n.Z.use(te.Z);const pe=[{path:"/u",name:"home",component:se},{path:"/u/activities",name:"activities",component:le},{path:"/u/bookmark",name:"bookmark",component:ce},{path:"/u/profile",name:"profile",component:ue},{path:"/u/security",name:"security",component:de},{path:"/u/settings",name:"settings",component:me}],ve=new te.Z({mode:"history",base:"/",routes:pe});var fe=ve,he=i(629);n.Z.use(he.ZP);var ge=new he.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),be=i(5671);n.Z.use(be.Z);var ke=new be.Z({});n.Z.config.productionTip=!1,new n.Z({router:fe,store:ge,vuetify:ke,render:e=>e(Y)}).$mount("#app")}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,i),r.exports}i.m=e,function(){var e=[];i.O=function(t,n,o,r){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],o=e[u][1],r=e[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&r||a>=r)&&Object.keys(i.O).every((function(e){return i.O[e](n[l])}))?n.splice(l--,1):(s=!1,r<a&&(a=r));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,o,r]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,n){return i.f[n](e,t),t}),[]))}}(),function(){i.u=function(e){return"js/"+e+"."+{395:"1a6248de",626:"44a320b8",726:"301a53f2",948:"d6cd1891",983:"a09425ec"}[e]+".js"}}(),function(){i.miniCssF=function(e){}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="meta-data:";i.l=function(n,o,r,a){if(e[n])e[n].push(o);else{var s,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+r){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",t+r),s.src=n),e[n]=[o];var m=function(t,i){s.onerror=s.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(i)})),t)return t(i)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){i.p="/"}(),function(){var e={143:0};i.f.j=function(t,n){var o=i.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(i,n){o=e[t]=[i,n]}));n.push(o[2]=r);var a=i.p+i.u(t),s=new Error,l=function(n){if(i.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,o[1](s)}};i.l(a,l,"chunk-"+t,t)}},i.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,a=n[0],s=n[1],l=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(l)var u=l(i)}for(t&&t(n);c<a.length;c++)r=a[c],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(u)},n=self["webpackChunkmeta_data"]=self["webpackChunkmeta_data"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(8508)}));n=i.O(n)})();
//# sourceMappingURL=app.5df9b0c4.js.map