import reverseString from '../modules/reverse';

test('Takes a string and returns it reversed', () => {
  expect(reverseString('test')).toBe('tset');
});
