const url = window.location.href;

// Regular expression to match the ID
const regex = /\/(\d+)$/;

// Extract the ID from the URL
const match = url.match(regex);




// document.addEventListener("load", FUNCTION);
// const viewbutton = document.querySelectorAll(".card-description button");
 const producttitle=document.getElementById("title");

fetch("https://fakestoreapi.com/products?limit=9")
  .then((res) => res.json())
  .then((json) => {
    if (match) {
      const id = match[1];
      console.log(id); 
       producttitle.innerHTML=json[id].title;
    } else {
      console.log("ID not found in the URL");
    }
      
    
   

// console.log(json[i].title);
// console.log(x);
// producttitle.innerHTML=x;

})
