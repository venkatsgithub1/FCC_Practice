
function palindrome(str) {
  // Good luck!
  var arr1=str.match (/[a-z0-9]/gi);
  if (arr1===null) return true;
  var arrLen=arr1.length;
  for (var i=0;i<arrLen/2;i++) {
    if (arr1[i].toLowerCase()!==arr1[arrLen-i-1].toLowerCase())
      return false;
  }
  return true;
}



palindrome("eye");
