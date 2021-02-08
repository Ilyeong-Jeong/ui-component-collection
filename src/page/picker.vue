<style lang="scss">

  .picker-color-block {
    @apply w-12 h-12 ml-8 border border-black;
  }

</style>

<template>
  <page-panel
    title="Picker"
    desc="Picker Component Example"
  >
    <page-block
      name="Color Picker"
    >
      <template slot="block-list">
        <component-color-picker
          @change="updateColor"
        ></component-color-picker>

        <div class="picker-color-block" :style="'background-color:' + color"></div>
      </template>  
    </page-block>  

    <page-block
      name="Emoji Picker"
    >
      <template slot="block-list">
        <component-emoji-picker
          @select="updateEmoji"
        ></component-emoji-picker>

        <component-emoji
          class="ml-8"
          v-if="Object.keys(emoji).length != 0"
          :id="emoji.id"
          :size="64"
        ></component-emoji>
      </template>
    </page-block>  
  </page-panel>
</template>

<script>

  import ColorPicker from "../components/picker/color-picker.vue";
  import EmojiPicker from "../components/picker/emoji-picker.vue";

  import Dropdown   from "../components/dropdown.vue";
  import Emoji      from "../components/emoji.vue";
  import IconButton from "../components/buttons/icon-button.vue";

  export default {

    data () {
      return {
        color: {},
        emoji: {}
      }
    },

    methods: {
      updateColor (colorInfo) {
        this.color = colorInfo;
      },

      updateEmoji (emojiInfo) {
        this.emoji = emojiInfo;
      },
    },

    components: {
      "component-color-picker": ColorPicker,
      "component-emoji-picker": EmojiPicker,

      "component-dropdown"   : Dropdown,
      "component-emoji"      : Emoji,
      "component-icon-button": IconButton
    }

  }
  
</script>