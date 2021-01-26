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
          name     : 'button',
          path     : 'button',
          component: () => import("../page/button.vue")          
        },
        {
          name     : 'checkbox',
          path     : 'checkbox',
          component: () => import("../page/checkbox.vue")          
        },
        {
          name     : 'dashboardWidget',
          path     : 'dashboardwidget',
          component: () => import("../page/dashboard-widget.vue")          
        },
        {
          name     : 'icon',
          path     : 'icon',
          component: () => import("../page/icon.vue")          
        },
        {
          name     : 'input',
          path     : 'input',
          component: () => import("../page/input.vue")          
        },
        {
          name     : 'link',
          path     : 'link',
          component: () => import("../page/link.vue")          
        },
        {
          name     : 'messagebox',
          path     : 'messagebox',
          component: () => import("../page/messagebox.vue")          
        },
        {
          name     : 'modal',
          path     : 'modal',
          component: () => import("../page/modal.vue")          
        },
        {
          name     : 'prettyScroll',
          path     : 'prettyScroll',
          component: () => import("../page/pretty-scroll.vue")          
        },
        {
          name     : 'radio',
          path     : 'radio',
          component: () => import("../page/radio.vue")          
        },
        {
          name     : 'switch',
          path     : 'switch',
          component: () => import("../page/switch.vue")          
        },
        {
          name     : 'tab',
          path     : 'tab',
          component: () => import("../page/tab.vue")          
        },
        {
          name     : 'toaster',
          path     : 'toaster',
          component: () => import("../page/toaster.vue")          
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