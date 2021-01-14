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

// adjancy list를 tree로 변환한다
export function arrayToTree(array, {key, parentKey, sortKey, otherKeys}, singleRoot = true) {
  
  var nodes = [];
  var toplevelNodes = [];
  var lookupList = {};

  for (var i = 0; i < array.length; i++) {
    var n = {
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

  for (var i = 0; i < nodes.length; i++) {
    var n = nodes[i];
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