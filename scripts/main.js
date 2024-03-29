var btn = document.querySelector ('button');

function changeTitle (){
var title = document.querySelector('#mainTitle');
title.innerHTML += "<br>This new  <u>title</u>  has been changed from JavaScript!";
}

btn.onclick = changeTitle

// otra forma seria
/* <!DOCTYPE html>
<html lang="en">
<head>
  <title>JavaScript and HTML</title>
  <meta charset="utf-8"/>
  <script>
    function changeTitle() {
      var title = document.querySelector("#mainTitle");
      title.innerHTML += "<br>This new <u>title</u> has been changed from JavaScript!";
    }
  </script>
</head>
  <body>
    <h1 id="mainTitle">My home page</h1>

    <p>This is an example of interactivity between JavaScript and the HTML content of a document.</p>
    <button onclick="changeTitle();">Click me to change the title of the page</button>
  </body>
</html>
*/
