<style lang="scss">

  .component-icon-button {
    @apply inline-flex items-center justify-center text-grey-primary;
    @apply w-8 h-8;

    &.is-active {
      @apply text-blue-primary;
    }

    &.is-error {
      @apply text-red-primary;
    }

    &.is-warning {
      @apply text-yellow-primary;
    }

    &.is-success {
      @apply text-green-primary;
    }

    &.is-disabled {
      @apply text-grey-dim;
    }

    &.is-reversal {
      @apply text-white;
    }

    &:hover {
      @apply text-blue-dim;

      &.is-error {
        @apply text-red-dim;
      }

      &.is-warning {
        @apply text-yellow-dim;
      }

      &.is-success {
        @apply text-green-dim;
      }
    }

    &:active {
      @apply text-blue-tint;

      &.is-error {
        @apply text-red-tint;
      }

      &.is-warning {
        @apply text-yellow-tint;
      }

      &.is-success {
        @apply text-green-tint;
      }      
    }

    &.is-autowidth {
      @apply w-auto;
    }

    &.is-autoheight {
      @apply h-auto;
    }
  }

</style>

<template>
  <button-base
    :class="['component-icon-button', cls]"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <component-icon
      slot="icon"
      :icon="icon"
      :autoWidth="autoWidth"
      :autoHeight="autoHeight"
    >
    </component-icon>
  </button-base>
</template>

<script>

  /**
   * 아이콘 버튼 컴포넌트
   */

  import Component  from "../mixins/component";

  import ButtonBase from "./button-base.vue";
  import Icon       from "../icon.vue";

  export default {

    mixins: [Component],

    props: {
      icon: {
        required: true
      },

      reversal: {
        type: Boolean
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
        return this.booleanPropMatcher({
          reversal  : 'is-reversal',
          autoWidth : 'is-autowidth',
          autoHeight: 'is-autoheight',
        })
      }
    },
    
    components: {
      "button-base"   : ButtonBase,
      "component-icon": Icon
    }

  }

</script>