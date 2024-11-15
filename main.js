//Методы массивов

// push() , pop(), shift(), unshift()


const names = ['Alex', 'Bob', "Ola", 'Ivan', 'Sasha']; 
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


const arr1 = [1, 2]
const arr2 = [3, 4]
const arr3 = [5, 6]

const concatarr = arr1.concat(arr2, arr3, 7, 8); // метод массива concat сливает указанные массивы в один общий массив. Метод применяется к одному из массивов, а в параметрах метода передаются остальные массивы для слияния. При этом метод не изменяет исходный массив, а возвращает новый. Если вы передадите в concat() массив с вложенными массивами, они также будут объединены в новый массив. Вложенные массивы не будут "раскрыты" или "сплющены", они будут сохранены внутри нового массива как элементы. можно передавать обычные значения

console.log(concatarr)



const nestedArr = [
    [5, 6],
    [7, 8],
]

const result = arr1.concat(arr2, nestedArr)
const flatresult = result.flat(Infinity);

console.log(result);
console.log(flatresult);


// forEach() - позволяет последовательно перебрать все элементы массива.Метод в параметре получает функцию, которая выполнится для каждого элемента массива.В эту функцию можно передавать три параметра.Если эти параметры есть(они не обязательны), то в первый автоматически попадет элемент массива, во второй попадет его номер в массиве(индекс), а в третий - сам массив.


// //массив.forEach(function(элемент, индекс, массив) {
// код, который выполнится для всех элементов
// });


const array = [1, 2, 3, 4, 5]
let sum = 0

arr.forEach(function(el) {
    sum += el// sum= sum + el; 


});

// умножение на 2

const numbers = [2, 5, 10];

numbers.forEach(function(el, index, array) {
    array[index] = el * 2;
    // array[index]= array[index] * 2;
    
})

console.log(numbers);

// indexOf() - осуществляет поиск элемента в массиве.В первом параметре указываем номер позиции искомого символа.Метод возвращает номер первого найденного элемента, либо - 1, если такого элемента нет.Второй необязательный параметр метода задает позицию, с которой следует начинать поиск.

// Давайте найдем позицию первой тройки в массиве:


const numbersindex = [1, 2, 3, 3, 3, 4, 5]
const res = numbersindex.indexOf(3, -2);

console.log(res) // 2

// lastIndexOf() - осуществляет поиск элемента в массиве.Возвращает номер последнего найденного элемента, либо - 1, если такого элемента нет.Первым параметром мы указываем номер элемента, вторым(необязательным) - позицию, с которой следует начинать поиск.Поиск ведется с конца массива в начало.


let lastindexnumbers = [1, 2, 3, 3, 4, 5, 3]
let res1 = lastindexnumbers.lastIndexOf(3, 4)

console.log(res1) // 3

// find() - Метод find помогает найти первый элемент в массиве согласно переданному в параметре коллбэку.Если элемента нет, то возвращается undefined.

// найти элемент массива, длина которого равна 1, 3, 4:

const namesclass = ['Alex', 'Bob', "Ola", 'Ivan', 'Sasha']; 

const findNames = namesclass.find(function(el) {
    return el.length == 1;
}) 

console.log(findNames);

const findNames1 = namesclass.find(function(el) {
        return el.length == 3;
})

console.log(findNames1);

const findNames2 = namesclass.find(function(el) {
    return el.length === 4;
});

console.log(findNames2);