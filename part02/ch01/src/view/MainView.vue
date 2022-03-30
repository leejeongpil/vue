<template>
  <div>
    <h1 style="color: red">Main View</h1>
    <MainComp></MainComp>
  </div>
</template>
<script>
import MainComp from "../components/MainComp.vue";
export default {
  components: {
    MainComp,
  },
  methods: {},
  beforeCreate() {
    console.log("Main View beforeCreate");
  },
  created: function () {
    console.log("Main View created");
  },
  beforeMount() {
    console.log("Main View beforeMounted");
  },
  mounted() {
    console.log("Main View mounted");
    // this.message = "update massage!";
  },
  beforeUpdate() {
    console.log("Main View beforeUpdated");
  },
  updated() {
    console.log("Main View updated");
  },
  beforeDestroy() {
    console.log("Main View beforeDestroy");
  },
  destroyed() {
    console.log("Main View destroyed");
  },
};
</script>
<style lang=""></style>
