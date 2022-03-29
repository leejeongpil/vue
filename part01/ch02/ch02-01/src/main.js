import Vue from "vue";
import App from "./App.vue";
// import router from "./router";

Vue.config.productionTip = false;

//
import VueRouter from "vue-router";

import Temp01View from "./views/Temp01View.vue";

var routes = [{ path: "/temp01", name: "temp01", component: Temp01View }];

var router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
//

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
