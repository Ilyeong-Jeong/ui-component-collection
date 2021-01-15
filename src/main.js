import Vue from "vue";

import Router from "./router";

import Style from "./style/app.scss";

import CommonComponentPanel from "./components/common/component-panel.vue";

Vue.component('common-panel', CommonComponentPanel);

new Vue({
  router: Router,
  render: (h) => h("router-view")
}).$mount("#app");