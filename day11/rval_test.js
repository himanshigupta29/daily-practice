
'use strict';

console.log('============= begin ================');

function evaltest() {

    eval("var badidea = 'very bad' ;");

    console.log(badidea);

}

evaltest();

// scope is badidea is creted in runtime not in compile time