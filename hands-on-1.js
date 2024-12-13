const prompt = require("prompt-sync")();

let userInput = parseFloat(prompt("enter a whole number: "));

if(userInput%2 === 0){
    console.log("EVEN");
}
else{
    console.log("ODD");
}