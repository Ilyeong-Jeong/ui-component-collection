<style lang="scss">

  .component-divider {
    @apply w-full h-px my-2 bg-grey-dim;

    &.is-vertical {
      @apply w-px h-full mx-2;
    }
  }

</style>

<template>
  <div :class="['component-divider', cls]"></div>
</template>

<script>

  /**
   * Divider 컴포넌트
   */

  import Component from "./mixins/component";

  export default {

    mixins: [Component],

    props: {
      vertical: {
        type: Boolean
      }
    },

    computed: {
      cls () {
        return this.booleanPropMatcher({
          vertical: "is-vertical",
        })
      }
    },

  }

</script>