(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Yuen_Christy_Resume.e0004662.pdf"},,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/logo.00920a0a.png"},function(e,t,a){e.exports=a.p+"static/media/logo_mirror.84afa8d4.png"},,,,,,function(e,t,a){e.exports=a.p+"static/media/ChristyPortfolio.6e54e515.jpg"},function(e,t,a){e.exports=a.p+"static/media/DungeonDijkstra.c4cd8f53.jpg"},function(e,t,a){e.exports=a.p+"static/media/Calculator.871fe92e.jpg"},function(e,t,a){e.exports=a.p+"static/media/NoteTaking.2dd22d82.jpg"},function(e,t,a){e.exports=a.p+"static/media/TicTacToe.ce96d89f.jpg"},function(e,t,a){e.exports=a.p+"static/media/WorldData.3cb2fa2c.mp4"},function(e,t,a){e.exports=a(42)},,,,,function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),l=a.n(r),i=(a(29),a(3));const s=["btn--primary","btn--outline","btn--test"],o=["btn--medium","btn--large"],m=e=>{let{children:t,type:a,onClick:n,buttonStyle:r,buttonSize:l}=e;const m=s.includes(r)?r:s[0],u=o.includes(l)?l:o[0];return c.a.createElement(i.b,{to:"/",className:"btn-mobile"},c.a.createElement("button",{className:`btn ${m} ${u}`,onClick:n,type:a},t))};a(38);var u=a(11),d=a.n(u),p=a(12),E=a.n(p),b=a(7),h=a.n(b);var f=function(){const[e,t]=Object(n.useState)(!1),[a,r]=Object(n.useState)(!0),l=()=>t(!1),s=()=>{window.scrollTo(0,0)},o=()=>{window.innerWidth<=960?r(!1):r(!0)};return Object(n.useEffect)(()=>{o()},[]),window.addEventListener("resize",o),c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{className:"navbar-container"},c.a.createElement(i.b,{to:"/",className:"navbar-logo",onClick:()=>{l(),s()}},c.a.createElement("img",{src:d.a,className:"favicon"}),"CHRISTY",c.a.createElement("img",{src:E.a,className:"favicon"})),c.a.createElement("div",{className:"menu-icon",onClick:()=>t(!e)},c.a.createElement("i",{className:e?"fas fa-times":"fas fa-bars"})),c.a.createElement("ul",{className:e?"nav-menu active":"nav-menu"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(i.b,{to:"/",className:"nav-links",onClick:()=>{l(),s()}},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(i.b,{to:"/about",className:"nav-links",onClick:()=>{l(),s()}},"About")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(i.b,{to:"/projects",className:"nav-links",onClick:()=>{l(),s()}},"Projects")),c.a.createElement("li",null,c.a.createElement("a",{href:h.a,className:"nav-links-mobile"},"Resume"))),a&&c.a.createElement(m,{buttonStyle:"btn--outline",onClick:()=>{const e=document.createElement("a");e.href=h.a,e.download="Yuen_Christy_Resume.pdf",document.body.appendChild(e),e.click(),document.body.removeChild(e)}},"RESUME"))))};a(9),a(39);var g=function(e){const t=e.path.startsWith("http");return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"cards__item"},t?c.a.createElement("a",{className:"cards__item__link",href:e.path,target:"_blank",rel:"noopener noreferrer"},c.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},c.a.createElement("img",{className:"cards__item__img",alt:"GitHub Images",src:e.src})),c.a.createElement("div",{className:"cards__item__info"},c.a.createElement("h5",{className:"cards__item__text"},e.text))):c.a.createElement(i.b,{className:"cards__item__link",to:e.path},c.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},c.a.createElement("img",{className:"cards__item__img",alt:"GitHub Images",src:e.src})),c.a.createElement("div",{className:"cards__item__info"},c.a.createElement("h5",{className:"cards__item__text"},e.text)))))},_=a(18),N=a.n(_),k=a(19),v=a.n(k),y=a(20),C=a.n(y),w=a(21),x=a.n(w),j=a(22),T=a.n(j);var S=function(){return c.a.createElement("div",{className:"cards"},c.a.createElement("h1",null,"Come check out my GitHub Projects!"),c.a.createElement("div",{className:"cards__container"},c.a.createElement("div",{className:"cards__wrapper"},c.a.createElement("ul",{className:"cards__items"},c.a.createElement(g,{src:N.a,text:"Explore the code behind this page to see how it's structured and functions",label:"Portfolio",path:"https://github.com/ChristyYuen/ChristyCreates"}),c.a.createElement(g,{src:C.a,text:"Explore advanced large integer computations in my GitHub project",label:"Efficient BigInteger Arithmetic",path:"https://github.com/ChristyYuen/BigInteger-Arithmetic"})),c.a.createElement("ul",{className:"cards__items"},c.a.createElement(g,{src:v.a,text:"Efficient pathfinding for game AI with Dijkstra's algorithm",label:"Algorithms: Dungeon Dijkstra",path:"https://github.com/ChristyYuen/Dungeon-Dijkstra"}),c.a.createElement(g,{src:T.a,text:"AI-powered Tic-Tac-Toe: Strategic, Smarter, Unbeatable",label:"Ultimate Tic Tac Toe AI",path:"https://github.com/ChristyYuen/Ultimate-Tic-Tac-Toe-AI"}),c.a.createElement(g,{src:x.a,text:"User friendly note-taking app with sleek, intuitive design",label:"Note Taking Application",path:"https://github.com/ChristyYuen/Note-Taking-Application"})))))},I=(a(40),a(23)),Y=a.n(I);var A=function(){const e=e=>{window.open(e,"_blank","noopener,noreferrer")};return c.a.createElement("div",{className:"hero-container"},c.a.createElement("video",{src:Y.a,autoPlay:!0,loop:!0,muted:!0}),c.a.createElement("h1",null,"Christy's Portfolio"),c.a.createElement("p",null,"Coding with Data"),c.a.createElement("div",{className:"hero-btns"},c.a.createElement(m,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",onClick:()=>e("https://github.com/ChristyYuen")},"GitHub"),c.a.createElement(m,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",onClick:()=>e("https://www.linkedin.com/in/yuenchristy/")},"LinkedIn"),c.a.createElement(m,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",onClick:()=>{const e=document.createElement("a");e.href=h.a,e.download="Yuen_Christy_Resume.pdf",document.body.appendChild(e),e.click(),document.body.removeChild(e)}},"Resume")))};a(41);var D=function(){const e=()=>{window.scrollTo(0,0)};return c.a.createElement("div",{className:"footer-container"},c.a.createElement("section",{className:"footer-subscription"},c.a.createElement("p",{className:"footer-subscription-heading"},"Contact me at",c.a.createElement("a",{href:"mailto:yuenchristy8@gmail.com?subject=%5BName%5D%20%5BCompany%5D%20Let%27s%20Connect%21",target:"_blank",rel:"noopener noreferrer",style:{paddingLeft:"5px"}},"yuenchristy8@gmail.com")),c.a.createElement("p",{className:"footer-subscription-text"},"Please include your name and company")),c.a.createElement("div",{class:"footer-links"},c.a.createElement("div",{className:"footer-link-wrapper"},c.a.createElement("div",{class:"footer-link-items"},c.a.createElement("h2",null,"About Me"),c.a.createElement(i.b,{to:"/about",onClick:e},"About"),c.a.createElement(i.b,{to:"/projects",onClick:e},"Projects"),c.a.createElement("a",{href:h.a,download:"Yuen_Christy_Resume.pdf",className:"footer-link"},"Resume"))),c.a.createElement("div",{className:"footer-link-wrapper"},c.a.createElement("div",{class:"footer-link-items"},c.a.createElement("h2",null,"Let's Connect"),c.a.createElement("a",{href:"https://github.com/ChristyYuen",target:"_blank",rel:"noopener noreferrer",className:"footer-link"},"GitHub"),c.a.createElement("a",{href:"https://www.linkedin.com/in/yuenchristy/",target:"_blank",rel:"noopener noreferrer",className:"footer-link"},"LinkedIn"),c.a.createElement("a",{href:"mailto:yuenchristy8@gmail.com?subject=%5BName%5D%20%5BCompany%5D%20Let%27s%20Connect%21",target:"_blank",rel:"noopener noreferrer",className:"footer-link"},"Email")))),c.a.createElement("section",{class:"social-media"},c.a.createElement("div",{class:"social-media-wrap"},c.a.createElement("div",{class:"footer-logo"},c.a.createElement(i.b,{to:"/",onClick:e,className:"social-logo"},c.a.createElement("img",{src:d.a,className:"favicon"}),"CHRISTY",c.a.createElement("img",{src:E.a,className:"favicon"}))),c.a.createElement("small",{class:"website-rights"},"CHRISTY \xa9 2022"),c.a.createElement("div",{class:"social-icons"},c.a.createElement("a",{className:"social-icon-link",href:"https://github.com/ChristyYuen",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub"},c.a.createElement("i",{className:"fab fa-github"})),c.a.createElement("a",{className:"social-icon-link",href:"https://www.linkedin.com/in/yuenchristy/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn"},c.a.createElement("i",{className:"fab fa-linkedin"})),c.a.createElement(i.b,{className:"social-icon-link",to:"/",onClick:e,"aria-label":"Home"},c.a.createElement("i",{className:"fa fa-home"}))))))};var R=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(A,null),c.a.createElement(S,null),c.a.createElement(D,null))},H=a(1);var P=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"about"},"ABOUT"),c.a.createElement(D,null))};var B=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"projects"},"PROJECTS"),c.a.createElement(D,null))};var L=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"resume"},"Resume"),c.a.createElement(D,null))};var F=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,null,c.a.createElement(f,null),c.a.createElement(H.c,null,c.a.createElement(H.a,{path:"/",exact:!0,component:R}),c.a.createElement(H.a,{path:"/about",component:P}),c.a.createElement(H.a,{path:"/projects",component:B}),c.a.createElement(H.a,{path:"/resume",component:L}))))};l.a.render(c.a.createElement(F,null),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.eca03c08.chunk.js.map