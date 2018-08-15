var counter = 0;

var responseToSecretQuestion = "";
var password = "abracadabra";

while (responseToSecretQuestion !== password)
{
    responseToSecretQuestion = prompt("What is the secret password?");
    counter++;

    if (responseToSecretQuestion === password)
    {
        document.write("<h1>Welcome!</h1>");
        break;
    }
    else if (counter === 3)
    {
        document.write("<h1>YOU SHALL NOT PASS!</h1>");
        break;
    }
}