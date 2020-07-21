function shadowing_example() {
	console.log("F", val);
	val++;
}

var val = 0;
shadowing_example();
console.log("0", val);

function shadowing_example2() {
	var val2 = 0;
	
	console.log("F2", val2);
	val2++;
}

var val2 = 0;
shadowing_example2();
console.log("02", val2);