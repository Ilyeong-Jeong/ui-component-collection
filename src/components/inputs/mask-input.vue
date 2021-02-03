<template>
  <imask-input 
    class="component-mask-input"
    ref="mask"
    v-bind="maskOptions"
    :placeholder="placeholder"
    @accept="onAccept"
    @complete="onComplete"
    @focus.native="onFocus"
    @blur.native="onBlur"
  ></imask-input>
</template>

<script>

  /**
   * imask를 base로 한 value 값 체킹하는 mask 인풋 컴포넌트
   */

  import { IMaskComponent } from 'vue-imask';
  import IMask              from "imask";

  export default {

    props: {
      value: {

      },

      placeholder: {
        type: String
      },
      /**
        * {
        *  type   : ["number" || "email" || "date" || "time" || "regex" || "pattern"],
        *  options: {
        *    number 일 때
        *    scale : 소숫점 수,
        *    signed: false이면 마이너스 허용 불가
        *    seperator: true이면 천단위로 , 붙음
        *   
        *   date 일 때
        *   format: yyyy-mm-dd 등
        * 
        *   time 일 때
        *   shortFormat: true 이면 12시간제
        * 
        *   regex 일 때
        *   value: mask 값
        *  }
        * }
        */
      pattern: {
        type    : [Object],
        required: true,
        default () {
          return {
            type   : null,
            options: {}
          }
        }
      }
    },

    data () {
      return {
        focused: false
      }
    },

    computed: {
      maskOptions () {

        const opt = Object.assign({}, this.pattern.options);

        switch(this.pattern.type) {
          case "number": {
            return {
              value             : (() => {
                if(this.value) {
                  return String(this.value);
                } else {
                  return null;
                }
              })(),
              unmask            : true,
              mask              : Number,
              scale             : opt.scale,
              signed            : opt.signed,
              thousandsSeparator: (() => {
                if(opt.seperator) {
                  return ","
                } else {
                  return ""
                }
              })(),
              padFractionalZeros: false,
              normalizeZeros    : true,
              radix             : ".",
              mapToRadix        : ['.']
            }
          }

          case "email": {
            return {
              value: this.value,
              mask : /^\S*@?\S*$/
            }
          }

          case "date": {
            return {
              value  : this.value,
              lazy   : !this.focused,
              unmask : false,
              mask   : Date,
              pattern: (() => {
                if(opt.format) {
                  return opt.format
                  .replace("yyyy", "Y")
                  .replace("MM", "m")
                  .replace("dd", "d");
                } else {
                  return null;
                }
              })(),

              format: function (date) {
                let day   = date.getDate();
                let month = date.getMonth() + 1;
                let year  = date.getFullYear();

                if (day < 10) day = "0" + day;
                if (month < 10) month = "0" + month;

                return opt.format
                .replace("yyyy", year)
                .replace("MM", month)
                .replace("dd", day);
              },
              // define str -> date convertion
              parse: function (str) {
                return new Date(`${str} 00:00:00`);
              }
            }
          }

          case "time": {
            return {
              value: this.value,
              lazy : !this.focused,
              mask : (() => {
                if(opt.shortFormat) {
                  return 'HH{:}MM{ }`a';
                } else {
                  return 'HH{:}`MM';
                }
              })(),
              
              blocks: (() => {
                if(opt.shortFormat) {
                  return {
                    HH: {
                      mask: IMask.MaskedRange,
                      from: 0,
                      to  : 11
                    },
                    MM: {
                      mask: IMask.MaskedRange,
                      from: 0,
                      to  : 59
                    },
                    a: {
                      mask: IMask.MaskedEnum,
                      enum: ['AM', 'PM']
                    }
                  }
                } else {
                  return {
                    HH: {
                      mask: IMask.MaskedRange,
                      from: 0,
                      to  : 23
                    },
                    MM: {
                      mask: IMask.MaskedRange,
                      from: 0,
                      to  : 59
                    }
                  }
                }
              })()
            }
          }

          case "regex": {
            return {
              value: this.value,
              mask : opt.value
            }
          }

          default: {
            return {

            }
          }
        }
      }
    },

    methods: {
      onFocus () {
        setTimeout(() => {
          this.focused = true;
        }, 100);
      },

      onBlur () {
        setTimeout(() => {
          this.focused = false;
        }, 100);
      },

      onAccept (value) {

        if(value == null || value == '') {
          return this.$nextTick(() => {this.$emit('change', null)});
        }
        
        const type = [
          "number", "email", "regex"
        ];

        const val  = (() => {
          if(this.pattern.type == "number") {
            return Number(value);
          } else {
            return value
          }
        })();

        if(type.includes(this.pattern.type)) {
          this.$emit('change', val);
        }
      },

      onComplete (value) {
        const type = [
          "date", "time"
        ];

        if(type.includes(this.pattern.type)) {
          this.$emit('change', value);
        }
      }
    },

    components: {
      'imask-input': IMaskComponent
    }
  }

</script>