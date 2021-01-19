<template>
  <common-panel
    title="Input"
    desc="Input Component Example"
  >
    <common-block
      name="Text Input"
    >
      <template slot="block-list">
        <component-input placeholder="placeholder"></component-input>
        <component-input disabled value="disabled"></component-input>
        <component-input active placeholder="placeholder"></component-input>
        <component-input error placeholder="placeholder"></component-input>
        <component-input warning placeholder="placeholder"></component-input>
        <component-input rounded placeholder="rounded"></component-input> 
        <component-input small placeholder="placeholder"></component-input>
        <component-input large placeholder="placeholder"></component-input> 
      </template>
    </common-block>

    <common-block
      name="Icon Input"
    >
      <template slot="block-list">
        <component-icon-input
          icon="fas fa-search"
          placeholder="placeholder"
        ></component-icon-input>

        <component-icon-input
          disabled
          icon="fas fa-search"
          placeholder="disabled"
        ></component-icon-input>

        <component-icon-input
          loading
          icon="fas fa-search"
          placeholder="loading"
        ></component-icon-input>

        <component-icon-input
          active
          icon="fas fa-search"
          placeholder="placeholder"
        ></component-icon-input>

        <component-icon-input
          error
          icon="fas fa-search"
          placeholder="placeholder"
        ></component-icon-input>

        <component-icon-input
          warning
          icon="fas fa-search"
          placeholder="placeholder"
        ></component-icon-input>

        <component-icon-input
          rounded
          icon="fas fa-search"
          placeholder="placeholder"
        ></component-icon-input>

        <component-icon-input
          small
          icon="fas fa-search"
          placeholder="placeholder"
        ></component-icon-input>

        <component-icon-input
          large
          icon="fas fa-search"
          placeholder="placeholder"
        ></component-icon-input>
      </template>
    </common-block>    
  </common-panel>
</template>

<script>

  import TextInput from "../components/inputs/text-input.vue"
  import IconInput from "../components/inputs/icon-input.vue"

  export default {

    components: {
      "component-input"     : TextInput,
      "component-icon-input": IconInput
    }

  }
  
</script>