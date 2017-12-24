function fearNotLetter(str) {
  	let arr=str.split("").map(data=>data.charCodeAt(0));
	for(let i=0;i<arr.length-1;i++) {
		if(arr[i]+1!==arr[i+1])
			return String.fromCharCode(arr[i]+1);
	}
	return undefined;
}

fearNotLetter("abce");
