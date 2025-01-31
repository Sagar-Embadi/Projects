let busData = JSON.parse(localStorage.getItem("busData"))
let seatInfo = JSON.parse(localStorage.getItem("seatInfo"))
let passengerData = JSON.parse(localStorage.getItem("passengersInfo"))
// console.log(busData);

let pickup = document.getElementById("pickup_nav")
pickup.innerText=`${busData.origin}`
pickup.style.textTransform = 'uppercase'

let dropIng = document.getElementById("drop_nav")
dropIng.innerText=`${busData.destination}`
dropIng.style.textTransform = 'uppercase'

// Code for payment Timer 
const timer = setInterval(start,1000)
let min = 5
let sec = 60
function start(){
    sec--
    if (sec === -1){
        sec = 59
        min--
    }
    let time
    if (sec < 10){
    time = `${min}:0${sec}`
    }else{
    time = `${min}:${sec}`
    }
    document.getElementById("timer").innerText=`${time}`
    if (min === 0 && sec === 0){
        clearInterval(timer)
        alert("Payment Time Out")
        location.href="../booking/booking.html"
}
}

document.getElementById("operator").innerText=`${seatInfo.operator}`
document.getElementById("bus_type").innerText=`${seatInfo.type}`
// date line
document.getElementById("time").innerText=`${seatInfo.arrival_time}`
document.getElementById("seatCount").innerText=`${passengerData.length}`
let pickIng = document.getElementById("pickup")
pickIng.innerText=`${busData.origin}`
pickIng.style.textTransform = 'uppercase'

let drop = document.getElementById("drop")
drop.innerText=`${busData.destination}`
drop.style.textTransform = 'uppercase'

let passengersDetailsDiv = document.querySelector(".passengersDetails")
passengerData.forEach( x => {
    let gender
    if (x.male){
        gender = "M"
    }else{
        gender = "F"
    }
    let card = document.createElement("div")
    card.innerHTML=`
    <span class="passengerName">${x.name}</span>
    <span class="passengerAgeGender">(${x.age}, ${gender})</span>
    `
    passengersDetailsDiv.appendChild(card)
});

document.getElementById("email").innerText=`${passengerData[0].email}`
document.getElementById("phoneNo").innerText=`${passengerData[0].phone}`
let price = (passengerData.length)*seatInfo.price
let coupon = document.getElementById("coupon")

coupon.addEventListener("submit",(e)=>{
    e.preventDefault()
    document.getElementById("couponError").innerText =""
    let couponCode = document.getElementById("coupons").value
    console.log(couponCode);
    price = (passengerData.length)*seatInfo.price
    if (couponCode === "SAGAR150"){
        price-=150
    }else if(couponCode === "NEW250"){
        price-=250
    }else if(couponCode === ""){
        document.getElementById("couponError").innerText = "COUPON CODE CAN'T BE EMPTY"
    }else{
        document.getElementById("couponError").innerText='COUPON CODE NOT FOUND PLEASE RECHECK THE CODE'
    }
    document.getElementById("price").innerText=`${price}`
    document.querySelectorAll("#priceOnCard")[0].innerText=`${price}`
    document.querySelectorAll("#priceOnCard")[1].innerText=`${price}`
    document.querySelectorAll("#priceOnCard")[2].innerText=`${price}`
    document.getElementById("qrcode").innerHTML=""
    document.getElementById("QRBtn").addEventListener("click",()=>{
    
        let paymentLink = `upi://pay?pa=sagarembadi7@oksbi&pn=SagarEmbadi&am=${price}&cu=INR&tr=TXN123456&url=https://projects-sage-nu.vercel.app/`// Get UPI link
        
        document.getElementById("qrcode").innerHTML = ""; // Clear previous QR code
        
        new QRCode(document.getElementById("qrcode"), paymentLink);
    })
})
document.getElementById("price").innerText=`${price}`
document.querySelectorAll("#priceOnCard")[0].innerText=`${price}`
document.querySelectorAll("#priceOnCard")[1].innerText=`${price}`
document.querySelectorAll("#priceOnCard")[2].innerText=`${price}`

function ticketPage(){ setInterval(()=>{
    location.href="../ticket/ticket.html"
},20000)}

document.getElementById("QRBtn").addEventListener("click",()=>{
   
    let paymentLink = `upi://pay?pa=sagarembadi7@oksbi&pn=SagarEmbadi&am=${price}&cu=INR&tr=TXN123456&url=https://projects-sage-nu.vercel.app/`// Get UPI link
    
    document.getElementById("qrcode").innerHTML = ""; // Clear previous QR code
    
    new QRCode(document.getElementById("qrcode"), paymentLink);
    ticketPage()
})
let upi = document.getElementById("upi_payment")
upi.addEventListener("submit",(e)=>{
    e.preventDefault()
    document.getElementById("upiError").innerText=""
    let upiID = document.getElementById('upiId').value.trim()
    if (upiID === "sagar9493@oksbi" || upiID === "mani@okaxis"){
        let UPIbtn = document.getElementById("UPIbtn")
        UPIbtn.style.backgroundColor="crimson"
        UPIbtn.style.pointerEvents="all"
    }else{
        document.getElementById("upiError").innerText="* UPI ID NOT FOUND"
    }
})
document.getElementById("UPIbtn").addEventListener("click",()=>{
    document.getElementById("UPIbtn").style.backgroundColor="rgb(110, 4, 25)"
    setInterval(()=>{
        document.getElementById("UPIbtn").style.backgroundColor="crimson"
    },100)
    ticketPage()
})
document.getElementsByClassName("payment-form")[0].addEventListener("submit",()=>{ticketPage()})
document.getElementsByClassName("payment-form")[1].addEventListener("submit",()=>{ticketPage()})
document.getElementsByClassName("payment-form")[2].addEventListener("submit",()=>{ticketPage()})
document.getElementById("net_banking_btn").addEventListener("click",()=>{ticketPage()})