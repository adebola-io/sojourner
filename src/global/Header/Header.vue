<template>
  <header>
    <router-link class="header-text" to="/">{{ text }}</router-link>
    <nav>
      <ul>
        <HeaderLink
          v-for="(headerLink, index) in headerLinks"
          :key="index"
          :to="headerLink.to"
          :name="headerLink.name"
        />
      </ul>
    </nav>
    <SideBarButton @toggle-drop-down="toggleDropDown" />
  </header>
</template>

<script>
import SideBarButton from "./SideBarButton";
import HeaderLink from "./HeaderLink";
export default {
  name: "Header",
  props: {
    text: String,
    headerLinks: Array,
  },
  components: {
    SideBarButton,
    HeaderLink,
  },
  methods: {
    toggleDropDown() {
      this.$emit("toggle-drop-down");
    },
  },
};
</script>

<style scoped>
.header-container {
}
header {
  position: fixed;
  top: 0;
  z-index: 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  width: 94%;
  padding: 0 3%;
  color: var(--themeColor);
  background-color: black;
  font-size: 15pt;
}
.header-text {
  text-decoration: none;
  color: inherit;
  text-transform: uppercase;
  margin-right: auto;
  /*font-family: Space-Madness, monospace, Arial, sans-serif*/
  font-family: RNS, Arial, sans-serif;
}
@media (max-width: 768px) {
  nav {
    display: none;
  }
}
ul {
  display: flex;
  margin: 0;
  padding: 0;
}
/*.header-login {
  padding: 4px 6px;
  border: 2px solid;
  border-radius: 3px;
  background-color: transparent;
  color: var(--themeColor);
  font-size: 11pt;
  text-decoration: none;
}*/
</style>
