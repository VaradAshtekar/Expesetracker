(this.webpackJsonpexpense=this.webpackJsonpexpense||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),o=(n(13),n(14),function(){return r.a.createElement("h2",null,"Expense Tracker")}),u=n(2),i=n(7),s=n(3),m=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(s.a)(Object(s.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(s.a)(Object(s.a)({},e),{},{transactions:[t.payload].concat(Object(i.a)(e.transactions))});default:return e}},d={transactions:[{id:1,text:"Flower",amount:-20},{id:2,text:"Salary",amount:300},{id:3,text:"Book",amount:-10},{id:4,text:"Camera",amount:150}]},E=Object(a.createContext)(d),f=function(e){var t=e.children,n=Object(a.useReducer)(m,d),c=Object(u.a)(n,2),l=c[0],o=c[1];return r.a.createElement(E.Provider,{value:{transactions:l.transactions,deleteTransaction:function(e){o({type:"DELETE_TRANSACTION",payload:e})},addTransactions:function(e){o({type:"ADD_TRANSACTION",payload:e})}}},t)},p=function(){var e=Object(a.useContext)(E).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement("div",null,r.a.createElement("h4",null,"Your Balance"),r.a.createElement("h1",{id:"balance"},"Rs.",e))},v=function(){var e=Object(a.useContext)(E).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement("div",null,r.a.createElement("div",{class:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{id:"money-plus",class:"money plus"},"+Rs",t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{id:"money-minus",class:"money minus"},"-Rs.",n))))},b=function(e){var t=e.transaction,n=Object(a.useContext)(E).deleteTransaction,c=t.amount<0?"-":"+";return r.a.createElement("li",{class:t.amount<0?"minus":"plus"},t.text," ",r.a.createElement("span",null,c," Rs.",Math.abs(t.amount)),r.a.createElement("button",{onClick:function(){return n(t.id)},class:"delete-btn"},"x"))},h=function(){var e=Object(a.useContext)(E).transactions;return r.a.createElement("div",null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{id:"list",class:"list"},e.map((function(e){return r.a.createElement(b,{key:e.id,transaction:e})}))))},x=function(){Object(a.useState)();var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(0),o=Object(u.a)(l,2),i=o[0],s=o[1],m=Object(a.useContext)(E).addTransactions;return r.a.createElement("div",null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e8*Math.random()),text:n,amount:+i};m(t)},id:"form"},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},id:"text",placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",value:i,onChange:function(e){return s(e.target.value)},id:"amount",placeholder:"Enter amount..."})),r.a.createElement("button",{className:"btn"},"Add transaction")))};var O=function(){return r.a.createElement(f,null,r.a.createElement(o,null),r.a.createElement("div",{className:"container"},r.a.createElement(p,null),r.a.createElement(v,null),r.a.createElement(h,null),r.a.createElement(x,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.26865713.chunk.js.map