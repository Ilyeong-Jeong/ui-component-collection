<style lang="scss">

  .layout-container {
    @apply w-full h-full bg-white overflow-auto;
  }

</style>

<template>
  <div class="layout-container">
    <component-pretty-scroll>
      <router-view></router-view>
    </component-pretty-scroll>
  </div>
</template>

<script>

  import PrettyScroll from "components/pretty-scroll.vue";

  export default {
    components: {
      "component-pretty-scroll": PrettyScroll,
    }
  }
  
</script>