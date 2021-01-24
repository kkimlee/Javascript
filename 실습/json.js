var pi = 3.14;
var string = "string";

console.log(JSON.stringify(pi));
console.log(JSON.parse("3.14"));
console.log(JSON.parse("\"string\""));

var arr = [
	"문자열", 3.14, true, null, undefined, function a() { console.log("method") }
];

var t = JSON.stringify(arr)

console.log(t)
console.log(JSON.parse(t));

var obj = {
	"str": "문자열",
	"num": 3.14,
	"boolean":true,
	"null": null,
	"undefined": undefined,
	"method": function a() {console.log("method") }
}

var t2 = JSON.stringify(obj);
console.log(t2);
console.log(JSON.parse(t2));