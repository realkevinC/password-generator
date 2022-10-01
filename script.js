// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array set
var lowercaseLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseLetter = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var number = ['1','2','3','4','5','6','7','8','9','0'];
var specialCharacter = '!@#$%^&*./,<>?;:[]{}|=-+_)(`~'.split('');

// create random charater from the set

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
function generatePassword() {
  
  begin = window.confirm ('Do you want to create a new password?');
  if (begin){
    passwordLength();
    requirement();
    getRandomPassword();
    
  } else {
    window.alert("Ok. Maybe next time.");
  };
  
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
    var requirement2= [lowercaseLetter, uppercaseLetter, number, specialCharacter]
    
    // Write if else to meet requirement and at least 1 character need to be selected.
    
    if (lowercaseLetter === false && uppercaseLetter === false && number === false && specialCharacter === false) {
      window.alert("Please choose one or more of the following to include.");
      requirement()
    } else {
      window.alert("Creating your password now.");}
    };
    // random generator
    function getRandomPassword() {
      var myPassword
      for (var i=0; i < lengthOfPassword; i++) {
        var randomPassword = myPassword[Math.floor(Math.random() * myPassword.length)]
        console.log(randomPassword)
      }
    }
  }
  // function generatePassword
    // store user selection;
    // select yes to all
    if (lowercaseLetter && uppercaseLetter && number && specialCharacter) {
      myPassword = lowercaseLetter.concat(uppercaseLetter,number,specialCharacter);
      console.log(myPassword);
    }
    // select yes to 3
    else if (uppercaseLetter && number && specialCharacter) {
      myPassword = uppercaseLetter.concat(number,specialCharacter);
      console.log(myPassword);
    }
    else if (lowercaseLetter && number && specialCharacter) {
      myPassword = lowercaseLetter.concat(number,specialCharacter);
      console.log(myPassword);
    }else if (lowercaseLetter && uppercaseLetter && specialCharacter) {
      myPassword = lowercaseLetter.concat(uppercaseLetter,specialCharacter);
      console.log(myPassword);
    }else if (lowercaseLetter && uppercaseLetter && number) {
      myPassword = lowercaseLetter.concat(uppercaseLetter,number);
      console.log(myPassword);
    }
    // select yes to 2
    else if (lowercaseLetter && uppercaseLetter) {
      myPassword = lowercaseLetter.concat(uppercaseLetter);
      console.log(myPassword);
    }
    else if (lowercaseLetter && number) {
      myPassword = lowercaseLetter.concat(number);
      console.log(myPassword);
    }else if (lowercaseLetter && specialCharacter) {
      myPassword = lowercaseLetter.concat(specialCharacter);
      console.log(myPassword);
    }
    else if (uppercaseLetter && number) {
      myPassword = uppercaseLetter.concat(number);
      console.log(myPassword);
    }
    else if (uppercaseLetter && specialCharacter) {
      myPassword = uppercaseLetter.concat(specialCharacter);
      console.log(myPassword);
    }
    else if (number && specialCharacter) {
      myPassword = number.concat(specialCharacter);
      console.log(myPassword);
    }
    // select 1
    else if (lowercaseLetter){
      myPassword = lowercaseLetter;
      console.log(lowercaseLetter)
    }
    else if (uppercaseLetter){
      myPassword = uppercaseLetter;
      console.log(uppercaseLetter)
    }
    else if (number){
      myPassword = number;
      console.log(number)
    }
    else if (specialCharacter){
      myPassword = specialCharacter;
      console.log(specialCharacter)
    }
    // Password is displayed in the page or in an alert box.