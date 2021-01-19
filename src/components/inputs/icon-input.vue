<template>
  <component-addon-input 
    :class="['component-icon-input', cls]"
    :icon="icon"
    v-bind="$attrs"
    @clickAddon="$emit('clickIcon')"
  >
    <input type="text" 
      class="inner-input"
      ref="input"
      v-bind="$attrs"
      @keyup="(e) => $emit('keyup', e)"
      @blur="$emit('blur')"
      @input="(e) => $emit('input', e.target.value)"
    >
  </component-addon-input>
</template>

<script>

  /**
   * 아이콘 있는 인풋 컴포넌트
   */

  import Component from "../mixins/component";

  import AddonInput from "./addon-input.vue";

  export default {

    mixins: [Component],

    props: {
      icon: {

      },

      rounded: {
        type   : Boolean, 
        default: false
      }
    },

    computed: {
      cls () {
        return this.booleanPropMatcher({
          rounded: 'is-rounded'
        });
      }
    },

    methods: {
      focus () {
        this.$refs.input.focus();
      }
    },

    components: {
      "component-addon-input": AddonInput
    }
  }

</script>