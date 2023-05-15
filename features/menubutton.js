const sidemenu = document.getElementById("menu-icon");
const menu = document.getElementById("menu");
const closemenu = document.getElementById("close-menu");

sidemenu.addEventListener("click", function () {
  menu.style.display = "flex";
});

closemenu.addEventListener("click", function () {
  menu.style.display = "none";
});

function myFunction() {
  if (x.matches) {
    menu.style.display = "none";
  }
}
var x = window.matchMedia("(min-width: 1300px)");
myFunction(x);
x.addListener(myFunction);
