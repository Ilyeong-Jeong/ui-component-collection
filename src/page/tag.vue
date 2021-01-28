<template>
  <common-panel
    title="Tag"
    desc="Tag Component Example"
  >
    <template slot="panel-list">
      <component-tag color="greyPrimary">tag</component-tag>
      <component-tag color="greyPrimary" :editable="true">tag</component-tag>
      <component-tag large color="greyPrimary">tag</component-tag>
      <component-tag large color="greyPrimary" :editable="true">tag</component-tag>
    </template>  
  </common-panel>
</template>

<script>

  import Tag from "../components/tag.vue";

  export default {

    components: {
      "component-tag": Tag
    }

  }
  
</script>