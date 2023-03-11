fetch('../CyberSecurityObjects.json')
  .then(response => response.json())
  .then(data => {
      console.log(data)
        let threadContents = document.getElementById("threadContents");
        let author = document.getElementById("author");
        let title = document.getElementById("title");
        title.textContent = data.threads[1] ["title"];
        author.textContent = "Author: "+ data.threads[1] ["author"]
        threadContents.textContent = data.threads[1] ["contents"];
        console.log(topThreadsLink);
  })
  .catch(error => {
    console.error('Error loading data:', error);
  });