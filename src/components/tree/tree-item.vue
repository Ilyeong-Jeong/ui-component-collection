<style lang="scss">

  .component-tree-item {
    @apply flex items-center text-grey-primary m-px;

    .tree-item-action {
      @apply hidden;
    }

    &:hover:not(.is-selected) {
      .tree-item-action {
        @apply inline-block;
      }
    }

    .tree-item-prefix {
      @apply w-8 h-8 flex items-center justify-center;
    }

    .tree-item-empty-dot {
      @apply flex-none text-grey-primary;
    }

    .name-component {
      @apply flex items-center w-full flex-1;
    }

    &.is-selected.is-common {
      @apply rounded-lg bg-blue-primary text-white cursor-pointer;

      .tree-item-empty-dot {
        @apply text-white;
      }

      .tree-item-fold-button {
        @apply text-white;
      }
    }
  }

</style>

<template>
  <div :class="['component-tree-item', {'is-selected': isSelected, 'is-common': misc.selectType == 'common'}]">

    <component-icon-button
      v-if="dragable"
      class="component-tree-item-handle flex-none"
      icon="fas fa-grip-vertical"
    ></component-icon-button>

    <template v-else>
      <div v-if="hasChildren">
        <component-icon-button
          class="tree-item-fold-button"
          :icon="['fas', {'fa-angle-down': !folded, 'fa-angle-up': folded}]"
          @click="$emit('toggle')"
        ></component-icon-button>
      </div>

      <div class="tree-item-prefix tree-item-empty-dot" v-else>
        •
      </div>
    </template>

    <div class="flex items-center flex-1"
      v-if="!editing"
    >

      <template v-if="nodeOptions.selectable">
        <div class="tree-item-prefix tree-item-checkradio" v-if="misc.selectType == 'checkbox' || misc.selectType == 'radio'">
          <component-checkbox 
            v-if="misc.selectType == 'checkbox'"
            :size="16"
            :checked="isSelected"
            @change="updateSelect"
          ></component-checkbox>

          <component-radio 
            v-if="misc.selectType == 'radio'"
            :size="16"
            :checked="isSelected.toString()"
            value="true"
            @change="updateSelect"
          ></component-radio>
        </div>
      </template>

      <slot
        v-bind:data="data"
        v-bind:options="nodeOptions"
        v-bind:updateSelect="updateCommonSelect" 
        v-bind:isSelected="isSelected"
      >
        <div v-if="data.avatar"
          class="tree-item-prefix tree-item-avatar"
        >
          <component-avatar
            :username="data.avatar.username"
            :size="24"
          ></component-avatar>
        </div>

        <component :is="nameComponent"
          :active="isSelected"
          @click="updateCommonSelect"
          :class="['name-component', nameCls]"
        >
          <div>
            <component-icon 
              v-if="data.icon"
              :icon="data.icon"
              :color="data.color"
            >
            </component-icon>
          </div>

          <div class="full-ellipsis mr-2">
            {{data.name}}
          </div>
        </component>
      </slot>

    </div>

    <div class="flex items-center" v-else>
      <component-text-input
        width="100%"
        :value="data.name"
      ></component-text-input>

      <component-icon-button
        active 
        autoWidth 
        autoHeight 
        icon="fas fa-check"
      ></component-icon-button>

      <component-icon-button
        error
        autoWidth
        autoHeight
        icon="fas fa-times" 
        @click="editing = false"
      ></component-icon-button>
    </div>
    
    <template v-if="nodeOptions.editable && !editing">
      <slot name="action-menu" 
        v-bind:data="data"
      >
        <component-icon-button
          autoWidth
          autoHeight
          class="tree-item-action"
          icon="fas fa-pencil-alt"
          @click="editing = true"
        ></component-icon-button>

        <component-icon-button
          autoWidth
          autoHeight
          class="tree-item-action"
          icon="fas fa-trash-alt"
        ></component-icon-button>
      </slot>
    </template>

  </div>
</template>

<script>

  /**
   * 스타일과 기능이 추가된 트리 아이템 컴포넌트
   */

  import TreeNode from "./tree-node";

  import Component from "../mixins/component";

  import Avatar     from "../avatar.vue"
  import Checkbox   from "../checkbox.vue"
  import Icon       from "../icon.vue";
  import Link       from "../link.vue"
  import Radio      from "../radio.vue"
  import IconButton from "../buttons/icon-button.vue"
  import TextInput  from "../inputs/text-input.vue"

  export default {

    mixins: [Component, TreeNode],

    data () {
      return {
        editing: false
      }
    },

    computed: {
      nameComponent () {
        if(this.nodeOptions.selectable && this.misc.selectType == 'common') {
          return "div"
        } else {
          return "div"
        }
      },

      nameCls () {
        if(this.nodeOptions.selectable && this.misc.selectType == 'common') {
          return "cursor-pointer"
        } else {
          return null
        }
      }
    },

    methods: {
      updateSelect () {
        if(this.nodeOptions.selectable) {
          if(this.misc.selectType == 'radio' || (this.misc.selectType == 'common' && this.nodeOptions.selectable == 'single')) {
            this.$emit('select', this.key);
          }

          if(this.misc.selectType == 'checkbox' || (this.misc.selectType == 'common' && this.nodeOptions.selectable == 'multi')) {
            if(!this.isSelected) {

              if(this.misc.multiChild) {
                this.$emit('selectAll', this.key);
              } else {
                return this.$emit('select', this.key);
              }
            
            } else {
              this.$emit('deselect', this.key);
            }
          }
        }
      },

      updateCommonSelect () {
        if(this.misc.selectType == 'common') {
          this.updateSelect();
        }
      }
    },

    mounted () {
      this.$on("edit", () => {
        this.editing = true;
      });
    },

    components: {
      "component-icon"       : Icon,     
      "component-checkbox"   : Checkbox, 
      "component-radio"      : Radio,      
      "component-link"       : Link, 
      "component-avatar"     : Avatar,
      "component-icon-button": IconButton, 
      "component-text-input" : TextInput  
    }
  }

</script>