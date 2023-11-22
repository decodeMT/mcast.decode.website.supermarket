import { createRouter, createWebHistory } from "vue-router";
import Home from "./HomePage.vue";
import HomeRest from "./pages/rest/Home.vue";

const routes = [
  { path: "/", component: Home, name: "root" },
  { path: "/rest/", component: HomeRest, name: "rest" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
