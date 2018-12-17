/*!
 * JS DOM (JavaScript Library)
 *   js-dom.js
 * Version 0.0.1
 * Repository https://github.com/yama-dev/js-dom
 * Copyright yama-dev
 * Licensed under the MIT license.
 */

export class JS_DOM {

  isDom(obj){
    try {
      return obj instanceof HTMLElement;
    }
    catch(e){
      return false
    }
  }

  isStr(str){
    try {
      return typeof str == 'string';
    }
    catch(e){
      return false
    }
  }

  selectDom(elem){
    let _dom;
    if(( Array.isArray(elem) || elem.length ) && !this.isStr(elem)){
      if(this.isDom(elem[0])){
        _dom = Array.prototype.slice.call( elem );
      } else {
        return false;
      }
    } else {
      if(this.isDom(elem)){
        _dom = Array(elem);
      } else {
        _dom = Array.prototype.slice.call( document.querySelectorAll(elem) );
      }
    }
    return _dom;
  }

  hasClass(elem, className){
    if(this.isDom(elem)){
      return elem.classList.contains(className);
    } else {
      return document.querySelector(elem).classList.contains(className);
    }
  }

  addClass(elem, className){
    let _dom = this.selectDom(elem);
    _dom.map((item,index)=>{
      item.classList.add(className);
    });
  }

  removeClass(elem, className){
    let _dom = this.selectDom(elem);
    _dom.map((item,index)=>{
      item.classList.remove(className);
    });
  }

  toggleClass(elem, className){
    let _dom = this.selectDom(elem);
    _dom.map((item,index)=>{
      item.classList.toggle(className);
    });
  }

  setHtml(elem, html){
    let _dom = this.selectDom(elem);
    _dom.map((item,index)=>{
      item.innerHTML = html;
    });
  }

  appendHtml(elem, html){
    let _dom = this.selectDom(elem);
    _dom.map((item,index)=>{
      item.innerHTML += html;
    });
  }

  addEvent(elem, event, func){
    if(elem === window){
      window.addEventListener(event, func);
    } else {
      let _dom = this.selectDom(elem);
      _dom.map((item,index)=>{
        item.addEventListener(event, func);
      });
    }
  }

  setStyle(elem, obj){
    let _style = '';
    Object.keys(obj).forEach((key) => {
      _style += key.replace(/([A-Z])/g, '-$1').toLowerCase() + ':' + obj[key] + ';';
    });
    elem.setAttribute('style', _style);
  }

}
