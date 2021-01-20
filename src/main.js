import Vue from "vue";

import Router from "./router";

import Style from "./style/app.scss";

import CommonComponentPanel from "./components/common/component-panel.vue";
import CommonComponentBlock from "./components/common/component-block.vue";

import TreeItem from "./components/tree/tree-item.vue";

Vue.component('common-panel', CommonComponentPanel);
Vue.component('common-block', CommonComponentBlock);

Vue.component('component-tree-item', TreeItem);

new Vue({
  router: Router,
  render: (h) => h("router-view")
}).$mount("#app");