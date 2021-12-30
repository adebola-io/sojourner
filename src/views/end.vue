<template>
  <main v-if="ready" :style="{ height }">
    Something went wrong. <br />
    Please Reload the page.
  </main>
</template>

<script>
export default {
  name: "ERROR_PAGE",
  data() {
    return {
      height: `${window.innerHeight - 50}px`,
      ready: false,
    };
  },
  created() {
    setTimeout(() => {
      this.ready = true;
    }, 4000);
  },
};
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
}
</style>
