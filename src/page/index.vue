<style lang="scss">

  .index {
    @apply w-full h-full flex flex-col;

    > :first-child {
      @apply mb-2 flex-1;
    }

    .color-block {
      @apply w-6 h-6;

      &.bg-white {
        @apply border border-black;
      }
    }
  }

</style>

<template>
  <page-panel
    class="w-full h-full"
    title="UI Component Collection Index Page."
    desc="Select the components you want to see from the left menu. And below is the basic color and font size used by components."
  >
    <div class="index">
      <component-content-panel>
        <page-block
          name="Typography"
        >
          <template v-for="t in typo">
            <p :class="t" :key="t">
              {{ text }}
            </p>
          </template>
        </page-block>  
      </component-content-panel>

      <component-content-panel height="100%">
        <page-block
          name="Color"
        >
          <div class="flex flex-row my-2">
            <div class="mr-4 w-48">
              <div class="color-block bg-black"></div>
              <p>black</p>
            </div>

            <div class="mr-4 w-48">
              <div class="color-block bg-white"></div>
              <p>white</p>
            </div>
          </div>

          <template v-for="color in colors">
            <div class="flex flex-row mb-2">
              <template v-for="c in color">
                <div class="mr-4 w-48">
                  <div :class="['color-block', 'bg-' + c]"></div>
                  <p>{{ c }}</p>
                </div>
              </template>
            </div>
          </template>
        </page-block>
      </component-content-panel>
    </div>
  </page-panel>
</template>

<script>

  import ContentPanel from "../components/content-panel/index.vue";

  export default {

    data () {
      return {
        text: "The quick brown fox jumped over the lazy dog."
      }
    },

    computed: {
      typo () {
        const textType = [
          "ultra", "super", "headline", "title", "header", "large", "base", "small", "tiny"
        ]

        return textType.map((t) => {
          return `text-${t}`
        });
      },

      colors () {
        const color = [
          "grey", "blue", "red", "yellow", "green"
        ];

        const type = [
          "dim2", "dim", "primary", "tint"
        ];
        
        return color.map((c) => {
          return type.map((t) => {
            return `${c}-${t}`
          })
        }); 
      }
    },

    components: {
      "component-content-panel": ContentPanel
    }

  }
  
</script>