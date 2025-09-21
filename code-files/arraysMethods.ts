let numbers: number[] = [1,2,3,4,5];
//let fruites: string[]= ['apple','banana','orange']

// 1. length - attribute of array
console.log(numbers.length);
//console.log(fruites.length);

// 1. push() - Adds single/multiple elements to the end of an array
// Syntax: array.push(element1, ..., elementN)

numbers.push(6,7);
console.log("After push():", numbers); // [1,2,3,4,5,6,7]

// 2. pop() - Removes the last element from an array
// Syntax: array.pop()
console.log( numbers.pop() ); // 7

// 3. shift() - Removes the first element from an array
// Syntax: array.shift()
let firstElement = numbers.shift(); //1
console.log(firstElement); // 1



console.log("#########################");
 numbers = [1,2,3,4,5];

 // 4. unshift() - Adds single/multiple elements to the beginning of an array
// Syntax: array.unshift(element1, ..., elementN)
numbers.unshift(11,22);
console.log(numbers); //  [11, 22, 1, 2,3,  4, 5]


// 5. concat() - Combines two or more arrays of same type
// Syntax: array.concat(array1, ..., varrayN)
let combinedArray = numbers.concat([6,7],[8,9,10]);
console.log(combinedArray);  // [11, 22, 1, 2, 3, 4,  5, 6, 7, 8,9, 10]

console.log("#########################");

// 6. slice() - Extracts a section of an array
// Sarting Index starts from Zero
// Ending Index will be exclussive. Ex: If 3 is Ending Index It will consider 2   (3-1=2)
// Syntax: array.slice(start, end)
console.log(numbers);   // [11, 22, 1, 2, 3, 4,  5]
let extractedArray=numbers.slice(0,3);
console.log("After Slice():", extractedArray); //[11, 22, 1]


// 7. splice() - Adds/removes elements from an array(From everywhere)

// Syntax: array.splice(start, deleteCount, item1, ..., itemN)
let fruites : string[] = [ 'kiwi', 'pear', 'apple', 'banana', 'orange' ];
console.log("Current elements in fruites array:", fruites);

//Ex1: only removing

let removedElements=fruites.splice(1,2);  // here 1 is startign index, 2 is represent how many elements to be removed, no elements given for adding(note that)
console.log("After slice(1,2): ",fruites ); //[ 'kiwi', 'banana', 'orange' ]
console.log("Removed Elements: ",removedElements) //[ 'pear', 'apple' ]


//Ex2: not removed but add only

fruites.splice(1,0,'pipneapple','grape'); // deletecount 0 -means add only
console.log("After slice(1,0,'pipneapple','grape'): ",fruites );  //[ 'kiwi', 'pipneapple', 'grape', 'banana', 'orange' ]

//Ex3:  both remove and add
fruites.splice(1,2,"mango","cherry");// from index 1, remove 2 elements, and add given from index 1
console.log(" After splice(1,2,'mango','cherry'):", fruites); //[ 'kiwi', 'mango', 'cherry', 'banana', 'orange' ]


// 8. indexOf() - Finds the index of an element, If element not found then return -1
// Syntax: array.indexOf(searchElement)   (or)  array.indexOf(searchElement,Starting Index)

//Ex 1
let bananaIndex=fruites.indexOf("banana");
console.log("Index of banana:",bananaIndex ); //3


//Ex 2 
let papayaIndex=fruites.indexOf("papaya");
console.log("Index of Papaya:" ,papayaIndex);  -1


//Ex3
bananaIndex=fruites.indexOf("banana",2);
console.log("Index of banana:",bananaIndex );  //3


// 9. includes() - Checks if an element exists
//Returns True or false
// Syntax: array.includes(searchElement, fromIndex)

let isAppleExist=fruites.includes('apple');
console.log("Does fruites include apple?",isAppleExist );  //false


let isBananaExist:boolean=fruites.includes('banana');
console.log("Does fruites include apple?",isBananaExist );  //true

// 10. toString() - Converts array to string
// Syntax: array.toString()

let myarray:string []=['w','e','l','c','o','m','e']
console.log("Original myarray: ", myarray);

let str:string=myarray.toString();
console.log("converted string: ", str); //w,e,l,c,o,m,e
console.log(typeof str); // string


numbers = [ 2, 3, 4, 5, 6, 7 ];

let numbersString:string=numbers.toString();
console.log("Converted Array To String: ",numbersString); //2,3,4,5,6,7
console.log(typeof numbersString); // string


// =========  forEach(), map(), filter(), reduce(), some(), every() ==============
