let username = document.getElementById("username");
let usernamePattern = new RegExp(username.pattern);
let email = document.getElementById("email");

let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let passwordPattern = new RegExp(password.pattern);
let errorLabel = document.getElementById("errorLabel");
let submitButton = document.getElementById("submitButton");
let inputFields = document.querySelectorAll('input:not([type="button"])');

function inputValidation(event) {
    if (!usernamePattern.test(username.value)) {
        username.setCustomValidity("Your username must be between 4 and 16 characters");
    } else {
        username.setCustomValidity("");
    }
    if (!passwordPattern.test(password.value)) {
        password.setCustomValidity("Must contain at least one letter, one number, and one special character, and be at least 8 characters long.");
    } else if (confirmPassword.value !== password.value ) {
        confirmPassword.setCustomValidity("Passwords must match");
    } else {
        password.setCustomValidity("");
        confirmPassword.setCustomValidity("");
    }
    if (!emailPattern.test(email.value)) {
        email.setCustomValidity("Enter a valid email address");
    } else {
        email.setCustomValidity("");
    }
}

submitButton.addEventListener("click",inputValidation);



