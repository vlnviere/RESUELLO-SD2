// console.log("Hello World!");
// [SECTION 1] Parameterized functions
// Sysntax:
// function functionName(parameter1, parameter2, ...parameterN) {
//     // code to be executed
// }

function greeting() {
    let userInput = prompt("What is your name?");
    console.log("Hello " + userInput + "!");
}

// greeting(); sample fuction calling using basic function


// function with parameters
// name -> is our parameter
// parameter -> is a variable that is used in a function to receive a value when the function is called. storagte for a specific function
function sayHello(name) {
    console.log("Hello from function with parameter, " + name + "!");
}

// sayHello(); // is to be passed for the function parameter
sayHello("Jason T. Gonzales"); // function calling with argument

// function with multiple parameters
function completeName(firstName, middleName, lastName) {
    console.log(`Hello, ${firstName} ${middleName} ${lastName}!`);      
}

completeName("Jason", "T.", "Gonzales"); // function calling with multiple arguments
completeName("Jason", "T.", "Gonzales", "Jr."); // hindi gagana kasi 4 yung parameter pero 3 lang yung argument, extra argument is ignored
completeName("Jason", "T."); // hindi gagana kasi kulang yung argument, dapat 3 yung argument para gumana

// function and return statement
// return will hold a value to be used outside the function, it will return a value to the caller of the function
function print(){
    console.log("This is a function with return statement");
    return "This is the return value of the function";
}

print(); // function calling, it will print the console log but the return value is not being used

let sum = function(num1, num2) {
    let total = num1 + num2;
    console.log("Total" + total);
    return total;
}

sum(10, 15); // function calling, it will print the console log but the return value is not being used

if (sum >= 30) {
    console.log("Passed");
} else {
    console.log("Failed");
}

let registration = function(name, age) {
    if (age <= 17) {
        console.log("Sorry, " + name + ". You are not eligible to register.");
    } else {
        console.log(`${name}, please proceed to the next step of registration.`);
        return age;
    }
}

let value = registration("John Doe", 18); // function calling, it will print the console log and the return value is being stored in a variable
console.log("Age: " + value);

function checkAge(age){
    if(age <= 17){
        console.log("Sorry, " + name + ". You are not eligible to register.");
    } else if (age <= 30){
        console.log("You can apply for basic account");
    } else{
        console.log("You can apply for premium account");
    }
}

checkAge(value); // function calling, it will print the console log and the return value is being used as an argument for another function