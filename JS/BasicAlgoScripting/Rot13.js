
function rot13(str) { // LBH QVQ VG!
  var str2="";
  for (var i=0;i<str.length;i++) {
    var charInPlace=str.charCodeAt(i);
    if (charInPlace>90 || charInPlace<65){
      str2+=String.fromCharCode(charInPlace);
      continue;
    }
    str2+=String.fromCharCode(charInPlace-13>=65?charInPlace-13:90+(charInPlace-64)-13);
  }
  return str2;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
