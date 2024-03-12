function balancingParentheses(string) {
  let strayOp = 0
  let strayClos = 0
  for(let char in string)
  {
    if(string[char]==="(") strayOp++

    if(string[char]===")"){
      if(strayOp) strayOp --
      else strayClos++
    }
  }
  return strayClos + strayOp
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution

// opening, closing = 0
// loop through string
// if char is (
  // opening ++
// elif char is )
  // closing ++
  // return |opening - closing|