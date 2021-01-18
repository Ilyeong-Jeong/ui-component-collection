<style lang="scss">

  .common-component-block {
    @apply mb-4;
    
    .block-name {
      @apply text-base font-bold;
    }

    .block-list {
      @apply flex flex-row items-center;

      & > * {
        @apply mr-2;
      } 
    }
  }

</style>

<template>

  <div class="common-component-block">
    <div class="block-name">
      {{ name }}
    </div>

    <div class="block-list">
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