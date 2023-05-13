const searchcontainer = document.getElementById("search-container");
const dropdownmaincontainer=document.getElementsByClassName('dropdown-main-container');

document
  .getElementById("search-button")
  .addEventListener("click", function (event) {
    searchcontainer.style.display = "block";
    for(let i=0 ;i<6;i++){
        dropdownmaincontainer[i].style.zIndex="-2" ;
       
    }
    document.getElementById('hover-dropdown-list').style.pointerEvents="none"
    event.stopImmediatePropagation();
  });
document.body.addEventListener("click", function (evt) {
  searchcontainer.style.display = "none";
  document.getElementById('hover-dropdown-list').style.pointerEvents="auto"
  for(let i=0 ;i<6;i++){
    dropdownmaincontainer[i].style.zIndex="3" ;
}
});
