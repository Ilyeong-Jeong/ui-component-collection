<template>
  <page-panel
    title="Tooltip"
    desc="Tooltip Component Example"
  >
    <template slot="panel-list">
      <component-tooltip>
        <component-button>top</component-button>

        <div slot="tooltip-contents">
          hover top tooltip
        </div>
      </component-tooltip>

      <component-tooltip position="right">
        <component-button error>right</component-button>

        <div slot="tooltip-contents">
          hover right tooltip
        </div>
      </component-tooltip>

      <component-tooltip position="bottom">
        <component-button warning>bottom</component-button>

        <div slot="tooltip-contents">
          hover bottom tooltip
        </div>
      </component-tooltip>

      <component-tooltip position="left">
        <component-button success>left</component-button>

        <div slot="tooltip-contents">
          hover left tooltip
        </div>
      </component-tooltip>

      <component-tooltip showOn="click">
        <component-button default>click</component-button>

        <div slot="tooltip-contents">
          click tooltip
        </div>
      </component-tooltip>
    </template> 
  </page-panel>
</template>

<script>

  import Tooltip from "../components/tooltip.vue";
  import Button from "../components/buttons/button.vue";

  export default {

    components: {
      "component-tooltip": Tooltip,
      "component-button" : Button
    }

  }
  
</script>