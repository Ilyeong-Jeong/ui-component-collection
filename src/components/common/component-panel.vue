<style lang="scss">

  .common-component-panel {
    @apply p-4;

    .panel-title {
      @apply text-title font-bold;
    }

    .panel-desc {
      @apply text-large mb-2;
    }

    .panel-list {
      @apply flex flex-row items-center flex-wrap;

      & > * {
        @apply mr-2 mb-2;
      } 
    }
  }

</style>

<template>

  <div class="common-component-panel">
    <div class="panel-title">
      {{ title }}
    </div>

    <div class="panel-desc">
      {{ desc }}
    </div>

    <div class="panel-list">
      <slot name="panel-list"></slot>
    </div>

    <slot></slot>  
  </div>

</template>

<script>

  export default {
    props: {
      title: {
        type: String
      },

      desc: {
        type: String
      },
    }
  }

</script>