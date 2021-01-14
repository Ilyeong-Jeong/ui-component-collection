export default {

  methods: {
    booleanPropMatcher (matcher) {
      return Object.keys(matcher).map((k) => {
        if(this[k]) {
          return matcher[k];
        }
      }).filter(x => x);
    }
  }
  
}