(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),c=(a(9),a(10),a(11),a(1)),i=function(e){var t=Object(n.useState)(e.employees),a=Object(c.a)(t,2),r=a[0],o=a[1],i=Object(n.useState)(""),u=Object(c.a)(i,2),m=u[0],s=u[1],y=function(t){if(t===m){var a=e.employees.sort((function(e,a){return a[t].localeCompare(e[t])}));s(""),o(a)}else{var n=e.employees.sort((function(e,a){return e[t].localeCompare(a[t])}));s(t),o(n)}},f=function(t){if(t===m){var a=e.employees.sort((function(e,a){return a[t]-e[t]}));s(""),o(a)}else{var n=e.employees.sort((function(e,a){return e[t]-a[t]}));s(t),o(n)}};return l.a.createElement(l.a.Fragment,null,l.a.createElement("label",null,"Filter by Name",l.a.createElement("input",{type:"text",onChange:function(t){var a=t.target.value,n=e.employees.filter((function(e){return-1!==e.name.search(new RegExp(a,"i"))}));o(n)}})),l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("thead",null,l.a.createElement("th",{onClick:function(){y("name")}},"Name"),l.a.createElement("th",{onClick:function(){f("age")}},"Age"),l.a.createElement("th",{onClick:function(){f("salary")}},"Salary (USD)"),l.a.createElement("th",{onClick:function(){y("title")}},"Title"))),l.a.createElement("tr",null,l.a.createElement("tbody",null,r.map((function(e){var t=e.name,a=e.age,n=e.salary,r=e.title;return l.a.createElement("tr",{key:t},l.a.createElement("td",null,t),l.a.createElement("td",null,a),l.a.createElement("td",null,n),l.a.createElement("td",null,r))}))))))},u=[{name:"Alan",age:25,salary:3e4,title:"Manager"},{name:"Billy",age:29,salary:32e3,title:"Laborer"},{name:"Christopher",age:36,salary:7e4,title:"Cleaner"},{name:"Caroline",age:59,salary:12e4,title:"HR"},{name:"Susan",age:22,salary:3e4,title:"QA Tester"},{name:"Dylan",age:44,salary:24e3,title:"Assistant Cleaner"},{name:"Lisa",age:31,salary:16e4,title:"CEO"}],m=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Employee Directory"),l.a.createElement(i,{employees:u}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.8d6989d3.chunk.js.map