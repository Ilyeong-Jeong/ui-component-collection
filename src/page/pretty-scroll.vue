<template>
  <common-panel
    title="Pretty Scroll"
    desc="Ornamental fine scroll Component Example"
  >
    <component-scroll
      height="500px"
    >
      <div
        class="w-full bg-green-primary"
        style="height: 1000px;"
      >
        Scroll down. 
      </div>
    </component-scroll>
  </common-panel>
</template>

<script>

  import PrettyScroll from "../components/pretty-scroll.vue";

  export default {

    components: {
      "component-scroll": PrettyScroll
    }

  }
  
</script>