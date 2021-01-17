/**
 * 컴포넌트 상태 mixin
 */

export default {
  
  props: {
    disabled: {
      type: Boolean
    },
    loading: {
      type: Boolean
    },
    error: {
      type: Boolean
    },
    warning: {
      type: Boolean
    },
    success: {
      type: Boolean
    },
    active: {
      type: Boolean
    }
  },
  
  computed: {
    normal () {
      return !this.disabled && !this.loading && !this.active;
    },

    stateCls () {
      return this.booleanPropMatcher({
        disabled: 'is-disabled',
        loading : 'is-loading',
        error   : 'is-error',
        warning : 'is-warning',
        success : 'is-success',
        active  : 'is-active',
        normal  : 'is-normal',
      });
    }
  }

}