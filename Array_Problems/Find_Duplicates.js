//Find Duplicates
// Question: Given an array of integers where each value 1 <= x <= len(array), write
// a function that finds all the duplicates in the array.

// dups([1, 2, 2]) = [2]
// dups([3, 3, 3]) = [3]
// dups([2, 1, 2, 1]) = [1, 2]


const findDuplicates = (array) => {
  let holdingObj = {};
  let finalArray = [];

  // loop through the array and gather how many times each number appears
  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    if (!holdingObj[`${currentNum}`]) {
      holdingObj[`${currentNum}`] = 1;
    } else {
      holdingObj[`${currentNum}`]++
    }
  }

  // push the numbers that appear more than once
  for (number in holdingObj) {
    console.log(number)
    if (holdingObj[number] > 1) {
      finalArray.push(number);
    }
  }
  return finalArray;
};


console.log(findDuplicates([2, 1, 2, 3, 1, 2, 1, 3, 2, 3, 4]))

