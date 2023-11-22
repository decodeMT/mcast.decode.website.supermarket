<template>
  <div
    class="product flex flex-col justify-start border-2 rounded-lg border-slate-200 overflow-hidden min-h-[250px] duration-300 hover:border-slate-300 hover:shadow-lg group"
  >
    <span class="flex flex-1">
      <img
        :src="productPlaceholder"
        class="w-full max-h-[100px] min-h-[100px] h-full object-contain saturate-0 group-hover:saturate-100 duration-300 p-4"
    /></span>
    <span class="flex flex-col flex-1 bg-slate-100">
      <span
        class="product_name text-lg font-medium p-2 text-slate-800 items-center border-y border-slate-300"
        >{{ product.product }}</span
      >
      <span class="flex w-full justify-between flex-wrap bg-slate-200 flex-1">
        <span
          class="product_price w-full lg:w-4/12 text-2xl flex justify-center py-2 font-bold items-center border-transparent text-slate-800 border-r-[1.5px] border-slate-300"
          >€{{ product.salesprice }}</span
        >
        <span class="w-full lg:w-8/12 flex flex-wrap items-start p-2">
          <span
            v-for="label in product.labels.split(';')"
            class="product_label bg-lime-600 whitespace-nowrap rounded text-blue-50 font-medium text-xs px-1 m-0.5"
          >
            {{ label.trim() }}
          </span>
        </span>
      </span></span
    >
  </div>
</template>

<script setup>
  import productPlaceholder from "../assets/product-placeholder.png";
  const props = defineProps(["product"]);
</script>
