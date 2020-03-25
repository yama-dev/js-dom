
import * as core from './';

export function selectDom(elem,childNode){
  if(childNode){
    let _dom = core.selectDom(elem);
    let _dom_child;
    let _dom_child_list = [];
    if(!_dom) return false;
    _dom.map((item)=>{
      if(core.isDom(childNode)){
        _dom_child = Array.prototype.slice.call( item.querySelectorAll(childNode.tagName.toLowerCase()) );
      } else {
        _dom_child = Array.prototype.slice.call( item.querySelectorAll(childNode) );
      }
      if(!_dom_child) return false;
      _dom_child_list = _dom_child_list.concat(_dom_child);
    });
    return _dom_child_list;
  }

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

