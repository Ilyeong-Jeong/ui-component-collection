<template>
  <page-panel
    title="Divider"
    desc="Divider Component Example"
  >
    <page-block
      name="Default Divider"
    >
      <component-content-panel
        :width="400"
        :height="200"
      >
        <div class="h-full flex justify-center items-center">
          <component-divider></component-divider>
        </div>
      </component-content-panel>
    </page-block>  

    <page-block
      name="Vertical Divider"
    >
      <component-content-panel
        :width="400"
        :height="200"
      >
        <div class="h-full flex justify-center items-center">
          <component-divider vertical></component-divider>
        </div>  
      </component-content-panel>  
    </page-block>
  </page-panel>
</template>

<script>

  import Divider      from "../components/divider.vue";
  import ContentPanel from "../components/content-panel/index.vue";

  export default {

    components: {
      "component-divider"      : Divider,
      "component-content-panel": ContentPanel
    }

  }
  
</script>