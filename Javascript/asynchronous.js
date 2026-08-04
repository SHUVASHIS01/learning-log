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


//nesting
