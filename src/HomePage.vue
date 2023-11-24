<template>
  <div class="flex flex-col">
    <router-link :to="{ name: 'root' }">ROOT</router-link>
    <router-link :to="{ name: 'rest' }">Rest</router-link>
    <router-link :to="{ name: 'server' }">server</router-link>
  </div>
</template>

<script setup></script>
