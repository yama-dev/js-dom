
import * as core from './core/';

export default class JS_DOM {

  static isDom(obj){
    return core.isDom(obj);
  }

  static isStr(str){
    return core.isStr(str);
  }

  static selectDom(elem, childNode){
    return core.selectDom(elem, childNode);
  }

  selectDom(elem, childNode){
    return core.selectDom(elem, childNode);
  }

  indexDom(elem){
    return core.indexDom(elem);
  }

  hasClass(elem, className){
    return core.hasClass(elem, className);
  }

  addClass(elem, className){
    return core.addClass(elem, className);
  }

  removeClass(elem, className){
    return core.removeClass(elem, className);
  }

  toggleClass(elem, className){
    return core.toggleClass(elem, className);
  }

  addEvent(elem, event, func){
    return core.addEvent(elem, event, func);
  }

  removeEvent(elem, event, func){
    return core.removeEvent(elem, event, func);
  }

  setHtml(elem, html){
    return core.setHtml(elem, html);
  }

  prependHtml(elem, html){
    return core.prependHtml(elem, html);
  }

  appendHtml(elem, html){
    return core.appendHtml(elem, html);
  }

  removeHtml(elem){
    return core.removeHtml(elem);
  }

  setStyle(elem, obj){
    return core.setStyle(elem, obj);
  }

  setAttribute(elem, obj){
    return core.setAttribute(elem, obj);
  }

}
