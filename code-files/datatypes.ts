// primitive data-types: are basic & holds single values
//1. number
let x: number = 123;
x= 12.25;
x=34567889;
//2. string - any text data
let fname :string= "Aditya";
let greetings: string = `Hello ${fname}`;
console.log(greetings)

//3. bolean - true/false
let flag : boolean = true;
flag=false;

//4. null vs undefined- special types for absense of values
let emptyvalue:null = null;
console.log(typeof(emptyvalue)); // object - object data type on higher level, null data type at lower level
// so null is value, not a data type, null means empty object/ empty value.

let notAssigend: undefined = undefined;

//5. any - avoid using this data type, it loses typescript benefits
let value: any = "Alex";
value=123;
value=true;

//6. union - | (pipe symbol)
//  variable can belong to many defined data types only
let id :number|string;
id="Ram patil";
id= 23456;

//7. void - it used when a function dont return anything
function show():void
{
    console.log("Welcome");
}

show();


// add two numbers
function sum(a:number, b:number ):number
{
    return (a+b);
}
let resultOfAddition= sum(10,20);
console.log(resultOfAddition);
//