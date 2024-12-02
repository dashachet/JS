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