<template>
  <li
    class="popular-item-container"
    :style="{ animation: `popular-item ${isReadyValue * 300}ms` }"
  >
    <router-link
      to="#"
      class="popular-item"
      :style="{ backgroundImage: `url(${item.background})` }"
    >
      <div class="popular-item-info">
        <h2>{{ item.name }}</h2>
      </div>
    </router-link>
  </li>
</template>
<script>
export default {
  name: "PDestination",
  props: {
    item: Object,
    isReadyValue: Number,
  },
};
</script>
<style scoped>
.popular-item-container {
  height: 200px;
  width: 100%;
  overflow: hidden;
  border: 1px solid var(--themeColor);
  list-style: none;
  transition-duration: 300ms;
  animation: popular-item 300ms;
}
.popular-item-container:hover {
  box-shadow: 0 0 15px 0 var(--themeColor);
}
.popular-item {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
  text-decoration: none;
  background-color: #2a2a2ac4;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.popular-item-info {
  display: flex;
  /* flex-direction: column; */
  justify-content: space-around;
  align-items: center;
  background-image: linear-gradient(0deg, black, transparent);
  /* background-color: var(--themeColor); */
  width: 100%;
  height: 25%;
}
h2 {
  margin: 0;
  font-size: 20pt;
  color: var(--themeColor);
  /* text-transform: uppercase; */
  text-align: center;
  font-family: RNS, Arial, sans-serif;
}
.visit-link {
  padding: 12px 40px;
  border-radius: 13px;
  color: black;
  background-color: ivory;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
}
</style>
