let route_title=document.getElementById("route_title")
let sidebar=document.getElementById("sidebar")
let busList = document.getElementById("buslist")
let busData= JSON.parse(localStorage.getItem("busData"))

route_title.innerHTML=`<h3>${busData.origin.toUpperCase()} &emsp; <i class="fa-solid fa-xmarks-lines"></i><i class="fa-solid fa-xmarks-lines"></i><i class="fa-solid fa-xmarks-lines"></i><i class="fa-solid fa-xmarks-lines"></i><i class="fa-solid fa-xmarks-lines"></i><i class="fa-solid fa-xmarks-lines"></i>&emsp; ${busData.destination.toUpperCase()}</h3>`

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
        <div class="busDetails">
            <div class="operatorDetails">
                <h3>${x.operator}</h3>
                <p>${x.type}</p>
            </div>
            <div class="timeDetails">
                <p>Departure : &emsp14;&emsp14;<span>${x.arrival_time}</span></p>
                <p>Arrival : &emsp14;&emsp14;&emsp14;&emsp14; <span>${x.departure_time}</span></p>
            </div>
            <div class="routeDetails">
                <p>${busData.origin.toUpperCase()}</p>
                <p>${busData.destination.toUpperCase()}</p>
            </div>
            <div class="rating_pricing">
                <div class="rating">
                    <div class="rating_star">⭐ <span id="rate"></span></div>
                    <div class="pass"><span id="pass"></span> Passengers</div>
                </div>
                <div class="fare-section">
                    <div class="fare">INR <span>${x.price}</span></div>
                    <div class="seat-availability">Seats available</div>
                </div>
            </div>
        </div>
        <div class="icons_btn">
            <div class="icons">
                <i class="fa-solid fa-bottle-water"></i>
                <i class="fa-solid fa-plug-circle-bolt"></i>
                <i class="fa-solid fa-ticket"></i>
                <i class="fa-solid fa-bus-simple"></i>
                <i class="fa-solid fa-phone"></i>
                <i class="fa-solid fa-kit-medical"></i>
            </div>
            <button id="booking">View Seats</button>
        </div>`
        busList.appendChild(card)
        card.querySelector("#rate").innerText=`${Math.floor((Math.random() *(5 - 2) + 2)*10)/10}`
        card.querySelector("#pass").innerText=`${Math.floor((Math.random() *10))}`

        card.querySelector("#booking").addEventListener("click",()=>{
            location.href="../booking/booking.html"
            localStorage.setItem("seatInfo",JSON.stringify(x))
        })
    })
}

buses()