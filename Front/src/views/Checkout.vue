import { RouterLink } from 'vue-router';
<template>
  <body class="bg-gray-100">
    <!-- header -->
    <Navbar />

    <main>
      <ProductDetail
        v-if="product"
        :id="product._id"
        :title="product.name"
        :sku="product.sku"
        :price="'$' + product.price ? '$' + product.price.toFixed(2) : 'N/A'"
        :originalPrice="'$' + product.originalPrice.toFixed(2) || '-'"
        :shortDesc="product.description"
        :longDesc="product.description"
        :displayImage="`https://chocobebe.xyz${product.images?.[0]}`"
        :thumbnails="
          product.images
            ? product.images.map((img) => `https://chocobebe.xyz${img}`)
            : []
        "
        :features="product.features"
      />
      <!-- forrelatetoproduct -->
      <div>
        <hr class="my-5 mx-8 h-1 border-t-0 bg-[#CAC0C0]" />
      </div>
      <div class="mx-8 text-2xl text-main-color font-medium">
        <div>Relate Product</div>
        <div class="flex justify-center flex-wrap">
          <ImageCard image="/image/IMG_3362.JPG" />
          <ImageCard image="/image/IMG_3348.JPG" />
          <ImageCard image="/image/IMG_3351.JPG" />
          <ImageCard image="/image/IMG_3358.JPG" />
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
import { useRoute } from "vue-router";
import productApi from "../libs/apis/product";
import Navbar from "../components/Navbar.vue";
import Footers from "../components/Footers.vue";
import ProductDetail from "../components/ProductDetail.vue";
import ImageCard from "../components/ImageCard.vue";
import { initFlowbite } from "flowbite"; // If you're using Flowbite

export default {
  components: { Navbar, Footers, ProductDetail, ImageCard },
  data() {
    return {
      product: null,
    };
  },
  async mounted() {
    initFlowbite(); // Optional

    const productId = this.$route.params.id;
    try {
      const response = await productApi.getById(productId);
      console.log("API response:", response.data);
      this.product = response.data; // Adjust this based on actual structure
    } catch (err) {
      console.error("Failed to fetch product:", err);
    }
  },
};
</script>
