// 4 ways to call function

// 1
function welcome() {
    console.log('WELCOME ');
}
// welcome();

// 2
// const name = 'Nanny';
// var address = '45 street';
// const person = {
//     name: 'dan',
//     greet: function() {
//         console.log('Greetings  ', this.name);
//         console.log('address............  ', this.address);

//     }
// };

// ========================================================================
// calling greet function in context of person object

// person.greet();
// console.log('global context');
// const greet2 = person.greet;
// greet2(); // calling greet function in global context


// globalThis.name = 'John';
// greet2(); // calling greet function in global context
// console.log(globalThis);

//===================================================================================

// var when declared globally in browser (not in nodejs) - is attached as a property in window object
// const name = 'Nanny';
// var address = '45 street';
// const person = {
//     name: 'dan',
//     greet: function() {
//         console.log('Greetings  ', this.name);
//         console.log('address............  ', this.address);

//     }
// };

// person.greet();

// console.log('global context');
// const greet2 = person.greet;
// greet2(); // calling greet function in global context



//PUTPUT

// Greetings   dan
// address............   undefined
// global context
// Greetings   
// address............   45 street
// thisg.js:1 undefined

//===================================================================================


// In-browser, unless we’re using modules, global functions and variables declared with var become a property of the global object.

// call paramers separedred by comma and apply array orm params

//===================================================================================

// function myCity(greet, bye) {
//     console.log(`============= ${greet}`);
//     console.log('my name is', this.city);
//     console.log(`============= ${bye}`);

// }

// myCity();
// console.log('...............................');
// person4 = {
//     city: 'Noida'
// };

// myCity.call(person4, 'hello.. ', 'Good bye');
// console.log('...............................');

// myCity.apply(person4, ['hello..again ', 'Good bye !! ']);
// console.log('...............................');

// const myarr = ['welcome', 'See you'];

// myCity.apply(person4 , myarr);
// console.log('...............................');

// myCity.call(person4 , ...myarr);
//===================================================================================


//===================================================================================

// arrow function 

// global.city = 'Jaipur';

// console.log('outside - this is', this.constructor);

// function simpleFunc() {
//     console.log('inside simple func - this is', this);
// }
// simpleFunc();

// const myArrowCity = (greet, bye) => {
//     console.log(`============= ${greet}`);
//     console.log('this is', this);
//     console.log(this === module.exports);
//     console.log('my city is', this.city);
//     console.log(`============= ${bye}`);
// }


// const person5 = {
//     city: 'Noida'
// };

// console.log('.............. call .................');
// myArrowCity.call(person5, 'hello.. ', 'Good bye');

// console.log('............... apply ................');
// myArrowCity.call(person5, ['hello.. ', 'Good bye']);

// so calling arrow function using call() or  apply() will not overide the value of this
// arrow function will only pich the value from its lexical scope
//===================================================================================


// bind

// console.log('======================== bind ===============');

// function welcomeSate() {
//     console.log('welcome', this.state);
// }

// welcomeSate = welcomeSate.bind({state: 'U.P.'});

// welcomeSate();


// bind with arrow


// console.log('======================== bind  with arrow ===============');

// let welcomeSateArrpw = () => {
//     console.log('welcome', this.state);
// }

// welcomeSateArrpw = welcomeSateArrpw.bind({state: 'U.P.'});

// welcomeSateArrpw();


// prototypal inheritance

function Employee(name, organisation) {

    this.name = name;
    this.organisation = organisation;

}

Employee.prototype.getName = function() {
    return this.name;
}
const emp1 = new Employee('John', 'Facebook');

function Manager(name, dept) {
    this.name = name;
    this.department = dept
}

Manager.prototype.getDepartment = function() {
    return this.department;
}
Manager.prototype.__proto__ = Employee.prototype;

const manager1 = new Manager('Dan', 'Operations');

console.log(manager1.getDepartment());
// manager1.getName();

console.log(manager1.getName());
