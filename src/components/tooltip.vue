<style lang="scss">

  .component-tooltip {
    @apply inline-block;
  }

  .tooltip {
    @apply absolute p-2 z-100;
    @apply text-white bg-grey-tint opacity-90 shadow-sm;
  }

  .tooltip .tooltip-arrow {
    @apply w-0 h-0 m-1 absolute;
    @apply border-grey-tint border-solid;
  }

  .tooltip[x-placement^="top"] {
    @apply mb-1;
  }
  .tooltip[x-placement^="bottom"] {
    @apply mt-1;
  }
  .tooltip[x-placement^="right"] {
    @apply ml-1;
  }
  .tooltip[x-placement^="left"] {
    @apply mr-1;
  }

  .tooltip[x-placement^="right"] .tooltip-arrow,
  .tooltip[x-placement^="left"] .tooltip-arrow {
    @apply mx-0;
    
    top: calc(50% - 5px);
    border-top-color   : transparent;
    border-bottom-color: transparent;
  }
  .tooltip[x-placement^="top"] .tooltip-arrow,
  .tooltip[x-placement^="bottom"] .tooltip-arrow {
    @apply my-0;

    left: calc(50% - 5px);
    border-left-color : transparent;
    border-right-color: transparent;
  }
  .tooltip[x-placement^="top"] .tooltip-arrow {
    @apply border-t-4 border-r-4 border-l-4;

    bottom: -4px;
    border-bottom-color: transparent;
  }
  .tooltip[x-placement^="bottom"] .tooltip-arrow {
    @apply border-r-4 border-b-4 border-l-4;

    top: -4px;
    border-top-color: transparent;
  }
  .tooltip[x-placement^="right"] .tooltip-arrow {
    @apply border-t-4 border-r-4 border-b-4;

    left: -4px;
    border-left-color: transparent;
  }
  .tooltip[x-placement^="left"] .tooltip-arrow {
    @apply border-t-4 border-b-4 border-l-4;

    right: -4px;
    border-right-color: transparent;
  }

</style>

<template>
  <div ref="trigger" class="component-tooltip">
    <!-- trigger -->
    <slot></slot>
    <!-- contents -->
    <div ref="contents" v-if="!tooltip">
      <slot name="tooltip-contents"></slot>
    </div>
  </div>
</template>

<script>
  
  /**
   * 툴팁 컴포넌트
   */

  import Tooltip from "tooltip.js";

  export default {
    props: {
      // 툴팁 내용
      content: {
        type: String
      },

      // 트리거 방식
      showOn: {
        type   : String,
        default: "hover",
        validator: (value) => [
          'click',
          'hover'
        ].includes(value)
      },

      // 툴팁 위치
      position: {
        type     : String,
        default  : "top",
        validator: (value) => [
          "top-start",
          "top-end",
          "top",
          "left-start",
          "left-end",
          "left",
          "bottom-start",
          "bottom-end",
          "bottom",
          "right-start",
          "right-end",
          "right",
        ].includes(value)
      }
    },

    data () {
      return {
        tooltip: null
      }
    },

    watch: {
      content (val, oldVal) {
        this.mountTooltip();
      },
      position (val, oldVal) {
        this.mountTooltip();
      }
    },

    computed: {
      triggerElem () {
        return this.$refs.trigger;
      }
    },

    methods: {
      mountTooltip () {
        // initialize
        if(this.tooltip) {
          this.tooltip.dispose();
        }

        this.tooltip = new Tooltip(this.triggerElem, {
          placement : this.position,
          trigger   : this.showOn,
          popperOptions: {
            modifiers: {
            computeStyle: {
                gpuAcceleration: false
              },
            },
          },
          
          container : "body",
          html      : true,
          title     : (() => {
            if(this.$slots["tooltip-contents"]) {
              return this.$slots["tooltip-contents"][0].elm;
            } else {
              return this.content;
            }
          })(),
        });
      }
    },

    mounted () {
      this.mountTooltip();
    },

    destroyed () {
      this.tooltip.dispose();
    }
  };

</script>