<template>
  <page-panel
    title="Emoji"
    desc="Emoji Component Example"
  >
    <template slot="panel-list">
      <component-emoji 
        id="+1"
      ></component-emoji>  

      <component-emoji 
        id="whale"
        :size="32"
      ></component-emoji> 

      <component-emoji 
        id="grinning"
        :size="48"
      ></component-emoji> 

      <component-emoji 
        id="hatching_chick"
        :size="64"
      ></component-emoji> 
    </template>  
  </page-panel>
</template>

<script>

  import Emoji from "../components/emoji.vue";

  export default {

    components: {
      "component-emoji": Emoji
    }

  }
  
</script>