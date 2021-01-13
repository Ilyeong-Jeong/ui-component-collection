<style lang="scss">

  .dashboard {
    @apply w-full bg-blue-primary text-white;
  }

</style>

<template>
  <div class="dashboard">
    {{text}}
  </div>
</template>

<script>

  export default {
    data () {
      return {
        text: "Vue + Tailwind Test"
      }
    }
  }
  
</script>