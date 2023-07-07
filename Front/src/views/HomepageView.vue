

import { RouterLink } from 'vue-router';

<template>
  <body class=" bg-[#B0A3C0]">
    <!-- header -->
    <header class="h-20 w-full bg-[#826B9F] flex justify-center items-center" >
      <div class="w-full flex justify-between items-center ">
       
        <!-- <img class="block mx-1.5 my-1.5 h-20 rounded-full sm:mx-0 sm:shrink-0" src="../assets/image/chocoshop.PNG" alt="Woman's Face" /> -->
        <p class="text-5xl font-bold text-white">Choco</p>
        <ul class="flex items-center gap-6 text-white text-2xl pr-2">
          <li class="cursor-pointer w-full flex justify-center items-center"><a href="">Album</a></li>
          <li  class="cursor-pointer w-full flex justify-center items-center"><a href="">lightstick</a></li>
          <li  class="cursor-pointer w-full flex justify-center items-center"><a href="">Merch</a></li>
          <!-- <li class=" relative  px-4 w-full  flex justify-center items-center">
            
            <img alt="..." src="../assets/image/gunwook.jpg" class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px">
           
        </li>
           -->
          
    <li class="h-30 w-full checker-bg bg-black flex items-center justify-center  p-2 text-blue-500">
      <div class=" my-4 w-20 h-20  bg-gray-100 rounded-full bg-cover  bg-center" style="background-image: url('https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');">
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
          <RouterLink to="/checkout">
            <img src="../assets/image/GD00095854.default.1.jpg"  alt="" class="h-full">
          </RouterLink>
          
        </div>
        <p>THE BOYZ - 2nd MINI ALBUM [THE START] (Platform Ver.) (Random Ver.)</p>
      </div>
      
      <div class="w-[250px] h-auto text-white " >
        <div class="  w-[200px] h-[220px]  object-cover  flex bg-[#D9D9D9]  rounded-md mx-auto ">
          <RouterLink to="/checkout">
            <img src="../assets/image/GD00081965.default.1.png" alt="" class="h-full">
          </RouterLink>
       
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
          <RouterLink to="/checkout">
            <img src="../assets/image/GD00096254.default.1.jpg" alt="" class="h-full">
          </RouterLink>
       
        </div>
        <p>
          NCT DREAM - The 3rd Album [ISTJ] (Photobook Ver.) (Random Ver.)
        </p>
      </div>
      <div class="w-[250px] h-auto text-white">
        <div class=" w-[200px] h-[220px] object-cover flex  bg-[#D9D9D9] rounded-md mx-auto  ">
          <RouterLink to="/checkout">
            <img src="../assets/image/GD00095848.default.1.png" alt="" class="h-full">
          </RouterLink>
       
        </div>
        <p>
          THE BOYZ - 3rd MINI ALBUM [THE ONLY] (Platform Ver.) (Random Ver.)
        </p>
      </div>
      <div class="w-[250px] h-auto  text-white">
        <div class=" w-[200px] h-[220px] object-cover flex  bg-[#D9D9D9] rounded-md mx-auto  ">
          <RouterLink to="/checkout">
            <img src="../assets/image/GD00095377.default.1.png" alt="" class="h-full">
          </RouterLink>
       
        </div>
        <p>
          SHINee - The 8th Album [HARD] (Photo Book Ver.) (Random Ver.)
        </p>
      </div>
      <div class="w-[250px] h-auto text-white">
        <div class=" w-[200px] h-[220px] flex  bg-[#D9D9D9] rounded-md mx-auto  ">
          <RouterLink to="/checkout">
            <img src="../assets/image/GD00096378.default.1.jpg" class="object-cover">
          </RouterLink>
       
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
    <footer>
      <div  class="bg-[#826B9F] w-full h-[50px]">
      <div></div>
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
  