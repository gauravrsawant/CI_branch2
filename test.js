// test.js

const calculator = require('./app');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -1 + 5 to equal 4', () => {
  expect(calculator.add(-1, 5)).toBe(4);
});