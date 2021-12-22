<template>
  <Overlays />
  <main>
    <Section
      format="left"
      heading="Explore outer space."
      action="Get Started"
      text="Join our crews on an exciting journey across galaxies, traversing
          realities at previously unimagined speeds."
    ></Section>
    <Section
      format="middle"
      heading="Experience the Solar System."
      action="Sign Up."
      text="Want to walk on the red sands of Mars? Feel the cold Europan winds on 
          your face? Or feel moongrass between your fingers? We've got you covered."
    ></Section>
    <Section
      format="right"
      heading="Expand your horizon."
      action="Learn More."
      text="Reach beyond the limits of the nature and into the depths of reality
          , breaking boundaries and redefining possibilities."
    ></Section>
  </main>
</template>
<script>
import Overlays from "./components/Overlays";
import Section from "./components/Section";
import "./css/animations.css";
export default {
  name: "Home",
  components: {
    Section,
    Overlays,
  },
  data() {
    return {
      earth: require("../../assets/planets/earth.jpg"),
      venus: require("../../assets/planets/venus.jpg"),
      moon: require("../../assets/planets/moon.jpg"),
    };
  },
  created() {
    document.title = "Sojouner - Home";
  },
};
</script>
