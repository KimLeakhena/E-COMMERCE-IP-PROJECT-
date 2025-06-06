import { RouterLink } from 'vue-router';

<template>
  <body class="bg-gray-100">
    <Navbar />
    <main>
      <div
        class="flex flex-col items-center justify-around lg:flex-row bg-soft-bg h-300 p-12"
      >
        <div class="ml-4">
          <h1 class="text-4xl font-serif text-main-color font-bold mb-4">
            ✨ Welcome to Choco Bebe! ✨
          </h1>
          <p class="text-lg text-gray-700 mb-6">
            cute. aesthetic. cozy designs.
          </p>
          <button
            class="bg-main-color text-white font-semibold py-2 px-4 rounded-md hover:bg-primary-color"
          >
            Shop All
          </button>
        </div>

        <div class="flex">
          <img
            src="../assets/image/image.png"
            alt="Cherry Vanilla"
            class="h-80 object-cover w-full h-100 mr-12"
          />
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row justify-center items-center bg-gray-100 p-6"
      >
        <div class="relative flex-1 m-2">
          <img
            src="https://i.pinimg.com/736x/af/f8/af/aff8af8e5d2fb89c57d3d8bf7f5163ad.jpg"
            alt="Summer Collection"
            class="w-full h-54 object-cover rounded-lg"
          />
          <div
            class="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 rounded-lg"
          >
            <h2 class="text-xl font-semibold text-white">Colorful Mat</h2>
            <p class="text-gray-200">Starting at $2.00</p>
            <!-- <button
              class="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Shop Now
            </button> -->
          </div>
        </div>

        <div class="relative flex-1 m-2">
          <img
            src="../assets/image/glass_bow.jpg"
            alt="What's New"
            class="w-full h-54 object-cover rounded-lg"
          />
          <div
            class="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 rounded-lg"
          >
            <h2 class="text-xl font-semibold text-white">Aesthetic Glass</h2>
            <p class="text-gray-200">Get the glow</p>
            <!-- <button
              class="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Discover New
            </button> -->
          </div>
        </div>

        <div class="relative flex-1 m-2">
          <img
            src="../assets/image/grid_color.jpg"
            alt="Buy 1 Get 1"
            class="w-full h-54 object-cover rounded-lg"
          />
          <div
            class="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 rounded-lg"
          >
            <h2 class="text-xl font-semibold text-white">Ceramic Mug</h2>
            <p class="text-gray-200">Starting at $3.00</p>
            <!-- <button
              class="mt-2 bg-main-color text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Shop Now
            </button> -->
          </div>
        </div>
      </div>
      <div class="my-6 mx-auto w-5/6 jutify-center h-[70px] p-4 rounded-2xl">
        <h1 class="text-center font-serif text-4xl text-bold text-main-color">
          Our Featured Product
        </h1>
        <p class="text-center mt-1 text-xl text-slate-500">
          your daily dose of cute mugs & cozy finds
        </p>
      </div>
      <section class="py-10 bg-gray-100 my-6">
        <div
          class="mx-auto grid max-w-8xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <ProductCard
            image="/image/IMG_3343.JPG"
            title="Choco Day"
            location="Lisbon, Portugal"
            price="$5.00"
          />
          <ProductCard
            image="/image/IMG_3348.JPG"
            title="Charming Glass"
            location="refreshing, sweeet"
            price="$4.00"
          />
          <ProductCard
            image="/image/IMG_3351.JPG"
            title="Glass Mat"
            location="soft , stylist"
            price="$2.00"
          />
          <ProductCard
            image="/image/IMG_3358.JPG"
            title="Choco Mug"
            location="Adorable designs ,cute"
            price="$5.00"
          />
          <ProductCard
            image="/image/IMG_3355.JPG"
            title="Wooden Cat Glass Mat"
            location="cute paw, cozy charm"
            price="$4.00"
          />

          <!-- <article
            class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
          >
            <a href="#">
              <div class="relative flex items-end overflow-hidden rounded-xl">
                <img
                  src="../assets/image/GD00095854.default.1.jpg"
                  alt="Hotel Photo"
                />
                <div
                  class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <span class="ml-1 text-sm text-slate-400">4.9</span>
                </div>
              </div>

              <div class="mt-1 p-2">
                <h2 class="text-slate-700">The Hilton Hotel</h2>
                <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                <div class="mt-3 flex items-end justify-between">
                  <p class="text-lg font-bold text-[#826B9F]">$850</p>

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
                      <button class="text-sm">Order</button>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </a>
          </article> -->
        </div>
      </section>

      <div class="p-6 py-12 bg-primary-color my-6">
        <div class="container mx-auto">
          <div class="flex flex-col lg:flex-row items-center justify-between">
            <h2 class="text-center text-main-color text-6xl tracki font-bold">
              Up to <br class="sm:hidden" />10% Off
            </h2>
            <div class="space-x-2 text-center py-2 lg:py-0">
              <span> Use code:</span>
              <span class="font-bold text-main-color text-lg">TREASURE</span>
            </div>
            <a
              href="#"
              rel="noreferrer noopener"
              class="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-main-color hover:bg-primary-color text-white dark:border-gray-400"
              >Shop Now</a
            >
          </div>
        </div>
      </div>
      <Slider :slides="slideData">
        <template #default="{ slide }">
          <div
            class="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row"
          >
            <img
              :src="slide.image"
              alt=""
              class="h-80 dark:bg-gray-500 object-cover w-100 h-100"
            />
            <div
              class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900 ml-24"
            >
              <span class="text-xs uppercase dark:text-gray-400">{{
                slide.tag
              }}</span>
              <h3 class="text-3xl font-serif text-main-color font-bold">
                {{ slide.title }}
              </h3>
              <p class="my-6 dark:text-gray-400 text-slate-500">
                {{ slide.description }}
              </p>
              <button
                type="button"
                class="self-start bg-main-color hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300"
              >
                Order Now
              </button>
            </div>
          </div>
        </template>
      </Slider>
      <div class="bg-gray-100 p-6">
        <h2
          class="text-2xl font-bold mb-4 text-center font-serif text-main-color"
        >
          Best Sellers
        </h2>
        <div class="overflow-hidden relative">
          <div
            class="flex transition-transform duration-700 ease-out"
            :style="{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            }"
            @transitionend="handleTransitionEnd"
          >
            <div
              class="flex-none w-1/4 p-4"
              v-for="(item, index) in loopedItems"
              :key="index"
            >
              <img
                :src="item.image"
                :alt="item.title"
                class="w-full rounded-xl h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footers />
  </body>
</template>

<style>
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
  height: 500px;
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
import Navbar from "@/components/Navbar.vue";
import HeadphoneWidget from "@/components/poster.vue";
import Slider from "@/components/Slider.vue";
import ProductCard from "../components/ProductCard.vue";
import Footers from "../components/Footers.vue";

export default {
  data() {
    return {
      currentIndex: 0,

      autoSlideInterval: null,

      items: [
        { title: "Best Seller 1", image: "/image/IMG_3355.JPG" },
        { title: "Best Seller 2", image: "/image/IMG_3374.JPG" },
        { title: "Best Seller 3", image: "/image/IMG_3379.JPG" },
        { title: "Best Seller 4", image: "/image/img_3382.jpg" },
        { title: "Best Seller 5", image: "/image/img_3382.jpg" },
      ],
      slideData: [
        {
          image: "/image/img_3339.jpg",
          tag: "New",
          title: "Available now. Don't miss out!",
          description:
            "cute mugs for slow mornings, warm drinks, and soft hearts ☕🍯",
        },
        {
          image: "https://pbs.twimg.com/media/EWVS1vpU8AE8LAg.jpg",
          tag: "Hot",
          title: "Limited edition product",
          description: "Available now. Don't miss out!",
        },
        // Add more slides as needed
      ],
    };
  },
  computed: {
    loopedItems() {
      return this.items.length > 0
        ? [...this.items, ...this.items.slice(0, this.visibleItems)]
        : [];
    },
  },

  mounted() {
    setInterval(this.nextSlide, 3000);
  },
  beforeUnmount() {
    clearInterval(this.autoSlideInterval);
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    startAutoSlide() {
      this.intervalId = setInterval(this.nextSlide, this.interval);
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
  },
  components: {
    RouterLink,
    Navbar,
    HeadphoneWidget,
    Slider,
    ProductCard,
    Footers,
  },
};
</script>
