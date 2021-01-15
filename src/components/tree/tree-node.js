export default {

  props: {
    data    : Object,
    option  : Object,
    children: Array,
    isRoot: {
      type   : Boolean,
      default: false
    },
    folded: Boolean
  },
  
  computed: {
    key () {
      return this.$vnode.key;
    },

    misc () {
      return this._misc();
    },

    selected () {
      return this._selected();
    },

    hasChildren () {
      return this.children && this.children.length > 0;
    },
    
    isSelected () {
      if(this.selected) {
        return this.selected.includes(this.key);
      } else {
        return false;
      }
    },

    nodeOptions () {
      return Object.assign({}, this.commonOptions, this.option);
    }
  },

  inject: [
    "itemComponent",
    "handleClass",
    "listClass",
    "initialFolded",
    "dragable",
    "selectable",
    "_selected",
    "commonOptions",
    "_misc"
  ]

}