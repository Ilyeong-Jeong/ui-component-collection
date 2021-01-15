<style lang="scss">

  .component-content-panel-header {
    @apply w-full flex items-center;

    .content-panel-header-title {
      @apply flex-1 text-large font-bold;
    }
  }

</style>

<template>
  <div class="component-content-panel-header">

    <slot name="left">
    </slot>

    <div class="content-panel-header-title">
      {{title}}
    </div>

    <div class="flex items-center justify-end">
      <slot name="right">
      </slot>
    </div>
  </div>
</template>

<script>

  import Component  from "../mixins/component";

  export default {

    mixins: [Component],

    props: {
      title: {
        type: String
      }
    }

  }

</script>