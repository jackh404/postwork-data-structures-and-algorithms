function findShortestString(arr) {
  let ret = arr[0];
  for (n = 1; n < arr.length; n++) {
    if (arr[n].length < ret.length) ret = arr[n];
  }
  return ret;
}
function timeCheck() {
  let time = new Date();
  console.log(
    `Time: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}:${time.getMilliseconds()}`
  );
}
if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(["aaa", "a", "bb", "ccc"]));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(["cat", "hi", "dog", "an"]));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log(
    "=>",
    findShortestString(["flower", "juniper", "lily", "dadelion"])
  );

  // BENCHMARK HERE
  const start = Date.now();
  for (let n = 0; n < 1000; n++) {
    findShortestString(["flower", "juniper", "lily", "dadelion"]);
  }
  for (let n = 0; n < 1000; n++) {
    findShortestString([
      "flower",
      "juniper",
      "lily",
      "dadelion",
      "cat",
      "hi",
      "dog",
      "an",
      "aaa",
      "a",
      "bb",
      "ccc",
      "flower",
      "juniper",
      "lily",
      "dadelion",
      "cat",
      "hi",
      "dog",
      "an",
      "aaa",
      "a",
      "bb",
      "ccc",
      "flower",
      "juniper",
      "lily",
      "dadelion",
      "cat",
      "hi",
      "dog",
      "an",
      "aaa",
      "a",
      "bb",
      "ccc",
      "flower",
      "juniper",
      "lily",
      "dadelion",
      "cat",
      "hi",
      "dog",
      "an",
      "aaa",
      "a",
      "bb",
      "ccc",
      "flower",
      "juniper",
      "lily",
      "dadelion",
      "cat",
      "hi",
      "dog",
      "an",
      "aaa",
      "a",
      "bb",
      "ccc",
      "flower",
      "juniper",
      "lily",
      "dadelion",
      "cat",
      "hi",
      "dog",
      "an",
      "aaa",
      "a",
      "bb",
      "ccc",
      "flower",
      "juniper",
      "lily",
      "dadelion",
      "cat",
      "hi",
      "dog",
      "an",
      "aaa",
      "a",
      "bb",
      "ccc",
      "flower",
      "juniper",
      "lily",
      "dadelion",
      "cat",
      "hi",
      "dog",
      "an",
      "aaa",
      "a",
      "bb",
      "ccc",
      "flower",
      "juniper",
      "lily",
      "dadelion",
      "cat",
      "hi",
      "dog",
      "an",
      "aaa",
      "a",
      "bb",
      "ccc",
      "flower",
      "juniper",
      "lily",
      "dadelion",
      "cat",
      "hi",
      "dog",
      "an",
      "aaa",
      "a",
      "bb",
      "ccc",
      "ccc",
      "flower",
      "juniper",
      "lily",
      "dadelion",
      "cat",
      "hi",
      "dog",
      "an",
      "aaa",
      "a",
      "bb",
      "ccc",
      "flower",
      "juniper",
      "lily",
      "dadelion",
      "cat",
      "hi",
      "dog",
      "an",
      "aaa",
      "a",
      "bb",
      "ccc",
      "flower",
      "juniper",
      "lily",
      "dadelion",
      "cat",
      "hi",
      "dog",
      "an",
      "aaa",
      "a",
      "bb",
      "ccc",
      "flower",
      "juniper",
      "lily",
      "dadelion",
      "cat",
      "hi",
      "dog",
      "an",
      "aaa",
      "a",
      "bb",
      "ccc",
      "flower",
      "juniper",
      "lily",
      "dadelion",
      "cat",
      "hi",
      "dog",
      "an",
      "aaa",
      "a",
      "bb",
      "ccc",
      "flower",
      "juniper",
      "lily",
      "dadelion",
      "cat",
      "hi",
      "dog",
      "an",
      "aaa",
      "a",
      "bb",
      "ccc",
      "dadelion",
      "cat",
      "hi",
      "dog",
      "an",
      "aaa",
      "a",
      "bb",
      "ccc",
      "flower",
      "juniper",
      "lily",
      "dadelion",
      "cat",
      "hi",
      "dog",
      "an",
      "aaa",
      "a",
      "bb",
      "ccc",
      "flower",
      "juniper",
      "lily",
      "dadelion",
      "cat",
      "hi",
      "dog",
      "an",
      "aaa",
      "a",
      "bb",
      "ccc",
      "flower",
      "juniper",
    ]);
  }
  const avg = (Date.now() - start) / 2000;
  console.log(`Average runtime: ${avg} ms`);
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// Set the return string to arr[0], then iterate through arr
// looking for a shorter string. If a shorter string is found,
// replace the return string with the new string.
