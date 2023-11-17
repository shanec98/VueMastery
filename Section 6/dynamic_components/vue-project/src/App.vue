<template>
  <!--select tag for a dropdown with the options inside-->
  <!--v-model directive with componentName data property as the expression-->
  <select v-model="componentName">
    <option value="Home">Home</option>
    <option value="About">About</option>
  </select>

  <!--the <keep-alive> component keeps the component inside of it alive
    If we need to toggle the component again, it will use
    the one from memory instead of the default-->
  <keep-alive>
      <component :is="componentName"></component>
  </keep-alive>

</template>

<script>
  //must import all components to be used
  import Home from "./components/Home.vue";
  import About from "./components/About.vue";

  export default {
    name: "App",
    components: {
      Home,
      About
    },

    data() {
      return {
        componentName: "Home",
      }
    }
  }
</script>
