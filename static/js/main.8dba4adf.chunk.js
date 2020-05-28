(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],{18:function(e,t,a){e.exports=a(43)},23:function(e,t,a){},24:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(17),r=a.n(c),l=(a(23),a(2));a(24),a(25);var i=function(){return o.a.createElement("header",null,o.a.createElement("div",{className:"navbar navbar-dark bg-dark shadow-sm"},o.a.createElement("div",{className:"container d-flex justify-content-between"},o.a.createElement("a",{href:"#",className:"navbar-brand d-flex justify-content-center"},"Todo App"))))},s=o.a.createContext({}),d=a(7),m=a.n(d);var u=function(e){var t=Object(n.useContext)(s),a=Object(n.useState)(""),c=Object(l.a)(a,2),r=c[0],i=c[1];return o.a.createElement("form",{className:"form-inline",onSubmit:function(e){e.preventDefault(),t.dispatch({type:"add_todo",payload:{Text:r}}),i("")}},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",className:"form-control mx-sm-3",value:r,onChange:function(e){return i(e.target.value)},placeholder:"\u06a9\u0627\u0631 \u062e\u0648\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u0646\u0645\u0627\u06cc\u06cc\u062f"}),o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0646")))};var f=function(e){var t=Object(n.useContext)(s);return o.a.createElement("div",{className:"col-6 mb-2"},o.a.createElement("div",{className:"d-flex justify-content-between align-items-center border rounded p-3"},o.a.createElement("div",null,e.item.text),o.a.createElement("div",null,o.a.createElement("button",{type:"button",className:"btn btn-info btn-sm ml-1",onClick:function(){return t.dispatch({type:"done_todo",payload:{key:e.item.key}})}},e.item.done?"\u0628\u0627\u0632\u06af\u0634\u062a":"\u0627\u0646\u062c\u0627\u0645 \u0634\u062f\u0647"),o.a.createElement("button",{type:"button",className:"btn btn-danger btn-sm ml-1",onClick:function(){return t.dispatch({type:"dellet_todo",payload:{key:e.item.key}})}},"\u067e\u0627\u06a9 \u06a9\u0631\u062f\u0646"))))};function b(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],r=a[1],i=Object(n.useContext)(s),d=i.Todos.filter((function(e){return e.done===c}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{className:"col-6 mb-3"},o.a.createElement("div",{className:"nav nav-tabs",id:"nav-tab",role:"tablist"},o.a.createElement("a",{className:"nav-item nav-link ".concat(c?"":"active"," font-weight-bold"),id:"nav-home-tab",onClick:function(){return r(!1)}},"\u0627\u0646\u062c\u0627\u0645 \u0646\u0634\u062f\u0647 \u0647\u0627 ",o.a.createElement("span",{className:"badge badge-secondary"},i.Todos.filter((function(e){return!1===e.done})).length)),o.a.createElement("a",{className:"nav-item nav-link ".concat(c?"active":""," font-weight-bold"),id:"nav-profile-tab",onClick:function(){return r(!0)}},"\u0627\u0646\u062c\u0627\u0645 \u0634\u062f\u0647 \u0647\u0627 ",o.a.createElement("span",{className:"badge badge-success"},i.Todos.filter((function(e){return!0===e.done})).length)))),0===d.length?o.a.createElement("p",null,"\u062e\u0627\u0644\u06cc \u0627\u0633\u062a"):d.map((function(e){return o.a.createElement(f,{Key:e.key,item:e,donetodo:i.donetodo,deleteitem:i.deleteitem})})))}var v=a(4),p=a(6);function y(e,t){switch(t.type){case"init_todo":var a=t.payload.DBtext;return{Todos:[].concat(Object(p.a)(e.Todos),[{key:Date.now(),done:!1,text:a}])};case"add_todo":return E(e,t);case"done_todo":return h(e,t);case"dellet_todo":return g(e,t);default:return}}var E=function(e,t){var a=t.payload.Text;return Object(v.a)(Object(v.a)({},e),{},{Todos:[{key:Date.now(),done:!1,text:a}].concat(Object(p.a)(e.Todos))})},h=function(e,t){var a=t.payload.key,n=e.Todos.find((function(e){return e.key===a})),o=e.Todos.filter((function(e){return e.key!==a}));return n.done=!n.done,{Todos:[].concat(Object(p.a)(o),[n])}},g=function(e,t){var a=t.payload.key;return Object(v.a)(Object(v.a)({},e),{},{Todos:e.Todos.filter((function(e){return e.key!==a}))})};function j(){Object(n.useContext)(s);var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=(t[0],t[1],Object(n.useReducer)(y,{Todos:[]})),c=Object(l.a)(a,2),r=c[0],d=c[1];Object(n.useEffect)((function(){m.a.get("http://dummy.restapiexample.com/api/v1/employees").then((function(e){return f(e.data.data)}))}),[]);var f=function(e){e.forEach((function(e){v(e.employee_name)}))},v=function(e){d({type:"init_todo",payload:{DBtext:e}})};return o.a.createElement(s.Provider,{value:{Todos:r.Todos,dispatch:d}},o.a.createElement("div",{className:"App"},o.a.createElement(i,null),o.a.createElement("main",null,o.a.createElement("section",{className:"jumbotron"},o.a.createElement("div",{className:"container d-flex flex-column align-items-center"},o.a.createElement("h1",{className:"jumbotron-heading"},"\u062e\u0648\u0634 \u0627\u0645\u062f\u06cc\u062f"),o.a.createElement("p",{className:"lead text-muted"},"\u0645\u062d\u0645\u062f \u0637\u0627\u0647\u0631\u06cc"),o.a.createElement(u,null))),o.a.createElement("div",{className:"todosList"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"d-flex flex-column align-items-center "},o.a.createElement(b,null)))))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.8dba4adf.chunk.js.map