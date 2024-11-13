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

const reversenames = names.reverse();
console.log(reversenames);


const arr = ['ab', 'cd', 'ef' ];
// const arrsplit = arr.split('-', 2);

// console.log(arrsplit);

const arrjoin = arr.join('-'); //объединяет элементы массива !!!!в строку!!! с указанным разделителем (он будет вставлен между элементами массива). Разделитель задается параметром метода и не является обязательным. Если он не задан - по умолчанию в качестве разделителя возьмется запятая. Если вы хотите слить элементы массива без разделителя - укажите его как пустую строку ''.

console.log(arrjoin);

// надо сделать reverse строки номера телефона.Результатом выполнения должна быть строка, а не массив.

const telephoneNumber = '375446788902';
const splittelephone = telephoneNumber.split('');
console.log(splittelephone);
const reversetelephone = splittelephone.reverse();
console.log(reversetelephone);
const jointelephone = reversetelephone.join('');
console.log(jointelephone);
