let route_title=document.getElementById("route_title")
let sidebar=document.getElementById("sidebar")
let busList = document.getElementById("buslist")
let busData= JSON.parse(localStorage.getItem("busData"))

console.log(busData);

route_title.innerHTML=`<h3>${busData.origin.toUpperCase()} > > > > > ${busData.destination.toUpperCase()}</h3>`

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

    console.log(filteredData)

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
            location.href="./booking.html"
            localStorage.setItem("seatInfo",JSON.stringify(x))
        })
    })
}

buses()



// arrData.filter(x=>{
//         let card=document.createElement("div")
//         card.innerHTML=`
//         <span>${x.operator}</span>
//         <span>${x.arrival_time}</span>
//         <span>${x.departure_time}</span>
//         <span>${x.price}</span>
//         `
//         busList.appendChild(card)
//     })
// seater.addEventListener("click",()=>{
//     busList.innerHTML=""
//     arrData.filter(x=>{
//         if(x.type.includes("Seater")){
//             let card=document.createElement("div")
//             card.innerHTML=`
//             <span>${x.operator}</span>
//             <span>${x.arrival_time}</span>
//             <span>${x.departure_time}</span>
//             <span>${x.price}</span>
//             `
//             busList.appendChild(card)
//         }
//     })
// })