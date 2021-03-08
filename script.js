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
  passLength: 8,
  lowCase: true,
  upCase: true,
  spChar: true,
  numCh: true
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
  if (passQual.numCh) {
    generatePassword = generatePassword.concat(numChar);
  }
}

function makePass(){
  makeArray();
  for (i = 0; i < passQual.passLength; i++){
    generatedPassword.push(generatePassword[Math.floor(Math.random() * generatePassword.length)])
  }

  let password = generatedPassword.join("");

  let upChk = generatePassword.some(r=> upChar.includes(r))
  console.log(upChk)
  let lowChk = generatePassword.some(r=> lowChar.includes(r))
  console.log(lowChk);
  let spcChk = generatePassword.some(r=> specChar.includes(r))
  console.log(spcChk);
  let numChk = generatePassword.some(r=> numChar.includes(r))
  console.log(numChk);

  console.log(password);
  
}

makePass();
