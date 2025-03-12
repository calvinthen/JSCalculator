const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let temp;

function convert(){

    if(toFahrenheit.checked)
    {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = textBox.value + " Celcius is " + temp.toFixed(1) + " Fahrenheit";
    }
    else if(toCelcius.checked)
    {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = textBox.value + " Fahrenheit is " + temp.toFixed(1) + " Celcius";

    }
    else{
        result.textContent = "Please select a Unit";
    }
    
}