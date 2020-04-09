var yearNow = new Date().getFullYear();

function information() {
    return this.name + ' ' + this.model + ', ' + this.engine + 'cc, year ' + this.year + ', ' + this.used;
}
class Car {
    constructor(engine, model, name, year, used, info) {
        this.engine = engine;
        this.model = model;
        this.name = name;
        this.year = year;
        this.used = used;
        this.info = information;
        this.used = used = {
            get() {
                return yearNow - this.year > 1 ? 'used' : 'new';
            },
            set(value) {
                const yearNow = new Date().getFullYear();

                if (value === 'new' && this.year < yearNow) this.year = yearNow;
            }
        };
    }
}
// Object.defineProperties(Car.prototype, {
//     used: {
//         get() {
//             return yearNow - this.year > 1 ? 'used' : 'new';
//         },
//         set(value) {
//             const yearNow = new Date().getFullYear();

//             if (value === 'new' && this.year < yearNow) this.year = yearNow;
//         }
//     }
// });



let car = new Car(2000, 'Lacetti', 'Chevrolet', 2010);
let car2 = new Car(5000, 'FX50 AWD', 'Infinite', 2019);
console.log(car.info()); // chevrolet Lacetti, 2010cc, year 2010, used
car.used = 'new';
console.log(car.info()); // chevrolet Lacetti, 2019cc, year 2019, new -- год изменен
car.used = 'used';
console.log(car.info()); // chevrolet Lacetti, 2019cc, year 2019, new -- изменения не выполняются
console.log(car2.info()); // infinite FX50 AWD, 2019cc, year 2019, new
car.used = 'used';
console.log(car2.info()); // infinite FX50 AWD, 2019cc, year 2019, new -- изменения не выполняются


// let months = ['jan', 'june', 'mar', 'feb'];

// console.log(months);

// let heroMonths = months.concat('zero', 'fell', ['hello', 'heyboy']);

// console.log(heroMonths);

// heroMonths = heroMonths.sort();

// console.log(heroMonths);



// class Person {
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     print() {
//         return `Hello, my name is ${this.name}`;
//     }
//     greet() {
//         return `Hello, what is your name? My name is ${this.name}`;
//     }
// }

// let person1 = new Person('John', 20, 'male');
// console.log(person1);
// console.log(typeof Person);

// console.log(person1.print());
// console.log(person1.greet());


// class WebDeveloper extends Person {
//     constructor(...args) {
//         super(...args);

//         this.skills = args[3] || [];
//     }
//     greet() {
//         let msg = super.greet();
//         return `${msg}, my skills is ${this.skills}`;
//     }
// }


// let webDeveloper1 = new WebDeveloper('Artem', 22, 'male', ['html', 'css', 'js', 'angular']);

// console.log(webDeveloper1);
// console.log(webDeveloper1.greet());
// console.log(webDeveloper1.print());

/*
let Person = function (name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    this.print = function () {
        return `Hello, my name is ${this.name}`;
    };
};

Person.prototype.greet = function () {
    return `Hello, what is your name? My name is ${this.name}`;
};

let person1 = new Person('John', 22, 'male');

console.log(person1);
console.log(person1.print());
console.log(person1.greet());



let WebDeveloper = function (name, age, gender, skills) {
    Person.apply(this, arguments);
    this.skills = skills || [];
};

WebDeveloper.prototype = Object.create(Person.prototype);
WebDeveloper.prototype.constructor = WebDeveloper;
console.log(WebDeveloper.prototype);

let developer1 = new WebDeveloper('Alex', 22, 'male', ['html', 'css', 'js', 'react']);
let developer2 = new WebDeveloper('Unex', 33, 'male');

console.log('--------------');
console.log(developer1);
console.log(developer1.print());
console.log(developer1.greet());
console.log('--------------');
console.log(developer2);
console.log(developer2.print());
console.log(developer2.greet());



let BackEndDeveloper = function (name, age, gender, skills) {
    Person.apply(this, arguments);
    this.skills = skills !== [] ? skills : [];
};

BackEndDeveloper.prototype = Object.create(Person.prototype);
BackEndDeveloper.prototype.constructor = BackEndDeveloper;

let backEndDeveloper1 = new BackEndDeveloper('Andrey', 36, 'male', ['php', 'noje.js', 'js', 'react']);
let backEndDeveloper2 = new BackEndDeveloper('Bob', 44, 'male', []);

console.log(backEndDeveloper1);
console.log(backEndDeveloper1.print());
console.log(backEndDeveloper1.greet());
console.log(backEndDeveloper2);
console.log(backEndDeveloper2.print());
console.log(backEndDeveloper2.greet());
*/
// let Person = {
//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;

//         console.log('this :', this);

//         return this;
//     },
//     greet() {
//         console.log(`Hello, my name is ${this.name}.`);
//     }
// };

// // let person1 = Object.create(Person).constructor('John', 25, 'male');

// // console.log(person1);
// // person1.greet();
// console.log('---------------');

// let WebDeveloper = Object.create(Person);

// WebDeveloper.constructor = function (name, age, gender, skills) {
//     Person.constructor.apply(this, arguments);
//     this.skills = skills;
//     console.log('this: ', this);
//     return this;
// };

// WebDeveloper.greetDeveloper = function () {
//     console.log(`Hello, my name is ${this.name}, i\`m ${this.age} years old and my gender is ${this.gender}, and my skills: ${this.skills}`);
// };

// let developer1 = Object.create(WebDeveloper).constructor('Sam', 26, 'male', ['html', 'css', 'js', 'angular']);


// console.log(developer1);
// developer1.greetDeveloper();