const viewbutton = document.querySelectorAll(".card-description button");
for(let i=0 ;i< viewbutton.length; i++){
    viewbutton[i].addEventListener("click", function () {
        window.location.href = "pages/recently-product-item-page.html";

      });
}