let busLayout = document.getElementById("bus_seats")

let seatInfo = JSON.parse(localStorage.getItem("seatInfo"))
let busData = JSON.parse(localStorage.getItem("busData"))

const rows = [
    'available', 'available', "aisle", 'unavailable', 'available', 'available', 'available', "aisle", 'available', 'available',
    'available', 'unavailable', "aisle", 'available', 'available', 'available', 'available', "aisle", 'unavailable', 'available',
    'available', 'available', "aisle", 'unavailable', 'available', 'available', 'available', "aisle", 'available', 'available',
    'available', 'available', "aisle", 'unavailable', 'available', 'available', 'available', "aisle", 'available', 'available',
    'available', 'unavailable', "aisle", 'available', 'available', 'available', 'available', "unavailable", 'unavailable', 'available'
];

let seatNo = 1
rows.forEach((x) => {
    let seat = document.createElement("div")
    if (x == 'available') {
        seat.innerHTML = `<i class="fa-solid fa-bed"></i>`
        seat.className = "seat"
        seat.setAttribute("title", `Seat No: ${seatNo}`)
        seat.setAttribute("value", `${seatNo}`)
        seatNo += 1
    } else if (x == "aisle") {
        seat.className = "aisle"
    } else {
        seat.innerHTML = ` <i class="fa-solid fa-bed"></i>`
        seat.classList = "seat unavailable"
        seat.setAttribute("title", `Seat No: ${seatNo}`)
        seat.setAttribute("value", `${seatNo}`)
        seatNo += 1
    }
    busLayout.appendChild(seat)
})

const seats = document.querySelectorAll('.seat:not(.unavailable)');

seats.forEach(seat => {
    seat.addEventListener('click', () => {
    seat.classList.toggle('selected');
    confirmSelection()
    });
});

function confirmSelection() {
    const selectedSeats = Array.from(document.querySelectorAll('.seat.selected')).map(seat => seat.getAttribute("value"));
    document.getElementById("seatNo").innerText=`${selectedSeats.join(', ')}`
    document.getElementById("price").innerText=`${seatInfo.price * selectedSeats.length}`
}

document.getElementById("pickup").innerText=`${busData.origin.toUpperCase()}`
document.getElementById("arrival_time").innerText=`${seatInfo.arrival_time}`
document.getElementById("drop").innerText=`${busData.destination}`
document.getElementById("departure_time").innerText=`${seatInfo.departure_time}`

let bookingBtn = document.getElementById("bookingBtn")

bookingBtn.addEventListener("click",()=>{
    const selectedSeats = Array.from(document.querySelectorAll('.seat.selected')).map(seat => seat.getAttribute("value"));
    if (!selectedSeats.length){
        alert("Select minimum 1 seat to continue")
    }else{
        location.href="../payment/payment.html"
        
    }
})