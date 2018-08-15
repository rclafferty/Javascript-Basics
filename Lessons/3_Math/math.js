// Get the user's age
var visitorAge = prompt("What's your age?");
// Convert the input to an int
var yearsAlive = parseInt(visitorAge);
// Get the number of days a user's been alive --> years * 365
var daysAlive = yearsAlive * 365;
// Output the answer
document.write("You have been alive for " + daysAlive + " days!");