/*
    My recreation of my work for conditional_statements.js with the use of functions.
    This was my idea, not part of the lessons.
*/

// Make a quiz program that asks the user 3 simple math
//      problems and score the user on their answers

// If the user scores less than 2, then they fail the quiz

function question(numQuestion)
{
    var userAnswer = "";
    var userAnswerString = "";
    var answer = -1;

    if (numQuestion === 1)
    {
        // Prompt the user for 1st question
        userAnswerString = prompt("10 + 20 = ?");
        userAnswer = parseInt(userAnswerString);

        answer = 30;
    }
    else if (numQuestion === 2)
    {
        // Prompt the user for 2nd question
        userAnswerString = prompt("10 * 0 = ?");
        userAnswer = parseInt(userAnswerString);
        
        answer = 0;
    }
    else if (numQuestion === 3)
    {
        // Prompt the user for 3rd question
        userAnswerString = prompt("7 * ? = 63");
        userAnswer = parseInt(userAnswerString);
        
        answer = 9;
    }
    else
    {
        // invalid
    }

    return answer === userAnswer;
}

function getAnswerToQuestion(numQuestion)
{
    if (numQuestion === 1)
    {
        return 30;
    }
    else if (numQuestion === 2)
    {
        return 0;
    }
    else if (numQuestion === 3)
    {
        return 9;
    }
    else
    {
        // invalid
    }
}

function pointsText(score)
{
    var text = "";

    // point (singular) vs points (plural)
    if (score == 1)
    {
        text = "point";
    }
    else
    {
        text = "points";
    }

    return text;
}

function notify(message, score)
{
    alert(message);
    alert("You currently have " + score + " " + pointsText(score));
}

/* ------------------------------------------ */
/* ------------------ MAIN ------------------ */
/* ------------------------------------------ */

var score = 0;
var userMessage = "";

for (var i = 1; i <= 3; i++)
{
    var isCorrect = question(i);
    if (isCorrect)
    {
        score++;
        userMessage = "Correct!";
    }
    else
    {
        userMessage = "Sorry. The correct answer was " + getAnswerToQuestion(i);
    }

    notify(userMessage, score);
}

/* ----------------------------------------- */
/* ---------------- RESULTS ---------------- */
/* ----------------------------------------- */

document.write("<h1>You scored " + score + " " + pointsText(score) + "!</h1>");

if (score >= 2)
{
    // alert("You've passed the math quiz! Stay tuned for further quizzes!");
    document.write("You've passed the math quiz! Stay tuned for further quizzes!");
}
else
{
    // alert("You didn't pass the quiz. Please try again!");
    document.write("You didn't pass the quiz. You need a minimum of 2 points to pass the quiz. Please try again!");
}