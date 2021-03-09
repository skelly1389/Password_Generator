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

const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChar = "1234567890";
const specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
let lowChar = lowerChar.split('');
let upChar = upperChar.split('');
let numChar = numberChar.split('');
let specChar = specialChar.split('');
generatePassword = [];
let generatedPassword = [];

passQual = {
  passLength: 8,
  lowCase: true,
  upCase: true,
  spChar: true,
  numCh: true
}

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

function makePass(){
  generatedPassword = [];
  makeArray();
  for (i = 0; i < passQual.passLength; i++){
    generatedPassword.push(generatePassword[Math.floor(Math.random() * generatePassword.length)])
  }

  let password = generatedPassword.join("");

  if((passQual.lowCase == true && generatedPassword.some(item => lowChar.includes(item)) == false) 
    || (passQual.upCase == true && generatedPassword.some(item => upChar.includes(item)) == false)
    || (passQual.spChar == true && generatedPassword.some(item => specChar.includes(item)) == false)
    || (passQual.numCh == true && generatedPassword.some(item => numChar.includes(item)) == false)){
      console.log("invalid");
      makePass();
      return;
    } else {  
        console.log(password);
      }
}

makePass();

function checkChars(arr1, arr2) { 
  arr1.some(item => arr2.includes(item));
}
