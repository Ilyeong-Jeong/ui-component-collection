<style lang="scss">

  .component-dropdown-button {
    @apply inline-flex;

    > :first-child {
      @apply rounded-r-none border-r border-white;
    }

    .dropdown-button {
      @apply rounded-l-none;

      &.is-small {
        @apply h-6;
      }

      &.is-large {
        @apply h-10;
      }
    }
  }

</style>

<template>
  <div :class="['component-dropdown-button', stateCls, sizeCls]">

    <component-button
      v-bind="$props"
      v-on="$listeners"
      :loaderIcon="null"
    >
      <component-icon 
        v-if="iconCls != null"
        slot="icon"
        :icon="iconCls"
      ></component-icon >

      <slot></slot>
    </component-button>

    <component-dropdown
      :opened="dropdownOpened"
      :autoclose="false"
      :disabled="disabled || loading"
      @toggle="toggleDropdown"
    >
      <component-button 
        class="dropdown-button"
        slot="dropdown-trigger"
        v-bind="$props"
        icon
      >
        <component-icon 
          v-if="loading"
          slot="icon"
          icon="fas fa-sync fa-spin"
        ></component-icon> 

        <component-icon 
          v-else
          slot="icon"
          icon="fas fa-angle-down"
        ></component-icon>
      </component-button>

      <template slot="dropdown-contents">
        <slot name="contents"></slot>
      </template>
    </component-dropdown>
    
  </div>
</template>

<script>

  /**
   * 드롭다운 버튼 컴포넌트
   */

  import Component from "../mixins/component";
  import State     from "../mixins/state";
  import Size      from "../mixins/size";

  import Button   from "./button.vue";
  import Icon     from "../icon.vue";
  import Dropdown from "../dropdown.vue";

  export default {

    mixins: [Component, State, Size],

    props: {
      opened: {
        default: null
      },
      
      iconCls: {
        type   : String,
        default: null
      },

      default: {
        type: Boolean
      }
    },

    data () {
      return {
        lOpened: false
      }
    },

    computed: {
      cls () {
        return this.booleanPropMatcher({
          default: 'is-default'
        });        
      },

      dropdownOpened () {
        if(this.opened == null || this.opened == undefined || this.loading) {
          return this.lOpened;
        } else {
          return this.opened;
        }
      }
    },

    methods: {
      toggleDropdown (val) {
        if(this.opened == null || this.opened == undefined || this.loading) {
          this.lOpened = val;
        } else {
          this.$emit('toggle', val);
        }
      }
    },

    components: {
      "component-button"  : Button,
      "component-icon"    : Icon,
      "component-dropdown": Dropdown
    }
  }

</script>