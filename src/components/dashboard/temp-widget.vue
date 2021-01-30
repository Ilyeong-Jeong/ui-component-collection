<style lang="scss">

</style>

<template>
  <dashboard-widget
    class="temp-component-dashboard-widget"
    title="Temp Widget"
  >
    This is a dashboard widget that was created temporarily. Try adjusting the size and position.
  </dashboard-widget>
</template>

<script>

  import DashboardWidget from "./widget";

  export default {

    components: {
      "dashboard-widget": DashboardWidget
    }
    
  }

</script>