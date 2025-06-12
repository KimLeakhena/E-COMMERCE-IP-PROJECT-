<template>
  <div class="bg-gray-100">
    <div class="mx-8 my-5 px-4 py-8">
      <div class="flex flex-wrap -mx-4">
        <!-- Product Images -->
        <!-- Product Images -->
        <div class="w-full md:w-1/2 px-4 mb-8">
          <img
            :src="displayImage"
            :alt="alt"
            class="w-full h-auto rounded-lg shadow-md mb-4"
          />

          <div class="flex gap-4 py-4 justify-center overflow-x-auto">
            <img
              v-for="(thumb, index) in thumbnails"
              :key="index"
              :src="thumb"
              :alt="'Thumbnail ' + (index + 1)"
              class="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
              @click="changeImage(thumb)"
            />
          </div>
        </div>

        <!-- Product Details -->
        <div class="w-full md:w-1/2 px-12 text-main-color mx-auto p-4">
          <h2 class="text-3xl font-serif font-bold mb-2">{{ title }}</h2>
          <p class="text-gray-600 mb-4">SKU: {{ sku }}</p>
          <div class="mb-4">
            <span class="text-2xl font-bold mr-2">{{ price }}</span>
            <span class="text-gray-500 line-through" v-if="originalPrice">{{
              originalPrice
            }}</span>
          </div>

          <div class="flex items-center mb-4">
            <svg
              v-for="i in 5"
              :key="i"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4 text-yellow-500"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 
                5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 
                3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 
                1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 
                2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="ml-2 text-gray-600">{{ rating }}</span>
          </div>

          <p class="text-gray-700 mb-6">
            {{ shortDesc }}
          </p>
          <div class="mb-6">
            <h3 class="text-lg font-semibold mb-2">Variants:</h3>
            <ul class="list-disc list-inside text-gray-700 mb-6">
              <li v-for="(variant, idx) in variants" :key="idx">
                {{ variant }}
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">✨ Features:</h3>
            <ul class="list-disc list-inside text-gray-700 mb-6">
              <li v-for="(feature, idx) in features" :key="idx">
                {{ feature }}
              </li>
            </ul>
          </div>

          <a
            :href="orderLink"
            target="_blank"
            rel="noopener noreferrer"
            class="flex gap-2 items-center justify-center text-white px-6 py-2 rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#334eac] focus:ring-offset-2"
            style="background-color: #334eac"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6.75a3 3 0 013-3h13.5a3 3 0 013 3z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75l8.25 6.375L20.25 6.75"
              />
            </svg>
            DM to Order
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  props: {
    title: String,
    sku: String,
    price: String,
    originalPrice: Number,
    rating: {
      type: [Number, String],
      default: "4.5",
    },
    shortDesc: String,
    longDesc: String,
    mainImage: String,
    thumbnails: Array,
    variants: {
      type: String,
    },
    alt: {
      type: String,
      default: "Product Image",
    },
    orderLink: {
      type: String,
      default: "https://www.instagram.com/direct/t/cutemugsbychoco/",
    },
    features: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      currentImage:
        this.mainImage || (this.thumbnails.length ? this.thumbnails[0] : ""),
    };
  },

  computed: {
    displayImage() {
      return (
        this.currentImage ||
        this.mainImage ||
        "https://via.placeholder.com/400x300?text=No+Image"
      );
    },
    parsedFeatures() {
      return Array.isArray(this.features)
        ? this.features
        : this.features.split(",").map((f) => f.trim());
    },
  },

  methods: {
    changeImage(src) {
      this.currentImage = src;
    },
  },
};
</script>
