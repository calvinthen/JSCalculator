
sum(displayResult, 20, 30);

function sum(callback, x, y)
{
    let result = x + y;
    callback(result);
}

function displayConsole(result)
{
    console.log(result);
}

function displayResult(result)
{
    document.getElementById("resultCallback").textContent = result;
}