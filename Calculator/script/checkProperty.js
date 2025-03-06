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
}