if (true) {
	console.log("이 구문은 실행됩니다");
}

if (false) {
	console.log("이 구문은 실행되지 않습니다.");
}

if (true) {
	console.log("1");
}
else {
	console.log("2");
}

if (false) {
	console.log("1");
}
else {
	console.log("2");
}

if (true) {
	console.log("1");
}
else if (true) {
	console.log("2");
}
else {
	console.log("3");
}

console.log("Menu");
console.log("1. Ice Americao");
console.log("2. Cafe Latte");
console.log("3. Cappuccino");
console.log("4. Tea");

var choice = parseInt(prompt("메뉴를 선택해 주세요."));
console.log(choice + "번 메뉴를 선택하셨습니다.");
if (choice == 1) {
	console.log("아이스 아메리카노는 1500원입니다");
}
else if (choice == 2) {
	console.log("카페 라떼는 1800원입니다.");
}
else if (choice == 3) {
	console.log("카푸치노는 2000원입니다.");
}
else if (choice == 4) {
	console.log("홍차는 1300원입니다.");
}
else {
	console.log("죄송합니다. 그런 메뉴는 없습니다.");
}