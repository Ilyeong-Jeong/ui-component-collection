<style lang="scss">

  .component-emoji {
   
  }

</style>

<template>
  <emoji 
    class="component-emoji"
    :native="true"
    :emoji="{ id: id, skin: skin }" 
    :size="size" 
  />
</template>

<script>

  /**
   * 이모지 컴포넌트
   */

  import Component from "./mixins/component";
  
  import { Emoji } from 'emoji-mart-vue';

  export default {

    mixins: [Component],

    props: {
      id: {
        type: String
      },

      skin: {
        type   : Number,
        default: 1
      },
      
      size: {
        type   : Number,
        default: 16
      }
    },

    components: {
      "emoji": Emoji
    }
  }

</script>