<template>
  <page-panel
    title="Loader"
    desc="Loader Component Example"
  >
    <page-block
      name="Dot Loader"
    >
      <template slot="block-list">
        <component-loader></component-loader>
        <component-loader color="#1574F6"></component-loader>
        <component-loader color="#ED5454"></component-loader>
        <component-loader color="#FDB05E"></component-loader>
        <component-loader color="#2C8E6E"></component-loader>
      </template>
    </page-block>

    <page-block
      name="Spin Loader"
    >
      <template slot="block-list">
        <component-loader kind="spin"></component-loader>
        <component-loader kind="spin" color="#1574F6"></component-loader>
        <component-loader kind="spin" color="#ED5454"></component-loader>
        <component-loader kind="spin" color="#FDB05E"></component-loader>
        <component-loader kind="spin" color="#2C8E6E"></component-loader>
      </template>
    </page-block>

    <page-block
      name="Bounce Loader"
    >
      <template slot="block-list">
        <component-loader kind="bounce"></component-loader>
        <component-loader kind="bounce" color="#1574F6"></component-loader>
        <component-loader kind="bounce" color="#ED5454"></component-loader>
        <component-loader kind="bounce" color="#FDB05E"></component-loader>
        <component-loader kind="bounce" color="#2C8E6E"></component-loader>
      </template>
    </page-block>
  </page-panel>
</template>

<script>

  import Loader from "../components/loader.vue";

  export default {

    components: {
      "component-loader": Loader
    }

  }
  
</script>