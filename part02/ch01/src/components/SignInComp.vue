<template>
  <div>
    <h1 style="color: blue">Sign In Comp</h1>
    <button @click="signInButtonClick">SignIn</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signInButtonClick() {
      console.log("signInButtonClick");
      console.log(this.email);
      console.log(this.password);
      alert("success sign in");
      this.email = "ljp";
      this.password = "123";
      console.log(this.email);
      console.log(this.password);
      localStorage.setItem("email", this.email);
      localStorage.setItem("password", this.password);
      this.$router.push("/");
    },
  },
  beforeCreate() {
    console.log("SignIn Comp beforeCreate");
  },
  created: function () {
    console.log("SignIn Comp created");
  },
  beforeMount() {
    console.log("SignIn Comp beforeMounted");
  },
  mounted() {
    console.log("SignIn Comp mounted");
    // this.message = "update massage!";
  },
  beforeUpdate() {
    console.log("SignIn Comp beforeUpdated");
  },
  updated() {
    console.log("SignIn Comp updated");
  },
  beforeDestroy() {
    console.log("SignIn Comp beforeDestroy");
  },
  destroyed() {
    console.log("SignIn Comp destroyed");
  },
};
</script>
<style lang=""></style>
