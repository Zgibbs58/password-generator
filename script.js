
var generateBtn = document.querySelector("#generate");

function generatePassword(length) {
  //all code goes here look at alerts, prompts 
  let characters = prompt("How many characters?")
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  var password = ""
  for (let i = 0; i < characters; i++) {
    var randCharset = charset.charAt(Math.floor(Math.random() * charset.length));
    password += randCharset
  }
  return password;
}

console.log(generatePassword(10));

// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Hint strings are iterable
// look up prompts for javascript