import Vue       from "vue";
import VueRouter from "vue-router";

import App from "../app.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode  : "history",
  base  : "/",
  routes: [
    {
      name     : 'root', 
      path     : '/', 
      component: App, 
      redirect : 'index',
      children : [
        {
          name     : 'index',
          path     : 'index',
          component: () => import("../page/index.vue")
        },
        {
          name     : 'avatar',
          path     : 'avatar',
          component: () => import("../page/avatar.vue")          
        },
        {
          name     : 'dashboardWidget',
          path     : 'dashboardwidget',
          component: () => import("../page/dashboard-widget.vue")          
        },
        {
          name     : 'link',
          path     : 'link',
          component: () => import("../page/link.vue")          
        },
        {
          name     : 'tree',
          path     : 'tree',
          component: () => import("../page/tree.vue")          
        }
      ]
    },
    
    // notfound
    { path: '*', redirect: '/' }    
  ]
});

export default router;