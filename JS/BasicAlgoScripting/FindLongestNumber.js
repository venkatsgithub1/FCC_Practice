
function findLongestWord(str) {
    var arr1=str.split(" ");
  var str1="";
  var res=arr1.map (
    function (variable1) {
        if (variable1.length>str1.length) str1=variable1;
    });
  return str1.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
