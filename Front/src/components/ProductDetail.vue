<template>
  <div class="bg-gray-100">
    <div class="mx-8 my-5 px-4 py-8">
      <div class="flex flex-wrap -mx-4">
        <!-- Product Images -->
        <div class="w-full md:w-1/2 px-4 mb-8">
          <img
            :src="mainImage"
            alt="Product"
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
          <h2 class="text-3xl font-serif font-bold mb-2">Choco Day</h2>
          <p class="text-gray-600 mb-4">SKU: WH1000XM4</p>
          <div class="mb-4">
            <span class="text-2xl font-bold mr-2">$3.50</span>
            <span class="text-gray-500 line-through">$4.00</span>
          </div>

          <!-- Rating -->
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
            <span class="ml-2 text-gray-600">4.5</span>
          </div>

          <p class="text-gray-700 mb-6">
            every day is a good day with these cute cups 🍞
          </p>

          <!-- Color Options -->
          <div class="mb-6">
            <!-- <h3 class="text-lg font-semibold mb-2">Color:</h3>
            <div class="flex space-x-2">
              <button
                class="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              ></button>
              <button
                class="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
              ></button>
              <button
                class="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              ></button>
            </div> -->
            <!-- <div class="mb-6">
              <label
                for="quantity"
                class="block text-sm font-medium text-gray-700 mb-1"
                >Quantity:</label
              >
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value="1"
                class="w-12 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div> -->
            <!-- <div class="flex space-x-4 mb-6">
              <button
                class="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                Add to Cart
              </button>
              <button
                class="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
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
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                Wishlist
              </button>
            </div> -->

            <div>
              <h3 class="text-lg font-semibold mb-2">✨ Features:</h3>
              <ul class="list-disc list-inside text-gray-700 mb-6">
                <li>🏖 surf day — chill & breezy</li>
                <li>🛒 shopping day — grocery mood</li>
                <li>🌴 summer day — vacation dreams</li>
                <li>☕️ leisure day — slow mornings, soft vibes</li>
              </ul>
            </div>
            <a
              href="https://www.instagram.com/direct/t/cutemugsbychoco/"
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
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  data() {
    return {
      mainImage: "/image/IMG_3343.JPG",
      thumbnails: [
        "/image/IMG_3344.JPG",
        "/image/IMG_3345.JPG",
        "/image/IMG_3346.JPG",
        "/image/IMG_3347.JPG",
      ],
    };
  },
  methods: {
    changeImage(src) {
      this.mainImage = src;
    },
  },
};
</script>
