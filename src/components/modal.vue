<style lang="scss">

  .component-modal-opened {
    @apply overflow-hidden;
  }

  .component-modal {
    @apply fixed top-0 left-0;
    @apply w-full h-full table z-100;
    @apply bg-black bg-opacity-50;

    .modal-wrapper {
      @apply table-cell align-middle;
    }

    .modal-container {
      @apply max-w-md mx-auto my-0 overflow-y-auto;

      .modal-header, .modal-body, .modal-footer {
        @apply w-full;
      }

      .modal-body {
        @apply m-0 overflow-y-auto;
      }

      .modal-footer {
        @apply flex justify-end;
      }
    }
  }

</style>

<template>
  <div class="component-modal" v-show="show">
    <div class="modal-wrapper" 
      @click.self="bodyClick"
    >
      <div :class="['modal-container', containerCls]" :style="{'max-height': containerMaxHeight}">
        <component-content-panel>
          <component-content-panel-header 
            v-if="!headless"
            ref="header"
            slot="header"
            :class="['modal-header', headerCls]"
            :title="title"
          >
            <component-icon-button 
              slot="right"
              autoWidth 
              autoHeight 
              icon="fas fa-times"
              @click="$emit('close')"
            ></component-icon-button>
          </component-content-panel-header>

          <div :class="['modal-body', bodyCls]" :style="{'max-height': bodyMaxHeight}">
            <slot></slot>
          </div>   

          <div ref="footer" slot="footer" :class="['modal-footer', footerCls]">
            <slot name="footer"></slot>
          </div>       
        </component-content-panel>
      </div>
    </div>
  </div>
</template>

<script>

  import globalEventMixin from "./mixins/global-event";
  import { globalEvents } from "./mixins/global-event";

  import {observeElementResize} from "./utils/index";

  import ContentPanelHeader from "./content-panel/panel-header.vue";
  import ContentPanel       from "./content-panel/index.vue";  
  import IconButton         from "./buttons/icon-button.vue";

  export default {

    mixins: [globalEventMixin],

    props: {
      containerCls: {
        default: null
      },

      headerCls: {
        default: null
      },

      footerCls: {
        default: null
      },

      bodyCls: {
        default: null
      },
      
      bodyClose: {
        type   : Boolean,
        default: true
      },

      show: {
        type   : Boolean,
        default: false
      },

      mobileBreak: {
        type   : Number,
        default: 640 
      },

      heightPadding: {
        type: Number,
        default: 20
      },

      title: {
        type: String
      },

      headless: {
        type   : Boolean,
        default: false        
      }
    },

    globalEvents: {
      [globalEvents.WINDOW_RESIZE] (event) {
        this.updateMaxHeight();
      }
    },

    data () {
      return {
        containerMaxHeight: null,
        bodyMaxHeight     : null,
        headerObserver    : null,
        footerObserver    : null
      }
    },

    watch: {
      show (val, oldVal) {
        if(val) {
          document.querySelector("body").classList.add('component-modal-opened');
        } else {
          document.querySelector("body").classList.remove('component-modal-opened');
        }
      }
    },

    methods: {
      updateMaxHeight () {
        // 모달창이 최대로 커질 수 있는 크기 : calc(100vh - heightPadding * 2)
        // 모바일에서는 100vh의 계산이 문제가 있어서 수정
        const topOffset = (() => {
          if(window.innerWidth < this.mobileBreak) {
            return 0;
          } else {
            return this.heightPadding * 2;
          }
        })();

        const maxModalHeight    = window.innerHeight - topOffset;
        this.containerMaxHeight = maxModalHeight + "px";
        this.bodyMaxHeight      = (() => {
          if (this.headless) {
            return (maxModalHeight - this.$refs.footer.offsetHeight - 1) + "px";
          } else {
            return (maxModalHeight - this.$refs.header.offsetHeight - this.$refs.footer.offsetHeight - 1) + "px";
          }
        })();
      },

      bodyClick () {
        if(this.bodyClose) {
          this.$emit("close");
        }
      }
    },

    mounted () {
      if(this.show) {
        document.querySelector("body").classList.add('component-modal-opened');
      }
      // header
      this.headerObserver = (this.$refs.header, () => {
        this.updateMaxHeight();
      });
      // footer
      this.footerObserver = observeElementResize(this.$refs.footer, () => {
        this.updateMaxHeight();
      });

      this.updateMaxHeight();
    },

    destroyed () {
      document.querySelector("body").classList.remove('component-modal-opened');

      if(this.headerObserver) {
        this.headerObserver = null;
      }
      if(this.footerObserver) {
        this.footerObserver = null;
      }
    },

    components: {
      "component-content-panel-header": ContentPanelHeader,
      "component-content-panel"       : ContentPanel,
      "component-icon-button"         : IconButton
    }
  }

</script>