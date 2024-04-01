import analyzeArray from '../modules/analyze';

const object = analyzeArray([1, 8, 3, 4, 2, 6]);

test('Average is equal to 4', () => {
  expect(object.average).toBe(4);
});

test('Min is equal to 1', () => {
  expect(object.min).toBe(1);
});

test('Max is equal to 8', () => {
  expect(object.max).toBe(8);
});

test('Length is equal to 6', () => {
  expect(object.length).toBe(6);
});
