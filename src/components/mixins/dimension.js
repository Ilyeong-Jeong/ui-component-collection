/**
 * 컴포넌트 width, height dimension mixin
 */

function toCssString (target) {
  if(typeof target === "number") {
    return target + "px";
  } else if (typeof target === "string") {
    return target;
  }
}

export default {
  props: {
    width : null,
    height: null
  },
  
  computed: {
    styleWidth () {
      if(this.width) {
        return {width: toCssString(this.width)};
      } else {
        return {};
      }
    },

    styleHeight () {
      if(this.height) {
        return {height: toCssString(this.height)};
      } else {
        return {};
      }
    }
  }
}