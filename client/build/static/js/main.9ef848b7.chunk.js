(this["webpackJsonphooks-books"]=this["webpackJsonphooks-books"]||[]).push([[0],{37:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(32),r=(n(37),n(13)),s=n(4),i=n(5),j=n(8),l=n(6),b=n(44),u=n(2),o=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)(""),h=Object(l.a)(o,2),d=h[0],O=h[1],x=Object(s.l)().state;Object(c.useEffect)((function(){function t(){return(t=Object(j.a)(Object(i.a)().mark((function t(){var e;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.a)("http://localhost:3001/book");case 2:e=t.sent,a(e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}(),x&&O(x.msg)}),[]);var p=function(){var t=Object(j.a)(Object(i.a)().mark((function t(e){var n;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!confirm("B\u1ea1n c\xf3 ch\u1eafc mu\u1ed1n x\xf3a ?")){t.next=3;break}return t.next=3,Object(b.a)({method:"DELETE",url:"http://localhost:3001/book/".concat(e)});case 3:return t.next=5,Object(b.a)("http://localhost:3001/book");case 5:n=t.sent,a(n.data),O("\u0110\xe3 x\xf3a th\xe0nh c\xf4ng!");case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{children:Object(u.jsx)(r.b,{to:"/add",children:"Th\xeam s\xe1ch"})}),Object(u.jsx)("p",{style:{color:"green",backgroundColor:"yellow"},children:d}),Object(u.jsxs)("table",{children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"id"}),Object(u.jsx)("th",{children:"title"}),Object(u.jsx)("th",{children:"description"}),Object(u.jsx)("th",{children:"detail"}),Object(u.jsx)("th",{children:"status"}),Object(u.jsx)("th",{children:"function"})]})}),Object(u.jsx)("tbody",{children:n.map((function(t,e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.id}),Object(u.jsx)("td",{children:t.title}),Object(u.jsx)("td",{children:t.description}),Object(u.jsx)("td",{children:t.detail}),Object(u.jsx)("td",{children:t.status}),Object(u.jsxs)("td",{children:[Object(u.jsx)("button",{children:Object(u.jsx)(r.b,{to:"/edit/"+t.id,children:"S\u1eeda"})}),Object(u.jsx)("button",{onClick:function(){return p(t.id)},children:"X\xf3a"})]})]},e)}))})]})]})},h=function(){var t=Object(c.useState)(""),e=Object(l.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)(""),h=Object(l.a)(o,2),d=h[0],O=h[1],x=Object(c.useState)(""),p=Object(l.a)(x,2),f=p[0],v=p[1],g=Object(c.useState)(""),m=Object(l.a)(g,2),S=m[0],y=m[1],k=Object(c.useState)(""),w=Object(l.a)(k,2),C=w[0],E=w[1],V=Object(c.useState)(""),D=Object(l.a)(V,2),B=D[0],T=D[1],I=Object(c.useState)(""),N=Object(l.a)(I,2),J=N[0],P=N[1],F=Object(c.useState)(""),L=Object(l.a)(F,2),M=L[0],U=L[1],X=Object(s.n)(),q=function(){var t=Object(j.a)(Object(i.a)().mark((function t(e){var n,c,r,s;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=function(){return"xxxx-xxxx-xxx-xxxx".replace(/[x]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))},e.preventDefault(),n=!0,C||(a("Vui l\xf2ng nh\u1eadp ti\xeau \u0111\u1ec1!"),n=!1),B||(O("Vui l\xf2ng nh\u1eadp m\xf4 t\u1ea3!"),n=!1),J||(v("Vui l\xf2ng nh\u1eadp chi ti\u1ebft!"),n=!1),M||(y("Vui l\xf2ng nh\u1eadp tr\u1ea1ng th\xe1i!"),n=!1),!n){t.next=15;break}return r=M,"true"===M&&(r=!0),"false"===M&&(r=!1),s={id:c(),title:C,description:B,detail:J,status:r},t.next=14,Object(b.a)({method:"POST",url:"http://localhost:3001/book",data:s});case 14:X("/",{state:{msg:"\u0110\xe3 th\xeam th\xe0nh c\xf4ng!"}});case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),z=function(t){"title"==t.target.name?t.target.value||a("Vui l\xf2ng nh\u1eadp ti\xeau \u0111\u1ec1!"):"description"==t.target.name?t.target.value||O("Vui l\xf2ng nh\u1eadp m\xf4 t\u1ea3!"):"detail"==t.target.name?t.target.value||v("Vui l\xf2ng nh\u1eadp chi ti\u1ebft!"):"status"==t.target.name&&(t.target.value||y("Vui l\xf2ng nh\u1eadp tr\u1ea1ng th\xe1i!"))},A=function(t){"title"==t.target.name?a(""):"description"==t.target.name?O(""):"detail"==t.target.name?v(""):"status"==t.target.name&&y("")};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:Object(u.jsx)("span",{children:"Th\xeam th\xf4ng tin s\xe1ch"})}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("form",{onSubmit:function(t){return q(t)},children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"title"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{onBlur:function(t){return z(t)},onInput:function(t){return A(t)},type:"text",name:"title",className:n&&"invalid",value:C,onChange:function(t){E(t.target.value)}}),Object(u.jsx)("span",{style:{color:"red",fontStyle:"italic"},children:n})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"description"}),Object(u.jsx)("br",{}),Object(u.jsx)("textarea",{rows:"3",cols:"25",onBlur:function(t){return z(t)},onInput:function(t){return A(t)},name:"description",className:d&&"invalid",value:B,onChange:function(t){T(t.target.value)}}),Object(u.jsx)("span",{style:{color:"red",fontStyle:"italic"},children:d})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"detail"}),Object(u.jsx)("br",{}),Object(u.jsx)("textarea",{rows:"3",cols:"25",onBlur:function(t){return z(t)},onInput:function(t){return A(t)},name:"detail",className:f&&"invalid",value:J,onChange:function(t){P(t.target.value)}}),Object(u.jsx)("span",{style:{color:"red",fontStyle:"italic"},children:f})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"status"}),Object(u.jsx)("br",{}),Object(u.jsxs)("select",{value:M,onChange:function(t){U(t.target.value)},name:"status",className:S&&"invalid",onBlur:function(t){return z(t)},onInput:function(t){return A(t)},children:[Object(u.jsx)("option",{value:"",children:"-- Ch\u1ecdn t\xecnh tr\u1ea1ng s\xe1ch --"}),Object(u.jsx)("option",{value:"true",children:"Enabled"}),Object(u.jsx)("option",{value:"false",children:"Disabled "})]}),Object(u.jsx)("span",{style:{color:"red",fontStyle:"italic"},children:S})]}),Object(u.jsx)("input",{type:"submit",value:"Th\xeam s\xe1ch"})]}),Object(u.jsx)("button",{children:Object(u.jsx)(r.b,{to:"/",children:"Danh s\xe1ch"})})]})]})},d=function(){var t=Object(s.p)().id,e=Object(c.useState)(""),n=Object(l.a)(e,2),a=n[0],o=n[1],h=Object(c.useState)(""),d=Object(l.a)(h,2),O=d[0],x=d[1],p=Object(c.useState)(""),f=Object(l.a)(p,2),v=f[0],g=f[1],m=Object(c.useState)(!0),S=Object(l.a)(m,2),y=S[0],k=S[1],w=Object(s.n)();Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(Object(i.a)().mark((function e(){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)("http://localhost:3001/book/".concat(t));case 2:n=e.sent,o(n.data.title),x(n.data.description),g(n.data.detail),k(1===n.data.status);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]);var C=function(){var e=Object(j.a)(Object(i.a)().mark((function e(n){var c,r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c=y,"true"===y&&(c=!0),"false"===y&&(c=!1),r={id:t,title:a,description:O,detail:v,status:c},e.next=7,Object(b.a)({method:"PUT",url:"http://localhost:3001/book/".concat(t),data:r});case 7:w("/",{state:{msg:"\u0110\xe3 s\u1eeda th\xe0nh c\xf4ng!"}});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:Object(u.jsx)("span",{children:"S\u1eeda th\xf4ng tin s\xe1ch"})}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("form",{onSubmit:function(t){return C(t)},children:[Object(u.jsx)("div",{children:Object(u.jsx)("input",{type:"hidden",name:"id",value:t})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"title"}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"text",value:a,onChange:function(t){o(t.target.value)}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"description"}),Object(u.jsx)("br",{}),Object(u.jsx)("textarea",{rows:"3",cols:"25",value:O,onChange:function(t){x(t.target.value)}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"detail"}),Object(u.jsx)("br",{}),Object(u.jsx)("textarea",{rows:"3",cols:"25",value:v,onChange:function(t){g(t.target.value)}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"status"}),Object(u.jsx)("br",{}),Object(u.jsxs)("select",{value:y,onChange:function(t){k(t.target.value)},children:[Object(u.jsx)("option",{value:"",children:"-- Ch\u1ecdn t\xecnh tr\u1ea1ng s\xe1ch --"}),Object(u.jsx)("option",{value:"true",children:"Enabled"}),Object(u.jsx)("option",{value:"false",children:"Disabled "})]})]}),Object(u.jsx)("input",{type:"submit",value:"S\u1eeda s\xe1ch"})]}),Object(u.jsx)("button",{children:Object(u.jsx)(r.b,{to:"/",children:"Danh s\xe1ch"})})]})]})},O=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(r.a,{children:Object(u.jsxs)(s.c,{children:[Object(u.jsx)(s.a,{path:"/",element:Object(u.jsx)(o,{})}),Object(u.jsx)(s.a,{path:"/add",element:Object(u.jsx)(h,{})}),Object(u.jsx)(s.a,{path:"/edit/:id",element:Object(u.jsx)(d,{})})]})})})};Object(a.render)(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.9ef848b7.chunk.js.map