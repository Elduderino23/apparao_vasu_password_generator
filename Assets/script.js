// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var general = [];

  var askSpecial = false;
  if (confirm("Do You Want Special Characters!")) {
    askSpecial = true;
    general = symbols.concat(general);
  }
  var askUppercase = false;
  if (confirm("Do You Want Uppercase Characters")) {
    askUppercase = true;
  }
  var askLowercase = false;
  if (confirm("Do You Want Lower Characters")) {
    askLowercase = true;
  }
  var askNumerical = false
  if (confirm("Do You Want Numerical Characters")) {
    askNumerical = true;
  }
  console.log(general)

}

// Write password to the #password input
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "+", "_", "?", "~"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// var lowerCase = ["a"]
// if(works){

// }
// if (password === 1) {
//   console.log("character 1");
// } else if (passwordText === "password") {
//   console.log("password generated");
// } else if (passwordText === "Nada") {
//   console.log("Wrong Password, Please Try Again");
// } else {
//   console.log("Your So Wrong, You Ain't Right");







// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
