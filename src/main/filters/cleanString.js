export function getCleanedString(input) {
  const specialChars = '!@#$^&%*()+=-[]\\/{}|:<>¿?,.';

  return specialChars
    .split('')
    .reduce(
      (acc, specialChar) =>
        acc.replace(new RegExp(`\\${specialChar}`, 'gi'), ''),
      input,
    )
    .replace(/ /gi, '_')
    .replace(/á/gi, 'a')
    .replace(/é/gi, 'e')
    .replace(/í/gi, 'i')
    .replace(/ó/gi, 'o')
    .replace(/ú/gi, 'u')
    .replace(/ñ/gi, 'n');
}

export function removeExtension(str) {
  const strFilter = str.split('.');
  strFilter.pop();

  return strFilter.join('.');
}
