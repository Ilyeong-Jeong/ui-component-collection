<style lang="scss">

  .component-radio {
    @apply inline-flex relative items-center;

    .radio-wrapper {
      @apply border border-solid border-grey-primary rounded-full;

      .radio-container {
        @apply w-4 h-4 m-auto;

        transform-origin: 0px 0px 0;
        margin-left     : 22%;
        margin-top      : 22%;

        .ball {
          @apply w-2 h-2 bg-white rounded-full opacity-100;
        }

        input[type=radio] {
          @apply absolute top-0 left-0;
          @apply w-4 h-4 opacity-0 cursor-pointer;

          margin-left: -22%;
          margin-top : -22%;
        }
      }
    }

    &.is-disabled {
      @apply pointer-events-none opacity-50;
    }

    &.is-checked {
      .radio-wrapper {
        @apply border-blue-primary bg-blue-primary;
      }

      &.is-error {
        .radio-wrapper {
          @apply bg-red-primary border-red-primary;
        }  
      }

      &.is-warning {
        .radio-wrapper {
          @apply bg-yellow-primary border-yellow-primary;
        }         
      }

      &.is-success {
        .radio-wrapper {
          @apply bg-green-primary border-green-primary;
        }         
      }

      &:active {
        .radio-wrapper {
          @apply border-blue-tint bg-white;

          .ball {
            @apply bg-blue-tint;
          }
        }

        &.is-error {
          .radio-wrapper {
            @apply border-red-tint bg-white;

            .ball {
              @apply bg-red-tint;
            }
          }
        } 

        &.is-warning {
          .radio-wrapper {
            @apply border-yellow-tint bg-white;

            .ball {
              @apply bg-yellow-tint;
            }
          }      
        }

        &.is-success {
          .radio-wrapper {
            @apply border-green-tint bg-white;

            .ball {
              @apply bg-green-tint;
            }
          }        
        }       
      } 
    }

    &:not(.is-checked) {
      &:active {
        .radio-wrapper {
          @apply border-blue-tint;
        }

        &.is-error {
          .radio-wrapper {
            @apply border-red-tint;
          }          
        }

        &.is-warning {
          .radio-wrapper {
            @apply border-yellow-tint;
          }         
        }

        &.is-success {
          .radio-wrapper {
            @apply border-green-tint;
          }         
        }       
      }  
    }
  }

</style>

<template>
  <div :class="['component-radio', {'is-checked': isChecked }, stateCls]" :style="style.wrapper">
    <div class="radio-wrapper" :style="style.innerWrapper">
      <div class="radio-container" :style="style.container">
        <div class="ball"></div>
        <input type="radio"
          :name="name"
          :value="value"
          v-model="check"
        >
      </div>
    </div>
  </div>
</template>

<script>

  /**
   * 라디오 컴포넌트
   */

  import Component from "./mixins/component";
  import State     from "./mixins/state";

  export default {

    mixins: [Component, State],

    props: {
      checked: {

      },

      name: {
        type: String,
      },

      value: {
        type: String,
      },

      size: {
        type   : Number,
        default: 24
      }
    },

    computed: {
      isChecked () {
        return this.checked == this.value;
      },

      style () {
        return {
          wrapper    : {
            width : this.size + "px",
            height: this.size + "px"
          },
          innerWrapper: {
            width : this.size + "px",
            height: this.size + "px"
          },
          container: {
            transform: `scale(${this.size / 16})`
          },
        }
      },

      check: {
        get () {
          return this.checked;
        },

        set (value) {
          if(!this.disabled) {
            this.$emit("change", value);
          }
        }
      }
    }
  }

</script>