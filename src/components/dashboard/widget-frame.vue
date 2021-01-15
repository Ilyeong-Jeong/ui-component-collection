<style lang="scss">

  .component-widget-frame {
    @apply relative;

    .widget-item {
      @apply block absolute max-w-full;

      .widget-wrapper {
        @apply relative w-full h-full;
        
        .component-dragble-handle-br {
          bottom: 16px;
          right : 16px;
          cursor: nwse-resize;
        }
      }

      &.widget-item-selected {
        z-index: 5;
      }
      &.muuri-item-dragging {
        z-index: 3;
      }
      &.muuri-item-releasing {
        z-index: 2;
      }
      &.muuri-item-hidden {
        z-index: 0;
      }

      &.widget-item-w1 {
        width: 400px;
      }

      &.widget-item-w2 {
        width: 800px;
      }

      &.widget-item-w3 {
        width: 1200px;
      }

      &.widget-item-w4 {
        width: 1600px;
      }

      &.widget-item-h1 {
        height: 200px;
      }

      &.widget-item-h2 {
        height: 400px;
      }

      &.widget-item-h3 {
        height: 600px;
      }

      &.widget-item-h4 {
        height: 800px;
      }

      &.widget-item-h5 {
        height: 1000px;
      }

      &.widget-item-h6 {
        height: 1200px;
      }

    }    
  }

</style>

<template>

  <div class="component-widget-frame" ref="layout">

    <div :class="['widget-item', vWidgetCls[widget.id]]"
      v-for="widget in widgets"
      ref="widget"
      :key="widget.id"
    >
      <div class="widget-wrapper w-full h-full">
        <drag-resize
          class="p-2"
          v-on="$listeners"
          :resizeable="widget.resizeable"
          :sticks="['br']"
          :size="{width: widget.tW, height: widget.tH}"
          :minSize="{width: 400, height: 200}"
          :maxSize="{width: 1600, height: 1200}"
          @activated="onActivated(widget)"
          @deactivated="onDeactivated(widget)"
          @resizeStart="(val) => resizeDrag = val"
          @resize="(size) => resize(size, widget)"
          @resizeEnd="(size) => resizeEnd(size, widget)"
        >
          <component
            :is="widget.component"
          >
          </component>
        </drag-resize>
      </div>
    </div>
  </div>

</template>

<script>

  import WidgetLayout from "muuri";
  
  import DragResize from "./drag-resize.vue";

  import { observeElementResize } from "../utils/index";

  export default {
    
    props: {
      widgets: {
        type: Array,
        default () {
          return [];
        } 
      }
    },
    
    data () {
      return {
        layout: null,

        resizeHandler: null,

        resizeDrag: true,
      }
    },

    computed: {
      vWidgetCls () {
        return this.widgets.reduce((m, n) => {
          m[n.id] = [
            "widget-item-w" + n.w,
            "widget-item-h" + n.h,
            (() => {
              if (n.activated) {
                return "widget-item-selected"
              } else {
                return ""
              }
            })()
          ];
          return m;
        }, {});
      },
    },

    methods: {
      onActivated (widget) {
        const target = this.widgets.find((x) => {
          return x.id == widget.id;
        });

        target.activated = true;
      },

      onDeactivated (widget) {
        const target = this.widgets.find((x) => {
          return x.id == widget.id;
        });

        target.activated = false;
      },

      resize (size, widget) {
        const target = this.widgets.find((x) => {
          return x.id == widget.id;
        });

        target.tW = size.width;
        target.tH = size.height;
      },

      resizeEnd (size, widget) {

        //  widget w,h 값 조정
        const target = this.widgets.find((x) => {
          return x.id == widget.id;
        });

        const w = Math.round(size.width / 400);
        const h = Math.round(size.height / 200);

        target.w = w;
        target.h = h;
        target.tW = w * 400;
        target.tH = h * 200;

        this.$nextTick(() => {
          this.layout.refreshItems(this.$refs.widget).layout();
        });

        this.resizeDrag = true;
      },
    },

    mounted () {

      const self = this;

      this.layout = new WidgetLayout(this.$refs.layout, {
        layout: {
          fillGaps: true,
          rounding: false
        },

        layoutOnResize: true,

        items: this.$refs.widget,

        dragEnabled: true,
        dragSort   : true,
        dragStartPredicate: (item, event) => {
          if (self.resizeDrag) {
            return WidgetLayout.ItemDrag.defaultStartPredicate(item, event);
          } else {
            return false;
          }
        },

        dragSortHeuristics: {
          sortInterval: 0,
          minDragDistance: 0,
          minBounceBackAngle: 0
        },

        dragReleaseDuration: 0,
        dragReleaseEasing: 'ease'
      });

      this.resizeHandler = observeElementResize(this.$refs.layout, () => {
        this.layout.layout();
      });

      this.layout.layout();

    },

    destroy () {
      if(this.layout) {
        this.layout.destroy();
      }

      if(this.resizeHandler) {
        this.resizeHandler.end();
      }
    },

    components: {
      "drag-resize": DragResize
    }

  }

</script>