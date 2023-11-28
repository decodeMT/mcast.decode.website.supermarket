<template>
  <div
    class="flex flex-col bg-gradient-to-b from-teal-600 to-lime-700 min-h-screen min-w-full justify-center items-center"
    :style="`background: url(${background}); background-size: cover`"
  >
    <div
      class="bg-white flex flex-col p-8 rounded-lg bg-opacity-80 backdrop-blur-sm max-w-[400px]"
    >
      <span class="text-lime-600 font-bold text-3xl mb-7 text-center"
        >Scraping Exercise</span
      >
      <span class="flex flex-col space-y-4 justify-center items-center">
        <router-link
          class="bg-lime-600 w-36 text-lime-100 flex justify-center items-center text-lg py-3 rounded hover:bg-lime-500 duration-300"
          :to="{ name: 'rest' }"
          >REST</router-link
        >
        <router-link
          class="bg-lime-600 w-36 text-lime-100 flex justify-center items-center text-lg py-3 rounded hover:bg-lime-500 duration-300"
          :to="{ name: 'server' }"
          >Server-Side</router-link
        >
        <router-link
          class="bg-lime-600 w-36 text-lime-100 flex justify-center items-center text-lg py-3 rounded hover:bg-lime-500 duration-300"
          :to="{ name: 'scroll' }"
          >Infinite Scroll</router-link
        ></span
      >
      <span class="mt-8 text-sm text-slate-800"
        >This is an educational website, having three types of websites; one
        mocking REST, another server-side rendering, and the last one infinite
        scroll. It will be used to train learners in scraping data from these 3
        type of websites.</span
      >
    </div>
  </div>
</template>

<script setup>
  import background from "./assets/background.jpg";
</script>
