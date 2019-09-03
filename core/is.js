
function isDom(obj){
  try {
    return obj instanceof HTMLElement;
  }
  catch(e){
    return false;
  }
}

function isStr(str){
  try {
    return typeof str == 'string';
  }
  catch(e){
    return false;
  }
}

export {
  isDom,
  isStr
};
