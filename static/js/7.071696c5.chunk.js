(this["webpackJsonpreact-samurai"]=this["webpackJsonpreact-samurai"]||[]).push([[7],{227:function(e,t,r){e.exports={formControl:"FormsControls_formControl__35sHi",error:"FormsControls_error__3dHb_",form_summery_error:"FormsControls_form_summery_error__1hCjM"}},228:function(e,t,r){"use strict";r.d(t,"b",(function(){return m})),r.d(t,"a",(function(){return u}));var n=r(229),a=r(0),o=r.n(a),c=r(227),l=r.n(c),m=function(e){var t=e.input,r=e.meta,a=r.touched,c=r.error,m=Object(n.a)(e,["input","meta"]),u=a&&c;return o.a.createElement("div",{className:"".concat(l.a.formControl," ").concat(u?l.a.error:"")},o.a.createElement("textarea",Object.assign({},m,t))," ",o.a.createElement("br",null),u&&o.a.createElement("span",null," ",c))},u=function(e){var t=e.input,r=e.meta,a=r.touched,c=r.error,m=Object(n.a)(e,["input","meta"]),u=a&&c;return o.a.createElement("div",{className:"".concat(l.a.formControl," ").concat(u?l.a.error:"")},o.a.createElement("input",Object.assign({},m,t))," ",o.a.createElement("br",null),u&&o.a.createElement("span",null," ",c))}},230:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));var n=function(e){if(!e)return"Field is required!"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},303:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(110),c=r(111),l=r(228),m=r(230),u=r(16),i=r(25),s=r(20),f=r(227),d=r.n(f),b=Object(m.a)(30),p=Object(c.a)({form:"login"})((function(e){var t=e.handleSubmit,r=e.error;return a.a.createElement("form",{onSubmit:t},a.a.createElement("div",null,a.a.createElement(o.a,{component:l.a,validate:[m.b,b],name:"email",placeholder:"Email",type:"text"})),a.a.createElement("div",null,a.a.createElement(o.a,{component:l.a,validate:[m.b],name:"password",placeholder:"Password",type:"password"})),a.a.createElement("div",null,a.a.createElement(o.a,{component:l.a,name:"rememberMe",type:"checkbox"}),"Remember me"),r&&a.a.createElement("div",{className:d.a.form_summery_error},r),a.a.createElement("div",null,a.a.createElement("button",null,"Send")))}));t.default=Object(u.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:i.c,logout:i.d})((function(e){return e.isAuth?a.a.createElement(s.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(p,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))}))}}]);
//# sourceMappingURL=7.071696c5.chunk.js.map