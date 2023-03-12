/*
filename: cyber.js
*/

fetch("CyberSecurityObjects.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let topThreadsLink = document.querySelectorAll(".topThreads a");
    for (let i = 0; i < topThreadsLink.length; i++) {
      topThreadsLink[i].textContent = data.threads[i]["title"];
    }
    console.log(topThreadsLink);
  })
  .catch((error) => {
    console.error("Error loading data:", error);
  });
