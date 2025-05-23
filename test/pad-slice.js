const { describe, it } = require('node:test');
const padSlice = require('../lib/pad-slice');

describe('pad-slice', () => {
  const text =
    'This is the first sentence. This is the second sentence. This is the third sentence.';

  it('extract from the begin', t => {
    t.assert.deepEqual(padSlice(text, [1, 5], { pad: 3 }), {
      slice: 'This is the first sentence.',
      start: 0
    });
  });

  it('finds end of sentence with padding', t => {
    t.assert.deepEqual(padSlice(text, [1, 5], { pad: 40 }), {
      slice: 'This is the first sentence. This is the second sentence.',
      start: 0
    });
  });

  it('sets start index properly', t => {
    t.assert.deepEqual(padSlice(text, [40, 5], { pad: 10 }), {
      slice: 'This is the second sentence.',
      start: 28
    });
  });

  it('finds end of the string', t => {
    t.assert.deepEqual(padSlice(text, [40, 5], { pad: 100 }), {
      slice: 'This is the second sentence. This is the third sentence.',
      start: 28
    });
  });
});
