// console.log("hello world");
"use strict"
/* 
primitive type
string
boolean
number

non-primitive type
object
array
function

null

symbol
*/

// let a = 1;
// let b = 1;
// console.log(a === b);

// let a = {};
// let b = {};
// console.log(a === b);

// let a = 1;
// a = 2;
// a = "123";
// a = {};

// let b = '123';
// let c = true;
// let e = {name:"adam", gender:"male"};
// let d = ["1",1,true, {}];
// let f = undefined;
// let g = null;
// let h = function(){

// }/* 
// h = () => {}  */

// console.log("b", typeof b);//string
// console.log("c", typeof c);//boolean
// console.log("e", typeof e);//object
// console.log("d", typeof d);//object
// console.log("f", typeof f);//undefined
// console.log("g", typeof g);//null => object
// console.log("h", typeof h);//function

//console.log(typeof 1 === "number");

// let a = NaN;//not a number

// console.log(parseInt("abc"));
// console.log(typeof NaN);
// console.log(NaN === NaN);

// let a = Infinity;

// console.log(1/0);
// console.log(Infinity === Infinity);
// console.log(Infinity + Infinity === Infinity)
// console.log(typeof Infinity)

// console.log(1 === 1); //true
// console.log("123" == "123"); //true
// console.log(true === true); //true

// console.log({name:"adam", gender:"male"} === {name:"adam", gender:"male"} ); //false
// console.log([1,2,3] === [1,2,3]); //false
// console.log(function(){return true} === function(){return true}); //false

// let a = {name:"adam", gender:"male"};
// let b = a;
// console.log(a === b);

// b.name = "john";
// console.log(b === a); //true
// console.log(a,b); //{name:"john",gender:"male"}

// let a = NaN;
// let b = a;
// console.log(a === b);

// //type coercion
// console.log(1 === "1");//false
// console.log(1 === "1");//false
// console.log([] === false)//false
// console.log(0 === false)//false
// console.log([1] === 1) //false
// console.log([0] === 0)//false
// console.log([1] === true)//false

// console.log(1 + "1");//"11"
// console.log("1" + 1);//"11"
// console.log(true + 1);//2
// console.log(1+true);//2
// console.log([1] + true);//"1true"
// console.log([1] + [1])//"11"

//let const var
//hoisting

// var a;
// a = 1;
// console.log(a);


// a = 1;
// console.log(a);//reference error
// let a;

// let a = 1;
// console.log(a);

// var a;
// console.log(a);//undefined
// a = 1;

// foo();
// function foo(){
//     console.log("invoked foo");
// }
// var foo;
// foo();
// foo = ()=>{console.log("invoked foo")};

//scope
// var            |let           |const
//function scope  |block scope   |block scope


// function foo() {
//     console.log(a);
//     function boo() {
//         var a = 1;
//     }
//     boo();
//     console.log(a);
// }
// foo();





// // EM + web.api = js
// const obj = {name: 'Jojo', age: 18};
// let num = 0;
// function foo(obj1) {
//     const obj1 = obj;
//     obj1.name = 'Dio'
//     return obj1;
// }
// function bar(num) {
//     num = 5;
//     return num;
// }
// console.log(foo(obj), obj); // 
// console.log(bar(num), num); //

// // oop
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.print = function() {
//     console.log( this.name + ' is ' + this.age + ' years old');


// class Person {
//     #name;
//     #age;

//     constructor(name, age) {
//         this.#name = name;
//         this.#age = age;
//     }

//     get name() {
//         return this.#name;
//     }
//     set name(newname) {
//         this.#name = newname;
//         console.log('hello');
//     }

//     get age() {
//         return this.#age;
//     }
//     set age(newage) {
//         this.#age = newage;
//         console.log('hello');
//     }

//     walk() { ///class method
//         console.log(`${this.name} is walking`)
//     }

//     // print() {
//     //     console.log( this.name + ' is ' + this.age + ' years old');
//     //     console.log( this.name, 'is', this.age, 'years old');
//     //     console.log( `${this.name} is ${this.age} years old`);
//     // }
// }

// const person = new Person("adam", "18");
// console.log(person.name, person.age);

// console.log(typeof person);

// person.walk = function () {
//     console.log(`${this.name} is walking`)
// }
// //person.walk(); //walk is now a instance method

// const person1 = new Person("jane", "20");

// //person1.walk();

// person1.walk = function () {  //instance method
//     console.log(`${this.name} is walking!!!!`)
// }

// //person1.walk();

// class Employee extends Person {
//     #company
//     constructor(name, age, company) {
//         super(name, age);
//         this.#company = company;
//     }

//     get company() {
//         return this.#company;
//     }
//     set company(newcompany) {
//         console.log(newcompany)
//         newcompany += " company"
//         this.#company = newcompany;
//     }
//     walk() {
//         console.log(`employee ${this.name} is walking`)
//     }

//     static walk(){
//         console.log("static","employee is walking")
//     }


// }

// class Manager extends Employee {
//     constructor(name, age, company) {
//         super(name, age, company);
//     }
// }

// const manager = new Manager("john", "19", "antra");
// console.log(manager); //prototype chain, javascript use this to realize inheritance

// const employee = new Employee("adam", "18", "antra");
// employee.walk();
// // console.log(employee.company);
// // employee.company = "microsoft";

// const employee1 = {
//     name: "john",
//     age: 18,
//     company: "antra",
//     walk: function () {
//         console.log(`employee ${this.name} is walking`)
//     }
// }

// employee1.walk = employee.walk;

// employee1.walk();

// //array
// const arr = [1, 2, 3]

// for (var i = 0; i < arr.length; i++) {
//     console.log(i, arr[i])
// }

// for (let key in arr) {
//     console.log(key, arr[key])
// }

// for (let item of arr) {
//     console.log(item);
// }

// arr.forEach((ele, index, array) => {
//     console.log(index, ele, array)
// });
// //forEach, map,filter, sort ,every, some, find, reduce


// Array.prototype.myForEach = function (cb) {  //callback function
//     for (let key in this) {
//         cb(this[key], key, this);
//     }

// }

// arr.myForEach((ele, index, array) => {
//     console.log(index, ele, array)
// });


// //map
// //[2,4,6]
// const newArr = arr.map((ele) => {
//     return 2 * ele;
// })
// console.log(newArr);

// Array.prototype.myMap = function (cb) {
//     const newArr = [];
//     for (let i = 0; i < this.length; i++) {
//         newArr.push(cb(this[i], i, this));
//     }

//     return newArr
// }

// const newArr1 = arr.myMap((ele) => {
//     return 2 * ele;
// })
// console.log(newArr1);
// [1, 2, 3]
// //6
// const newArr2 = arr.reduce((acc, cur, index, array) => {
//     return acc + cur;
// }/* initial value for the accumulator */)

// console.log(newArr2);

// Array.prototype.myReduce = function (cb, init) {
//     let accumulator
//     if (init === undefined) {
//         accumulator = this[0];
//         for (let i = 1; i < this.length; i++) {
//             accumulator = cb(accumulator, this[i], i, this);//acc,cur,index,array
//         }
//     } else {
//         accumulator = init;
//         for (let i = 0; i < this.length; i++) {
//             accumulator = cb(accumulator, this[i], i, this);//acc,cur,index,array
//         }
//     }
//     return accumulator;
// }

// const newArr3 = arr.myReduce((acc, cur, index, array) => {
//     return acc + cur;
// });

// console.log(newArr3);

// const employees = [{name:"adam",age:18},{name:"jane",age:20}];
// //{adam:18,jane:20};

// const obj = employees.reduce((acc,cur)=>{
//     console.log(cur,cur.name, cur.age);
//     acc[cur.name] = cur.age;
//     return acc;
// },{});
// console.log(obj);

// const obj1 = employees.myReduce((acc,cur)=>{
//     console.log(cur,cur.name, cur.age);
//     acc[cur.name] = cur.age;
//     return acc;
// },{});

// console.log(obj1);

// //obj
// const object = {
//     adam:18,
//     jane:20
// }

// for(let key in object){
//     console.log(key,obj[key])
// }

// // for(let item of object){
// //     console.log(item);
// // }


// Object.keys(object).forEach((key)=>{ //static method
//     console.log(key, object[key])
// });

// console.log("values",Object.values(object));

// console.log(Object.entries(object));
// //[[adam,18],[jane,20]]



// for(let entry of Object.entries(object)){
//     console.log(entry);
// }

// const testObj = {}
// console.log(testObj.keys);


//spread operator            |rest operator              |destructuring
//copy arr or obj            |combine args into arr      |decompose an obj or arr


//spread operator
// let a = [1, 2, 3];
// let b = [1, 2, 3];
// console.log(a === b);
// const c = a;
// console.log(a === c);
// a = [1,2,[3,[4]]];
// b = [...a];//[1,2,[3,[4]]]
// console.log(b === a);
// console.log(b[2] === a[2]);//shallow copy,  |  deep copy, pass by value, pass reference

// const a = {name:"adam", age:18, nested:{value:1}};
// const b = {...a};
// console.log(b===a)
// console.log(a.nested === b.nested) //shallow copy

// const a = [1,2,3];
// const b = [4,5,6];
// const d = [7,8,9]
// const c = [...a,...d,...b];
// console.log(c)

// const a = {adam:18};
// const b = {adam:20};
// const c = {...b,...a,adam:3};
// console.log(c)

//destructuring

// const a ={adam:18, jane:20, nested:{value:{innerValue:2}}}
// const {nested:{value:{innerValue}}} = a;
// console.log(innerValue);

// const a = [1,2,3,[4,5]];
// const [,,,[fourth, fifth]] = a;
// console.log(fourth, fifth)



// function foo(){ //tranditional way to get arguments
//     console.log(arguments)
// }

// foo(1,2,3)

//spread operator
function foo(...args){
    console.log(args);

}

foo(1,2,3,4,5,6,7)











//const c = {name:"jane", age:20};






 










// const p = new Person('jojo', 18);

// p.name = 'Dio'
// console.log(p.name);
// console.log(p);

// const arr = [];
// const arr = new Array();

// Array.prototype.myForEach = function() {
//     console.log('this is my foreach');
// }
// console.log(arr);








