console.log("Hello World!");
//JS Functions - performs specific task and eliminates repetitive code
//function functionName(parameters){code block}

console.log("Hello World!");

function sayHello(){
    console.log("Hello, San Fernando City, Pampanga!");
}

//Invocation/Invoke - calling a function
sayHello(); //reusable code, can be called multiple times
sayHello();
sayHello();

//showAlert(); //error, function not yet declared
function showAlert(){
    alert("This is an alert box!");
}

//startCalc(); //error, function not yet declared

let num1 = 0 , num2 = 0;
function startCalc(){
    let userInput = parseInt(prompt("Please select an operation: \n[1]Input Numbers \n[2]Sum \n[3]Difference \n[4]Product \n[5]Quotient [6]Reset"));

    switch(userInput){
        case 1:
            sum();
            break;
    }
}   

function sum(num1, num2){
    console.log(`The sum of ${num1} and ${num2} is:`, num1 + num2);
}

