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
// }
class Person {
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    get name() {
        return this.#name;
    }
    set name(newname) {
        this.#name = newname;
        console.log('hello');
    }

    print() {
        console.log( this.name + ' is ' + this.age + ' years old');
        console.log( this.name, 'is', this.age, 'years old');
        console.log( `${this.name} is ${this.age} years old`);
    }
}

const p = new Person('jojo', 18);

p.name = 'Dio'
console.log(p.name);
console.log(p);

// const arr = [];
// const arr = new Array();

// Array.prototype.myForEach = function() {
//     console.log('this is my foreach');
// }
// console.log(arr);








