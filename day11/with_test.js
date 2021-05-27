'use strict'; 
// SyntaxError: Strict mode code may not include a with statement


console.log('=====================');

const obj = {
    name: 'John'
}

with(obj) {
    console.log(name);
}

// console.log(name);


// all properties are created as veriables inside with

// The global scope was not modified here, but badIdea was turned into a scope at runtime rather than compile time, and its property oops becomes a variable in that scope. Again, this is a terrible idea, for performance and readability reasons.

// with statement is not allowed in strict mode
// then s error is throewn at complie time only
