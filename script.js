// Assignment Code
var generateBtn = document.querySelector("#generate");


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


function generatePassword() {

// Array set

var lowercaseLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var number = ['1','2','3','4','5','6','7','8','9','0'];
var specialCharacter = '!@#$%^&*./,<>?;:[]{}|=-+_)(`~'.split('');
// var newPassword = lowercaseLetter.concat(uppercaseLetter,number,specialCharacter)

begin = window.confirm ('Do you want to create a new password?');
  if (begin){
    passwordLength();
    requirement();
    // getRandomPassword();
    
    // var generatedPassword = getRandomPassword();
    // return generatedPassword;
    
    
  } else {
    window.alert("Ok. Maybe next time.");
  };
  
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
    var isLowercaseLetter = window.confirm("Do you want to include lowercase letter?");
    var isUppercaseLetter = window.confirm("Do you want to include uppercase letter?");
    var isNumber = window.confirm("Do you want to include numbers?");
    var isSpecialCharacter = window.confirm("Do you want to include special characters?");
    // var requirement2 = [isLowercaseLetter, isUppercaseLetter, isNumber, isSpecialCharacter]
    
    // Write if else to meet requirement and at least 1 character need to be selected.
    
    if (isLowercaseLetter === false && isUppercaseLetter === false && isNumber === false && isSpecialCharacter === false) {
      window.alert("Please choose one or more of the following to include.");
      requirement()
    } 
    else if (isLowercaseLetter && isUppercaseLetter && isNumber && isSpecialCharacter) {
      myPassword = lowercaseLetter.concat(uppercaseLetter,number,specialCharacter);
      console.log(myPassword);
    }
    // select yes to 3
    else if (isUppercaseLetter && isNumber && isSpecialCharacter) {
      myPassword = uppercaseLetter.concat(number,specialCharacter);
      console.log(myPassword);
    }
    else if (isLowercaseLetter && isNumber && isSpecialCharacter) {
      myPassword = lowercaseLetter.concat(number,specialCharacter);
      console.log(myPassword);
    }else if (isLowercaseLetter && isUppercaseLetter && isSpecialCharacter) {
      myPassword = lowercaseLetter.concat(uppercaseLetter,specialCharacter);
      console.log(myPassword);
    }else if (isLowercaseLetter && isUppercaseLetter && isNumber) {
      myPassword = lowercaseLetter.concat(uppercaseLetter,number);
      console.log(myPassword);
    }
    // select yes to 2
    else if (isLowercaseLetter && isUppercaseLetter) {
      myPassword = lowercaseLetter.concat(uppercaseLetter);
      console.log(myPassword);
    }
    else if (isLowercaseLetter && isNumber) {
      myPassword = lowercaseLetter.concat(number);
      console.log(myPassword);
    }else if (isLowercaseLetter && isSpecialCharacter) {
      myPassword = lowercaseLetter.concat(specialCharacter);
      console.log(myPassword);
    }
    else if (isUppercaseLetter && isNumber) {
      myPassword = uppercaseLetter.concat(number);
      console.log(myPassword);
    }
    else if (isUppercaseLetter && isSpecialCharacter) {
      myPassword = uppercaseLetter.concat(specialCharacter);
      console.log(myPassword);
    }
    else if (isNumber && isSpecialCharacter) {
      myPassword = number.concat(specialCharacter);
      console.log(myPassword);
    }
    // select 1
    else if (isLowercaseLetter){
      myPassword = lowercaseLetter;
      console.log(myPassword)
    }
    else if (isUppercaseLetter){
      myPassword = uppercaseLetter;
      console.log(myPassword)
    }
    else if (isNumber){
      myPassword = number;
      console.log(myPassword)
    }
    else if (isSpecialCharacter){
      myPassword = specialCharacter;
      console.log(myPassword)
    }
    // random generator
    var password = ""
    function getRandomPassword() {
      for (var i=0; i < lengthOfPassword; i++) {
        password += myPassword[Math.floor(Math.random() * newPassword.length)];
      }
      console.log(password)
      return password;
    }
    // getRandomPassword()
  };
    
}
  // Password is displayed in the page or in an alert box.