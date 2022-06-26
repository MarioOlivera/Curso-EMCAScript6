const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data);
console.log(entries)

const data2 = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana'
}

const values = Object.values(data2);

console.log(values)

const string = 'hello';

console.log(string.padStart(7,'hi'))
console.log(string.padEnd(12,' ----'))


const helloWord = () => {
    return new Promise((resolve,reject) => {
        if(true){
            setTimeout(()=> {
                return resolve("Hello Word")
            }, 3000);
        }
        else
        {
            return reject(new Error('Test Error'))
        }
    })
}

const helloAsync = async () => {
    const hello = await helloWord();
    console.log(hello);
}

//helloAsync();

const anotherFunction = async () => {
    try
    {
        const hello = await helloWord();
        console.log(hello);
    }
    catch(error)
    {
        console.log(error)
    }
}

anotherFunction();