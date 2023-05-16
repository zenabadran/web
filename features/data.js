// document.addEventListener('DOMContentLoaded',function(){
// async function fetchProducts(url){
// let data = await fetch (url);
// let response =await data.json();
// console.log(response);
// };
// fetchProducts('https://fakestoreapi.com/products?limit=5');
// });
const featuredcategoriestitles = document.getElementsByClassName(
  "featured-categories-titles"
);
const featuredcategoriesimg = document.getElementsByClassName(
  "featured-categories-img"
);
const recentimage = document.getElementsByClassName("recent-image");
const recentnewstitle = document.getElementsByClassName("recent-news-title");
const recentnewsdiscreption = document.getElementsByClassName("recent-news-discreption");
const category = document.getElementsByClassName("category");
const recentlyviewedproductsimg = document.getElementsByClassName("recently-viewed-products-img");
fetch("https://fakestoreapi.com/products?limit=9")
  .then((res) => res.json())
  .then((json) => {
    for (let i = 0; i < 7; i++) {
      featuredcategoriestitles[i].innerHTML = json[i].title;
      featuredcategoriesimg[i].src = json[i].image;
    }
    for (let i = 0; i < 9; i++) {
      recentnewstitle[i].innerHTML = json[i].title;
      recentnewsdiscreption[i].innerHTML = json[i].description;
      recentimage[i].src = json[i].image;
    }
    for (let i = 0; i < 5; i++) {
      category[i].innerHTML = json[i].category;
      recentlyviewedproductsimg[i].src= json[i].image;
    }

  });
