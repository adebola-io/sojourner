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
          :backgroundURL="
            item
              ? require(`../../assets/planets/${item.background}`)
              : require('../../assets/blank.jpg')
          "
          :key="index"
        />
      </ul>
      <button
        @click="
          () => {
            this.shiftLineup('back');
          }
        "
        v-if="outerContainerXTranslation > 0"
        class="p-destinations-scrollbuttons-backward"
      >
        <div class="p-destinations-scrollbuttons-b2"></div>
        <div class="p-destinations-scrollbuttons-b1"></div>
      </button>
      <button
        @click="
          () => {
            this.shiftLineup('front');
          }
        "
        v-if="outerContainerXTranslation < 5"
        class="p-destinations-scrollbuttons-forward"
      >
        <div class="p-destinations-scrollbuttons-b1"></div>
        <div class="p-destinations-scrollbuttons-b2"></div>
      </button>
    </div>
  </main>
</template>

<script>
import PDestination from "./components/PDestination";
import "./animations.css";
export default {
  name: "Popular",
  components: {
    PDestination,
  },
  data() {
    return {
      popular: [],
      height: `${window.innerHeight - 80}px`,
      outerContainerXTranslation: 0,
    };
  },
  methods: {
    shiftLineup(direction = "") {
      if (direction === "back" && this.outerContainerXTranslation > 0) {
        this.outerContainerXTranslation--;
      }
      if (direction === "front" && this.outerContainerXTranslation < 5)
        this.outerContainerXTranslation++;
    },
  },
  created() {
    document.title = "Sojourner - Popular Destinations";
    document.body.style.setProperty("--popular-main-height", this.height);
    fetch("/api/destinations")
      .then((res) => res.json())
      .then((data) => {
        this.popular = data.sort((a, b) => {
          return b.visited - a.visited;
        });
      });
  },
};
</script>

<style scoped>
main {
  height: fit-content;
}
h1 {
  width: 97%;
  margin-left: 3%;
  text-align: center;
  color: var(--themeColor);
  font-family: Altone, Arial, Helvetica, sans-serif;
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
.p-destinations-scrollbuttons-forward,
.p-destinations-scrollbuttons-backward {
  display: none;
}
@media (min-width: 768px) {
  main {
    height: var(--popular-main-height);
  }
  h1 {
    height: 0;
    text-align: justify;
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
  .p-destinations-scrollbuttons-forward,
  .p-destinations-scrollbuttons-backward {
    position: fixed;
    bottom: 50%;
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
  .p-destinations-scrollbuttons-forward {
    right: 0;
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
