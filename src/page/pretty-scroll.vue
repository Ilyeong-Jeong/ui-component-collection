<template>
  <page-panel
    title="Pretty Scroll"
    desc="Ornamental fine scroll Component Example"
  >
    <component-pretty-scroll
      height="500px"
    >
      <div
        class="w-full bg-green-primary"
        style="height: 1000px;"
      >
        Scroll down. 
      </div>
    </component-pretty-scroll>
  </page-panel>
</template>

<script>

  import PrettyScroll from "../components/pretty-scroll.vue";

  export default {

    components: {
      "component-pretty-scroll": PrettyScroll
    }

  }
  
</script>