// test.js

const app = require('./app');

test('adds 1 + 2 to equal 3', () => {
  expect(app.add(1, 2)).toBe(3);
});

test('adds -1 + 5 to equal 4', () => {
  expect(app.add(-1, 5)).toBe(4);
});