<template>
  <body>
    <Navbar />
    <main>
      <div
        class="w-full bg-primary-color"
        style="
          background-image: url(' ');
          background-position: center center;
          background-blend-mode: multiply;
          background-size: cover;
        "
      >
        <div
          class="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10"
        >
          <h1
            class="text-5xl antialiased font-semibold leadi text-center dark:text-gray-100"
          >
            Get Our Updates
          </h1>
          <p
            class="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100"
          >
            Find out about events and other news
          </p>
          <form
            id="searchForm"
            class="flex w-full justify-center items-center p-6 space-x-6 rounded-xl"
            @submit.prevent="handleSearch"
          >
            <div class="relative text-gray-600 w-96 max-w-3xl">
              <input
                v-model="searchQuery"
                type="search"
                name="search"
                placeholder="Search by name, description or category"
                class="w-full bg-white h-[45px] px-5 pr-10 rounded-full text-sm focus:outline-none"
              />
              <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
                <svg
                  class="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 56.966 56.966"
                  width="512px"
                  height="512px"
                >
                  <path
                    d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786
             c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208
             c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,
             2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z
             M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
             s-17-7.626-17-17S14.61,6,23.984,6z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Title -->
      <div class="pt-32 bg-white">
        <h1 class="text-center font-serif text-3xl text-bold text-main-color">
          Available Product
        </h1>
      </div>

      <!-- Tab Menu -->
      <div
        class="flex flex-wrap items-center text-xl overflow-x-auto overflow-y-hidden py-10 justify-center bg-white text-gray-800"
      >
        <a
          rel="noopener noreferrer"
          href="#"
          class="flex items-center flex-shrink-0 px-5 py-3 space-x-2text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Mug</span>
        </a>
        <a
          rel="noopener noreferrer"
          href="#"
          class="flex items-center flex-shrink-0 text-xl px-5 py-3 space-x-2 rounded-t-lg text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Glass&Mug Mat</span>
        </a>
        <a
          rel="noopener noreferrer"
          href="#"
          class="flex items-center flex-shrink-0 px-5 py-3 text-xl space-x-2 text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4 h-4"
          >
            <polygon
              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            ></polygon>
          </svg>
          <span>Glass</span>
        </a>
        <a
          rel="noopener noreferrer"
          href="#"
          class="flex items-center flex-shrink-0 px-5 py-3 space-x-2 text-xl text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="w-4 h-4"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polygon
              points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
            ></polygon>
          </svg>
          <span>Other</span>
        </a>
      </div>
      <section class="py-10 bg-gray-100 my-6">
        <div
          class="mx-auto grid max-w-8xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <ProductCard
            v-for="product in products"
            :key="product._id"
            :id="product._id"
            :image="product.images?.[0]"
            :title="product.name"
            :location="product.variants.join(', ')"
            :price="product.price ? '$' + product.price.toFixed(2) : 'N/A'"
          />
        </div>
      </section>

      <!-- Product List -->
      <!-- <section class="py-10 bg-gray-100">
        <div
          class="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <article
            v-for="product in products"
            :key="product._id"
            class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
          >
            <a href="#">
              <div class="relative flex items-end overflow-hidden rounded-xl">
                <img :src="product.imageUrl" alt="Hotel Photo" />
              </div>
              <div class="mt-1 p-2">
                <h2 class="text-slate-700">{{ product.title }}</h2>
                <p class="mt-1 text-sm text-slate-400">{{ product.desc }}</p>

                <div class="mt-3 flex items-end justify-between">
                  <p class="text-lg font-bold text-[#826B9F]">
                    {{ product.price }}$
                  </p>

                  <div
                    class="flex items-center space-x-1.5 rounded-lg bg-[#826B9F] hover:bg-[#B0A3C0] px-4 py-1.5 text-white duration-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                    <RouterLink to="/checkout">
                      <button
                        v-on:click="addProductToCart(product)"
                        class="text-sm"
                      >
                        Order
                      </button>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </a>
          </article>
        </div>
      </section> -->

      <!-- Footer -->
      <Footers />
    </main>
  </body>
</template>

<script>
import { RouterLink } from "vue-router";
import categoryApi from "../libs/apis/category";
import itemApi from "../libs/apis/item";
import productApi from "../libs/apis/product";

import Navbar from "../components/Navbar.vue";
import ProductCard from "../components/ProductCard.vue";
import Footers from "../components/Footers.vue";

// Uncomment this if using Flowbite JS features
// import { initFlowbite } from "flowbite";

export default {
  data() {
    return {
      categories: [],
      items: [],
      products: [],
      allProducts: [], // cache for all products
      searchQuery: "",

      // Optional: Product form state
      title: "",
      imageUrl: "",
      desc: "",
      categoryId: "",
      itemId: "",
      priceModalShown: false,
      selectedProduct: null,
      price: "",
      source: "",
    };
  },
  async mounted() {
    try {
      this.categories = await categoryApi.all();
      this.items = await itemApi.all();

      // Fetch all products and save to both products and allProducts
      const all = await productApi.all();
      this.products = all;
      this.allProducts = all;

      // Uncomment if using Flowbite tooltips/modal etc.
      // initFlowbite();
    } catch (error) {
      console.error("Error during initial fetch:", error);
    }
  },
  watch: {
    searchQuery(newQuery) {
      if (!newQuery.trim()) {
        this.products = this.allProducts;
      } else {
        const lowerQuery = newQuery.toLowerCase();
        this.products = this.allProducts.filter((product) =>
          product.name.toLowerCase().includes(lowerQuery)
        );
      }
    },
  },
  methods: {
    async onClick(categoryId, itemId) {
      try {
        this.products = await productApi.all(categoryId, itemId);
      } catch (error) {
        console.error("Error fetching filtered products:", error);
      }
    },
  },
  components: { RouterLink, Navbar, ProductCard, Footers },
};
</script>
