
// DEFAULT PARAMS Y CONCATENACION:

function newFunction(name, age, country)
{
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';

    console.log(name,age,country)
}

// e6
function newFunction2(name = 'Oscar', age = 32, country = 'MX')
{
    console.log(name,age,country)
}

newFunction2();
newFunction2("Mario", 25, "Argentina");

/*
*
* LET y CONST, Multilínea, Spread Operator y Desestructuración
*
*/

let hello = "Hello";
let world = "World";

let epicPharse = hello + ' '+world;

console.log(epicPharse)

let epicPharse2 = `${hello} ${world}`;

console.log(epicPharse2);


let lorem = "Prueba renglon uno \n"
+ "otra frase renglon 2";

let lorem2 = `Otra prueba renglon uno 
otra frase en renglon 2`;

console.log(lorem)
console.log(lorem2)

let person = {
    'name': 'Oscar',
    'age': 32,
    'country': 'MX'
}

console.log(person.name, person.age, person.country)

let {name, age, country} = person;

console.log(name, age, country)

let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Yesica', 'Camila']

let education = ['David', ...team1, ...team2]

console.log(education)

{
    var globalVar = "GLOBAL VAR";
}

{
    let globalLet = "GLOBAL LET";
}

console.log(globalVar);
console.log(globalLet);

const a = 'b';

console.log(a);


/*
*
* Arrow Functions, Promesas y Parámetros en objetos
*
*/

let name = "Mario";
let age = 25;

// es5
let obj = { name: name, age: age}

// es6
let obj2 = {name, age}

console.log(obj2)

const names = [
    { name: 'Mario', age: 25 },
    { name: 'Julian', age: 24 }
]

let listOfNames = names.map(function(item){
    return item.name
})

let listOfNames2 = names.map((item) => {return item.name})

console.log(listOfNames2)

const listOfNames3 = (name, age, country) => {
    console.log("AQUI ARROW")
}

const listOfNames4 = name => {
    console.log("AQUI TAMBIEN ARROW")
}

const square = num => num * num;

console.log(square(9));

// PROMESAS
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true)
        {
            resolve('Hey!')
        }
        else
        {
            reject("Ups!")
        }
    })
}

helloPromise().then(response => {
    console.log(response)
}).catch(error => console.log(error))


class Calculator{

    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sumar(valueA, valueB)
    {
        this.valueA = valueA;
        this.valueB = valueB;

        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sumar(10,8));

import {hello} from './module'

hello()


function* helloWorld(){
    if(true)
    {
        yield 'Hello, ';
    }

    if(true)
    {
        yield 'Wordl';
    }
}

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);