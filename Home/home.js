const typedText = document.querySelector(".typed-text");
const cursor = document.querySelectorAll(".cursor");
const enterLink = document.querySelector(".enterLink")
const enterText = ".enter()";
const welcomeText = "Welcome to bitHaven";
const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 2000;
let charIndex = 0;
let enterIndex = 0;
let cursorLocation = 0;

function type() {
    if(charIndex < welcomeText.length) {
        // this will help move the cursor to the desired location line.Each time cursorLocation is ++ and if statement will move to the next <span> tag
        if (cursorLocation === 0 ) {
            cursor[0].textContent = "|";
            cursorLocation++;
        }
        typedText.textContent += welcomeText.charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else if (enterIndex < enterText.length) {
        if (cursorLocation === 1){
            cursor[0].textContent ="";
            cursor[1].textContent = "|";
            cursorLocation++;
        }
        enterLink.textContent+=enterText.charAt(enterIndex);
        enterIndex++;
        setTimeout(type, typingDelay);
    }
}
document.addEventListener("DOMContentLoaded",function() {
    setTimeout(type, newTextDelay);
});
