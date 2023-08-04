
<template>
  
  <body class=" bg-gray-100">
    <!-- header -->
    <header class="h-20 w-full bg-[#826B9F] flex justify-center items-center" >
      <div class="w-full flex justify-between items-center ">
        <div class="h-20 w-20 relative">
          <p class="text-5xl font-bold text-white">Choco</p>
        </div>
        <ul class="flex items-center gap-6 text-white text-2xl pr-2">

          <RouterLink to="/homepage">
            <li class="cursor-pointer hover:bg-gray w-full flex justify-center items-center"><a href="">Home</a></li>
          </RouterLink>
          <li >
            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-stone-400 md:p-0 md:w-auto text-white dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">category<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div id="dropdownNavbar" class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="album" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Album</a>
                  </li>
                  <li>
                    <a href="lightstick" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">lightstick</a>
                  </li>
                  <li>
                    <a href="merch" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Merch</a>
                  </li>
                </ul>
               
            </div>
        </li>
        <RouterLink to="/about">
            <li  class="cursor-pointer w-full flex justify-center items-center"><a href="">Contact</a></li>
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
                <div  v-on:click="onLogout()" class="py-1">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</a>
                </div>
              </div>
            </div>
          </li>
          
        </ul>
      </div>
      
    </header>
    <main>
      <!-- sliderimage -->
      <div class="slide-container">
        <div class="img-wrapper">
          <img src="https://www.weverseshop.io/_next/image?url=https%3A%2F%2Fcdn-contents.weverseshop.io%2Fpublic%2Fshop%2Fb6c3e0cfdab92e9994afbffd15b93374.png&w=720&q=95" class="active"/>
          <img src="https://www.weverseshop.io/_next/image?url=https%3A%2F%2Fcdn-contents.weverseshop.io%2Fpublic%2Fshop%2F362a617abc2bcea0e6c6b968f18d88c4.png&w=720&q=95"/>
          <img src="https://www.weverseshop.io/_next/image?url=https%3A%2F%2Fcdn-contents.weverseshop.io%2Fpublic%2Fshop%2Fd106107f5bb52166992da89d05d52a6e.png&w=720&q=95"/>
          <img src="https://www.weverseshop.io/_next/image?url=https%3A%2F%2Fcdn-contents.weverseshop.io%2Fpublic%2Fshop%2F0bbd0bb656292b2e8ddde7f70a62f443.png&w=720&q=95"/>
          
        </div>
        <div class="btn-container">
          <button class="prev"><i class="fa-solid fa-angle-left"></i></button>
          <button class="next"><i class="fa-solid fa-angle-right"></i></button>
        </div>
      </div>
      <!-- discount -->
      <div class="p-6 py-12 bg-[#c7d2fe] my-6">
	<div class="container mx-auto">
		<div class="flex flex-col lg:flex-row items-center justify-between">
			<h2 class="text-center text-6xl tracki font-bold">Up to
				<br class="sm:hidden">50% Off
			</h2>
			<div class="space-x-2 text-center py-2 lg:py-0">
				<span>Plus free shipping! Use code:</span>
				<span class="font-bold text-lg">ZEROBASEONE</span>
			</div >
			<a href="#" rel="noreferrer noopener" class="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-[#826B9F] hover:bg-[#B0A3C0] text-white dark:border-gray-400">Shop Now</a>
		</div>
	</div>
</div>
<section class="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
		<div class="container mx-auto space-y-12">
			<div class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
				<img src="https://pbs.twimg.com/media/EWVS1vpU8AE8LAg.jpg" alt="" class="h-80 dark:bg-gray-500 aspect-video">
				<div class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
					<span class="text-xs uppercase dark:text-gray-400">new</span>
					<h3 class="text-3xl font-bold">We're not reinventing the wheel</h3>
					<p class="my-6 dark:text-gray-400">An Ode is the third studio album by South Korean boy band Seventeen.It was released on September 16, 2019, through Pledis Entertainment.The album spawned two singles, "Hit" was released as the album's lead single on August 5, 2019, followed by the title track, "Fear", on the release date of the album.</p>
					<button type="button" class="self-start">see more</button>
				</div>
			</div>
       <!-- newrelease -->
      
       <div class=" my-4 mx-auto w-5/6  jutify-center h-[70px] bg-[#826B9F]  p-4 rounded-2xl ">
        <h1 class="text-center font-serif  text-2xl text-white">New Release</h1>
      </div>
      <section class="py-10 bg-gray-100">
  <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <article v-for="product in products" :key="product._id" class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
      <a href="#">
        <div class="relative flex items-end overflow-hidden rounded-xl">
          <img :src="product.imageUrl" alt="Hotel Photo" />
          <div class="flex items-center space-x-1.5 rounded-lg bg-[#826B9F] hover:bg-[#B0A3C0] px-4 py-1.5 text-white duration-100 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </div>
        </div>
        <div class="mt-1 p-2">
          <h2 class="text-slate-700">{{product.title}}</h2>
          <p class="mt-1 text-sm text-slate-400">{{product.desc}}</p>

          <div class="mt-3 flex items-end justify-between">
              <p class="text-lg font-bold text-[#826B9F]">{{product.price}}$</p>

            <div class="flex items-center space-x-1.5 rounded-lg bg-[#826B9F] hover:bg-[#B0A3C0] px-4 py-1.5 text-white duration-100 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
              <RouterLink to="/checkout">
                <button class="text-sm">Order</button>
              </RouterLink>
            </div>
          </div>
        </div>
      </a>
    </article>
  </div>
</section>
      
			<div class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
				<img src="https://kpoplat.com/wp-content/uploads/2021/06/treasure-lighstick-sold-out-kpoplat-750x450.png" alt="" class="h-80 dark:bg-gray-500 aspect-video">
				<div class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
					<span class="text-xs uppercase dark:text-gray-400">New</span>
					<h3 class="text-3xl  font-bold">TREASURE Official Light Stick</h3>
					<p class="my-6 dark:text-gray-400">The concept behind the light stick’s design is a “treasure box,” which is similar to the name of the survival show “YG Treasure Box” through which the group was created. At the top of the light stick is a jewel shape that symbolizes TREASURE and their fans TREASURE MAKER.</p>
					<button type="button" class="self-start">Buy now</button>
				</div>
			</div>
  <div class=" m-auto px-6 py-40">
    <div class="flex flex-col md:flex-row items-center justify-between relative w-100 h-auto md:h-64 bg-100 shadow-2xl rounded-lg p-8">
      <div class="w-8/12 text-2xl">
        <!-- <img class="float-left mr-1" src="https://assets-global.website-files.com/5b5a66e9f3166b36708705fa/5cf8fb1f994fb7168d0d66fb_quote-intro.svg"> -->
        <span class="flex">"I think reaching the top is ambiguous in and of itself. Above the top is the sky, above that is the universe, and even above that there’s going to be something else. I always want to be growing, higher than the sky and the universe "</span>
      </div>
          <div class="relative shadow-md font-medium my-5 py-2 px-4 text-white cursor-pointer bg-yellow-600 hover:bg-yellow-500 rounded text-lg text-center w-48">
            <span class="absolute h-3 w-3 right-0 top-0 animate-ping inline-flex rounded-full h-3 w-3 bg-yellow-600">
            </span>
            iKON’s Bobby
          </div>
    </div>
  </div>
			<div class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
				<img src="https://www.weverseshop.io/_next/image?url=https%3A%2F%2Fcdn-contents.weverseshop.io%2Fpublic%2Fshop%2F16dd9f0eac95eddb9d067035a45cea50.png&w=720&q=95" alt="" class="h-80 dark:bg-gray-500 aspect-video">
				<div class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
					<span class="text-xs uppercase dark:text-gray-400">New</span>
					<h3 class="text-3xl font-bold">TREASURE</h3>
					<p class="my-6 dark:text-gray-400">TREASURE has started pre-orders for their second full-length album, REBOOT, with a digipack and KiT versions. The digipack version has been prepared in various configurations, including a 20-page booklet for each member, a folding poster, a selfie photo card, a rare selfie photo card, and a QR lyric card.</p>
					<button type="button" class="self-start">Buy now</button>
				</div>
			</div>
		</div>
	</section>


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
  
  /* @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
      
    }
  } */
  .slide-container {
    position: relative;
    
    
    
  }
  .card{
  /* display:grid; */
  height:60vh;
  position: relative;
  place-items:center
}
  
  .img-wrapper {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
    display: flex;
    object-fit: cover;
    /* border-radius: 20px; */
  }
  
  .img-wrapper > img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  .img-wrapper > img:not(.active) {
    left: -100%;
  }
  .btn-container {
    position: absolute;
    top: 45%;
    width: 100%;
  }
  
  .btn-container > button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 1.5rem;
    border: none;
    outline: none;
    backdrop-filter: blur(50px);
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 50px rgb(210, 210, 210);
    cursor: pointer;
    transition: all 0.2s ease;
    color: grey;
  }
  .btn-container > button:hover {
    color: rgb(49, 49, 49);
    box-shadow: 0 0 30px rgb(196, 196, 196);
    background: rgba(255, 255, 255, 0.8);
  }
  .btn-container > button:first-child {
    position: absolute;
    z-index: 100;
    left: 25px;
  }
  .btn-container > button:last-child {
    position: absolute;
    z-index: 100;
    right: 25px;
  }
  
  .dots-container {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 135px;
    display: flex;
    justify-content: center;
    backdrop-filter: blur(50px);
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 30px rgb(143, 143, 143);
    border-radius: 100px;
    padding: 5px 0;
    gap: 0.5rem;
  }
  .dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.5);
    transition: all 0.2s ease-out;
  }
  .dot.active {
    width: 50px;
    border-radius: 100px;
    background-color: rgba(255, 255, 255, 1);
  }
  
  @keyframes next1 {
    from {
      left: 0%;
    }
    to {
      left: -100%;
    }
  }
  @keyframes next2 {
    from {
      left: 100%;
    }
    to {
      left: 0;
    }
  }
  @keyframes prev1 {
    from {
      left: 0%;
    }
    to {
      left: 100%;
    }
  }
  @keyframes prev2 {
    from {
      left: -100%;
    }
    to {
      left: 0%;
    }
  }
</style>



<script>
import { RouterLink, RouterView } from "vue-router";
import { initFlowbite } from 'flowbite'
import category from "@/libs/apis/category";
import item from "@/libs/apis/item";
import product from "@/libs/apis/product";
import authApi from "@/libs/apis/auth";
import price from "../libs/apis/price";

export default{
  
  // components: {},
  data() {
    return {
      categories: [],
      items: [],
      products: [],
      title: "",
      imageUrl: "",
      desc: "",
      categoryId: "",
      itemId: "",
      priceModalShown: false,
      selectedProduct: null,
      price: "",
      source: "",
      first_product:"",
    }
  },
  async mounted() {
    this.categories = await category.all();
    this.items = await item.all();
    this.products = await product.all();
    console.log(this.categories);
    this.price=await price.all();

  },
  
  methods: {
    async onClick(categoryId,itemId){
      this.products=await product.all(categoryId,itemId)
    },
    async onLogout() {
      const result = await authApi.logout();
      if (result) this.$router.push({ name: "home" });
    },
    
  },
  mounted() {
    initFlowbite();
    const images = document.querySelectorAll(".img-wrapper > img");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    let counter = 0;
    window.setInterval(() => {
      if (counter == images.length - 1) {
        counter = 0;
      }
      else {
        counter++;
      }
      images[counter].style.animation = "next2 0.5s ease-out forwards";
    }, 3000);
    nextBtn.addEventListener("click", function nextSlide() {
      images[counter].style.animation = "next1 0.5s ease-out";
      if (counter == images.length - 1) {
        counter = 0;
      }
      else {
        counter++;
      }
      images[counter].style.animation = "next2 0.5s ease-out forwards";
    });
    // setTimeout(nextSlide, 3000);
    prevBtn.addEventListener("click", function prevSlide() {
      images[counter].style.animation = "prev1 0.5s ease-out";
      if (counter == 0) {
        counter = images.length - 1;
      }
      else {
        counter--;
      }
      images[counter].style.animation = "prev2 0.5s ease-out forwards";
    });
    
    
  },
  components: { RouterLink }
};
</script>
