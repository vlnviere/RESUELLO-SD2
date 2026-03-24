console.log("Hello, World!");

//SELECTION CONTROL STRUCTURE
// 1. If-else statement

let age = 21;

if(age >= 18){
    console.log("You are eligible for driver's license.");
} else {
    console.log("You are not eligible for driver's license.");
}

let city = "Manila";
if(city === "Manila"){
    console.log("Welcome to the Capital Region!");
} else {
    console.log("The selected area is not in the Capital Region.");
}

if(age >= 18 && city === "Cebu"){
    console.log("You can register for the event.");
} else if(age <= 18){
    console.log("You cannot register for the event.");
} else {
    console.log("All criteria not met.");
}   

let role = prompt("Enter your role (admin/student/teacher):").
    toLocaleLowerCase(); // automatically converts the input to lowercase for case-insensitive comparison. toLocaleUpperCase() - converts the input to uppercase for case-insensitive comparison.

if(role == "admin"){
    console.log("Welcome to the UA Portal! Administrator.");
} else if(role == "student"){
    console.log("Welcome to the UA Portal! Assumptionist.");
} else if(role == "teacher"){
    console.log("Welcome to the UA Portal! Faculty.");
} else {
    console.log("Please enter valid role.");
}

// 2. Switch-Case statement. Up to 5 cases only. If more than 5 cases, use if-else statement instead.
let day = "2";

switch (day){
    case "1":
        console.log("It's Monday.");
        break;
    case "2":
        console.log("It's Tuesday.");
        break;
    case "3":
        console.log("It's Wednesday.");
        break;
    case "4":
        console.log("It's Thursday.");
        break;
    case "5":
        console.log("It's Friday.");
        break;
    default:
        console.log("Please Enter between 1-5 only.");
}

let userRole = prompt("Enter your role (1. admin/2. student/3. teacher):");

switch (userRole){
    case "1":
        console.log("Welcome to the UA Portal! Administrator.");
        break;
    case "2":
        console.log("Welcome to the UA Portal! Assumptionist.");
        break;
    case "3":
        console.log("Welcome to the UA Portal! Faculty.");
        break;
    default:
        console.log("Please enter valid role.");
}

