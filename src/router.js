import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home/index";
import Popular from "./views/Popular/index";
import Destinations from "./views/Destinations/index";
import News from "./views/News/index";
import About from "./views/About/index";
import Contact from "./views/Contact/index";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/popular",
    name: "Popular",
    component: Popular,
  },
  {
    path: "/news",
    name: "News",
    component: News,
  },
  {
    path: "/destinations",
    name: "Destinations",
    component: Destinations,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/about-us",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
