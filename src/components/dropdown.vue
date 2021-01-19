<style lang="scss">
  
  .component-dropdown {

    position: relative;
    display : inline-block;

    * {
      box-sizing: border-box;
    }

    .dropdown-trigger {
      display: block;
    }
  }

  .component-dropdown-contents {
    position: fixed;
    z-index : 50;
    width   : auto;
  }

</style>

<template>

  <div :class="['component-dropdown', {'opened': _opened}]">
    <div ref="trigger" 
      v-on:mouseover.prevent="onMouseOver"
      v-on:click.prevent="onClick" 
      class="dropdown-trigger"
    >
      <!-- 드롭다운 버튼 -->
      <slot name="dropdown-trigger"></slot>
    </div>
    <div v-show="_opened" ref="contents" v-on:click="_clickContents" class="component-dropdown-contents">
      <!-- 드롭다운 메뉴 -->
      <slot name="dropdown-contents"></slot>
    </div>
  </div>

</template>

<script>

  import Popper from "popper.js";

  import globalEventMixin from "./mixins/global-event";
  import { globalEvents } from "./mixins/global-event";

  import { observeElementResize } from "./utils/index";

  export default {

    mixins: [globalEventMixin],

    props: {

      /**
       * contents container
       * Element
       */
      container: {

      },

      /**
        드롭다운이 닫혀있는지 열려있는지 여부
      */
      opened: {
        type: Boolean
      },

      /**
        trigger
        [click, mouseover]
       */
      trigger: {
        default: "click"
      },

      /**
        드롭다운이 열릴 방향. 상하 좌우
        [up, down, left, right]
      */
      direction: {
        type: String,
        default: "down",
        validator (value) {
          return ["down", "up", "left", "right"].includes(value);
        }
      },

      /**
        드롭다운 메뉴 정렬 방향. 시작 끝 가운데 (없으면 가운데)
        [start, end]
      */
      align: {
        type   : String,
        default: "start",
        validator (value) {
          if(value) {
            return ["start", "end"].includes(value);
          } else {
            return true;
          }
        }
      },

      /**
        드롭다운 토글 사용불가 여부
      */
      disabled: {
        type   : Boolean,
        default: false
      },

      /**
        컨텐츠 내부 클릭시 자동으로 닫히게 할 것인가
      */
      autoclose: {
        type   : Boolean,
        default: true
      },

      /**
        윈도우 영역 클릭했을때 자동으로 닫히게 할 것인가
      */
      bodyclose: {
        type   : Boolean,
        default: true
      },

      /**
        popover 스타일 여부. true이면 스크롤, 윈도우 리사이즈시 자동으로 닫힌다
      */
      popover: {
        type   : Boolean,
        default: false
      },

      /**
        화면이 작거나, 드롭다운 컨텐츠가 매우 클때 자동으로 스크롤을 잡을 것인가 여부
      */
      autoscroll: {
        type   : Boolean,
        default: true
      }
    },

    computed: {
      useData () {
        return this.opened == undefined || this.opened == null;
      },

      _opened () {
        if(this.useData) {
          return this.lOpened;
        } else {
          return this.opened;
        }
      }
    },

    globalEvents: {
      [globalEvents.WINDOW_CLICK] (e) {
        if(this._opened && !this.disabled && this.bodyclose) {
          this._invalidMouse(e);
        }
      },

      [globalEvents.WINDOW_RESIZE] (e) {
        if((this._opened)) {
          if(this.popover) {
            this.close();
          }
        }
      },

      [globalEvents.SCROLL_ANY] (e) {
        if(this._opened) {
          if(this.popover) {
            if(!this.$el.contains(e.target)) {
              this.close();
            }
          }
        }
      }
    },

    data () {
      return {
        resizeListener: null,
        popper        : null,
        lOpened       : false
      }
    },

    methods: {
      _initDropdown () {

        const direction = {
          "down" : "bottom",
          "up"   : "top",
          "left" : "left",
          "right": "right"
        }

        const align = {
          "start" : "start",
          "end"   : "end",
          "center": null
        }

        const placement = [direction[this.direction], align[this.align]].filter((x) => {
          return x;
        }).join("-");

        const popper = new Popper(this.$refs.trigger, this.$refs.contents, {
          removeOnDestroy: true,
          positionFixed  : true,
          placement      : placement,
          modifiers      : {
            computeStyle: {
              gpuAcceleration: false
            },
            flip: {
              behavior: 'clockwise',
              boundariesElement: 'viewport'
            },
            preventOverflow: {
              enabled: true,
              boundariesElement: 'window'
            }
          },
        });
        
        this.resizeListener = observeElementResize(this.$refs.contents, () => {
          if(this._opened == true) {
            popper.update();
          }
        });

        this.popper = popper;
      },

      /**
        click event나 hover이벤트에서
        드롭다운 범위를 벗어났을때 드롭다운을 닫는다
       */
      _invalidMouse (mouseEvent) {
        // 크롬에서 클릭시 삭제되는 element는 클릭하면서 사라지기 때문에
        // contains 조건에 통과되지 못해서
        // mouse event의 path를 대신 사용한다
        // 만약 path를 지원하지 않는 browser면 그대로 contains 조건으로 체크함

        const contains = function (target) {
          if(mouseEvent.path) {
            return mouseEvent.path.find((p) => p === target);
          } else {
            return target.contains(mouseEvent.target);
          }
        }

        const targetTrigger  = contains(this.$refs.trigger);
        const targetContents = contains(this.$refs.contents);

        if(!targetTrigger && !targetContents) {
          this.close();
        }
      },

      _clickContents() {
        if(this.autoclose) {
          this.close();
        }
      },

      _toggle (state) {
        if(!this.disabled) {
          if(this.useData) {
            this.lOpened = state;
          }
          this.$emit("toggle", state);
        }
      },

      close () {
        this._toggle(false);
      },

      open () {
        this._toggle(true);
      },

      toggle () {
        /**
          드롭다운 토글 이벤트
          opened true : 드롭다운 열림 false: 드롭다운 닫힘
        */
        this._toggle(!this._opened);
      },

      onClick () {
        if(this.trigger == "click") {
          this.toggle();
        }
      },

      onMouseOver () {
        if(this.trigger == "mouseover") {
          this.open();
        }
      },

      onWindowMouseMove (e) {
        if(this._opened && !this.disabled) {
          if(this.trigger == "mouseover") {
            this._invalidMouse(e);
          }
        }
      }
    },

    watch: {
      _opened (val, oldVal) {
        if(val) {
          this.$nextTick(() => {
            if(this.popper) {
              this.popper.update();
            }
          });
        }
      }
    },

    mounted () {
      this._initDropdown();

      // 컨테이너 el이 지정되어있으면
      // el의 위치를 컨테이너로 이동시킨다
      if(this.container) {
        this.container.appendChild(this.$refs['contents']);
      }

      // 글로벌 이벤트
      window.addEventListener("mousemove", this.onWindowMouseMove);
    },

    destroyed () {
      if(this.popper) {
        this.popper.destroy();
      }

      if(this.resizeListener) {
        this.resizeListener.end();
      }

      window.removeEventListener("mousemove", this.onWindowMouseMove);
    }
  }

</script>