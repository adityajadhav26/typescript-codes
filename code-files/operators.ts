//arithematic 

let a: number=10, b:number = 25;

//power operator -- right to left associativity
console.log((2**3)**2); // 64
console.log(2**(3**2)); // 2**9=512

console.log(a+b); //35
console.log(b-a); // 15
console.log(a*b); //250
console.log(b/a); //2.5
console.log(b%a); //5 -gives remainder of division


//2. relational opearators
// returns true or false
//< -Less than, <=, >, >=, ===, !=== 
console.log((10 === "10")); // strict equality- returns true iff  both values & types are same, else returns false - so false
console.log((10 === 10));   // true

console.log((10 !== "10")); // at least one from type or value must be differnt, so true, else false.
console.log((10 !== 10)); // false


// 3. logical 
//&& ( boolean and) - gives true iff both conditions must be true.

// || ( boolean or) - gives true iff at least one condition is true.

// ! (boolean not) - reverses the result of condition expression


//4. ternary operator -  ? :
// condition-expression ? valuu1-if true : value2-if false ;
