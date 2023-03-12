let messageBox = document.getElementById("message-inputBox");
let postButton = document.getElementById("postButton");

postButton.addEventListener("click", function () {
  if (messageBox.value.length == 0) {
    alert("You must enter a message in the text box to submit a post");
  } else {
    alert("Your Message: " + messageBox.value + "\n has been sent!");
  }
});
