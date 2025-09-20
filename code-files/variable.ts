// we dont use var in modern days of JS/TS

let x; // declaration
x =10; // assignment/ iniatialization
console.log(x);     //10
x=20;   //re assignment
console.log(x);     // 20


const pi=3.14;  // must initilized at declaration, 
console.log(pi);

// both let, const are block scope.
// both dont support Hoisting.

//pi=6.78;    // TypeError: Assignment to constant variable.
console.log(pi);