console.log("Demonsrating equals. Difference between double equals and triple equals.");
console.log(3 == 4);
console.log("compare values only:", 3 == "3");
console.log("compares values and type:", 3 === "3");

console.log(`\nSimple if-else statement:`);
let a = -3;
if(a>0){
    console.log("positive number");
}
else {
    console.log("negative number");
}
console.log("code finished");

console.log(`\nUsing &&(AND) operator:`);
let lhs = true;
let rhs = false;

if(lhs && rhs){
    console.log("BOTH TRUE")
}
else{
    console.log("Both or one is false");
}

console.log(`\nSecond example of && operator:`);
let number = 5;

if(number > 0 && number <= 10){
    console.log("number is between 0 to 10");
}

console.log(`\nUsing ||(OR) operator:`);
let isRainy = true;
let isCloudy = false;

if(isRainy || isCloudy){
    console.log("bring umbrella");
}

console.log(`\nProving that undefined is falsly value:`);
if(!undefined){
    console.log("here");
}

console.log(`\nExample of else-else if-else statement:`);
let anotherNumber = 21;

if(anotherNumber > 0 && anotherNumber <= 10){
    console.log("number is between 0 to 10");
}
else if(anotherNumber > 10 && anotherNumber <= 20){
    console.log("number is between 11 to 20");
}
else if(anotherNumber > 20 && anotherNumber <= 30){
    console.log("number is between 21 to 30");
}
else{
    console.log("number is not within stated ranges");
}

console.log(`\nExample of ternary operator:`);
anotherNumber%2 == 0 ? console.log("Even"):console.log("Odd");

console.log(`\Example of while loop:`);
let sentinelVar = 5;

while(sentinelVar <= 10){
    console.log(sentinelVar);
    // remeber to update sentinel variable
    // sentinelVar ++ ;
    sentinelVar += 2; // same as: sentinelVar = sentinelVar + 2;
}

const prompt = require("prompt-sync")();

console.log(`\nNon-deterministic while loop:`);
let userNumber = parseFloat(prompt("Give a positive number: "));

while(userNumber<0){
    console.log("Not a positive number.");
    userNumber = parseFloat(prompt("Give a positive number: "));
}

console.log("Thank you. Your number was:", userNumber);

console.log(`\nExample of for loop:`);
for(i=0; i <10; i++){
    console.log(i);
}

console.log(`\nExample of keyword continue`);
let x = 0;
let y = 0;
while (x <= 0 || y <= 0) {
    x = prompt("Enter the first number: ");
    if (x < 0) {
        continue;
    }
    y = prompt("Enter the second number: ");
}
console.log("You have entered two positive numbers");