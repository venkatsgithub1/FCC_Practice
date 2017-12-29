function sumPrimes(num) {
  	let primeArr = new Array(num+1);
	primeArr.fill(true);
	primeArr[0]=primeArr[1] = false;
	result = [];
	for (let i=2;i<=num;i++) {
		if(primeArr[i])
			result.push(i);
		for(let j=i*i;j<=num;j+=i) {
			primeArr[j] = false;
		}
	}
	
  return result.reduce((prev,curr)=>{
		return prev+curr;
	});
}

sumPrimes(10);
