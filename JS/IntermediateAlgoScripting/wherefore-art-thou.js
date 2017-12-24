
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  let sourceKeyArr = Object.keys(source);
  arr= collection.filter((obj)=>{
		for(let i=0;i<sourceKeyArr.length;i++) {
			if(obj.hasOwnProperty(sourceKeyArr[i])) {
              if(obj[sourceKeyArr[i]]!==source[sourceKeyArr[i]])
					return false;
				continue;
			} else {
				return false;
			}
		}
		return true;
	});
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
