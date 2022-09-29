// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var general = [];
  let passwordLength = prompt("How many character do you want? More than 8 but less than 128.");
  var askSpecial = false;
  if (confirm("Do You Want Special Characters!")) {
    askSpecial = true;
    // console.log(askSpecial);
    general.push(symbols);
    // console.log(general)
  }
  var askUppercase = false;
  if (confirm("Do You Want Uppercase Characters")) {
    askUppercase = true;
    general.push(upperCase);
  }
  var askLowercase = false;
  if (confirm("Do You Want Lower Characters")) {
    general.push(lowerCase);
    askLowercase = true;

  }
  var askNumerical = false
  if (confirm("Do You Want Numerical Characters")) {
    general.push(numbers);
    askNumerical = true;

  }
  // var index = Math.floor(Math.random() * general.length);
  // var index2 = Math.floor(Math.random() * general[index].length);
  console.log(general)
  let pw = "";
  console.log(pw);
  for (let i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * general.length);
    var index2 = Math.floor(Math.random() * general[index].length);
    pw = pw + general[index][index2];
    console.log("this is pw: " + pw);
  }

  return pw;
}


// Write password to the #password input
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "+", "_", "?", "~", "(", ")", ";", ",",]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  if (confirm) {

  }
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
