let createAccountButton = document.getElementById("accountSubmitButton");
let userNameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let errorLabel = document.getElementById("errorLabel");
var asciiStartCapLetter = 65;
var asciiCapEndLetter = 90;
var asciiLowerStartCharacter = 97;
var asciiLowerEndLetter = 122;

createAccountButton.addEventListener("click", function () {
  errorLabel.innerHTML = "";
  try {
    if (userNameInput.value.length < 8) {
      throw "Username must be at least 8 characters long.";
    }
    if (
      userNameInput.value.charCodeAt(0) < asciiStartCapLetter ||
      userNameInput.value.charAt(0) > asciiCapEndLetter
    ) {
      throw "Username must start with a letter.";
    }
    if (
      userNameInput.value.charCodeAt(0) < asciiLowerStartCharacter ||
      userNameInput.value.charCodeAt(0) > asciiLowerEndLetter
    ) {
      throw "Username must start with a letter.";
    }
    window.alert(
      "Account created!\n Welcome to bitHaven, " + userNameInput.value
    );
  } catch (error) {
    errorLabel.innerHTML = error;
  }
});
