<template>
  <page-panel
    title="Toaster"
    desc="Toaster Component Example"
  >
    <template slot="panel-list">
      <component-button default @click="showToast('default')">Default</component-button>
      <component-button @click="showToast('active')">Active</component-button>
      <component-button error @click="showToast('error')">Error</component-button>
      <component-button warning @click="showToast('warning')">Warning</component-button>
      <component-button success @click="showToast('success')">Success</component-button>
      <component-button secondary @click="showToast('light')">Light</component-button>
    </template>  

    <component-toaster ref="toaster"></component-toaster>
  </page-panel>
</template>

<script>

  import Toaster from "../components/toaster/toaster.vue";

  import Button from "../components/buttons/button.vue";

  export default {

    methods: {
      showToast (toastType) {

        const matcher = {
          default: {
            title: "Confirmed",
          },
          active: {
            desc: 'Succeed',
          },
          error: {
            title: "Failed",
            desc : "There was a problem processing the requested information.",
            icon : "fas fa-times-circle"
          },
          warning: {
            title: "Unstable network",
            icon : "fas fa-exclamation-triangle"
          },
          success: {
            title: "Completed",
            desc : "The information you entered has been processed successfully.",
          },
          light: {
            desc: 'The notification has arrived.',
          }
        }

        this.$refs.toaster.show({
          type   : toastType,
          ...matcher[toastType]
        });
      }
    },

    components: {
      "component-toaster": Toaster,
      "component-button" : Button
    }

  }
  
</script>