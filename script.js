
var generateBtn = document.querySelector("#generate");

function generatePassword(length) {
  //all code goes here look at alerts, prompts, confirms 
  let passwordLength = prompt("Enter the length of password, with at least 8 characters and no more than 128.")
    while (passwordLength < 8 || passwordLength > 128) {
      window.alert("Please use a length between 8 and 128!");
      passwordLength = prompt("Enter the length of password, with at least 8 characters and no more than 128.")
    }
var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
        var password = ""
        for (let i = 0; i < passwordLength; i++) {
        var randCharset = charset.charAt(Math.floor(Math.random() * charset.length));
        password += randCharset;
    }
    return password;
  }

console.log(generatePassword());

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