<template>
  <component :is="tagName" 
    :class="['component-input-base', stateCls, sizeCls]"
    :style="style"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </component>
</template>

<script>

  /**
   * 모든 커스텀 인풋의 베이스가 되는 인풋 컴포넌트
   */

  import Component from "../mixins/component";
  import State     from "../mixins/state";
  import Size      from "../mixins/size";
  import Dimension from "../mixins/dimension";

  export default {

    mixins: [Component, State, Size, Dimension],

    props: {
      tagName: {
        default: "div"
      }
    },

    computed: {
      style () {
        return this.styleWidth;
      }
    }
  }

</script>