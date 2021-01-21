<style lang="scss">

  .component-combo-input {
    @apply inline-flex;

    .component-text-input {
      @apply flex-1 rounded-r-none;
    }

    .component-button {
      @apply flex-none rounded-l-none h-8;

      .button-text {
        @apply px-2;
      }
    }
  }

</style>

<template>
  <div :class="['component-combo-input', stateCls]">
    <component-input
      v-bind="$attrs"
      :disabled="disabled || loading"
      @input="(val) => $emit('input', val)"
    ></component-input>

    <component-button
      v-on="$listeners"
      :icon="loading || icon"
      :disabled="disabled || loading"
      @click="$emit('click')"
    >
      <template v-if="!loading">
        <component-icon 
          v-if="icon"
          slot="icon"
          :icon="iconCls"
        ></component-icon>

        <template v-else>
          {{buttonText}}
        </template>  
      </template>

      <component-icon 
        v-else
        slot="icon"
        icon="fas fa-sync fa-spin"
      ></component-icon>
    </component-button>
  </div>
</template>

<script>

  /**
   * 버튼 있는 인풋 컴포넌트
   */

  import Component  from "../mixins/component";
  import State      from "../mixins/state";

  import TextInput  from "./text-input.vue";
  import Button     from "../buttons/button.vue";
  import Icon       from "../icon.vue";

  export default {

    mixins: [Component, State],

    props: {
      buttonText: {
        type: String,
      },

      icon: {
        type: Boolean
      },

      iconCls: {

      },
      
      loading: {
        type: Boolean
      },
    },

    components: {
      "component-input" : TextInput,
      "component-button": Button,
      "component-icon"  : Icon,
    }
  }

</script>