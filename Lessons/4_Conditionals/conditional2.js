//EX: Creating an ad that targets users over the age of 20

// Get the user's gender
var userGender = prompt("What is your gender?");
userGender = userGender.toLowerCase();
// Get the user's age
var userAgeString = prompt("What is your age?");
var userAge = parseInt(userAgeString);

// Check if user is a male over the age of 20
if (userGender === "male" && userAge >= 20)
{
    // User qualifies
    alert('Congrats! You qualify for our FREE offer!');
}
else
{
    // User does not qualify
    alert("Sorry. Please come back again for future offers.");
}