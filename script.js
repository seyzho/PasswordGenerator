// Assignment code here
var sym = "!@#$%^&*()|?/+\`~";
var num = "1234567890";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var uppercaseYN = document.getElementById("upper")
var lowercaseYN = document.getElementById("lower")
var numberYN = document.getElementById("num")
var symbolYN = document.getElementById("sym")

function generatePassword(lower){
  var pwd = "";
  for (i = 0; i<10;i++) {
    pwd += (Math.floor(Math.random() * lower))
  }
    console.log(pwd);
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var characters = lower;
  window.confirm("would you like lowercase letters?") ? lower -= lower : "";
  window.confirm("would you like uppercase letters?") ? lower += upper : "";
  window.confirm("would you like numbers?") ? lower += num : "";
  window.confirm("would you like symbols?") ? lower += sym : "";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
