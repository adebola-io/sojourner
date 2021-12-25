<template>
  <main>
    <section
      class="background"
      :style="{
        backgroundImage: `url('${require(`../../assets/planets/${this.item.background}`)}')`,
      }"
    >
      <div class="background-inner">
        <h1 class="name-of-planet">{{ item.name }}</h1>
      </div>
    </section>
    <div class="visit-btn-space">
      <router-link
        class="visit-btn"
        :style="{ backgroundColor: item.themeColor, color: item.secColor }"
        :to="`/flights/${item.name.toLowerCase()}`"
        >See Flights</router-link
      >
      <router-link to="#" class="wishlist-btn">Add to Wishlist</router-link>
    </div>
    <p class="info">{{ item.info }}</p>
    <section class="gallery-space">
      <h3 class="gallery-space-header">Gallery</h3>
      <div class="gallery-container">
        <div class="gallery">
          <button
            v-for="(image, index) in item.gallery"
            :key="index"
            class="view-image-clicker"
            :style="{ animation: `expand-in ${300 * (index + 1)}ms` }"
          >
            <div
              class="view-image"
              :style="{
                backgroundImage: `url('${require(`../../assets/gallery/${image.src}`)}')`,
              }"
            ></div>
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import "./animations.css";
export default {
  name: "PlanetPage",
  props: {
    planetID: String,
  },
  data() {
    return {
      item: {},
    };
  },
  created() {
    fetch(`/api/destinations/${this.planetID}`)
      .then((res) => res.json())
      .then((data) => {
        this.item = data;
        document.title = `${this.item.name}`;
      });
    console.log(this.item.flights);
  },
};
</script>

<style lang="css" scoped>
main {
  height: 900px;
}
.background {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 289px;
  width: 100%;
  background-size: cover;
  background-position: center;
}
.background-inner {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 30%;
  width: 100%;
  margin: 0;
  padding-top: 10%;
  overflow: hidden;
  background-image: linear-gradient(0deg, black, transparent);
}
.name-of-planet {
  text-align: center;
  font-size: 33pt;
  animation: come-up 450ms;
}
.visit-btn-space {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.visit-btn,
.wishlist-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 51px;
  margin: 2% 0;
  text-align: center;
  border-radius: 33px;
  text-decoration: none;
}
.wishlist-btn {
  color: black;
  background: var(--themeColor);
}
.info {
  width: 94%;
  margin-bottom: 25px;
  padding: 0 3%;
  font-size: 10pt;
  text-align: center;
  animation: fade-in 450ms;
}
.gallery-space {
  height: 200px;
  width: 97%;
  margin-left: 3%;
}
.gallery-space-header {
  margin: 0;
  height: 10%;
  font-weight: normal;
}
.gallery-container {
  height: 90%;
  width: 100%;
  overflow-x: scroll;
}
.gallery {
  display: flex;
  align-items: center;
  height: 100%;
}
.view-image-clicker {
  padding: 0;
  border: none;
  background-color: transparent;
}
.view-image {
  height: 130px;
  width: 130px;
  margin-right: 20px;
  background-size: cover;
  background-position: center;
}
@keyframes come-up {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: none;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
}
</style>
