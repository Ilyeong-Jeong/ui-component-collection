<style lang="scss">

  .component-drag-resize {
    
    &.vdr {
      @apply absolute box-border;
    }
    
    .component-dragble-handle {
      @apply w-4 h-4 absolute;
    }

    .component-dragble-handle-tl {
      @apply border-t-4 border-l-4 border-grey-primary;

      top   : -5px;
      left  : -5px;
      cursor: nw-resize;
    }

    .component-dragble-handle-tm {
      top        : -5px;
      left       : 50%;
      margin-left: -5px;
      cursor     : n-resize;
    }

    .component-dragble-handle-tr {
      top   : -5px;
      right : -5px;
      cursor: ne-resize;
    }

    .component-dragble-handle-ml {
      top       : 50%;
      left      : -5px;
      margin-top: -5px;
      cursor    : w-resize;
    }

    .component-dragble-handle-mr {
      top       : 50%;
      right     : -5px;
      margin-top: -5px;
      cursor    : e-resize;
    }

    .component-dragble-handle-bl {
      @apply border-l-4 border-b-4 border-grey-primary;

      bottom: -5px;
      left  : -5px;
      cursor: sw-resize;
    }

    .component-dragble-handle-bm {
      bottom     : -5px;
      left       : 50%;
      margin-left: -5px;
      cursor     : s-resize;
    }

    .component-dragble-handle-br {
      @apply border-r-4 border-b-4 border-grey-primary;

      bottom: -5px;
      right : -5px;
      cursor: se-resize;
    }
  }

</style>

<template>
  
  <vue-drag-resize
    class="component-drag-resize"
    ref="dragResize"
    class-name-handle="component-dragble-handle"
    v-on="$listeners"
    :w="size.width"
    :h="size.height"
    :x="position.x"
    :y="position.y"
    :min-width="minSize.width"
    :min-height="minSize.height"
    :max-width="maxSize.width"
    :max-height="maxSize.height"
    :handles="sticks"
    :parentW="parentWidth"
    :parentH="parentHeight"
    :draggable="dragable"
    :resizable="resizeable"
    :active="activate"
    :lockAspectRatio="aspectRatio"
    :onResizeStart="onResizeStartCallback"
    @resizing="onResize"
    @resizestop="onResizeStop"
  >
    <slot></slot>
  </vue-drag-resize>

</template>

<script>

  /**
   * 대시보드 위젯 프레임에서 resize를 하기 위한 컴포넌트
   */

  import VueDragResize from 'vue-draggable-resizable';

  export default {

    props: {
      size: {
        default () {
          return {
            width : null,
            height: null
          }
        }
      },

      position: {
        default () {
          return {
            x: null,
            y: null
          }
        }
      },

      minSize: {
        default () {
          return {
            width : null,
            height: null
          }
        }
      },

      maxSize: {
        default () {
          return {
            width : null,
            height: null
          }
        }
      },

      activate: {
        default: false
      },

      dragable: {
        default: false
      },

      resizeable: {
        default: false
      },

      parentWidth : null,
      parentHeight: null,

      sticks: null,

      aspectRatio: {
        default: false
      }
    },

    methods: {
      onResizeStartCallback () {
        this.$emit("resizeStart", false); 
      },

      onResize (left, top, width, height) {
        this.$emit("resize", {
          left, top, width, height
        });
      },

      onResizeStop (left, top, width, height) {
        this.$emit("resizeEnd", {
          left, top, width, height
        });
      },

      mouseOver () {
        this.$el.style.cursor = "grab";
      },

      mouseDown () {
        this.$el.style.cursor = "grabbing";
      },

      mouseUp () {
        this.$el.style.cursor = "grab";
      },

      dragableOn () {
        this.$el.addEventListener("mouseover", this.mouseOver);
        this.$el.addEventListener("mousedown", this.mouseDown);
        this.$el.addEventListener("mouseup",   this.mouseUp);
      },

      dragableOff () {
        this.$el.removeEventListener("mouseover", this.mouseOver);
        this.$el.removeEventListener("mousedown", this.mouseDown);
        this.$el.removeEventListener("mouseup",   this.mouseUp);
      }      
    },

    mounted () {
      this.dragableOn();
    },

    destroyed () {
      this.dragableOff();
    },

    components: {
      "vue-drag-resize": VueDragResize
    }
  }

</script>