let score = "100";

//console.log(typeof(score));
let valueInNumber = Number(score);
//console.log(valueInNumber);
//console.log(typeof(valueInNumber));

let name = "Ayesha";
let valueInNumber2 = Number(name);
//console.log(valueInNumber2); // NaN => Not a Number

let isLoggedIn = false;
//console.log(isLoggedIn);
let booleanInNumber = Number(isLoggedIn);
//console.log(booleanInNumber); // 0

let isLoggedIn2 = 1;
let booleanInNumber2 = Boolean(isLoggedIn2);
//console.log(booleanInNumber2); // 1

//1 = true
//0 = false
//"" = false
//" " = true

let someNumber = 3;
let numberInstring = String(someNumber);
console.log(numberInstring); // "3"
console.log(typeof numberInstring);
