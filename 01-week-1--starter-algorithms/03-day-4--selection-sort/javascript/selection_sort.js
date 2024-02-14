const { time } = require("console");

function selectionSort(arr) {
  // Outer loop to iterate through input array
  // Loop to Find smallest: min = 0 n = 1
  // if arr at n < arr at min
  // min = n
  // splice arr at n, add to output

  const output = [];
  while (arr.length) {
    let min = 0;
    for (let n = 1; n < arr.length; n++) {
      if (arr[n] < arr[min]) {
        min = n;
      }
    }
    output.push(...arr.splice(min, 1));
  }
  return output;
}
function timeCheck() {
  let time = new Date();
  console.log(
    `Time: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}:${time.getMilliseconds()}`
  );
}
if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-20, -1, 2, 2, 2, 3, 5]");
  console.log("=>", selectionSort([2, 3, -1, -20, 5, 2, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
  timeCheck();
  console.log(selectionSort([3, -1, 5, 2]));
  for (let n = 1; n < 1000; n++) {
    selectionSort([3, -1, 5, 2]);
  }
  console.log(selectionSort(longInput));
  for (let n = 1; n < 1000; n++) {
    selectionSort(longInput);
  }
  timeCheck();
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution

//Sort an array by finding the smallest entry in the input array then placing it correctly
//in the output array repeatedly.
//Test the algorithm by running it 1000 times with a short array and 1000 times with
//a long array, then dividing the total runtime by 2000 to get average runtime.
