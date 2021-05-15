var emp1 = {};
emp1.anem = '....';
emp1.address = '....';
emp1.designation = '....';
emp1.department = '....';

var emp2 = {};
emp2.anem = '....';
emp2.address = '....';
emp2.designation = '....';
emp2.department = '....';


function createEmployeeObject(name, address, designation, department) {
    var myobj = {};
    myobj.name = name;
    myobj.address = address;
    myobj.designation = designation;
    myobj.department = department;
    return myobj;
}

var emp3 = createEmployeeObject('jon', 'noida', 'manager', 'engineering')


// constructor function in js
// factory to create objects
function Employee(name, address, designation, department) {

    this.name = name;
    this.address = address;
    this.designation = designation;
    this.department = department;

}

// calling a function in constructor mode


var emp4 = new Employee('jon', 'noida', 'manager', 'engineering');

// calling a normal function in constructor mode - not a problem
// calling a constructor function  without contructor mode it will not work



// contructor function or factory function



// there are four ways in which you can can call a fuction in js




function foo() {
    console.log('hi');
}


// foo(); //  1st way

// new foo() // 2nd way

var obj = {
    foo: function() {
        console.log('hi');
    }
};


// obj.foo(); // 3rd way of calling function


// 4 th way ???? later 


// execution context, when a func executes it runs in some context, it can refer to the variables in that context

// execution context depoends on the way in which the function is called


// there are two default arguments to every function call one is this an other is arguments


// calling a function directly this is the global object


var myobj = {
    fullname: function() {

        console.log('start fullname  ');
        console.log(this);
        console.log('end fullname  ');

        function insider() {
            console.log('start insider');
            console.log(this);
            console.log('end insider');
        } 

        insider();


        const arrowfunc = () => {
            console.log('start arrowfunc');
            console.log(this);
            console.log('end arrowfunc');
        }

        arrowfunc();

    },
    name: 'john doe'
}


console.log('=====================================  method 1 and method 3 and method  using arrow function =================');

myobj.fullname();

console.log('===================================== another way in depth ');

var diff = myobj.fullname;

diff();

// insider(); // method 1
//so from above whenever a function is called  directly, its this reference is the global object using method 1 
// global object depends on runtime environment browser or nodejs

// run above code in bowser and in nodejs


// myobj.fullname(); method 3
// this is myobj object
// meaning calling fullname() in context of myobj object



function foonew() {
    // var this = {}
    console.log('start foonew');

    console.log(this);
    this.name = 'hiiiii';
    console.log(this);
    console.log('start foonew');


    // retrn this
}

console.log('=====================================  method 2 =================');
new foonew();


// methos 2 new foonew()
// calling using new keyword
// this wiil be newly created object object
// js interprester creates this on the fly


// note if a function is called first way i.e. without any context then of course it is running is global content
// i.e. this value is global object but there is a catch 
// value of this will also depend on how that function is written
// if the function is written as arrow function then  
// even it is called in simple or method1 way the value of this will be the value of this in it lexical scope
// whose value wiil depend on how that function in lexical scope is called
// check aboce example value of this inside the rrow function varies 
// depending  on the value of this in its lexical scope

