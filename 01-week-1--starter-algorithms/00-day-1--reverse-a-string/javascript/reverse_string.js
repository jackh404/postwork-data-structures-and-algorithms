function reverseString(str) {
  let reversed = "";
  for (i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("");

  console.log("Expecting: 'tacocat'");
  console.log("=>", reverseString("tacocat"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

/* Create a new string containing the same characters as an input string, but in reverse order.

Instantiate a variable called reversed with an empty string
Iterate through input string in reverse
  Add each character to reversed
Return reversed 
**/
