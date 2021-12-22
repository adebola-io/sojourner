<template>
  <main>
    <h1>Popular Destinations</h1>
    <div class="p-destinations-outer-container">
      <ul
        :style="{
          transform: `translateX(-${outerContainerXTranslation * 345}px)`,
        }"
      >
        <PDestination
          v-for="(item, index) in popular"
          :isReadyValue="index"
          :item="item"
          :key="index"
        />
      </ul>
      <div class="p-destinations-scrollbuttons">
        <button @click="log" class="p-destinations-scrollbuttons-backward">
          <div class="p-destinations-scrollbuttons-b2"></div>
          <div class="p-destinations-scrollbuttons-b1"></div>
        </button>
        <button @click="log" class="p-destinations-scrollbuttons-forward">
          <div class="p-destinations-scrollbuttons-b1"></div>
          <div class="p-destinations-scrollbuttons-b2"></div>
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import Data from "../../data";
import PDestination from "./components/PDestination";
import "./animations.css";
export default {
  name: "Popular",
  components: {
    PDestination,
  },
  data() {
    return {
      height: `${window.innerHeight - 80}px`,
      outerContainerXTranslation: 0,
    };
  },
  methods: {
    log() {
      if (this.outerContainerXTranslation < 5)
        this.outerContainerXTranslation++;
    },
  },
  created() {
    document.title = "Sojourner - Popular Destinations";
    document.body.style.setProperty("--popular-main-height", this.height);
    this.popular = Data.popular;
  },
};
</script>

<style scoped>
main {
  height: fit-content;
}
h1 {
  margin-left: 3%;
  color: var(--themeColor);
  font-family: RNS, Arial, sans-serif;
}
.p-destinations-outer-container {
  width: 96%;
  margin: 15px 0;
  padding: 0 2%;
}
ul {
  display: grid;
  grid-template-columns: 47% 47%;
  column-gap: 6%;
  row-gap: 18px;
  padding: 0;
}
.p-destinations-scrollbuttons {
  display: none;
}
@media (min-width: 768px) {
  main {
    height: var(--popular-main-height);
  }
  h1 {
    height: 0;
  }
  .p-destinations-outer-container {
    height: 100%;
    width: 98%;
    margin: 0;
    padding-right: 0;
    overflow-x: scroll;
    overflow-y: hidden;
  }
  .p-destinations-outer-container::-webkit-scrollbar {
    display: none;
  }
  .p-destinations-scrollbuttons {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: transparent;
    transform: translateY(-100%);
    scroll-behavior: smooth;
  }
  .p-destinations-scrollbuttons-forward,
  .p-destinations-scrollbuttons-backward {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 60px;
    width: 60px;
    border: none;
    background-color: transparent;
    opacity: 0.75;
    cursor: pointer;
    transition-duration: 300ms;
  }
  .p-destinations-scrollbuttons-forward:hover,
  .p-destinations-scrollbuttons-backward:hover {
    opacity: 1;
    transform: scale(1.2);
  }
  .p-destinations-scrollbuttons-b1,
  .p-destinations-scrollbuttons-b2 {
    width: 75%;
    height: 8%;
    margin: 20% 0;
    background-color: var(--themeColor);
  }
  .p-destinations-scrollbuttons-b1 {
    transform: rotate(45deg);
  }
  .p-destinations-scrollbuttons-b2 {
    transform: rotate(-45deg);
  }
  ul {
    display: flex;
    align-items: center;
    column-gap: 0;
    row-gap: 0;
    width: fit-content;
    height: 100%;
    margin: 0;
    padding: 0 2%;
    transition-duration: 300ms;
  }
}
</style>
