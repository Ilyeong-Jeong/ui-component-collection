<template>
  <common-panel
    title="Messagebox"
    desc="Messagebox Component Example"
  >
    <template slot="panel-list">
      <component-messagebox :message="message"></component-messagebox>
      <component-messagebox active :message="message"></component-messagebox>
      <component-messagebox error :message="message"></component-messagebox>
      <component-messagebox warning :message="message"></component-messagebox>
      <component-messagebox success :message="message"></component-messagebox>
    </template>  
  </common-panel>
</template>

<script>

  import Messagebox from "../components/messagebox.vue";

  export default {

    data () {
      return {
        message: "죽는 날까지 하늘을 우러러 한 점 부끄럼이 없기를, 잎새에 이는 바람에도 나는 괴로와했다. 별을 노래하는 마음으로 모든 죽어가는 것을 사랑해야지 그리고 나에게 주어진 길을 걸어가야겠다. 오늘 밤에도 별이 바람에 스치운다."
      }
    },

    components: {
      "component-messagebox": Messagebox
    }

  }
  
</script>