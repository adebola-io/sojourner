<template>
  <div class="overlays" :style="{ height: `${height}px` }">
    <div
      :style="{ height: `${overlays.length * 100}%` }"
      class="overlays-inner-container"
    >
      <div
        v-for="(overlay, index) in overlays"
        :key="index"
        class="overlay"
        :style="{
          height: `${100 / overlays.length}%`,
          backgroundImage: `url(${overlay})`,
          transform: `translateY(-${index * 100}%)`,
          opacity: `${opacities[index]}`,
        }"
      ></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Overlays",
  data() {
    return {
      height: window.innerHeight - 50,
      overlays: [
        require("../assets/venus.jpg"),
        require("../assets/moon.jpg"),
        require("../assets/earth.jpg"),
      ],
      opacities: [0, 0, 1],
    };
  },
  methods: {
    changeImage() {
      if (document.querySelector("html").scrollTop < this.height / 2) {
        this.opacities = [0, 0, 1];
      } else if (
        document.querySelector("html").scrollTop > this.height / 2 &&
        document.querySelector("html").scrollTop < this.height * 1.5
      ) {
        this.opacities = [0, 1, 0];
      } else if (document.querySelector("html").scrollTop > this.height * 1.5) {
        this.opacities = [1, 0, 0];
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.changeImage);
  },
  unmounted() {
    window.removeEventListener("scroll", this.changeImage);
  },
};
</script>
<style scoped>
.overlays {
  position: fixed;
  width: 100%;
  background-color: black;
  z-index: -1;
  filter: brightness(70%);
  overflow: hidden;
}
.overlay-inner-container {
}
.overlay {
  width: 100%;
  background-color: black;
  background-size: cover;
  background-position: center;
  transition-duration: 300ms;
}
</style>
