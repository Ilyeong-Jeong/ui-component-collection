<template>
  <common-panel
    title="Radio"
    desc="Radio Component Example"
  >
    <template slot="panel-list">
      <component-radio
        :checked="valueRadio"
        name="test"
        value="case1"
        @change="(val) => valueRadio = val"
      ></component-radio>

      <component-radio
        :checked="valueRadio"
        disabled
        name="test"
        value="case1"
        @change="(val) => valueRadio = val"
      ></component-radio>

      <component-radio
        :checked="valueRadio"
        error
        name="test"
        value="case2"
        @change="(val) => valueRadio = val"
      ></component-radio>

      <component-radio
        :checked="valueRadio"
        warning
        name="test"
        value="case3"
        @change="(val) => valueRadio = val"
      ></component-radio>

      <component-radio
        :checked="valueRadio"
        success
        name="test"
        value="case4"
        @change="(val) => valueRadio = val"
      ></component-radio>

      <component-radio
        :checked="valueRadio"
        :size="16"
        name="test"
        value="case5"
        @change="(val) => valueRadio = val"
      ></component-radio>

      <component-radio
        :checked="valueRadio"
        :size="32"
        name="test"
        value="case6"
        @change="(val) => valueRadio = val"
      ></component-radio>
    </template>  
  </common-panel>
</template>

<script>

  import Radio from "../components/radio.vue";

  export default {

    data () {
      return {
        valueRadio: null
      }
    },

    components: {
      "component-radio": Radio
    }

  }
  
</script>