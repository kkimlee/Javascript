var str = "Hello";
console.log("str.length:", str.length);
console.log("str[\"length\"]:", str["length"]);

var str2 = "World";
console.log("str.concat(str2):", str.concat(str2));

var str3 = str.concat(str2);
console.log("str.concat(str2):", str3);

console.log("\"Hello\" + 3.14:", "Hello" + 3.14);