<template>
  <page-panel
    title="Checkbox"
    desc="Checkbox Component Example"
  >
    <template slot="panel-list">
      
      <component-checkbox
        :checked="checked"
        @change="(val) => checked = val"
      ></component-checkbox>

      <component-checkbox
        :checked="checked"
        disabled 
        @change="(val) => checked = val"
      ></component-checkbox>

      <component-checkbox
        :checked="checked"
        error 
        @change="(val) => checked = val"
      ></component-checkbox>

      <component-checkbox
        :checked="checked"
        warning 
        @change="(val) => checked = val"
      ></component-checkbox>

      <component-checkbox
        :checked="checked"
        success 
        @change="(val) => checked = val"
      ></component-checkbox>

      <component-checkbox
        :checked="checked"
        :size="16"
        @change="(val) => checked = val"
      ></component-checkbox>

      <component-checkbox
        :checked="checked"
        :size="32"
        @change="(val) => checked = val"
      ></component-checkbox>

    </template>  
  </page-panel>
</template>

<script>

  import Checkbox from "../components/checkbox.vue";

  export default {

    data () {
      return {
        checked: false
      }
    },

    components: {
      "component-checkbox": Checkbox
    }

  }
  
</script>