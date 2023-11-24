import { createRouter, createWebHistory } from "vue-router";
import Home from "./HomePage.vue";
import HomeRest from "./pages/rest/Home.vue";
import HomeServer from "./pages/server/Home.vue";

const routes = [
  { path: "/", component: Home, name: "root" },
  { path: "/rest/", component: HomeRest, name: "rest" },
  { path: "/server/", component: HomeServer, name: "server" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
