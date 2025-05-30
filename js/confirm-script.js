


if(!data.userDetails.name){

    window.location.href="collection.html"

}

const {name:fname,country,state,address,poseCode,phone,email}=data.userDetails;

let userDetai = document.getElementById("user-details-box");

userDetai.innerHTML=`<div class="user-detai-text">
                                <p>Name</p>
                                <p>${fname}</p>
                            </div>
                            <div class="user-detai-text">
                                <p>Address</p>
                                <p>${address} <br>${state} ${poseCode}, ${country}</p>
                            </div>
                            <div class="user-detai-text">
                                <p>Email</p>
                                <p>${email}</p>
                            </div>
                            <div class="user-detai-text">
                                <p>Phone</p>
                                <p>${phone}</p>
                            </div> `



let summeryDiv = document.getElementById("summery_div");


document.getElementById("subTotal").innerText =`${data.checkoutProductList.checTotalPrice}`;
document.getElementById("finalTotal").innerText = `${data.checkoutProductList.checTotalPrice}`

data.checkoutProductList.product.map((item)=>{
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
});


setTimeout(()=>{

data.checkoutProductList={
        product:[],
        checTotalPrice:0,
    }

    data.userDetails = {
        name:"",
        country:"",
        state:"",
        address:"",
        poseCode:"",
        email:"",
        phone:"",
        
    }
    

localStorage.setItem("data", JSON.stringify(data));

},10000)