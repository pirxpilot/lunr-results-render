const { describe, it } = require('node:test');
const decorate = require('../lib/decorate');

describe('decorate', () => {
  const text = 'This is a not so long sentence.';

  it('marks positions', t => {
    t.assert.equal(
      decorate({ slice: text }, [
        [0, 4],
        [10, 3]
      ]),
      '<mark>This</mark> is a <mark>not</mark> so long sentence.'
    );
  });

  it('marks positions with offset', t => {
    t.assert.equal(
      decorate({ slice: text, start: 3 }, [
        [3, 4],
        [13, 3]
      ]),
      '<mark>This</mark> is a <mark>not</mark> so long sentence.'
    );
  });

  it('ignores marks outside of the scope', t => {
    t.assert.equal(
      decorate({ slice: text }, [[100, 4]]),
      'This is a not so long sentence.'
    );
  });

  it('ignores marks outside of the scope with offset', t => {
    t.assert.equal(
      decorate({ slice: text, start: 15 }, [[10, 4]]),
      'This is a not so long sentence.'
    );
  });
});
