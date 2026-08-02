/*comparison operators are used to compare two values and return a boolean value (true or false) based on the comparison. Here are some common comparison operators in JavaScript:
1. Equal to (==): Returns true if the values are equal, ignoring type.
2. Strict equal to (===): Returns true if the values and types are equal.
3. Not equal to (!=): Returns true if the values are not equal, ignoring type.
4. Strict not equal to (!==): Returns true if the values or types are not equal.
5. Greater than (>): Returns true if the left value is greater than the right value.
6. Less than (<): Returns true if the left value is less than the right value.
7. Greater than or equal to (>=): Returns true if the left value is greater than or equal to the right value.
8. Less than or equal to (<=): Returns true if the left value is less than or equal to the right value.
9. And (&&): Returns true if both conditions are true.
10. Or (||): Returns true if at least one condition is true.
11. Not (!): Returns true if the condition is false.
*/
console.log(5 == '5'); // true
console.log(5 === '5'); // false
console.log(5 != '5'); // false
console.log(5 !== '5'); // true
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 5); // true
var a = 5;
var b = 10;
console.log(a > 3 && b < 15);
console.log(a > b);
//Write a function that takes two numbers and prints:
// a is greater than b
// a is less than b
// a is equal to b

if (a > b) {
    console.log("a is greater than b");
} 
else if (a < b) { 
    console.log("a is less than b");
}
else {
    console.log("a is equal to b");
}

var kacchi = 300;
if (kacchi > 300) {
    console.log("thak mama dio na");
}
else {
    console.log("joldi kacchi dao");
}