<template>
  <page-panel
    title="Link"
    desc="Link Component Example"
  >
    <template slot="panel-list">
      <component-link>default link</component-link>
      <component-link active>active link</component-link>
      <component-link error>error link</component-link>
      <component-link disabled>disabled link</component-link>
      <component-link reversal>reversal link</component-link>
    </template>  
  </page-panel>
</template>

<script>

  import Link from "../components/link.vue";

  export default {

    components: {
      "component-link": Link
    }

  }
  
</script>