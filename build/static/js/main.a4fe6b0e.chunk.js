(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Yuen_Christy_Resume.1a005134.pdf"},function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/iceland.42f15a6b.jpg"},,function(e,t,a){e.exports=a.p+"static/media/logo.00920a0a.png"},function(e,t,a){e.exports=a.p+"static/media/logo_mirror.84afa8d4.png"},,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/ChristyPortfolio.6e54e515.jpg"},function(e,t,a){e.exports=a.p+"static/media/DungeonDijkstra.c4cd8f53.jpg"},function(e,t,a){e.exports=a.p+"static/media/Calculator.871fe92e.jpg"},function(e,t,a){e.exports=a.p+"static/media/NoteTaking.2dd22d82.jpg"},function(e,t,a){e.exports=a.p+"static/media/TicTacToe.ce96d89f.jpg"},function(e,t,a){e.exports=a.p+"static/media/WorldData.3cb2fa2c.mp4"},function(e,t,a){e.exports=a.p+"static/media/Grad.6fab3600.JPG"},,function(e,t,a){e.exports=a(63)},,,,,function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),c=a.n(l),i=(a(36),a(3));const s=["btn--primary","btn--outline","btn--test"],m=["btn--medium","btn--large"],o=e=>{let{children:t,type:a,onClick:n,buttonStyle:l,buttonSize:c}=e;const o=s.includes(l)?l:s[0],u=m.includes(c)?c:m[0];return r.a.createElement(i.b,{to:"/",className:"btn-mobile"},r.a.createElement("button",{className:`btn ${o} ${u}`,onClick:n,type:a},t))};a(45);var u=a(13),p=a.n(u),d=a(14),E=a.n(d),b=a(7),f=a.n(b);var h=function(){const[e,t]=Object(n.useState)(!1),[a,l]=Object(n.useState)(!0),c=()=>t(!1),s=()=>{window.scrollTo(0,0)},m=()=>{window.innerWidth<=960?l(!1):l(!0)};return Object(n.useEffect)(()=>{m()},[]),window.addEventListener("resize",m),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-container"},r.a.createElement(i.b,{to:"/",className:"navbar-logo",onClick:()=>{c(),s()}},r.a.createElement("img",{src:p.a,className:"favicon"}),"CHRISTY",r.a.createElement("img",{src:E.a,className:"favicon"})),r.a.createElement("div",{className:"menu-icon",onClick:()=>t(!e)},r.a.createElement("i",{className:e?"fas fa-times":"fas fa-bars"})),r.a.createElement("ul",{className:e?"nav-menu active":"nav-menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/",className:"nav-links",onClick:()=>{c(),s()}},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/about",className:"nav-links",onClick:()=>{c(),s()}},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/projects",className:"nav-links",onClick:()=>{c(),s()}},"Projects")),r.a.createElement("li",null,r.a.createElement("a",{href:f.a,className:"nav-links-mobile"},"Resume"))),a&&r.a.createElement(o,{buttonStyle:"btn--outline",onClick:()=>{const e=document.createElement("a");e.href=f.a,e.download="Yuen_Christy_Resume.pdf",document.body.appendChild(e),e.click(),document.body.removeChild(e)}},"RESUME"))))};a(8),a(46);var g=function(e){const t=e.path.startsWith("http");return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"cards__item"},t?r.a.createElement("a",{className:"cards__item__link",href:e.path,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},r.a.createElement("img",{className:"cards__item__img",alt:"GitHub Images",src:e.src})),r.a.createElement("div",{className:"cards__item__info"},r.a.createElement("h5",{className:"cards__item__text"},e.text))):r.a.createElement(i.b,{className:"cards__item__link",to:e.path},r.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},r.a.createElement("img",{className:"cards__item__img",alt:"GitHub Images",src:e.src})),r.a.createElement("div",{className:"cards__item__info"},r.a.createElement("h5",{className:"cards__item__text"},e.text)))))},_=a(23),N=a.n(_),k=a(24),v=a.n(k),y=a(25),C=a.n(y),x=a(26),w=a.n(x),T=a(27),j=a.n(T);var I=function(){return r.a.createElement("div",{className:"cards"},r.a.createElement("h1",null,"Come check out my GitHub Projects!"),r.a.createElement("div",{className:"cards__container"},r.a.createElement("div",{className:"cards__wrapper"},r.a.createElement("ul",{className:"cards__items"},r.a.createElement(g,{src:N.a,text:"Explore the code behind this page to see how it's structured and functions",label:"Portfolio",path:"https://christyyuen.github.io/"}),r.a.createElement(g,{src:C.a,text:"Explore advanced large integer computations in my GitHub project",label:"Efficient BigInteger Arithmetic",path:"https://github.com/ChristyYuen/BigInteger-Arithmetic"})),r.a.createElement("ul",{className:"cards__items"},r.a.createElement(g,{src:v.a,text:"Efficient pathfinding for game AI with Dijkstra's algorithm",label:"Algorithms: Dungeon Dijkstra",path:"https://github.com/ChristyYuen/Dungeon-Dijkstra"}),r.a.createElement(g,{src:j.a,text:"AI-powered Tic-Tac-Toe: Strategic, Smarter, Unbeatable",label:"Ultimate Tic Tac Toe AI",path:"https://github.com/ChristyYuen/Ultimate-Tic-Tac-Toe-AI"}),r.a.createElement(g,{src:w.a,text:"User friendly note-taking app with sleek, intuitive design",label:"Note Taking Application",path:"https://github.com/ChristyYuen/Note-Taking-Application"})))))},S=(a(47),a(28)),D=a.n(S);var A=function(){const e=e=>{window.open(e,"_blank","noopener,noreferrer")};return r.a.createElement("div",{className:"hero-container"},r.a.createElement("video",{src:D.a,autoPlay:!0,loop:!0,muted:!0}),r.a.createElement("h1",null,"Christy's Portfolio"),r.a.createElement("p",null,"Coding with Data"),r.a.createElement("div",{className:"hero-btns"},r.a.createElement(o,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",onClick:()=>e("https://github.com/ChristyYuen")},"GitHub"),r.a.createElement(o,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",onClick:()=>e("https://www.linkedin.com/in/yuenchristy/")},"LinkedIn"),r.a.createElement(o,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",onClick:()=>{const e=document.createElement("a");e.href=f.a,e.download="Yuen_Christy_Resume.pdf",document.body.appendChild(e),e.click(),document.body.removeChild(e)}},"Resume")))};a(48);var Y=function(){const e=()=>{window.scrollTo(0,0)};return r.a.createElement("div",{className:"footer-container"},r.a.createElement("section",{className:"footer-subscription"},r.a.createElement("p",{className:"footer-subscription-heading"},"Contact me at",r.a.createElement("a",{href:"mailto:yuenchristy8@gmail.com?subject=%5BName%5D%20%5BCompany%5D%20Let%27s%20Connect%21",target:"_blank",rel:"noopener noreferrer",style:{paddingLeft:"5px"}},"yuenchristy8@gmail.com")),r.a.createElement("p",{className:"footer-subscription-text"},"Click on my email to get started")),r.a.createElement("div",{class:"footer-links"},r.a.createElement("div",{className:"footer-link-wrapper"},r.a.createElement("div",{class:"footer-link-items"},r.a.createElement("h2",null,"About Me"),r.a.createElement(i.b,{to:"/about",onClick:e},"About"),r.a.createElement(i.b,{to:"/projects",onClick:e},"Projects"),r.a.createElement("a",{href:f.a,download:"Yuen_Christy_Resume.pdf",className:"footer-link"},"Resume"))),r.a.createElement("div",{className:"footer-link-wrapper"},r.a.createElement("div",{class:"footer-link-items"},r.a.createElement("h2",null,"Let's Connect"),r.a.createElement("a",{href:"https://github.com/ChristyYuen",target:"_blank",rel:"noopener noreferrer",className:"footer-link"},"GitHub"),r.a.createElement("a",{href:"https://www.linkedin.com/in/yuenchristy/",target:"_blank",rel:"noopener noreferrer",className:"footer-link"},"LinkedIn"),r.a.createElement("a",{href:"mailto:yuenchristy8@gmail.com?subject=%5BName%5D%20%5BCompany%5D%20Let%27s%20Connect%21",target:"_blank",rel:"noopener noreferrer",className:"footer-link"},"Email")))),r.a.createElement("section",{class:"social-media"},r.a.createElement("div",{class:"social-media-wrap"},r.a.createElement("div",{class:"footer-logo"},r.a.createElement(i.b,{to:"/",onClick:e,className:"social-logo"},r.a.createElement("img",{src:p.a,className:"favicon"}),"CHRISTY",r.a.createElement("img",{src:E.a,className:"favicon"}))),r.a.createElement("small",{class:"website-rights"},"CHRISTY \xa9 2022"),r.a.createElement("div",{class:"social-icons"},r.a.createElement("a",{className:"social-icon-link",href:"https://github.com/ChristyYuen",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("a",{className:"social-icon-link",href:"https://www.linkedin.com/in/yuenchristy/",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn"},r.a.createElement("i",{className:"fab fa-linkedin"})),r.a.createElement(i.b,{className:"social-icon-link",to:"/",onClick:e,"aria-label":"Home"},r.a.createElement("i",{className:"fa fa-home"}))))))};a(49);var R=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{className:"aboutme__item__link",to:e.path},r.a.createElement("li",{className:"aboutme__item"},r.a.createElement("figure",{className:"aboutme__item__pic-wrap","data-category":e.label},r.a.createElement("img",{className:"aboutme__item__img",alt:"About Me",src:e.src})),r.a.createElement("div",{className:"aboutme__item__info"},r.a.createElement("h5",{className:"aboutme__item__text"},e.title),r.a.createElement("h6",{className:"aboutme__item__text"},e.subtitle)))))},H=a(11),L=a.n(H),G=a(29),B=a.n(G);var F=function(){return r.a.createElement("div",{className:"aboutme"},r.a.createElement("h1",null,"About Me"),r.a.createElement("div",{className:"aboutme__container"},r.a.createElement("div",{className:"aboutme__wrapper"},r.a.createElement("ul",{className:"aboutme__items"},r.a.createElement(R,{src:L.a,label:"Location: Iceland",title:"Travel Lover!",subtitle:"Been to Iceland & Australia."}),r.a.createElement(R,{src:B.a,label:"UCSC Graduate",title:"Majored in Computer Science.",subtitle:"Minor in Technology and Management."})))))};var P=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement(I,null),r.a.createElement(Y,null))},M=a(1);var U=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"about"},"ABOUT"),r.a.createElement(Y,null))};var z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"projects"},"PROJECTS"),r.a.createElement(Y,null))};var O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"resume"},"Resume"),r.a.createElement(Y,null))},J=a(30),W=a.n(J);a(62);var $=e=>{let{src:t,text:a}=e;return r.a.createElement("div",{style:{padding:"10px",textAlign:"center"}},r.a.createElement("img",{src:t,alt:a,style:{width:"100%"}}),r.a.createElement("p",{style:{marginTop:"10px",fontSize:"16px"}},a))};const q={superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}};var K=()=>{const e=[{id:1,src:L.a,text:"Image 1 Description"},{id:2,src:L.a,text:"Image 2 Description"},{id:3,src:L.a,text:"Image 3 Description"},{id:4,src:L.a,text:"Image 4 Description"}];return r.a.createElement("div",{style:{margin:"0 auto",width:"80%",backgroundColor:"white",padding:"20px"}},r.a.createElement("h1",null,"Image Carousel with Text"),r.a.createElement(W.a,{responsive:q},e.map(e=>r.a.createElement($,{key:e.id,src:e.src,text:e.text}))))};var Q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement(K,null),r.a.createElement(F,null),r.a.createElement(I,null),r.a.createElement(Y,null))};var V=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement(h,null),r.a.createElement(M.c,null,r.a.createElement(M.a,{path:"/",exact:!0,component:P}),r.a.createElement(M.a,{path:"/about",component:U}),r.a.createElement(M.a,{path:"/projects",component:z}),r.a.createElement(M.a,{path:"/resume",component:O}),r.a.createElement(M.a,{path:"/test",component:Q}))))};c.a.render(r.a.createElement(V,null),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.a4fe6b0e.chunk.js.map