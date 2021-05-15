
var a;


function x() {

	a = 7;
	console.log('a inside', a);

	function y() {

		console.log(a);
	
	}

	return y;
}


var z = x();

console.log('a prev', a);

a =9;

console.log('a after', a);


console.log(z);

z();
