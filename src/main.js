import Vue from "vue";

import Router from "./router";

import Style from "./style/app.scss";

import PagePanel from "./page/components/page-panel.vue";
import PageBlock from "./page/components/page-block.vue";

import TreeItem from "./components/tree/tree-item.vue";

Vue.component('page-panel', PagePanel);
Vue.component('page-block', PageBlock);

Vue.component('component-tree-item', TreeItem);

new Vue({
  router: Router,
  render: (h) => h("router-view")
}).$mount("#app");