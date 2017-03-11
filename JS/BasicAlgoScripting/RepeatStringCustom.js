
function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num<=0) return "";
  var temp=str;
  for (var i=0;i<num-1;i++) {
    str=str+temp;
  }
  return str;
}

repeatStringNumTimes("abc", 3);
