// 1. Question: Find the median of two sorted arrays.
// To find the Median, place the numbers in value order and find the middle number. 

// Example: arr1 = [1, 3, 5]
// arr2 = [2, 4, 6]
// median(arr1, arr2) = 3.5

// Scale to take in an unlimited number of arrays, loop through them, and return the median.

const arr1 = [17, 5, 10];
const arr2 = [1, 700, 100];

const median = () => {
  const num1 = findMedian(arr1);
  const num2 = findMedian(arr2);

  return (num1 + num2) / 2;
}

const findMedian = (array) => {
  const length = array.length;
  let median;
  array = array.sort((a,b) => {
    return a > b;
  });

  if (length % 2 === 0) {
    const num1 = array[(length / 2) - 1];
    const num2 = array[(length / 2)];
    median = (num1 + num2) / 2;
  } else {
    const middleNumber = Math.floor(length / 2);
    median = array[middleNumber];
  }

  return median;

}
