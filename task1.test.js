const stringLength = require('./task1');

test('It exceeds the limit', () => {
  expect(stringLength('disadvantage').length).toBeGreaterThan(10);
});

test('It does not exceed the limit', () => {
  expect(stringLength('baby')).toBeLessThan(10);
});

