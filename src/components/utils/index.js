/**
 * 유틸리티 모음
 */

import _ from "underscore";

// 값이 있으면 값 리턴 값이 없으면 array return
export function getOrEmptyArray(array) {
  if(array && array.length) {
    return array;
  } else {
    return [];
  }
}

// 값이 있으면 값 리턴 값이 없으면 빈 오브젝트 return
export function getOrEmptyObject(obj) {
  if(obj) {
    return obj;
  } else {
    return {};
  }
}

// adjacency list를 tree로 변환한다
export function arrayToTree(array, {key, parentKey, sortKey, otherKeys}, singleRoot = true) {
  
  let nodes = [];
  const toplevelNodes = [];
  const lookupList = {};

  for(let i = 0; i < array.length; i++) {
    const n = {
      [key]    : array[i][key],
      pKey     : ((array[i][parentKey] == 0) ? null : array[i][parentKey]),
      children : []
    };

    if(sortKey) {
      n[sortKey] = array[i][sortKey];
    }

    otherKeys.map((k) => {
      n[k] = array[i][k];
    });

    lookupList[n[key]] = n;
    nodes.push(n);
    if (n.pKey == null) {
      delete n.pKey;
      toplevelNodes.push(n);
    }

    if(sortKey) {
      nodes = _.sortBy(nodes, sortKey);
    }
  }

  for(let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    if (!(n.pKey == null)) {
      lookupList[n.pKey].children = lookupList[n.pKey].children.concat([n]);
      delete n.pKey;
    }
  }

  if(singleRoot) {
    return toplevelNodes.pop();
  } else {
    return toplevelNodes;
  }
}

// element가 target element를 포함하고 있는지 여부 판단
export function elementContains(element, target) {
  if(element) {
    return element.contains ?
      element != target && element.contains(target) :
      !!(element.compareDocumentPosition(target) & 16);
  }
}

/**
 * element resize 감지
 */
export function observeElementResize(element, handler) {
  
  var attachEvent = document.attachEvent;
  var isIE = navigator.userAgent.match(/Trident/);
  var requestFrame = (function() {
    var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
      function(fn) { return window.setTimeout(fn, 20); };
    return function(fn) { return raf(fn); };
  })();

  var cancelFrame = (function() {
    var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame ||
      window.clearTimeout;
    return function(id){ return cancel(id); };
  })();

  function resizeListener(e) {
    var win = e.target || e.srcElement;
    if (win.__resizeRAF__) cancelFrame(win.__resizeRAF__);
    win.__resizeRAF__ = requestFrame(function() {
      var trigger = win.__resizeTrigger__;
      trigger.__resizeListeners__.forEach(function(fn) {
        fn.call(trigger, e);
      });
    });
  }

  function objectLoad(e) {
    this.contentDocument.defaultView.__resizeTrigger__ = this.__resizeElement__;
    this.contentDocument.defaultView.addEventListener('resize', resizeListener);
  }

  const addResizeListener = function(element, fn) {
    if (!element.__resizeListeners__) {
      element.__resizeListeners__ = [];
      if (attachEvent) {
        element.__resizeTrigger__ = element;
        element.attachEvent('onresize', resizeListener);
      }
      else {
        if (getComputedStyle(element).position == 'static') element.style.position = 'relative';
        var obj = element.__resizeTrigger__ = document.createElement('object'); 
        obj.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
        obj.__resizeElement__ = element;
        obj.onload = objectLoad;
        obj.type = 'text/html';
        if (isIE) element.appendChild(obj);
        obj.data = 'about:blank';
        if (!isIE) element.appendChild(obj);
      }
    }
    element.__resizeListeners__.push(fn);
  };

  const removeResizeListener = function(element, fn) {
    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
    if (!element.__resizeListeners__.length) {
      if (attachEvent) element.detachEvent('onresize', resizeListener);
      else {
        if(element.__resizeTrigger__.contentDocument) {
          element.__resizeTrigger__.contentDocument.defaultView.removeEventListener('resize', resizeListener);
        }
        element.__resizeTrigger__ = !element.removeChild(element.__resizeTrigger__);
      }
    }
  }

  // 리스너 추가
  addResizeListener(element, handler);

  // 반환값으로 해제 함수를 담은 객체를 리턴
  return {
    end () {
      removeResizeListener(element, handler);
    }
  }
}