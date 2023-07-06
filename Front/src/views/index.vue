<template>
    <header>
      <div class="wrapper ">
        <nav>
          <RouterLink to="/"></RouterLink>
          <RouterLink to="/about"></RouterLink>
          <RouterLink to="/product"></RouterLink>
          <!-- <button @click="$emit('checkout')">Go to checkout</button> -->
        </nav>
      </div>
    </header>
  
    <RouterView />
  </template>
  <!-- bg-[#826B9F] w-screen h-[60px] p-auto -->'
  
  
script'
  