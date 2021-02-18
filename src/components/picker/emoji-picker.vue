<template>
  <picker
    class="component-emoji-picker"
    :showCategories="false"
    :showSearch="true"
    :perLine="12"
    :native="true"
    :title="'Pick a Emoji'"
    @select="select"
  ></picker>
</template>

<script>

  /**
   * 이모지 피커 컴포넌트
   */

  import Component from "../mixins/component";
  
  import { Picker } from 'emoji-mart-vue';

  export default {

    mixins: [Component],

    methods: {
      select (emoji) {
        this.$emit('select', {
          id    : emoji.id, 
          skin  : emoji.skin, 
          native: emoji.native
        });
      }
    },

    components: {
      "picker": Picker
    }
  }

</script>