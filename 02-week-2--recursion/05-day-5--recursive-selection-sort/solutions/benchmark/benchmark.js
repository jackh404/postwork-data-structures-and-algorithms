// Paste your iterative and recursive solutions in this file
// And then calculate their average run times to compare them.
function selectionSort(arr) {
  const sorted = [];

  while (arr.length > 0) {
    const min = Math.min(...arr);
    const idx = arr.indexOf(min);

    sorted.push(min);
    arr.splice(idx, 1);
  }

  return sorted;
}

function selectionSortRecursive(arr) {
  if (arr.length === 0) {
    return [];
  }

  const min = Math.min(...arr);
  const idx = arr.indexOf(min);
  arr.splice(idx, 1);

  const result = selectionSortRecursive(arr);
  result.unshift(min);
  return result;
}

function mySelectionSort(arr){
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

function myRecrusiveSelectionSort(arr){
  let min = Math.min(...arr)
  let i = arr.indexOf(min)
  if(arr.length>1)
  {
    return arr.splice(i,1).concat(selectionSortRecursive(arr))
  } else {
    return arr.splice(i,1)
  }
}

function benchmark(callback) {
  const startTime = Date.now();

  for (let i = 0; i < 10000; ++i) {
    callback();
  }

  return (Date.now() - startTime) / 1000;
}

console.log('Iterative example:', benchmark(() => selectionSort([2, 3, 4, 1, 4, 56, -2, 20])));
console.log('Recursive example:', benchmark(() => selectionSortRecursive([2, 3, 4, 1, 4, 56, -2, 20])));
console.log('Iterative:', benchmark(() => mySelectionSort([2, 3, 4, 1, 4, 56, -2, 20])));
console.log('Recursive:', benchmark(() => myRecrusiveSelectionSort([2, 3, 4, 1, 4, 56, -2, 20])));

