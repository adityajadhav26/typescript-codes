
// 1. forEach() - Executes a function once for each array element, return type- void.
// It Takes function as a parameter
// Syntax: array.forEach(function(currentValue, index, array){})

// currentValue - The current element being processed in the array
// index (optional) - The index of the current element being processed in the array
// array(optional) - The array the current element belongs to.

let fruits: string[] = ['apple', 'banana', 'orange', 'mango', 'kiwi'];

console.log("Printing fruits along with Index using forEach()");

fruits.forEach(function (element, index) {
    console.log(`${index}. ${element}`);
});
// same we can do by for..in (index based itaeration)
console.log("Printing fruits along with Index using for-in");
for (let i in fruits) {
    console.log(i, fruits[i]);
}

// // Ex 2: Print all fruite names in uppercase:
console.log("All fruits in UPPERCASE:");
fruits.forEach((element) => {
    console.log(element.toUpperCase());
});



// 2. map() - Creates a new array with the result of calling the function on every element of an array
//            -Executes a function once for each array element
//             - It Takes function as a parameter.
//          -vIMP--  Returns the same number of elements that we have in original array.

// Syntax: array.map(function(currentValue, index, array){})
//          array.map( (currentValue) => {})
// Ex1: Req: Get square of all the numbers in an array. Ex: [1,2,3] then result should be [1,4,9]

let numbers: number[] = [1, 2, 3, 4, 5];

let squaredNumbers = numbers.map((num) => {
    return (num * num);
});

//squaredNumbers = numbers.map((num) => num * num);   //another appraoch


// 3. filter() - Creates a new array with all the elements that pass/satisfy the function
//          It Takes function as a parameter.
//  -VVIMP - Returns either same or fewer number of elements compared to original array.

// Syntax: array.filter(function(currentValue, index, array){})
// Ex1: Get the only even numbers from an array

let evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;
});

console.log("Even numbers:", evenNumbers); // Output: [2, 4]

// Ex2: Get the only numbers greater than 3 from an array
let filteredNumbers = numbers.filter((num) => num > 3);
console.log("Elements greater than 3:", filteredNumbers); // Output: [4, 5]

// 4. reduce() - Applies a function on every element of an array and returns a single value.

// Syntax: array.reduce(function(accumulator, currentValue, index, array){})

// accumulator - The accumulated value from previous iteration- manadatory parameter 
// currentValue - The current element being processed - manadatory parameter 

//Ex1: Get the total (sum) of all the elements in an array

/* Using Traditional loop
let total=0;
for(let i=0;i<numbers.length;i++)
{
    total=total+numbers[i];    // here is total is an accumulator for ex.
}
console.log("Sum of Array elements: "+total); //27
*/

// using reduce()
let reducedResult = numbers.reduce((total, element) => {
    return total + element;
}); 

console.log("Reduced Result (Total of an Array):", reducedResult); // Output: 15



// 5. some() - Checks if any element satisfies a condition
// Returns true if at least one element passes the condition, else false

// Syntax: array.some(function(currentValue, index, array){})
console.log(numbers);
//Ex1: 
let hasNegative = numbers.some((element) => element < 0);
console.log("Does numbers have any negative numbers?", hasNegative); // Output: false

//Ex2:
let hasPositive = numbers.some((element) => element > 0);
console.log("Does numbers have any positive numbers?", hasPositive); // Output: true


//=============================================================================

//=============================================================================


// 6. every() - Checks if all elements satisfy a condition
// Returns true if all elements pass the condition, else false

// Syntax: array.every(function(currentValue, index, array){})

//Ex1: 
let allEven = numbers.every((element) => element % 2 === 0);
console.log("Are all numbers even?", allEven); // Output: false

//Ex2:
let allGreathanOne = numbers.every((element) => element > 1);
console.log("Are all Greater Than One?", allGreathanOne); // Output: false

//Ex3:
let allPositive = numbers.every(num => num > 0);
console.log("Are all numbers positive?", allPositive); // true
