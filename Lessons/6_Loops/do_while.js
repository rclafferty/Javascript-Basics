var userName = "";

do {
    var userName = prompt("What is your name?");
} while(userName === null || userName >= 0);
// userName === null --> User hits "Cancel"
// userName >= 0 --> User leaves text box empty

document.write("Hello " + userName + "! How are you today?");