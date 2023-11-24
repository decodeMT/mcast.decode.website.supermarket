<template>
  <div class="flex flex-col w-full px-12 py-4 space-y-6">
    <div class="flex justify-center py-4 lg:py-10">
      <span class="text-3xl lg:text-5xl text-lime-600 font-extrabold"
        >Lime Supermarket</span
      >
    </div>

    <div class="lg:px-12 px-0">
      <CategoriesServer @chosen="updateProductList"></CategoriesServer>
    </div>

    <div class="flex flex-col items-center pb-4">
      <h6 class="text-2xl font-bold text-slate-700">
        {{ chosenCategory.display }}
      </h6>
    </div>

    <div
      class="grid grid-cols-2 lg:grid-cols-5 grid-rows-auto px-0 lg:px-12 gap-10 items-center"
    >
      <Product v-for="product in products" :product="product"> </Product>
    </div>

    <div class="flex justify-center items-center" v-if="isLoadingMore">
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script setup>
  import { ref, watch } from "vue";
  import Product from "../../components/Product.vue";
  import { getProducts } from "../../store/store";
  import CategoriesServer from "../../components/CategoriesServer.vue";
  import Spinner from "../../components/Spinner.vue";

  const products = ref([]);
  const chosenCategory = ref("");
  const currentPage = ref(1);
  const isLoadingMore = ref(false);
  const endOfPage = ref(false);

  watch(currentPage, async (val) => {
    await getData();
  });

  const getData = async () => {
    const response = getProducts(chosenCategory.value.key, currentPage.value);
    if (response.products.length === 0) {
      endOfPage.value = true;
    } else products.value.push(...response.products);
  };

  const updateProductList = async (category) => {
    chosenCategory.value = category;
    currentPage.value = 1;
    await getData();
  };

  window.onscroll = () => {
    // if (endOfPage.value === true) return;

    let scrollPosition =
      document.documentElement.scrollTop + window.innerHeight;
    let offsetHeight = document.documentElement.offsetHeight;

    // Check if the scroll position is within 10 pixels of the page bottom
    if (scrollPosition >= offsetHeight - 5 && !isLoadingMore.value) {
      isLoadingMore.value = true;
      setTimeout(() => {
        currentPage.value++;
        isLoadingMore.value = false;
      }, Math.random(3) * 4000);
    }
  };
</script>
