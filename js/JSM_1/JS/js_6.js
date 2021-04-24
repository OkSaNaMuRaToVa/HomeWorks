var total = 0;
var input = +prompt();
while(input){
	total += input;
	input = +prompt();
};
alert("Загальна сума чисел дорівнює [" + total +"]");