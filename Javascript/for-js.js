const numbers = [1, 2, 3, 4, 5];
// Using for loop to iterate over the array
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
for (const num of numbers) {
    console.log(num);
}

const fruits = ["apple", "banana", "orange"];
for (let j=0; j < fruits.length; j++) {
    console.log(fruits[j]);
}

for (let k = 0; k <=10; k++){
    console.log(k, 'loop');
}
for (let k = 0; k <=10; k=k+2){
    console.log(k, 'even loop');
}
let sum = 0;
for (let i =11; i<=20; i++){
    sum += i;
}
console.log("Sum:", sum);

for (let i = 10; i >= 5; i--) {
    console.log(i, 'Reverse loop');
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i, 'even loop');
    }
    else {
        console.log(i, 'odd loop');
    }   
}

// 3 diye vag kore emon:
let total = 0;
for (let i = 0; i<=30; i++){
    if (i % 3 === 0){
        console.log(i, '3 diye vag loop');
        total += i;
    }
    else{
        console.log(i, '3 diye vaa kora possible na');
        total += 1;
        }
    }
    console.log("Total:", total);