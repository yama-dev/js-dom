
import * as core from './';

export function selectDom(elem){
  if(!elem) return false;
  let _dom;
  if(( Array.isArray(elem) || elem.length ) && !core.isStr(elem)){
    if(core.isDom(elem[0])){
      _dom = Array.prototype.slice.call( elem );
    } else {
      return false;
    }
  } else {
    if(core.isDom(elem)){
      _dom = Array(elem);
    } else {
      _dom = Array.prototype.slice.call( document.querySelectorAll(elem) );
    }
  }
  if(_dom.length === 0) _dom = null; 
  return _dom;
}

