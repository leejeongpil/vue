<template>
  <div>
    <h1 style="color: red">Sign In View</h1>
    <SignInComp></SignInComp>
  </div>
</template>
<script>
import SignInComp from "../components/SignInComp.vue";
export default {
  components: {
    SignInComp,
  },
  methods: {},
  beforeCreate() {
    console.log("SignIn View beforeCreate");
  },
  created: function () {
    console.log("SignIn View created");
  },
  beforeMount() {
    console.log("SignIn View beforeMounted");
  },
  mounted() {
    console.log("SignIn View mounted");
    // this.message = "update massage!";
  },
  beforeUpdate() {
    console.log("SignIn View beforeUpdated");
  },
  updated() {
    console.log("SignIn View updated");
  },
  beforeDestroy() {
    console.log("SignIn View beforeDestroy");
  },
  destroyed() {
    console.log("SignIn View destroyed");
  },
};
</script>
<style lang=""></style>
