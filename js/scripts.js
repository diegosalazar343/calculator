function add(number1, number2){
	return number1 + number2;
}
function subtract(number1, number2){
	return number1 - number2;
}
//alert(subtract(10, 7));
function multiply(number1, number2){
  return number1 * number2;
}
//alert(multiply(3,6));
function threeTimes(number1, number2, number3){
  return number1 * number2 * number3;
}
/*alert(threeTimes(2,4,6));*/
function divide(number1, number2){
	return number1 / number2;
}
//alert(divide(9,3));
function remainder(number1, number2){
	return number1 % number2;
}

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter a number:"));
alert(subtract(number1, number2));