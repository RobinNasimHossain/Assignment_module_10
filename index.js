function calculateSum(a, b) {
  return a + b;
}

function isEven(num) {
  return num % 2 === 0;
}

function findMax(arr) {
  if (arr.length === 0) {
    return null;
  }
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function filterOddNumbers(arr) {
  return arr.filter((num) => num % 2 !== 0);
}

function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function sortArray(arr) {
  return arr.slice().sort((a, b) => a - b);
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(calculateSum(3, 5));

console.log(isEven(6));
console.log(isEven(3));
console.log(findMax([3, 9, 1, 5, 0]));

console.log(reverseString("hello"));

console.log(filterOddNumbers([1, 2, 3, 4, 5]));

console.log(sumArray([1, 2, 3, 4, 5]));

console.log(sortArray([3, 1, 5, 2, 4]));

console.log(capitalizeFirstLetter("hello"));
