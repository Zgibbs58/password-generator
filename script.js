
var generateBtn = document.querySelector("#generate");

function generatePassword(length) {
  //all code goes here look at alerts, prompts, confirms 
  var passwordLength = prompt("Enter the length of password, with at least 8 characters and no more than 128.")
  //while loop says, while isNan(true), or passwordLength <8 === true, or >128 ===true the while loop will contiue showing alert and then prompt. User will not exit loop until all inputs are false. 
    while ( isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      window.alert("Please enter a valid number!");
      passwordLength = prompt("Enter the length of password, with at least 8 characters and no more than 128.")
    }

    // var splice

    var charset = ""
    

    if (confirm("Include lower case?") === true) {
      charset += "abcdefghijklmnopqrstuvwxyz"
    }

    if (confirm("Include upper case?") === true) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }

    if (confirm("Include numbers?") === true) {
      charset += "0123456789"
    }

    if (confirm("Include special characters?") === true) {
      charset += "!#$%&'()*+,-.:;<=>?@[]^_`{|}~"
    }
    // used to validate at least one character set was selected to continue
    if (charset === "") {
      alert("Please selece at least one character set.")
    }

    var passwordGenerated = ""
      for (let i = 0; i < passwordLength; i++) {
      var randCharset = charset.charAt(Math.floor(Math.random() * charset.length));
      passwordGenerated += randCharset;
  }
  return passwordGenerated;
    


    // abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+
// var charset = "";
  //   if (charset !== "") {
  //     var passwordGenerated = ""
  //     for (let i = 0; i < passwordLength; i++) {
  //     var randCharset = charset.charAt(Math.floor(Math.random() * charset.length));
  //     passwordGenerated += randCharset;
  // }
  // return passwordGenerated;
  //   } else {
  //     alert("Please selece at least one character set.")
  //     passwordGenerated = "Your Secure Password"
  //     return passwordGenerated;
  //   }
       
    
  }

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

