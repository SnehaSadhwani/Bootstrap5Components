<template>
  <h1>Home</h1>
  <HelloWorld />
</template>

<script>
import HelloWorldVue from "../components/HelloWorld.vue";
export default {
  name: "Home",
  components: {
    HelloWorld: HelloWorldVue,
  },
};
</script>