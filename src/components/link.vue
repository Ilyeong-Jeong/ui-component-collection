<style lang="scss">

  .component-link {
    @apply text-grey-primary cursor-pointer;

    &:hover {
      @apply text-blue-dim;
    }

    &:active {
      @apply text-blue-tint;
    }

    &.is-active {
      @apply text-blue-primary;
    }

    &.is-error {
      @apply text-red-primary;
    }

    &[disabled], &.is-disabled {
      @apply text-grey-dim pointer-events-none;
    }

    &.is-reversal {
      @apply text-blue-primary;

      &:hover {
        @apply text-grey-dim;
      }

      &:active {
        @apply text-grey-tint;
      }    
    }
  }

</style>

<template>
  <a
    v-bind="$attrs"
    v-on="$listeners"
    :class="['component-link', stateCls, cls]"
  >
    <slot></slot>
  </a>
</template>

<script>

  /**
    링크 컴포넌트
  */

  import Component from "./mixins/component";
  import State     from "./mixins/state";

  export default {

    mixins: [Component, State],

    props: {
      reversal: {
        type: Boolean
      }
    },

    computed: {
      cls () {
        return this.booleanPropMatcher({
          reversal: "is-reversal",
        })
      }
    },

  }

</script>