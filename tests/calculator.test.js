import calculator from '../modules/calculator';

test('Add two numbers', () => {
  expect(calculator.add(2, 6)).toBe(8);
});

test('Subtract two numbers', () => {
  expect(calculator.subtract(10, 4)).toBe(6);
});

test('Multiply two numbers', () => {
  expect(calculator.multiply(3, 7)).toBe(21);
});

test('Divide two numbers', () => {
  expect(calculator.divide(32, 4)).toBe(8);
});
