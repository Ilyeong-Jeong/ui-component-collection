<style lang="scss">

  .component-dashboard-widget {

  }

</style>

<template>

  <component-content-panel
    class="component-dashboard-widget"
  >
    <component-content-panel-header 
      slot="header"
      v-if="!headless"
      :title="title"
      class="w-auto"      
    >
      <template slot="left" v-if="!title">
        <slot name="widget-left"></slot>
      </template>

      <template slot="right">
        <slot name="widget-right" v-if="$slots['widget-right']"></slot>
      </template>

    </component-content-panel-header>

    <slot></slot>
  </component-content-panel>

</template>

<script>

  /**
   * 대시보드 위젯 컴포넌트
   */

  import ContentPanelHeader from "../content-panel/panel-header.vue";
  import ContentPanel       from "../content-panel/index.vue";

  export default {
    
    props: {
      title: {
        type: String
      },

      headless: {
        type   : Boolean,
        default: false         
      }
    },

    components: {
      "component-content-panel-header": ContentPanelHeader,
      "component-content-panel"       : ContentPanel,
    }

  }
</script>