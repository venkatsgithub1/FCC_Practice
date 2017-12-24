
function myReplace(str, before, after) {
	let charatidx0=before.charAt(0);
	if(charatidx0.charAt(0)===charatidx0.toUpperCase()) {
		after = after.charAt(0).toUpperCase()+after.substring(1);
	}
	return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
