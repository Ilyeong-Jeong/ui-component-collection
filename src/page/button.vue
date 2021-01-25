<template>
  <common-panel
    title="Button"
    desc="Button Component Example"
  >
    <!-- Default Button -->
    <common-block
      name="Default Button"
    >
      <template slot="block-list">
        <component-button>Button</component-button>

        <component-button disabled>Button</component-button>

        <component-button error>Button</component-button>

        <component-button warning>Button</component-button>

        <component-button success>Button</component-button>

        <component-button default>Button</component-button>

        <component-button small>Button</component-button>

        <component-button large>Button</component-button>

        <component-button loading>Button</component-button>

        <component-button>
          <component-icon
            slot="icon"
            icon="fas fa-check-circle"
          ></component-icon>
          Button
        </component-button>

        <component-button disabled>
          <component-icon
            slot="icon"
            icon="fas fa-check-circle"
          ></component-icon>
          Button
        </component-button>

        <component-button small>
          <component-icon
            slot="icon"
            icon="fas fa-check-circle"
          ></component-icon>
          Button
        </component-button>

        <component-button large>
          <component-icon
            slot="icon"
            icon="fas fa-check-circle"
          ></component-icon>
          Button
        </component-button>

        <component-button icon>
          <component-icon slot="icon"
            icon="fas fa-check"
          ></component-icon>
        </component-button>

        <component-button icon disabled>
          <component-icon slot="icon"
            icon="fas fa-check"
          ></component-icon>
        </component-button>

        <component-button icon rounded>
          <component-icon slot="icon"
            icon="fas fa-check"
          ></component-icon>
        </component-button>

        <component-button icon small>
          <component-icon slot="icon"
            icon="fas fa-check"
          ></component-icon>
        </component-button>

        <component-button icon large>
          <component-icon slot="icon"
            icon="fas fa-check"
          ></component-icon>
        </component-button>
      </template>
    </common-block>

    <!-- Secondary Button -->
    <common-block
      name="Secondary Button"
    >
      <template slot="block-list">
        <component-button secondary>Button</component-button>

        <component-button secondary disabled>Button</component-button>

        <component-button secondary error>Button</component-button>

        <component-button secondary warning>Button</component-button>

        <component-button secondary success>Button</component-button>

        <component-button secondary default>Button</component-button>

        <component-button secondary small>Button</component-button>

        <component-button secondary large>Button</component-button>

        <component-button secondary loading>Button</component-button>

        <component-button secondary>
          <component-icon
            slot="icon"
            icon="fas fa-check-circle"
          ></component-icon>
          Button
        </component-button>

        <component-button secondary disabled>
          <component-icon
            slot="icon"
            icon="fas fa-check-circle"
          ></component-icon>
          Button
        </component-button>

        <component-button secondary small>
          <component-icon
            slot="icon"
            icon="fas fa-check-circle"
          ></component-icon>
          Button
        </component-button>

        <component-button secondary large>
          <component-icon
            slot="icon"
            icon="fas fa-check-circle"
          ></component-icon>
          Button
        </component-button>

        <component-button secondary icon>
          <component-icon slot="icon"
            icon="fas fa-check"
          ></component-icon>
        </component-button>

        <component-button secondary icon disabled>
          <component-icon slot="icon"
            icon="fas fa-check"
          ></component-icon>
        </component-button>

        <component-button secondary icon rounded>
          <component-icon slot="icon"
            icon="fas fa-check"
          ></component-icon>
        </component-button>

        <component-button secondary icon small>
          <component-icon slot="icon"
            icon="fas fa-check"
          ></component-icon>
        </component-button>

        <component-button secondary icon large>
          <component-icon slot="icon"
            icon="fas fa-check"
          ></component-icon>
        </component-button>
      </template>
    </common-block>

    <!-- Outline Button -->
    <common-block
      name="Outline Button"
    >
      <template slot="block-list">
        <component-outline-button>Button</component-outline-button>

        <component-outline-button disabled>Button</component-outline-button>

        <component-outline-button error>Button</component-outline-button>

        <component-outline-button warning>Button</component-outline-button>

        <component-outline-button success>Button</component-outline-button>

        <component-outline-button default>Button</component-outline-button>

        <component-outline-button small>Button</component-outline-button>

        <component-outline-button large>Button</component-outline-button>

        <component-outline-button loading>Button</component-outline-button> 

        <component-outline-button>
          <component-icon
            slot="icon"
            icon="fas fa-check-circle"
          ></component-icon>
          Button
        </component-outline-button>

        <component-outline-button disabled>
          <component-icon
            slot="icon"
            icon="fas fa-check-circle"
          ></component-icon>
          Button
        </component-outline-button>

        <component-outline-button small>
          <component-icon
            slot="icon"
            icon="fas fa-check-circle"
          ></component-icon>
          Button
        </component-outline-button>

        <component-outline-button large>
          <component-icon
            slot="icon"
            icon="fas fa-check-circle"
          ></component-icon>
          Button
        </component-outline-button> 

        <component-outline-button icon>
          <component-icon slot="icon"
            icon="fas fa-check"
          ></component-icon>
        </component-outline-button>

        <component-outline-button icon disabled>
          <component-icon slot="icon"
            icon="fas fa-check"
          ></component-icon>
        </component-outline-button>

        <component-outline-button icon rounded>
          <component-icon slot="icon"
            icon="fas fa-check"
          ></component-icon>
        </component-outline-button>

        <component-outline-button icon small>
          <component-icon slot="icon"
            icon="fas fa-check"
          ></component-icon>
        </component-outline-button>

        <component-outline-button icon large>
          <component-icon slot="icon"
            icon="fas fa-check"
          ></component-icon>
        </component-outline-button>
      </template>
    </common-block>

    <!-- Dropdown Button -->
    <common-block
      name="Dropdown Button"
    >
      <template slot="block-list">
        <component-dropdown-button>
          button
          <div 
            class="bg-grey-dim2"
            slot="contents"
          >
            dropdown contents
          </div>
        </component-dropdown-button> 

        <component-dropdown-button
          disabled
        >
          button
          <div 
            class="bg-grey-dim2"
            slot="contents"
          >
            dropdown contents
          </div>
        </component-dropdown-button> 

        <component-dropdown-button
          error
        >
          button
          <div 
            class="bg-grey-dim2"
            slot="contents"
          >
            dropdown contents
          </div>
        </component-dropdown-button> 

        <component-dropdown-button
          warning
        >
          button
          <div 
            class="bg-grey-dim2"
            slot="contents"
          >
            dropdown contents
          </div>
        </component-dropdown-button>

        <component-dropdown-button
          success
        >
          button
          <div 
            class="bg-grey-dim2"
            slot="contents"
          >
            dropdown contents
          </div>
        </component-dropdown-button>

        <component-dropdown-button
          default
        >
          button
          <div 
            class="bg-grey-dim2"
            slot="contents"
          >
            dropdown contents
          </div>
        </component-dropdown-button>

        <component-dropdown-button
          small
        >
          button
          <div 
            class="bg-grey-dim2"
            slot="contents"
          >
            dropdown contents
          </div>
        </component-dropdown-button>

        <component-dropdown-button
          large
        >
          button
          <div 
            class="bg-grey-dim2"
            slot="contents"
          >
            dropdown contents
          </div>
        </component-dropdown-button>

        <component-dropdown-button
          loading
        >
          button
          <div 
            class="bg-grey-dim2"
            slot="contents"
          >
            dropdown contents
          </div>
        </component-dropdown-button> 

        <component-dropdown-button
          iconCls="fas fa-check-circle"
        >
          button
          <div 
            class="bg-grey-dim2"
            slot="contents"
          >
            dropdown contents
          </div>
        </component-dropdown-button>  
      </template>
    </common-block>

    <!-- Icon Button -->
    <common-block
      name="Icon Button"
    >
      <template slot="block-list">
        <component-icon-button
          icon="fas fa-cog"
        ></component-icon-button>

        <component-icon-button
          icon="fas fa-cloud"
          active 
        ></component-icon-button>

        <component-icon-button
          icon="fas fa-eye"
          disabled
        ></component-icon-button>

        <component-icon-button
          icon="fas fa-times-circle"
          error
        ></component-icon-button>

        <component-icon-button
          icon="fas fa-star"
          warning
        ></component-icon-button>

        <component-icon-button
          icon="fas fa-tree"
          success
        ></component-icon-button>        
      </template>
    </common-block>
  </common-panel>
</template>

<script>

  import Button         from "../components/buttons/button.vue";
  import OutlineButton  from "../components/buttons/outline-button.vue";
  import DropdownButton from "../components/buttons/dropdown-button.vue";
  import IconButton     from "../components/buttons/icon-button.vue";

  import Icon           from "../components/icon.vue";

  export default {

    components: {
      "component-button"         : Button,
      "component-outline-button" : OutlineButton,
      "component-dropdown-button": DropdownButton,
      "component-icon-button"    : IconButton,

      "component-icon"           : Icon
    }

  }
  
</script>