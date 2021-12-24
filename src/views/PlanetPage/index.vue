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
        :style="{ backgroundColor: item.themeColor }"
        to="#"
        >Visit</router-link
      >
      <router-link to="#" class="wishlist-btn">Add to Wishlist</router-link>
    </div>
    <p class="info">{{ item.info }}</p>
  </main>
</template>

<script>
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
  justify-content: center;
  width: 100%;
}
.visit-btn,
.wishlist-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 31%;
  height: 51px;
  margin: 0 5%;
  color: black;
  text-align: center;
  border-radius: 33px;
  text-decoration: none;
}
.wishlist-btn {
  background: var(--themeColor);
}
.info {
  width: 94%;
  padding: 0 3%;
  font-size: 10pt;
  text-align: center;
  animation: fade-in 450ms;
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
