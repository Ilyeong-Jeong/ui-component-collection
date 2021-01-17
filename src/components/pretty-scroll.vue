<style lang="scss">
  
  @import "~perfect-scrollbar/src/css/variables.scss";
  @import "~perfect-scrollbar/src/css/mixins.scss";
  @import "~perfect-scrollbar/src/css/themes.scss";

  // Custom Style
  $offset   : 2px;
  $railWidth: 7px;

  .ps__scrollbar-y-rail {
    margin-top   : $offset;
    margin-bottom: $offset;
  }

  .ps--theme_dwsu {
    @include ps-container(map-merge($ps-theme-default, (
      scrollbar-x-rail-height: $railWidth,
      scrollbar-x-height: $railWidth,
      scrollbar-x-hover-height: $railWidth,
      scrollbar-y-rail-width: $railWidth + 4px,
      scrollbar-y-width: $railWidth,
      scrollbar-y-hover-width: $railWidth,
      rail-hover-bg: rgba(0, 0, 0, 0),
      scrollbar-y-right: $offset
    )));
  }

  .component-pretty-scroll {
    @apply relative overflow-auto;
  }

</style>

<template>
  <div class="component-pretty-scroll" :style="style">
    <div ref="scroll-wrapper" class="component-pretty-scroll-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>

  /**
   * 일반 스크롤이 아니라 장식성의 가는 스크롤 컴포넌트
   */

  import PerfectScrollbar from "perfect-scrollbar";
  
  import globalEventMixin from "./mixins/global-event";
  import {globalEvents}   from "./mixins/global-event";
  
  import { observeElementResize } from "./utils";

  export default {

    mixins: [globalEventMixin],

    globalEvents: {
      [globalEvents.WINDOW_RESIZE] (event) {
        this.update();
      }
    },

    props: {
      width: {
        type   : String,
        default: "100%"
      },

      height: {
        type   : String,
        default: "100%"
      },

      xScroll: {
        type   : Boolean,
        default: true
      }
    },

    data () {
      return {
        resizeObserver: null
      }
    },

    computed: {
      style () {
        return {
          maxWidth : this.width,
          maxHeight: this.height
        }
      }
    },

    methods: {
      update () {
        PerfectScrollbar.update(this.$el);
      }
    },

    mounted () {
      PerfectScrollbar.initialize(this.$el, {
        theme           : 'component',
        suppressScrollX : this.xScroll,
        wheelPropagation: false,
      });

      // start observing
      this.resizeObserver = observeElementResize(this.$refs["scroll-wrapper"], () => {
        this.$nextTick(() => {
          this.update();
        });
      });
    },
    
    beforeDestroy () {
      if(this.resizeObserver) {
        this.resizeObserver.end();
      }
    }
  }

</script>