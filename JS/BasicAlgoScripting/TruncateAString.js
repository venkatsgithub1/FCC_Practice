
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var tempNum=num;
  if (num>3) tempNum-=3;
  return str.length>num?str.slice(0, tempNum)+"...":str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
