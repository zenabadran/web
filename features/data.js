// document.addEventListener('DOMContentLoaded',function(){
// async function fetchProducts(url){
// let data = await fetch (url);
// let response =await data.json();
// console.log(response);
// };
// fetchProducts('https://fakestoreapi.com/products?limit=5');
// });
const featuredcategoriestitles =document.getElementsByClassName('featured-categories-titles');
const featuredcategoriesimg= document.getElementsByClassName("featured-categories-img");
fetch('https://fakestoreapi.com/products?limit=7')
            .then(res=>res.json())
            .then(json=>{
                for(let i =0 ;i<7;i++){
                    featuredcategoriestitles[i].innerHTML=json[i].title;
                    featuredcategoriesimg[i].src=json[i].image;
        }
        

            })