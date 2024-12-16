const user = {
    name: "Bob",
    age: 32
}

function getObject (key,value) {
    const newObject = {}
    newObject[key] = value
    return newObject;

    // return {
    //     [key] : value
    // }
}

console.log(getObject("name", "Bob"));

function createObject(key, value) {
    return {
        [key.toUpperCase()]: value,
    }
}
createObject('car', 'Audi')

const map = new Map()