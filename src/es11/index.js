

const button = document.getElementById("btn")

button.addEventListener("click", async function(){
    const module = await import('./file.js')

    module.hello();
})

const aBigNumber = 9007199254740991n;

const anotherBigNumer = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumer);

const promise1 = new Promise((resolve, reject) => reject("reject"))
const promise2 = new Promise((resolve, reject) => resolve("resolve"))
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"))

Promise.allSettled([promise1,promise2,promise3])
.then(response => console.log(response))
.catch(error => console.log(error))

console.log(window)
console.log(globalThis)


const foo = null ?? 'default string';

console.log(foo)

const user = {}

console.log(user?.profile?.email)