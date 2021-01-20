<style lang="scss">

  .component-tree {
    &.tree-base ul.tree-list {
      @apply ml-4;
    }

    &.disabled {
      @apply opacity-50 pointer-events-none;
    }
  }

</style>

<template>
  <div>
    <tree-base
      :class="['component-tree', {'disabled': disabled}]"
      handle-class="component-tree-item-handle"
      :itemComponent="itemComponent"
      :commonOptions="{'editable': editable, 'selectable': vProps.selectable}"
      v-bind="$attrs"
      v-on="$listeners"
      :selectable="vProps.selectable"
      :misc="vMisc"
      :data-type="dataType" 
      @custom="onCustom"
    ></tree-base>
  </div>
</template>

<script>

  /**
   * 트리 베이스를 활용한 트리 컴포넌트
   */

  import Component  from "../mixins/component";

  import TreeBase from "./tree-base.vue";
  import TreeItem from "./tree-item.vue";

  export default {

    mixins: [Component],

    props: {
      disabled: {
        type: Boolean
      },

      editable: {
        type: Boolean
      },

      itemComponent: {
        default: "component-tree-item",
      },

      noSelectable: {
        type: Boolean
      },
      
      checkbox: {
        type: Boolean
      },

      radio: {
        type: Boolean
      },

      multi: {
        type: Boolean
      },

      multiChild: {
        type: Boolean
      },
      
      dataType: {
        type: String,
        default: "array"
      }
    },

    data () {
      return {
        editItemKey  : null,
        removeItemKey: null
      }
    },

    computed: {
      vProps () {
        const props = this.booleanPropMatcher({
          noSelectable  : {
            selectable: null,
          },
          checkbox: {
            selectable: "multi",
            misc      : {
              selectType: "checkbox",
              multiChild: this.multiChild
            }
          },
          radio: {
            selectable: "single",
            misc      : {
              selectType: "radio"
            }
          },
          multi: {
            selectable: "multi",
            misc      : {
              selectType: "common",
              multiChild: this.multiChild
            }
          }
        });

        if(props.length == 0) {
          return {
            selectable: "single",
            misc: {
              selectType: "common",
            }
          }
        } else {
          return props[0];
        }
      },

      vMisc () {
        return Object.assign({}, this.vProps.misc, {
          editItemKey: this.editItemKey
        })
      }
    },

    methods: {
      onCustom ({eventName, params = {}}) {
        switch(eventName) {
          case "edit": {
            this.edit(params.key);
            break;
          }

          case "submitEdit": {
            this.submitEdit(params.key, params.newValue);
            break;
          }

          case "exitEdit": {
            this.exitEdit();
            break;
          }

          case "removeReady": {
            this.removeReady(params.key);
            break;
          }
        }
      },

      edit (key) {
        this.editItemKey = key;
        this.$emit("openEdit", key);
      },

      exitEdit () {
        this.$emit("editCancel", this.editItemKey);
        this.editItemKey = null;
      },

      submitEdit (key, newValue) {
        this.$emit("edit", key, newValue);
      },

      removeReady (key) {
        this.removeItemKey = key;
      },   

      remove () {
        this.$emit("remove", this.removeItemKey);
      }
    },

    components: {
      "tree-base"          : TreeBase,
      "component-tree-item": TreeItem
    }
  }

</script>