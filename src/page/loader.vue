<template>
  <common-panel
    title="Loader"
    desc="Loader Component Example"
  >
    <template slot="panel-list">
      <component-loader></component-loader>
      <component-loader kind="spin"></component-loader>
      <component-loader kind="bounce"></component-loader>
    </template>  
  </common-panel>
</template>

<script>

  import Loader from "../components/loader.vue";

  export default {

    components: {
      "component-loader": Loader
    }

  }
  
</script>