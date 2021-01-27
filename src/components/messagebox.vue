<style lang="scss">

  .component-messagebox {

    @apply p-2 my-4 rounded w-full;
    @apply border border-grey-tint bg-grey-dim2;

    &.is-active {
      @apply border-blue-tint bg-blue-dim2 text-blue-tint;
    }

    &.is-error {
      @apply border-red-tint bg-red-dim2 text-red-tint;
    }

    &.is-warning {
      @apply border-yellow-tint bg-yellow-dim2 text-yellow-tint;
    }

    &.is-success {
      @apply border-green-tint bg-green-dim2 text-green-tint;
    }  
  }

</style>

<template>
  <div :class="['component-messagebox', stateCls]">
    {{ message }}
  </div>
</template>

<script>

  /**
   * 메시지박스 컴포넌트
   */

  import Component from "./mixins/component";
  import State     from "./mixins/state";

  export default {

    mixins: [Component, State],

    props: {
      message: {
        type: String
      }
    },  

  }

</script>