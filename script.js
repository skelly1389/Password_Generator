// Assignment Code
var generateBtn = document.querySelector("#generate");
// sets different selectable character sets to their own strings
const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChar = "1234567890";
const specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
// turns character set strings into arrays
let lowCharArray = lowerChar.split('');
let upCharArray = upperChar.split('');
let numCharArray = numberChar.split('');
let specCharArray = specialChar.split('');
// makes sure the arrays to be generated are empty, might be redundant 
let charsetArray = [];
let newPassArray = [];
// a function that creates an array based on which character sets the user selects
function makeArray() {
  charsetArray = [];
  if (passQual.lowCase) {
    charsetArray = charsetArray.concat(lowCharArray);
  }
  if (passQual.upCase) {
    charsetArray = charsetArray.concat(upCharArray);
  }
  if (passQual.spChar) {
    charsetArray = charsetArray.concat(specCharArray);
  }
  if (passQual.numCh) {
    charsetArray = charsetArray.concat(numCharArray);
  }
}
function userPrompts() {
  // sets the values of passQual with user inputs
  passQual = {
    passLength: prompt("Choose a password length between 8 and 128 characters!", "8"),
    lowCase: confirm("Press okay to include lowercase characters"),
    upCase: confirm("Press okay to include uppercase characters"),
    numCh: confirm("Press okay to include numbers"),
    spChar: confirm("Press okay to include special characters"),
    numCheck: Number(this.passLength)
  }
  // makes sure password length is a number between 8 and 128
  while (passQual.passLength < 8 || passQual.passLength > 128 || isNaN(passQual.passLength)) { 
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
}
// the function that takes the character set array and uses it to create a password
function makePass() {
  // clears stored password in case function is reset due to not meeting parameters
  newPassArray = [];
  makeArray();
  // makes sure password length is equal to user parameter
  for (i = 0; i < passQual.passLength; i++) {
    newPassArray.push(charsetArray[Math.floor(Math.random() * charsetArray.length)])
  }
  // turns the generated password array into a string without commas
  let password = newPassArray.join("");
  // checks that, if a parameter is set to true, the password must contain a character from that set
  if ((passQual.lowCase == true && newPassArray.some(item => lowCharArray.includes(item)) == false)
    || (passQual.upCase == true && newPassArray.some(item => upCharArray.includes(item)) == false)
    || (passQual.spChar == true && newPassArray.some(item => specCharArray.includes(item)) == false)
    || (passQual.numCh == true && newPassArray.some(item => numCharArray.includes(item)) == false)) {
    //if the password is missing a character the function is rerun after point where user inputs are chosen
    makePass();
    return;
    // if the password includes at least one character from selected parameters password is displayed
  } else {
    // replaces html text at id password with new variable
    let passwordText = document.querySelector("#password");
    // sets string to generated password
    passwordText.value = password;
  }
}
// separates my original function in two so that making sure password meets parameters doesn't re-prompt user
function almostThere() {
  userPrompts();
  makePass();
}
// runs function makePass when button on page is clicked
generateBtn.addEventListener("click", almostThere);