<template>
  <main>
    <h1>Popular Destinations</h1>
    <ul>
      <PDestination
        v-for="(item, index) in popular"
        :isReadyValue="index"
        :item="item"
        :key="index"
      />
    </ul>
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
      ready: false,
    };
  },
  created() {
    document.title = "Sojourner - Popular Destinations";
    this.popular = Data.popular;
  },
  unmounted() {
    this.ready = false;
  },
};
</script>

<style scoped>
h1 {
  margin-left: 2%;
  color: var(--themeColor);
  font-family: RNS, Arial, sans-serif;
}
ul {
  display: grid;
  grid-template-columns: 47% 47%;
  column-gap: 6%;
  row-gap: 18px;
  place-items: center;
  width: 96%;
  margin: 15px 0;
  padding: 0 2%;
}
</style>
