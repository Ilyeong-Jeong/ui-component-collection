<template>
  <li :data-key="key">
    <component 
      :is="itemComponent"
      class="root-tree-item"
      :key="key"
      :is-root="isRoot"
      :children="children"
      :data="data"
      :option="option"
      :folded="fold"
      @toggle="toggle"
      @select="onSelect"
      @selectAll="onSelectAll"
      @deselect="onDeSelect"
      @custom="onCustom"
    >
    </component>
    
    <ul :data-parent-key="key" :class="[listClass]" v-show="!fold">
      <root-tree-item
        v-for="child in children"
        v-bind="child"
        :key="child.key"
      ></root-tree-item>
    </ul>
  </li>
</template>

<script>

  /**
    트리 아이템 컴포넌트
  */

  export default {

    name: "root-tree-item",

    props: {
      data    : Object,
      option  : Object,
      children: Array,
      isRoot: {
        type   : Boolean,
        default: false
      },
      folded: Boolean,
      misc  : {
        default (){
          return {};
        }
      }
    },

    inject: [
      "itemComponent",
      "handleClass",
      "listClass",
      "initialFolded",
      "dragable",
      "selectable",
      "commonOptions",
      "_misc",
      "_selected",
      "eventBus"
    ],

    data () {
      return {
        fold: (() => {
          if(this.folded !== undefined) {
            return this.folded;
          } else {
            return this.initialFolded;
          }
        })()
      }
    },

    computed: {
      key () {
        return this.$vnode.key;
      }
    },

    methods: {
      
      toggle () {
        this.fold = !this.fold;
      },

      onSelect () {
        if(this.selectable === "single" || this.selectable === "multi") {
          this.eventBus.$emit("select", this.key);
        }
      },

      onSelectAll () {

        const selectKeys = [];

        const req = (key, children) => {
          
          selectKeys.push(key);
          
          if(children.length > 0) {
            children.map((child) => {
              req(child.key, child.children);
            });
          }
        }

        if(this.selectable === "multi") {
          req(this.key, this.children);
          this.eventBus.$emit("selectAll", selectKeys);
        }
      },

      onDeSelect () {
        if(this.selectable === "single" || this.selectable === "multi") {
          this.eventBus.$emit("deselect", this.key);
        }
      },

      onCustom ({eventName, params}) {
        this.eventBus.$emit("custom", {eventName, params});
      }
    }
  }
</script>