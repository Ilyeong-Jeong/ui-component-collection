<template>
  <common-panel
    title="Avatar"
    desc="Avatar Component Example"
  >
    <component-avatar username="Fran"></component-avatar>
    <component-avatar username="Fran" error></component-avatar>
    <component-avatar username="Fran" :size="48"></component-avatar>
    <component-avatar username="Fran" error src="https://picsum.photos/200" :size="48"></component-avatar>
  </common-panel>
</template>

<script>

  import Avatar from "../components/avatar.vue";

  export default {

    components:{
      "component-avatar": Avatar
    }

  }
  
</script>