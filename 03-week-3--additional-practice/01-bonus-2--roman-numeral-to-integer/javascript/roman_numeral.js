function romanNumeral(string) {
  let val = 0
  let mag = 1
  for(c = string.length - 1; c >= 0; c--){
    switch(string[c]){
      case "I":
        if(mag === 1) val ++
        else val --
        break
      case "V":
        mag = 5
        val += mag
        break
      case "X":
        if(mag <= 10){
          mag = 10
          val += mag
        } else val -=10
        break
      case "L":
        mag = 50
        val += mag
        break
      case "C":
        if(mag <= 100){
          mag = 100
          val += mag
        } else val -= 100
        break
      case "D":
        mag = 500
        val += mag
        break
      case "M":
        mag = 1000
        val += mag
    }
  }
  return val
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
  
  console.log("");

  console.log("Expecting: 223");
  console.log(romanNumeral('CCXXIII'));
  
  console.log("");

  console.log("Expecting: 3848");
  console.log(romanNumeral('MMMDCCCXLVIII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution

/*
  val = 0
  mag = 1
  for char = length - 1 counter >=0 counter --
    check char
      if I
        if mag == 1: val++
        else: val--
      if V
        mag = 5
        val += 5
      if X
        if mag <= 10
          mag = 10
          mag += 10
        else: val -=10

  &etc 
  return val
*/
