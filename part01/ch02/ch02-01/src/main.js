import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//
// import VueRouter from "vue-router";

// import Temp01View from "./views/Temp01View.vue";

// var routes = [{ path: "/temp01", name: "temp01", component: Temp01View }];
// Vue.config.productionTip = false;

// var router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
// });
//
// Vue.use(VueRouter);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
