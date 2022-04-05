// console.log("hello world");
// "use strict"
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
// function foo(...args){
//     console.log(args);

// }

// foo(1,2,3,4,5,6,7)


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


// const obj = {
//     name:"adam",
//     age:18,
//     nested:{
//         value:2
//     }
// }

// // const obj1 = {...obj}//deep copy, but not anything nested
// // console.log(obj1 === obj);
// // console.log(obj1.nested === obj.nested);

// const obj1 = obj; //shallow copy, they are piointing to the same reference

// console.log(obj === obj1);

// console.log(obj.nested === obj1.nested);

// arrow function, standard function
// standard function can do hoisting;
//

// foo();

// function foo(){ //hoisting
//     console.log("foo")
// }


// var foo2 = () => {
//     console.log("foo2");
// }


//const foo = () => true;

// const obj ={
//     name:"adam",
//     age:18,
//     getAge:()=>{
//         console.log(this);
//     }
// }


// const obj1 = {
//     name:"jane",
//     age:20
// }

// obj1.getAge = obj.getAge

// obj1.getAge();

// const obj ={
//     name:"adam",
//     age:18,
//     getAge:()=>{
//         console.log(this); // window object, global object
//     }
// }

//standard function: "this" is pointing to the object who calls the function
//arrow function: "this" is inherited from where it is defined in the code context

// const obj = {
//     name:"adam",
//     age:18,
//     getAge: function(){
//         console.log("from getage",this); // "this" is the obj
//         const foo = () => {
//             console.log("from arrow function",this); // "this" is the obj
//         }
//         foo();
//     }
// }

// obj.getAge();

// const obj = {
//     name:"adam",
//     age:18,
//     getAge: function(){
//         console.log("from getage",this); //obj
//         function foo(){
//             console.log("from arrow function",this); //undefined
//         }
//         foo();
//     }
// }

// obj.getAge();


/* ---------- */

// const obj = {
//     name: "adam",
//     age: 18,
//     getName:
//         function () {
//             console.log(this); //obj

//             function standard() {
//                 console.log(this); //undefined

//                 const arrow = () => {
//                     console.log(this) //undefined
//                 }

//                 arrow()
//             }

//             standard();
//         }
// };

// obj.getName();

//closure
//use function to create a private scope

// let counter = 0; //polluting global naming space

// let increment = () => {
//     counter++;
//     console.log(counter);
// }

// increment();
// increment();

// function count(){
//     let counter = 0;
//     let increment = () => {
//         counter++;
//         console.log(counter);
//     }
//     return increment;
// }

// const increment = count();

// increment();
// increment();

//iife, immediately invoked function expression

// const increment = (function count(){
//     let counter = 0;
//     let increment = () => {
//         counter++;
//         console.log(counter);
//     }
//     return increment;
// })()

//currying
//increment()(2)(3) //6

// const increment = (() => {
//     let counter = 0;
//     const increment = (...args) => {
//         args = args.length === 0?[1]:args;
//         counter = args.reduce((acc,cur)=>{
//             return acc+cur
//         },counter);
//         console.log(counter);
//         return increment;
//     }
//     return increment


// })();

// increment()(2)(3);

// const newArr = [1,2,3].map((item)=>{
//     return item + 1;
// })

// console.log(newArr)

// const newArr1 = [1,2,3].map((item)=>{
//     return item + 2;
// })

//console.log(newArr1);

// const incrementElement = (num) => {
//     return (item) => {
//         return item + num;
//     }
// }

// const newArr = [1,2,3].map(incrementElement(1));
// console.log(newArr)

// const newArr1 = [1,2,3].map(incrementElement(2));//
// console.log(newArr1);

// callback

// const arr = [1,2,3];
// arr.forEach(item=>{
//     console.log(item)
// });

/* 
    Array.prototype.forEach = function(cb){
        for(let key in this){
            cb(this[key], key, this)
        }
    }

*/

//async programming, asynchronous

// setTimeout(()=>{
//     console.log("after 2s")
// },2000);

// const foo = () => {
//     console.log("from foo");
// }

// const boo = () => {
//     console.log("from boo");
// }

// const zoo = () => {
//     console.log("from zoo");
// }

// foo();
// setTimeout(zoo, 2000);
// setTimeout(zoo,3000);
// boo();

//foo
//boo
//zoo

//javascript is a single threaded language

//event loop

//callstack, message queue, async api(not part of js);

//callstack:
//message queue:
//async api(from browser): 

// function foo(){
//     for(var i = 0; i < 5; i++){
//         console.log(i)
//     }
// }
// foo();

// function foo() {
//     for (var i = 0; i < 5; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000)

//     }
// }
// foo();

// function foo() {
//     var i = 0
//     for (; i < 5; i++) {
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000)

//     }
// }

// function foo (){
//     var i  = 0;
//     setTimeout(() => {
//         console.log(i);//5
//     },  0);
//     i++;
//     setTimeout(() => {
//         console.log(i);//5
//     }, 1000);
//     i++;
//     setTimeout(() => {
//         console.log(i);//5
//     }, 2000);
//     i++;
//     setTimeout(() => {
//         console.log(i);//5
//     }, 3000);
//     i++;
//     setTimeout(() => {
//         console.log(i);//5
//     }, 4000);
//     i++; //5

// }

//foo();

// function foo() {
//     for (let i = 0; i < 5; i++) {  
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000)

//     }
// }

// foo();

// function foo(){
//     for(var i = 0; i < 5; i++){
//         (function(){ //iife
//             var number = i;
//             setTimeout(()=>{
//                 console.log(number)
//             },number*1000);
//         })()
//     }
// }

// foo();

//XHR request, XMLHttpRequest

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         // Typical action to be performed when the document is ready:
//         console.log(xhttp.responseText);
//     }
// };
// xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
// xhttp.send();


// const httpRequest = (url, method, cb) => {

//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             // Typical action to be performed when the document is ready:
//             cb(xhttp.responseText);
//         }
//     };
//     xhttp.open(method, url, true);
//     xhttp.send();
// }



// console.log("1");
// httpRequest("https://jsonplaceholder.typicode.com/todos/1", "GET", (response) => { console.log(response) })
// console.log("2");

// httpRequest("https://jsonplaceholder.typicode.com/todos/1", "GET", (response) => { console.log(response) })

// console.log("3");

//promise
//first request, first response, second request(first response), third request

//callback hell
// httpRequest("https://jsonplaceholder.typicode.com/todos/1", "GET", (response) => {

//     httpRequest("https://jsonplaceholder.typicode.com/todos/1", "GET",(response)=>{

//         httpRequest("https://jsonplaceholder.typicode.com/todos/1", "GET",(response)=>{
//             httpRequest("https://jsonplaceholder.typicode.com/todos/1", "GET",(response)=>{
//                 httpRequest("https://jsonplaceholder.typicode.com/todos/1", "GET",(response)=>{

//                 })
//             })
//         })
//     })
// })

//promise
// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then((res) => {
//     return res.json()
// }).then(data => console.log(data))
// .then()
// .then();//flat pattern



const httpRequest = (url, method, cb) => {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            cb(xhttp.responseText);
        }
    };
    xhttp.open(method, url, true);
    xhttp.send();
}

const url = "https://jsonplaceholder.typicode.com/todos/1";
const method = "GET"
// httpRequest(url,method,(response)=>{ 
//     console.log("1st response is successful!")
//     console.log("start making 2nd request")
//     httpRequest(url, method, (response)=>{
//         console.log("2nd response is successful!");
//         console.log("start making 3rd request")
//         httpRequest(url, method, (response)=>{
//             console.log("3rd response is successful!");
//             console.log("start making 4th request")
//             httpRequest(url, method, (response)=>{
//                 console.log("4th response is successful!");
//                 console.log("start making 5th request")
//                 httpRequest(url, method, (response)=>{
//                     console.log("5th response is successful!");
//                 })
//             })
//         })
//     })
// })


// fetch(url)//http request with promise
//     .then(response => response.json()
//     ).then(data => {
//         console.log("1st response");
//         return fetch(url)
//     }).then((response) => response.json()
//     ).then(data => {
//         console.log("2nd response");
//         return fetch(url)
//     }).then((response) => response.json())
//     .then(data => {
//         console.log("3rd response");
//         return fetch(url)
//     }).then((response) => response.json())
//     .then(data => {
//         console.log("4th response");
//         return fetch(url)
//     }).then((response) => response.json())
//     .then(data => {
//         console.log("5th response");
//         return fetch(url)
//     }).then((response) => response.json());


// setTimeout(() => {
//     setTimeout(() => {
//         setTimeout(() => {
//             setTimeout(() => {
//                 setTimeout(() => {
//                     console.log("5th settimeout")
//                 }, 1000);
//                 console.log("4th settimeout")
//             }, 1000);
//             console.log("3rd settimeout")
//         }, 1000);
//         console.log("2nd settimeout")
//     }, 1000);
//     console.log("1st settimeout")
// }, 1000);


// setTimeout(()=>{
//     console.log(1)
// },1000)

// new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log("1st settimeout");
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve()
//         },1000)
//     })
// }).then(()=>{
//     console.log("2nd settimeout")
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve()
//         },1000)
//     })
// }).then(()=>{
//     console.log("3rd settimeout");
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve()
//         },1000)
//     })
// }).then(()=>{
//     console.log("4th settimeout");
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve()
//         },1000)
//     })
// }).then(()=>{
//     console.log("5th settimeout");
// })

//httpRequest(url, method, cb)

// new Promise((resolve, reject)=>{
//     httpRequest(url,method,(response)=>{
//         console.log("1st response is successful!")
//         resolve(response);
//     })
// }).then((response)=>{

//     return new Promise((resolve,reject)=>{
//         console.log("start making 2nd request");
//         httpRequest(url, method, (response)=>{ 
//            console.log("2nd response is successful!");
//             resolve(response)
//         })
//     })
// }).then((response)=>{
//     return new Promise((resolve, reject)=>{
//         console.log("start making 3rd request")
//         httpRequest(url, method, (response)=>{
//             console.log("3rd response is successful!");
//             resolve(response)
//         })
//     })
// }).then((response)=>{

//     return new Promise((resolve, reject)=>{
//         console.log("start making 4th request")
//         httpRequest(url, method, (response)=>{
//             console.log("4th response is successful!");
//             resolve(response)
//         })
//     })
// }).then((response)=>{

//     return new Promise((resolve, reject)=>{
//         console.log("start making 5th request")
//         httpRequest(url, method, (response)=>{
//             console.log("5th response is successful")
//             resolve(response)
//         })
//     })
// }).then((response)=>{
//     console.log("this is the end!",response)
// });


// const promise = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         reject("this is an error!") // does nothing but throwing and error for us
//         resolve(123)
//     }, 1000)

// }).then(
//     (response) => {
//         console.log("1st response", response)
//         return new Promise((resolve, reject) => {
//             resolve(456)
//         })             //if the return value is a instance of Promise, "then" will pass the resolved value to next "then"
//     },

//     (reason) => {
//         console.log("this is from then function", reason);
//         return new Promise((resolve, reject)=>{
//             reject("new error")
//         })
//     }
// ).then((response) => {
//     console.log(response);
//     return 789     //if the return value is not a instance of Promise, "then" will pass the value directly to next "then"
// }).then((response) => {
//     console.log(response);
// }).catch((err) => {
//     console.log("this is from catch function", err)
// });

// console.log(promise);

// console.log("1. before promise")

// new Promise((resolve, reject)=>{
//     console.log("2. haven't resolved")
//     resolve(111);
// }).then(result=>{
//     console.log("3. resolved",result)
// })

// console.log("4. after promise");

// console.log("before") //sync
// const promise = new Promise((resolve, reject) => {
//     console.log("1. ")//sync
//     setTimeout(() => {
//         console.log("2.") //async 
//         reject("error")
//         resolve() //async
//     }, 1000)
// }).then(result => {
//     console.log("3. ", result); //async
//     return new Promise((resolve, reject) => {
//         console.log("4. "); //async
//         resolve()
//     })
// }).then(result => {
//     console.log("5. ") //async
//     return;
// })
//     .then(result => {
//         console.log("6. ") //async
//     }).catch(() => {

//     });
// console.log("after");//sync

// console.log(promise)


class MyPromise {
    #thenCallbacksQueue;
    #catchCallback;
    constructor(executor) {
        this.#thenCallbacksQueue = [];
        const resolve = (result) => {
            setTimeout(() => {
                //while (this.#thenCallbacksQueue.length > 0) {
                let previousResult = result
                const runNextCallback = () => {
                    if (this.#thenCallbacksQueue.length > 0) {
                        const currentThenCb = this.#thenCallbacksQueue.shift();
                        const currentResult = currentThenCb(previousResult);
                        if (currentResult instanceof MyPromise) {
                            try {
                                currentResult.then(result => {
                                    try {
                                        previousResult = result;
                                        runNextCallback();
                                    } catch (err) {
                                        this.#catchCallback(err)
                                    }
                                })
                            } catch (error) {
                                this.#catchCallback(error)
                            }

                        } else {
                            try {
                                previousResult = currentResult;
                                runNextCallback();
                            } catch (err) {
                                this.#catchCallback(err)
                            }
                        }
                    }
                }

                runNextCallback();
                //}
            })
        }
        const reject = (reason) => {
            setTimeout(() => {
                this.#catchCallback(reason);
            })
        }
        executor(resolve, reject)
    }
    then(onFulfilled, onRejected) {//it does nothing but collecting callbacks
        this.#thenCallbacksQueue.push(onFulfilled);
        return this
    }
    catch(onRejected) {
        this.#catchCallback = onRejected;
        return this
    }
}

// new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(123)
//         //reject("error")
//     }, 2000)
// }).then((result) => {
//     console.log(result);
//     throw new Error("error1")
//     return new MyPromise((resolve, reject) => {
//         resolve(456)
//     })
// }).then((result) => {
    
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })
console.log("before")
new Promise((resolve, reject)=> {
    console.log(1)
    resolve()
    console.log(2)
}).then(result=>{
    console.log(3)
})
console.log("after")
















































