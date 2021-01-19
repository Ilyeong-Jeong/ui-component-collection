<style lang="scss">

  .component-text-input {
    @apply h-8 px-2 outline-none;
    @apply border bg-white border-grey-primary rounded;

    &:hover {
      @apply border-blue-primary;
    }

    &:focus {
      @apply border-blue-primary;
    }

    &:active {
      @apply border-blue-tint;
    }

    &.is-rounded {
      @apply rounded-full;
    }

    &.is-active {
      @apply border-blue-primary;
    }

    &.is-error {
      @apply border-red-primary;
    }

    &.is-warning {
      @apply border-yellow-primary;
    }

    &.is-success {
      @apply border-cyan-primary;
    }

    &.is-disabled {
      @apply border-grey-dim bg-grey-dim2 pointer-events-none;
      @apply text-grey-dim;
    }

    &.is-small {
      @apply h-6;
    }

    &.is-large {
      @apply h-10;
    }
  }

</style>

<template>
  <input-base 
    :class="['component-text-input', cls]"
    v-bind="$attrs"
    :tagName="textInputBase"
    type="text"
    @input="onInput"
  >
  </input-base>
</template>

<script>

  /**
   * 텍스트 인풋 컴포넌트
   */

  import InputBase     from "./input-base.vue";
  import TextInputBase from "./text-input-base.vue";

  import Component  from "../mixins/component";

  export default {

    mixins: [Component],

    props: {
      rounded: {
        type   : Boolean, 
        default: false
      }
    },

    computed: {
      textInputBase () {
        return TextInputBase;
      },

      cls () {
        return this.booleanPropMatcher({
          rounded: 'is-rounded'
        });
      }
    },

    methods: {
      onInput (e) {
        this.$emit("input", e.target.value);
      },

      focus () {
        this.$el.focus();
      }
    },

    components: {
      "input-base": InputBase
    }
  }

</script>