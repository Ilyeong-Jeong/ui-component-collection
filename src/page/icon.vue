<template>
  <common-panel
    title="Icon"
    desc="Font Awesome base Icon Component Example"
  >
    <template slot="panel-list">

      <component-icon 
        icon="fas fa-check-circle"
        color="bluePrimary"
      ></component-icon>

      <component-icon 
        icon="fas fa-times-circle"
        color="redPrimary"
      ></component-icon>

      <component-icon 
        icon="fas fa-bell"
        color="yellowPrimary"
      ></component-icon>

      <component-icon 
        icon="fas fa-tree"
        color="greenPrimary"
      ></component-icon>

      <component-icon 
        icon="fas fa-user"
        color="black"
      ></component-icon>

    </template>  
  </common-panel>
</template>

<script>

  import Icon from "../components/icon.vue";

  export default {

    components: {
      "component-icon": Icon
    }

  }
  
</script>