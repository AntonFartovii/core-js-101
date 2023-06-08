const array = [
  { country: 'Belarus', city: 'Brest' },
{ country: 'Russia', city: 'Omsk' },
{ country: 'Russia', city: 'Samara' },
{ country: 'Belarus', city: 'Grodno' },
{ country: 'Belarus', city: 'Minsk' },
{ country: 'Poland', city: 'Lodz' }
];

const keySelector = item => item.country;
const valueSelector = item => item.city;
// *            =>
// *   Map {
// *    "Belarus" => ["Brest", "Grodno", "Minsk"],
// *    "Russia" => ["Omsk", "Samara"],
// *    "Poland" => ["Lodz"]
//   *   }
// */
function group(array, keySelector, valueSelector) {
  const map = new Map();
  array.forEach((item) => {
    const values = map.get(keySelector(item));
    if (values) {
      map.set(keySelector(item), [...values, valueSelector(item)]);
    } else {
      map.set(keySelector(item), [valueSelector(item)]);
    }
  });
  return map;
}

group(array, keySelector, valueSelector)
