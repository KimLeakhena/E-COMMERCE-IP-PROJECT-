

import { RouterLink } from 'vue-router';

<template>
  <body class=" bg-[#B0A3C0]">
    <!-- header -->
    <header class="h-20 w-full bg-[#826B9F] flex justify-center items-center" >
      <div class="w-full flex justify-between items-center ">
       
        <!-- <img class="block mx-1.5 my-1.5 h-20 rounded-full sm:mx-0 sm:shrink-0" src="../assets/image/chocoshop.PNG" alt="Woman's Face" /> -->
        <p class="text-5xl font-bold text-white">Choco</p>
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
          
          <RouterLink :to="{name:'auth/signup'}">
            <li  class="cursor-pointer w-full flex justify-center items-center"><a href="">Signup </a></li>
          </RouterLink>
          
          <RouterLink :to="{name:'auth/login'}">
            <li  class="  cursor-pointer w-full flex justify-center items-center"><a href="">Login</a></li>
          </RouterLink>
          
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
     <!-- newrelease -->
     
      <div class=" my-4 mx-auto w-5/6  jutify-center h-[70px] bg-[#826B9F]  p-4 rounded-2xl ">
      <h1 class="text-center font-serif  text-2xl text-white">New Release</h1>
    </div>
    
    
    <!-- pic -->
    <div class="flex flex-wrap p-6 justify-center">
      <div class="w-[250px] h-auto text-white"  >
        <div class="  w-[200px] h-[220px] object-cover flex bg-[#D9D9D9] rounded-md mx-auto ">
          <!-- <img src="../assets/image/GD00096418.default.1.png" alt=""> -->
          <RouterLink to="/checkout">
          <img src="../assets/image/GD00096418.default.1.png" class="h-full" >
          </RouterLink>
        </div>
        <p>ZEROBASEONE - The 1st Mini Album
           [YOUTH IN THE SHADE] (YOUTH Ver. + SHADE Ver.)</p>
      </div>
      
      <div class="w-[250px] h-auto text-white ">
        <div class=" w-[200px] h-[220px] object-cover flex bg-[#D9D9D9] rounded-md mx-auto ">
          <img src="../assets/image/GD00095854.default.1.jpg"  alt="">
        </div>
        <p>THE BOYZ - 2nd MINI ALBUM [THE START] (Platform Ver.) (Random Ver.)</p>
      </div>
      
      <div class="w-[250px] h-auto text-white " >
        <div class="  w-[200px] h-[220px]  object-cover  flex bg-[#D9D9D9]  rounded-md mx-auto ">
        <img src="../assets/image/GD00081965.default.1.png">
        </div>
        <p><p>KINO - Special Single [POSE] (Platform Ver.)</p></p>
      </div>

      <div class="w-[250px] h-auto text-white">
        <div class="  w-[200px] h-[220px] object-cover flex  bg-[#D9D9D9]   rounded-md mx-auto ">
        <RouterLink to="/checkout">
          <img src="../assets/image/GD00071809.default.1.png" class="h-full" >
        </RouterLink>
        </div>
        <p> PENTAGON - Mini Album Vol.12 [IN:VITE U] (Nouveau Ver. + Flare Ver.)</p>
      </div>
     
      <div class="w-[250px] h-auto text-white">
        <div class=" w-[200px] h-[220px] object-cover flex  bg-[#D9D9D9] rounded-md mx-auto  ">
        <img src="../assets/image/GD00096254.default.1.jpg">
        </div>
        <p>
          NCT DREAM - The 3rd Album [ISTJ] (Photobook Ver.) (Random Ver.)
        </p>
      </div>
      <div class="w-[250px] h-auto text-white">
        <div class=" w-[200px] h-[220px] object-cover flex  bg-[#D9D9D9] rounded-md mx-auto  ">
        <img src="../assets/image/GD00095848.default.1.png">
        </div>
        <p>
          THE BOYZ - 3rd MINI ALBUM [THE ONLY] (Platform Ver.) (Random Ver.)
        </p>
      </div>
      <div class="w-[250px] h-auto  text-white">
        <div class=" w-[200px] h-[220px] object-cover flex  bg-[#D9D9D9] rounded-md mx-auto  ">
        <img src="../assets/image/GD00095377.default.1.png">
        </div>
        <p>
          SHINee - The 8th Album [HARD] (Photo Book Ver.) (Random Ver.)
        </p>
      </div>
      <div class="w-[250px] h-auto text-white">
        <div class=" w-[200px] h-[220px] flex  bg-[#D9D9D9] rounded-md mx-auto  ">
        <img src="../assets/image/GD00096378.default.1.jpg" class="object-cover">
        </div>
        <p>
          REN - The 1st Mini Album [Ren'dezvous] (Photobook) (Random Ver.)
        </p>
      </div>
    </div>
    <!-- <div class="flex flex-wrap">
      <div class="w-full h-[300px] bg-[#ddd6fe] bg-cover" >

      </div>
      <div>

      </div>
    </div> -->
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
  export default{
    mounted() {
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
}
</script>
  