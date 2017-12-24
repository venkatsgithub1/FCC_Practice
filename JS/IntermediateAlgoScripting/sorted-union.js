function uniteUnique(arr) {
  	let final_arr=[];
	for(let i=0;i<arguments.length;i++) {
		for(let j=0;j<arguments[i].length;j++) {
			let data=arguments[i][j]
			if(final_arr.includes(data)) {
				continue;
			}
			final_arr.push(data);
		}
	}
  return final_arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
