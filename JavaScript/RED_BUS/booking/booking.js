let busLayout = document.getElementById("bus_layout")
const rows = [
    'available', 'available', "aisle",'unavailable', 'available','available', 'available',"aisle", 'available', 'available',
    'available', 'unavailable', "aisle",'available', 'available', 'available', 'available', "aisle",'unavailable', 'available',
    'available', 'available', "aisle",'unavailable', 'available','available', 'available',"aisle", 'available', 'available',
    'available', 'available', "aisle",'unavailable', 'available','available', 'available',"aisle", 'available', 'available',
    'available', 'unavailable', "aisle",'available', 'available', 'available', 'available', "unavailable",'unavailable', 'available'
    ];
    let seatNo=1
rows.forEach((x)=>{
    let seat = document.createElement("div")
    if (x=='available'){
        seat.innerHTML=`<i class="fa-solid fa-bed"></i>`
        seat.className="seat"
        seat.setAttribute("title",`Seat No: ${seatNo}`)
        seat.setAttribute("value",`${seatNo}`)
        seatNo+=1

    }else if(x=="aisle"){
        seat.className="aisle"
        
    }else{
        seat.innerHTML=` <i class="fa-solid fa-bed"></i>`
        seat.classList="seat unavailable"
        seat.setAttribute("title",`Seat No: ${seatNo}`)
        seat.setAttribute("value",`${seatNo}`)
        seatNo+=1
    }
    busLayout.appendChild(seat)
    
})
const seats = document.querySelectorAll('.seat:not(.unavailable)');

seats.forEach(seat => {
  seat.addEventListener('click', () => {
    seat.classList.toggle('selected');
  });
});
let pricing = document.getElementById("priceContainer")
pricing.innerHTML=`
<div class="price">
<h3>Boarding & Dropping</h3>
<h4>HYD</h4>
<h4>KNR</h4>
<hr>
<h3>Seat No: </h3>
<hr>
<h4>Fare Details</h4>
<p>Amount ${price}</p>
</div>
`
let seatInfo=JSON.parse(localStorage.getItem("seatInfo"))
let priceDiv=document.getElementsByClassName("priceContainer")
function confirmSelection() {
const selectedSeats = Array.from(document.querySelectorAll('.seat.selected')).map(seat => seat.getAttribute("value"));


alert(`You have selected seats: ${selectedSeats.join(', ')}`);
console.log(seatInfo.price*selectedSeats.length);
// console.log(priceDiv[0].innerHTML=`${seatInfo.price}`);   
}
// console.log(seatInfo.price);

