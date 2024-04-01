import caesarCipher from '../modules/cipher';

test('Takes a string and returns it with each character shifted', () => {
  expect(caesarCipher('test', 3)).toBe('WHVW');
  expect(caesarCipher('xyza.', 2)).toBe('ZABC.');
  expect(caesarCipher('aZ!', 26)).toBe('AZ!');
});
