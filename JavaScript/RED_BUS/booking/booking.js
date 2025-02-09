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
        seat.innerHTML = `<i class="fa-solid fa-couch"></i>`
        seat.className = "seat"
        seat.setAttribute("title", `Seat No: ${seatNo}`)
        seat.setAttribute("value", `${seatNo}`)
        seatNo += 1
    } else if (x == "aisle") {
        seat.className = "aisle"
    } else {
        seat.innerHTML = `<i class="fa-solid fa-couch"></i>`
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
    // console.log(selectedSeats);
    
}

document.getElementById("pickup").innerText=`${busData.origin.toUpperCase()}`
document.getElementById("arrival_time").innerText=`${seatInfo.arrival_time}`
document.getElementById("drop").innerText=`${busData.destination}`
document.getElementById("departure_time").innerText=`${seatInfo.departure_time}`

document.querySelector(".seatcontainer").addEventListener("click",()=>{
    let slider = document.getElementById("slide")
    slider.style.display="none"

})
document.getElementById("closing").addEventListener("click",()=>{
    let slider = document.getElementById("slide")
    slider.style.display="none"
    
})

let bookingBtn = document.getElementById("bookingBtn")
bookingBtn.addEventListener("click",()=>{
    const selectedSeats = Array.from(document.querySelectorAll('.seat.selected')).map(seat => seat.getAttribute("value"));
    if (!selectedSeats.length){
        alert("Select minimum 1 seat to continue")
    }else{
        let slider = document.getElementById("slide")
        slider.style.display="block"
        slider.className="animate__slideOutLeft"
        slider.style.right="0px"
    }
    // console.log(selectedSeats);
    
    let passengerCards = document.getElementById("passengerInfoCards")
    passengerCards.innerHTML=''
    selectedSeats.forEach((x, index) => {
        let card = document.createElement("div")
        card.className="cards"
        card.innerHTML=`
        <div class="passengerNo_seatNo">
            <span>Passenger</span>
            <span id="passengerNo">${index+1}</span>
            <span>|</span>
            <span>Seat</span>
            <span id="seatNo">${x}</span>
          </div>
          <div class="nameDiv">
            <label for="name${index+1}">Name</label>
            <input type="text" id="name${index+1}" placeholder="Name" required>
          </div>
          <div class="gender_age">
            <div class="gender">
              <p>Gender</p>
              <div>
                <input type="radio" name="gender${index}" id="male${index+1}" required> <label for="male${index+1}">Male</label>
                <input type="radio" name="gender${index}" id="female${index+1}" required> <label for="female${index+1}">Female</label>
              </div>
            </div>
            <div class="age">
              <p>AGE</p>
              <input type="number"  id="age${index+1}" required placeholder="AGE">
            </div>
          </div>
        `
        passengerCards.append(card)
    })
})
let slideForm = document.getElementById('passengersData')
slideForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const selectedSeats = Array.from(document.querySelectorAll('.seat.selected')).map(seat => seat.getAttribute("value"));
    let PassengerDetails = []
    selectedSeats.forEach((x,index)=>{
    
        let obj = {
            seat:x,
            name:document.getElementById(`name${index+1}`).value,
            male : document.getElementById(`male${index+1}`).checked,
            female : document.getElementById(`female${index+1}`).checked,
            age : document.getElementById(`age${index+1}`).value,
            email: document.getElementById(`email`).value,
            phone: document.getElementById(`phone`).value
        }
        // console.log(obj);
        PassengerDetails.push(obj)
    })
    localStorage.setItem("passengersInfo",JSON.stringify(PassengerDetails))
    location.href="../payment/payment.html"
    // console.log(PassengerDetails);
})

// document.getElementById("submit").addEventListener("click",(e)=>{
//     e.preventDefault()
//     let email = document.getElementById("email").value
//     let phone = document.getElementById("phone").value
//     let name = document.getElementById('name').value
//     let age = document.getElementById('age').value
//     let male = document.getElementById('male').checked
//     console.log(email,phone,name,age, male);
// })

