const array = [1, 2, 3, 4, 5];
const zeroArr = [];
//несколько элементов
function pushFunction(arr, ...rest) {
  for (let index = 0; index < rest.length; index++) {
    arr[arr.length] = rest[index];
  }
  return arr.length;
}
// один элемент
function itPush(array, el) {
  array[array.length] = el;
  return array.length;
}

console.log(pushFunction(array, 6, 9));

let lastEl;
function popFunction(arr) {
  if (arr.length > 0) {
    lastEl = arr[arr.length - 1];
    arr.length = arr.length - 1;
  } else return "undefined";

  return lastEl;
}

console.log(popFunction(array));
console.log(array);
console.log(popFunction(zeroArr));

function indexOf(arr, el, fromIndex = 0) {
  if (fromIndex > arr.length) {
    fromIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    for (let fromIndex = 0; fromIndex < array.length; fromIndex++) {
      if (array[fromIndex] === el) return fromIndex;
    }
  }

  return -1;
}

console.log(indexOf(array, 2, 3));

function itReverse(arr) {
  for (let i = 0; i < Math.floor(arr.length/2); i++) {
    let element = arr[arr.length - 1 - i ];
    arr[arr.length - 1 - i] = arr[i]
    arr[i] = element
    
  }
  return arr
}

function reverse(array) {
  const stack = [];
  for (let i = 0; i < array.length; i++) {
    stack.push(array[i]);
  }
  const reversedArray = [];
  while (stack.length > 0) {
    reversedArray.push(stack.pop());
  }

  return reversedArray;
}

console.log(itReverse(array));
console.log(reverse(array));

function sliceArray(arr, begin = 0, end = arr.length) {
    let result = [];
    begin = begin < 0 ? 
    arr.length + begin 
    : begin;
    end  = end < 0 ? 
    arr.length + end :
    end
     for (let i = 0; i + begin < end; i++) {
         result[i] = arr[i + begin];
    
     }
     return result
}

