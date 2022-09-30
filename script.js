// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array set
var lowercaseLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var number = ['1','2','3','4','5','6','7','8','9','0'];
var specialCharacter = '!@#$%^&*./,<>?;:[]{}|=-+_)(`~'.split('');
var myPassword = lowercaseLetter.concat(uppercaseLetter,number,specialCharacter);
// console.log (myPassword)
// create random charater from the set
var randomPassword = myPassword[Math.floor(Math.random() * myPassword.length)]
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
function passwordLength() {
  lengthOfPassword = prompt("What is the length of your password? Must be between 8 and 128 character");
  lengthOfPassword = Number(lengthOfPassword);

  if (lengthOfPassword >= 8 && lengthOfPassword <= 128) {
    window.alert("You set your password length (" + lengthOfPassword + ")." );
  } else {
    alert("Please enter a number between 8 and 128.");
    passwordLength()
  }
};
// Ask if user whether or not to include lowercase, uppercase, numeric, and/or special characters.
function requirement() {
lowercaseLetter = window.confirm("Do you want to include lowercase letter?");
uppercaseLetter = window.confirm("Do you want to include uppercase letter?");
number = window.confirm("Do you want to include numbers?");
specialCharacter = window.confirm("Do you want to include special characters?");
// Write if else to meet requirement and at least 1 character need to be selected.
// myPassword = lowercaseLetter === false && uppercaseLetter === false && number === false && specialCharacter === false
 if (myPassword === false )  {
   window.alert("Please choose one or more of the following to include.")
  requirement()
} else {
  window.alert("Creating your password now.")
};
}

function generatePassword() {
  passwordLength()
  requirement()
}

// Password is displayed in the page or in an alert box.














// function generatePassword() {
//   var question1 = prompt.confirm("Would you like to generate a new password?");
//   if (question1) {
//     console.prompt("Choose the length of password. Between 8 and 128");
//   } else {
//     console.prompt("Ok. Have a Great day")
//   }