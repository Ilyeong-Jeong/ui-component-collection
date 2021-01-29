<template>
  <common-panel
    title="Content Panel"
    desc="Content Panel Component Example"
  >
    <common-block
      name="Content Panel"
    >
      <template slot="block-list">
        <component-content-panel
          :width="400"
          :height="200"
        >
          <component-content-panel-header 
            slot="header"
            title="Content Panel Title"  
          ></component-content-panel-header>

          Content Panel Contents
        </component-content-panel>        
      </template>
    </common-block>

    <common-block
      name="Content Panel(Headless)"
    >
      <template slot="block-list">
        <component-content-panel
          :width="400"
          :height="200"
        >
          Content Panel(Headless) Contents
        </component-content-panel>        
      </template>
    </common-block>

    <common-block
      name="Content Panel(Tab)"
    >
      <template slot="block-list">
        <component-content-panel
          :width="400"
          :height="200"
        >
          <component-content-panel-header 
            slot="header"
            title="Content Panel(Tab) Title"  
          ></component-content-panel-header>

          <component-tab slot="tab">
            <component-tab-item
              :active="active === 1"
              @active="active = 1"
            >
              First Tab
            </component-tab-item>
            <component-tab-item
              :active="active === 2"
              @active="active = 2"
            >
              Second Tab
            </component-tab-item>
            <component-tab-item
              :active="active === 3"
              @active="active = 3"
            >
              Third Tab
            </component-tab-item>
          </component-tab>

          <div v-if="active === 1">
            First Tab Content Panel(Tab) Contents
          </div>

          <div v-if="active === 2">
            Second Tab Content Panel(Tab) Contents
          </div>

          <div v-if="active === 3">
            Third Tab Content Panel(Tab) Contents
          </div>
        </component-content-panel>        
      </template>
    </common-block>
  </common-panel>
</template>

<script>

  import ContentPanelHeader from "../components/content-panel/panel-header.vue";
  import ContentPanel       from "../components/content-panel/index.vue";
  import Tab                from "../components/tab/tab.vue";
  import TabItem            from "../components/tab/tab-item.vue";

  export default {

    data () {
      return {
        active: 1
      }
    },

    components: {
      "component-content-panel-header": ContentPanelHeader,
      "component-content-panel"       : ContentPanel,
      "component-tab"                 : Tab,
      "component-tab-item"            : TabItem,
    }

  }
  
</script>