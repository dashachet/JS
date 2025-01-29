// глобальное лексическое окружение {} -> null

let car // {car: undefined} -> null

car = 'Toyota' // {car: 'Toyota'} -> null

car = 'Ferrari' // {car: 'Ferrari'} -> null

//globalLE {} --> null

startEngine()

let car = 'bmw' //globalLE {car: 'bmw'} --> null

const startEngine = function () {
    //startEngineLE {} --> globalLE // сначала функция ищет свое лексическое окружение, если его нет, то обращается к globalLE
    const car = 'kia' // startEngineLE {car: 'kia'} --> globalLE
    console.log(`Start ${car}`)

    const func = () => {
        // funcLE --> startEngineLE --> globalLE
        let color = 'red'
        console.log(car + "" + color)

    }
}

startEngine() //globalLE {startEngine: function} --> null

car = 'audi' //globalLE {startEngine: function, car: 'audi'} --> null

startEngine()

// везде где есть {} (for(){}, if (){} ) - есть доступ к globalLE


// То есть замыкание - это способность функции запомнить в каком лексическом окружении ее создали и иметь доступ к этому окружению даже после завершения выполнения внешней функции.
const pow = (x, n) => {
    if (n === 1) {
        return x
    } else {
        return x * pow(x, n - 1)
    }
}
// 2(4) === 2 * 2(3) === 2 * 2 * 2(2) === 2 * 2 * 2 * 2(1)