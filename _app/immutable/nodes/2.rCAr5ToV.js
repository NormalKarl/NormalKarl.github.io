import{s as Fe,n as U,o as zt,e as qe,x as kt,y as qt,r as St}from"../chunks/scheduler.5tw2L2Dg.js";import{S as Ke,i as Je,e as d,c as u,a as p,d as h,o as n,g as K,h as s,s as L,f as k,y as je,z as le,A as se,B as rt,u as Oe,v as Ue,C as H,w as Ge,k as ve,l as Me,n as Rt,x as Ne,t as Se,b as Re,j as Mt,q as Wt}from"../chunks/index.FwfD8lfN.js";function Ce(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function Pt(a){let e,t;return{c(){e=d("div"),t=d("canvas"),this.h()},l(l){e=u(l,"DIV",{class:!0});var r=p(e);t=u(r,"CANVAS",{}),p(t).forEach(h),r.forEach(h),this.h()},h(){n(e,"class","absolute top-0 right-0 left-0 bottom-0 -z-10")},m(l,r){K(l,e,r),s(e,t),a[2](t),a[3](e)},p:U,i:U,o:U,d(l){l&&h(e),a[2](null),a[3](null)}}}function $t(a,e,t){var l,r,v,c=new Array;zt(()=>{l!=null&&(v=l.getContext("2d"),setInterval(function(){var q;if(l==null||v==null)return;var m=window.devicePixelRatio||1,o=1/m;t(0,l.width=r.clientWidth*o,l),t(0,l.height=r.clientHeight*o,l);var _=l.width*l.height/1e4;let i=((q=document.documentElement)==null?void 0:q.getAttribute("data-theme"))==="dark";for(;c.length<_;)c.push({x:Math.random()*l.width,y:Math.random()*l.height,speed_x:Math.random()*2-1,speed_y:Math.random()*2-1});for(var w=new Array,C=0;C<c.length;C++){var x=c[C];x.x+=x.speed_x,x.y+=x.speed_y,x.x>l.width||x.x<0||x.y>l.height||x.y<0||w.push(x)}c=w,v.save(),v.scale(m,m);for(var C=0;C<c.length;C++){var x=c[C];let I=i?155:100;v.fillStyle=`rgba(${I}, ${I}, ${I}, 255)`,v.fillRect(x.x,x.y,1,1);for(var M=0;M<c.length;M++){var T=c[M],b=Math.sqrt(Math.pow(T.x-x.x,2)+Math.pow(T.y-x.y,2));b<75&&(v.strokeStyle=`rgba(${I}, ${I}, ${I}, `+((1-b/75)*.3).toFixed(2).toString()+")",v.beginPath(),v.moveTo(x.x,x.y),v.lineTo(T.x,T.y),v.stroke())}}v.restore()},1e3/60))});function f(m){qe[m?"unshift":"push"](()=>{l=m,t(0,l)})}function y(m){qe[m?"unshift":"push"](()=>{r=m,t(1,r)})}return[l,r,f,y]}class jt extends Ke{constructor(e){super(),Je(this,e,$t,Pt,Fe,{})}}function Ct(a,e,t){const l=a.slice();return l[4]=e[t],l[6]=t,l}function Dt(a,e,t){const l=a.slice();return l[4]=e[t],l[6]=t,l}function It(a){let e,t;return{c(){e=le("svg"),t=le("path"),this.h()},l(l){e=se(l,"svg",{class:!0,xmlns:!0,viewBox:!0});var r=p(e);t=se(r,"path",{d:!0}),p(t).forEach(h),r.forEach(h),this.h()},h(){n(t,"d","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"),n(e,"class","w-6 h-6 fill-current"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"viewBox","0 0 576 512")},m(l,r){K(l,e,r),s(e,t)},p:U,d(l){l&&h(e)}}}function Et(a){let e,t;return{c(){e=le("svg"),t=le("path"),this.h()},l(l){e=se(l,"svg",{class:!0,xmlns:!0,viewBox:!0});var r=p(e);t=se(r,"path",{d:!0}),p(t).forEach(h),r.forEach(h),this.h()},h(){n(t,"d","M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z"),n(e,"class","w-6 h-6 fill-current"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"viewBox","0 0 576 512")},m(l,r){K(l,e,r),s(e,t)},d(l){l&&h(e)}}}function Tt(a){let e,t;return{c(){e=le("svg"),t=le("path"),this.h()},l(l){e=se(l,"svg",{class:!0,xmlns:!0,viewBox:!0});var r=p(e);t=se(r,"path",{d:!0}),p(t).forEach(h),r.forEach(h),this.h()},h(){n(t,"d","M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"),n(e,"class","w-6 h-6 fill-current"),n(e,"xmlns","http://www.w3.org/2000/svg"),n(e,"viewBox","0 0 576 512")},m(l,r){K(l,e,r),s(e,t)},p:U,d(l){l&&h(e)}}}function Ot(a){let e,t,l,r,v=Ce(Array(a[1])),c=[];for(let o=0;o<v.length;o+=1)c[o]=It(Dt(a,v,o));let f=a[0]&&Et(),y=Ce(Array(a[2])),m=[];for(let o=0;o<y.length;o+=1)m[o]=Tt(Ct(a,y,o));return{c(){e=d("div"),t=d("div");for(let o=0;o<c.length;o+=1)c[o].c();l=L(),f&&f.c(),r=L();for(let o=0;o<m.length;o+=1)m[o].c();this.h()},l(o){e=u(o,"DIV",{class:!0});var _=p(e);t=u(_,"DIV",{class:!0});var i=p(t);for(let w=0;w<c.length;w+=1)c[w].l(i);l=k(i),f&&f.l(i),r=k(i);for(let w=0;w<m.length;w+=1)m[w].l(i);i.forEach(h),_.forEach(h),this.h()},h(){n(t,"class","flex flex-row items-center"),n(e,"class","flex flex-col items-end")},m(o,_){K(o,e,_),s(e,t);for(let i=0;i<c.length;i+=1)c[i]&&c[i].m(t,null);s(t,l),f&&f.m(t,null),s(t,r);for(let i=0;i<m.length;i+=1)m[i]&&m[i].m(t,null)},p(o,[_]){if(_&2){v=Ce(Array(o[1]));let i;for(i=0;i<v.length;i+=1){const w=Dt(o,v,i);c[i]?c[i].p(w,_):(c[i]=It(),c[i].c(),c[i].m(t,l))}for(;i<c.length;i+=1)c[i].d(1);c.length=v.length}if(o[0]?f||(f=Et(),f.c(),f.m(t,r)):f&&(f.d(1),f=null),_&4){y=Ce(Array(o[2]));let i;for(i=0;i<y.length;i+=1){const w=Ct(o,y,i);m[i]?m[i].p(w,_):(m[i]=Tt(),m[i].c(),m[i].m(t,null))}for(;i<m.length;i+=1)m[i].d(1);m.length=y.length}},i:U,o:U,d(o){o&&h(e),je(c,o),f&&f.d(),je(m,o)}}}function Ut(a,e,t){let l,r,v,{stars:c=5}=e;return a.$$set=f=>{"stars"in f&&t(3,c=f.stars)},a.$$.update=()=>{a.$$.dirty&8&&t(1,l=Math.floor(c/2)),a.$$.dirty&8&&t(0,r=c%2===1),a.$$.dirty&3&&t(2,v=5-(l+(r?1:0)))},[r,l,v,c]}class Gt extends Ke{constructor(e){super(),Je(this,e,Ut,Ot,Fe,{stars:3})}}function Nt(a){let e,t,l,r,v,c,f,y,m,o;return{c(){e=d("label"),t=d("input"),l=L(),r=le("svg"),v=le("path"),c=L(),f=le("svg"),y=le("path"),this.h()},l(_){e=u(_,"LABEL",{class:!0});var i=p(e);t=u(i,"INPUT",{type:!0,class:!0}),l=k(i),r=se(i,"svg",{class:!0,xmlns:!0,viewBox:!0});var w=p(r);v=se(w,"path",{d:!0}),p(v).forEach(h),w.forEach(h),c=k(i),f=se(i,"svg",{class:!0,xmlns:!0,viewBox:!0});var C=p(f);y=se(C,"path",{d:!0}),p(y).forEach(h),C.forEach(h),i.forEach(h),this.h()},h(){n(t,"type","checkbox"),n(t,"class","theme-controller"),t.value="synthwave",n(v,"d","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"),n(r,"class","swap-off fill-current w-6 h-6"),n(r,"xmlns","http://www.w3.org/2000/svg"),n(r,"viewBox","0 0 512 512"),n(y,"d","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"),n(f,"class","swap-on fill-current w-6 h-6"),n(f,"xmlns","http://www.w3.org/2000/svg"),n(f,"viewBox","0 0 384 512"),n(e,"class","btn btn-square btn-ghost uppercase swap swap-rotate")},m(_,i){K(_,e,i),s(e,t),s(e,l),s(e,r),s(r,v),s(e,c),s(e,f),s(f,y),m||(o=rt(t,"change",Ft),m=!0)},p:U,i:U,o:U,d(_){_&&h(e),m=!1,o()}}}function Ft(){document.documentElement.setAttribute("data-theme",document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark")}class Bt extends Ke{constructor(e){super(),Je(this,e,null,Nt,Fe,{})}}const Kt=""+new URL("../assets/gta5.0za2Ykiz.jpeg",import.meta.url).href,Jt=""+new URL("../assets/rome.cw9P7uF9.jpg",import.meta.url).href,Qt=""+new URL("../assets/dinewight.kQc0eS0K.jpg",import.meta.url).href,Xt=""+new URL("../assets/game-ide.yNR-tAZh.png",import.meta.url).href,Yt=""+new URL("../assets/iowcc.LydFz_y3.png",import.meta.url).href,Zt=""+new URL("../assets/indie-games.ee8jHPc6.png",import.meta.url).href;class Ae{constructor(e,t,l,r){this.title=e,this.description=t,this.content=l,this.image=r}}class de{constructor(e,t){this.title=e,this.rating=t}}const at=[new Ae("Tools Programmer at Rockstar Games","Tools developer creating bespoke tools for the most popular titles in the games industry. Credited in Grand Theft Auto V, Red Dead Redemption 2 and more.","More content will go here",Kt),new Ae("Games Programmer on Rome: Total War, Company of Heroes and XCOM2","Developed and optimized AAA games for mobile platforms, ensuring smooth performance and immersive gameplay experiences.","More content will go here",Jt),new Ae("Lead Programmer at DineWight","Being a lead developer on the DineWight App involved overseeing the development process, and ensuring the successful implementation and deployment of features.","More content will go here",Qt),new Ae("Isle Of Wight Car Club App","An app for the Isle of Wight Car Club, allowing members to keep up to date with events, news and more.","More content will go here",Yt),new Ae("Assorted Indepedent Games Development","Over the years I have developed a number of games on my own some released and some for the shelf.","A fun fast pace paper plane flying game where you dodge and weave through obstacles. Avaliable on iOS and Android.",Zt),new Ae("Game Development Environment (IDE)","A desktop development environment for creating games, with a focus on ease of use and rapid prototyping.","More content will go here",Xt)],el=[new de("C++",10),new de("C#",9),new de("Godot",10),new de("Unity",8),new de("Flutter (Dart)",8),new de("Frontend (HTML, CSS, JS)",8),new de("Backend (MySQL, FireBase, MongoDB)",6),new de("Svelte & React",7),new de("Automation CI/CD",7)],tl=""+new URL("../assets/avatar.9piDH-XO.jpg",import.meta.url).href;function Vt(a,e,t){const l=a.slice();return l[15]=e[t],l}function ll(a,e,t){const l=a.slice();return l[18]=e[t],l}function sl(a){let e,t,l=a[18].title+"",r,v,c,f,y,m;return f=new Gt({props:{stars:a[18].rating}}),{c(){e=d("tr"),t=d("td"),r=Se(l),v=L(),c=d("td"),Oe(f.$$.fragment),y=L()},l(o){e=u(o,"TR",{});var _=p(e);t=u(_,"TD",{});var i=p(t);r=Re(i,l),i.forEach(h),v=k(_),c=u(_,"TD",{});var w=p(c);Ue(f.$$.fragment,w),w.forEach(h),y=k(_),_.forEach(h)},m(o,_){K(o,e,_),s(e,t),s(t,r),s(e,v),s(e,c),Ge(f,c,null),s(e,y),m=!0},p:U,i(o){m||(ve(f.$$.fragment,o),m=!0)},o(o){Me(f.$$.fragment,o),m=!1},d(o){o&&h(e),Ne(f)}}}function Ht(a){let e,t,l=`<img class="object-cover max-h-48 w-full" src="${a[15].image}" alt="${a[15].title}"/>`,r,v,c,f=a[15].title+"",y,m,o,_=a[15].description+"",i,w,C,x,M="Read More",T,b,q;function R(){return a[10](a[15])}return{c(){e=d("div"),t=d("figure"),t.innerHTML=l,r=L(),v=d("div"),c=d("h2"),y=Se(f),m=L(),o=d("p"),i=Se(_),w=L(),C=d("div"),x=d("button"),x.textContent=M,T=L(),this.h()},l(A){e=u(A,"DIV",{class:!0});var I=p(e);t=u(I,"FIGURE",{"data-svelte-h":!0}),H(t)!=="svelte-149474v"&&(t.innerHTML=l),r=k(I),v=u(I,"DIV",{class:!0});var G=p(v);c=u(G,"H2",{class:!0});var W=p(c);y=Re(W,f),W.forEach(h),m=k(G),o=u(G,"P",{});var E=p(o);i=Re(E,_),E.forEach(h),w=k(G),C=u(G,"DIV",{class:!0});var $=p(C);x=u($,"BUTTON",{class:!0,"data-svelte-h":!0}),H(x)!=="svelte-14e3beq"&&(x.textContent=M),$.forEach(h),G.forEach(h),T=k(I),I.forEach(h),this.h()},h(){n(c,"class","card-title"),n(x,"class","btn btn-ghost"),n(C,"class","card-actions justify-center"),n(v,"class","card-body"),n(e,"class","card card-compact w-full bg-base-100 shadow-xl")},m(A,I){K(A,e,I),s(e,t),s(e,r),s(e,v),s(v,c),s(c,y),s(v,m),s(v,o),s(o,i),s(v,w),s(v,C),s(C,x),s(e,T),b||(q=rt(x,"click",R),b=!0)},p(A,I){a=A},d(A){A&&h(e),b=!1,q()}}}function nl(a){let e,t="Message failed to send.";return{c(){e=d("div"),e.textContent=t,this.h()},l(l){e=u(l,"DIV",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-12ikwiw"&&(e.textContent=t),this.h()},h(){n(e,"class","text-2xl text-center font-bold text-error")},m(l,r){K(l,e,r)},p:U,d(l){l&&h(e)}}}function al(a){let e,t="Message sent.";return{c(){e=d("div"),e.textContent=t,this.h()},l(l){e=u(l,"DIV",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-16yn0nd"&&(e.textContent=t),this.h()},h(){n(e,"class","text-2xl text-center font-bold text-success")},m(l,r){K(l,e,r)},p:U,d(l){l&&h(e)}}}function rl(a){let e,t="Submitting...";return{c(){e=d("div"),e.textContent=t,this.h()},l(l){e=u(l,"DIV",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-1ezzgci"&&(e.textContent=t),this.h()},h(){n(e,"class","text-2xl text-center font-bold text-neutral")},m(l,r){K(l,e,r)},p:U,d(l){l&&h(e)}}}function il(a){let e,t='<input type="hidden" name="access_key" value="66657ce8-4fa7-46ef-84a2-6eed57baa815"/> <div class="space-y-1"><label for="name" class="block text-sm font-medium text-content">Name</label> <input type="text" id="name" name="name" class="input input-bordered w-full" placeholder="Enter your name" required=""/></div> <div class="space-y-1"><label for="email" class="block text-sm font-medium text-content">Email</label> <input type="email" id="email" name="email" class="input input-bordered w-full" placeholder="Enter your email" required=""/></div> <div class="space-y-1"><label for="message" class="block text-sm font-medium text-content">Message</label> <textarea id="message" name="message" form="contact-form" placeholder="Enter your message" class="textarea textarea-bordered textarea-md w-full" required=""></textarea></div> <button type="submit" class="btn btn-neutral">Submit</button>';return{c(){e=d("form"),e.innerHTML=t,this.h()},l(l){e=u(l,"FORM",{id:!0,class:!0,method:!0,"data-svelte-h":!0}),H(e)!=="svelte-13dodi6"&&(e.innerHTML=t),this.h()},h(){n(e,"id","contact-form"),n(e,"class","flex flex-col space-y-3 mb-6"),n(e,"method","post")},m(l,r){K(l,e,r),a[11](e)},p:U,d(l){l&&h(e),a[11](null)}}}function At(a){var De,ne;let e,t,l,r='<svg class="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path></svg>',v,c,f,y,m,o,_,i,w,C,x,M=((De=a[5])==null?void 0:De.title)+"",T,b,q,R,A,I,G,W,E,$=((ne=a[5])==null?void 0:ne.content)+"",me,J,ee,ze;return y=new Bt({}),{c(){e=d("div"),t=d("div"),l=d("button"),l.innerHTML=r,v=L(),c=d("div"),f=L(),Oe(y.$$.fragment),m=L(),o=d("div"),_=d("div"),i=d("div"),w=d("div"),C=d("div"),x=d("h1"),T=Se(M),b=L(),q=d("div"),R=d("img"),G=L(),W=d("div"),E=d("p"),me=Se($),this.h()},l(z){e=u(z,"DIV",{class:!0});var S=p(e);t=u(S,"DIV",{class:!0});var j=p(t);l=u(j,"BUTTON",{class:!0,"data-svelte-h":!0}),H(l)!=="svelte-zp7hur"&&(l.innerHTML=r),v=k(j),c=u(j,"DIV",{class:!0}),p(c).forEach(h),f=k(j),Ue(y.$$.fragment,j),j.forEach(h),m=k(S),o=u(S,"DIV",{class:!0});var ue=p(o);_=u(ue,"DIV",{class:!0});var ae=p(_);i=u(ae,"DIV",{class:!0,style:!0});var Q=p(i);w=u(Q,"DIV",{class:!0});var pe=p(w);C=u(pe,"DIV",{class:!0});var Ie=p(C);x=u(Ie,"H1",{class:!0});var re=p(x);T=Re(re,M),re.forEach(h),Ie.forEach(h),b=k(pe),q=u(pe,"DIV",{class:!0});var Y=p(q);R=u(Y,"IMG",{src:!0,alt:!0,class:!0}),G=k(Y),W=u(Y,"DIV",{});var he=p(W);E=u(he,"P",{class:!0});var Ee=p(E);me=Re(Ee,$),Ee.forEach(h),he.forEach(h),Y.forEach(h),pe.forEach(h),Q.forEach(h),ae.forEach(h),ue.forEach(h),S.forEach(h),this.h()},h(){var z,S;n(l,"class","btn btn-square btn-ghost uppercase text-3xl"),n(c,"class","flex-grow"),n(t,"class","flex flex-row items-center h-16 px-2 py-4 w-full shadow-md bg-base-100 z-50"),n(x,"class","text-4xl text-center palanquin-dark-bold mb-10"),n(C,"class","flex-grow flex flex-col items-center"),kt(R.src,A=(z=a[5])==null?void 0:z.image)||n(R,"src",A),n(R,"alt",I=(S=a[5])==null?void 0:S.title),n(R,"class","max-w-full lg:max-w-sm object-fit rounded-lg shadow-2xl"),n(E,"class","py-6"),n(q,"class","flex flex-col lg:flex-row lg:space-x-4"),n(w,"class","hero-content flex-col mt-16"),n(i,"class","hero bg-base-100 z-20"),n(i,"style",a[0]),n(_,"class","flex flex-col items-center"),n(o,"class","overflow-y-scroll w-full scroll-smooth"),n(e,"class","flex flex-col w-screen max-h-screen items-center overscroll-contain transition-opacity opacity-0 duration-200 z-40 fixed top-0 left-0 right-0 bottom-0")},m(z,S){K(z,e,S),s(e,t),s(t,l),s(t,v),s(t,c),s(t,f),Ge(y,t,null),s(e,m),s(e,o),s(o,_),s(_,i),s(i,w),s(w,C),s(C,x),s(x,T),s(w,b),s(w,q),s(q,R),s(q,G),s(q,W),s(W,E),s(E,me),a[13](o),J=!0,ee||(ze=[rt(l,"click",a[8]),qt(a[9].call(null,e))],ee=!0)},p(z,S){var j,ue,ae,Q;(!J||S&32)&&M!==(M=((j=z[5])==null?void 0:j.title)+"")&&Mt(T,M),(!J||S&32&&!kt(R.src,A=(ue=z[5])==null?void 0:ue.image))&&n(R,"src",A),(!J||S&32&&I!==(I=(ae=z[5])==null?void 0:ae.title))&&n(R,"alt",I),(!J||S&32)&&$!==($=((Q=z[5])==null?void 0:Q.content)+"")&&Mt(me,$),(!J||S&1)&&n(i,"style",z[0])},i(z){J||(ve(y.$$.fragment,z),J=!0)},o(z){Me(y.$$.fragment,z),J=!1},d(z){z&&h(e),Ne(y),a[13](null),ee=!1,St(ze)}}}function ol(a){let e,t,l,r,v,c,f,y='<button class="btn btn-square btn-ghost"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path></svg></button>',m,o,_=`<div class="dropdown items-center md:hidden"><div tabindex="0" role="button" class="btn btn-ghost palanquin-dark-bold text-lg">Menu
                        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path></svg></div> <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box -left-1/2 -right-1/2 items-center"><li class="w-full"><a href="/#about" class="flex flex-col items-center"><p class="palanquin-dark-bold text-lg">About</p></a></li> <li class="w-full"><a href="/#works" class="flex flex-col items-center"><div class="palanquin-dark-bold text-lg">Works</div></a></li> <li class="w-full"><a href="/#contact" class="flex flex-col items-center"><p class="palanquin-dark-bold text-lg">Contact</p></a></li></ul></div> <div class="space-x-2 hidden md:inline"><a href="/#about"><button class="btn btn-ghost palanquin-dark-bold text-lg">About</button></a> <a href="/#works"><button class="btn btn-ghost palanquin-dark-bold text-lg">Works</button></a> <a href="/#contact"><button class="btn btn-ghost palanquin-dark-bold text-lg">Contact</button></a></div>`,i,w,C,x,M,T,b,q=`<div class="hero-content flex-col md:flex-row h-full"><div class="avatar"><div class="max-w-full md:w-96 md:h-96"><img src="${tl}" class="object-fit rounded-full" alt="Profile"/></div></div> <div><h1 class="text-4xl lg:text-6xl font-bold p">Programmer and designer crafting websites, apps and video games.</h1> <p class="py-6">Hi I am Karl Ward and I am a software enginner and designer specialising in website front-end and back-end, mobile / desktops apps and realtime applications with a background in video games development.</p> <a href="#works"><button class="btn btn-neutral">See my previous works</button></a></div></div>`,R,A,I='<div class="divider"></div>',G,W,E,$,me="About",J,ee,ze="With proficiency in a variety of programming languages and frameworks including C#, C++, React, Svelte, and expertise in both frontend and backend development, I bring a comprehensive skill set to every project.",De,ne,z="<b>Game Development</b>: As a game developer, I specialize in using powerful engines such as Unity and Godot to craft engaging and interactive gaming experiences. From concept to execution, I&#39;m committed to delivering polished games that captivate audiences and provide memorable experiences.",S,j,ue="<b>Web Development</b>: With a keen eye for design and functionality, I excel in building responsive and user-friendly websites. Leveraging the power of Svelte and React for UI development, I ensure that every website I create is not only visually appealing but also highly performant. Additionally, I specialize in integrating backend services like Firebase to enhance functionality and provide seamless user experiences.",ae,Q,pe="<b>App Development</b>: In the realm of app development, I focus on cross-platform solutions using Flutter and React Native. Whether it&#39;s building mobile applications for iOS and Android or desktop, I leverage my expertise to deliver high-quality applications that meet the unique needs of clients.",Ie,re,Y,he,Ee,ge,it='<div class="divider"></div>',Qe,ie,Te,oe,we,ot="Previous Work",Xe,Ye,be,ct='<div class="divider"></div>',Ze,ce,O,xe,dt='<h1 class="text-center">Contact</h1> <p>Want to work with me, but why choose me?</p> <ul><li><b>Versatility</b>: Proficient in a wide range of languages and frameworks, I can adapt to diverse project requirements.</li> <li><b>Attention to Detail</b>: I prioritize quality and precision in every aspect of development, from coding to user experience design.</li> <li><b>Collaborative Approach</b>: I believe in open communication and collaboration, ensuring that your vision is realized every step of the way.</li> <li><b>Timely Delivery</b>: With a commitment to deadlines, I strive to deliver projects on time and within budget.</li></ul> <p>Let&#39;s collaborate to turn your ideas into reality! Whether you&#39;re looking to develop a captivating game, a cutting-edge website, or a seamless application, I&#39;m here to help. Feel free to reach out, and let&#39;s discuss how we can bring your project to life.</p>',et,_e,ut='<div class="divider"></div>',tt,We,ye,ht='<div class="divider"></div>',lt,Le,ft='<div class="space-x-2"><a href="https://www.linkedin.com/in/karl-ward-239667171/"><button class="btn btn-neutral btn-circle"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path></svg></button></a> <a href="https://github.com/NormalKarl/"><button class="btn btn-neutral btn-circle"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></button></a> <a href="mailto:karlward97@gmail.com"><button class="btn btn-neutral btn-circle"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg></button></a></div>',st,fe;r=new jt({}),w=new Bt({});let nt=Ce(el),N=[];for(let g=0;g<nt.length;g+=1)N[g]=sl(ll(a,nt,g));let Ve=Ce(at),P=[];for(let g=0;g<Ve.length;g+=1)P[g]=Ht(Vt(a,Ve,g));function vt(g,V){return g[4]==g[6].Waiting?il:g[4]===g[6].Submitting?rl:g[4]===g[6].Successful?al:nl}let Pe=vt(a),Z=Pe(a),B=a[3]&&At(a);return{c(){e=d("div"),t=d("div"),l=d("div"),Oe(r.$$.fragment),v=L(),c=d("div"),f=d("a"),f.innerHTML=y,m=L(),o=d("div"),o.innerHTML=_,i=L(),Oe(w.$$.fragment),C=L(),x=d("div"),M=d("div"),T=d("div"),b=d("div"),b.innerHTML=q,R=L(),A=d("div"),A.innerHTML=I,G=L(),W=d("div"),E=d("article"),$=d("h1"),$.textContent=me,J=L(),ee=d("p"),ee.textContent=ze,De=L(),ne=d("p"),ne.innerHTML=z,S=L(),j=d("p"),j.innerHTML=ue,ae=L(),Q=d("p"),Q.innerHTML=pe,Ie=L(),re=d("div"),Y=d("table"),he=d("tbody");for(let g=0;g<N.length;g+=1)N[g].c();Ee=L(),ge=d("div"),ge.innerHTML=it,Qe=L(),ie=d("div"),Te=d("div"),oe=d("div"),we=d("h1"),we.textContent=ot,Xe=L();for(let g=0;g<P.length;g+=1)P[g].c();Ye=L(),be=d("div"),be.innerHTML=ct,Ze=L(),ce=d("div"),O=d("div"),xe=d("div"),xe.innerHTML=dt,et=L(),_e=d("div"),_e.innerHTML=ut,tt=L(),Z.c(),We=L(),ye=d("div"),ye.innerHTML=ht,lt=L(),Le=d("div"),Le.innerHTML=ft,st=L(),B&&B.c(),this.h()},l(g){e=u(g,"DIV",{class:!0});var V=p(e);t=u(V,"DIV",{class:!0});var D=p(t);l=u(D,"DIV",{class:!0});var Be=p(l);Ue(r.$$.fragment,Be),Be.forEach(h),v=k(D),c=u(D,"DIV",{class:!0});var He=p(c);f=u(He,"A",{href:!0,"data-svelte-h":!0}),H(f)!=="svelte-1u2lx5h"&&(f.innerHTML=y),m=k(He),o=u(He,"DIV",{class:!0,"data-svelte-h":!0}),H(o)!=="svelte-1nobiio"&&(o.innerHTML=_),i=k(He),Ue(w.$$.fragment,He),He.forEach(h),C=k(D),x=u(D,"DIV",{class:!0});var mt=p(x);M=u(mt,"DIV",{class:!0});var F=p(M);T=u(F,"DIV",{id:!0,class:!0,style:!0});var pt=p(T);b=u(pt,"DIV",{class:!0,"data-svelte-h":!0}),H(b)!=="svelte-d083da"&&(b.innerHTML=q),pt.forEach(h),R=k(F),A=u(F,"DIV",{class:!0,"data-svelte-h":!0}),H(A)!=="svelte-dv7dsu"&&(A.innerHTML=I),G=k(F),W=u(F,"DIV",{id:!0,class:!0,style:!0});var gt=p(W);E=u(gt,"ARTICLE",{class:!0});var X=p(E);$=u(X,"H1",{class:!0,"data-svelte-h":!0}),H($)!=="svelte-20nw2x"&&($.textContent=me),J=k(X),ee=u(X,"P",{"data-svelte-h":!0}),H(ee)!=="svelte-1iuxyn0"&&(ee.textContent=ze),De=k(X),ne=u(X,"P",{"data-svelte-h":!0}),H(ne)!=="svelte-1b0ev4"&&(ne.innerHTML=z),S=k(X),j=u(X,"P",{"data-svelte-h":!0}),H(j)!=="svelte-1kqktuq"&&(j.innerHTML=ue),ae=k(X),Q=u(X,"P",{"data-svelte-h":!0}),H(Q)!=="svelte-xwqgf6"&&(Q.innerHTML=pe),Ie=k(X),re=u(X,"DIV",{class:!0});var wt=p(re);Y=u(wt,"TABLE",{class:!0});var bt=p(Y);he=u(bt,"TBODY",{});var xt=p(he);for(let ke=0;ke<N.length;ke+=1)N[ke].l(xt);xt.forEach(h),bt.forEach(h),wt.forEach(h),X.forEach(h),gt.forEach(h),Ee=k(F),ge=u(F,"DIV",{class:!0,"data-svelte-h":!0}),H(ge)!=="svelte-dv7dsu"&&(ge.innerHTML=it),Qe=k(F),ie=u(F,"DIV",{id:!0,class:!0,style:!0});var _t=p(ie);Te=u(_t,"DIV",{class:!0});var yt=p(Te);oe=u(yt,"DIV",{class:!0});var $e=p(oe);we=u($e,"H1",{class:!0,"data-svelte-h":!0}),H(we)!=="svelte-1rq4sfb"&&(we.textContent=ot),Xe=k($e);for(let ke=0;ke<P.length;ke+=1)P[ke].l($e);$e.forEach(h),yt.forEach(h),_t.forEach(h),Ye=k(F),be=u(F,"DIV",{class:!0,"data-svelte-h":!0}),H(be)!=="svelte-dv7dsu"&&(be.innerHTML=ct),Ze=k(F),ce=u(F,"DIV",{id:!0,class:!0,style:!0});var Lt=p(ce);O=u(Lt,"DIV",{class:!0});var te=p(O);xe=u(te,"DIV",{class:!0,"data-svelte-h":!0}),H(xe)!=="svelte-19c9w3l"&&(xe.innerHTML=dt),et=k(te),_e=u(te,"DIV",{class:!0,"data-svelte-h":!0}),H(_e)!=="svelte-dv7dsu"&&(_e.innerHTML=ut),tt=k(te),Z.l(te),We=k(te),ye=u(te,"DIV",{class:!0,"data-svelte-h":!0}),H(ye)!=="svelte-dv7dsu"&&(ye.innerHTML=ht),lt=k(te),Le=u(te,"DIV",{class:!0,"data-svelte-h":!0}),H(Le)!=="svelte-135h0ew"&&(Le.innerHTML=ft),te.forEach(h),Lt.forEach(h),F.forEach(h),mt.forEach(h),D.forEach(h),st=k(V),B&&B.l(V),V.forEach(h),this.h()},h(){n(l,"class","absolute top-0 left-0 right-0 bottom-0 overflow-hidden"),n(f,"href","/#home"),n(o,"class","flex-grow flex flex-col items-center"),n(c,"class","flex flex-row items-center h-16 px-2 py-4 w-full shadow-md z-10 bg-base-100 sticky top-0"),n(b,"class","hero"),n(T,"id","home"),n(T,"class","flex flex-row items-center max-w-7xl"),n(T,"style",a[0]),n(A,"class","max-w-6xl w-full"),n($,"class","text-center"),n(Y,"class","table"),n(re,"class","overflow-x-auto"),n(E,"class","prose lg:min-w-[50rem]"),n(W,"id","about"),n(W,"class","flex flex-row items-center p-4"),n(W,"style",a[0]),n(ge,"class","max-w-6xl w-full"),n(we,"class","md:col-span-2 lg:col-span-3 text-4xl font-bold text-center h-20"),n(oe,"class","grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-4"),n(Te,"class","flex flex-row"),n(ie,"id","works"),n(ie,"class","flex flex-row items-center min-h-screen max-w-6xl p-4"),n(ie,"style",a[0]),n(be,"class","max-w-6xl w-full"),n(xe,"class","prose lg:min-w-[50rem]"),n(_e,"class","max-w-6xl w-full"),n(ye,"class","max-w-6xl w-full"),n(Le,"class","flex flex-col items-center w-full"),n(O,"class","flex flex-col"),n(ce,"id","contact"),n(ce,"class","flex flex-row items-center p-4"),n(ce,"style",a[0]),n(M,"class","flex flex-col items-center"),n(x,"class","overflow-y-scroll w-full scroll-smooth"),n(t,"class","flex flex-col items-center overscroll-contain"),n(e,"class","flex flex-col")},m(g,V){K(g,e,V),s(e,t),s(t,l),Ge(r,l,null),s(t,v),s(t,c),s(c,f),s(c,m),s(c,o),s(c,i),Ge(w,c,null),s(t,C),s(t,x),s(x,M),s(M,T),s(T,b),s(M,R),s(M,A),s(M,G),s(M,W),s(W,E),s(E,$),s(E,J),s(E,ee),s(E,De),s(E,ne),s(E,S),s(E,j),s(E,ae),s(E,Q),s(E,Ie),s(E,re),s(re,Y),s(Y,he);for(let D=0;D<N.length;D+=1)N[D]&&N[D].m(he,null);s(M,Ee),s(M,ge),s(M,Qe),s(M,ie),s(ie,Te),s(Te,oe),s(oe,we),s(oe,Xe);for(let D=0;D<P.length;D+=1)P[D]&&P[D].m(oe,null);s(M,Ye),s(M,be),s(M,Ze),s(M,ce),s(ce,O),s(O,xe),s(O,et),s(O,_e),s(O,tt),Z.m(O,null),s(O,We),s(O,ye),s(O,lt),s(O,Le),a[12](x),s(e,st),B&&B.m(e,null),fe=!0},p(g,[V]){if((!fe||V&1)&&n(T,"style",g[0]),(!fe||V&1)&&n(W,"style",g[0]),V&160){Ve=Ce(at);let D;for(D=0;D<Ve.length;D+=1){const Be=Vt(g,Ve,D);P[D]?P[D].p(Be,V):(P[D]=Ht(Be),P[D].c(),P[D].m(oe,null))}for(;D<P.length;D+=1)P[D].d(1);P.length=Ve.length}(!fe||V&1)&&n(ie,"style",g[0]),Pe===(Pe=vt(g))&&Z?Z.p(g,V):(Z.d(1),Z=Pe(g),Z&&(Z.c(),Z.m(O,We))),(!fe||V&1)&&n(ce,"style",g[0]),g[3]?B?(B.p(g,V),V&8&&ve(B,1)):(B=At(g),B.c(),ve(B,1),B.m(e,null)):B&&(Wt(),Me(B,1,1,()=>{B=null}),Rt())},i(g){if(!fe){ve(r.$$.fragment,g),ve(w.$$.fragment,g);for(let V=0;V<nt.length;V+=1)ve(N[V]);ve(B),fe=!0}},o(g){Me(r.$$.fragment,g),Me(w.$$.fragment,g),N=N.filter(Boolean);for(let V=0;V<N.length;V+=1)Me(N[V]);Me(B),fe=!1},d(g){g&&h(e),Ne(r),Ne(w),je(N,g),je(P,g),Z.d(),a[12](null),B&&B.d()}}}function cl(a,e,t){var l=(b=>(b[b.Waiting=0]="Waiting",b[b.Submitting=1]="Submitting",b[b.Failed=2]="Failed",b[b.Successful=3]="Successful",b))(l||{});let r="min-height: 100vh",v,c,f,y=!1,m=0;function o(){t(3,y=!0)}function _(){c&&c.setAttribute("style","opacity: 0;"),setTimeout(()=>{t(3,y=!1)},200)}function i(b){c=b,setTimeout(()=>{b.setAttribute("style","opacity: 1;")},50)}let w=at.at(0);zt(()=>{t(0,r="min-height: 100vh;"),f!==void 0&&f.addEventListener("submit",function(b){b.preventDefault();const q=new FormData(f),R=Object.fromEntries(q),A=JSON.stringify(R);t(4,m=1),fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:A}).then(async I=>t(4,m=I.status==200?3:2)).catch(I=>t(4,m=2)).then(()=>f.reset())})});const C=b=>{t(5,w=b),o()};function x(b){qe[b?"unshift":"push"](()=>{f=b,t(2,f)})}function M(b){qe[b?"unshift":"push"](()=>{v=b,t(1,v)})}function T(b){qe[b?"unshift":"push"](()=>{v=b,t(1,v)})}return[r,v,f,y,m,w,l,o,_,i,C,x,M,T]}class hl extends Ke{constructor(e){super(),Je(this,e,cl,ol,Fe,{})}}export{hl as component};
