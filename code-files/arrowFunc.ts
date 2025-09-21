// arrow function / lambda function
/* 
Arrow functions provide a shorter syntax for writing functions.

Syntax

let functionName = (parameters): returnType => expression; 

*/

let greet = (name:string) : string => {
    return (`hello ${name}`);
}

console.log( greet ("Aditya J.")); // hello Aditya J.