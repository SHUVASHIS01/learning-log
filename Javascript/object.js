const bottle = {                //it's like a dictionary in python
  color: 'brown',
  volume: 500,
  price: 10
};
// non-primitive data types are mutable, meaning you can change their properties or values after they are created. In this case, you can change the color, volume, or price of the bottle object.
const sub = {
    name: 'John',
    age: 30,
    chapters: ['Introduction', 'Basics', 'Advanced'],
    'fav place': ['china', 'japan', 'korea'],
    address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA'
    },
    subject: function() {
        console.log('This is a method inside the object.');
    }
}
sub.subject(); // Calling the method inside the object
console.log(sub.name); // Accessing the name property
console.log(sub['name']); // Accessing the second chapter
console.log(sub['fav place']); // Accessing the 'fav place' property

const propname = 'age';
console.log(sub[propname]); // Accessing the age property using a variable

sub['age'] = 31; // Modifying the age property
console.log(sub.age); // Output: 31

const computer = {
    brand: 'Dell',
    model: 'XPS 13',
    price: 1200,
    processor: 'Intel Core i7',
    ram: '16GB',
    storage: '512GB SSD',
}
const keys = Object.keys(computer); // Get an array of keys from the object
console.log(keys); // Output: ['brand', 'model', 'price', 'processor', 'ram', 'storage']

const values = Object.values(computer); // Get an array of values from the object
console.log(values); // Output: ['Dell', 'XPS 13', 1200, 'Intel Core i7', '16GB', '512GB SSD']

const school = {
    name: 'Brac University',
    classes: ['CSE', 'EEE', 'BBA', 'LAW'],
    events: ['science fair', 'sports day', 'cultural fest'],
    speciality: {
        research: 'high quality research',
        faculty: 'experienced faculty',
        campus: 'modern campus'
    }
}
console.log(school.name); // Accessing the name property
console.log(school.speciality.research); // Accessing the research property inside the speciality object
console.log(school.events[1]); // Accessing the second event in the events array


