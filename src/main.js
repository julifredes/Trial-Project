import Vue from "vue";
import App from "./App.vue";
import "tailwindcss/tailwind.css";
import "../public/css/main.css";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
