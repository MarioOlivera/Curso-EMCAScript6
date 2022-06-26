const string = 'JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web'

const replacedString = string.replace("JavaScript","Python");

const replacedString2 = string.replaceAll("JavaScript","Python");

console.log(replacedString)
console.log(replacedString2)

class Message{

    // # = private method
    #show(val){
        console.log(val)
    }

    get #add(val){

    }

}

const message = new Message()
message.show('Hola');


const promise1 = new Promise((resolve,reject) => reject("1"))
const promise2 = new Promise((resolve,reject) => resolve("2"))
const promise3 = new Promise((resolve,reject) => resolve("3"))

// retorna el primer valor que se resuelva primero.
Promise.any([promise1, promise2, promise3])
.then(response => console.log(response))


class AnyClass{
    
    constructor(element)
    {
        this.ref = new WeakRef(element)
    }
}

let isTrue = true;
let isFalse = false;

console.log((isTrue &&= isFalse))

isTrue = true;
isFalse = false;

console.log((isTrue ||= isFalse))

isTrue = undefined;
isFalse = false;

console.log((isTrue ??= isFalse))
