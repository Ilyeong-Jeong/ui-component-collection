/**
 * 컴포넌트 크기 mixin
 */

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