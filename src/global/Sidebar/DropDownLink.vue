<template>
  <li>
    <router-link
      @click="closeSideBar"
      :to="`${to}`"
      class="header-drop-down-link"
      :style="{ color: `${to === current ? 'white' : 'var(--themeColor)'}` }"
      >{{ name }}</router-link
    >
  </li>
</template>

<script>
export default {
  name: "DropDownLink",
  props: {
    name: String,
    to: String,
    current: String,
  },
  methods: {
    closeSideBar() {
      this.$emit("close-side-bar", this.to);
    },
  },
};
</script>

<style scoped>
li {
  padding: 9px 0;
  list-style: none;
}
.header-drop-down-link {
  text-decoration: none;
  font-size: 11pt;
  /* font-family: RNS, Arial, sans-serif; */
  font-family: Altone;
  color: var(--themeColor);
}
.header-drop-down-link:hover {
  color: white;
}
</style>
