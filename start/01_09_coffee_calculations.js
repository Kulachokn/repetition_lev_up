const price = 1.25;

function sum(arr) {
  let total = arr.reduce((acc, cur) => {
    return acc + cur * price;
  }, 0);

  return `The total bill is $${total}`;
}
console.log(sum([2, 3, 1, 5]));
