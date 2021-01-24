<style lang="scss">

  .component-tab {

    @apply inline-block relative w-full;
    @apply border-b border-grey-dim;

    height: theme('height.8');

    ul {
      @apply w-full inline-block absolute;
      line-height: theme('height.8');
      list-style-type: none;
    }
  }

</style>

<template>
  <div class="component-tab">
    <ul>
      <slot></slot>
    </ul>
  </div>
</template>

<script>

  import Component from "../mixins/component";

  export default {

    mixins: [Component]

  }

</script>