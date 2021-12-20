<template>
  <section
    :style="{ height: `${height}px` }"
    :class="[
      format === 'middle' ? 'align-center' : '',
      format === 'right' ? 'align-end' : '',
    ]"
  >
    <h1
      :class="[
        format === 'left' ? 'left-heading' : '',
        format === 'middle' ? 'center-heading' : '',
        format === 'right' ? 'right-heading' : '',
      ]"
    >
      {{ heading }}
    </h1>
    <p
      :class="[
        format === 'left' ? 'left-text' : '',
        format === 'middle' ? 'center-text' : '',
        format === 'right' ? 'right-text' : '',
      ]"
    >
      {{ text }}
    </p>
    <a :href="destination" class="action-button">{{ action }}</a>
  </section>
</template>

<script>
export default {
  name: "Section",
  props: {
    format: String,
    heading: String,
    text: String,
    action: String,
    destination: {
      type: String,
      default: "#",
    },
  },
  data() {
    return {
      height: window.innerHeight - 50,
    };
  },
};
</script>

<style scoped>
section {
  height: 520px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 92%;
  padding: 0 5% 0 3%;
  color: white;
  animation: fade-in 1200ms;
}
.align-center {
  align-items: center;
}
.align-end {
  align-items: flex-end;
}
.right-heading,
.left-heading,
.center-heading {
  width: 75%;
  margin-bottom: 0;
  text-transform: uppercase;
  color: var(--themeColor);
  /*font-family: "Space-Madness", monospace, sans-serif;*/
  font-family: RNS, Arial, sans-serif;
  font-size: 25pt;
}
@media (min-width: 768px) {
  .right-heading,
  .left-heading,
  .center-heading {
    font-size: 32pt;
  }
}
.right-heading,
.right-text {
  text-align: end;
}
.center-heading,
.center-text {
  text-align: center;
}
.right-text,
.left-text,
.center-text {
  width: 75%;
  font-size: 11pt;
  margin-top: 8px;
}
@media (min-width: 768px) {
  .right-text,
  .left-text,
  .center-text {
    width: 40%;
  }
}
.action-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 14px;
  border-radius: 7px;
  background-color: transparent;
  border: 2px solid;
  font-weight: bold;
  color: var(--themeColor);
  text-decoration: none;
  transition-duration: 300ms;
}
.action-button:hover {
  background-color: var(--themeColor);
  color: black;
}
</style>
