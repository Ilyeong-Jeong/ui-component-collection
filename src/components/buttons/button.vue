<style lang="scss">

  .component-button {    
    @apply bg-blue-primary text-white text-center rounded;

    .component-icon {
      @apply ml-3;
    }

    &.is-disabled {
      @apply bg-grey-dim2 border-grey-dim2 text-grey-dim;
    }

    &.is-loading {
      @apply pointer-events-none;
    }

    &.is-error {
      @apply bg-red-primary;
    }

    &.is-warning {
      @apply bg-yellow-primary;
    }

    &.is-success {
      @apply bg-green-primary;
    }

    &.is-default {
      @apply bg-grey-primary;
    }

    &.is-secondary {
      @apply bg-blue-dim2 text-blue-primary;

      &.is-disabled {
        @apply bg-grey-dim2 border-grey-dim2 text-grey-dim;
      }

      &.is-error {
        @apply bg-red-dim2 text-red-primary;
      }

      &.is-warning {
        @apply bg-yellow-dim2 text-yellow-primary;
      }

      &.is-success {
        @apply bg-green-dim2 text-green-primary;
      }

      &.is-default {
        @apply bg-grey-dim2 text-grey-primary;
      }
    }

    &:hover {
      @apply bg-blue-dim shadow-md;

      &.is-error {
        @apply bg-red-dim;
      }

      &.is-warning {
        @apply bg-yellow-dim;
      }

      &.is-success {
        @apply bg-green-dim;
      }

      &.is-default {
        @apply bg-grey-dim;
      }
    }

    &:active {
      @apply bg-blue-tint shadow-md;

      &.is-error {
        @apply bg-red-tint;
      }

      &.is-warning {
        @apply bg-yellow-tint;
      }

      &.is-success {
        @apply bg-green-tint;
      }

      &.is-default {
        @apply bg-grey-tint;
      }
    }

    &.is-secondary:active {
      @apply bg-blue-primary text-blue-tint;

      &.is-error {
        @apply bg-red-primary text-red-tint;
      }

      &.is-warning {
        @apply bg-yellow-primary text-yellow-tint;
      }

      &.is-success {
        @apply bg-green-primary text-green-tint;
      }

      &.is-default {
        @apply bg-grey-primary text-grey-tint;
      }
    }

    &.is-icon {
      @apply w-8 h-8 justify-center;
      
      .component-icon {
        @apply ml-0;
      }

      &.is-small {
        @apply w-6 h-6;
      }

      &.is-large {
        @apply w-10 h-10;
      }
    }

    &.is-rounded {
      @apply rounded-full;
    }
  }
</style>

<template>
  <button-base
    :class="['component-button', cls]"
    v-bind="$attrs"
    v-on="$listeners"
    :style="style"
  >
    <template slot="icon" v-if="!loading">
      <slot name="icon"></slot>
    </template>

    <template slot="icon" v-else>
      <component-icon v-if="loaderIcon"
        :icon="loaderIcon"
      ></component-icon>
    </template>
    
    <slot></slot>
  </button-base>
</template>

<script>

  /**
   * 기본 버튼 컴포넌트
   */

  import Component  from "../mixins/component";
  import Dimension  from "../mixins/dimension";

  import ButtonBase from "./button-base.vue";
  import Icon       from "../icon.vue";

  export default {
    
    mixins: [Component, Dimension],

    props: {
      loading: {
        type: Boolean
      },

      icon: {
        type: Boolean
      },

      secondary: {
        type: Boolean
      },

      rounded: {
        type: Boolean
      },

      default: {
        type: Boolean
      },

      width: {
        default : null
      },

      height: {
        default : null
      },

      loaderIcon: {
        default: "fas fa-sync-alt fa-spin"
      }
    },

    computed: {
      cls () {
        return this.booleanPropMatcher({
          loading  : 'is-loading',
          icon     : "is-icon",
          secondary: 'is-secondary',
          rounded  : 'is-rounded',
          default  : 'is-default'
        });
      },

      style () {
        return {
          ...this.styleWidth,
          ...this.styleHeight
        }
      },
    },

    components: {
      "button-base"   : ButtonBase,
      "component-icon": Icon
    },
  
  }

</script>