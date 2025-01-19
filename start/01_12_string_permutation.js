// function numPermutations(word) {
//   let total = 1; // let total;
//   for (let i = 1; i <= word.length; i += 1) {
//     // if (total === undefined) {
//     //   total = i;
//     //   continue;
//     // }
//     total *= i;
//   }
//   return total;
// }

function numPermutations(word) {
  if (word.length === 1) {
    return 1;
  }
  return word.length * numPermutations(word.slice(1));
}

console.log(numPermutations("hello"));
