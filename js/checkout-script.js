// =================if cart emplt , go to collection=========

if (data.checkoutProductList.product.length == 0) {

    window.location.href = "collection.html"
}

// =============================

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
})


// ========================================



 const form = document.getElementById('orderForm');

 const fName = document.getElementById("fName");
 const lName = document.getElementById("lName");
 const country = document.getElementById("country");
 const state = document.getElementById("state");
 const address = document.getElementById("address");
 const poseCode = document.getElementById("poseCode");
 const email = document.getElementById("email");
 const phone = document.getElementById("phone");
 const cardUser = document.getElementById("cardUser");
 const cardNumber = document.getElementById("cardNumber");
 const cardDate = document.getElementById("cardDate");
 const cardCvv = document.getElementById("cardCvv");

    form.addEventListener('submit', function(event) {

      event.preventDefault(); 
       
      if(!/^[a-zA-Z]{4,}$/.test(fName.value)){
        alert("Please Enter a Valid First Name");
        return false;
      } else if(!/^[a-zA-Z]{4,}$/.test(lName.value)){
        alert("Please Enter a Valid Last Name");
        return false;
      } else if(country.value == ""){
        alert("Please Select a Valid Country");
        return false;
      } else if(state.value == ""){
        alert("Please Select a Valid State");
        return false;
      } else if(address.value == ""){
        alert("Please Enter a Valid Address");
        return false;
      } else if(!/^\d{5}$/.test(poseCode.value)){
        alert("Please Enter Your 5 Digit Postal Code");
        return false;
      } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
        alert("Please Enter a Valid Email");
        return false;

      } else if(!/^\d{10}$/.test(phone.value)){

        alert("Please Enter Your 10 Digit Phone Number");

        return false;

      } else if(!/^[a-zA-Z]{4,}$/.test(cardUser.value)){

        alert("Please Enter Card Holder Name");

        return false;

      } else if(!/^\d{16}$/.test(cardNumber.value)){

        alert("Please Enter 16 Digit Card Number");

        return false;

      }
      else if(!/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardDate.value)){

        alert("Please Enter Valid Expire Date in (MM/YY) Format");

        return false;

      }
      else if(!/^\d{3}$/.test(cardCvv.value)){

        alert("Please Enter 3 Digit Card Number");

        return false;

      } else{


        data.userDetails = {
        name:fName.value +" "+ lName.value,
        country:country.value,
        state:state.value,
        address:address.value,
        poseCode:poseCode.value,
        email:email.value,
        phone:phone.value,
        
    }

let newCart = data.cart.filter((item)=>{

  return !data.checkoutProductList.product.some(product => product.id === item.id);

});

data.cart = newCart


      localStorage.setItem("data", JSON.stringify(data));

      window.location.href = "thank-you.html"
         
       
      }


    });
