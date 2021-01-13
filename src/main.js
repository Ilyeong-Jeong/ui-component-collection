import Vue from "vue";

import Router from "./router";

import Style from "./style/app.scss";

new Vue({
  router: Router,
  render: (h) => h("router-view")
}).$mount("#app");