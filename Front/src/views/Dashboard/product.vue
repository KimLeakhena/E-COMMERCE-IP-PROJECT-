<script>
import categoryApi from "../../libs/apis/category";
import productApi from "../../libs/apis/product";
import priceApi from "../../libs/apis/price";

export default {
  data() {
    return {
      imageFiles: [],
      imagePreviews: [],
      categories: [],
      products: [],
      name: "",
      sku: "",
      price: "",
      originalPrice: "",
      fullDesc: "",
      featuresInput: "",
      variants: "",
      categoryId: "",
      priceModalShown: false,
      selectedProduct: null,
      priceInput: "",
      source: "",
      editProduct: null,
      editImageFiles: [],
      editImagePreviews: [],
    };
  },
  methods: {
    generateSKU(name) {
      const prefix = name
        .trim()
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, "")
        .substring(0, 5);
      const random = Math.random().toString(36).substring(2, 7).toUpperCase();
      return `${prefix}-${random}`;
    },
    handleFileChange(event) {
      const files = Array.from(event.target.files);
      this.imageFiles.push(...files);
      files.forEach((file) => {
        this.imagePreviews.push({ file, url: URL.createObjectURL(file) });
      });
    },
    handleEditImageChange(event) {
      const files = Array.from(event.target.files);
      this.editImageFiles.push(...files);
      files.forEach((file) => {
        this.editImagePreviews.push({ file, url: URL.createObjectURL(file) });
      });
    },
    removeImage(index) {
      URL.revokeObjectURL(this.imagePreviews[index].url);
      this.imagePreview.splice(index, 1);
      this.imageFiles.splice(index, 1);
    },
    async onCreateProduct(e) {
      e.preventDefault();
      try {
        const form = new FormData();
        this.imageFiles.forEach((img) => form.append("images", img));
        const uploadRes = await fetch(
          "https://chocobebe.xyz/product/upload/multiple",
          { method: "POST", body: form }
        );
        if (!uploadRes.ok) {
          const text = await uploadRes.text();
          console.error("Upload error:", text);
          alert("Image upload failed");
          return;
        }
        const { imageUrls } = await uploadRes.json();
        const newSKU = this.generateSKU(this.name);
        const featuresArr = this.featuresInput
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean);
        const result = await productApi.create({
          name: this.name,
          sku: newSKU,
          price: parseFloat(this.price),
          originalPrice: parseFloat(this.originalPrice) || undefined,
          description: this.description,
          variants: this.variants,
          features: featuresArr,
          category: this.categoryId,
          images: imageUrls,
        });
        if (result?.error) {
          alert(result.error);
          return;
        }
        this.products = await productApi.all();
        this.name =
          this.sku =
          this.price =
          this.originalPrice =
          this.description =
            "";
        this.featuresInput = this.variants = this.categoryId = "";
        this.imageFiles = [];
        this.imagePreviews = [];
        alert("Product created!");
      } catch (err) {
        console.error(err);
        alert("Something went wrong");
      }
    },
    onSelectProduct(prod) {
      this.priceModalShown = true;
      this.selectedProduct = prod;
    },
    async onAddPrice(e) {
      e.preventDefault();
      const res = await priceApi.add({
        price: parseFloat(this.priceInput),
        source: this.source,
        product: this.selectedProduct._id,
      });
      if (res?.error) {
        alert(res.error);
        return;
      }
      this.products = await productApi.all();
      this.priceModalShown = false;
      this.priceInput = this.source = "";
    },
    openEditForm(prod) {
      this.editProduct = { ...prod };
    },
    async saveEdit() {
      if (!this.editProduct) return;

      try {
        // If new images are selected for edit
        if (this.editImageFiles.length > 0) {
          const form = new FormData();
          this.editImageFiles.forEach((img) => form.append("images", img));
          const uploadRes = await fetch(
            "https://chocobebe.xyz/product/upload/multiple",
            {
              method: "POST",
              body: form,
            }
          );

          if (!uploadRes.ok) {
            const text = await uploadRes.text();
            console.error("Image upload error:", text);
            alert("Image upload failed during edit");
            return;
          }

          const { imageUrls } = await uploadRes.json();
          this.editProduct.images = imageUrls;
        }

        // Save edited product
        const res = await productApi.edit(this.editProduct._id, {
          name: this.editProduct.name,
          sku: this.editProduct.sku,
          price: parseFloat(this.editProduct.price),
          originalPrice: parseFloat(this.editProduct.originalPrice),
          description: this.editProduct.description,
          variants: this.editProduct.variants,
          features: this.editProduct.features,
          images: this.editProduct.images,
          category: this.editProduct.category,
        });

        if (res?.error) {
          alert(res.error);
          return;
        }

        this.editProduct = null;
        this.editImageFiles = [];
        this.editImagePreviews = [];
        this.products = await productApi.all();
        alert("Product updated!");
      } catch (err) {
        console.error("Edit save error:", err);
        alert("Something went wrong while saving");
      }
    },
  },
  async mounted() {
    this.categories = await categoryApi.all();
    this.products = await productApi.all();
    console.log("Loaded products:", this.products);
  },
};
</script>

<template>
  <main class="relative">
    <div class="bg-gray-500 text-white py-2 text-lg text-center">
      <h1>Products</h1>
    </div>
    <div class="py-2">
      <form @submit="onCreateProduct" method="post">
        <div
          class="flex flex-row py-2 px-2 space-x-1 bg-gray-100 flex-wrap gap-2"
        >
          <input
            required
            v-model="name"
            type="text"
            placeholder="Product Name"
          />
          <input
            required
            v-model="price"
            type="number"
            placeholder="Price"
            step="0.01"
          />
          <input
            v-model="originalPrice"
            type="number"
            placeholder="Original Price"
          />
          <!-- <input
            required
            v-model="shortDesc"
            type="text"
            placeholder="Short Description"
          /> -->
          <textarea v-model="description" placeholder="description"></textarea>
          <input
            v-model="featuresInput"
            placeholder="Features (comma separated)"
          />
          <input
            required
            v-model="variants"
            type="text"
            placeholder="Variants (comma separated)"
          />
          <input
            type="file"
            multiple
            accept="image/*"
            @change="handleFileChange"
            class="p-1 rounded border border-gray-300"
          />

          <div class="flex flex-wrap gap-2 my-2">
            <div
              v-for="(preview, index) in imagePreviews"
              :key="index"
              class="relative w-24 h-24 border rounded overflow-hidden"
            >
              <img
                :src="preview.url"
                class="w-full h-full object-cover"
                alt="Preview"
              />
              <button
                @click.prevent="removeImage(index)"
                class="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center"
                title="Remove"
              >
                ❌
              </button>
            </div>
          </div>

          <select
            required
            v-model="categoryId"
            class="px-2 mx-2 rounded-sm bg-green-100"
          >
            <option
              v-for="category in categories"
              :key="category._id"
              :value="category._id"
            >
              {{ category.name }}
            </option>
          </select>

          <button
            type="submit"
            class="bg-blue-500 text-white p-1 px-2 rounded-md"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
    <div>
      <table id="customers">
        <tr class="bg-gray-200">
          <th>Name</th>
          <th>SKU</th>
          <th>Price</th>
          <th>Orig Price</th>
          <th>Description</th>
          <th>Features</th>
          <th>Category</th>
          <th>variants</th>

          <th>Images</th>
          <th>Actions</th>
        </tr>

        <tr v-for="product in products" :key="product._id">
          <td>{{ product.name }}</td>
          <td>{{ product.sku }}</td>
          <td>{{ product.price ? product.price.toFixed(2) + "$" : "N/A" }}</td>
          <td>{{ product.originalPrice?.toFixed(2) || "–" }}</td>
          <!-- <td>
            <ul>
              <li v-for="price in product.prices || []" :key="price._id">
                {{ price.price }}$ ({{ price.source }})
              </li>
            </ul>
          </td> -->
          <td>{{ product.description }}</td>
          <td>{{ product.features?.join(", ") }}</td>
          <td>
            {{
              categories.find((cat) => cat._id === product.category)?.name ||
              "Unknown category"
            }}
          </td>

          <td>{{ product.variants }}</td>
          <td>
            <img
              :src="
                product.images?.[0]
                  ? 'https://chocobebe.xyz' + product.images[0]
                  : '/default.jpg'
              "
              alt="product image"
              width="80"
            />
          </td>

          <td>
            <div class="flex flex-col space-y-2">
              <!-- Inside your v-for -->
              <button
                @click="openEditForm(product)"
                class="hover:text-green-600 hover:font-bold"
              >
                Edit
              </button>

              <button class="hover:text-green-600 hover:font-bold">
                Delete
              </button>
              <button
                @click="onSelectProduct(product)"
                class="hover:text-green-600 hover:font-bold"
              >
                Add price
              </button>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div
      v-if="editProduct"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white rounded-lg shadow-lg w-96 p-6 space-y-4">
        <h2 class="text-xl font-bold text-center mb-2">Edit Product</h2>
        <input
          v-model="editProduct.name"
          placeholder="Name"
          class="w-full border border-gray-300 rounded px-3 py-2"
        />
        <input
          v-model="editProduct.price"
          type="number"
          placeholder="Price"
          class="w-full border border-gray-300 rounded px-3 py-2"
        />
        <!-- <textarea
          v-model="editProduct.shortDesc"
          placeholder="Short Description"
          class="w-full border border-gray-300 rounded px-3 py-2"
        ></textarea> -->
        <textarea
          v-model="editProduct.description"
          placeholder="description"
          class="w-full border border-gray-300 rounded px-3 py-2"
        ></textarea>
        <textarea
          v-model="editProduct.features"
          placeholder="description"
          class="w-full border border-gray-300 rounded px-3 py-2"
        ></textarea>
        <input
          v-model="editProduct.variants"
          placeholder="Variants (comma separated)"
          class="w-full border border-gray-300 rounded px-3 py-2"
        />
        <input
          type="file"
          multiple
          accept="image/*"
          @change="handleEditImageChange"
          class="w-full p-1 rounded border border-gray-300 mb-2"
        />

        <div class="flex flex-wrap gap-2 my-2">
          <div
            v-for="(preview, index) in editImagePreviews"
            :key="index"
            class="relative w-24 h-24 border rounded overflow-hidden"
          >
            <img
              :src="preview.url"
              class="w-full h-full object-cover"
              alt="Preview"
            />
            <button
              @click.prevent="removeEditImage(index)"
              class="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center"
              title="Remove"
            >
              ❌
            </button>
          </div>
        </div>

        <div class="flex justify-between mt-4">
          <button
            @click="saveEdit"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
          <button
            @click="editProduct = null"
            class="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>

    <div
      v-if="priceModalShown && selectedProduct"
      class="flex justify-center items-center absolute top-0 left-0 bottom-0 right-0"
    >
      <div class="w-72 h-96 bg-white rounded-lg shadow-md">
        <form @submit="onAddPrice" method="post">
          <div class="h-full w-full flex flex-col">
            <div class="flex flex-grow-0 relative p-2 py-3">
              <div class="font-bold text-center w-full">
                {{ selectedProduct?.title }}
              </div>
            </div>
            <div class="w-full flex flex-grow p-2">
              <div class="w-full flex flex-col space-y-3">
                <div class="border">
                  <input
                    required
                    v-model="price"
                    class="w-full h-10 px-1"
                    type="number"
                    placeholder="Price"
                  />
                </div>
                <div class="border">
                  <input
                    required
                    v-model="source"
                    class="w-full h-10 px-1"
                    type="text"
                    placeholder="Source"
                  />
                </div>
              </div>
            </div>
            <div class="flex flex-grow-0 py-1 justify-center space-x-2">
              <button
                v-on:click="priceModalShown = false"
                class="p-2 px-3 text-gray-500 rounded-md cursor-pointer border border-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="bg-blue-500 p-2 px-3 text-white rounded-md cursor-pointer"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}
.input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
