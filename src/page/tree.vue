<template>
  <page-panel
    title="Tree"
    desc="Reordering Tree Component Example"
  >
    <template slot="panel-list">
      <component-content-panel class="w-80">
        <component-tree
          :root-data="treeData"
          data-type="array"
          item-component="component-tree-item"
          :dragable="false"
          :editable="true"
          :selected="selected"
          @selectChanged="(val) => selected = val"
        ></component-tree>
      </component-content-panel>

      <component-content-panel class="w-80">
        <component-tree
          :root-data="treeData"
          data-type="array"
          item-component="component-tree-item"
          disabled
          :dragable="false"
          :editable="true"
          :selected="selected"
          @selectChanged="(val) => selected = val"
        ></component-tree>
      </component-content-panel>

      <component-content-panel class="w-80">
        <component-tree
          :root-data="treeData"
          data-type="array"
          item-component="component-tree-item"
          checkbox
          :dragable="false"
          :editable="true"
          :selected="selectedCheckbox"
          @selectChanged="(val) => selectedCheckbox = val"
        ></component-tree>
      </component-content-panel>

      <component-content-panel class="w-80">
        <component-tree
          :root-data="treeData"
          data-type="array"
          item-component="component-tree-item"
          radio
          :dragable="false"
          :editable="true"
          :selected="selectedRadio"
          @selectChanged="(val) => selectedRadio = val"
        ></component-tree>
      </component-content-panel>

      <component-content-panel class="w-80">
        <component-tree
          :root-data="treeIconData"
          data-type="array"
          item-component="component-tree-item"
          :dragable="false"
          :editable="true"
          :selected="selectedIcon"
          @selectChanged="(val) => selectedIcon = val"
        ></component-tree>
      </component-content-panel>

      <component-content-panel class="w-80">
        <component-tree
          :root-data="treeAvatarData"
          data-type="array"
          item-component="component-tree-item"
          :dragable="false"
          :editable="true"
          :selected="selectedAvatar"
          @selectChanged="(val) => selectedAvatar = val"
        ></component-tree>
      </component-content-panel>

      <component-content-panel class="w-80">
        <component-tree
          :root-data="treeData"
          data-type="array"
          item-component="component-tree-item"
          :dragable="true"
          :editable="false"
          @move="moveTree"
        ></component-tree>
      </component-content-panel>
    </template>
  </page-panel>
</template>

<script>

  import Tree from "../components/tree/tree.vue";

  import ContentPanel from "../components/content-panel/index.vue";

  export default {

    data () {
      return {
        treeData: [
          {
            key: "1",
            parentKey: null,
            folded   : false,
            rank     : 0,
            data     : {
              name: "Tree"
            },
            options: {

            }
          },
          {
            key: "11",
            parentKey: "1",
            folded   : false,
            rank     : 0,
            data     : {
              name: "Tree Child"
            },
            options: {

            }
          },
          {
            key: "12",
            parentKey: "1",
            folded   : false,
            rank     : 1,
            data     : {
              name: "Tree Child"
            },
            options: {
            }
          },
          {
            key: "111",
            parentKey: "11",
            folded   : false,
            rank     : 0,
            data     : {
              name: "Tree Grandchild"
            },
            options: {

            }
          },
          {
            key: "112",
            parentKey: "12",
            folded   : false,
            rank     : 0,
            data     : {
              name: "Tree Grandchild"
            },
            options: {

            }
          },
        ],

        treeIconData: [
          {
            key: "1",
            parentKey: null,
            folded   : false,
            rank     : 0,
            data     : {
              name: "Tree",
              icon: "fas fa-sitemap"
            },
            options: {

            }
          },
          {
            key: "11",
            parentKey: "1",
            folded   : false,
            rank     : 0,
            data     : {
              name: "Tree Child",
              icon: "fas fa-users"
            },
            options: {

            }
          },
          {
            key: "12",
            parentKey: "1",
            folded   : false,
            rank     : 1,
            data     : {
              name: "Tree Child",
              icon: "fas fa-users"
            },
            options: {
            }
          },
          {
            key: "111",
            parentKey: "11",
            folded   : false,
            rank     : 0,
            data     : {
              name: "Tree Grandchild",
              icon: "fas fa-user"
            },
            options: {

            }
          },
          {
            key: "112",
            parentKey: "12",
            folded   : false,
            rank     : 0,
            data     : {
              name: "Tree Grandchild",
              icon: "fas fa-user"
            },
            options: {

            }
          },
        ],

        treeAvatarData: [
          {
            key: "1",
            parentKey: null,
            folded   : false,
            rank     : 0,
            data     : {
              name: "Tree",
              avatar: { username: "User" }
            },
            options: {

            }
          },
          {
            key: "11",
            parentKey: "1",
            folded   : false,
            rank     : 0,
            data     : {
              name  : "Tree Child",
              avatar: { username: "User Child" }
            },
            options: {

            }
          },
          {
            key: "12",
            parentKey: "1",
            folded   : false,
            rank     : 1,
            data     : {
              name  : "Tree Child",
              avatar: { username: "User Child" }
            },
            options: {
            }
          },
          {
            key: "111",
            parentKey: "11",
            folded   : false,
            rank     : 0,
            data     : {
              name  : "Tree Grandchild",
              avatar: { username: "User Grandchild" }
            },
            options: {

            }
          },
          {
            key: "112",
            parentKey: "12",
            folded   : false,
            rank     : 0,
            data     : {
              name  : "Tree Grandchild",
              avatar: { username: "User Grandchild" }
            },
            options: {

            }
          },
        ],

        selected        : [],
        selectedCheckbox: [],
        selectedRadio   : [],
        selectedIcon    : [],
        selectedAvatar  : []
      }
    },

    methods: {
      moveTree ({ rootData }) {
        this.treeData = rootData;
      },
    },

    components: {
      "component-tree"         : Tree,
      "component-content-panel": ContentPanel,
    }

  }
  
</script>