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
