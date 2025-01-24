let route_title=document.getElementById("route_title")
let sidebar=document.getElementById("sidebar")
let busList = document.getElementById("buslist")
let busData= JSON.parse(localStorage.getItem("busData"))

route_title.innerHTML=`<h3>${busData.origin.toUpperCase()} &emsp; <i class="fa-solid fa-xmarks-lines"></i><i class="fa-solid fa-xmarks-lines"></i><i class="fa-solid fa-xmarks-lines"></i><i class="fa-solid fa-xmarks-lines"></i><i class="fa-solid fa-xmarks-lines"></i><i class="fa-solid fa-xmarks-lines"></i><i class="fa-solid fa-xmarks-lines"></i><i class="fa-solid fa-xmarks-lines"></i><i class="fa-solid fa-xmarks-lines"></i>&emsp; ${busData.destination.toUpperCase()}</h3>`

let seater = document.getElementById("seater")
let sleeper = document.getElementById("sleeper")
let AC = document.getElementById("AC")
let NonAC = document.getElementById("NonAC")

seater.addEventListener("click",()=>buses("Seater"))
sleeper.addEventListener("click",()=>buses("Sleeper"))
AC.addEventListener("click",()=>buses("AC"))
NonAC.addEventListener("click",()=>buses("Non-AC"))

let arrData=busData.buses

function buses(type=null){

    let filteredData= type ? res=arrData.filter(x=> x.type.includes(type)) : arrData
    busList.innerHTML=""

    filteredData.forEach(x=>{
        let card=document.createElement("div")
        card.className="card"
        card.innerHTML=`
        <div>${x.operator}<br><br>${x.type}</div>
        <div>${x.arrival_time}<br><br>${busData.origin.toUpperCase()}</div>
        <div>${x.departure_time}<br><br>${busData.destination.toUpperCase()}</div>
        <div>${x.price}<br><br><button id="booking">BOOK NOW</button></div>
        `
        busList.appendChild(card)
        card.querySelector("#booking").addEventListener("click",()=>{
            location.href="../booking/booking.html"
            localStorage.setItem("seatInfo",JSON.stringify(x))
        })
    })
}

buses()