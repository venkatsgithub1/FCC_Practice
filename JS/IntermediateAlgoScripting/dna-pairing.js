function pairElement(str) {
  	let at=['A','T'];
	let gc=['G','C'];
	final_arr=[];
	str.split("").forEach((data)=>{
		if(at.includes(data)) {
			final_arr.push([data,at[0]===data?at[1]:at[0]]);
		} else {
			final_arr.push([data,gc[0]===data?gc[1]:gc[0]]);
		}
	});
	return final_arr;
}

pairElement("GCG");
