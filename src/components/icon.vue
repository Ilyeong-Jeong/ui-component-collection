<style lang="scss">

  .component-icon {
    @apply w-8 h-8 inline-flex justify-center items-center;
    @apply text-large text-center;

    &.is-autowidth {
      @apply w-auto;
    }

    &.is-autoheight {
      @apply h-auto;
    }
  }

</style>

<template>
  <span :class="['component-icon', cls]" :style="style">
    <i :class="icon"></i>
  </span>
</template>

<script>

  /**
   * Font Awesome 기반 아이콘 컴포넌트
   */

  import Component from "./mixins/component";
  import Color     from "./mixins/color";

  export default {

    mixins: [Component, Color],

    props: {
      /** Font Awesome Icon Class */
      icon: {

      },

      autoWidth: {
        type: Boolean
      },

      autoHeight: {
        type: Boolean
      }
    },

    computed: {
      cls () {
        const dimensionCls = this.booleanPropMatcher({
          autoWidth : 'is-autowidth',
          autoHeight: 'is-autoheight',
        });

        return [...dimensionCls, this.toColorCls("text")];
      },

      style () {
        return this.toColorStyle("color");
      }
    },

  }

</script>