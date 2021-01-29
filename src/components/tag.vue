<style lang="scss">

  .component-tag {
    @apply relative inline-block rounded;
    @apply text-white items-center;

    .tag-wrapper {
      @apply flex px-4 py-1;
      
      .tag-text {
        @apply inline-block w-full;
      }

      .tag-button {
        @apply absolute flex top-0 right-0;
      }
    }

    &.is-editable {
      .tag-wrapper {
        @apply pr-8;
      }
    }

    &.is-small {
      @apply text-small;

      .tag-wrapper {
        @apply px-2 py-half;
      }

      &.is-editable {
        .tag-wrapper {
          @apply pr-6;

          .tag-button {
            top  : -4px;
            right: -4px;
          }
        }
      }
    }

    &.is-large {
      @apply text-large;

      .tag-wrapper {
        @apply px-6 py-2;
      }

      &.is-editable {
        .tag-wrapper {
          @apply pr-10;

          .tag-button {
            top: 6px;
          }
        }
      }      
    }
  }

</style>

<template>
  <div 
    :class="['component-tag', cls, sizeCls]"
    :style="style"
  >
    <div class="tag-wrapper">
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
  </div>
</template>

<script>

  /**
   * 태그 컴포넌트
   */

  import Component from "./mixins/component";
  import Color     from "./mixins/color"; 
  import Size      from "./mixins/size";

  import IconButton from "./buttons/icon-button";

  export default {

    mixins: [Component, Color, Size],

    props: {
      editable: {
        type   : Boolean,
        default: false
      },
    },

    computed: {
      cls () {
        const editCls = this.booleanPropMatcher({
          editable : 'is-editable'
        });

        return [...editCls, this.toColorCls("bg")];
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