const number = 45;
function fanOffKor (){
    console.log('Bosa theke uthe dara')
    console.log("walk towards the switch")
    console.log('switch off kor')
}
// calling the function 
fanOffKor();


// parameter 
function bhatKhao(mach, dal){
    console.log('every monday'+' mach'+' dal'+' diye Bhat') 
}
const mach = 'mach'
const dal = 'dal'

bhatKhao(mach, dal)

//return
function doubleIt ( number){
    const nm = number*2;
    return nm // return er por function eer kaj shesh
}
console.log('i will call the function')
console.log(doubleIt(15));
console.log("----------")
console.log(doubleIt(88))

function doMath(n1, n2){
    const sum = n1 + n2
    const diff= n1-n2
    const mul = n1 * n2
    const div = n1/n2
    return div
}
console.log('div', doMath(9,2))

// for a given string tell me whether it has even number of charachters or not 

function evenSize(str){
    const size= str.length
    console.log(size)
    let evod= true
    if (size%2===0){
        evod=true
    }
    else{
        evod=false
    }

    return evod

}

console.log(evenSize('hehehehe'))