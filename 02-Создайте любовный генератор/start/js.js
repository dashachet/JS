let firstName = prompt('Напишите первое имя')

let secondName = prompt('Напишите второе имя')

let random = (Math.floor(Math.random() * 100))

if  (random < 33 && firstName != null ) {
    alert(` Результат совместимость ${firstName} и ${secondName} ${random}.
        Вы не подходите друг другу`)
} else if (random > 33 && random > 66) {
    alert(` Результат совместимость ${firstName} и ${secondName} ${random}.
        Рискните`)
} else {
    alert(` Результат совместимость ${firstName} и ${secondName} ${random}.
        Вы  подходите друг другу`)
}


console.log (alert(1) || 2 || alert(3))