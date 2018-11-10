const decorate = require('../lib/decorate');

describe('decorate', function () {
  const text = 'This is a not so long sentence.';

  it('marks positions', function () {
    decorate({ slice: text }, [[0, 4], [10, 3]])
      .should.eql('<mark>This</mark> is a <mark>not</mark> so long sentence.');
  });

  it('marks positions with offset', function () {
    decorate({ slice: text, start: 3 }, [[3, 4], [13, 3]])
      .should.eql('<mark>This</mark> is a <mark>not</mark> so long sentence.');
  });

  it('ignores marks outside of the scope', function () {
    decorate({ slice: text }, [[100, 4]])
      .should.eql('This is a not so long sentence.');
  });

  it('ignores marks outside of the scope with offset', function () {
    decorate({ slice: text, start: 15 }, [[10, 4]])
      .should.eql('This is a not so long sentence.');
  });

});
