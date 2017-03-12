
function chunkArrayInGroups(arr, size) {
  // Break it up.
    var arr1=[];
  var tempSize=0;
  var tempArr=[];
  while (arr.length>0) {
    tempArr.push(arr.shift());
    tempSize++;
    if (tempSize===size) {
      arr1.push(tempArr);
      tempSize=0;
      tempArr=[];
    } else if (arr.length===0) {
      arr1.push (tempArr);
    }
  }
  return arr1;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
