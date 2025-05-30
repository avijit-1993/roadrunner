// =================if cart emplt , go to collection=========

if (data.cart.length == 0) {

    window.location.href = "collection.html"
}

// =================toatal quantity=========

function totalItem(){

 let totalQnty=0;

data.cart.forEach(element => {
   
totalQnty += element.onty 

});

document.getElementById("total-qnty").innerText = totalQnty;

data.totalQnt= totalQnty

localStorage.setItem("data", JSON.stringify(data));

}

totalItem()


// =================toatal price=========



function totalPrice(){

    let total_price = 0;

    data.cart.forEach(element => {
   
        total_price += element.onty * element.newPrice

        
    });


    document.getElementById("subTotal").innerText = `$${total_price.toFixed(2)}`
    document.getElementById("finalTotal").innerText = `$${total_price.toFixed(2)}`

     data.totalPrice=total_price.toFixed(2)

     localStorage.setItem("data", JSON.stringify(data));

     

    

}

totalPrice()


// ==================================================



let dataDiv = document.getElementById("pro-table-wrap");
let summeryDiv = document.getElementById("summery_div");

dataDiv.innerHTML="";


data.cart.map((item)=>{
    dataDiv.innerHTML +=`<div class="pro-table">
                            <div class="pro-img">
                                <div class="pro-img-itm">
                                    <img src="images/${item.imagePath}" alt="RoadRunner" />
                                </div>
                                <div class="pro-img-text">
                                    <h6>${item.name}</h6>
                                    <p class="mb-0">$${item.newPrice.toFixed(2)} X <span id="pro-qnt-${item.id}">${item.onty}</span></p>
                                </div>
                            </div>
                            <div class="pro-qnt">
                                <div class="qnt-btn">
                                    <button class="checkQnt" data-id="minus" data-targetPro = "${item.id}">-</button>
                                    <span id="data-${item.id}" class="qntVal">${item.onty}</span>
                                    <button class="checkQnt" data-id="plus" data-targetPro = "${item.id}">+</button>
                                </div>
                            </div>
                            <div class="pro-total" id="pro-total-${item.id}">$${(item.onty * item.newPrice.toFixed(2)).toFixed(2)}</div>
                            <div class="pro-remove">
                                <button class="trash-btn" data-item="${item.id}"><img src="images/Trash.svg" alt="RoadRunner" /></button>
                            </div>
                        </div>`
})


data.cart.map((item)=>{
    summeryDiv.innerHTML +=`<div class="pro-sumry">
                                <div class="pro-sumry-item">
                                    <div class="pro-sumry-item-img">
                                        <img src="images/${item.imagePath}" alt="RoadRunner" />
                                    </div>
                                    <div class="pro-sumry-item-text">
                                        <p class="mb-1">${item.name}</p>
                                        <p class="mb-0">$${item.newPrice.toFixed(2)} X <span id="sum-pro-qnt-${item.id}">${item.onty}</span></p>
                                    </div>
                                </div>
                                <div class="pro-sumry-total">
                                    <p class="mb-0" id="sum-pro-total-${item.id}">$${(item.onty * item.newPrice.toFixed(2)).toFixed(2)}</p>
                                </div>
                            </div>`
})



document.querySelectorAll(".checkQnt").forEach((item)=>{

    item.onclick=function(){

        let buttonTarget = this.getAttribute("data-id");

        let dataTarget = this.getAttribute("data-targetPro");

        let findItemIndex = data.cart.findIndex((item)=> item.id == dataTarget);

        let actualQnt = data.cart[findItemIndex].onty;

        let proPrice = data.cart[findItemIndex].newPrice;

        if(buttonTarget == "plus"){

            document.querySelector(`#data-${dataTarget}`).innerText = actualQnt +1;

            

            document.querySelector(`#pro-total-${dataTarget}`).innerText = `$${parseInt((actualQnt+1) * proPrice).toFixed(2)}`;
            document.querySelector(`#sum-pro-total-${dataTarget}`).innerText = `$${parseInt((actualQnt+1) * proPrice).toFixed(2)}`;

            document.querySelector(`#pro-qnt-${dataTarget}`).innerText = `${parseInt(actualQnt + 1)}`;
            document.querySelector(`#sum-pro-qnt-${dataTarget}`).innerText = `${parseInt(actualQnt + 1)}`;

            // document.querySelector(`#total-qnty`).innerText = `${parseInt(actualQnt + 1)}`;
            

            data.cart[findItemIndex].onty +=1;

            totalItem();
            totalPrice();

            localStorage.setItem("data", JSON.stringify(data));

        } else if(buttonTarget == "minus" && actualQnt >1){

            document.querySelector(`#data-${dataTarget}`).innerText = actualQnt -1;
            
            document.querySelector(`#pro-total-${dataTarget}`).innerText = `$${parseInt((actualQnt-1) * proPrice).toFixed(2)}`;
            document.querySelector(`#sum-pro-total-${dataTarget}`).innerText = `$${parseInt((actualQnt-1) * proPrice).toFixed(2)}`;

            document.querySelector(`#pro-qnt-${dataTarget}`).innerText = `${parseInt(actualQnt - 1)}`;
            document.querySelector(`#sum-pro-qnt-${dataTarget}`).innerText = `${parseInt(actualQnt - 1)}`;

            // document.querySelector(`#total-qnty`).innerText = `${parseInt(actualQnt - 1)}`;

           

            data.cart[findItemIndex].onty -=1;

             totalItem();
             totalPrice();

            localStorage.setItem("data", JSON.stringify(data));

        } else{

            
            let newcart =  data.cart.filter((item)=> item.id != dataTarget);
            data.cart = newcart;
            localStorage.setItem("data", JSON.stringify(data));

            location.reload();
        }
       
    }
})







// ==================trash-button==========================


document.querySelectorAll(".trash-btn").forEach((item)=>{
    item.onclick=function(){

        let targetItem = this.getAttribute("data-item");
        let newcart =  data.cart.filter((item)=> item.id != targetItem);
        data.cart = newcart;
        localStorage.setItem("data", JSON.stringify(data));

        location.reload();
    }
})






// =================checkout=====================

document.querySelector("#ptc-btn").addEventListener("click",function(){

    

    let checkoutT_price = 0;

    data.cart.forEach(element => {
   
        checkoutT_price += element.onty * element.newPrice

        
    });


    data.checkoutProductList.product=[...data.cart];

    data.checkoutProductList.checTotalPrice = checkoutT_price.toFixed(2);

    localStorage.setItem("data", JSON.stringify(data));


    window.location.href=`checkout.html`
})