"use strict";
// basic typescript data types:
// 1.Primitive(mutable)
//string
// let firstName = 'sobuj';          (implicit) ts auto detect the data type
let firstName = 'sobuj'; // (explicit) ts mannually place the data type
//number
let number = 123;
// boolean
let isAdmin = true;
// undefined (x is undefined and its data type also undefined)
let x = undefined;
// null 
let y = null;
// 2. Non-primitive data type
// Array (list of string)
let friends = ['recheal', 'monica'];
// friends.push(1); cant push number to list of string
// Array (list of number)
let eligibleRollList = [1, 2, 3];
// eligibleRollList.push('name')
// tuple (type of array) --> array --> order --> type of values
// we can tuple 2,3 or more items
let coordinates = [12, 13];
let ageName = [26, 'sobuj'];
let ageName2 = [26, 'sobuj', true];
ageName2[0] = 25;
