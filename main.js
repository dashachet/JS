//Методы массивов

// push() , pop(), shift(), unshift()


const names = ['Alex', 'Bob', 'Ivan', 'Sasha']; 
console.log('names', names) ;
const allnames = names.push('Mary');

console.log('allnames', allnames); // просто цифра / 5 

const popnames = names.pop();
console.log('popnames', popnames); // вернется переменная , которая удаляется \ Mary

const shiftnames = names.shift();
console.log('shift names', shiftnames); //удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива. Метод shift удаляет элемент по нулевому индексу, сдвигает значения по последовательным индексам вниз, а затем возвращает удалённое значение. Если свойство length массива равно 0, вернётся значение undefined (данный метод массива мутирует исходный массив).

const unshiftnames = names.unshift('Henadzii');
console.log(unshiftnames); // вернется цифра
