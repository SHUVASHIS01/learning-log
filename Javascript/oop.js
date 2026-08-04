const person = {
    name: "Alice",
    age: 25,
    city: "Dhaka"
};

console.log(person.name);
console.log(person.age);

//adding properties
person.country = "Bangladesh";
console.log(person.country);
delete person.city;

//Functions inside objects are called methods.
const person1 = {
    name: "Alice",

    greet() {
        console.log("Hello");
    }
};

person1.greet();

//classes
class Person2 {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello");
    }

}

const p1 = new Person2("John", 20);
console.log(p1.name, p1.age)