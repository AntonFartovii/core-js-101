// * Example :
//   * [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] => [ 2, 4, 6, 8, 10 ]
// * [ 'a', 'b', 'c' , null ]  => [ "b", null ]
// * [ "a" ] => []
// */
function getSecondItems(arr) {
  return arr.filter((n, i) => i % 2 !== 0);
}

console.log(getSecondItems( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ));
