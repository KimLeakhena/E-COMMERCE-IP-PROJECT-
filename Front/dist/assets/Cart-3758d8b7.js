import{_ as g,r as v,o as r,c as l,a as t,b as i,w as d,F as n,f as u,d as s,e as w,t as h,g as m}from"./index-9fbbe039.js";const y="/assets/GD00096445.default.1-9e34144b.png";const f={data(){return{categories:[],items:[],products:[],title:"",imageUrl:"",desc:"",categoryId:"",itemId:"",priceModalShown:!1,selectedProduct:null,price:"",source:"",cart:[]}},mounted(){initFlowbite(),document.getElementById("2").remove()},methods:{removeProductFromCart(a){this.cart.spliace(this.cart.indexOf(a))}}},b={class:"h-20 w-full bg-[#826B9F] flex justify-center items-center"},_={class:"w-full flex justify-between items-center"},k=t("div",{class:"h-20 w-20 relative"},[t("p",{class:"text-5xl font-bold text-white"},"Choco")],-1),H={class:"flex items-center gap-6 text-white text-2xl pr-2"},M=t("li",{class:"cursor-pointer w-full flex justify-center items-center"},[t("a",{href:""},"Home")],-1),j=s('<li><button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-stone-400 md:p-0 md:w-auto text-white dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">category<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"></path></svg></button><div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"><ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton"><li><a href="album" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Album</a></li><li><a href="lightstick" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">lightstick</a></li><li><a href="merch" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Merch</a></li></ul></div></li>',1),C=t("li",{class:"cursor-pointer w-full flex justify-center items-center"},[t("a",{href:""},"Contact")],-1),V=t("li",null,[t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-8 w-8"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"})])],-1),L={class:"relative text-gray-600"},B=t("input",{type:"search",name:"serch",placeholder:"Search",class:"bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"},null,-1),Z={type:"submit",class:"absolute right-0 top-0 mt-3 mr-4"},A={class:"h-4 w-4 fill-current",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 56.966 56.966",style:{"enable-background":"new 0 0 56.966 56.966"},"xml:space":"preserve",width:"512px",height:"512px"},$=t("path",{d:"M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"},null,-1),N=[$],S={class:"h-30 w-full checker-bg flex items-center justify-center p-2 text-blue-500"},z={type:"button","data-dropdown-toggle":"userDropdown","data-dropdown-placement":"bottom-start",class:"my-4 w-14 h-14 cursor-pointer bg-gray-100 rounded-full bg-cover bg-center"},F=t("img",{id:"avatarButton",type:"button","data-dropdown-toggle":"userDropdown","data-dropdown-placement":"bottom-start",class:"cursor-pointer",src:w},null,-1),R={id:"userDropdown",class:"z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"},D=s('<div class="px-4 py-3 text-sm text-gray-900 dark:text-white"><div class="font-medium truncate">Kim Leakhena</div></div><ul class="py-2 text-sm text-gray-700 dark:text-gray-200"><li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a></li><li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Order &amp; reordering</a></li><li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Address</a></li><li><a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">settings</a></li></ul>',2),P=t("a",{href:"#",class:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"},"Log out",-1),I=[P],E={class:"flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100"},O=t("h2",{class:"text-xl font-semibold"},"Your cart",-1),U={class:"flex flex-col divide-y divide-gray-700"},G={class:"flex w-full space-x-2 sm:space-x-4"},K=["src"],T={class:"flex flex-col justify-between w-full pb-4"},W={class:"flex justify-between w-full pb-2 space-x-2"},Y={class:"space-y-1"},q={class:"text-lg font-semibold leadi sm:pr-8"},J={class:"text-sm dark:text-gray-400"},Q=t("div",{class:"text-right"},[t("p",{class:"text-lg font-semibold"},"59.99$"),t("p",{class:"text-sm line-through dark:text-gray-600"},"75.50$")],-1),X={class:"flex text-sm divide-x"},tt=["onClick"],et=s('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current"><path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path><rect width="32" height="200" x="168" y="216"></rect><rect width="32" height="200" x="240" y="216"></rect><rect width="32" height="200" x="312" y="216"></rect><path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path></svg><span>Remove</span>',2),st=[et],at=t("button",{type:"button",class:"flex items-center px-2 py-1 space-x-1"},[t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",class:"w-4 h-4 fill-current"},[t("path",{d:"M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"})]),t("span",null,"Add to favorites")],-1),rt=s('<li class="flex flex-col py-6 sm:flex-row sm:justify-between"><div class="flex w-full space-x-2 sm:space-x-4"><img class="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="'+y+'" alt="Replica headphones"><div class="flex flex-col justify-between w-full pb-4"><div class="flex justify-between w-full pb-2 space-x-2"><div class="space-y-1"><h3 class="text-lg font-semibold leadi sm:pr-8"></h3><p class="text-sm dark:text-gray-400">White</p></div><div class="text-right"><p class="text-lg font-semibold">99.95$</p><p class="text-sm line-through dark:text-gray-600">150$</p></div></div><div class="flex text-sm divide-x"><button type="button" class="flex items-center px-2 py-1 pl-0 space-x-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current"><path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path><rect width="32" height="200" x="168" y="216"></rect><rect width="32" height="200" x="240" y="216"></rect><rect width="32" height="200" x="312" y="216"></rect><path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path></svg><span>Remove</span></button><button type="button" class="flex items-center px-2 py-1 space-x-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current"><path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path></svg><span>Add to favorites</span></button></div></div></div></li><li class="flex flex-col py-6 sm:flex-row sm:justify-between"><div class="flex w-full space-x-2 sm:space-x-4"><img class="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="'+m+`" alt="Set of travel chargers"><div class="flex flex-col justify-between w-full pb-4"><div class="flex justify-between w-full pb-2 space-x-2"><div class="space-y-1"><h3 class="text-lg font-semibold leadi sm:pr-8">Set of travel chargers</h3><p class="text-sm dark:text-gray-400">Black</p></div><div class="text-right"><p class="text-lg font-semibold">8.99$</p><p class="text-sm line-through dark:text-gray-600">15.99$</p></div></div><div class="flex text-sm divide-x" id="\r
						2"><button type="button" class="flex items-center px-2 py-1 pl-0 space-x-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current"><path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path><rect width="32" height="200" x="168" y="216"></rect><rect width="32" height="200" x="240" y="216"></rect><rect width="32" height="200" x="312" y="216"></rect><path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path></svg><span>Remove</span></button><button type="button" class="flex items-center px-2 py-1 space-x-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current"><path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path></svg><span>Add to favorites</span></button></div></div></div></li>`,2),lt=s('<div class="space-y-1 text-right"><p>Total amount: <span class="font-semibold">357 €</span></p><p class="text-sm dark:text-gray-400">Not including taxes and shipping costs</p></div><div class="flex justify-end space-x-4"><button type="button" class="px-6 py-2 border rounded-md border-violet-400">Back <span class="sr-only sm:not-sr-only">to shop</span></button><button type="button" class="px-6 py-2 border rounded-md bg-violet-400 dark:text-gray-900 border-violet-400"><span class="sr-only sm:not-sr-only">Continue to</span>Checkout </button></div>',2);function ot(a,c,it,dt,p,x){const o=v("RouterLink");return r(),l(n,null,[t("header",b,[t("div",_,[k,t("ul",H,[i(o,{to:"/homepage"},{default:d(()=>[M]),_:1}),j,i(o,{to:"/about"},{default:d(()=>[C]),_:1}),i(o,{to:"/Cart"},{default:d(()=>[V]),_:1}),t("li",null,[t("div",L,[B,t("button",Z,[(r(),l("svg",A,N))])])]),t("li",S,[t("div",z,[F,t("div",R,[D,t("div",{onClick:c[0]||(c[0]=e=>a.onLogout()),class:"py-1"},I)])])])])])]),t("div",E,[O,t("ul",U,[(r(!0),l(n,null,u(p.cart,e=>(r(),l("li",{class:"flex flex-col py-6 sm:flex-row sm:justify-between",key:e.name},[t("div",G,[t("img",{class:"flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500",src:e.imageUrl,alt:"Polaroid camera"},null,8,K),t("div",T,[t("div",W,[t("div",Y,[t("h3",q,h(e.title),1),t("p",J,h(e.desc),1)]),Q]),t("div",X,[t("button",{type:"button",onClick:ct=>x.removeProductFromCart(e),class:"flex items-center px-2 py-1 pl-0 space-x-1"},st,8,tt),at])])])]))),128)),rt]),lt])],64)}const ht=g(f,[["render",ot]]);export{ht as default};
