let countElement = document.getElementById("cookieCounter");
let cookieCount = getCookieValue("cookieCount");
let fallingCookies = document.getElementById("fallingCookies");
let repeatTime = 500;
let fallSpeed = 3.7;
let maxCookies = 500;

function dropCookies() {
  let cookie = document.createElement("img");
  cookie.className = "cookie";
  cookie.src = "../assets/pixel_cookie.png";
  cookie.width = 50;
  cookie.height = 50;
  cookie.addEventListener("click", function () {
    fallingCookies.removeChild(this);
    cookieCount++;
    countElement.textContent = cookieCount;
    saveCookieCount();
  });
  cookie.style.left = Math.random() * fallingCookies.clientWidth + "px";
  cookie.style.top = "-50px";
  if (fallingCookies.children.length < maxCookies) {
    fallingCookies.appendChild(cookie);
  }
  let fallingLoop = setInterval(function () {
    let top = parseInt(cookie.style.top);
    // check if the cookie hits the bottom, if it does, remove the element.
    if (top >= fallingCookies.clientHeight - 50) {
      clearInterval(fallingLoop);
      fallingCookies.removeChild(cookie);
      return;
    }
    cookie.style.top = top + fallSpeed + "px";
  }, 10);
}

function repeatCookies() {
  setInterval(dropCookies, repeatTime);
}

function setCookie(name, value) {
  let date = new Date();
  date.setFullYear(date.getFullYear() + 1);
  let expiration = "expire=" + date.toUTCString();
  document.cookie = "cookieCount=" + cookieCount + ";" + expiration + ";path=/";
}
function getCookieValue(name) {
  let cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].split("=");
    if (cookie[0] === name) {
      return cookie[1];
    }
  }
  return 0;
}
function saveCookieCount() {
  setCookie("cookieCount", cookieCount);
}
function loadCookie() {
  countElement.textContent = cookieCount;
}
window.addEventListener("load", function () {
  loadCookie();
  repeatCookies();
});
