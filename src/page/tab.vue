<template>
  <page-panel
    title="Tab"
    desc="Tab Component Example"
  >
    <template slot="panel-list">
      <component-tab>
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
        <component-tab-item
          disabled
          :active="active === 4"
          @active="active = 4"
        > 
          Disabled Tab
        </component-tab-item>
      </component-tab>

      <div v-if="active === 1"
        class="p-4"
      >
        First Tab Content
      </div>

      <div v-if="active === 2"
        class="p-4"
      >
        Second Tab Content
      </div>

      <div v-if="active === 3"
        class="p-4"
      >
        Third Tab Content
      </div>

      <div v-if="active === 4"
        class="p-4"
      >
        Disabled Tab Content (You won't see it anyway...)
      </div>
    </template>  
  </page-panel>
</template>

<script>

  import Tab     from "../components/tab/tab.vue";
  import TabItem from "../components/tab/tab-item.vue";

  export default {

    data () {
      return {
        active: 1
      }
    },

    components: {
      "component-tab"     : Tab,
      "component-tab-item": TabItem,
    }

  }
  
</script>