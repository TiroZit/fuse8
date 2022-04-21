import Main from "@pages/Main";
import Profile from "@pages/Profile";
import Navigation from "@pages/Navigation";
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
  {
    path: "/navigation",
    component: Navigation,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
