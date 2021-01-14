export default {
  
  props: {
    large: {
      type: Boolean
    },
    small: {
      type: Boolean
    }
  },
  
  computed: {
    sizeCls () {
      return this.booleanPropMatcher({
        large: 'is-large',
        small: 'is-small'
      });
    }
  }
  
}