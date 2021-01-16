/**
 * 글로벌 이벤트 mixin
 */

export const globalEvents = {
  WINDOW_RESIZE: "window_resize",
  WINDOW_CLICK : "window_click",
  SCROLL_ANY   : "scroll_any",
  KEY_DOWN     : "key_down"
}

export default {

  mounted () {
    const self = this;

    const events = this.$options.globalEvents;

    this.$globalEventHandler = {
      // resize window
      [globalEvents.WINDOW_RESIZE] (e) {
        events[globalEvents.WINDOW_RESIZE].call(self, e);
      },

      // scroll any container
      [globalEvents.SCROLL_ANY] (e) {
        events[globalEvents.SCROLL_ANY].call(self, e);
      },

      // click any window
      [globalEvents.WINDOW_CLICK] (e) {
        events[globalEvents.WINDOW_CLICK].call(self, e);
      },
      
      // press any key
      [globalEvents.KEY_DOWN] (e) {
        events[globalEvents.KEY_DOWN].call(self, e);
      }
    };

    // resize window
    const resizeHandler = events[globalEvents.WINDOW_RESIZE];
    if(resizeHandler) {
      window.addEventListener("resize", this.$globalEventHandler[globalEvents.WINDOW_RESIZE]);
    }
    
    // click any window
    const clickHandler = events[globalEvents.WINDOW_CLICK];
    if(clickHandler) {
      window.addEventListener("click", this.$globalEventHandler[globalEvents.WINDOW_CLICK]);
    }
    
    // scroll any container
    const scrollHandler = events[globalEvents.SCROLL_ANY];
    if(scrollHandler) {
      window.addEventListener("scroll", this.$globalEventHandler[globalEvents.SCROLL_ANY], true);
    }

    // press any key
    const keydownHandler = events[globalEvents.KEY_DOWN];
    if(keydownHandler) {
      window.addEventListener("keydown", this.$globalEventHandler[globalEvents.KEY_DOWN]);
    }    
  },

  beforeDestroy () {
    window.removeEventListener("resize" , this.$globalEventHandler[globalEvents.WINDOW_RESIZE]);
    window.removeEventListener("scroll" , this.$globalEventHandler[globalEvents.SCROLL_ANY], true);
    window.removeEventListener("click"  , this.$globalEventHandler[globalEvents.WINDOW_CLICK]);
    window.removeEventListener("keydown", this.$globalEventHandler[globalEvents.KEY_DOWN]);
  }  
}
