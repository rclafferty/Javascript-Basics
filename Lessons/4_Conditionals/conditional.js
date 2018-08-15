var isCorrectAnswer = false; // Tracks if the loop must execute again

// while the user has not entered the correct answer...
do {
    // Prompt the user
    var answer = prompt('What is 2 + 2?');

    // Check if answer is correct
    if (answer === "4") // === means equal value AND type
    //if (answer == "4")
    {
        alert("Correct!");
        isCorrectAnswer = true;
    }
    else
    {
        alert("Sorry. That is not the correct answer.");
        isCorrectAnswer = false;
    }
} while (!isCorrectAnswer);

// Display answer on HTML page
document.write("2 + 2 = 4");