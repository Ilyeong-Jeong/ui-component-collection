<style lang="scss">

  .layout-side-menu {
    @apply bg-grey-dim2 w-80 p-4;

    .component-search-input {
      @apply w-full p-2 flex;
    }

    .menu-name {
      @apply cursor-pointer flex items-center p-2 rounded;

      .menu-name-text {
        @apply ml-6;
      }
      
      &:hover {
        @apply bg-blue-dim text-white;
      }

      &:active {
        @apply bg-blue-tint text-white;
      }

      &.is-selected {
        @apply bg-blue-primary text-white pointer-events-none;
      }
    }
  }

</style>

<template>
  <div class="layout-side-menu">
    <div class="component-search-input">
      <component-input 
        placeholder="search" 
        width="100%" 
        v-model="searchName"
      ></component-input>
      
      <component-icon-button 
        icon="fas fa-home" 
        :disabled="$route.name === 'index'" 
        @click="routerPush('index')"
      ></component-icon-button>
    </div>

    <component-pretty-scroll>
      <div 
        v-for="m in vMenu" 
        :key="m.key"
      >
        <div 
          :class="['menu-name', { 'is-selected': $route.name === m.link }]"
          @click="routerPush(m.link)"
        >
          <span class="menu-name-text">
            • {{ m.name }}
          </span>
        </div>
      </div>
    </component-pretty-scroll>
  </div>
</template>

<script>

  import PrettyScroll from "../../components/pretty-scroll.vue";
  import TextInput    from "../../components/inputs/text-input.vue";
  import IconButton   from "../../components/buttons/icon-button.vue";

  import MenuData from "./menu-data";

  export default {

    data () {
      return {
        searchName: null
      }
    },

    computed: {
      vMenu () {
        return MenuData.filter((x) =>  {
          if(this.searchName) {
            return x.name.indexOf(this.searchName) > -1
          } else {
            return x;
          }
        })
      },
    },

    methods: {
      routerPush (name) {
        this.$router.push({ name: name });
      }
    },

    components: {
      "component-pretty-scroll": PrettyScroll,
      "component-input"        : TextInput,
      "component-icon-button"  : IconButton
    }

  }
  
</script>