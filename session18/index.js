// console.log("Hello World!");
// //JS Functions - performs specific task and eliminates repetitive code
// //function functionName(parameters){code block}

// console.log("Hello World!");

// function sayHello(){
//     console.log("Hello, San Fernando City, Pampanga!");
// }

// //Invocation/Invoke - calling a function
// sayHello(); //reusable code, can be called multiple times
// sayHello();
// sayHello();

// //showAlert(); //error, function not yet declared
// function showAlert(){
//     alert("This is an alert box!");
// }

// //startCalc(); //error, function not yet declared

// let num1 = 0 , num2 = 0;
// function startCalc(){
//     let userInput = parseInt(prompt("Please select an operation: \n[1]Input Numbers \n[2]Sum \n[3]Difference \n[4]Product \n[5]Quotient [6]Reset"));

//     switch(userInput){
//         case 1:
//             sum();
//             break;
//     }
// }   

// function sum(num1, num2){
//     console.log(`The sum of ${num1} and ${num2} is:`, num1 + num2);
// }

let num1 = 0, num2 = 0;

function startCalc(){
    let userInput = parseInt(prompt("Please select an action: \n[1] Input Numbers\n[2] Sum\n[3] Difference\n[4] Product\n[5] Quotient \n[6] Reset"));

    switch (userInput){
        case 1:
            enterNumbers();
            break;
        case 2:
            sum(); 
            break;
        case 3:
            difference();
            break;
        case 4:
            product();
            break;
        case 5:
            quotient();
            break;
        case 6:
            reset();
            break;
        default:
            alert("Invalid input. Please select a number from 1 to 6.");
    }
}

function enterNumbers(){
    let inputNum1 = parseInt(prompt("Enter first number."));
    let inputNum2 = parseInt(prompt("Enter second number."));
    num1 = inputNum1;
    num2 = inputNum2;
}

function sum(){
    if(num1 == 0 || num2 == 0){
        alert("Please enter num1 or num2.")
    }else{
        let sum = num1 + num2;
        alert(`The sum of ${num1} and ${num2} is ${sum}.`);
        // alert("The sum of" + num1 + "and" + num2 + " is ", num1 + num2);
    }
}

function difference(){
    if(num1 == 0 || num2 == 0){
        alert("Please enter num1 or num2.")
    }else{
        let difference = num1 - num2;
        alert(`The difference of ${num1} and ${num2} is ${difference}.`);
    }
}

function product(){
    if(num1 == 0 || num2 == 0){
        alert("Please enter num1 or num2.")
    }else{
        let product = num1 * num2;
        alert(`The product of ${num1} and ${num2} is ${product}.`);
    }
}

function quotient(){
    if(num1 == 0 || num2 == 0){
        alert("Please enter num1 or num2.")
    }else if(num2 == 0){
        alert("Cannot divide by zero.");
    }else{
        let quotient = num1 / num2;
        alert(`The quotient of ${num1} and ${num2} is ${quotient}.`);
    }
}

function reset(){
    num1 = 0;
    num2 = 0;
    alert("Numbers have been reset.");
}
