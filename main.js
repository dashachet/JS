//Методы массивов

// push() , pop(), shift(), unshift()


const names = ['Alex', 'Bob', "Ola", 'Ivan', 'Sasha']; 
console.log('names', names) ;
const allnames = names.push('Mary');

function itPush(array, el) {
    array[array.length] = el
    return array.length

}
    console.log(itPush('names', "Sarah" ))

function itPush2(array, ...elements) {
    for (let index = 0; index < elements.length; index++) {
        array[array.length] = elements[index];
        
    }
    return array.length
}

function itPush3() {
    for (let index = 1; index < arguments.length; index++) {
        arguments[0][arguments[0].length] = arguments[index];

    }
    return arguments[0].length;
}

function test() {

    console.log(arguments); //подобный массиву объект; это локальная переменная, доступная внутри любой (нестрелочной) функции
}
console.log('allnames', allnames); // просто цифра / 5 

const popnames = names.pop();
console.log('popnames', popnames); // вернется переменная , которая удаляется \ Mary

function itPop(array) {
    const lastEl = array[array.length - 1]
    array.length = array.length - 1
    return lastEl
}
    console.log(function itPop(names));

console.log(function itPop(names));
const shiftnames = names.shift();
console.log('shift names', shiftnames); //удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива. Метод shift удаляет элемент по нулевому индексу, сдвигает значения по последовательным индексам вниз, а затем возвращает удалённое значение. Если свойство length массива равно 0, вернётся значение undefined (данный метод массива мутирует исходный массив).


function itShift(array) {
    const firstEl = array[0];
    for (let index = 0; index < array.length; index++) {
        array[i]= array[i + 1];
    }
    array.lenght = array.lenght - 1;
    return firlEl;
}


const unshiftnames = names.unshift('Henadzii');
console.log(unshiftnames); // вернется цифра

function itUnshift(array, ...elements) {   
    // array.lenght = array.lenght + elements.length;
    // for (let index = 0; index < array.length; index++) {
    //     const el = array[i + 1];
    // }

    // return array.length 

    const temp = [...elements, ...array]
    for (let index = 0; index < temp.length; index++) {
        array[index] = temp[index];
        
    }
    return array.length;
}

const reversenames = names.reverse();
console.log(reversenames);


function itReverse(array) {
    let temp;
    for (let index = array.lenght - 1; index >= Math.floor(array.length/2); index--) {
        temp = array[index];
        array[index] = array[array.lenght - 1 - i];
        array[array.lenght - 1 - i] = temp
        
    }
    return array
}

function itReversed(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        result[array.lenght - 1 - i] = array[i];
        
    }

        return newArray;

}
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

function itjoin(array, separator = ",") {
    let result = "";
    for (let index = 0; index < array.length; index++) {
        if ( i === array.length - 1 ) {
            result += array[i]
            break;
        } else {
            result += array[i] + separator
        }
    
        
    }
    return result;
}
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

const numbersarr = [1, 2, 3, 4, 5]

const fininexarr = numbersarr.findIndex(function (elem) {
    return elem % 2 == 0
}) //позволяет найти индекс первого элемента согласно согласно переданному в параметре коллбэку. Если элемент не найден, то возвращается -1.

console.log(fininexarr); //1

// findLastIndex() - помогает найти индекс первого элемента с конца массива, соответствующий условию согласно переданному в параметре коллбэку.Если элемента нет, то возвращается - 1.

const include3 = numbersarr.includes(4);

function itIncludes(array, searchElement, fromIndex = 0) {
    for (let index = fromIndex; index < array.length; index++) { 
        if (array[i] === searchElement) {
            return true
        }
            
        
    }
    return false;
}

console.log(include3);

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present']

const filteredwords = words.filter(e=> e.length > 6);
console.log(filteredwords) // [ 'exuberant', 'destruction', 'present' ]

// sort() - на месте сортирует элементы массива и возвращает отсортированный массив. Порядок сортировки по умолчанию соответствует порядку кодовых точек Unico
// /
// 1.сортирует строки “из коробки”, т.е.без доп параметров
// 2.сортирует по порядку в таблице unicode
// 3.Работает мутабельно, т.е. сортирует на месте
// Т.е. если мы хотим отсортировать наш массив используя sort как нам надо, то в этом случае надо использовать функцию сравнения (callback).
const sortnumbers = [1000, 4, 400, 22, -1]
const compareFunction = (a, b) => {
    // по возрастанию

    //если возвращает число больше > 0 - надо переставить
    // < 0 - то порядок не меняем
    if (a > b) {
        return 1
    } else {
        return -1
    }
}

console.log(sortnumbers.sort(compareFunction)) //[ 1000, 4, 400, 22, -1 ]

const compareFunction1 = (a, b) => a - b

console.log(sortnumbers.sort(compareFunction1)) // [ -1, 4, 22, 400, 1000 ]

const compareFunction2 = (a, b) => b - a

console.log(sortnumbers.sort(compareFunction2)) // [ -1, 4, 22, 400, 1000 ]



const arr123 = [ 1, 2, 3, 4];
function arrayPlusArray(arr123, arr2) {
    let sum1 = 0;
    for (let i = 0; i < arr123.length; i++)
        sum1 += arr123[i];


    console.log(sum1);
}

