<template>
  <common-panel
    title="Tag"
    desc="Tag Component Example"
  >
    <template slot="panel-list">
      <component-tag color="greyPrimary">tag</component-tag>
      <component-tag color="greyPrimary" :editable="true">tag</component-tag>
      <component-tag color="bluePrimary">tag</component-tag>
      <component-tag color="bluePrimary" :editable="true">tag</component-tag>
      <component-tag color="redPrimary">tag</component-tag>
      <component-tag color="redPrimary" :editable="true">tag</component-tag>
      <component-tag color="yellowPrimary">tag</component-tag>
      <component-tag color="yellowPrimary" :editable="true">tag</component-tag>
      <component-tag color="greenPrimary">tag</component-tag>
      <component-tag color="greenPrimary" :editable="true">tag</component-tag>
      <component-tag small color="greyPrimary">tag</component-tag>
      <component-tag small color="greyPrimary" :editable="true">tag</component-tag>
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