function fibonacci(num) {
  const list = [0, 1];
  while (list.length <= num)
    list.push(list[list.length - 1] + list[list.length - 2]);
  return list[num];
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>" + fibonacci(1));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
/* For a given number, return the number in the fibonacci sequence using the given number as the index starting at 0.
 * list = [0,1]
 * while list length <= num
 *  push sum of last 2 numbers to list
 * return list[num]
 */
