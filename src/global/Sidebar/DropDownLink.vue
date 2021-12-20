<template>
  <li>
    <router-link :to="`${to}`" class="header-drop-down-link">{{
      name
    }}</router-link>
  </li>
</template>

<script>
export default {
  name: "DropDownLink",
  props: {
    name: String,
    to: String,
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
  font-family: RNS, Arial, sans-serif;
  color: var(--themeColor);
}
</style>
