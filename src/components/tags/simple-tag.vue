<style lang="scss">

  .component-simple-tag {
    @apply flex items-center justify-center;

    .tag-summary {
      @apply relative w-5 h-5;
      @apply border-2 border-solid border-white rounded-full;
    }
  }

</style>

<template>
  <div class="component-simple-tag">
    <span 
      class="tag-summary" 
      v-for="tag in vTags"
      :key="tag.key"
      :style="tag.style"
    ></span>
  </div>
</template>

<script>

  /**
   * 태그를 간략하게 보여주는 컴포넌트
   */

  import Component from "../mixins/component";
  import Color     from "../mixins/color"; 

  export default {

    mixins: [Component, Color],

    props: {
      tags: {
        type: Array,
        default () {
          return [];
        }
      }
    },

    computed: {
      vTags () {
        return this.tags.map((v, idx) => {
          return Object.assign({}, v, {
            style: {
              'background-color': v.color,
              'left': (() => {
                if (idx == 0) {
                  return 0
                } else {
                  return (idx * -6) + 'px'
                }
              })(),
            }
          })
        })
      }
    }

  }

</script>