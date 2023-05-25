// const url = window.location.href;
// const regex = /\/(\d+)$/;
// const match = url.match(regex);
// var url = new URL(window.location.href); // Get the current URL
var searchParams = new URLSearchParams(window.location.search); // Get the query parameters
var id = searchParams.get('id'); 
const productcontainer=document.getElementById("product-container");
fetch("https://fakestoreapi.com/products?limit=12")
  .then((res) => res.json())
  .then((json) => {
      console.log(id); 
      productcontainer.innerHTML=`
      <img src="${json[id-1].image}" alt="product-image">
            <div class="product-features">
                <h1 id="title">${json[id-1].title}</h1>
                <span id="rate">Rate:${json[id-1].rating.rate}</span>
                <span id="price">Price:${json[id-1].price}$</span> 
                <p>Discreption:${json[id-1].description}</p>
                <span>Category:${json[id-1].category}</span>
                <form class="add-to-cart">
                    <label for="quantity">Quantity:</label>
                    <input type="number" id="quantity" name="quantity" min="1" max="10">
                    <input class="add-to-cart-button" type="button" value="Add to cart">
                </form>
            </div>
      `;
    
 

})
