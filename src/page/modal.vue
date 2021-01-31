<template>
  <page-panel
    title="Modal"
    desc="Modal Component Example"
  >
    <template slot="panel-list">
      <component-button @click="showModal = true">modal</component-button>
      <component-button default @click="showFooter = true">footer</component-button>
      <component-button error @click="showAlert = true">alert</component-button>
    </template>  

    <component-modal
      :show="showModal"
      title="Modal"
      @close="showModal = false"
    >
      <div>Modal Component Content</div>
    </component-modal>

    <component-modal
      :show="showFooter"
      title="Modal(Footer)"
      @close="showFooter = false"
    >
      <div>Modal(Footer) Component Content</div>

      <template slot="footer">
        <component-button class="mr-2">confirm</component-button>
        <component-button error @click="showFooter = false">close</component-button>
      </template>
    </component-modal>

    <component-modal
      :show="showAlert"
      :headless="true"
      @close="showAlert = false"
    >
      <div>Alert Component Content</div>

      <component-button slot="footer" error @click="showAlert = false">close</component-button>
    </component-modal>
  </page-panel>
</template>

<script>

  import Modal  from "../components/modal.vue";
  import Button from "../components/buttons/button.vue";

  export default {

    data () {
      return {
        showModal : false,
        showFooter: false,
        showAlert : false
      }
    },

    components: {
      "component-modal" : Modal,
      "component-button": Button
    }

  }
  
</script>