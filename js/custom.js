// import { data } from "./product-list";

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.nav-container');
  if (window.scrollY > 20) { 
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});

document.querySelector('button.menu').addEventListener("click",function(){
    document.querySelector('.lan-links-text').classList.toggle("open")
    document.querySelector('body').classList.toggle("open")
})

// let totalCartItem = 0;

// data.cart.forEach(element => {

//   totalCartItem += element.onty
  
// });

if(data.cart.length){
  document.getElementById("cart-qnt").innerHTML = data.cart.length;
} else{
  document.getElementById("cart-qnt").innerHTML = 0;
}


// =====================================

document.querySelector(".cart-page").addEventListener("click",function(){
  window.location.href="cart.html"
})