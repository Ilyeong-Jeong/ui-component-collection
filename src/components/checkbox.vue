<style lang="scss">

  .component-checkbox {
    @apply inline-flex relative items-center;

    .checkbox-wrapper {
      @apply border border-solid bg-white border-grey-primary rounded-sm;

      .checkbox-container {
        @apply w-4 h-4 m-auto;

        transform-origin: 0% 0% 0;
        margin-left     : 30%;

        .check {
          @apply w-px h-2 p-half;
          @apply border-r-2 border-b-2 border-solid border-white box-border;
          @apply transform rotate-45;

          height: 10px;
        }

        input[type=checkbox] {
          @apply absolute w-4 h-4 opacity-0 top-0 cursor-pointer;

          left: -30%;
        }
      }
    }

    &.is-disabled {
      @apply pointer-events-none opacity-50;
    }

    &.is-checked {
      .checkbox-wrapper {
        @apply border-blue-primary bg-blue-primary;
      }

      &.is-error {
        .checkbox-wrapper {
          @apply bg-red-primary border-red-primary;
        }  
      }

      &.is-warning {
        .checkbox-wrapper {
          @apply bg-yellow-primary border-yellow-primary;
        }         
      }

      &.is-success {
        .checkbox-wrapper {
          @apply bg-green-primary border-green-primary;
        }         
      }

      &:active {
        .checkbox-wrapper {
          @apply border-blue-tint bg-white;

          .check {
            @apply border-blue-tint;
          }
        }

        &.is-error {
          .checkbox-wrapper {
            @apply border-red-tint bg-white;

            .check {
              @apply border-red-tint;
            }
          }
        } 

        &.is-warning {
          .checkbox-wrapper {
            @apply border-yellow-tint bg-white;

            .check {
              @apply border-yellow-tint;
            }
          }      
        }

        &.is-success {
          .checkbox-wrapper {
            @apply border-green-tint bg-white;

            .check {
              @apply border-green-tint;
            }
          }        
        }       
      } 
    }

    &:not(.is-checked) {
      &:active {
        .checkbox-wrapper {
          @apply border-blue-tint;
        }

        &.is-error {
          .checkbox-wrapper {
            @apply border-red-tint;
          }          
        }

        &.is-warning {
          .checkbox-wrapper {
            @apply border-yellow-tint;
          }         
        }

        &.is-success {
          .checkbox-wrapper {
            @apply border-green-tint;
          }         
        }       
      }  
    }
  }

</style>

<template>
  <div :class="['component-checkbox', {'is-checked': checked }, stateCls]" :style="style.wrapper">
    <div class="checkbox-wrapper" :style="style.innerWrapper">
      <div class="checkbox-container" :style="style.container">
        <div class="check"></div>
        <input 
          type="checkbox"
          v-model="check"
        >
      </div>
    </div>
  </div>
</template>

<script>

  /**
   * 체크박스 컴포넌트
   */

  import Component from "./mixins/component";
  import State     from "./mixins/state";

  export default {

    mixins: [Component, State],

    props: {
      checked: {
        type: Boolean
      },

      size: {
        type   : Number,
        default: 24
      }
    },

    computed: {
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
        
        set (checked) {
          if(!this.disabled) {
            this.$emit("change", checked);
          }
        }
      }
    }
  }

</script>