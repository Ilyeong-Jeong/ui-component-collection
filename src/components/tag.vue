<style lang="scss">

  .component-tag {
    @apply inline-flex px-2 py-half rounded;
    @apply text-white items-center;

    .tag-text {
      @apply flex-auto;
    }

    .tag-button {
      @apply w-4 h-4 ml-1;

      flex: 0 0 auto;
    }

    &.is-large {
      @apply px-3 py-1 text-large;
    }
  }

</style>

<template>
  <div 
    :class="['component-tag', cls, sizeCls]"
    :style="style"
  >
    <span class="tag-text">
      <slot></slot>
    </span>

    <component-icon-button
      v-if="editable"
      class="tag-button"
      v-bind="$attrs"
      v-on="$listeners" 
      icon="fas fa-times"
      :reversal="true"
    ></component-icon-button>
  </div>
</template>

<script>

  /**
   * 태그 컴포넌트
   */

  import Component from "./mixins/component";
  import Size      from "./mixins/size";
  import Color     from "./mixins/color"; 

  import IconButton from "./buttons/icon-button";

  export default {

    mixins: [Component, Size, Color],

    props: {
      editable: {
        type   : Boolean,
        default: false
      },
    },

    computed: {
      cls () {
        return this.toColorCls("bg");
      },

      style () {
        return {
          ...this.toColorStyle("backgroundColor")
        }
      }
    },

    components: {
      "component-icon-button": IconButton,
    }

  }

</script>