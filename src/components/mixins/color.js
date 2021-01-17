/**
 * 컴포넌트 색상 지정 mixin
 */

export default {
  props: {
    /**
     * tailwind에 정의한 색상과 #으로 시작하는 16진수 숫자를 사용
     * 
     * ex) bluePrimary, #eaeaea
     */
    color: {
      type: String
    }
  },

  computed: {
    isHexColor () {
      return (this.color || "").match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/);
    },

    colorClsStr () {
      if(this.color && !this.isHexColor) {
        return this.color.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
      }
    }
  },

  methods: {
    toColorCls (baseProperty) {
      if(baseProperty && this.colorClsStr) {
        return baseProperty + "-" + this.colorClsStr;
      }
    },

    toColorStyle (baseProperty) {
      if(baseProperty && this.isHexColor) {
        return {
          [baseProperty]: this.color
        }
      }
    }
  }
}