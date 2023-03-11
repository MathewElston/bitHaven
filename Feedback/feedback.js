let inputItems = document.querySelectorAll(".boxItems input");
let spanText = document.querySelectorAll(".boxItems span");
let submitButton = document.getElementById("submitButton");

let checkItems = [];

for (let i = 0; i < inputItems.length; i++) {
  inputItems[i].addEventListener("change", function() {
    if (this.checked) {
      checkItems.push(spanText[i].textContent);
    } else {
      let index = checkItems.indexOf(spanText[i].textContent);
      if (index > -1) {
        checkItems.splice(index, 1);
      }
    }
  });
}

// send alert window of selected items
submitButton.addEventListener("click", function() {
    let string = "Your selections are: " + '\n';
    for (let i = 0; i < checkItems.length; i++) {
      string += checkItems[i] + "\n";
    }
    window.alert(string);
  });