<style lang="scss">

  .component-addon-input {
    @apply inline-flex pr-0;

    .addon-input {
      @apply inline-flex items-center;

      width: calc(100% - 20px);

      input {
        @apply outline-none bg-transparent w-full;
      }
    }
    
    .addon-icon {
      @apply text-grey-primary inline-flex w-auto h-auto;
    }

    &.is-loading {
      @apply pointer-events-none;
    }

    &:hover {
      .addon-icon {
        @apply text-blue-dim;
      }
    }

    &:not(.is-disabled):not(.is-error):not(.is-warning):not(.is-success) {
      &:active {
        .addon-icon {
          @apply text-blue-primary;
        }
      }

      &:focus {
        .addon-icon {
          @apply text-blue-primary;
        }
      }
    }

    &.is-disabled {
      .addon-icon {
        @apply text-grey-dim;
      }
    }

    &.is-active {
      .addon-icon {
        @apply text-blue-primary;
      }
    }

    &.is-error {
      .addon-icon {
        @apply text-red-primary;
      }
    }

    &.is-success {
      .addon-icon {
        @apply text-cyan-primary;
      }
    }

    &.is-warning {
      .addon-icon {
        @apply text-yellow-primary;
      }
    }

  }

</style>

<template>
  <input-base class="component-addon-input component-text-input"
    v-bind="$attrs"
    v-on="$listeners"
    :loading="loading"
    tagName="div"
  >
    
    <div class="addon-input">
      <slot></slot>
    </div>

    <component-icon
      class="addon-icon"
      :icon="addonIcon"
      @click.native="$emit('clickAddon')"
    >
    </component-icon>
  
  </input-base>
</template>

<script>

  /**
   * 아이콘을 넣어 커스텀 할 수 있는 인풋 컴포넌트
   */

  import Component from "../mixins/component";

  import InputBase from "./input-base.vue";
  import Icon      from "../icon.vue";

  export default {

    mixins: [Component],

    props: {
      icon: {

      },

      loading: {
        type: Boolean
      },
    },

    computed: {
      addonIcon () {
        if(this.loading) {
          return "fas fa-sync fa-spin";
        } else {
          return this.icon;
        }
      }
    },

    components: {
      "input-base"    : InputBase,
      "component-icon": Icon
    }
  }

</script>