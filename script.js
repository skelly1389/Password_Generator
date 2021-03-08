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

let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberChar = "1234567890";
let specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let lowChar = lowerChar.split('');
let upChar = upperChar.split('');
let numChar = numberChar.split('');
let specChar = specialChar.split('');
let generatePassword = [];
let generatedPassword = [];

passQual = {
  passLength: 19,
  lowCase: true,
  upCase: true,
  spChar: true
}

function makeArray() {
  if (passQual.lowCase) {
    generatePassword = generatePassword.concat(lowChar);
  }
  if (passQual.upCase) {
    generatePassword = generatePassword.concat(upChar);
  }
  if (passQual.spChar) {
    generatePassword = generatePassword.concat(specChar);
  }
}

function makePass(){
  makeArray();
  for (i = 0; i < passQual.passLength; i++){
    generatedPassword.push(generatePassword[Math.floor(Math.random() * generatePassword.length)])
  }
    console.log(generatedPassword);
}

makePass();
