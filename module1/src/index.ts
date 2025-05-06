
// we cant compile ts file directly rather we convert ts into js then (compile/print) the js
// node .\module1\dist\1.5.js

let course: string = 'Next level web development';
console.log(course);



// to run the ts file without running js then ts
// install a package called ts-node-dev then just run and see ts results
// npm i -g ts-node-dev
// ts-node-dev --respawn --transpile-only myfilename 
// exmple filename is : .\module1\src\1.1.ts