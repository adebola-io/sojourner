import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home/index";
import Popular from "./views/Popular/index";
import Destinations from "./views/Destinations/index";
import Flights from "./views/Flights/index";
import Flight from "./views/Flight/index";
import News from "./views/News/index";
import About from "./views/About/index";
import Contact from "./views/Contact/index";
import PlanetPage from "./views/PlanetPage/index";
import ERROR_PAGE from "./views/end";

const routes = [
  {
    path: "/error",
    name: "ERROR_PAGE",
    component: ERROR_PAGE,
  },
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
    path: "/destinations/:planetID/flights",
    name: "Flights",
    component: Flights,
    props: true,
  },
  {
    path: "/flights/:planetID/:flightID",
    name: "Flight",
    component: Flight,
    props: true,
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
  {
    path: "/destinations/:planetID",
    name: "PlanetPage",
    component: PlanetPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
