<style lang="scss">

  .component-avatar {
    @apply relative inline-block;

    .ball {
      @apply absolute w-3 h-3 bg-blue-primary rounded-full;
      @apply border-2 border-white;
      top  : 0px;
      right: -4px;

      &.is-error {
        @apply bg-red-primary;
      }
    }
  }

</style>

<template>
  <div class="component-avatar">
    <vue-avatar
      v-bind="$attrs"
      v-on="$listeners"
      :username="username"
      :src="src"
      :size="size"
    ></vue-avatar>
    
    <div :class="['ball', stateCls]"></div>
  </div>
</template>

<script>

  /**
    아바타 이미지 컴포넌트
  */

  import Avatar from "vue-avatar";

  import Component from "./mixins/component";
  import State     from "./mixins/state";

  export default {

    mixins: [Component, State],

    props: {
      username: {
        type: String,
      },

      src: {
        type: String,
      },

      size: {
        type   : Number,
        default: 24
      }
    },

    components: {
      "vue-avatar": Avatar
    }
  }

</script>