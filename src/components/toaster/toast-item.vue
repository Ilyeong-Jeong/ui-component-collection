<style lang="scss">

  .component-toast-item {
    @apply w-48 p-2 mt-5 rounded cursor-pointer;
    @apply text-white text-large;

    .toast-item-content {
      @apply flex items-center;

      > :first-child {
        @apply mr-1;
      }

      .toast-item-title {
        @apply w-full flex items-center;
      }

      .toast-item-desc {
        @apply w-full text-base flex items-center;
      }
      
    }

    &.is-default {
      @apply bg-grey-primary;
    }

    &.is-active {
      @apply bg-blue-primary;
    }

    &.is-error {
      @apply bg-red-primary;
    }

    &.is-warning {
      @apply bg-yellow-dim text-black;
    }

    &.is-success {
      @apply bg-green-primary;
    }

    &.is-light {
      @apply bg-grey-dim2 text-black;
    }
  }

</style>

<template>
  <div :class="['component-toast-item', cls]" @click="clickOnClose && hide()">
    <div class="toast-item-content" v-if="title">
      <div>
        <component-icon 
          :icon="icon"
        ></component-icon>
      </div>

      <div class="toast-item-title">
        {{title}}
      </div>
    </div>

    <div class="toast-item-content" v-if="desc">
      <div :class="invisible">
        <component-icon
          :icon="icon"
        ></component-icon>
      </div>
      
      <div class="toast-item-desc">
        {{desc}}
      </div>
    </div>
  </div> 
</template>

<script>

  /**
   * 토스터 아이템 컴포넌트
   */

  import Component from "../mixins/component";

  import Icon from "../icon.vue";

  export default {

    mixins: [Component],

    props: {
      type: {
        /**
         * default active error wraning success light  
         */
      },

      title: {
        type: String
      },
      
      desc: {
        type: String
      },

      icon: {
        type   : String,
        default: 'fas fa-check-circle' 
      },

      timeout: {
        required: true,
        type    : Number
      },

      clickOnClose: {
        type: Boolean
      }
    },

    computed: {
      cls () {
        return `is-${this.type}`;
      },

      invisible () {
        return {
          'invisible': this.title && this.desc
        }
      }
    },

    methods: {
      hide () {
        this.$emit("hide");
      }
    },

    mounted () {
      setTimeout(() => {
        this.hide();
      }, this.timeout);
    },

    components: {
      "component-icon": Icon
    }

  }

</script>