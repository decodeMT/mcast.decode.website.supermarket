<template>
  <div class="hidden lg:grid grid-cols-10 grid-rows-1 gap-2 w-full">
    <button
      @click="emits('chosen', category)"
      v-for="category in categories"
      class="flex flex-col max-w-[140px] grayscale hover:grayscale-0 duration-200 active:scale-90"
    >
      <img
        :src="keyToImageMapping[category.key]"
        class="w-full max-w-[75px] mx-auto"
      />
      <span class="hidden lg:block text-sm text-center w-full py-2 category">
        {{ category.display }}</span
      >
    </button>
  </div>
  <div class="flex lg:hidden w-full">
    <select
      v-model="selectedCategory"
      class="w-full focus:border-lime-600 border-2 rounded-lg p-2"
    >
      <option :value="null">Select a Category</option>
      <option v-for="category in categories" :value="category" class="category">
        {{ category.display }}
      </option>
    </select>
  </div>
</template>

<script setup>
  import axios from "axios";
  import { ref, onMounted, watch } from "vue";
  import butcher from "../assets/categories/butcher.png";
  import chilledanddairy from "../assets/categories/chilled-and-dairy.png";
  import confectionery from "../assets/categories/confectionery.png";
  import delicatessen from "../assets/categories/delicatessen.png";
  import fish from "../assets/categories/fish.png";
  import fruitsandvegetables from "../assets/categories/fruit-and-vegetables.png";
  import household from "../assets/categories/household.png";
  import organic from "../assets/categories/organic.png";
  import winecellar from "../assets/categories/wine-cellar.png";
  import pets from "../assets/categories/pets.png";

  const categories = ref([]);

  const keyToImageMapping = ref({
    butcher: butcher,
    chilledanddairy: chilledanddairy,
    confectionery: confectionery,
    delicatessen: delicatessen,
    fish: fish,
    fruitsandvegetables: fruitsandvegetables,
    household: household,
    organic: organic,
    winecellar: winecellar,
    pets: pets,
  });

  const emits = defineEmits(["chosen"]);

  const selectedCategory = ref(null);

  watch(selectedCategory, (val) => {
    emits("chosen", val);
  });

  onMounted(async () => {
    const response = await axios.get("/api/category");
    categories.value = response.data.categories;
  });
</script>
