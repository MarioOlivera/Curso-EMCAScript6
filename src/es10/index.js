let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2))

let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value*2]))

let hello = '         hello world';

console.log(hello)
console.log(hello.trimStart())

let hello2 = 'Hello world              ';

console.log(hello2)
console.log(hello2.trimEnd())

let entries = [["name", "Mario"],["age",  25]]

console.log(Object.fromEntries(entries))

let mySymbol = 'My symbol';
let symbol = Symbol(mySymbol);

console.log(symbol.description);
