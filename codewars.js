// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

// each_cons([1, 2, 3, 4], 2)
//   #=> [[1, 2], [2, 3], [3, 4]]

// each_cons([1, 2, 3, 4], 3)
//   #=> [[1, 2, 3], [2, 3, 4]]

function eachCons(array, n) {
    const r = [];
    for (i = 0; i <= array.length - n; i++) {
        const newarr = []
        for (let k = i; k < i + n; k++) {
            newarr.push(array[k])
        }
        r.push(newarr)
    }
    return r;
}




// Implement String#digit ? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit(0 - 9), false otherwise.


String.prototype.digit = function() {
  return this.length === 1 && '0' <= this && this <= '9';
};

// Create a method all which takes two params:

// a sequence
// a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence.Otherwise, it should return false.If the sequence is empty, it should return true, since technically nothing failed the test.

//     Example
// all((1, 2, 3, 4, 5), greater_than_9) -> false
// all((1, 2, 3, 4, 5), less_than_9) -> True

function all(arr, fun) {
    return arr.every(fun)
}


// Given an array of numbers, return a new array of length number containing the last even numbers from the original array(in the same order).The original array will be not empty and will contain at least "number" even numbers.
function evenNumbers(array, n) {
    const newArr = array.filter(el => el % 2 === 0)
    const reveseArr = newArr.slice(-n)
    return reveseArr
}


// Given a mathematical equation that has *, +, -,/, reverse it as follows:

// solve("100*b/y") = "y/b*100"
// solve("a+b-c/d*30") = "30*d/c-b+a"

function solve(eq) {
    return eq.split(/([*+-/])/).reverse().join('')
}

// In this kata, we will make a function to test whether a period is late.

// Our function will take three parameters:

// last - The Date object with the date of the last period

// today - The Date object with the date of the check

// cycleLength - Integer representing the length of the cycle in days

// Return true if the number of days passed from last to today is greater than cycleLength.Otherwise, return false.



const periodIsLate = (last, today, cycleLength) => {
    const numberDaysLast = last.getTime() / (1000 * 3600 * 24)
    const numberDaysToday = today.getTime() / (1000 * 3600 * 24)
    const diferenceDays = numberDaysToday - numberDaysLast

    return diferenceDays > cycleLength
}

// Type of sum
// Return the type of the sum of the two arguments

function typeOfSum(a, b) {
    let k = a + b
    return typeof k
}