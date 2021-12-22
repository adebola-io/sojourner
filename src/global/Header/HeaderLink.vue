<template>
  <li>
    <router-link
      :to="`${to}`"
      class="header-link"
      @click="selectRoute"
      :style="{ color: `${to === current ? 'white' : 'var(--themeColor)'}` }"
      >{{ name }}</router-link
    >
  </li>
</template>

<script>
export default {
  name: "HeaderLink",
  props: {
    name: String,
    to: String,
    current: String,
  },
  methods: {
    selectRoute() {
      this.$emit("go", this.to);
    },
  },
};
</script>

<style scoped>
li {
  padding: 0 10px;
  list-style: none;
}
.header-link {
  text-decoration: none;
  font-size: 11pt;
  font-family: RNS, Arial, sans-serif;
  color: var(--themeColor);
}
.header-link:hover {
  color: white;
}
</style>
