/*
function foo() {
	console.log( a ); 
}

function bar() {
	var a = 3;
	foo();
}

var a = 222222222222;

bar();


*/

function bar() {
	var a = 3;
	
	function foo() {
		console.log( a ); 
	}


	foo();
}

var a = 222222222222;

bar();
