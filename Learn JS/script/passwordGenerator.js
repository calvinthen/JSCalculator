function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols)
{
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const symbols = "`!@#$%^&*()_-+=[]{}|";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? symbols : "";

    console.log(allowedChars);
    return '';
}

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

//Checkbox
const lowerCaseBox = document.getElementById("lowerCaseBox");

const password =  generatePassword(passwordLength, includeLowerCase, includeUpperCase, 
    includeNumbers, includeSymbols)

console.log(`Generated password: ${password}`);

function includedPasswordCheckBox()
{
    if(lowerCaseBox.checked)
    {
        console.log("Lower Case Included");    
    }   
    else
    {
        console.log("Lower Case not Included");
    }
    console.log("Jalan");
}
