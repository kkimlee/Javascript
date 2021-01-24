var height = prompt("키를 입력해 주세요");
console.log(height, typeof(height)); // str로 출력됨

var height_int = parseInt(height) // 정수 부분만 추출
console.log(height_int, typeof(height_int));
var height_float = parseFloat(height); // 실수 부분까지 추출
console.log(height_float, typeof(height_float));