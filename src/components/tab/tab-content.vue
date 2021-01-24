<style lang="scss">

  .div {
    @apply p-4;
  }

</style>

<template>
  <section class="div">
    <slot></slot>
  </section>
</template>

<script>

  import Component from "../mixins/component";

  export default {

    mixins: [Component]

  }

</script>