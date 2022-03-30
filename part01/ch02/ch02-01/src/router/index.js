import Vue from "vue";
import VueRouter from "vue-router";

import Temp01View from "../views/Temp01View.vue";

Vue.use(VueRouter);

var routes = [{ path: "/temp01", name: "temp01", component: Temp01View }];

var router = new VueRouter({
  //   mode: "history",
  //   base: process.env.BASE_URL,
  routes,
});

export default router;
