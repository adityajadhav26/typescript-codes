//1. Overloading with Different Parameter Types
/* 
// Overload signatures
function display(value: number): string;
function display(value: string): string;
function display(value: boolean): string;

// Implementation function
function display(value: number | string | boolean): string {
return `Value is: ${value}`;
}
console.log(display(100)); // "Value is: 100"
console.log(display("Hello")); // "Value is: Hello"
console.log(display(true)); // "Value is: true"
 */

// 2️. Overloading with Different Number of Parameters
/* 
// Overload signatures
function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;
// Implementation function
function add(a: number, b: number, c?: number): number {
return c !== undefined ? a + b + c : a + b;
}
console.log(add(2, 3)); // 5
console.log(add(2, 3, 4)); // 9

// - Valid because c is optional, ensuring compatibility with both overloads.
 */


// 3️. Overloading with Different Return Types
/* 
// Overload signatures
function processInput(input: string): string;
function processInput(input: number): number;
// Implementation function
function processInput(input: string | number): string | number {
return typeof input === "string" ? input.toUpperCase() : input * 2;
}
console.log(processInput("hello")); // "HELLO"
console.log(processInput(10)); // 20
//- Valid because the function correctly returns a string for string input and a number for number input. 
*/