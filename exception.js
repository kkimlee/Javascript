function errFunc() {
	throw "error";
	console.log("this cod will not be executed");
}

function func() {
	try {
		console.log("try - 1");
		errFunc();
		console.log("try - 2");
	}
	catch(e) {
		console.log("catch error in function : ", e);
	}
	finally {
		console.log("finally in function - this code will always be excuted");
	}
}

try {
		console.log("try - 1");
		func();
		console.log("try - 2");
}
catch(e) {
	console.log("catch error : ", e);
}
finally {
	console.log("finally - this code will always be executed");
}
