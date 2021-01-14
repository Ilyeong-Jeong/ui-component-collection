<template>
  <common-panel
    title="Tree"
    desc="Tree Component Example"
  >
    <component-tree
      :root-data="treeData"
      data-type="array"
    ></component-tree>
  </common-panel>
</template>

<script>

  import Tree from "../components/tree/tree.vue";

  export default {

    data () {
      return {
        treeData: [
          {
            key: "1",
            parentKey: null,
            folded   : false,
            rank     : 0,
            data     : {
              name: "Test1",
            },
            options: {

            }
          },
          {
            key: "11",
            parentKey: "1",
            folded   : false,
            rank     : 1,
            data     : {
              name: "Test11",
            },
            options: {

            }
          },
          {
            key: "12",
            parentKey: "1",
            folded   : false,
            rank     : 0,
            data     : {
              name: "Test12",
            },
            options: {
            }
          },
          {
            key: "111",
            parentKey: "11",
            folded   : false,
            rank     : 0,
            data     : {
              name: "Test111",
            },
            options: {

            }
          },
          {
            key: "112",
            parentKey: "12",
            folded   : false,
            rank     : 0,
            data     : {
              name: "Test112",
            },
            options: {

            }
          },
        ],
      }
    },

    components: {
      "component-tree": Tree
    }

  }
  
</script>