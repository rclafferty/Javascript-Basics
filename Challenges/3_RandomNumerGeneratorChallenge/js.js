// Get a number from the user (x)
var userString = prompt("Enter a number (Upper bound)");
var userNumber = parseInt(userString);
// Generate a random number (int) between 1 - x
var randomNumber = Math.floor(Math.random() * userNumber) + 1;

var outputString = "The generated random number is " + randomNumber;
// Option 1: Write the number to the document
// document.write(outputString);

// Option 2: Use AlertBox to display the number
alert(outputString);