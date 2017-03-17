
function mutation(arr) {
  var arr2=arr[1].toLowerCase().split("");
  for (var arr2Var of arr2)
    if (arr[0].toLowerCase().indexOf(arr2Var)==-1) 
      return false; 
  return true;
}

mutation(["hello", "hey"]);
