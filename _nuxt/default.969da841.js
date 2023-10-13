import{_ as x}from"./nuxt-link.9ed68473.js";import{r as f,a2 as m,p as s,j as o,k as e,l as u,G as r,H as d,y as g,F as _,z as h,a3 as b,_ as A,a1 as y,a4 as w}from"./entry.0dcd307e.js";const k=e("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"},null,-1),B=e("link",{rel:"preconnect",href:"https://fonts.googleapis.com"},null,-1),j=e("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""},null,-1),U=e("link",{href:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",rel:"stylesheet"},null,-1),M={class:"bg-white"},Y={class:"flex flex-row justify-between items-center py-6 font-bold container mx-auto"},T=e("a",{href:"#/",class:"h-10","aria-current":"page"},[e("img",{class:"h-full",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA6CAYAAAANzi8+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAsdJREFUeNrsm7FLG1Ecx99dYhACchWkFASDndop1UWnJJub9j9IsEsnUejiIungajoXMZujl6mjl0kQqglCB0U4pwwdeqABJ+vvJ7/QItfrvUvu3Tvy+8LjJCQv7z7v93vv+8zvhGD5yoj6wddv19fgUoJW1OA+XGhdaM3rH/teImAACII4glbQcKIRSh3gNIbtKCMJpQqXb9AsTTNgEtrK9MxC4dfP85YSMBQph/TluqsIcAyA40TtwJR4757GkeKnHZjMQqxg6AvKKdxcqnFHzFpKd91S3GAsMWYyBWsoME5K78+NFQwYJofMU9rUUpFK9ZRBcWBC7djBkM1upgQKRndN2ZEAbTY4StyhljSG0oFWgYl0h+kk0umajgcbZPpGcphcfOj7vv7dzIeNEFwHWwDEN6r7u8syBtUzVEwhgDz+n3M+vb/wPxV+8A1qJ799UpEZA4D5LbM+sY9hg8dgGAyDYTAMhsEwGAbDYBgMi8EwGAbDYBgMg2EwDIbBMBgGwxo/MP3dZWtcwMjWFpfHBYwl+ZPramrB3BoZ2Y/shUwjjK6qZN8dbcBcGdLlw0W46aOg9YOi6jjCcG6yuoBxMlNi4R8VDwHCatIyAMACobb4U1qGQEoiegmuow2YtjkltkQv0npDqVId0VDc/PaJPqnUM3LiLFwtTNz6ot2u9DX7MukhYAFSUzswWD3VhrUmQdUgjTyVYDph3/h5YvYprVB0UaUmQLFV+5huaD8jMuJTbu7J15ivDFVQsHStloTBs4VEAfUleJqPuXlx9ybrKoqUSiLOl55TlKq7BTj2i9mHd/BnI6Zh4Zg2n0fKQIbKJKZHBw/ChDa094MHP8nW74jRPB7k0ZbcGCy0iYMhOGW6ST9XiqlTD6jVLRCcVUlX61E6ozu2g4AkBuYvQNazfx94AKQj0wdFkhUA2SUn6wrWaPQowAAPyLkOT2i3uwAAAABJRU5ErkJggg==",alt:"logo"})],-1),C=e("i",{class:"fa-solid fa-bars-staggered"},null,-1),D=[C],E=h('<div class="hidden md:block" id="navbarNavDropdown"><ul class="flex flex-row gap-8 items-center"><li class="nav-item hover:text-primary"><a href="/" class="router-link-active router-link-exact-active nav-link" aria-current="page">Home</a></li><li class="nav-item hover:text-primary"><a class="nav-link" href="/about">Wat is Technovium Unlimited</a></li><li class="nav-item hover:text-primary"><a class="nav-link" href="/blogs">Blogs</a></li></ul></div>',1),F={class:"group relative hidden md:block"},J=e("div",{class:"flex flex-row items-center gap-3 justify-end group-hover:text-primary"},[e("i",{class:"fa-solid fa-user"}),e("span",null,"My Account")],-1),G={class:"block absolute pt-5 right-0 top-full min-width-[160px] z-20 transition-[opacity,margin] duration group-hover:opacity-100 opacity-0 min-w-[15rem] z-30"},Q={key:0,class:"bg-bgdefault shadow-lg rounded-lg py-4 px-2 flex flex-col gap-2"},W={key:1,class:"bg-bgdefault shadow-lg rounded-lg py-4 px-2 flex flex-col gap-2"},Z={__name:"Header",emits:["clicked"],setup(a,{emit:t}){const l=f(m());function n(){t("clicked")}return(c,p)=>{const i=x;return s(),o(_,null,[k,B,j,U,e("div",M,[e("div",Y,[e("div",{class:"flex-1 flex flex-row gap-16 items-center justify-between md:justify-start"},[T,e("button",{onClick:n,class:"block md:hidden",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},D),E]),e("div",F,[J,e("div",G,[u(l)?(s(),o("div",Q,[r(i,{to:"/account",class:"flex items-center gap-x-3.5 py-2 px-3 rounded-md text-gray-800 hover:bg-bgsecondary focus:ring-2 focus:ring-primary"},{default:d(()=>[g(" Account ")]),_:1}),r(i,{to:"/logout",class:"flex items-center gap-x-3.5 py-2 px-3 rounded-md text-gray-800 hover:bg-bgsecondary focus:ring-2 focus:ring-primary"},{default:d(()=>[g(" Logout ")]),_:1})])):(s(),o("div",W,[r(i,{to:"/register",class:"flex items-center gap-x-3.5 py-2 px-3 rounded-md text-gray-800 hover:bg-bgsecondary focus:ring-2 focus:ring-primary"},{default:d(()=>[g(" Register ")]),_:1}),r(i,{to:"/login",class:"flex items-center gap-x-3.5 py-2 px-3 rounded-md text-gray-800 hover:bg-bgsecondary focus:ring-2 focus:ring-primary"},{default:d(()=>[g(" Login ")]),_:1})]))])])])])],64)}}},N=Z,K={id:"sidenav",class:"fixed translate-x-0 -translate-x-full transition duration-300 ease-out top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"},V=e("a",{href:"#/",class:"h-10 mr-auto","aria-current":"page"},[e("img",{class:"h-full",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA6CAYAAAANzi8+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAsdJREFUeNrsm7FLG1Ecx99dYhACchWkFASDndop1UWnJJub9j9IsEsnUejiIungajoXMZujl6mjl0kQqglCB0U4pwwdeqABJ+vvJ7/QItfrvUvu3Tvy+8LjJCQv7z7v93vv+8zvhGD5yoj6wddv19fgUoJW1OA+XGhdaM3rH/teImAACII4glbQcKIRSh3gNIbtKCMJpQqXb9AsTTNgEtrK9MxC4dfP85YSMBQph/TluqsIcAyA40TtwJR4757GkeKnHZjMQqxg6AvKKdxcqnFHzFpKd91S3GAsMWYyBWsoME5K78+NFQwYJofMU9rUUpFK9ZRBcWBC7djBkM1upgQKRndN2ZEAbTY4StyhljSG0oFWgYl0h+kk0umajgcbZPpGcphcfOj7vv7dzIeNEFwHWwDEN6r7u8syBtUzVEwhgDz+n3M+vb/wPxV+8A1qJ799UpEZA4D5LbM+sY9hg8dgGAyDYTAMhsEwGAbDYBgMi8EwGAbDYBgMg2EwDIbBMBgGwxo/MP3dZWtcwMjWFpfHBYwl+ZPramrB3BoZ2Y/shUwjjK6qZN8dbcBcGdLlw0W46aOg9YOi6jjCcG6yuoBxMlNi4R8VDwHCatIyAMACobb4U1qGQEoiegmuow2YtjkltkQv0npDqVId0VDc/PaJPqnUM3LiLFwtTNz6ot2u9DX7MukhYAFSUzswWD3VhrUmQdUgjTyVYDph3/h5YvYprVB0UaUmQLFV+5huaD8jMuJTbu7J15ivDFVQsHStloTBs4VEAfUleJqPuXlx9ybrKoqUSiLOl55TlKq7BTj2i9mHd/BnI6Zh4Zg2n0fKQIbKJKZHBw/ChDa094MHP8nW74jRPB7k0ZbcGCy0iYMhOGW6ST9XiqlTD6jVLRCcVUlX61E6ozu2g4AkBuYvQNazfx94AKQj0wdFkhUA2SUn6wrWaPQowAAPyLkOT2i3uwAAAABJRU5ErkJggg==",alt:"logo"})],-1),q=e("svg",{class:"h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),S=[q],I=h('<div><ul><li class="mb-1"><a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-primary/10 hover:text-primary rounded" href="/">Home</a></li><li class="mb-1"><a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-primary/10 hover:text-primary rounded" href="/about">Wat is Technovium Unlimited</a></li><li class="mb-1"><a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-primary/10 hover:text-primary rounded" href="/blogs">Blogs</a></li></ul></div>',1),L={class:"mt-auto"},R={key:0,class:"pt-6"},z=e("a",{class:"px-4 py-6 mb-3 leading-loose text-sm text-center font-semibold leading-none bg-gray-100 hover:bg-gray-200 rounded-xl flex flex-row gap-3 items-center",href:"/account"},[e("i",{class:"fa-solid fa-user"}),e("div",null,"Account")],-1),H=e("a",{class:"px-4 py-3 mb-2 leading-loose text-xs text-center text-light font-semibold hover:text-default rounded-xl flex flex-row gap-2 items-center justify-center",href:"/register"},[e("i",{class:"fa-solid fa-right-from-bracket"}),e("div",null,"Logout")],-1),P=[z,H],$={key:1,class:"pt-6"},X=e("a",{class:"block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl",href:"/login"},"Login",-1),O=e("a",{class:"block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-primary hover:bg-primary/80 rounded-xl",href:"/register"},"Register",-1),ee=[X,O],te={mounted(){setTimeout(()=>{this.removeTranslateXClass()},300)},methods:{removeTranslateXClass(){const a=document.querySelector("#sidenav");a&&a.classList.remove("-translate-x-full")}}},se=Object.assign(te,{__name:"SideNav",props:{sidenavActive:Number},emits:["clicked"],setup(a,{emit:t}){const l=m();function n(){const c=document.querySelector("#sidenav");c&&c.classList.toggle("-translate-x-full"),setTimeout(()=>{t("clicked")},300)}return(c,p)=>(s(),o("div",{class:b(["navbar-menu relative z-50 group",{hidden:a.sidenavActive===0}])},[e("div",{onClick:n,class:"navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"}),e("nav",K,[e("div",{class:"flex items-center mb-8"},[V,e("button",{onClick:n,class:"navbar-close"},S)]),I,e("div",L,[u(l)?(s(),o("div",$,ee)):(s(),o("div",R,P))])])],2))}}),oe=se,ae=""+globalThis.__publicAssetsURL("img/fulllogo.png"),le={},ne={class:"bg-footer text-light text-lg font-bold mt-24"},ie=h('<div class="container mx-auto flex flex-col"><div class="py-16 space-y-4 flex flex-col md:flex-row gap-24 md:items-center flex-wrap gap-y-5"><div class="flex-1"><p class="whitespace-pre-line"> Met Technovium Unlimited wordt gestreefd een levende online leeromgeving te creëren, </p><p> ontwikkeld door studenten en docenten. </p></div><a href="/" class="flex-1 flex justify-end w-fit"><img src="'+ae+'" alt="logo" class="h-32 aspect-auto"></a></div><div class="py-4 flex flex-row flex-wrap gap-y-5 justify-between items-center text-sm text-light font-bold"><span>© 2023 copyright. All rights reserved.</span><span>In case of any concern, <a class="text-default hover:text-blue-700 font-black" href="mailto:b.dewildt@roc-nijmegen.nl,d.radic@roc-nijmegen.nl">contact us</a></span></div></div>',1),re=[ie];function ce(a,t){return s(),o("div",ne,re)}const de=A(le,[["render",ce]]),pe={__name:"default",setup(a){const t=f(0);function l(){t.value=t.value===1?0:1}return(n,c)=>{const p=N,i=oe,v=de;return s(),o("div",null,[r(p,{onClicked:l}),(s(),y(i,{sidenavActive:u(t),onClicked:l,key:u(t)},null,8,["sidenavActive"])),w(n.$slots,"default"),r(v)])}}};export{pe as default};
