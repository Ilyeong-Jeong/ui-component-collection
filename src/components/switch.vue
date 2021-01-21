<style lang="scss">

  .component-switch {
    @apply relative inline-block;

    input {
      @apply hidden;
    }

    .slider {
      @apply absolute bg-grey-dim rounded-full cursor-pointer;
      @apply top-0 right-0 bottom-0 left-0;

      transition: .4s;
    }

    .slider .track {
      @apply absolute bg-white rounded-full;

      left      : 3px;
      bottom    : 3px;
      transition: .4s;
    }

    input:disabled + .slider {
      @apply pointer-events-none opacity-50;
    }

    input.checked + .slider {
      @apply bg-blue-primary;
    }

    &.is-error {
      input.checked + .slider {
        @apply bg-red-primary;
      }
    }

    &.is-warning {
      input.checked + .slider {
        @apply bg-yellow-primary;
      } 
    }

    &.is-success {
      input.checked + .slider {
        @apply bg-green-primary;
      }  
    }  
  }

</style>

<template>
  <label :class="['component-switch', stateCls]" :style="style.container">
    <input :class="{'checked': check}" type="checkbox" v-model="check" :disabled="disabled">
    <div class="slider" :style="style.slider">
      <span class="track" :style="style.track"></span>
    </div>
  </label>
</template>

<script>

  /**
   * 스위치 컴포넌트
   */

  import Component from "./mixins/component";
  import State     from "./mixins/state";

  export default {

    mixins: [Component, State],

    props: {
      checked: {
        type   : Boolean,
        default: false
      },
      
      disabled: {
        type   : Boolean,
        default: false
      },

      size: {
        type   : Number,
        default: 24
      }
    },

    computed: {
      style () {
        return {
          container: {
            width : `${(this.size * 2) - 2 }px`,
            height: `${this.size}px`
          },

          track: {
            width : `${this.size - 6}px`,
            height: `${this.size - 6}px`,
            transform: (() => {
              if(this.checked) {
                return  `translateX(${this.size - 2}px)`
              }
            })()
          }
        }
      },

      check: {
        get () {
          return this.checked
        },

        set (value) {
          this.$emit("change", value);
        }
      }
    }
  }
</script>