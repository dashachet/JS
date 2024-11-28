// slice() - вырезает и возвращает указанную часть массива. массив не изменяется.Первый параметр - номер элемента массива, с которого начинается вырезание, а второй ( необязательный ( тогда вырезание до конца массива), не включается в массив) параметром - номер элемента, на котором закончится вырезание.
//Если -1, то . В этом случае отсчет элемента, на котором закончится обрезание, начинается с конца массива. Последний элемент при этом будет иметь номер -1.

let arr = ['a', 'b', 'c', 'd', 'e']
const slicearr = arr.slice(1, 3);
// console.log(slicearr);
const slice1arr = arr.slice(1, -1);
// console.log(slice1arr);

function itSlice(startI, endI) {
    const result = [];
    const end = endI || this.length;
    const start = startI || 0;
    for (let i = start; i < end; i++) {
        result.push(this[i]);
    }
    return result;
}
// console.log(itSlice(arr, 1, 3));
// itSlice(arr, 1, 3);

const num = [1, 2, 3,4, 5, 6, 7, 8];
const nums = new Array(1, 2, 3, 4, 5, 6, 7, 8); // сущнность класс array

Array.prototype.itSlice = itSlice;

nums.itSlice(2, 6);

console.log(nums.itSlice(1,3));


// filter => itFilter


Array.prototype.itFilter = function(checkFunction) {
    const result = [];
    for (let index = 0; index < this.length; index++) {
        if (checkFunction(this[index])) {
            result.push(this[index]);
        }
    return result;
    }



}

const even = nums.itFilter((n)=>  {
    if( n % 2 === 0) {
    return true 
}
    else  {
        return false
    }
} )

//метод map

function iTMap(array, mapfunction) {
    const result5= [];
    for (let index = 0; index < array.length; index++) {
        const Newelement = mapfunction(array[index])
        result5.push(Newelement);
    }
    return result5
}

Array.prototype.iTMap = iTMap; 
console.log(even)
console.log(iTMap(num, n => n % 2 ===0));


// reduce

function itReduce(array, reducer, startValue) {
    let start = startValue;
    for (let index = 0; index < array.length; index++) {
        start = reducer(start, array[i])
        
    }
    return  start

}
    const arrnums = [1, 2, 3, 2, 1, 5, 2, 2];


    function objArr (array) {
        const result ={}
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
        }
    }
// splice() - удаляет или добавляет элементы в массив.Можно только удалять элементы, только добавлять или делать и то и другое одновременно; изменяет сам массив и возвращает при этом массив удаленных элементов.

// Первым параметром метод принимает номер элемента массива, который нужно удалить.Вторым параметром - сколько элементов массива следует удалить.Если его поставить в 0 - то элементы удалены не будут(только добавлены новые).Дальше через запятую идут элементы, которые нужно добавить в массив(являются необязательными параметрами).Эти элементы добавятся вместо удаленных элементов массива.

// Если удаления не было(когда второй параметр 0) - элементы вставляются в массив начиная с той позиции, которая указана первым параметром метода.Первый параметр может иметь отрицательное значение.В этом случае отсчет позиции начнется не с начала массива, а с конца.Последний элемент при этом будет иметь номер - 1.

// Общая схема данного метода массива:

// массив.splice(откуда удаляем, сколько удаляем, [вставить], [вставить]...);

let splicearr = arr.splice(0, 0, 'k');

console.log(splicearr);
// console.log(arr); 

// // toSpliced() - такой же метод, как и splcie, но он у нас иммутабельный, вышел относительно недавно, поэтому не везде может поддерживаться(надо смотреть в каких средах поддерживается)



//reduce() - применяет функцию reducer к каждому элементу массива(слева - направо), возвращая одно результирующее значение.
// prev//=a[0]//
let a = [1, 2, 3, 4, 5]
let b = a.reduce(function (prev, item, index) {
    return prev + item
}, 0)

console.log('b', b) //15