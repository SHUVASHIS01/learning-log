const s = 'Argho';
console.log(typeof s); // string
console.log(s.length);
console.log(s[0]); // A
console.log(s[1]);
console.log(s.toUpperCase()); // ARGHO
console.log(s.toLowerCase());

// array is mutable but string is immutable

const school= 'Brac University';
const subject = 'CSE';
const book = '  cSE   '; // case sensitive and also space sensitive
if (subject === book ){
    console.log('same');
}
else if (subject.toLowerCase() === book.toLowerCase()){

    console.log('lower ba upper kore same kora hoise');
}
else if (subject.trim().toLowerCase() === book.trim().toLowerCase()) {
    console.log('space remove kore same kora hoise');
}
else { 
    console.log('not same');
}

//Slice method
const str = 'Hello, World!';
const slicedStr = str.slice(7, 12);
console.log(slicedStr); // Output: "World"

const str1 = 'JavaScript is awesome!';
console. log(str1.split(' ')); // Output: ["JavaScript", "is", "awesome!"]

const str2 = 'i am a hard worker';
console.log(str2.split('a')); // Output: ["i", "am", "", "hard w", "rker"]

const array = ['Hello', 'World', 'JavaScript'];
const joinedStr = array.join(' || ');
console.log(joinedStr); // Output: "Hello, World, JavaScript"
//concat method
const first = 'Hello';
const second = 'World';

const fullname = first+ ' '+ second;
// console.log(fullname); // Output: "Hello World"

const fullname1 = first.concat(' ', second);
console.log(fullname1); // Output: "Hello World"

//includes method
const str3 = 'JavaScript is awesome!';
console.log(str3.includes('awesome'));

//ultay dewa using loop
let reverse = '';
const str4 = 'JavaScript is awesome!';
for (num of str4){
    reverse = num + reverse;
}
console.log(reverse); // Output: "!emosewa si tpircSavaJ"

//Another way to reverse a string using loop
reverse = '';
for (let i = str4.length - 1; i >= 0; i--) {
    reverse += str4[i];
}
console.log(reverse); // Output: "!emosewa si tpircSavaJ"

