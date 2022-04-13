import Main from "@pages/Main";
import Profile from "@pages/Profile";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/profile",
    component: Profile,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
