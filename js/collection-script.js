
// ========================collectiob-page-product===============



let productConatiner = document.getElementById("pro-page-slider");

productConatiner.innerHTML = "";


data.item.map((item) => {

   productConatiner.innerHTML += `


       
                           <div class="arr-pro-box">
                              <div class="apb-img position-relative">
                                 <img src="images/${item.imagePath}" class="w-100" alt="RoadRunner" />
                                 <div class="opt-btn">
                                 
                                    <span class="apb-view" data-id=${item.id}>
                                       <img src="images/opt-eye.svg"    alt="RoadRunner" />
                                    </span>
                                    
                                 </div>
                                 <span class="apb-wishlist ${item.isWishItem? "wishAdded":""}" data-id=${item.id} data-dispatch="addWishlist">
                                       <img src="images/wish-small.png" class="wish-small"  alt="RoadRunner" />
                                       <img src="images/wish-small-filled.png" class="wish-small-filled"  alt="RoadRunner" />
                                    </span>
                              </div>
                              <div class="apb-desc">
                                 <h4 class="pr-name title-link" data-id=${item.id}>${item.name}</h4>

                                 <div class="pro-price">
                                    <div class="pro-price-box">
                                       <p><span class="cross-price">$${item.oldPrice.toFixed(2)}</span> $${item.newPrice.toFixed(2)}</p>
                                    </div>
                                    <div class="pro-review-box">
                                       <img src="images/pro-star.svg" alt="RoadRunner" />
                                       <h4>4.5</h4>
                                    </div>
                                 </div>

                              </div>
                              
                           
                        </div> `

});




// onlcikc open single product page=======================

document.querySelectorAll(".apb-view,.title-link").forEach((item) => {

   item.onclick = () => {
      

      window.location.href = `product.html?productId=${item.getAttribute("data-id")}`
   }

})



// wishlist icon=======================

document.querySelectorAll(".apb-wishlist").forEach((cartIcon) => {

   cartIcon.onclick = function() {

      

      let isItemOnCart = data.cart.findIndex((item) => item.id == cartIcon.getAttribute("data-id"));

      var isAlreadyAdded = data.wishlist.findIndex((item) => item.id == cartIcon.getAttribute("data-id"));


      const targetItem = data.item.findIndex((item) => item.id == cartIcon.getAttribute("data-id"));



      if (isAlreadyAdded < 0 ) {

         if(isItemOnCart > -1){

            data.cart[isItemOnCart].isWishItem = true;

         }

         data.item[targetItem].isWishItem = true;

         data.wishlist.push(data.item[targetItem]);

         this.classList.add("wishAdded")

         localStorage.setItem("data", JSON.stringify(data));

         

         
         

      } else {

         if(isItemOnCart > -1){
            
            data.cart[isItemOnCart].isWishItem = false;

         }

         data.item[targetItem].isWishItem = false;
         let newWishList = data.wishlist.filter((item)=>item.id != cartIcon.getAttribute("data-id"));
         data.wishlist=newWishList
         this.classList.remove("wishAdded")
         localStorage.setItem("data", JSON.stringify(data));

         


      }

     




   }

})




// // add to cart on cart icon click=======================

// document.querySelectorAll(".apb-cart,.apb-wishlist").forEach((cartIcon) => {

//    cartIcon.onclick = () => {

//       const dispatchData = cartIcon.getAttribute("data-dispatch");

//       if (dispatchData === "addCart") {

//          var isAlreadyAdded = data.cart.findIndex((item) => item.id == cartIcon.getAttribute("data-id"));

//       } else {

//          var isAlreadyAdded = data.wishlist.findIndex((item) => item.id == cartIcon.getAttribute("data-id"));

//       }

//       const targetItem = data.item.findIndex((item) => item.id == cartIcon.getAttribute("data-id"));



//       if (isAlreadyAdded === -1 && dispatchData === "addCart") {

//          data.cart.push(data.item[targetItem]);

//          localStorage.setItem("data", JSON.stringify(data));

//          alert("item added to your cart")

//       } else if (isAlreadyAdded === -1 && dispatchData === "addWishlist") {

//          data.wishlist.push(data.item[targetItem]);

//          localStorage.setItem("data", JSON.stringify(data));

//          alert("item added to wishlist")

//       } else if (isAlreadyAdded >= 0 && dispatchData === "addWishlist") {

//          alert("item already in wishlist")


//       }

//       else if (isAlreadyAdded >= 0 && dispatchData === "addCart") {

//          data.cart[isAlreadyAdded].onty += 1;

//          localStorage.setItem("data", JSON.stringify(data));

//          alert("item added")


//          //   console.log(JSON.parse(localStorage.getItem('data')))



//       }




//    }

// })