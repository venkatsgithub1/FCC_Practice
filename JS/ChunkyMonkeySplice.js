// Using splice.
// Found splice very useful in this case.
    function chunkArrayInGroups(arr, size) {
      // Break it up.
        var arr1=[];
      while (arr.length>0) {
        arr1.push (arr.splice(0,size));
      }
      return arr1;
    }

    chunkArrayInGroups(["a", "b", "c", "d", "e"], 3);
