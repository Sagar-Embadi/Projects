// import { today } from "../home/home.js"
// Set the input's default value to today's date
const today = new Date().toISOString().split('T')[0];
document.getElementById('date').innerText= `${today}`

let seatInfo = JSON.parse(localStorage.getItem("seatInfo"))
let busData = JSON.parse(localStorage.getItem("busData"))
let passengersInfo = JSON.parse(localStorage.getItem("passengersInfo"))
document.getElementById("pickup").innerText=`${busData.origin}`
document.getElementById("drop").innerText=`${busData.destination}`
document.getElementById("operator").innerText=`${seatInfo.operator}`
document.getElementById("type").innerText=`${seatInfo.type}`
document.getElementById("busNo").innerText=`${seatInfo.bus_id}`
document.getElementById("arrival_time").innerText=`${seatInfo.arrival_time}`
document.getElementById("departure_time").innerText=`${seatInfo.departure_time}`

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
            <td>seatNo</td>
    `
    passDiv.appendChild(passCard)

});