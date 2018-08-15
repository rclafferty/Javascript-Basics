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

var score = 0;

for (var i = 0; i < 3; i++)
{
    var isCorrect = question(i);
    
}