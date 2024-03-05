// Paste your iterative and recursive solutions in this file
// And then calculate their average run times to compare them.
function findShortestStringRecursive(arr) {
  if(arr.length < 2) return arr[0]
  if(arr[0].length > arr[1].length){
    return findShortestStringRecursive(arr.slice(1))
  } else{ 
    arr.splice(1,1)
    return findShortestStringRecursive(arr)
  }
}

function findShortestString(arr) {
  let ret = arr[0];
  for (n = 1; n < arr.length; n++) {
    if (arr[n].length < ret.length) ret = arr[n];
  }
  return ret;
}


const arr = [ 'if', 'juniper', 'lily', 'dandelion', 'do','shooby','I','am','a','jelly','donut','fdjkasjflajsd' ]

function benchmark(callback) {
  const startTime = Date.now();

  for (let i = 0; i < 1000; ++i) {
    callback(arr);
  }

  return (Date.now() - startTime) / 1000;
}
console.log(benchmark(findShortestString))
console.log(benchmark(findShortestStringRecursive))