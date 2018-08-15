var test = "500"; // global scope test

function ExampleFunction()
{
    var test = "5"; // function scope test
    document.write(test); // reads from function scope
}

ExampleFunction();
alert(test); // reads from global scope