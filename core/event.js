
import * as core from './';

function addEvent(elem, event, func){
  if(elem === window){
    window.addEventListener(event, func, { passive: false });
  } else {
    let _dom = core.selectDom(elem);
    if(!_dom) return false;
    _dom.map((item)=>{
      item.addEventListener(event, func, { passive: false });
    });
  }
}

function removeEvent(elem, event, func){
  if(elem === window){
    window.removeEventListener(event, func);
  } else {
    let _dom = core.selectDom(elem);
    if(!_dom) return false;
    _dom.map((item)=>{
      item.removeEventListener(event, func);
    });
  }
}

export {
  addEvent,
  removeEvent
};
