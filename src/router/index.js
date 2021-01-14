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
      redirect : 'dashboard',
      children : [
        {
          name     : 'dashboard',
          path     : 'dashboard',
          component: () => import("../page/dashboard.vue")
        },
        {
          name     : 'avatar',
          path     : 'avatar',
          component: () => import("../page/avatar.vue")          
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