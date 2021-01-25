<style lang="scss">

  .component-outline-button {    
    @apply bg-white text-blue-primary text-center;
    @apply rounded border border-blue-primary;

    .component-icon {
      @apply ml-3;
    }

    &.is-disabled {
      @apply bg-white border-grey-dim text-grey-dim;
    }

    &.is-loading {
      @apply pointer-events-none;
    }

    &.is-error {
      @apply text-red-primary border-red-primary;
    }

    &.is-warning {
      @apply text-yellow-primary border-yellow-primary;
    }

    &.is-success {
      @apply text-green-primary border-green-primary;
    }

    &.is-default {
      @apply text-grey-primary border-grey-primary;
    }

    &:hover {
      @apply shadow;
    }

    &:active {
      @apply text-blue-tint border-blue-tint shadow-md;

      &.is-error {
        @apply text-red-tint border-red-tint;
      }

      &.is-warning {
        @apply text-yellow-tint border-yellow-tint;
      }

      &.is-success {
        @apply text-green-tint border-green-tint;
      }

      &.is-default {
        @apply text-grey-tint border-grey-tint;
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
    :class="['component-outline-button', cls]"
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
   * 스타일 아웃라인 버튼 컴포넌트
   */

  import Component  from "../mixins/component";
  import Dimension  from "../mixins/dimension";

  import ButtonBase from "./button-base.vue";
  import Icon       from "../icon.vue";

  export default {
    
    mixins: [Component, Dimension],

    props: {
      icon: {
        type: Boolean
      },

      loading: {
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
          loading: 'is-loading',
          icon   : "is-icon",
          rounded: 'is-rounded',
          default: 'is-default'
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