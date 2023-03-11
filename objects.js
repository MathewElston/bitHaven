/*
File name: Objects.js
*/

function user (username) {
    this.username = username;
    totalPosts = 0;
    function post(postElement, contents) {
        postElement.textContent = contents;
        totalPost++;
    }
    function createThread(postElement,title,author,contents) {
        this.username = author;
        thread(title,author,contents)
        postElement.textContent = contents
    }}
function thread(title, author, contents) {
    this.title = title;
    this.author = author;
    this.contents = contents;
}