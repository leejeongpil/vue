import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "../view/MainView";
// import SignInView from "../view/SignInView";

Vue.use(VueRouter);// 전역으로 사용하겠다느 뜻

console.log("router/index.js")

var routes = [
  { path: "/", name: "main", component: MainView },
  //   { path: "/signIn", name: "signIn", component: SignInView },
  {
    path: "/signIn",
    name: "signIn",
    component: () => import("../view/SignInView"),
  },
];

var router = new VueRouter({
  routes,
});

export default router;
