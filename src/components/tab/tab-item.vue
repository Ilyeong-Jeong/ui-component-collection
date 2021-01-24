<style lang="scss">

  .component-tab-item {
    @apply h-8 px-4;
    @apply border-b-2 border-grey-dim;
    @apply text-center text-grey-primary;
    @apply cursor-pointer float-left;

    line-height: theme('height.8');

    &:not(.is-active) {
      &:hover {
        @apply text-blue-dim;
        @apply border-blue-dim;
      }

      &:active {
        @apply text-blue-tint;
        @apply border-blue-tint bg-grey-dim2;
      }
    }

    &.is-active {
      @apply shadow text-blue-primary;
      @apply border-blue-primary;
    }
        
    &.is-disabled {
      @apply text-grey-dim;
      @apply border-grey-dim pointer-events-none;
    }

  }

</style>

<template>
  <li :class="['component-tab-item', stateCls]"
    @click="$emit('active')"
  >
    <slot></slot>
  </li>
</template>

<script>

  import Component from "../mixins/component";
  import State     from "../mixins/state";

  export default {

    mixins: [Component, State],

  }

</script>