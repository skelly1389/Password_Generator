// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// sets different selectable characters to their own strings
const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChar = "1234567890";
const specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
// turns character sets into arrays
let lowChar = lowerChar.split('');
let upChar = upperChar.split('');
let numChar = numberChar.split('');
let specChar = specialChar.split('');
// makes sure the arrays to be generated are empty, might be redundant 
let generatePassword = [];
let generatedPassword = [];
// a function that creates an array based on which character sets the user selects
function makeArray() {
  generatePassword = [];
  if (passQual.lowCase) {
    generatePassword = generatePassword.concat(lowChar);
  }
  if (passQual.upCase) {
    generatePassword = generatePassword.concat(upChar);
  }
  if (passQual.spChar) {
    generatePassword = generatePassword.concat(specChar);
  }
  if (passQual.numCh) {
    generatePassword = generatePassword.concat(numChar);
  }
}

// the function that takes the character set array and uses it to create a password
function makePass(){
  // clears stored password in case function is reset due to not meeting parameters
  generatedPassword = [];
  // sets the values of passQual with user inputs
  passQual = {
    passLength: prompt("Choose a password length between 8 and 128 characters!", "8" ),
    lowCase: confirm("Press okay to include lowercase characters"),
    upCase: confirm("Press okay to include uppercase characters"), 
    numCh: confirm("Press okay to include numbers"),
    spChar: confirm("Press okay to include special characters")
  }

  // makes sure the password is between 8 and 128 characters in length
  while (passQual.passLength < 8) {
    alert("Password length must be between 8 and 128 characters and contain at least one set of characters!");
    passQual.passLength = prompt("Choose a password length between 8 and 128 characters!");
  }

  // makes sure at least one set of characters is selected
  while (!passQual.lowCase && !passQual.upCase && !passQual.numCh && !passQual.spChar) {
    alert("Must select at least one set of characters!");
    passQual.lowCase = confirm("Press okay to include lowercase characters");
    passQual.upCase = confirm("Press okay to include uppercase characters"); 
    passQual.numCh = confirm("Press okay to include numbers");
    passQual.spChar = confirm("Press okay to include special characters");
  }

  makeArray();
  // makes sure password length is equal to user parameter
  for (i = 0; i < passQual.passLength; i++){
    generatedPassword.push(generatePassword[Math.floor(Math.random() * generatePassword.length)])
  }

  // turns the generated password array into a string without commas
  let password = generatedPassword.join("");

  // checks that, if a parameter is set to true, the password must contain a character from that set
  if((passQual.lowCase == true && generatedPassword.some(item => lowChar.includes(item)) == false) 
    || (passQual.upCase == true && generatedPassword.some(item => upChar.includes(item)) == false)
    || (passQual.spChar == true && generatedPassword.some(item => specChar.includes(item)) == false)
    || (passQual.numCh == true && generatedPassword.some(item => numChar.includes(item)) == false)){
      //if the password is missing a character the function is rerun from scratch
      makePass();
      return;
    // if the password includes at least one character from selected parameters password is displayed
    } else {  
        alert("Your password is: " + password);
      }
  }

generateBtn.addEventListener("click", makePass);
