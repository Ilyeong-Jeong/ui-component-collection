<style lang="scss">

  .layout-side-menu {
    @apply bg-grey-dim2 w-64 p-4;
  }

</style>

<template>
  <div class="layout-side-menu">
    Side Menu Space (tree 추가 예정)
  </div>
</template>

<script>

  import Tree     from "../../components/tree/tree.vue";
  import MenuItem from "./menu-item.vue";

  export default {

    data () {
      return {
        
      }
    },

    components: {
      "component-menu-item": MenuItem
    }

  }
  
</script>