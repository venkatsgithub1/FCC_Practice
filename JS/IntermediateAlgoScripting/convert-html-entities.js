function convertHTML(str) {
  // &colon;&rpar;
  return str.replace(/\&/g,"&amp;").replace(/\>/g,"&gt;").replace(/\</g,"&lt;").replace(/'/g,"&apos;").replace(/\"/g,"&quot;");
}

convertHTML("Dolce & Gabbana");
