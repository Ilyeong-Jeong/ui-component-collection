<template>
  <common-panel
    title="Input"
    desc="Input Component Example"
  >
    <!-- Text Input -->
    <common-block
      name="Text Input"
    >
      <template slot="block-list">
        <component-input placeholder="placeholder"></component-input>
        <component-input disabled value="disabled"></component-input>
        <component-input active placeholder="active"></component-input>
        <component-input error placeholder="error"></component-input>
        <component-input warning placeholder="warning"></component-input>
        <component-input success placeholder="success"></component-input>
        <component-input rounded placeholder="rounded"></component-input> 
        <component-input small placeholder="small"></component-input>
        <component-input large placeholder="large"></component-input> 
      </template>
    </common-block>

    <!-- Icon Input -->
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
          placeholder="active"
        ></component-icon-input>

        <component-icon-input
          error
          icon="fas fa-search"
          placeholder="error"
        ></component-icon-input>

        <component-icon-input
          warning
          icon="fas fa-search"
          placeholder="warning"
        ></component-icon-input>

        <component-icon-input
          success
          icon="fas fa-search"
          placeholder="success"
        ></component-icon-input>

        <component-icon-input
          rounded
          icon="fas fa-search"
          placeholder="rounded"
        ></component-icon-input>

        <component-icon-input
          small
          icon="fas fa-search"
          placeholder="small"
        ></component-icon-input>

        <component-icon-input
          large
          icon="fas fa-search"
          placeholder="large"
        ></component-icon-input>
      </template>
    </common-block> 

    <!-- Selectbox -->
    <common-block
      name="Selectbox (searchable)"
    >
      <template slot="block-list">
        <component-selectbox
          placeholder="placeholder"
          :items="items"
          :value="value"
          @change="(val) => value = val"
        ></component-selectbox>

        <component-selectbox
          placeholder="search"
          :searchable="true"
          :items="items"
          :value="value"
          @change="(val) => value = val"
        ></component-selectbox>

        <component-selectbox
          disabled
          placeholder="disabled"
          :items="items"
          :value="value"
          @change="(val) => value = val"
        ></component-selectbox>

        <component-selectbox
          loading
          placeholder="loading"
          :items="items"
          :value="value"
          @change="(val) => value = val"
        ></component-selectbox>

        <component-selectbox
          error
          placeholder="error"
          :items="items"
          :value="value"
          @change="(val) => value = val"
        ></component-selectbox>

        <component-selectbox
          warning
          placeholder="warning"
          :items="items"
          :value="value"
          @change="(val) => value = val"
        ></component-selectbox>

        <component-selectbox
          success
          placeholder="success"
          :items="items"
          :value="value"
          @change="(val) => value = val"
        ></component-selectbox>

        <component-selectbox
          rounded
          placeholder="rounded"
          :items="items"
          :value="value"
          @change="(val) => value = val"
        ></component-selectbox>

        <component-selectbox
          small
          placeholder="small"
          :items="items"
          :value="value"
          @change="(val) => value = val"
        ></component-selectbox>

        <component-selectbox
          large
          placeholder="large"
          :items="items"
          :value="value"
          @change="(val) => value = val"
        ></component-selectbox>
      </template>
    </common-block> 

    <!-- Button Input -->
    <common-block
      name="Button Input"
    >
      <template slot="block-list">
        <component-button-input
          placeholder="placeholder"
          buttonText="btn"
        ></component-button-input>

        <component-button-input
          placeholder="icon"
          icon 
          iconCls="fas fa-check"
        ></component-button-input>

        <component-button-input
          disabled
          placeholder="disabled"
          buttonText="btn"
        ></component-button-input>

        <component-button-input
          loading
          placeholder="loading"
          buttonText="btn"
        ></component-button-input>
      </template>
    </common-block>

    <!-- Textarea -->
    <common-block
      name="Textarea"
    >
      <template slot="block-list">
        <component-textarea width="250px" placeholder="placeholder"></component-textarea>
        <component-textarea width="250px" disabled placeholder="disabled"></component-textarea>
        <component-textarea width="250px" active placeholder="active"></component-textarea>
        <component-textarea width="250px" error placeholder="error"></component-textarea>
        <component-textarea width="250px" warning placeholder="warning"></component-textarea>
        <component-textarea width="250px" success placeholder="success"></component-textarea>
      </template>
    </common-block>    
  </common-panel>
</template>

<script>

  import TextInput   from "../components/inputs/text-input.vue";
  import IconInput   from "../components/inputs/icon-input.vue";
  import Selectbox   from "../components/inputs/selectbox.vue";
  import ButtonInput from "../components/inputs/button-input.vue";
  import Textarea    from "../components/inputs/textarea.vue";

  import Icon        from "../components/icon.vue";

  export default {

    data () {
      return {
        items: [
          {name: "Fran", value: "f"},
          {name: "Cindy", value: "c"},
          {name: "Annie", value: "a"}
        ],

        value: null
      }
    },

    components: {
      "component-input"       : TextInput,
      "component-icon-input"  : IconInput,
      "component-selectbox"   : Selectbox,
      "component-button-input": ButtonInput,
      "component-textarea"    : Textarea,
      "component-icon"        : Icon
    }

  }
  
</script>