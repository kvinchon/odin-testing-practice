import capitalize from '../modules/capitalize';

test('Takes a string and returns it with the first letter capitalized', () => {
  expect(capitalize('test')).toBe('Test');
});
