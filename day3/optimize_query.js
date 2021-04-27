// input 1 array of numbers [2,4,5,7,2,0,6,5,3,9]
// input 2  - 2D array of queries 

/*


[
[query1...]
[query2...]
.....
]


[
    [lower, upper, number]
]

sum of numbers from numbers array between lower and upper - 1 indexed


if any number is zero then use number to sum instead of zero

find optimized solution

*/

// [1,2,3,4,5]

// [0, ]


function subarray(input1, input2) {


    let sumNumbers = [], countZeros = [];


    sumNumbers[0] = 0;

    for(let i = 1; i < input1.length; i++) {

        sumNumbers[i] = input1[i-1] + 


    }



}
