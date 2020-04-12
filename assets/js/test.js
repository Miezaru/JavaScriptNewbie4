// let yearNow = new Date().getFullYear();

// function information() {
//   return (
//     this.name +
//     ' ' +
//     this.model +
//     ', ' +
//     this.engine +
//     'cc, year ' +
//     this.year +
//     ', ' +
//     this.used
//   );
// }
// class Car {
//   constructor(engine, model, name, year, used, info) {
//     this.engine = engine;
//     this.model = model;
//     this.name = name;
//     this.year = year;
//     this.info = information;
//   }
// }
// Object.defineProperties(Car.prototype, {
//   used: {
//     get() {
//       return yearNow - this.year > 1 ? 'used' : 'new';
//     },
//     set(value) {
//       const yearNow = new Date().getFullYear();

//       if (value === 'new' && this.year < yearNow) this.year = yearNow;
//     },
//   },
// });

// let car = new Car(3201, 'M3', 'BMW', 1995);
// let car2 = new Car(2999, 'GLS 450', 'Mersedes', 2020);
// console.log(car.info()); // chevrolet Lacetti, 2010cc, year 2010, used
// car.used = 'new';
// console.log(car.info()); // chevrolet Lacetti, 2019cc, year 2019, new -- год изменен
// car.used = 'used';
// console.log(car.info()); // chevrolet Lacetti, 2019cc, year 2019, new -- изменения не выполняются
// console.log(car2.info()); // infinite FX50 AWD, 2019cc, year 2019, new
// car.used = 'used';
// console.log(car2.info()); // infinite FX50 AWD, 2019cc, year 2019, new -- изменения не выполняются

// // let months = ['jan', 'june', 'mar', 'feb'];

// // console.log(months);

// // let heroMonths = months.concat('zero', 'fell', ['hello', 'heyboy']);

// // console.log(heroMonths);

// // heroMonths = heroMonths.sort();

// // console.log(heroMonths);

// // class Person {
// //     constructor(name, age, gender) {
// //         this.name = name;
// //         this.age = age;
// //         this.gender = gender;
// //     }
// //     print() {
// //         return `Hello, my name is ${this.name}`;
// //     }
// //     greet() {
// //         return `Hello, what is your name? My name is ${this.name}`;
// //     }
// // }

// // let person1 = new Person('John', 20, 'male');
// // console.log(person1);
// // console.log(typeof Person);

// // console.log(person1.print());
// // console.log(person1.greet());

// // class WebDeveloper extends Person {
// //     constructor(...args) {
// //         super(...args);

// //         this.skills = args[3] || [];
// //     }
// //     greet() {
// //         let msg = super.greet();
// //         return `${msg}, my skills is ${this.skills}`;
// //     }
// // }

// // let webDeveloper1 = new WebDeveloper('Artem', 22, 'male', ['html', 'css', 'js', 'angular']);

// // console.log(webDeveloper1);
// // console.log(webDeveloper1.greet());
// // console.log(webDeveloper1.print());

// /*
// let Person = function (name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;

//     this.print = function () {
//         return `Hello, my name is ${this.name}`;
//     };
// };

// Person.prototype.greet = function () {
//     return `Hello, what is your name? My name is ${this.name}`;
// };

// let person1 = new Person('John', 22, 'male');

// console.log(person1);
// console.log(person1.print());
// console.log(person1.greet());

// let WebDeveloper = function (name, age, gender, skills) {
//     Person.apply(this, arguments);
//     this.skills = skills || [];
// };

// WebDeveloper.prototype = Object.create(Person.prototype);
// WebDeveloper.prototype.constructor = WebDeveloper;
// console.log(WebDeveloper.prototype);

// let developer1 = new WebDeveloper('Alex', 22, 'male', ['html', 'css', 'js', 'react']);
// let developer2 = new WebDeveloper('Unex', 33, 'male');

// console.log('--------------');
// console.log(developer1);
// console.log(developer1.print());
// console.log(developer1.greet());
// console.log('--------------');
// console.log(developer2);
// console.log(developer2.print());
// console.log(developer2.greet());

// let BackEndDeveloper = function (name, age, gender, skills) {
//     Person.apply(this, arguments);
//     this.skills = skills !== [] ? skills : [];
// };

// BackEndDeveloper.prototype = Object.create(Person.prototype);
// BackEndDeveloper.prototype.constructor = BackEndDeveloper;

// let backEndDeveloper1 = new BackEndDeveloper('Andrey', 36, 'male', ['php', 'noje.js', 'js', 'react']);
// let backEndDeveloper2 = new BackEndDeveloper('Bob', 44, 'male', []);

// console.log(backEndDeveloper1);
// console.log(backEndDeveloper1.print());
// console.log(backEndDeveloper1.greet());
// console.log(backEndDeveloper2);
// console.log(backEndDeveloper2.print());
// console.log(backEndDeveloper2.greet());
// */
// // let Person = {
// //     constructor(name, age, gender) {
// //         this.name = name;
// //         this.age = age;
// //         this.gender = gender;

// //         console.log('this :', this);

// //         return this;
// //     },
// //     greet() {
// //         console.log(`Hello, my name is ${this.name}.`);
// //     }
// // };

// // // let person1 = Object.create(Person).constructor('John', 25, 'male');

// // // console.log(person1);
// // // person1.greet();
// // console.log('---------------');

// // let WebDeveloper = Object.create(Person);

// // WebDeveloper.constructor = function (name, age, gender, skills) {
// //     Person.constructor.apply(this, arguments);
// //     this.skills = skills;
// //     console.log('this: ', this);
// //     return this;
// // };

// // WebDeveloper.greetDeveloper = function () {
// //     console.log(`Hello, my name is ${this.name}, i\`m ${this.age} years old and my gender is ${this.gender}, and my skills: ${this.skills}`);
// // };

// // let developer1 = Object.create(WebDeveloper).constructor('Sam', 26, 'male', ['html', 'css', 'js', 'angular']);

// // console.log(developer1);
// // developer1.greetDeveloper();
console.time('Начало'); // начало выполнения действий (метка должна быть одинаковой)

let date = new Date(); // создание Date

date = new Date(3600 * 24 * 18500000); //new Date (milliseconds)

date = new Date('06.07.2020'); // new Date (string)
// new Date(year, month, date, hours, minutes, seconds, ms)

date = new Date(1997, 5, 6, 22, 43, 21, 63);
// year и moth обязательны
date = new Date(); // создание Date

console.log(`getDate (число месяца 1-31): ${date.getDate()}`);
console.log(`getDay (номер дня в неделе): ${date.getDay()}`);
console.log(`getFullYear (число из 4 цифр): ${date.getFullYear()}`);
console.log(`getMonth (получить месяц от 0 до 11): ${date.getMonth()}`);

// Неделя в JavaScript начинается с воскресенья, так что результат будет числом от 0 (воскресенье) до 6 (суббота).

console.log(
  `getHours: ${date.getHours()}`,
  `getMinutes: ${date.getMinutes()}`,
  `getSeconds: ${date.getSeconds()}`,
  `getMilliseconds: ${date.getMilliseconds()}`
);

console.log(
  `getTime (milliseconds 1 января 1970 года GMT+0,): ${date.getTime()}`
);

console.log(date.getTimezoneOffset()); // Возвращает разницу между местным и UTC-временем, в минутах.

// setFullYear(year [, month, date])
// setMonth(month [, date])
// setDate(date)
// setHours(hour [, min, sec, ms])
// setMinutes(min [, sec, ms])
// setSeconds(sec [, ms])
// setMilliseconds(ms)
// setTime(milliseconds)
// Установка компонентов даты

date = Date.now();

console.log(date);
// Метод Date.now() возвращает дату сразу в виде миллисекунд. Быстрый метод, заточен на скорость.

date = new Date();
console.log(date.toISOString());
// Метод toISOString() возвращает строку в формате ISO (расширенныйформат ISO 8601), который можно описать следующим образом:YYYY-MM-DDTHH:mm:ss.sssZ.
// Часовой пояс всегда равен UTC, что обозначено суффиксом "Z".

console.log(date.toLocaleString());
//Метод toLocaleString() возвращает строку с языко-зависимым представлением даты.

// Спец методы формирования дат http://jsfiddle.net/fomenkoandrey/eg0bkdr3/1/ https://learn.javascript.ru/intl#lokal

// Бенчмаркинг http://jsfiddle.net/fomenkoandrey/63fr05Ls/
// Прогоняем много раз http://jsfiddle.net/fomenkoandrey/63fr05Ls/1/

// Более точное время можно получить с помощью performance.now().
console.log(performance.now);

//Для измерения с одновременным выводом результатов в консоли есть методы: console.time и console.timeEnd
console.timeEnd('Начало'); // конец выполнения действий (метка должна быть одинаковой)
