<template>
  <li
    class="popular-item-container"
    :style="{ animation: `popular-item ${(isReadyValue + 1) * 300}ms` }"
  >
    <router-link
      :to="item.page"
      class="popular-item"
      :style="{
        backgroundImage: `url('${backgroundURL}')`,
      }"
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
    backgroundURL: String,
  },
  data() {
    return {
      background: require("../../../assets/blank.jpg"),
    };
  },
};
</script>
<style scoped>
.popular-item-container {
  height: 250px;
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
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(0deg, black, transparent);
  width: 100%;
  height: 100%;
  padding-bottom: 10%;
}
h2 {
  margin: 0;
  font-size: 20pt;
  color: var(--themeColor);
  /* text-transform: uppercase; */
  text-align: center;
  /* font-family: RNS, Arial, sans-serif; */
  font-family: Altone, Arial, Helvetica, sans-serif;
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
@media (min-width: 768px) {
  .popular-item-container {
    height: 85%;
    width: 345px;
    margin-right: 30px;
    --infoTransform: translateY(100%);
  }
  .popular-item-container:hover {
    transform: scale(1.07);
    --infoTransform: translateY(0);
  }
  h2 {
    height: 10%;
    transition-duration: 300ms;
  }
}
@media (max-width: 375px) {
  .popular-item-container {
    height: 200px;
  }
}
</style>
