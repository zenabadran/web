
let product = document.getElementById("swiper-wrapper");
let featuredcategorieswrapper = document.getElementById(
  "featured-categories-wrapper"
);
let recentlyviewedproducts = document.getElementById("swiper-wrapper2");
fetch("https://fakestoreapi.com/products?limit=12")
  .then((res) => res.json())
  .then((json) => {
    for (let i = 0; i < json.length; i++) {
      product.innerHTML += `
      <div  class="swiper-slide">
        <div class="recent-news-img">
          <img class="recent-image"  src="${json[i].image}" alt="clothes">
        </div>
        <h2 class="recent-news-title">${json[i].title}</h2>
        <p class="recent-news-discreption">${json[i].description}</p>
        <a href="javascript:;">Read More<span class="material-symbols-outlined">arrow_right_alt</span></a>
      </div>
      `;
      featuredcategorieswrapper.innerHTML += `
      <div class="featured-categories-card">
        <img src="${json[i].image}" alt="boiler" />
        <a href="javascript:;">${json[i].title}<span class="material-symbols-outlined">arrow_right_alt</span></a>
      </div>
      `;
      recentlyviewedproducts.innerHTML += `
      <div class="swiper-slide Slider2">
          <div class="slide-wrapper">
              <div class="gradient">
                  <span> ${json[i].category}</span>
              </div>
              <img src="${json[i].image}" alt="boiler" />

              <div class="card-description">
                 <h5>${json[i].title}</h5>
                 <span> <span> CB Part #:</span> <span>${json[i].rating.rate}</span> </span>
                 <button>VIEW DETAILS</button>
              </div>
            </div>
        </div>
      `;
    }
    const viewbutton = document.querySelectorAll(".card-description button");
    for(let i=0 ;i< viewbutton.length; i++){
      viewbutton[i].addEventListener("click", function () {
           window.location.href = "views/recently-product-item-page.html?page/"+json[i].id;
        });
    }
  });
