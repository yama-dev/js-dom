
import * as core from './';

function setHtml(elem, html){
  let _dom = core.selectDom(elem);
  if(!_dom) return false;
  _dom.map((item)=>{
    item.innerHTML = html;
  });
}

function appendHtml(elem, html){
  let _dom = core.selectDom(elem);
  if(!_dom) return false;
  _dom.map((item)=>{
    item.innerHTML += html;
  });
}

function setStyle(elem, obj){
  let _dom = core.selectDom(elem);
  if(!_dom) return false;
  _dom.map((item)=>{
    let _style = '';
    Object.keys(obj).forEach((key) => {
      _style += key.replace(/([A-Z])/g, '-$1').toLowerCase() + ':' + obj[key] + ';';
    });
    item.setAttribute('style', _style);
  });
}

function setAttribute(elem, obj){
  let _dom = core.selectDom(elem);
  if(!_dom) return false;
  _dom.map((item)=>{
    let _property = '';
    Object.keys(obj).forEach((key) => {
      _property = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      item.setAttribute(_property, obj[key]);
    });
  });
}

export {
  setHtml,
  appendHtml,
  setStyle,
  setAttribute
};
