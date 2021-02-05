<template>  
  <colorpicker-sketch 
    class="component-colorpicker" 
    :value="color" 
    @input="updateColor"
  ></colorpicker-sketch>
</template>

<script>

  import VueColor from "vue-color";

  export default {

    data () {
      return {
        color: {}
      }
    },

    methods: {
      updateColor (val) {
        this.$emit("change", val.hex);
      }
    },

    components: {
      "colorpicker-sketch": VueColor.Sketch
    }
  }
</script>