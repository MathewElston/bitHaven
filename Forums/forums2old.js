feedContainer = document.querySelector(".feedContainer");
username = document.getElementById("usernameText");
postText = document.getElementById("postBox");
button = document.getElementById("postButton");

button.addEventListener("click", function () {
  let newPost = document.createElement("div");
  newPost.classList.add("post");
  let newAuthor = document.createElement("div");
  newAuthor.classList.add("author");

  newPost.innerHTML = postText.value;
  newAuthor.innerHTML = username.value;
  feedContainer.prepend(newPost);
  feedContainer.prepend(newAuthor);
  postText.value = "";
  postText.value = "";
});
