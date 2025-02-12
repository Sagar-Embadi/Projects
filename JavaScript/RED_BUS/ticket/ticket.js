let seatInfo = JSON.parse(localStorage.getItem("seatInfo"))
let busData = JSON.parse(localStorage.getItem("busData"))
let passengersInfo = JSON.parse(localStorage.getItem("passengersInfo"))
let routeDetails = JSON.parse(localStorage.getItem("routeDetails"))
let price = localStorage.getItem("price")
document.getElementById("pickup").innerText=`${busData.origin}`
document.getElementById("drop").innerText=`${busData.destination}`
document.getElementById('date').innerText=`${routeDetails.date}`
document.getElementById("operator").innerText=`${seatInfo.operator}`
document.getElementById("type").innerText=`${seatInfo.type}`
document.getElementById("busNo").innerText=`${seatInfo.bus_id}`
document.getElementById("arrival_time").innerText=`${seatInfo.arrival_time}`
document.getElementById("departure_time").innerText=`${seatInfo.departure_time}`
document.getElementById("price").innerText=`${price}`


let passDiv = document.getElementById("passengers_list")
passengersInfo.forEach(x => {
    let gender ="F"
    if (x.male){
        gender = "M"
    }
    let passCard = document.createElement("tr")
    passCard.innerHTML=`
            <td>${x.name}</td>
            <td>${x.age} (${gender})</td>
            <td>${x.seat}</td>
    `
    passDiv.appendChild(passCard)

});