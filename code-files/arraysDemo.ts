/*
  Arrays in TypeScript
  --------------------
  - An array is a special type of variable that stores multiple values.
  - The values can be of the same data type or different data types.
  - Arrays are declared using square brackets `[]` or the generic `Array<T>` type.
  - Indexing starts from 0.
  - Arrays are an ordered collection of elements.
*/

let names: string[] = []; // decalaration
names[0]= "ram";
names[1]="seeta";
names[2]="geeta";

names.push("Arjun"); // push() method insert array element at end
console.log(names);
console.log(names.length) // prints size of array

// Alternative way to declare and initialize an array
let names2: string[] = ["Abc", "Seeta", "Priti", "Sundar"];

// Example 1: Iterating over an array using a traditional for loop
for(let i=0; i< names.length; i++)
{
    console.log(names[i]);
}
console.log("####################")
// for .. in (index based iteration)
for( let index in names2)
{
     console.log(names2[index]);
}

console.log("####################")
// for..of (values based iteraion)
for(let values of names2)
{
    console.log( values );
}

//4. passing an array as arument to function

function Show (arr: number[]) 
{
    console.log(arr);
    
}
let marks: Array<number> = [11,22,33]; // Arrays are declared using the generic `Array<T>` type.
Show( marks );