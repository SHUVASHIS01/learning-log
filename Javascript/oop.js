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
        this.name = name; //this means "the current object."
        this.age = age;
    }

    greet() {
        console.log("Hello");
    }

}

const p1 = new Person2("John", 20);
console.log(p1)
console.log(p1.name, p1.age)
p1.greet();


//Encapsulation : Bundling data and methods together.
class BankAccount {

    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        return this.balance += amount;
    }

}
const p2 = new BankAccount(300);
console.log(p2)
console.log(p2.deposit(89))
console.log(p2.balance)

//Private Fields
// JavaScript supports true private variables using #.

class BankAccount1 {

    #balance = 0;
    deposit(amount) {
        this.#balance += amount;
    }

    show() {
        console.log(this.#balance);
    }

}

const account = new BankAccount1();

account.deposit(500);

account.show();
//console.log(account.#balance); error dibe karo variable private: baire theke aaccess kora jabe na 

// getter and setter 
class Person3 {

    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

}

const p = new Person3("John");

console.log(p.name);
p.name = "Alice";

console.log(p.name);


//Inheritance : One class inherits another.
class Animal {

    eat() {
        console.log("Eating");
    }

}

class Dog extends Animal {

    bark() {
        console.log("Woof");
    }

}

const dog = new Dog();

dog.eat();

dog.bark();

//Polymorphism: Same method behaves differently.

class Animal1 {
    speak() {
        console.log("Animal");
    }
}

class Cat1 extends Animal1 {
    speak() {
        console.log("Meow");
    }
}

class Dog1 extends Animal1 {
    speak() {
        console.log("Woof");
    }
}

const animals = [
    new Cat1(),
    new Dog1()
];

animals.forEach(a => a.speak());

//static methods : Belong to the class, not objects.
class MathUtil {

    static add(a, b) {
        return a + b;
    }

}

console.log(MathUtil.add(5,3));

//prototype
const person12 = {
    name: "John"
};

console.log(Object.getPrototypeOf(person12));

