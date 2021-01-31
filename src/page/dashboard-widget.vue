<template>
  <page-panel
    title="Dashboard Widget"
    desc="Resizable & Reordering Dashboard Widget Component Example, Adjust the order and size."
  >
    <component-widget-frame
      :widgets="widgets"
    ></component-widget-frame>
  </page-panel>
</template>

<script>

  import WidgetFrame from "../components/dashboard/widget-frame.vue";

  export default {

    data () {
      return {
        widgets: [
          {
            id        : "temp1",
            type      : "temp",
            w         : 1,
            h         : 2,
            tW        : 400,
            tH        : 400,
            activated : false,
            resizeable: true,
            component : () => import("../components/dashboard/temp-widget.vue")
          },
          {
            id        : "temp2",
            type      : "temp",
            w         : 1,
            h         : 2,
            tW        : 400,
            tH        : 400,
            activated : false,
            resizeable: true,
            component : () => import("../components/dashboard/temp-widget.vue")
          },
          {
            id        : "temp3",
            type      : "temp",
            w         : 1,
            h         : 1,
            tW        : 400,
            tH        : 200,
            activated : false,
            resizeable: true,
            component : () => import("../components/dashboard/temp-widget.vue")
          },
          {
            id        : "temp4",
            type      : "temp",
            w         : 2,
            h         : 2,
            tW        : 800,
            tH        : 400,
            activated : false,
            resizeable: true,
            component : () => import("../components/dashboard/temp-widget.vue")
          },
          {
            id        : "temp5",
            type      : "temp",
            w         : 1,
            h         : 3,
            tW        : 400,
            tH        : 600,
            activated : false,
            resizeable: true,
            component : () => import("../components/dashboard/temp-widget.vue")
          }
        ]
      }
    },

    components: {
      "component-widget-frame": WidgetFrame
    }

  }
  
</script>