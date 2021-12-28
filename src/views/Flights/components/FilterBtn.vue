<template>
  <button
    @click="
      () => {
        this.$emit('click');
      }
    "
    ref="button"
    :color="color"
    class="filterbtn"
  >
    <div class="track">
      <div class="knob knob1"></div>
    </div>
    <div class="track">
      <div class="knob knob2"></div>
    </div>
    <div class="track">
      <div class="knob knob3"></div>
    </div>
  </button>
</template>

<script>
export default {
  name: "FilterBtn",
  props: {
    color: {
      type: String,
      default: "var(--themeColor)",
    },
  },
  mounted() {
    this.$refs.button.style.setProperty(
      "--filterBtnColor",
      this.$refs.button.getAttribute("color")
    );
  },
};
</script>

<style scoped>
.filterbtn {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 35px;
  width: 35px;
  border: none;
  cursor: pointer;
  --filterBtnColor: var(--themeColor);
  background-color: transparent;
}
.track {
  height: 6%;
  width: 90%;
  margin-bottom: 20%;
  background-color: var(--filterBtnColor);
}
.knob-container {
  height: 10%;
  width: 0;
}
.knob {
  height: 300%;
  aspect-ratio: 1;
  background-color: var(--filterBtnColor);
  border-radius: 50%;
}
.knob1 {
  transform: translate(200%, -35%);
}
.knob2 {
  transform: translate(70%, -35%);
}
.knob3 {
  transform: translate(170%, -35%);
}
</style>
