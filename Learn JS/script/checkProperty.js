const myCheckBox = document.getElementById("myCheckBox");
const visaRadioBtn = document.getElementById("visaRadioBtn");
const masterCardRadioBtn = document.getElementById("masterCardRadioBtn");
const paypalRadioBtn = document.getElementById("paypalRadioBtn");
const submitBtn = document.getElementById("submitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submitBtn.onclick = function(){
    if(myCheckBox.checked)
    {
        subResult.textContent = "You Are Subscribed !";
    }
    else if(!myCheckBox.checked)
    {
        subResult.textContent = "You are NOT Subscribed !";
    }

    if(visaRadioBtn.checked)
    {
        paymentResult.textContent = "You are paying with Visa";
    }
    else if(masterCardRadioBtn.checked)
    {
        paymentResult.textContent = "You are paying with Master Card";
    }
    else if(paypalRadioBtn.checked)
    {
        paymentResult.textContent = "You are paying with Paypal";
    }
    else
    {
        paymentResult.textContent = "Please select you payment !";
    }
}