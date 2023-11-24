<template>
  <div class="flex flex-col w-full px-12 py-4 space-y-6">
    <div class="flex justify-center py-4 lg:py-10">
      <span class="text-3xl lg:text-5xl text-lime-600 font-extrabold"
        >Lime Supermarket</span
      >
    </div>

    <div class="lg:px-12 px-0">
      <Categories @chosen="updateProductList"></Categories>
    </div>

    <div class="flex flex-col my-12 items-center pb-4">
      <h6 class="text-2xl font-bold text-slate-700">
        {{ chosenCategory.display }}
      </h6>
    </div>
    <div
      class="grid grid-cols-2 lg:grid-cols-5 grid-rows-auto px-0 lg:px-12 gap-10 items-center"
    >
      <Product v-for="product in products.products" :product="product">
      </Product>
    </div>
    <div
      v-if="chosenCategory"
      class="flex justify-center items-center space-x-4"
    >
      <span>Page</span>
      <select
        v-model="currentPage"
        class="focus:border-lime-600 border-2 rounded-lg p-2"
      >
        <option v-for="page in products.totalPages" :value="page">
          {{ page }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup>
  import Categories from "../../components/Categories.vue";
  import { ref, watch } from "vue";
  import axios from "axios";
  import Product from "../../components/Product.vue";
  import MarketLogo from "../../assets/market logo.png";

  const products = ref([]);
  const chosenCategory = ref("");
  const currentPage = ref(1);

  watch(currentPage, async (val) => {
    await getData();
  });

  const getData = async () => {
    const response = await axios.get(
      `/api/product?category=${chosenCategory.value.key}&page=${currentPage.value}`
    );
    products.value = response.data;
  };

  const updateProductList = async (category) => {
    chosenCategory.value = category;
    currentPage.value = 1;
    await getData();
  };
</script>
