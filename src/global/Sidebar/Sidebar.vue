<template>
  <ul
    :style="{ transform: `translateX(${showDropDown ? '-100%' : '0'})` }"
    class="header-drop-down"
  >
    <DropDownLink
      v-for="(dropDownLink, index) in dropDownLinks"
      :key="index"
      :to="dropDownLink.to"
      :name="dropDownLink.name"
    />
  </ul>
</template>
<script>
import DropDownLink from "./DropDownLink";
export default {
  name: "Sidebar",
  components: {
    DropDownLink,
  },
  props: {
    showDropDown: Boolean,
    dropDownLinks: Array,
  },
};
</script>
<style scoped>
.header-drop-down {
  position: fixed;
  z-index: 5;
  width: 200px;
  height: 100%;
  margin: 0 0 0 100%;
  padding: 0 3%;
  padding-bottom: 15px;
  background-color: black;
  transition-duration: 300ms;
}
@media (min-width: 768px) {
  .header-drop-down {
    display: none;
  }
}
</style>
