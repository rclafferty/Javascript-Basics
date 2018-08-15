// Create a program that will roll a random number between...
// 1 - 6
// 1 - 12
// 1 - 20
// Display these by passing different values to your function
// Write these values to the page / Use the alert command
// You only need 1 function for this program

function rollDice(upperBound)
{
    // Write these values to the page / Use the alert command
    var roll = Math.floor((Math.random() * upperBound)) + 1;
    document.write("<p>Upper bound: " + upperBound + "</p>");
    document.write("<p>Roll:        " + roll + "</p>");
}

// 1 - 6
rollDice(6);
// 1 - 12
rollDice(12);
// 1 - 20
rollDice(20);

console.log("Program successfully completed execution");