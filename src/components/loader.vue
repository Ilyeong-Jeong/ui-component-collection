<style lang="scss">

  .component-loader {
    @apply flex flex-row flex-initial flex-wrap;
    @apply items-center justify-center;
  }

</style>

<template>
  <div class="component-loader">
    <component :is="currentComponent" :loading="loading" :color="color" :size="size"></component>
  </div>
</template>

<script>

  /**
   * 로딩 스피너 컴포넌트
   */

  import Spinner  from "vue-spinner/dist/vue-spinner.min";

  const PulseLoader  = Spinner.PulseLoader;
  const BounceLoader = Spinner.BounceLoader;
  const ClipLoader   = Spinner.ClipLoader;

  const validKind = ["dot", "spin", "bounce"];

  export default {

    props: {
      /**
       * loader 종류 
       * [dot, spin, bounce]
       */
      kind: {
        type   : String,
        default: "dot",
        validator (value) {
          return validKind.includes(value);
        }
      },

      // loading 상태 여부
      loading: {
        type   : Boolean,
        default: true
      },

      // loader 색상
      color: {
        type   : String,
        default: "#555"
      },

      // loader 크기
      size: {
        type: String
      }
    },

    data () {
      return {
        currentComponent: `${this.kind}-loader`
      }
    },

    components: {
      "dot-loader"   : PulseLoader,
      "bounce-loader": BounceLoader,
      "spin-loader"  : ClipLoader
    }
  }

</script>