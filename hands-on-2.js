// QUESTION:
// If you earn 50K or above per year, your income tax is 10%
// If you earn between 25K to 49999, then your income tax is 5%
// Else your income tax is 2.5%
// Ask the user for his annual earnings, and calculate how much tax he has to pay.

const prompt = require("prompt-sync")();

let userIncome = parseFloat(prompt("Enter your earnings: "))

// The straight-forward way:

// if(userIncome >= 50000){
//     console.log("Your income tax is 10%");
//     let tax = userIncome * 0.1;
//     console.log("Your tax is :",tax);
// }
// else if(userIncome<50000 && userIncome >= 25000){
//     console.log("Your income tax is 5%");
//     let tax = userIncome * 0.05;
//     console.log("Your tax is :",tax);
// }
// else {
//     console.log("Your income tax is 2.5%");
//     let tax = userIncome * 0.025;
//     console.log("Your tax is :",tax);
// }

// Using function to re-use code:

function calcTax(userIncome, taxPercent){
    console.log("Your income tax is "+ taxPercent*100 +"%");
    let tax = userIncome * taxPercent;
    console.log("Your tax is :",tax);
}

if(userIncome >= 50000){
    calcTax(userIncome, 0.1);
}
else if(userIncome<50000 && userIncome >= 25000){
    calcTax(userIncome, 0.05);
}
else {
    calcTax(userIncome, 0.025);
}