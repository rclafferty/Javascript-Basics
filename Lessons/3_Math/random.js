// Gets a random number between 1 - 50
// 1. Gets a random number 0 - 1
// 2. Multiplies that by 50 (e.g. .8 * 50 = 40)
// 3. Applies the floor function to that (Rounds down --> 0 - 49)
// 4. Adds 1 to result to make  the range 1 - 50
var randomNumber = Math.floor(Math.random() * 50) + 1;
// Prints the calculated random number
alert("Random number: " + randomNumber);