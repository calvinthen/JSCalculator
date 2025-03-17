function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols)
{
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const symbols = "`!@#$%^&*()_-+=[]{}|";

    
    return '';
}

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password =  generatePassword(passwordLength, includeLowerCase, includeUpperCase, 
    includeNumbers, includeSymbols)

console.log(`Generated password: ${password}`);
