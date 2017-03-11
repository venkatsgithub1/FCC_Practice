
function largestOfFour(arr) {
  // You can do this!
  var arr2=[];
  for (var var1 of arr) {
    var bigger = 0;
    for (var subArrElems of var1) {
      if (subArrElems>bigger) bigger =subArrElems;
    }
    arr2.push (bigger);
}
  return arr2;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
