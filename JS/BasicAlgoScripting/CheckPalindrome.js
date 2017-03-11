
function palindrome(str) {
  // Good luck!
    var arr1=str.match (/[a-z0-9]+/gi);
  if (arr1===null) return true;
  str="";
  for (var temp of arr1) str+=temp;
  str=str.toLowerCase();
  var strLength=str.length;
  if (strLength===1) return true;
  for (var i=0;i<strLength;i++)
    if (str[i]!=str[strLength-i-1]) return false;
  return true;
}



palindrome("eye");
