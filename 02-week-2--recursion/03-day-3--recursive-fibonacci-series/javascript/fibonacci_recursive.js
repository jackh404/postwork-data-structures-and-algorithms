function fibonacci(n) {
  if(n<2) return n
  return fibonacci(n-2) + fibonacci(n-1)
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

  console.log("Expecting 28657")
  console.log("=>", fibonacci(23))
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

/* 
Write a function that recursively counts up to an input value's place
in the fibonacci sequence.
if n = 0 or 1, return n
else return fibonacci(n-2)+fibonacci(n-1)



*/