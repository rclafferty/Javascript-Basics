var counter = 0;

while (counter < 100)
{
    counter = counter + 1;

    var randomNumber = Math.floor(Math.random() * 100) + 1; // Random number 1 - 100
    document.write("<p>Value: " + randomNumber + "</p>");
}