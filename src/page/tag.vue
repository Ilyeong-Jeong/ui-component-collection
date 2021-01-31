<template>
  <page-panel
    title="Tags"
    desc="Tag Component Example"
  >
    <page-block
      name="Default Tag"
    >
      <template slot="block-list">
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
    </page-block> 

    <page-block
      name="Simple Tag"
    >
      <template slot="block-list">
        <component-simple-tag :tags="tagData"></component-simple-tag>
        <component-simple-tag :tags="tagMultiData"></component-simple-tag>
        <component-simple-tag :tags="tagManyData"></component-simple-tag>
      </template>
    </page-block>
  </page-panel>
</template>

<script>

  import Tag       from "../components/tags/tag.vue";
  import SimpleTag from "../components/tags/simple-tag.vue";

  export default {

    data () {
      return {
        tagData: [ 
          { key: 1, color: '#1574F6' } 
        ],

        tagMultiData: [
          { key: 1, color: '#1574F6' },
          { key: 2, color: '#ED5454' },
          { key: 3, color: '#FDB05E' }
        ],

        tagManyData: [
          { key: 1, color: '#1574F6' },
          { key: 2, color: '#ED5454' },
          { key: 3, color: '#FDB05E' },
          { key: 4, color: '#2C8E6E' },
          { key: 5, color: '#777B94' }
        ]
      }
    },

    components: {
      "component-tag"       : Tag,
      "component-simple-tag": SimpleTag
    }

  }
  
</script>