(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),s=a(8),r=a(2),c=a(6),o=a(1),l=(a(13),[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}]),u=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}],d=a(0),m=function(e){var t=e.user;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{children:"Info about User"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:"Name: ".concat(t.name)}),Object(d.jsx)("li",{children:"E-mail: ".concat(t.email)})]})]})},b=function(e){var t=e.todo,a=Object(o.useState)(t.completed),n=Object(r.a)(a,2),i=n[0],s=n[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:"todo__info-title",children:t.title}),Object(d.jsx)("span",{children:"Completed: "}),Object(d.jsx)("input",{type:"checkbox",checked:i,onChange:function(){s(!i)}}),t.user&&Object(d.jsx)(m,{user:t.user})]})},h=(a(15),function(e){var t=e.todoList;return Object(d.jsx)("ul",{className:"todo__list",children:t.map((function(e){return Object(d.jsx)("li",{className:"todo__list-item",children:Object(d.jsx)(b,{todo:e})},e.id)}))})}),p=function(e){return u.find((function(t){return t.id===e}))||null},j=function(){return l.map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:p(e.userId)})}))},g=function(){var e=Object(o.useState)(j),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(0),c=Object(r.a)(i,2),l=c[0],m=c[1],b=Object(o.useState)(!1),g=Object(r.a)(b,2),y=g[0],O=g[1],f=Object(o.useState)(!1),x=Object(r.a)(f,2),v=x[0],S=x[1],w=Object(o.useState)(""),k=Object(r.a)(w,2),C=k[0],z=k[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){if(""===C&&S(!0),0===l&&O(!0),""!==C&&0!==l){var e={userId:l,id:a.length+1,title:C,completed:!1,user:p(l)};n([].concat(Object(s.a)(a),[e])),m(0),z("")}}()},children:[Object(d.jsxs)("div",{className:"App__input",children:[Object(d.jsx)("input",{type:"text",value:C,onChange:function(e){z(e.target.value),S(!1)}}),v&&Object(d.jsx)("div",{className:"error",children:"Please enter the title"})]}),Object(d.jsxs)("div",{className:"App__input",children:[Object(d.jsxs)("select",{value:l,onChange:function(e){m(+e.target.value),O(!1)},children:[Object(d.jsx)("option",{value:0,children:"Choose a User"}),u.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),y&&Object(d.jsx)("div",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit",className:"App__button",children:"Add"})]}),Object(d.jsx)(h,{todoList:a})]})};i.a.render(Object(d.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0446068c.chunk.js.map