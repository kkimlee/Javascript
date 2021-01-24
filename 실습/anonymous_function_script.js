var sum = 0;

// 1부터 50까지의 합을 출력
for(var i = 1; i <= 50; i++) {
	sum += i;
}

(function() {
	for (var i = 1; i <= 5; i++) {
		console.log(i);
	}
})();


//51부터 100까지의 합을 추가로 계산
for(; i<=100; i++) {
	sum+=i;
}

console.log(sum);


setTimeout(
	function() {
		console.log("timeout");
	}, 3000);