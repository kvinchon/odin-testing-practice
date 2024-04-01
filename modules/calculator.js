const calculator = {
  add: (a = 0, b = 0) => a + b,
  subtract: (a = 0, b = 0) => a - b,
  multiply: (a = 0, b = 0) => a * b,
  divide: (a = 0, b = 1) => {
    if (b === 0) throw new Error('You cannot divide by zero!');
    return a / b;
  },
};

export default calculator;
