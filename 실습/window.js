console.log(window); // 자바 스크립트를 실핼할 때 가장 상위에 있는 객체

var a = 1;
console.log(a);
console.log(window.a);

function b() {console.log("b")};
console.log(window.b()); // window.b() 로 b()함수를 호출
b();

console.log(window.location); // 현재 브라우저의 주소
console.log(window.location.href); // 현재 브라우저의 주소 창에 입력된 주소를 볼 수 있음. 이 값을 수정하면 입력된 주소로 페이지가이동
console.log(window.navigator); // 현재 브라우저에 관한 정보를 볼 수 있음
console.log(window.screen); // 현재 디스플레이이ㅡ 너비와 높이 등을 볼 수 있음
console.log(window.document); // 현재 웹 페이지를 구성하는 HTML과 CSS가 모두 저장되어 있음. 이 객체를 이용하면 HTML과 CSS에 접근 가능

console.log(document.body);
console.log(document.head);
console.log(document.styleSheets);