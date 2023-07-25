import { RouterLink } from 'vue-router';

<template>
	<header class="h-20 w-full bg-[#826B9F] flex justify-center items-center" >
      <div class="w-full flex justify-between items-center ">
        <div class="h-20 w-20 relative">
          <!-- <img src="../assets/image/kpop.png"> -->
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
          <li class="h-30 w-full checker-bg flex items-center justify-center  p-2 text-blue-500">
            <div  type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start"  class=" my-4 w-14 h-14  cursor-pointer bg-gray-100 rounded-full bg-cover  bg-center">
              <img id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" class="cursor-pointer"  src="../assets/image/userpf.png
			  ">
              
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
                <div class="py-1">
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Log out</a>
                </div>
              </div>
            </div>
          </li>
          
        </ul>
      </div>
      
    </header>
  
    <!-- cart -->
	<div class="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
		<h2 class="text-xl font-semibold">Your cart</h2>
		<ul class="flex flex-col divide-y divide-gray-700">
			<li class="flex flex-col py-6 sm:flex-row sm:justify-between">
				<div class="flex w-full space-x-2 sm:space-x-4">
					<img class="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="../assets/image/GD00053828.default.2.jpg" alt="Polaroid camera">
					<div class="flex flex-col justify-between w-full pb-4">
						<div class="flex justify-between w-full pb-2 space-x-2">
							<div class="space-y-1">
								<h3 class="text-lg font-semibold leadi sm:pr-8">Polaroid camera</h3>
								<p class="text-sm dark:text-gray-400">Classic</p>
							</div>
							<div class="text-right">
								<p class="text-lg font-semibold">59.99$</p>
								<p class="text-sm line-through dark:text-gray-600">75.50$</p>
							</div>
						</div>
						<div class="flex text-sm divide-x">
							<button type="button" class="flex items-center px-2 py-1 pl-0 space-x-1">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current">
									<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
									<rect width="32" height="200" x="168" y="216"></rect>
									<rect width="32" height="200" x="240" y="216"></rect>
									<rect width="32" height="200" x="312" y="216"></rect>
									<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
								</svg>
								<span>Remove</span>
							</button>
							<button type="button" class="flex items-center px-2 py-1 space-x-1">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current">
									<path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
								</svg>
								<span>Add to favorites</span>
							</button>
						</div>
					</div>
				</div>
			</li>
			<li class="flex flex-col py-6 sm:flex-row sm:justify-between">
				<div class="flex w-full space-x-2 sm:space-x-4">
					<img class="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="../assets/image/GD00096445.default.1.png" alt="Replica headphones">
					<div class="flex flex-col justify-between w-full pb-4">
						<div class="flex justify-between w-full pb-2 space-x-2">
							<div class="space-y-1">
								<h3 class="text-lg font-semibold leadi sm:pr-8">Replica headphones</h3>
								<p class="text-sm dark:text-gray-400">White</p>
							</div>
							<div class="text-right">
								<p class="text-lg font-semibold">99.95$</p>
								<p class="text-sm line-through dark:text-gray-600">150$</p>
							</div>
						</div>
						<div class="flex text-sm divide-x">
							<button type="button" class="flex items-center px-2 py-1 pl-0 space-x-1">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current">
									<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
									<rect width="32" height="200" x="168" y="216"></rect>
									<rect width="32" height="200" x="240" y="216"></rect>
									<rect width="32" height="200" x="312" y="216"></rect>
									<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
								</svg>
								<span>Remove</span>
							</button>
							<button type="button" class="flex items-center px-2 py-1 space-x-1">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current">
									<path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
								</svg>
								<span>Add to favorites</span>
							</button>
						</div>
					</div>
				</div>
			</li>
			<li class="flex flex-col py-6 sm:flex-row sm:justify-between">
				<div class="flex w-full space-x-2 sm:space-x-4">
					<img class="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="../assets/image/GD00071809.default.1.png" alt="Set of travel chargers">
					<div class="flex flex-col justify-between w-full pb-4">
						<div class="flex justify-between w-full pb-2 space-x-2">
							<div class="space-y-1">
								<h3 class="text-lg font-semibold leadi sm:pr-8">Set of travel chargers</h3>
								<p class="text-sm dark:text-gray-400">Black</p>
							</div>
							<div class="text-right">
								<p class="text-lg font-semibold">8.99$</p>
								<p class="text-sm line-through dark:text-gray-600">15.99$</p>
							</div>
						</div>
						<div  class="flex text-sm divide-x" id="
						2">
							<button type="button" class="flex items-center px-2 py-1 pl-0 space-x-1">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current">
									<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
									<rect width="32" height="200" x="168" y="216"></rect>
									<rect width="32" height="200" x="240" y="216"></rect>
									<rect width="32" height="200" x="312" y="216"></rect>
									<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
								</svg>
								<span >Remove</span>
							</button>
							<button type="button" class="flex items-center px-2 py-1 space-x-1">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current">
									<path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
								</svg>
								<span>Add to favorites</span>
							</button>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<div class="space-y-1 text-right">
			<p>Total amount:
				<span class="font-semibold">357 €</span>
			</p>
			<p class="text-sm dark:text-gray-400">Not including taxes and shipping costs</p>
		</div>
		<div class="flex justify-end space-x-4">
			<button  type="button" class="px-6 py-2 border rounded-md border-violet-400">Back
				<span class="sr-only sm:not-sr-only">to shop</span>
			</button>
			<button type="button" class="px-6 py-2 border rounded-md bg-violet-400 dark:text-gray-900 border-violet-400">
				<span class="sr-only sm:not-sr-only">Continue to</span>Checkout
			</button>
		</div>
	</div>
  
    
  </template>
  
  <style>
  /* @media (min-width: 1024px) {
    .product {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  } */
  </style>
  <script>
	import { RouterLink, RouterView } from "vue-router";
	export default{
		mounted(){
			initFlowbite();

			const element = document.getElementById("2");
                  element.remove();
		}
		
	}
	</script>
  