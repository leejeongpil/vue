<template>
  <div>
    <h1 style="color: blue">Main Comp</h1>
    <h2>email: {{ m_email }}</h2>
    <h2>password: {{ m_password }}</h2>
    <button @click="profileCheck">profileCheck</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      m_email: "",
      m_password: "",
    };
  },
  methods: {
    profileCheck() {
      this.m_email = localStorage.getItem("email");
      this.m_password = localStorage.getItem("password");
      // let email = loca;
      // console.log();
    },
  },
  beforeCreate() {
    console.log("Main Comp beforeCreate");
  },
  created: function () {
    console.log("Main Comp created");
  },
  beforeMount() {
    console.log("Main Comp beforeMounted");
  },
  mounted() {
    console.log("Main Comp mounted");
    // this.message = "update massage!";
  },
  beforeUpdate() {
    console.log("Main Comp beforeUpdated");
  },
  updated() {
    console.log("Main Comp updated");
  },
  beforeDestroy() {
    console.log("Main Comp beforeDestroy");
  },
  destroyed() {
    console.log("Main Comp destroyed");
  },
};
</script>
<style lang=""></style>
