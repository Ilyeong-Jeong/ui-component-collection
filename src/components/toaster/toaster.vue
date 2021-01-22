<style lang="scss">
  
  $toastRigthMargin: 40px;
  
  .component-toaster {
    @apply fixed z-100;

    right : $toastRigthMargin;
    bottom: 20px;
  }

  .toaster-slide-enter-active, .toaster-slide-leave-active {
    transition: all 0.25s;
  }

  .toaster-slide-enter, .toaster-slide-leave-active {
    @apply opacity-0;

    transform: translateX($toastRigthMargin);
  }

  .toaster-slide-enter-active {
    @apply right-0;
  }
  
</style>

<template>
  <transition-group class="component-toaster" name="toaster-slide" tag="div">
    <component-toast-item
      v-for="(item, idx) in items"
      :key="item.id"
      :type="item.type"
      :title="item.title"
      :desc="item.desc"
      :icon="item.icon"
      :timeout="timeout"
      :clickOnClose="clickOnClose"
      @hide="remove(idx)"
    ></component-toast-item>
  </transition-group>
</template>

<script>

  /**
   * 토스터 컴포넌트
   */

  import Component from "../mixins/component";

  import ToastItem from "./toast-item.vue";

  import { v4 as uuidv4 } from 'uuid';

  export default {

    mixins: [Component],

    props: {
      timeout: {
        type   : Number,
        default: 3000
      },

      clickOnClose: {
        type   : Boolean,
        default: true
      }
    },

    data () {
      return {
        items: [
          /**
           * id, type, title, desc, icon
           */
        ]
      }
    },

    methods: {
      show (props) {
        const newItem = {
          id   : uuidv4(),
          type : props.type,
          title: props.title,
          desc : props.desc,
          icon : props.icon
        }

        this.items.push(newItem);
      },

      remove (idx) {
        this.items.splice(idx, 1);
      }
    },

    components: {
      "component-toast-item": ToastItem
    }
  }
</script>