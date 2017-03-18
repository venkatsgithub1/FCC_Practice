
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(arguments[1]);
  arr.sort (function (a, b) {
    return a-b;
  });
  return arr.indexOf (num);
}

getIndexToIns([40, 60], 50);
