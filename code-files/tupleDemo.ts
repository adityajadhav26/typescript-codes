/**
 * Tuples in TypeScript:
 * A tuple is a fixed-length array where each element has a specific type & order.
 * It helps in storing multiple fields of different data types together.
 */

// Example 1: Tuple with two values
let person: [string, number] = ["Alice", 25];

console.log(person[0]); // Output: Alice
console.log(person[1]); // Output: 25
console.log(person);

// Example 2: Tuple with multiple values
let user: [number, string, boolean, number, string]; // Declaring a tuple variable
user = [1, "Steve", true, 20, "Admin"]; // Initializing the tuple

console.log(user);