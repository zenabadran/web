const searchcontainer = document.getElementById("search-container");

document.getElementById("search-button").addEventListener("click", function(event) {
  searchcontainer.style.display = "block";
  event.stopImmediatePropagation();
});
document.body.addEventListener("click", function (evt) {
   
    searchcontainer.style.display = "none";
    
}

);
