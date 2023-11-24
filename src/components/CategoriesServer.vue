<template>
  <div class="hidden lg:grid grid-cols-10 grid-rows-1 gap-2 w-full">
    <button
      @click="selectedCategory = category.key"
      v-for="category in categories"
      class="flex flex-col max-w-[140px] hover:grayscale-0 duration-200 active:scale-90"
      :class="
        selectedCategory.key === category.key ? 'grayscale-0' : 'grayscale'
      "
    >
      <img
        :src="keyToImageMapping[category.key]"
        class="w-full max-w-[50px] mx-auto"
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
      <option :value="null" disabled>Select a Category</option>
      <option
        v-for="category in categories"
        :value="category.key"
        class="category"
      >
        {{ category.display }}
      </option>
    </select>
  </div>
</template>

<script setup>
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
  import { getCategories } from "../store/store";

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
    emits(
      "chosen",
      categories.value.find((el) => {
        return el.key === val;
      })
    );
  });

  onMounted(() => {
    categories.value = getCategories();
    selectedCategory.value = categories.value[0].key;
  });
</script>
