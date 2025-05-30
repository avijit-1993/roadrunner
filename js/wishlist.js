if (data.wishlist.length == 0) {

    window.location.href = "collection.html"
}


let dataDiv = document.getElementById("pro-table-wrap");

dataDiv.innerHTML="";


data.wishlist.map((item)=>{
    dataDiv.innerHTML +=`<div class="pro-table wish_table">
                            <div class="pro-img">
                                <div class="pro-img-itm">
                                    <img src="images/${item.imagePath}" alt="RoadRunner" />
                                </div>
                                <div class="pro-img-text">
                                    <h6>${item.name}</h6>
                                    <p class="mb-0">$${item.newPrice.toFixed(2)} </p>
                                </div>
                            </div>
                            <div class="pro-qnt">
                               <button data-id="${item.id}">BUY NOW</button>
                            </div>
                            
                            <div class="pro-remove">
                                <button class="trash-btn" data-item="${item.id}"><img src="images/Trash.svg" alt="RoadRunner" /></button>
                            </div>
                        </div>`
})


// ==================tBUY-NOW==========================


document.querySelectorAll(".pro-qnt button").forEach((item)=>{

    item.onclick=function(){

        window.location.href = `product.html?productId=${item.getAttribute("data-id")}`
       
    }


})


// ==================trash-button==========================


document.querySelectorAll(".trash-btn").forEach((item)=>{

    let isItemOnCart = data.cart.findIndex((element) => element.id == item.getAttribute("data-item"));


    let targetItem = data.item.findIndex((element) => element.id == item.getAttribute("data-item"));

    item.onclick=function(){

        let targetId= this.getAttribute("data-item");

        if(isItemOnCart > -1){

            data.cart[isItemOnCart].isWishItem = false;
        } 

        if(targetItem > -1){

            data.item[targetItem].isWishItem = false;
        }


        let newWishlist =  data.wishlist.filter((item)=> item.id != targetId);

        data.wishlist = newWishlist;

        localStorage.setItem("data", JSON.stringify(data));

        location.reload();
    }
})
