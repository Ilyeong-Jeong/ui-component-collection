<style lang="scss">

  .layout {
    @apply w-full h-full flex flex-row;
  }

</style>

<template>
  <div class="layout">
    <ui-side-menu></ui-side-menu>
    <ui-container></ui-container>
  </div>
</template>

<script>

  import SideMenu  from "./side-menu.vue";
  import Container from "./container.vue";

  export default {
    components: {
      "ui-side-menu": SideMenu,
      "ui-container": Container
    }
  }
  
</script>