<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <simple-comp></simple-comp>
    <nav>
      <router-link to="/">main</router-link> |
      <router-link to="/signIn">signIn</router-link>
    </nav>
    <router-view></router-view>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import SimpleComp from "./components/SimpleComp.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    SimpleComp,
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created: function () {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMounted");
  },
  mounted() {
    console.log("mounted");
    // this.message = "update massage!";
  },
  beforeUpdate() {
    console.log("beforeUpdated");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
