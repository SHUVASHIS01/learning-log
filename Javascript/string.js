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

