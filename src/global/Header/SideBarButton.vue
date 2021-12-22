<template>
  <button
    @click="toggleDropDown"
    class="side-bar-btn"
    :style="{ transform: `rotate(${rotation}deg)` }"
  >
    <div
      :style="{
        transform: `${
          showDropDown ? 'rotate(45deg) translate(0%, 200%)' : 'none'
        }`,
      }"
      class="sb-btn-bar"
    ></div>
    <div
      :style="{ display: `${showDropDown ? 'none' : 'block'}` }"
      class="sb-btn-bar b2"
    ></div>
    <div
      :style="{
        transform: `${
          showDropDown ? 'rotate(-45deg) translate(0%, -210%)' : 'none'
        }`,
      }"
      class="sb-btn-bar"
    ></div>
  </button>
</template>

<script>
export default {
  name: "SideBarButton",
  props: {
    showDropDown: Boolean,
    rotation: Number,
  },
  methods: {
    toggleDropDown() {
      this.$emit("toggle-drop-down");
    },
  },
};
</script>

<style scoped>
.side-bar-btn {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
  height: 40px;
  width: 40px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  transition-duration: 450ms;
}
@media (min-width: 768px) {
  .side-bar-btn {
    display: none;
  }
}
.sb-btn-bar {
  width: 85%;
  height: 7%;
  margin: 9% 0;
  border-radius: 13px;
  background-color: var(--themeColor);
  transition-duration: 300ms;
}
.b2 {
  width: 65%;
}
</style>
