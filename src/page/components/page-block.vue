<style lang="scss">

  .page-block {
    @apply mb-4;
    
    .block-name {
      @apply text-base font-bold;
    }

    .block-list {
      @apply flex flex-row items-center flex-wrap;

      & > * {
        @apply mr-2 mb-2;
      } 
    }
  }

</style>

<template>

  <div class="page-block">
    <div class="block-name">
      {{ name }}
    </div>

    <div class="block-list" v-if="$slots['block-list']">
      <slot name="block-list"></slot>
    </div>

    <slot></slot>  
  </div>

</template>

<script>

  export default {

    props: {
      name: {
        type: String
      }
    }

  }

</script>