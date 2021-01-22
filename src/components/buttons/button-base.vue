<style lang="scss">

  .component-button-base {
    @apply h-8 text-base;
    @apply inline-flex items-center cursor-pointer;
    @apply overflow-hidden whitespace-nowrap;

    &.is-disabled, &.is-loading {
      @apply pointer-events-none;
    }

    .component-icon {
      @apply w-6 h-6;
    }

    .button-text {
      @apply px-6 w-full text-center ;
    }

    &.has-icon {
      .button-text {
        @apply pr-4 pl-2 ;
      }
    }

    &.is-small {
      @apply h-6 text-small;

      .component-icon {
        @apply w-4 h-4 text-small;
      }
    }

    &.is-large {
      @apply h-10 font-bold text-large rounded-md;

      .component-icon {
        @apply w-8 h-8 text-header;
      }
    }
  }

</style>

<template>
  <component 
    :is="tagName" 
    :class="['component-button-base', cls, stateCls, sizeCls]"
    :style="style"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot name="icon"></slot>
    <div v-if="$slots.default" class="button-text">
      <slot></slot>
    </div>
  </component>
</template>

<script>

  /**
   * 모든 커스텀 버튼의 베이스가 되는 버튼 컴포넌트
   */

  import Component from "../mixins/component";
  import State     from "../mixins/state";
  import Size      from "../mixins/size";
  import Dimension from "../mixins/dimension";
  import Color     from "../mixins/color"; 

  export default {

    mixins: [Component, State, Size, Dimension, Color],

    props: {
      tagName: {
        default: "a"
      }
    },

    computed: {
      hasIcon () {
        return this.$slots.icon;
      },

      cls () {
        return this.booleanPropMatcher({
          hasIcon: 'has-icon'
        });
      },

      style () {
        return {
          ...this.toColorStyle("backgroundColor"),
          ...this.styleWidth,
          ...this.styleHeight
        }
      }
    }

  }

</script>