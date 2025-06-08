import { RouterLink } from 'vue-router';
<template>
  <body class="bg-gray-100">
    <!-- header -->
    <Navbar />

    <main>
      <ProductDetail />
      <!-- forrelatetoproduct -->
      <div>
        <hr class="my-5 mx-8 h-1 border-t-0 bg-[#CAC0C0]" />
      </div>
      <div class="mx-8 text-2xl text-main-color font-medium">
        <div>Relate Product</div>
        <div class="flex justify-center flex-wrap">
          <div class="w-48 h-auto mx-9 my-10">
            <img src="/image/IMG_3355.JPG" class="w-full bg-cover rounded-xl" />
          </div>
          <div class="w-48 h-auto mx-9 my-10">
            <img src="/image/IMG_3374.JPG" class="w-full bg-cover rounded-xl" />
          </div>
          <div class="w-48 h-auto mx-9 my-10">
            <img src="/image/IMG_3379.JPG" class="w-full bg-cover rounded-xl" />
          </div>
          <div class="w-48 h-auto mx-9 my-10">
            <img src="/image/img_3382.jpg" class="w-full bg-cover rounded-xl" />
          </div>
        </div>
      </div>
    </main>
    <Footers />
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
:root {
  --font-header: 36px;
  --font-regular: 16px;
  --font-semi-regular: 20px;
  --font-semi-header: 26px;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  list-style: none;
  /* background-color: #B0A3C0; */
  text-decoration: none;
  font-family: "Nunito", sans-serif;
  font-family: "Poor Story", cursive;
}
</style>
<script>
import { RouterLink, RouterView } from "vue-router";
import productApi from "../libs/apis/product";
import Navbar from "../components/Navbar.vue";
import Footers from "../components/Footers.vue";
import ProductDetail from "../components/ProductDetail.vue";
export default {
  components: { Navbar, Footers, ProductDetail },
  data() {
    return {
      products: [],
    };
  },
  methods: {},
  async mounted() {
    this.products = await productApi.all();
  },
  mounted() {
    initFlowbite();
  },
};
</script>
