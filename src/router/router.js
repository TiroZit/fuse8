import Main from "@pages/Main";
import Profile from "@pages/Profile";
import Navigation from "@pages/Navigation";
import Search from "@pages/Search";
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
  {
    path: "/search",
    component: Search,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
