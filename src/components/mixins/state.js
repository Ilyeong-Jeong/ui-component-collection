/**
 * 컴포넌트 상태 mixin
 */

export default {
  
  props: {
    disabled: {
      type: Boolean
    },
    error: {
      type: Boolean
    },
    action: {
      type: Boolean,
    },
    warn: {
      type: Boolean
    },
    loading: {
      type: Boolean
    },
    active: {
      type: Boolean
    },
    success: {
      type: Boolean
    }
  },
  
  computed: {
    normal () {
      return !this.disabled && !this.loading && !this.active && !this.action;
    },

    stateCls () {
      return this.booleanPropMatcher({
        disabled: 'is-disabled',
        error   : 'is-error',
        warn    : 'is-warning',
        loading : 'is-loading',
        active  : 'is-active',
        normal  : 'is-normal',
        action  : 'is-action'
      });
    }
  }

}