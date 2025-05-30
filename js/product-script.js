const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('productId');

let IsOnCart = data.cart.findIndex((item) => item.id == myParam);

let itemObject = data.item.findIndex((item) => item.id == myParam);


if (itemObject < 0) {

    window.location.href = "index.html"
}

if (IsOnCart > -1) {


    let sizeChoosen = data.cart[IsOnCart].sizeSelected;
    let qntyChoosen = data.cart[IsOnCart].onty;

    const { name, oldPrice, newPrice, description, onty, imagePath, id, sizeAvailable, sizeSelected } = data.cart[IsOnCart]

    let sizeHTML = "";


    sizeAvailable.forEach((item, index) => {

        if (item === sizeSelected) {
            sizeHTML += `<span class="sizeAction active">${item}</span>`
        } else {

            sizeHTML += `<span class="sizeAction">${item}</span>`
        }


    })



    document.getElementById("pd-content").innerHTML = `
    <div class="pd-wrapper">
               <div class="pd-img">
                  <img src="images/${imagePath}"  class="w-100" alt="RoadRunner" />
               </div>
               <div class="pd-text">
                  <h3>${name}</h3>
                  <h6><img src="images/pro-review.svg" alt="RoadRunner" /> 7 reviews</h6>
                  <p class="info-pro">${description}.</p>
                  <div class="pro-priceBox">
                     <span>$${oldPrice}.00</span>
                     <span>$${newPrice}.00</span>
                     <span>In Stock</span>
                  </div>
                  <div class="proSize">
                     <label>Size:</label>
                     
                     
                    ${sizeHTML}
                     
                  </div>
                  <label>Quantity:</label>
                  <div class="proQnt_btnBOx">
                     
                     <div class="qnt-btn">
                        
                        <button class="checkQnt" data-id="minus">-</button>
                        <span id="qntyText">${onty}</span>
                        <button class="checkQnt" data-id="plus">+</button>
                     </div>
                     <div class="bag-btn">
                        <button id="gotoCart">GO TO BAG</button>
                     </div>
                     <div class="wish-btn ${data.cart[IsOnCart].isWishItem ? "wishAdded" : ""}" data-id=${id}>
                        <button class="wish-icon"><img src="images/wish.png" alt="RoadRunner" /></button>
                        <button class="wish-fill-icon"><img src="images/wish-filled.png" alt="RoadRunner" /></button>
                     </div>
                  </div>
                  <button class="buy-btn" id="buy-btn">BUY IT NOW</button>
               </div>
            </div>`

    document.querySelectorAll(".sizeAction").forEach((item) => {

        item.addEventListener("click", function () {

            document.querySelectorAll(".sizeAction").forEach((item) => {
                item.classList.remove("active")
            })

            this.classList.add("active");

            sizeChoosen = parseInt(item.innerHTML);


        })

    });


    document.querySelectorAll(".checkQnt").forEach((item) => {

        item.onclick = function () {



            let action = this.getAttribute("data-id");


            let value = parseInt(document.getElementById("qntyText").innerText);


            if (action == "plus") {





                document.getElementById("qntyText").innerText = value + 1;


                qntyChoosen = value + 1;





            } else {

                if (value > 1) {



                    document.getElementById("qntyText").innerText = value - 1;

                    qntyChoosen = value - 1;





                }

            }
        }
    })


    document.querySelector("#gotoCart").addEventListener("click", function () {

        let MOdifyItem = { ...data.item[itemObject], onty: qntyChoosen, sizeSelected: sizeChoosen }

        data.cart[IsOnCart] = MOdifyItem

        localStorage.setItem("data", JSON.stringify(data));



        window.location.href = `cart.html`

    })


    document.querySelector("#buy-btn").addEventListener("click", function () {

        let filterItem = { ...data.cart[IsOnCart], onty: qntyChoosen, sizeSelected: sizeChoosen }

        data.checkoutProductList.product=[filterItem];

        data.checkoutProductList.checTotalPrice = (qntyChoosen * data.item[itemObject].newPrice).toFixed(2)

        localStorage.setItem("data", JSON.stringify(data));


        window.location.href = `checkout.html`

    })


} else {

    let sizeChoosen = data.item[itemObject].sizeSelected;
    let qntyChoosen = data.item[itemObject].onty;

    const { name, oldPrice, newPrice, description, onty, imagePath, id, sizeAvailable, sizeSelected } = data.item[itemObject];

    let sizeHTML = "";


    sizeAvailable.forEach((item, index) => {

        if (item == sizeSelected) {
            sizeHTML += `<span class="sizeAction active">${item}</span>`
        } else {

            sizeHTML += `<span class="sizeAction">${item}</span>`
        }


    })

    document.getElementById("pd-content").innerHTML = `<div class="pd-wrapper">
               <div class="pd-img">
                  <img src="images/${imagePath}"  class="w-100" alt="RoadRunner" />
               </div>
               <div class="pd-text">
                  <h3>${name}</h3>
                  <h6><img src="images/pro-review.svg" alt="RoadRunner" /> 7 reviews</h6>
                  <p class="info-pro">${description}.</p>
                  <div class="pro-priceBox">
                     <span>$${oldPrice}.00</span>
                     <span>$${newPrice}.00</span>
                     <span>In Stock</span>
                  </div>
                  <div class="proSize">
                     <label>Size:</label>
                     
                     
                    ${sizeHTML}
                     
                  </div>
                  <label>Quantity:</label>
                  <div class="proQnt_btnBOx">
                     
                     <div class="qnt-btn">
                        
                        <button class="checkQnt" data-id="minus">-</button>
                        <span id="qntyText">${onty}</span>
                        <button class="checkQnt" data-id="plus">+</button>
                     </div>
                     <div class="bag-btn">
                        <button id="adDtoCart">ADD TO BAG</button>
                     </div>
                     <div class="wish-btn ${data.item[itemObject].isWishItem ? "wishAdded" : ""}" data-id=${id}>
                        <button class="wish-icon"><img src="images/wish.png" alt="RoadRunner" /></button>
                        <button class="wish-fill-icon"><img src="images/wish-filled.png" alt="RoadRunner" /></button>
                     </div>
                  </div>
                  <button class="buy-btn" id="buy-btn">BUY IT NOW</button>
               </div>
            </div>`


    document.querySelectorAll(".sizeAction").forEach((item) => {

        item.addEventListener("click", function () {

            document.querySelectorAll(".sizeAction").forEach((item) => {
                item.classList.remove("active")
            })

            this.classList.add("active");

            sizeChoosen = parseInt(item.innerHTML);


        })

    });


    document.querySelectorAll(".checkQnt").forEach((item) => {

        item.onclick = function () {



            let action = this.getAttribute("data-id");


            let value = parseInt(document.getElementById("qntyText").innerText);


            if (action == "plus") {





                document.getElementById("qntyText").innerText = value + 1;


                qntyChoosen = value + 1;




            } else {

                if (value > 1) {



                    document.getElementById("qntyText").innerText = value - 1;

                    qntyChoosen = value - 1;



                }

            }
        }
    })


    document.querySelector("#adDtoCart").addEventListener("click", function () {

        let MOdifyItem = { ...data.item[itemObject], onty: qntyChoosen, sizeSelected: sizeChoosen }

        data.cart.push(MOdifyItem)

        localStorage.setItem("data", JSON.stringify(data));



        window.location.href = `cart.html`

    })


    document.querySelector("#buy-btn").addEventListener("click", function () {

        let filterItem = { ...data.item[itemObject], onty: qntyChoosen, sizeSelected: sizeChoosen };


        data.checkoutProductList.product=[filterItem];

        data.checkoutProductList.checTotalPrice = (qntyChoosen * data.item[itemObject].newPrice).toFixed(2)

        localStorage.setItem("data", JSON.stringify(data));




        window.location.href = `checkout.html`

    })



}



// console.log(itemObject)


// ========================most-popular===============

let mostPop = data.item.filter((itm) => itm.mostPopular);

mostPop = mostPop.filter((item) => item.id != myParam)



let mostPopTarget = document.getElementById("popular-container");

mostPopTarget.innerHTML = "";


mostPop.map((item) => {

    mostPopTarget.innerHTML += `


       
                           <div class="arr-pro-box">
                              <div class="apb-img position-relative">
                                 <img src="images/${item.imagePath}" class="w-100" alt="RoadRunner" />
                                 <div class="opt-btn">
                                  
                                    <span class="apb-view" data-id=${item.id}>
                                       <img src="images/opt-eye.svg"    alt="RoadRunner" />
                                    </span>
                                    
                                 </div>
                                 <span class="apb-wishlist ${item.isWishItem ? "wishAdded" : ""}" data-id=${item.id} data-dispatch="addWishlist">
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
                              
                           </div>
                         `

});

// onlcikc open single product page=======================

document.querySelectorAll(".apb-view,.title-link").forEach((item) => {

    item.onclick = () => {

        window.location.href = `product.html?productId=${item.getAttribute("data-id")}`
    }

})



// wishlist icon=======================

document.querySelectorAll(".apb-wishlist,.wish-btn").forEach((cartIcon) => {

    cartIcon.onclick = function () {



        let isItemOnCart = data.cart.findIndex((item) => item.id == cartIcon.getAttribute("data-id"));

        var isAlreadyAdded = data.wishlist.findIndex((item) => item.id == cartIcon.getAttribute("data-id"));


        const targetItem = data.item.findIndex((item) => item.id == cartIcon.getAttribute("data-id"));



        if (isAlreadyAdded < 0) {

            if (isItemOnCart > -1) {

                data.cart[isItemOnCart].isWishItem = true;

            }

            data.item[targetItem].isWishItem = true;

            data.wishlist.push(data.item[targetItem]);

            this.classList.add("wishAdded")

            localStorage.setItem("data", JSON.stringify(data));

            




        } else {

            if (isItemOnCart > -1) {

                data.cart[isItemOnCart].isWishItem = false;

            }

            data.item[targetItem].isWishItem = false;
            let newWishList = data.wishlist.filter((item) => item.id != cartIcon.getAttribute("data-id"));
            data.wishlist = newWishList
            this.classList.remove("wishAdded")
            localStorage.setItem("data", JSON.stringify(data));

            


        }






    }

})

