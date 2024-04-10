<template>
  <div>
    <p>
      <!-- use the router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/components">COMPONENTS</router-link>
    </p>
    <router-view></router-view>
    <!-- <HelloWorld />   -->
  </div>
</template>


<script>
// import HelloWorldVue from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    // HelloWorld: HelloWorldVue,
  },
};
</script>
