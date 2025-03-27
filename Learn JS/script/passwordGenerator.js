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

    if(length <= 0)
    {
        return `(password length must be at least 1)`;
    }
    if(allowedChars.length === 0)
    {
        return `(At least 1 set of character need to be selected)`;
    }

    for(let i=0;i<length;i++)
    {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    console.log(password);
    return password;
}

const passwordLength = 12;
let includeLowerCase = false;
let includeUpperCase = false;
let includeNumbers = false;
let includeSymbols = false;

//Checkbox
const lowerCaseBox = document.getElementById("lowerCaseBox");

const password =  generatePassword(passwordLength, includeLowerCase, includeUpperCase, 
    includeNumbers, includeSymbols)

console.log(`Generated password: ${password}`);

function includedPasswordCheckBox()
{
    includeLowerCase = false;
    includeUpperCase = false;
    includeNumbers = false;
    includeSymbols = false;

    if(lowerCaseBox.checked)
    {
        includeLowerCase = true; 
    } 
    if(upperCaseBox.checked)
    {
        includeUpperCase = true; 
    } 
    if(numberCaseBox.checked)
    {
        includeNumbers = true; 
    } 
    if(symbolCaseBox.checked)
    {
        includeSymbols = true; 
    } 
    
    
    let password = generatePassword(passwordLength,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols);

    resutPassword.textContent = `Your password is ${password}`;
}
