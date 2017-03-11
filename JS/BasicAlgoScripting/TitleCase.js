
function titleCase(str) {
  var arr1=str.split(" ");
  str="";
  arr1.map (function (variable1) {
    str+=variable1[0].toUpperCase()+variable1.substring(1, variable1.length).toLowerCase()+" ";
  });
  return str.trim();
}

titleCase("I'm a little tea pot");
