
function destroyer(arr) {
  // Remove all the values
  // ECMA Script 5 link: http://es5.github.io/#x15.4.4.10
  var arr2=Array.prototype.slice.call(arguments,1);
  return arr.filter (function (val) {
    return arr2.indexOf(val)==-1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
