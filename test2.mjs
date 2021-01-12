suite('test2.mjs');

import {strict as assert} from 'assert';

test('test2a', => { // syntax error!
  assert.equal('hello again', 'hello again');
});
