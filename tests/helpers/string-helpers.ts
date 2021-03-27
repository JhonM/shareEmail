export function fullTrim(str: string) {
  return str
    .replace(/\n|\r/gm, '')
    .replace(/\s/g, ' ')
    .replace(/\t/g, ' ')
    .replace(/ +(?= )/g, '')
    .trim();
}
