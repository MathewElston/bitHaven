function getCookieValue(name) {
    let cookies = document.cookie.split("; ");
    for (let i=0; i< cookies.length; i++) {
        let cookie = cookies[i].split("=");
        if (cookie[0]=== name) {
            return cookie[1];
        }
    }
    return 0;
  }
  let cookieCount = document.getElementById("cookieCount");
  
  window.addEventListener("load", function() {
    cookieCount.textContent = getCookieValue("cookieCount");
  });