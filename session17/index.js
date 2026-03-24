console.log("Hello World!");

// Repetition Control Structure
// Difference of For Loop, While Loop, and Do-While Loop
// For Loop - used when the number of iterations is known beforehand.
// While Loop - used when the number of iterations is not known beforehand.
// Do-While Loop - used when the number of iterations is not known beforehand and the loop body must be executed at least once.


//While Loop
// 1st Iteration
let count = 0;
while(count < 5){
    console.log("WHILE LOOP: "+ count);
    count++; //incrementation
}

// Result = WHILE LOOP: 0
// Result = WHILE LOOP: 1
// Result = WHILE LOOP: 2
// Result = WHILE LOOP: 3
// Result = WHILE LOOP: 4

// Do-While Loop
let score = 0;
do{
    console.log("DO-WHILE LOOP: "+ score);
    score++;
}while(score < 5);

// Result = DO-WHILE LOOP: 0
// Result = DO-WHILE LOOP: 1
// Result = DO-WHILE LOOP: 2
// Result = DO-WHILE LOOP: 3
// Result = DO-WHILE LOOP: 4

// For Loop
for(let i = 0; i < 5; i++){
    console.log("FOR LOOP: "+ i);
}

// Result = FOR LOOP: 0
// Result = FOR LOOP: 1
// Result = FOR LOOP: 2
// Result = FOR LOOP: 3
// Result = FOR LOOP: 4

for(let i = 0, j = 5; i < 10; i++){ 
    if(i % 3 == 0){
    console.log("COUNT: "+ i + " - Divisible by 3");
    }else{
    console.log("COUNT: "+ i);
    }
//i is a local scope variable, it is only accessible within the for loop block, does not become an error when accessed outside the for loop block
}

//Continue - Break Statement
for(let count = 0; count < 20; count++){
    if(count == 18){
        break; //exits the loop immediately
    }
    console.log("COUNT: "+ count);
}

for(let count = 0; count < 20; count++){
    if(count == 15){
        console.log("Hello it is me: "+ count);
        continue; //skips the current iteration and continues with the next iteration
    }
    console.log("COUNT: "+ count);
}

let isRunning = true;
let accountLocked = 0;
let isLoggedIn = false;
let password = "hello123";

while(isRunning){
    if (accountLocked != 3){
        let input = prompt("Enter password: ");
        if(input != password){
            accountLocked++;
        }else{
            isLoggedIn = true;
            alert("Welcome!");
        }
    }else{
        alert("Account is Locked! Please contact the administrator.");
        isRunning = false;
    }
}

let input = parseInt(prompt("Enter a number: "));

for(let i = 0; i <= input; i++){
    console.log(i);
}