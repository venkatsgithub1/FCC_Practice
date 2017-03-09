
function reverseString(str) {
  var arr=str.split("");
  str="";
  arr.map (function (val) {
    str=val+str;
  });
  return str;
}

reverseString("hello");
