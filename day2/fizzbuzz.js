


/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
    
    let str = '';
    if(n%3 === 0) {
        str = str + 'Fizz';
    }
    if(n%5 === 0) {
        str = str + 'Buzz';
    }
    
    if(n%3 !== 0 && n%5 !==0) {
        str = n;
    }
    
     console.log(str);
    
}

// function main() {
//     const n = parseInt(readLine().trim(), 10);

//     fizzBuzz(n);
// }


let n = 3;
fizzBuzz(n);
