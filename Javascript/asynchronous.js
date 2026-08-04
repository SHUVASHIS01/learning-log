//setTimeout
function hello(){
console.log('hello')
}

setTimeout(hello, 2000) //timeout; 2s=2000ms


console.log('1')
console.log('2')
setTimeout(() => {
    console.log('hello 1')
}, 4000)
console.log('3') //immidiate execution
console.log('4')

//callback

function sum(a, b){
    console.log(a+b)
}
function calculator(a,b, sumCallback){
    sumCallback(a,b)

}
calculator(1,2, sum)


//nesting   of callback
let age = 19;
if (age>=18){
    if (age>=60){
        console.log('senior')
    }
    else if(age>18){
        console.log('mature')

    }
    else{
        console.log('child')
    }

}
function getData(dataId, getNextData){
    //2s
    setTimeout(()=>{
        console.log('data', dataId);
        if (getNextData){
            getNextData();
        }
    },2000)
}
//callbackhell
getData(1, ()=> {
    getData(2, ()=>{
        getData(3, ()=>{
            getData(4);
        })
    })
})

//Promises, 
let promise = new Promise((resolve, reject) => {
    console.log('ami promise re');
    resolve(123);
    //reject(123);
    
})
//how to use promise
const getPromise=()=>{
    return new Promise((resolve, reject)=>{
        console.log('I am a promise');
        resolve('success')
    })
}
let promis = getPromise();
promis.then((res)=>{
    console.log('promise fullfilled', res)
})
promis.catch((err)=>{
    console.log('promise rejected', err)
})

//chaining of promises 
function async1 (){
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('d1');
        resolve('success');
    },4000);
    });
}
function async2 (){
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('d2');
        resolve('success');
    },4000);
    });
}

console.log('fething d1');
let p1 = async1();
p1.then((res) => {
    console.log(res);
    console.log('fething d2');
    let p2 = async2();
    p2.then((res) => {
        console.log(res);
        console.log('whole data fetched')
    });
    
});

