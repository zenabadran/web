const searchcontainer = document.getElementById("search-container");
const dropdownmaincontainer = document.getElementsByClassName(
  "dropdown-main-container"
);
const hoverdropdownlist = document.getElementsByClassName(
  "hover-dropdown-list"
);
document
  .getElementById("search-button")
  .addEventListener("click", function (event) {
    searchcontainer.style.display = "block";
    for (let i = 0; i < 6; i++) {
      // dropdownmaincontainer[i].style.zIndex="-2" ;
      hoverdropdownlist[i].style.pointerEvents = "none";
      hoverdropdownlist[i].style.cursor = "pointer";
    }

    event.stopImmediatePropagation();
  });
document.body.addEventListener("click", function (evt) {
  searchcontainer.style.display = "none";
  for (let i = 0; i < 6; i++) {
    hoverdropdownlist[i].style.pointerEvents = "auto";
  }
  searchcontainer.reset();
});
