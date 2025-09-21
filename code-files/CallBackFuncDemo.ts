//A callback function : A function passed as an argument to another function and executed later. 


function sum(a: number, b:number, callback:(result:number)=>void  )
{
    let result = a + b;

    callback(result);
}


//callback function
function displayResult (result:number):void
{
    console.log(`addition is ${ result}`)
}

// here function passed as an argument to another function
sum(10,25, displayResult); // addition is 35