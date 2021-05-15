import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
//Me traigo router para que funcione aqui
import router from "@/router";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
