const findMinimum = arr => {

  // Your code here
  function compareFn(a, b) {
    return a - b;
  }

  return arr.sort(compareFn)[0];
};

const runningSum = arr => {

  // Your code here
  let result = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    result.push(sum);
  }

  return result;
}

const evenNumOfChars = arr => {

  // Your code here
  let result = 0;
  for (let word of arr) {
    if (word.length % 2 === 0) result++;
  }

  return result;
};

const smallerThanCurr = arr => {

  // Your code here
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp++;
      }
    }
    result.push(temp);
  }
  return result;
};

const twoSum = (arr, target) => {

  // Your code here
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return true;
    }
  }
  return false;
};

const secondLargest = arr => {

  // Your code here
  if (arr.length < 2) return undefined;
  arr.splice(arr.indexOf(Math.max(...arr)), 1);
  return Math.max(...arr);
};

const shuffle = (arr) => {

  // Your cod
  return [...arr].sort(() => Math.random() - 0.5);
};

module.exports = [
  findMinimum,
  runningSum,
  evenNumOfChars,
  smallerThanCurr,
  twoSum,
  secondLargest,
  shuffle
];

