/** ternary operator
 * The ternary operator is a shorthand way of writing an if-else statement. It takes three operands: a condition, an expression to execute if the condition is true, and an expression to execute if the condition is false. The syntax is as follows:
 
*/
const age = 12;
if (age >= 18) {
    console.log("vote dite parba");
}
else {
    console.log("ghumai thako");
}

const age1 = 21;
age1 >= 18 ? console.log("vote dite parba") : console.log("ghumai thako");

const age2 = 15;
var message = age2 >= 18 ? "vote dite parba"/***positive*/ : "ghumai thako"/***negative*/;
console.log(message);