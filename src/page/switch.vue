<template>
  <page-panel
    title="Switch"
    desc="Switch Component Example"
  >
    <template slot="panel-list">
      <component-switch
        :checked="checked"
        @change="(val) => checked = val"
      ></component-switch>

      <component-switch
        disabled
        :checked="checked"
        @change="(val) => checked = val"
      ></component-switch>

      <component-switch
        error
        :checked="checked"
        @change="(val) => checked = val"
      ></component-switch>

      <component-switch
        warning
        :checked="checked"
        @change="(val) => checked = val"
      ></component-switch>

      <component-switch
        success
        :checked="checked"
        @change="(val) => checked = val"
      ></component-switch>

      <component-switch
        :size="16"
        :checked="checked"
        @change="(val) => checked = val"
      ></component-switch>

      <component-switch
        :size="32"
        :checked="checked"
        @change="(val) => checked = val"
      ></component-switch>
    </template>  
  </page-panel>
</template>

<script>

  import Switch from "../components/switch.vue";

  export default {

    data () {
      return {
        checked: false
      }
    },

    components: {
      "component-switch": Switch
    }

  }
  
</script>