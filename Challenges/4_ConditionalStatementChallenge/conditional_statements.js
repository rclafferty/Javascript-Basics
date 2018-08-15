// Make a quiz program that asks the user 3 simple math
//      problems and score the user on their answers

// If the user scores less than 2, then they fail the quiz

/* ------------------------------------------ */
/* --------------- QUESTION 1 --------------- */
/* ------------------------------------------ */

var score = 0;
var pointsText = "points";

// Prompt the user for 1st question
var userAnswerString = prompt("10 + 20 = ?");
var userAnswer = parseInt(userAnswerString);
var answer1 = 30;

if (userAnswer === answer1)
{
    // Increment score
    score++;

    // point (singular) vs points (plural)
    if (score == 1)
    {
        pointsText = "point";
    }
    else
    {
        pointsText = "points";
    }

    // Notify the user of the answer
    alert("Correct!");
}
else
{
    // Notify the user of the answer
    alert("Sorry. The correct answer was " + answer1);
}

// Notify the user of their score
alert("You currently have " + score + " " + pointsText + "!");

/* ------------------------------------------ */
/* --------------- QUESTION 2 --------------- */
/* ------------------------------------------ */

// Prompt the user for 2nd question
userAnswerString = prompt("10 * 0 = ?");
userAnswer = parseInt(userAnswerString);
var answer2 = 0;

if (userAnswer === answer2)
{
    // Increment score
    score++;

    // point (singular) vs points (plural)
    if (score == 1)
    {
        pointsText = "point";
    }
    else
    {
        pointsText = "points";
    }

    // Notify the user of the answer
    alert("Correct!");
}
else
{
    // Notify the user of the answer
    alert("Sorry. The correct answer was " + answer1);
}

// Notify the user of their score
alert("You currently have " + score + " " + pointsText + "!");

/* ------------------------------------------ */
/* --------------- QUESTION 3 --------------- */
/* ------------------------------------------ */

// Prompt the user for 3rd question
userAnswerString = prompt("7 * ? = 63");
userAnswer = parseInt(userAnswerString);
var answer3 = 9;

if (userAnswer === answer3)
{
    // Increment score
    score++;

    // point (singular) vs points (plural)
    if (score == 1)
    {
        pointsText = "point";
    }
    else
    {
        pointsText = "points";
    }

    // Notify the user of the answer
    alert("Correct!");
}
else
{
    // Notify the user of the answer
    alert("Sorry. The correct answer was " + answer1);
}

// Notify the user of their score
alert("You currently have " + score + " " + pointsText + "!");

/* ----------------------------------------- */
/* ---------------- RESULTS ---------------- */
/* ----------------------------------------- */

document.write("<h1>You scored " + score + " " + pointsText + "!</h1>");

if (score >= 2)
{
    // alert("You've passed the math quiz! Stay tuned for further quizzes!");
    document.write("You've passed the math quiz! Stay tuned for further quizzes!");
}
else
{
    // alert("You didn't pass the quiz. Please try again!");
    document.write("You didn't pass the quiz. Please try again!");
}