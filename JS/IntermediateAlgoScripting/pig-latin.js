function translatePigLatin(str) {
	let vowelArr = ["a","e","i","o","u"];
	let isVowel = false;
	let stridx=0;
	for(let i=0;i<str.length;i++) {
		if(vowelArr.includes(str[i].toLowerCase())) {
			if(i===0)
				isVowel = true;
			break;
		}
		stridx++;
	}
  return isVowel?str+"way":str.substring(stridx)+str.substring(0,stridx)+"ay";
}

translatePigLatin("consonant");
