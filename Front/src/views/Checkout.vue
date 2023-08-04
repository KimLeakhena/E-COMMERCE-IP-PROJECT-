import { RouterLink } from 'vue-router';
<template>
  <body  class=" bg-gray-100">
    <!-- header -->
    <header class="h-20 w-full bg-[#826B9F] flex justify-center items-center" >
      <div class="w-full flex justify-between items-center ">
        <div class="h-20 w-20 relative">
          <p class="text-5xl font-bold text-white">Choco</p>
        </div>
        <ul class="flex items-center gap-6 text-white text-2xl pr-2">

          <RouterLink to="/album">
            <li class="cursor-pointer w-full flex justify-center items-center"><a href="">Album</a></li>
          </RouterLink>
          <RouterLink to="/lightstick">
            <li  class="cursor-pointer w-full flex justify-center items-center"><a href="">lightstick</a></li>
          </RouterLink>
          <RouterLink to="/merch">
            <li  class="cursor-pointer w-full flex justify-center items-center"><a href="">Merch</a></li>
          </RouterLink>
          <RouterLink to="/Cart">
            <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg></li>
          </RouterLink>
            <li>
              <div class="relative text-gray-600">
                <input type="search" name="serch" placeholder="Search" class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none">
                <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                  <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                  </svg>
                </button>
              </div>
            </li>
        
          <li class="h-30 w-full checker-bg flex items-center justify-center  p-2 text-blue-500">
            <div  type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start"  class=" my-4 w-14 h-14  cursor-pointer bg-gray-100 rounded-full bg-cover  bg-center">
              <img id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" class="cursor-pointer"  src="../assets/image/userpf.png">
              
              <!-- Dropdown menu -->
              <div id="userDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <!-- <div>Bonnie Green</div> -->
                  <div class="font-medium truncate">Kim Leakhena</div>
                </div>
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" >
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Order & reordering</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Address</a>
                  </li>
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">settings</a>
                  </li>
                </ul>
                <!-- <div  v-on:click="onLogout()" class="py-1">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</a>
                </div> -->
              </div>
            </div>
          </li>
          
        </ul>
      </div>
      
    </header>
    <main >
      <!-- forbacktohome -->
      <!-- bg-[#e0e7ff] -->
      <div class="flex gap-6 mx-5 my-5 text-xl  ">
        <RouterLink to="/homepage">
          <p>Home</p>
        </RouterLink>
        <i class="fa-solid fa-forward" style="color: #7f72b1;padding-top:4px ;"></i>
        <p>ZEROBASEONE - The 1st Mini Album</p>
      </div>
      <!-- fororderproduct -->
      <div  class="flex flex-wrap  mx-8 my-8 h-auto  " >
        <div class="min-w-1/2 h-auto ">
          <div class="w-72 mx-20 my-10 flex flex-wrap ">
            <img src="" class="w-full bg-cover">
          </div>
        </div>
        <div class="min-w-[50%] h-auto m-auto ">
          <div class="flex mx-5 justify-between text-2xl">
            <p ></p>
            <p>$</p>
          </div>
          <hr class="my-12 mx-5 h-0.5 border-t-0 bg-black " />
          <div class="flex mx-5 justify-between text-2xl">
            <p>Version</p>
            <p href="#">Detail</p>
          </div>
          <div class=" my-12 mx-5 relative h-10 w-72 min-w-[200px]">
            <select class="peer h-full w-full rounded-[7px] border border-black border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border  placeholder-shown:border-t-black empty:!bg-red-500 focus:border-2  focus:border-t-transparent focus:outline-0 disabled:border-0 ">
              <option value="youthver">YOUTH Ver. </option>
              <option value="bshadever">SHADE Ver.</option>
              </select>
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l  before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r  after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75]  peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight  peer-focus:before:border-t-2 peer-focus:before:border-l-2  peer-focus:after:border-t-2 peer-focus:after:border-r-2  peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent ">
                Choose a Version
              </label>
            </div>
            <!-- <div  class="mx-5 ">
              
            </div> -->
            <div class="flex my-12 mx-5 ">
             <button type="button" onclick="minus()" class="bg-[#826B9F] p-1.5 font-bold rounded">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
              </svg>
            </button>
            
            <input id="item_count" type="number" value="1" class="max-w-[100px] font-bold font-mono py-1.5 px-2 mx-1.5
            block border border-gray-300 rounded-md text-sm shadow-sm  placeholder-gray-400
            focus:outline-none
            focus:border-sky-500
            focus:ring-1
            focus:ring-sky-500
            focus:invalid:border-red-500  focus:invalid:ring-red-500">
           
            <button type="button" onclick="plus()" class="bg-[#826B9F] p-1.5 font-bold rounded">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
            <hr class="my-12 mx-5 h-1 border-t-0  bg-[#CAC0C0] " />
            <div class="flex mx-5 justify-between text-2xl flex flex-wrap">
              <button  type="submit" onclick="myorder()" class="w-40 rounded-lg h-10 my-4 text-white w-48 rounded-lg h-10 bg-indigo-400 hover:bg-indigo-300 active:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-200">
                Add To Cart
              </button>
              <RouterLink :to="{name:'order'}">
                <button  type="submit" class="w-40 my-4 rounded-lg h-10 text-white bg-indigo-400 hover:bg-indigo-300 active:bg-indigo-400 focus:outline-none focus:ring focus:ring-indigo-200">
                Order Now
              </button>
            </Routerlink>
            </div>
            
          </div>
        </div>
        <div>
          
<h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">How much do you expect to use each month?</h3>
<ul class="grid w-full gap-6 md:grid-cols-2">
    <li>
        <input type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer" required>
        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div class="block">
                <div class="w-full text-lg font-semibold">0-50 MB</div>
                <div class="w-full">Good for small websites</div>
            </div>
            <svg class="w-5 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </label>
    </li>
    <li>
        <input type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer">
        <label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class="block">
                <div class="w-full text-lg font-semibold">500-1000 MB</div>
                <div class="w-full">Good for large websites</div>
            </div>
            <svg class="w-5 h-5 ml-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </label>
    </li>
</ul>

        </div>
        
        <!-- forrelatetoproduct -->
        <div>
          <hr class="my-5 mx-8 h-1 border-t-0 bg-[#CAC0C0] " />
        </div>
        <div class="mx-8 text-2xl font-medium">
          <div>Relate Product</div>
          <div class="flex justify-center flex-wrap">
            <div class="w-48 h-auto mx-9 my-10">
              <img src="https://www.ktown4u.com/goods_files/SH0164/goods_images/000095/GD00094693.default.2.png" class="w-full bg-cover">
            </div>
            <div class="w-48 h-auto mx-9 my-10">
              <img src="https://www.ktown4u.com/goods_files/SH0164/goods_images/000095/GD00094883.default.1.jpg" class="w-full bg-cover">
            </div>
            <div class="w-48 h-auto mx-9 my-10">
              <img src="https://www.ktown4u.com/goods_files/SH0164/goods_images/000096/GD00095334.default.1.png" class="w-full bg-cover">
            </div>
            <div class="w-48 h-auto mx-9 my-10">
              <img src="https://www.ktown4u.com/goods_files/SH0164/goods_images/000095/GD00094782.default.1.png" class="w-full bg-cover">
            </div>
          </div>
        </div>
        
        
      </main>
      <footer class="py-6  bg-gray-200 text-gray-900">
	<div class="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
		<div class="grid justify-center  lg:justify-between">
			<div class="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
				<span>Copy rgight © 2023 by codemix team </span>
				<a rel="noopener noreferrer" href="#">
					<span>Privacy policy</span>
				</a>
				<a rel="noopener noreferrer" href="#">
					<span>Terms of service</span>
				</a>
			</div>
			<div class="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
				<a rel="noopener noreferrer" href="#" title="Email" class="flex items-center justify-center w-10 h-10 rounded-full bg-[#826B9F] hover:bg-[#B0A3C0] duration-150 text-gray-50">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
				</a>
				<a rel="noopener noreferrer" href="#" title="Twitter" class="flex items-center justify-center w-10 h-10 rounded-full bg-[#826B9F] hover:bg-[#B0A3C0] duration-150 text-gray-50">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" class="w-5 h-5">
						<path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
					</svg>
				</a>
				<a rel="noopener noreferrer" href="#" title="GitHub" class="flex items-center justify-center w-10 h-10 rounded-full bg-[#826B9F] hover:bg-[#B0A3C0] duration-150 text-gray-50">
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
						<path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
					</svg>
				</a>
			</div>
		</div>
	</div>
</footer>
      
    </body>
  </template>

  <style>
  /* @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  } */
  :root{
    --font-header: 36px;
    --font-regular: 16px;
    --font-semi-regular: 20px;
    --font-semi-header: 26px;
  }
  
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: none;
    /* background-color: #B0A3C0; */
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-family: 'Poor Story', cursive;
  }
  
</style>
<script>
import { RouterLink, RouterView } from "vue-router";
import productApi from "../libs/apis/product";
export default{
  data(){
    return{
      products: [],
    };
  },
  methods:{},
  async mounted(){
    this.products=await productApi.all();
  },
  mounted() {
    initFlowbite();
    
    
  }
}
</script>
