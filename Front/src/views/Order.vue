import { RouterLink } from 'vue-router';
<template>
    <body class="bg-[#B0A3C0] ">
     <!-- header -->
     <header class="h-20 w-full bg-[#826B9F] flex justify-center items-center" >
       <div class="w-full flex justify-between items-center ">
        
         <!-- <img class="block mx-1.5 my-1.5 h-20 rounded-full sm:mx-0 sm:shrink-0" src="../assets/image/chocoshop.PNG" alt="Woman's Face" /> -->
         <p class="text-5xl font-bold text-white">Choco</p>
         <ul class="flex items-center gap-6 text-white text-2xl pr-2">
           <li class="cursor-pointer w-full flex justify-center items-center"><a href="">Album</a></li>
           <li  class="cursor-pointer w-full flex justify-center items-center"><a href="">lightstick</a></li>
           <li  class="cursor-pointer w-full flex justify-center items-center"><a href="">Merch</a></li>
           <li class=" relative  px-4 w-full  flex justify-center items-center">
            <!-- <div class="absolute"> -->
            <img alt="..." src="../assets/image/gunwook.jpg" class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px">
           <!-- </div> -->
        </li>
         </ul>
       </div>
     </header>
     <main >
       <!-- forbacktohome -->
       <!-- bg-[#e0e7ff] -->
       <div class="flex gap-6 mx-5 my-5 text-xl  ">
         <RouterLink to="/">
           <p>Home</p>
         </RouterLink>
         <i class="fa-solid fa-forward" style="color: #7f72b1;padding-top:4px ;"></i>
         <RouterLink to="/checkout">
          <p>ZEROBASEONE - The 1st Mini Album</p>
         </RouterLink>
         
         <i class="fa-solid fa-forward" style="color: #7f72b1;padding-top:4px ;"></i>
           <p>Order</p>
       </div>
       <!-- fororderproduct -->


       
       <div class="flex mx-8 my-6 h-auto  ">
         <!-- <div class="w-1/2 h-auto ">
           <div class="w-80 mx-20 my-10">
             <img src="../assets/image/GD00096418.default.1.png" class="w-full bg-cover">
           </div> -->
          <div class="w-3/5 h-auto  ">
              <div class="flex mx-5 justify-between text-2xl">
                <p>Your Cart</p>
              </div>
              <hr class="my-5 mx-5 bg-[#CAC0C0] h-1 border-t-0  " />
              <div class="flex  mx-5 text-2xl justify-between">
                <div class="">
                  <p>Item</p>
                </div>
              
                <p>Price</p>
                <p>Quatity</p>
              </div>
              <hr class="my-5 mx-5 bg-[#CAC0C0] h-1 border-t-0  " />
              <div>
                <div class="flex justify-between">
                  <div class="w-60 mx-5 my-5">
                     <img src="../assets/image/GD00096418.default.1.png" class="w-full bg-cover">
                  </div> 
                  <div class="text-2xl">
                    <p>20$</p>
                  </div>
                  <div>2</div>
                </div>
              </div>
            </div>
          <div class="w-1/2 h-auto ">

          </div>
           
        </div>
        
       <!-- forrelatetoproduct -->
       
    
     
     
     </main>
     <footer>
       <div  class="bg-[#826B9F] w-full h-[50px]">
       <div></div>
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
   