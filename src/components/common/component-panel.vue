<style lang="scss">

  .common-component-panel {
    @apply p-4;

    .panel-title {
      @apply text-title font-bold;
    }

    .panel-desc {
      @apply text-large mb-2;
    }

    .panel-body {
      @apply flex flex-row items-center;

      & > * {
        @apply mr-2;
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

    <div class="panel-body">
      <slot></slot>
    </div>  
  </div>

</template>

<script>

  export default {
    props: {
      title: {
        type   : String
      },

      desc: {
        type   : String
      },
    }
  }

</script>