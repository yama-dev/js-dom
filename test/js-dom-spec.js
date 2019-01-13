
import JS_DOM from '../src/js-dom.js';

import assert from 'assert';

describe('JS_DOM テスト', function() {

  it('instance', function() {
    document.body.innerHTML = window.__html__['test/test.html'];
    const dom = new JS_DOM();
    if(dom) {
    } else {
      throw new Error('失敗');
    }
  });

  it('JS_DOM', function() {
    document.body.innerHTML = window.__html__['test/test.html'];
    const dom = new JS_DOM();
    let elemDiv = dom.selectDom('div');
    if(elemDiv.length == 4) {
    } else {
      throw new Error('失敗');
    }
  });

});
