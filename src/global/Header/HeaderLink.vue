<template>
  <li>
    <router-link :to="`${to}`" class="header-link">{{ name }}</router-link>
  </li>
</template>

<script>
export default {
  name: "HeaderLink",
  props: {
    name: String,
    to: String,
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
