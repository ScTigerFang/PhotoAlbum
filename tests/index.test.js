//Basic test for testing Jest
const sum = require('../src/index');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});