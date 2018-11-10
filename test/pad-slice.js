const padSlice = require('../lib/pad-slice');

describe('pad-slice', function () {
  const text = 'This is the first sentence. This is the second sentence. This is the third sentence.';

  it('extract from the begin', function () {
    padSlice(text, [1, 5], { pad: 3 }).should.eql({
      slice: 'This is the first sentence.',
      start: 0
    });
  });

  it('finds end of sentence with padding', function () {
    padSlice(text, [1, 5], { pad: 40 }).should.eql({
      slice: 'This is the first sentence. This is the second sentence.',
      start: 0
    });
  });

  it('sets start index properly', function () {
    padSlice(text, [40, 5], { pad: 10 }).should.eql({
      slice: 'This is the second sentence.',
      start: 28
    });
  });

  it('finds end of the string', function () {
    padSlice(text, [40, 5], { pad: 100 }).should.eql({
      slice: 'This is the second sentence. This is the third sentence.',
      start: 28
    });
  });
});
