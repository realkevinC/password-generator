// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array set
var lowercaseLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var number = ['1','2','3','4','5','6','7','8','9','0'];
var specialCharacter = '!@#$%^&*./,<>?;:[]{}|=-+_)(`~'.split('');
var myPassword = lowercaseLetter.concat(uppercaseLetter,number,specialCharacter);
console.log (myPassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// When click we get a prompt for password. 

// Start function.

// Ask for what criteria to include.

// Ask for length of password that is  more than 8 and  less than 128 character.

// Ask if user whether or not to include lowercase, uppercase, numeric, and/or special characters.

// Write if else to meet requirement and at least 1 character need to be selected.

// Password is displayed in the page or in an alert box.




