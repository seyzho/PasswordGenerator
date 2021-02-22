
// generator functions
function getRandomUpper() {
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return uppercase[Math.floor(Math.random() * uppercase.length)];
}

function getRandomLower() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  return lowercase[Math.floor(Math.random() * lowercase.length)];
}

function getRandomNumber() {
  var number = "1234567890";
  return number[Math.floor(Math.random() * number.length)];
}

function getRandomSymbol() {
  var symbol = "!@#$%^&*()|?/+\`~";
  return symbol[Math.floor(Math.random() * symbol.length)]
}

console.log(getRandomNumber())

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
