(this["webpackJsonpbaby-food"]=this["webpackJsonpbaby-food"]||[]).push([[0],{17:function(e,n,t){e.exports=t(35)},22:function(e,n,t){},23:function(e,n,t){},35:function(e,n,t){"use strict";t.r(n);var a=t(1),o=t.n(a),u=t(16),l=t.n(u),r=(t(22),t(12)),i=t(3),m=t(8),d=(t(23),t(13)),c=t.n(d);c.a.initializeApp({apiKey:"AIzaSyDZnw05t_TsI_B25nINqj7dzSkVS3ADx9Q",authDomain:"babyfood-f264c.firebaseapp.com",databaseURL:"https://babyfood-f264c.firebaseio.com",projectId:"babyfood-f264c",storageBucket:"babyfood-f264c.appspot.com",messagingSenderId:"33974663086",appId:"1:33974663086:web:fc8a8b6813021046c7ba3f"});var p=c.a.database();c.a.auth().signInAnonymously();var s,v=function(){return Math.random()},f={allowedFoods:(s=[{name:"Pindakaas",period:{amount:7,unit:"Day"},portion:{amount:7,unit:"Table Spoon"}},{name:"Egg",period:{amount:7,unit:"Day"},portion:{amount:7,unit:"Table Spoon"}},{name:"Water",period:{amount:1,unit:"Day"}},{name:"Light fruit tea",period:{amount:1,unit:"Day"}},{name:"Vitamin D",period:{amount:1,unit:"Day"},portion:{amount:10,unit:"Drop"}},{name:"Bread",period:{amount:2,unit:"Day"}},{name:"Hrisca"},{name:"Orez"},{name:"Amaranth"},{name:"Rosii"},{name:"Castraveti"},{name:"Peste",period:{amount:3,unit:"Day"}},{name:"Carne",period:{amount:3,unit:"Day"}},{name:"Dovleac"},{name:"Dovlecel"},{name:"Vinata"},{name:"Mar"},{name:"Para"},{name:"Alac"},{name:"Nuci",period:{amount:7,unit:"Day"}},{name:"Cashew",period:{amount:8,unit:"Day"}},{name:"Hazelnuts",period:{amount:7,unit:"Day"}},{name:"Pecan",period:{amount:9,unit:"Day"}},{name:"Fasole",period:{amount:9,unit:"Day"}},{name:"Mazare",period:{amount:9,unit:"Day"}},{name:"Bob",period:{amount:11,unit:"Day"}},{name:"Linte",period:{amount:9,unit:"Day"}},{name:"Creveti",period:{amount:11,unit:"Day"}},{name:"Mango"},{name:"Banana"},{name:"Sparanghel"},{name:"Andiva"},{name:"Salata"},{name:"Varza"},{name:"Brocoli"},{name:"Conopida"},{name:"Boerenkool"},{name:"Plaintain"},{name:"Casava"},{name:"Capsuni"},{name:"Zmeura"},{name:"Plumbs"},{name:"Melon"},{name:"Cottage cheese"}],s.map((function(e){return{id:v(),name:e.name,period:e.period||{amount:null,unit:"Day"},portion:e.portion||{amount:null,unit:"Table Spoon"}}}))),consumed:[]},E=function(e){p.ref("/food").set(e).then()},b=function(e){var n=e.foodState,t=n.allowedFoods,a=n.consumed,u=e.onConsumeAdd,l=t.map((function(e){var n,t=null===(n=a.find((function(n){return n.foodId===e.id})))||void 0===n?void 0:n.date,o=(t?new Date(t):void 0)||new Date(2020,1,1),u=Math.floor(((new Date).getTime()-o.getTime())/864e5),l=null!==e.period.amount&&u>e.period.amount?u-e.period.amount:void 0;return Object(i.a)({},e,{daysNotConsumed:u,daysOverdue:l})})).sort((function(e,n){return void 0!==e.daysOverdue&&void 0!==n.daysOverdue?n.daysOverdue-e.daysOverdue:void 0!==e.daysOverdue?-1:void 0!==n.daysOverdue?1:n.daysNotConsumed-e.daysNotConsumed}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Next up:"),o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Food"),o.a.createElement("th",null,"Days Overdue"),o.a.createElement("th",null,"Days not consumed"))),o.a.createElement("tbody",null,l.map((function(e){return o.a.createElement("tr",{key:e.id},o.a.createElement("td",null,e.name),o.a.createElement("td",null,e.daysOverdue),o.a.createElement("td",null,e.daysNotConsumed),o.a.createElement("td",null,o.a.createElement("button",{onClick:function(){u({foodId:e.id,date:(new Date).toDateString()})}},"Consumed today")))})))))},y=function(e){var n=e.foodState,t=n.consumed,u=n.allowedFoods,l=e.onDeleteEvent,r=Object(a.useState)(!1),i=Object(m.a)(r,2),d=i[0],c=i[1],p=t.sort((function(e,n){var t=new Date(e.date),a=new Date(n.date);return t>a?1:t<a?-1:0})).reverse(),s=d?p:p.slice(0,20);return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Consumed:"),o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Food"),o.a.createElement("th",null,"Date"))),o.a.createElement("tbody",null,s.map((function(e,n){return o.a.createElement("tr",{key:n},o.a.createElement("td",null,function(e){var n;return null===(n=u.find((function(n){return n.id===e})))||void 0===n?void 0:n.name}(e.foodId)),o.a.createElement("td",null,e.date),o.a.createElement("td",null,o.a.createElement("button",{onClick:function(){return l(e)}},"Delete")))})))),o.a.createElement("button",{onClick:function(){return c(!d)}},d?"Show less":"Show all"))},h=function(e,n){return e.map((function(e){return e.id===n.id?n:e}))},D=function(e){var n,t,u=e.foods,l=e.onFoodsChanged,d={name:null,portion:{amount:null,unit:"Table Spoon"},period:{amount:null,unit:"Day"}},c=Object(a.useState)(d),p=Object(m.a)(c,2),s=p[0],f=p[1],E=function(e){return function(n){var t,a=parseInt(n.target.value);a!==(null===(t=e.period)||void 0===t?void 0:t.amount)&&l(h(u,isNaN(a)?Object(i.a)({},e,{period:Object(i.a)({},e.period,{amount:null})}):Object(i.a)({},e,{period:{amount:a,unit:"Day"}})))}},b=function(e){return function(n){var t,a,o=parseInt(n.target.value);o!==(null===(t=e.portion)||void 0===t?void 0:t.amount)&&l(h(u,isNaN(o)?Object(i.a)({},e,{portion:Object(i.a)({},e.portion,{amount:null})}):Object(i.a)({},e,{portion:{amount:o,unit:(null===(a=e.portion)||void 0===a?void 0:a.unit)||"Table Spoon"}})))}},y=function(e){return function(n){var t,a=n.target.value;a!==(null===(t=e.portion)||void 0===t?void 0:t.unit)&&l(h(u,Object(i.a)({},e,{portion:{amount:null,unit:a}})))}};return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Allowed Foods"),o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Food"),o.a.createElement("th",null,"Period"),o.a.createElement("th",null,"Portion"))),o.a.createElement("tbody",null,u.map((function(e){var n,t;return o.a.createElement("tr",{key:e.id},o.a.createElement("td",null,o.a.createElement("input",{onChange:(t=e,function(e){var n=e.target.value;n!==t.name&&l(h(u,Object(i.a)({},t,{name:n})))}),value:e.name})),o.a.createElement("td",null,o.a.createElement("input",{type:"number",onChange:E(e),value:e.period.amount||void 0}),"days"),o.a.createElement("td",null,o.a.createElement("input",{type:"number",onChange:b(e),value:e.portion.amount||void 0}),o.a.createElement("select",{onChange:y(e),value:null===(n=e.portion)||void 0===n?void 0:n.unit},o.a.createElement("option",{value:"Table Spoon"},"Table Spoon"),o.a.createElement("option",{value:"Tea Spoon"},"Tea Spoon"),o.a.createElement("option",{value:"Drop"},"Drop"),o.a.createElement("option",{value:"Glass"},"Glass"))),o.a.createElement("td",null,o.a.createElement("button",{onClick:function(){return l(u.filter((function(n){return n.name!==e.name})))}},"Delete")))})),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("input",{onChange:function(e){return f(Object(i.a)({},s,{name:e.target.value}))},value:s.name||void 0})),o.a.createElement("td",null,o.a.createElement("input",{type:"number",onChange:function(e){return f(Object(i.a)({},s,{period:{amount:parseInt(e.target.value),unit:"Day"}}))},value:s.period.amount||void 0}),"days"),o.a.createElement("td",null,o.a.createElement("input",{type:"number",onChange:function(e){return f(Object(i.a)({},s,{portion:{amount:parseInt(e.target.value),unit:"Table Spoon"}}))},value:(null===(n=s.portion)||void 0===n?void 0:n.amount)||void 0}),o.a.createElement("select",{onChange:function(e){var n;return f(Object(i.a)({},s,{portion:{amount:(null===(n=s.portion)||void 0===n?void 0:n.amount)||null,unit:e.target.value}}))},value:null===(t=s.portion)||void 0===t?void 0:t.unit},o.a.createElement("option",{value:"Table Spoon"},"Table Spoon"),o.a.createElement("option",{value:"Tea Spoon"},"Tea Spoon"),o.a.createElement("option",{value:"Drop"},"Drop"),o.a.createElement("option",{value:"Glass"},"Glass"))),o.a.createElement("td",null,o.a.createElement("button",{disabled:void 0===s.name,onClick:function(){var e=s.name;e&&l([].concat(Object(r.a)(u),[{id:v(),name:e,period:s.period,portion:s.portion}])),f(d)}},"Add"))))))};var g=function(){var e=Object(a.useState)(),n=Object(m.a)(e,2),t=n[0],u=n[1];return Object(a.useEffect)((function(){var e;e=u,p.ref("/food").once("value").then((function(n){var t=n.val();t?e(t):(E(f),e(f))}))}),[]),Object(a.useEffect)((function(){t&&E(t)}),[t]),void 0===t?o.a.createElement("div",null,"Loading..."):o.a.createElement(o.a.Fragment,null,o.a.createElement(y,{foodState:t,onDeleteEvent:function(e){u(Object(i.a)({},t,{consumed:null===t||void 0===t?void 0:t.consumed.filter((function(n){return n!==e}))}))}}),o.a.createElement(b,{foodState:t,onConsumeAdd:function(e){return u(Object(i.a)({},t,{consumed:[e].concat(Object(r.a)(null===t||void 0===t?void 0:t.consumed))}))}}),o.a.createElement(D,{foods:t.allowedFoods,onFoodsChanged:function(e){u(Object(i.a)({},t,{allowedFoods:e}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.8668563b.chunk.js.map