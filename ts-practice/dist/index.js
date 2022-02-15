"use strict";
//Basic types
let id = 5;
let company = "ABCompany";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3];
let arr = [];
//Tuple
let person = [1, 'Austin', true];
//Tuple Array
let employee;
employee = [
    [1, 'Austin'],
    [2, 'Sean']
];
//Union - variable hold more than 1 type
let pid;
pid = '22';
//Enum - define set of named constants - starts at 0 index unless asigned
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right"; //3 Direction1.Down = 1
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'John'
};
//Type Assertion - tells compiler to treat entity as different type
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
//Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John'
};
//interface functions
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered!`;
    }
}
const austin = new Person(1, "Austin Williams");
//extending classes .. sub classes
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
//Generics - allows us to extend a function with type placeholders "T" to fit what we want
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['austin', 'brad', 'chris']);
