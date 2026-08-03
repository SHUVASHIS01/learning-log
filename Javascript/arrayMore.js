// looping techniques for arrays
const arr = [1, 2, 3, 4, 5];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

arr.reverse(); //original array ke reverse kore dibe
console.log(arr);

//for use kore array ke reverse korar aro way
arr1=[]
for ( const num of arr){
    arr1.unshift(num)
}
console.log(arr1)


//Sorting of an array
const jav = ['anis', 'rahman', 'kate', "milon"]
console.log(jav.sort())


const persons = [1,2,3,4,5,9,2,3,4]

console.log(persons.sort())