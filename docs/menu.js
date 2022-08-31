// The menu's option arrtibute should be the ISO code associated with the language & HTML page
document.write(`
<nav id="page-header">
  <ul id="language-selection">
    <li id="print"> 🖨 </li>
    <li> | </li>
    <select id="dropdownmenu" onchange="window.location = this.value + '.html' ">
    <option value="index"> p5.js </option>
    <option value="java"> Java </option>
    </select>
    <li> | </li>
    <li>
      ${
        window.location.pathname.includes("java")
          ? `<a href="https://processing.org/reference/">Processing Reference</a>`
          : `<a href="https://p5js.org/reference/">p5js Reference</a>`
      }
    </li>
  </ul>
</nav>

<style>
  #print:hover{cursor:pointer;}
</style>

`);

//select/toggle the correct language from the dropdown after making a selection (there might be a better way to do this?)
//If path points to a directory, user agent will open the "index.html"
//file in it, but will not append it to the window's path name. So treat
//"" as "index.html"
var path = window.location.pathname.split("/").pop();
if (path === "") {
  path = "index.html";
}
var lang = path.split(".")[0];
// console.log( lang );
document.querySelector(`option[value=${lang}]`).selected = true;

//warning for printing to use chrome
document.getElementById("print").addEventListener("click", function () {
  let browser = navigator.userAgent
    .split(")")
    .reverse()[0]
    .match(/(?!Gecko|Version|[A-Za-z]+?Web[Kk]it)[A-Z][a-z]+/g)[0];

  console.log(browser);
  if (browser != "Chrome") {
    alert(
      "The p5.js cheatsheet prints with best results from Chrome! \n You might consider printing from the PDF available on github for better results! \n https://github.com/bmoren/p5js-cheat-sheet"
    );
  }
  print();
});
