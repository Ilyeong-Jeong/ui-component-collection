<style lang="scss">

</style>

<template>
  <dashboard-widget
    class="temp-component-dashboard-widget"
    title="Temp Widget"
  >
    임시로 만든 대시보드 위젯입니다.
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