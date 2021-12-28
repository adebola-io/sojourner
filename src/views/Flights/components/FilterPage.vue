<template>
  <div
    :style="{ transform: `translateX(${open ? '0' : '-100%'})` }"
    class="filter-page"
  >
    <button
      :style="{ backgroundColor: color, color: secColor }"
      @click="
        () => {
          this.$emit('apply');
        }
      "
    >
      Apply
    </button>
  </div>
</template>

<script>
export default {
  name: "FilterPage",
  props: {
    open: Boolean,
    color: {
      type: String,
      default: "var(--themeColor)",
    },
    secColor: {
      type: String,
      default: "black",
    },
  },
};
</script>

<style scoped>
.filter-page {
  position: fixed;
  z-index: 4;
  height: 100%;
  width: 100%;
  background: black;
  transform: translateX(-100%);
  transition-duration: 300ms;
}
button {
  height: 40px;
  width: 100px;
  border: none;
  background: var(--themeColor);
  border-radius: 8px;
  cursor: pointer;
}
</style>
