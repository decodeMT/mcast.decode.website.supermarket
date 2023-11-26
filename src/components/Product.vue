<template>
  <div
    class="product flex flex-col max-h-[250px] min-h-[250px] bg-slate-100 rounded-lg hover:shadow-lg overflow-hidden shadow-sm"
  >
    <span class="flex justify-center items-center h-[100px] product_image">
      <img :src="productPlaceholder" class="h-[75px]"
    /></span>
    <span class="flex flex-col flex-1 justify-end">
      <span
        class="product_name text-lg font-semibold p-2 flex flex-1 items-center justify-center text-center text-slate-700"
        >{{ product.product }}</span
      >
      <span
        class="product_price text-3xl flex justify-center items-center font-bold p-2 bg-slate-200 text-slate-700"
      >
        €{{ product.salesprice.toFixed(2) }}
      </span></span
    >
  </div>
</template>

<script setup>
  import productPlaceholder from "../assets/product-placeholder.png";
  const props = defineProps(["product"]);
</script>
