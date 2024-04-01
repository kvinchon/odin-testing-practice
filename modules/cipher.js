function caesarCipher(str = '', factor = 0) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let capitalized = str.toUpperCase();
  let cipher = '';

  for (let i = 0; i < capitalized.length; i++) {
    const charIndex = alphabet.indexOf(capitalized[i]);

    if (charIndex === -1) {
      cipher += capitalized[i];
      continue;
    } else {
      let cipherIndex = charIndex + factor;

      if (cipherIndex > alphabet.length - 1) {
        cipherIndex = cipherIndex % alphabet.length;
      }

      cipher += alphabet.charAt(cipherIndex);
    }
  }

  return cipher;
}

export default caesarCipher;
