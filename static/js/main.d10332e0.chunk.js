(this["webpackJsonpreact-samurai"]=this["webpackJsonpreact-samurai"]||[]).push([[1],{137:function(e,t,n){e.exports=n(226)},142:function(e,t,n){},143:function(e,t,n){},226:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(44),u=n.n(i);n(142),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(32),c=n(33),o=n(35),l=n(34),d=n(36),f=(n(143),n(53)),p=n.n(f),m=n(17),h=function(e){return r.a.createElement("header",{className:p.a.header},r.a.createElement("img",{src:"https://s2.logaster.com/static/v3/img/products/logo.png",alt:"logo"}),r.a.createElement("div",{className:p.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"logout")):r.a.createElement(m.b,{to:"/login"},"Login")))},g=n(16),v=n(25),_=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(h,this.props)}}]),t}(r.a.Component),E=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:v.d})(_),b=n(31),O=n.n(b),w=n(26),S=n.n(w),j=function(e){var t=e.dataFriends.map((function(e){return r.a.createElement("div",{className:S.a.asideFriends__item,key:e.id},r.a.createElement("a",{href:"#"},r.a.createElement("img",{className:S.a.friend_avatar,src:e.avatarLink,alt:"avatar"})),r.a.createElement("a",{className:S.a.friend_name,href:"#"},e.friendName))}));return r.a.createElement("div",{className:S.a.aside_wrap},r.a.createElement("h3",null,"Friends"),r.a.createElement("div",{className:S.a.asideFriends},t))},y=function(e){var t=e.dataMenu.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(m.b,{to:e.link,className:O.a.mainNav_item,activeClassName:O.a.active_item},e.name))}));return r.a.createElement("aside",{className:O.a.aside},r.a.createElement("nav",null,r.a.createElement("ul",{className:O.a.mainNav},t)),r.a.createElement(j,{dataFriends:e.dataFriends}))},k=Object(g.b)((function(e){return{dataMenu:e.asideState.dataMenu,dataFriends:e.asideState.dataFriends}}))(y),N=n(58),T=n(20),I=n(4),A=n.n(I),P=n(6),F=n(5),C={initialized:!1},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS":return Object(F.a)({},e,{initialized:!0});default:return e}},x=n(15),U=n(80),G=n(59),R=n(74),D={dataMenu:[{id:1,link:"/Profile",name:"Profile"},{id:2,link:"/dialogs",name:"Dialogs"},{id:3,link:"/users",name:"Users"},{id:4,link:"/news",name:"News"},{id:5,link:"/music",name:"Music"},{id:6,link:"/settings",name:"Settings"}],dataFriends:[{id:1,avatarLink:"./images/avatars/mishka.jpg",friendName:"\u041c\u0438\u0448\u043a\u0430"},{id:2,avatarLink:"./images/avatars/vlad.jpg",friendName:"\u0412\u043b\u0430\u0434"},{id:3,avatarLink:"./images/avatars/nastya.jpg",friendName:"\u041d\u0430\u0441\u044c\u043a\u0430"}]},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D;arguments.length>1&&arguments[1];return e},z=n(81),W=n(87),B=Object(x.c)({profilePage:G.b,dialogsPage:R.a,asideState:M,usersPage:z.a,auth:v.b,form:U.a,app:L}),H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.d,J=Object(x.e)(B,H(Object(x.a)(W.a)));window.__store__=J;var Y=J,q=r.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,303))})),V=r.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,307))})),X=r.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,308))})),Z=r.a.lazy((function(){return n.e(5).then(n.bind(null,309))})),K=r.a.lazy((function(){return n.e(8).then(n.bind(null,304))})),$=r.a.lazy((function(){return n.e(9).then(n.bind(null,305))})),Q=r.a.lazy((function(){return n.e(10).then(n.bind(null,306))})),ee=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"appWrapper"},r.a.createElement(E,null),r.a.createElement(k,null),r.a.createElement("div",{className:"appWrapperContent"},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...")},r.a.createElement(T.b,{path:"/login",render:function(){return r.a.createElement(q,null)}}),r.a.createElement(T.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(V,null)}}),r.a.createElement(T.b,{path:"/dialogs",render:function(){return r.a.createElement(X,null)}}),r.a.createElement(T.b,{path:"/users",render:function(){return r.a.createElement(Z,null)}}),r.a.createElement(T.b,{path:"/news",component:$}),r.a.createElement(T.b,{path:"/music",component:K}),r.a.createElement(T.b,{path:"/settings",component:Q})))):r.a.createElement(N.a,null)}}]),t}(r.a.Component),te=Object(x.d)(T.f,Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(P.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(v.a)());case 2:t({type:"app/INITIALIZED_SUCCESS"});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(ee),ne=function(){return r.a.createElement(m.a,null,r.a.createElement(g.a,{store:Y},r.a.createElement(te,null)))};u.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},25:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return p}));var a=n(4),r=n.n(a),i=n(6),u=n(5),s=n(8),c=n(46),o={userId:null,email:null,login:null,isAuth:!1},l=function(e,t,n,a){return{type:"auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},d=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){var n,a,i,u,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.me();case 2:0===(n=e.sent).resultCode&&(a=n.data,i=a.id,u=a.email,c=a.login,t(l(i,u,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(e,t,n){return function(){var a=Object(i.a)(r.a.mark((function a(i){var u,o;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,s.a.login(e,t,n);case 2:0===(u=a.sent).resultCode?i(d()):(o=u.messages.length>0?u.messages[0]:"Some error!",i(Object(c.a)("login",{_error:o})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},p=function(){return function(){var e=Object(i.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.logout();case 2:0===e.sent.resultCode&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(u.a)({},e,{},t.payload);default:return e}}},26:function(e,t,n){e.exports={aside_wrap:"AsideFriends_aside_wrap__1eOkY",asideFriends:"AsideFriends_asideFriends__L4YEA",asideFriends__item:"AsideFriends_asideFriends__item__1DPia",friend_avatar:"AsideFriends_friend_avatar__3Gi2-",friend_name:"AsideFriends_friend_name__qq-s-"}},31:function(e,t,n){e.exports={aside:"Aside_aside__1hhm_",mainNav:"Aside_mainNav__2NNsx",mainNav_item:"Aside_mainNav_item__1NEAl",active_item:"Aside_active_item__1fMr-"}},53:function(e,t,n){e.exports={header:"Header_header__oAG83",loginBlock:"Header_loginBlock__331_k"}},58:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(85),u=n.n(i),s=n(86),c=n.n(s);t.a=function(e){return r.a.createElement("div",{className:u.a.wrapper},r.a.createElement("img",{src:c.a,alt:"Preloader"}))}},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return h}));var a=n(4),r=n.n(a),i=n(6),u=n(22),s=n(5),c=n(8),o="profile/NEW_POST",l={postData:[{id:1,message:"It's my first post1",likeCount:2},{id:2,message:"Hello! How are you?",likeCount:4},{id:3,message:"\u0425\u0435\u0439, \u0439\u043e\u0443",likeCount:10}],profile:null,status:""},d=function(e){return{type:o,newPostBody:e}},f=function(e){return{type:"profile/SET_STATUS",status:e}},p=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getProfile(e);case 2:a=t.sent,n({type:"profile/SET_USER_PROFILE",profile:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.getStatus(e);case 2:a=t.sent,n(f(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(s.a)({},e,{postData:[].concat(Object(u.a)(e.postData),[{id:4,message:t.newPostBody,likeCount:0}]),newPostText:""});case"profile/DELETE_POST":return Object(s.a)({},e,{postData:e.postData.filter((function(e){return e.id!==t.postId}))});case"profile/SET_USER_PROFILE":return Object(s.a)({},e,{profile:t.profile});case"profile/SET_STATUS":return Object(s.a)({},e,{status:t.status});default:return e}}},74:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var a=n(22),r=n(5),i={dataDialogsItem:[{id:1,name:"Dencha"},{id:2,name:"Mishka"},{id:3,name:"Nastya"},{id:4,name:"Jenya"},{id:5,name:"Vlad"}],dataMessages:[{id:1,content:"Hi",avatar:"./images/avatars/mishka.jpg"},{id:2,content:"How are you?",avatar:"./images/avatars/mishka.jpg"},{id:3,content:"\u0419\u043e\u0443! \u0427\u043e \u043a\u0430\u043a \u0447\u0443\u0432\u0430\u0430\u0430\u0430\u0430\u043a!",avatar:"./images/avatars/molib.jpg"}]},u=function(e){return{type:"dialogs/NEW_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/NEW_MESSAGE":var n=t.newMessageBody;return Object(r.a)({},e,{dataMessages:[].concat(Object(a.a)(e.dataMessages),[{id:4,content:n,avatar:"./images/avatars/molib.jpg"}])});default:return e}}},8:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var a=n(84),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"7099b740-e8c5-45c1-9acb-124c841c1fd7"}}),i={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))}},u={me:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logout:function(){return r.delete("auth/login").then((function(e){return e.data}))}},s={getProfile:function(e){return r.get("/profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return r.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return r.put("profile/status",{status:e})}}},81:function(e,t,n){"use strict";var a=n(4),r=n.n(a),i=n(6),u=n(22),s=n(5),c=n(8),o=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(s.a)({},e,{},a):e}))};n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return g})),n.d(t,"c",(function(){return v})),n.d(t,"b",(function(){return E})),n.d(t,"f",(function(){return b}));var l="users/FOLLOW",d={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},f=function(e){return{type:l,userId:e}},p=function(e){return{type:"users/UNFOLLOW",userId:e}},m=function(e){return{type:"users/SET_CURRENT_PAGE",currentPage:e}},h=function(e){return{type:"users/TOGGLE_IS_FETCHING",isFetching:e}},g=function(e,t){return{type:"users/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},v=function(e,t){return function(){var n=Object(i.a)(r.a.mark((function n(a){var i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(h(!0)),n.next=3,c.c.getUsers(e,t);case 3:i=n.sent,a(h(!1)),a({type:"users/SET_USERS",users:i.items}),a({type:"users/SET_TOTAL_USERS_COUNT",totalUsersCount:i.totalCount});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},_=function(){var e=Object(i.a)(r.a.mark((function e(t,n,a,i){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g(!0,n)),e.next=3,a(n);case 3:0===e.sent.resultCode&&t(i(n)),t(g(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),E=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=c.c.follow.bind(c.c),_(n,e,a,f);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=c.c.unfollow.bind(c.c),_(n,e,a,p);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(s.a)({},e,{users:o(e.users,t.userId,"id",{followed:!0})});case"users/UNFOLLOW":return Object(s.a)({},e,{users:o(e.users,t.userId,"id",{followed:!1})});case"users/SET_USERS":return Object(s.a)({},e,{users:Object(u.a)(t.users)});case"users/SET_CURRENT_PAGE":return Object(s.a)({},e,{currentPage:t.currentPage});case"users/SET_TOTAL_USERS_COUNT":return Object(s.a)({},e,{totalUsersCount:t.totalUsersCount});case"users/TOGGLE_IS_FETCHING":return Object(s.a)({},e,{isFetching:t.isFetching});case"users/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(s.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(u.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},85:function(e,t,n){e.exports={wrapper:"Preloader_wrapper__sJisL"}},86:function(e,t,n){e.exports=n.p+"static/media/preloader.dbbc21bd.svg"}},[[137,2,3]]]);
//# sourceMappingURL=main.d10332e0.chunk.js.map