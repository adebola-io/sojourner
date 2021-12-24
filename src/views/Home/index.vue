<template>
  <Overlays />
  <main>
    <Section
      format="left"
      heading="The No. 1 Interstellar Agency in the Galaxy."
      action="Get Started"
      text="Sojourner is a company dedicated to getting you to where you want to be in style and safety. Join our crews on an exciting journey across space, traversing
          realities at previously unimagined speeds."
    ></Section>
    <Section
      format="middle"
      heading="Experience the Solar System with us."
      action="Sign Up."
      text="Want to walk on the red sands of Mars? Feel the cold winds of Europa on your face? Or feel moongrass between your fingers? We've got you covered."
    ></Section>
    <Section
      format="right"
      heading="Expand your horizon and explore the universe."
      action="Learn More."
      text="Reach beyond the limits of the nature and into the depths of reality, breaking boundaries and redefining possibilities."
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
  created() {
    document.title = "Sojouner - Home";
  },
};
</script>
