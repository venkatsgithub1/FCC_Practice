let numbers=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
          
let symbols=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

function convertToRoman(num) {
 for(let i=0;i<numbers.length;i++) {
      let numberInAction = numbers[i];
      //console.log("numberInAction:"+num);
      if(num == 0) {
        return "";
      }
      if(numberInAction===num) {
        return symbols[i];
      }
      if(num>numberInAction) {
        let quo = Math.floor(num / numberInAction);
        num = num - (quo * numberInAction);
        //console.log(quo);
        //console.log((symbols[i].repeat(quo)));
        return (symbols[i].repeat(quo))+convertToRoman(num);
      }
    }
}

convertToRoman(36);
