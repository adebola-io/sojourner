<template>
  <main v-if="item.ready">
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
        :to="`/destinations/${planetID}/flights`"
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
    <section class="suggestions-space">
      <h3 class="suggestions-space-header">People also visit</h3>
      <div class="suggestions-container">
        <div class="suggestions">
          <router-link
            exact
            v-for="(relatedDest, index) in item.related"
            :key="index"
            :to="`/destinations/${relatedDest.id}`"
            class="view-image-clicker"
            :style="{
              animation: `expand-in ${300 * (index + 1)}ms`,
              border: `2px solid ${relatedDest.themeColor}`,
              backgroundImage: `url('${require(`../../assets/planets/${relatedDest.background}`)}')`,
            }"
          >
            <p class="suggestion-name">{{ relatedDest.name }}</p>
          </router-link>
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
      item: { ready: false },
      id: this.planetID,
    };
  },
  methods: {
    start() {
      fetch(`/api/destinations/${this.$route.params.planetID}`)
        .then((res) => res.json())
        .then((data) => {
          this.item = data;
          document.title = `${this.item.name}`;
        })
        .then(() => {
          this.item.ready = true;
        });
    },
  },
  // watch: {
  //   "$route.params.planetID": function () {
  //     this.start();
  //   },
  // },
  created() {
    this.start();
  },
};
</script>

<style lang="css" scoped>
main {
  height: fit-content;
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
  color: black;
  background-color: var(--themeColor);
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
.suggestions-space,
.gallery-space {
  height: 200px;
  width: 97%;
  margin-left: 3%;
  margin-bottom: 35px;
}

.suggestions-space-header,
.gallery-space-header {
  margin: 0;
  height: 10%;
  font-weight: normal;
}
.suggestions-container,
.gallery-container {
  height: 90%;
  width: 100%;
  overflow-x: scroll;
}
.suggestions,
.gallery {
  display: flex;
  align-items: center;
  height: 100%;
  width: fit-content;
}
.view-image-clicker {
  height: 130px;
  width: 130px;
  margin-right: 20px;
  padding: 0;
  border: none;
  background-color: transparent;
}
.suggestions > .view-image-clicker {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 150px;
  border: 2px solid white;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
.view-image {
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
}
/* .suggestions > .view-image-clicker > .view-image {
  height: 86.666%;
} */
.suggestions > .view-image-clicker > p {
  height: 20%;
  margin: 0;
  font-family: inherit;
  text-align: center;
  text-decoration: none;
  color: white;
  background-image: linear-gradient(0deg, black, transparent);
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
