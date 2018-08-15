// var toDoList = ["Get cat food", "Go uptown for a walk", "Call mom", "Learn some JavaScript"]; // Can be broken into multiple lines
var toDoList = [
    "Get cat food",
    "Go uptown for a walk",
    "Call mom",
    "Learn some JavaScript"
];

// Arrays always start with 0 index in JS
alert(toDoList[2]);

// Add items to the end of the array
toDoList.push("Watch a movie"); // adding 1 item
toDoList.push("Get a haircut", "Message mom", "Take the dog for a walk"); // adding multiple items

// Add items to the beginning of the array
toDoList.unshift("Buy more coffee"); // adding 1 item

// Print the list
document.write("<h1>Your To-Do List</h1>");
document.write("<ol>");
for(i = 0; i < toDoList.length; i++)
{
    document.write("<li>" + toDoList[i] + "</li>");
}
document.write("</ol>");

var itemsRemoved = [];
// Print the list again
document.write("<h2>After removing ");

// Remove items from end of the array
document.write("\"" + toDoList.pop() + "\", ");
document.write("\"" + toDoList.pop() + "\", and");
// Remove items from beginning of the array
document.write("\"" + toDoList.shift() + "\", the remaining items are: </h2>");
document.write("<ol>");
for(i = 0; i < toDoList.length; i++)
{
    document.write("<li>" + toDoList[i] + "</li>");
}
document.write("</ol>");