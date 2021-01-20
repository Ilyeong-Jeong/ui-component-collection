<style lang="scss">

  @import "~dragula/dist/dragula";

  .tree-base {
    // tree 컴포넌트에 종속된 style 제거
    ul {
      list-style: none;
    }
    
    ul.tree-list {
      padding    : 0px;
      margin-left: 20px;
    }
    
    .handle {
      cursor: move;
    }

    &.is-multi-root {
      .tree-item.root {
        > .tree-item-base {
          display: none;
        }

        > ul.tree-list {
          margin-left: 0px;
        }
      }
    }
  }

</style>

<template>
  <ul ref="tree" :class="['tree-base', , {'is-multi-root': multiRoot}]">
    <tree-item-base :class="[$options.itemClass, $options.rootClass]"
      :is-root="true"
      v-bind="vRootData"
      :key="vRootData.key"
      v-on="$listeners"
    >
    </tree-item-base>
  </ul>
</template>

<script>

  /**
   * 모든 dragable한 트리의 베이스가 되는 트리 컴포넌트
   */ 

  import dragula from "dragula";

  import TreeItemBase from "./tree-item-base.vue";

  import EventBus from "./event-bus";

  import { getOrEmptyArray, arrayToTree, elementContains } from "../utils";

  export default {

    props: {
      /**
       * tree or array
        tree: {
          key
          folded
          data
          option
          children: [
            key,
            data,
            option,
            children: []
          ]
        }
        array: [
          {key, parentKey, folded, rank, options }
        ]
       */
      dataType: {
        default () {
          return "tree";
        }
      },

      /**
       * 다중루트
       */
      multiRoot: {
        type: Boolean
      },
      
      /**
       * 루트데이터. multiRoot가 true이면 array
       */
      rootData: {

      },

      /**
       * 처음부터 접혀있을것인지 여부
       */
      folded: {
        type   : Boolean,
        default: false
      },

      /**
       * 순서 변경할 수 있는지 여부
       */
      dragable: {
        type   : Boolean,
        default: true
      },

      /**
       * dragable이 true일때 drag accept
       */
      dragAccept: {
        type: Function,
        default () {
          return true;
        }
      },

      /**
       * 단일선택, 다중선택 여부
       */
      selectable: {
        default: null,
        validator (value) {
          if(value) {
            return ["single", "multi"].includes(value);
          } else {
            return true;
          }
        }
      },

      /**
       * 선택된 tree 노드 정보
       */
      selected: {
        type: Array,
        default () {
          return [];
        }
      },

      /**
       * move할때 handle 클래스
       */
      handleClass: {
        type   : String,
        default: "handle"
      },

      /**
       * 아이템 컴포넌트 이름
       */
      itemComponent: {
        type: String
      },
      
      /**
       * 일반 옵션들
       */
      commonOptions: Object,
      
      /**
       * 기타 옵션들
       */
      misc: {
        default () {
          return {}
        }
      }
    },

    /**
     * 기타 스타일 관련들
     */
    itemClass: "tree-item",
    listClass: "tree-list",
    rootClass: "root",

    /**
     * 드래그 관련
     */
    listKeyProp: "data-parent-key",
    itemKeyProp: "data-key",

    provide () {
      return {
        itemComponent: this.itemComponent,
        handleClass  : this.handleClass,
        listClass    : this.$options.listClass,
        itemClass    : this.$options.itemClass,
        initialFolded: this.folded,
        dragable     : this.dragable,
        selectable   : this.selectable,
        commonOptions: this.commonOptions,
        eventBus     : this.eventBus,
        _misc        : () => {
          return this.misc;
        },
        _selected    : () => {
          return this.selected;
        },
      }
    },

    data () {
      return {
        drake   : null,
        eventBus: EventBus()
      }
    },

    computed: {
      multiRootKey () {
        return "__root__";
      },

      vRootData () {
        if(this.dataType == "array") {

          const rootData = (() => {
            if(this.multiRoot) {
              return [
                {
                  key: this.multiRootKey,
                  parentKey: null,
                  data: {
                    name: "root"
                  },
                },
                ...this.rootData.map((dt) => {
                  if(dt.parentKey == null) {
                    return Object.assign({}, dt, {
                      parentKey: this.multiRootKey
                    });
                  } else {
                    return dt;
                  }
                })
              ];
            } else {
              return this.rootData;
            }
          })();
          
          return arrayToTree(rootData, {
            key      : "key",
            parentKey: "parentKey",
            sortKey  : "rank",
            otherKeys: ["data", "option", "folded"]
          });

        } else {
          if(this.multiRoot) {
            return {
              key: this.multiRootKey,
              data: {
                name: "root"
              },
              children: this.rootData
            }
          } else {
            return this.rootData;
          }
        }
      }
    },

    methods: {
      findItem (keyId) {
        
        let find = null;

        function req(dt, willFind) {
          if(dt.key.toString() === willFind) {
            find = dt;
          } else {
            getOrEmptyArray(dt.children).map((d) => {
              return req(d, willFind);
            });
          }
        }

        req(this.vRootData, keyId);

        return find;
      },

      onSelect (keyId) {
        // single select
        if(this.selectable === "single") {
          this.$emit("selectChanged", [keyId]);
        }
        // multie select
        if(this.selectable === "multi") {
          this.$emit("selectChanged", [keyId, ...this.selected]);
        }
      },

      onSelectAll (keyIds) {
        if(this.selectable == "multi") {
          this.$emit("selectChanged", [...keyIds, ...this.selected]);
        }
      },

      onDeSelect (keyId) {
        this.$emit("selectChanged", this.selected.filter((item) => {
          return item !== keyId;
        }));
      },

      onCustom ({eventName, params}) {
        this.$emit("custom", {eventName, params});
      }
    },

    mounted () {
      // 이벤트 버스 구독
      this.eventBus.$on("select", (val) => {
        this.onSelect(val);
      });
      this.eventBus.$on('selectAll', (val) => {
        this.onSelectAll(val);
      });
      this.eventBus.$on("deselect", (val) => {
        this.onDeSelect(val);
      });
      this.eventBus.$on("custom", this.onCustom);


      if(this.dragable) {

        const self      = this;
        const container = this.$refs.tree;

        this.drake = dragula([container], {
          isContainer (el) {
            return elementContains(container, el) && el.classList.contains(self.$options.listClass);
          },

          moves (el, container, handle) {
            return elementContains(el.querySelector(`.${self.handleClass}`), handle) || handle.classList.contains(self.handleClass);
          },

          accepts (el, target, source, sibling) {
            //const customAccepts = this.
            const customAccept = self.dragAccept(el, target, source, sibling);

            return !elementContains(el, target) && target.classList.contains(self.$options.listClass) && customAccept;
          },

          invalid (el, handle) {
            return el.classList.contains(self.$options.rootClass);
          },

          mirrorContainer: this.$refs.tree
        });

        this.drake.on("drop", (el, target, source, sibling) => {
          
          const sourceListItem = this.findItem(source.getAttribute(this.$options.listKeyProp));
          const destListItem   = this.findItem(target.getAttribute(this.$options.listKeyProp));

          if(sourceListItem && destListItem) {
            const siblingKey = (() => {
              if(sibling) {
                return sibling.getAttribute(this.$options.itemKeyProp);
              };
            })();

            const sourceItem      = this.findItem(el.getAttribute(this.$options.itemKeyProp));
            const destSiblingItem = this.findItem(siblingKey);

            if(sourceItem) {

              if(!destListItem.children) {
                this.$set(destListItem, "children", []);
              }

              const sourceListChildren = getOrEmptyArray(sourceListItem.children);
              const destListChildren   = destListItem.children;

              const sourceIndex = sourceListChildren.indexOf(sourceItem);
              // mutate
              sourceListChildren.splice(sourceIndex, 1);

              const destIndex = (() => {
                const index = destListChildren.indexOf(destSiblingItem);
                if(index === -1) {
                  return destListChildren.length;
                } else {
                  return index;
                }
              })();

              // mutate2
              destListChildren.splice(destIndex, 0, sourceItem);

              // arrange data
              if(this.dataType == "array") {

                const treeToArray = () => {

                  const target = this.vRootData;
                  
                  const sourceIndex = destListChildren.indexOf(sourceItem);
                  // 다음 순번은.. 이전 시블링의 rank + 1이다
                  const nextRank    = (destListChildren[sourceIndex - 1] || {
                    rank: -1
                  }).rank + 1;
                  
                  const r = [];

                  function req (x, px, i) {

                    const rank = (() => {
                      // 같은 시블링에 있으면 rank를 변경해준다
                      const siblingIndex = destListChildren.indexOf(x);
                      if(siblingIndex >= sourceIndex) {
                        return (siblingIndex - sourceIndex) + nextRank;
                      } else {
                        return x.rank;
                      }
                    })();

                    r.push({
                      key      : x.key,
                      parentKey: (() => {
                        if(px) {
                          return px.key;
                        }
                      })(),
                      rank  : rank,
                      data  : x.data,
                      option: x.option
                    });

                    x.children.map((c, i) => {
                      return req(c, x, i);
                    });
                  }

                  req(target, null);

                  return r;
                }
                
                let results = treeToArray();

                // 멀티루트면 arrange
                if(this.multiRoot) {
                  results = results
                    .filter((x) => {
                      return x.key != this.multiRootKey;
                    })
                    .map((r) => {
                      if(r.parentKey == this.multiRootKey) {
                        return Object.assign({}, r, {
                          parentKey: null
                        });
                      } else {
                        return r;
                      }
                  });
                }

                const destParent = results.find((y) => {
                  return y.key == destListItem.key;
                });

                const sourceNode = results.find((y) => {
                  return y.key == sourceItem.key;
                });

                this.$emit('move', {
                  rootData  : results,
                  source    : sourceNode,
                  destParent: destParent
                });
              
              } else {
                this.$emit("move", {
                  rootData  : (() => {
                    if(this.multiRoot) {
                      return this.vRootData.children;
                    } else {
                      return this.vRootData;
                    }
                  })(),
                  source    : sourceItem,  // 움직인 아이템 정보
                  destParent: destListItem // 이동 후의 리스트 정보
                });
              }
            }
          }
        });

        this.drake.on("cloned", (clone, original, type) => {

          const bodyRect     = document.body.getBoundingClientRect();
          const originalRect = original.getBoundingClientRect();
          const x            = originalRect.left - bodyRect.left;
          
          clone.onmousemove = (e) => {
            const dragAmount    = e.x - x;
            const minDragAmount = 100;

            if(dragAmount > minDragAmount) {
              const prev = original.previousSibling;
              if(prev) {
                const prevList = prev.querySelector(`.${self.$options.listClass}`);

                if(prevList && prevList.children.length === 0) {
                  // accept
                  const customAccept = self.dragAccept(original, prev);
                  if(customAccept) {
                    prevList.appendChild(original);
                  }
                }
              }
            }
          }
        });
      }
    },

    destroyed () {
      if(this.drake) {
        this.drake.destroy();
      }
    },

    components: {
      "tree-item-base": TreeItemBase
    }
  }
</script>