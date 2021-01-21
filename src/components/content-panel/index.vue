<style lang="scss">

  .component-content-panel {
    @apply h-full bg-white;
    @apply border border-grey-dim rounded shadow-sm;
    @apply flex flex-col;

    .content-panel-header {
      @apply h-12 px-4 py-2 border-b border-grey-dim;
      @apply flex-none flex;
    }

    .content-panel-body {
      @apply p-4 flex-1 overflow-auto;
    }

    &.has-tab {
      .content-panel-body {
        @apply pt-0;
      }
    }

    .content-panel-footer {
      @apply p-4 pt-0;
    }
  }

</style>

<template>
  <section :class="['component-content-panel', cls]"
    :style="style"
  >
    
    <div class="content-panel-header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>

    <div class="content-panel-tab" v-if="$slots.tab">
      <slot name="tab"></slot>
    </div>

    <div class="content-panel-body"
      width="100%"
      :height="styleHeight.height"
    >
      <slot></slot>
    </div>

    <div class="content-panel-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </section>
</template>
   
<script>

  import Component from "../mixins/component";
  import Dimension from "../mixins/dimension";

  export default {

    mixins: [Component, Dimension],

    props: {
      height: {
        defalut: "100%"
      }
    },

    computed: {
      cls () {
        if(this.$slots.tab) {
          return "has-tab";
        }
      },

      style () {
        return {
          ...this.styleWidth,
          ...this.styleHeight,
        }
      }
    }

  }

</script>