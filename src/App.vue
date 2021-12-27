<template>
  <Header
    :current="current"
    :headerLinks="links"
    @go="selectRoute"
    @toggle-drop-down="toggleDropDown"
    :showDropDown="showDropDown"
    :rotation="showDropDown ? -180 : 0"
    text="Sojourner"
  >
  </Header>
  <Sidebar
    :current="current"
    :dropDownLinks="links"
    :showDropDown="showDropDown"
    @close-side-bar="closeSb"
  ></Sidebar>
  <router-view
    :key="$route.name + ($route.params.planetID || '')"
  ></router-view>
  <Footer></Footer>
</template>

<script>
import Header from "./global/Header/Header";
import Sidebar from "./global/Sidebar/Sidebar";
import Footer from "./global/Footer/Footer";
import "./fonts/fonts.css";
export default {
  name: "App",
  components: {
    Header,
    Sidebar,
    Footer,
  },
  data() {
    return {
      showDropDown: false,
      current: window.location.pathname,
      links: [
        { name: "Home", to: "/" },
        { name: "Popular", to: "/popular" },
        { name: "News", to: "/news" },
        { name: "About Us", to: "/about-us" },
        { name: "Contact", to: "/contact" },
      ],
    };
  },
  methods: {
    toggleDropDown() {
      this.showDropDown = !this.showDropDown;
    },
    closeSb(to) {
      this.showDropDown = false;
      this.selectRoute(to);
    },
    selectRoute(to) {
      this.current = to;
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
main {
  margin-top: 50px;
}
html::-webkit-scrollbar {
  display: none;
}
:root {
  background-color: black;
  color: white;
  /* --themeColor: #ae9760; */
  /* --themeColor: #eda885; */
  --themeColor: #a9c9e5;
  font-family: Altone, Arial, Helvetica, sans-serif;
}
</style>
