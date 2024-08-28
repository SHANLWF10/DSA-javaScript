let x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearch(arr, n) {
  let leftIndex = 0,
    rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[midIndex] == n) {
      return midIndex;
    } else if (midIndex < n) {
      leftIndex = midIndex;
    } else {
      rightIndex = midIndex;
    }
  }
  return -1;
}

console.log(binarySearch(x, 4));
