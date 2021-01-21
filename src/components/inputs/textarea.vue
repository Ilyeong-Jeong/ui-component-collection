<style lang="scss">

  .component-textarea {
    @apply w-full px-2;
    @apply border bg-white border-grey-primary rounded outline-none;

    min-height: 128px;

    ::placeholder {
      @apply text-grey-primary;
    }

    &:hover {
      @apply border-blue-dim;
    }

    &:focus {
      @apply border-blue-primary;
    }

    &:active {
      @apply border-blue-tint;
    }

    &.is-disabled {
      @apply border-grey-dim2 bg-grey-dim2 pointer-events-none;
      @apply text-grey-primary;
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
      @apply border-green-primary;
    }
  }

</style>

<template>
  <input-base
    ref="input"
    class="component-textarea"
    v-bind="$attrs"
    :tagName="textareaBase"
    :value="value"
    :style="style"
    @input.native="(e) => $emit('input', e.target.value)"
  ></input-base>
</template>

<script>

  import InputBase    from "./input-base.vue";
  import TextareaBase from "./textarea-base.vue";

  import Component from "../mixins/component";

  export default {

    mixins: [Component],

    props: {
      value: {

      }
    },

    computed: {
      style () {
        return this.styleWidth;
      },

      textareaBase () {
        return TextareaBase;
      }
    },

    methods: {
      focus () {
        this.$refs.input.$el.focus();
      }
    },

    components: {
      "input-base": InputBase
    }
  }

</script>