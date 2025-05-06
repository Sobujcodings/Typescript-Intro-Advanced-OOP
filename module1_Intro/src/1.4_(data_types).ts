// basic typescript data types:

// 1.Primitive(mutable)
//string
// let firstName = 'sobuj';          (implicit) ts auto detect the data type
let firstName : string = 'sobuj'; // (explicit) ts mannually place the data type

//number
let number : number = 123;

// boolean
let isAdmin : boolean = true;

// undefined (x is undefined and its data type also undefined)
let x : undefined = undefined; 

// null 
let y : null = null;



// 2. Non-primitive data type

// Array (list of string)
let friends : string[] = ['recheal', 'monica'];
// friends.push(1); cant push number to list of string

// Array (list of number)
let eligibleRollList : number[] = [1,2,3];
// eligibleRollList.push('name')


// tuple (special type of array) --> array --> order --> type of values
// we can tuple 2,3 or more items ( // tuple (type r prottekta k array index onujayi define kore dibo))
let coordinates : [number, number] = [12,13];
let ageName : [number,string] = [26,'sobuj'];
let ageName2 : [number,string, boolean] = [26,'sobuj', true];
ageName2[0] = 25;

// tuple made of like this any type of -> [tuple,tuple]  ['tuple','tuple']  [tuple, {tuple}]