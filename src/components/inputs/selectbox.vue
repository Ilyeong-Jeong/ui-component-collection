<style lang="scss">

  .component-selectbox {
    min-width: 160px;

    .selectbox-input {
      @apply h-8 px-2 flex items-center;
      @apply border bg-white border-grey-primary rounded;

      .input-text, .input-placeholder {
        @apply flex-1;
      }

      .input-placeholder {
        @apply text-grey-primary;
      }

      .component-icon {
        @apply flex-none text-large text-grey-primary pl-2;
      }

      &:not(.is-disabled) {
        @apply cursor-pointer;

        &:hover {
          @apply border-blue-dim;

          .component-icon {
            @apply text-blue-dim;
          }
        }

        &:active {
          @apply border-blue-primary;

          .component-icon {
            @apply text-blue-primary;
          }
        }
      }
    }

    .selectbox-contents {
      @apply border bg-white border-grey-primary rounded;

      .search-input {
        @apply p-2 pb-0 w-full;
        
        input {
          @apply w-full shadow;
        }
      }

      .search-empty {
        @apply p-2 text-grey-primary text-center;
      }

      .selectbox-contents-item {
        @apply w-full p-2 cursor-pointer;

        &:hover {
          @apply bg-blue-dim text-white;
        }

        &.is-active {
          @apply bg-blue-primary text-white;
        }
      }
    }

    &.is-disabled {
      .selectbox-input {
        @apply border-grey-dim2 bg-grey-dim2;
        @apply text-grey-primary pointer-events-none;
      }  
    }

    &.is-loading {
      @apply pointer-events-none;
    }

    &.is-rounded {
      .selectbox-input {
        @apply rounded-full;
      }
    }    

    &.is-opened {
      .selectbox-input {
        @apply border-blue-primary;
      }
    }

    &.is-error {
      .selectbox-input {
        @apply border-red-primary;
      }  
    }

    &.is-warning {
      .selectbox-input {
        @apply border-yellow-primary;
      }  
    }

    &.is-success {
      .selectbox-input {
        @apply border-green-primary;
      }  
    }

    &.is-small {
      .selectbox-input {
        @apply h-6;
      }
    }

    &.is-large {
      .selectbox-input {
        @apply h-10;
      }
    }            
  }

</style>

<template>
  <component-dropdown 
    :class="['component-selectbox', cls, stateCls, sizeCls]"
    :opened="opened"
    :loading="loading"
    :autoclose="false"
    :disabled="disabled || loading"
    @toggle="toggle"
  >
    <input-base 
      ref="input"
      class="selectbox-input"
      tagName="div"
      slot="dropdown-trigger"
    >
      <div class="input-text" v-if="value">
        {{selectedName}}
      </div>

      <div class="input-placeholder" v-else>
        {{placeholder}}
      </div>

      <component-icon 
        :icon="icon"
        autoWidth
        autoHeight
      ></component-icon>
    </input-base>

    <div
      slot="dropdown-contents"
      class="selectbox-contents"
      :style="contentStyle"
    >
      <div class="search-input" v-if="searchable">
        <component-input
          ref="searchInput"
          placeholder="search"
          :value="searchValue"
          @input="search"
        >
        </component-input>
      </div>

      <div class="search-empty" v-if="viewItems.length == 0">
        No items 
      </div>

      <div v-for="item in viewItems"
        :key="item.value"
        @click="select(item.value)"
      >
        <div :class="['selectbox-contents-item truncate', {'is-active': item.value == value}]"
          :title="item.name"
        >
          {{item.name}}
        </div>
      </div>

    </div>
  </component-dropdown>
</template>

<script>

  /**
   *  searchable한 셀렉트 박스 컴포넌트
   */

  import Component from "../mixins/component";
  import State     from "../mixins/state";
  import Size      from "../mixins/size"

  import InputBase    from "./input-base";
  import TextInput    from "./text-input";

  import Icon         from "../icon";
  import Dropdown     from "../dropdown.vue";
  import PrettyScroll from "../pretty-scroll.vue";

  import {observeElementResize} from "../utils"

  export default {

    mixins: [Component, State, Size],

    props: {
      placeholder: {
        type: String
      },

      value: {
        /**
         * [
         *    {name, value, other...},
         *    {name, value, other...},
         *    {name, value, other...},
         *    ...
         * ]
         */        
      },

      items: {
        type: Array,
        default () {
          return [];
        }
      },

      rounded: {
        type: Boolean
      },

      loading: {
        type: Boolean
      },

      searchable: {
        type: Boolean
      }
    },

    data () {
      return {
        opened       : false,
        menuWidth    : null,
        resizeWatcher: null,
        searchValue  : null
      }
    },

    computed: {
      viewItems () {
        if(this.searchValue) {
          return this.items.filter((i) => {
            const searchName  = i.name.indexOf(this.searchValue);
            const searchValue = i.value.indexOf(this.searchValue);

            return searchName > -1 || searchValue > -1;
          });
        } else {
          return this.items;
        }
      },
      
      selectedName () {
        return (this.items.find((x) => {
          return x.value == this.value;
        }) || {}).name;
      },

      cls () {
        return this.booleanPropMatcher({
          opened : 'is-opened',
          rounded: 'is-rounded'
        });
      },

      icon () {
        if(this.loading) {
          return "fas fa-sync fa-spin"
        } else if (this.opened) {
          return "fas fa-angle-up"
        } else {
          return "fas fa-angle-down"
        }
      },

      contentStyle () {
        return {
          width: this.menuWidth + "px"
        }
      }
    },

    methods: {
      toggle (val) {
        this.opened = val;
        
        if(val && this.searchable) {
          this.$nextTick(() => {
            this.$refs.searchInput.focus();
          })
        } else {
          this.searchValue = null;
        }
      },

      search (value) {
        this.searchValue = value;
      },

      select (itemValue) {
        this.$emit('change', itemValue);
        this.opened = false;
      }
    },

    mounted () {
      this.menuWidth = this.$refs.input.$el.offsetWidth;
      this.resizeWatcher = observeElementResize(this.$refs.input.$el, () => {
        this.menuWidth = this.$refs.input.$el.offsetWidth;
      });
    },

    destroyed () {
      if(this.resizeWatcher) {
        this.resizeWatcher.end();
      }
    },

    components: {
      "input-base"     : InputBase,
      "component-input": TextInput,
      "component-icon" : Icon,

      "component-dropdown"     : Dropdown,
      "component-pretty-scroll": PrettyScroll,
    }
  }

</script>