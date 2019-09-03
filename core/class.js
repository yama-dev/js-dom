/* eslint no-undef: 0 */

import * as core from './';

function hasClass(elem, className){
  if(core.isDom(elem)){
    return elem.classList.contains(className);
  } else {
    return document.querySelector(elem).classList.contains(className);
  }
}

function addClass(elem, className){
  let _dom = core.selectDom(elem);
  if(!_dom) return false;
  _dom.map((item)=>{
    item.classList.add(className);
  });
}

function removeClass(elem, className){
  let _dom = core.selectDom(elem);
  if(!_dom) return false;
  _dom.map((item)=>{
    item.classList.remove(className);
  });
}

function toggleClass(elem, className){
  let _dom = core.selectDom(elem);
  if(!_dom) return false;
  _dom.map((item)=>{
    item.classList.toggle(className);
  });
}

export {
  hasClass,
  addClass,
  removeClass,
  toggleClass
};
