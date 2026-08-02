const numbers = [1, "babul", 3, true, 5];
// Accessing elements in an array
console.log(numbers[0]); // Output: 1
console.log(numbers[1]); // Output: "babul"
console.log(numbers[3]); // Output: true
console.log(numbers.length); // Output: 5
numbers[2] = 10; // Modifying an element in the array
console.log(numbers); // Output: [1, "babul", 10, true, 5]
numbers.push(6);
numbers.push(6,7,8) // Adding an element to the end of the array
console.log(numbers)
const last = numbers.pop(); // Removing the last element from the array
console.log(numbers);
console.log(last); // Output: 8

//Shift and unshift methods
const fruits = ["apple", "banana", "orange"];
fruits.shift(); // Removing the first element from the array
console.log(fruits);
fruits.unshift("grape"); // Adding an element to the beginning of the array
console.log(fruits);

//includes method, case sensitive--->jodi same lekhai na hoy tahole false dibe
const colors = ["red", "green", "blue"];
if(colors.includes("green")){ 
    console.log("green is present in the array");
}
else{
    console.log("green is not present in the array");
}

//indexOf method
console.log(colors.indexOf("blue")); // Output: 2
console.log(colors.indexOf("yellow")); // Output: -1 (not found)

//isArray method
console.log(Array.isArray(colors));

//join method
const fruits1 = ["apple", "banana", "orange"];
const fruitString = fruits1.join(" + ");
console.log(fruitString); // Output: "apple + banana + orange"

//slice method
const numbers1 = [1, 2, 3, 4, 5];
const slicedNumbers = numbers1.slice(1, 4); // Slicing from index 1 to index 3
console.log(slicedNumbers); // Output: [2, 3, 4]

//splice method
const numbers2 = [1, 2, 3, 4, 5];
numbers2.splice(2, 1); // Removing 1 element at index 2
console.log(numbers2);
