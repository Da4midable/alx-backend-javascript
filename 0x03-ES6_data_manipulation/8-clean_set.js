export default function cleanSet(set, startString) {
  const array = [...set];
  return array
    .filter((arr) => (startString ? arr.startsWith(startString) : null))
    .map((arr) => arr.replace(startString, ''))
    .join('-');
}
