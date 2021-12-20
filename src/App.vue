<template>
  <Header
    :headerLinks="links"
    @toggle-drop-down="toggleDropDown"
    text="Sojourner"
  >
  </Header>
  <Sidebar :dropDownLinks="links" :showDropDown="showDropDown"></Sidebar>
  <router-view></router-view>
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
      links: [
        { name: "Home", to: "/" },
        { name: "Popular", to: "/popular" },
        { name: "Search", to: "/search" },
        { name: "News", to: "/news" },
        { name: "About Us", to: "/about-us" },
        { name: "Contact", to: "/contact-us" },
      ],
    };
  },
  methods: {
    toggleDropDown() {
      this.showDropDown = !this.showDropDown;
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
:root {
  background-color: black;
  color: white;
  --themeColor: #ae9760;
  font-family: "Segoe-UI", Arial, sans-serif;
}
</style>
