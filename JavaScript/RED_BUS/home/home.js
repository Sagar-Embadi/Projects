let busTicket = document.getElementById("busTickets")
let trainTicket = document.getElementById("trainTickets")
let busData=document.getElementById("busData")
let trainData=document.getElementById("trainData")

trainData.style.display="none"

busTicket.addEventListener("click",()=>{
  busTicket.style.backgroundColor="#d84e55"
  trainTicket.style.backgroundColor="white"
  busData.style.display="block"
  trainData.style.display="none"
})

trainTicket.addEventListener("click",()=>{
  trainTicket.style.backgroundColor="#d84e55"
  busTicket.style.backgroundColor="white"
  trainData.style.display="block"
  busData.style.display="none"
})

let data =[
    {
      "origin": "hyderabad",
      "destination": "vijayawada",
      "buses": [
        {
          "bus_id": "B001",
          "operator": "VRL Travels",
          "type": "AC Seater",
          "departure_time": "07:00",
          "arrival_time": "12:00",
          "price": 500
        },
        {
          "bus_id": "B002",
          "operator": "Orange Travels",
          "type": "Non-AC Sleeper",
          "departure_time": "08:00",
          "arrival_time": "13:30",
          "price": 400
        },
        {
          "bus_id": "B003",
          "operator": "Morning Star",
          "type": "AC Sleeper",
          "departure_time": "09:00",
          "arrival_time": "14:00",
          "price": 600
        },
        {
          "bus_id": "B004",
          "operator": "Kaveri Travels",
          "type": "Non-AC Seater",
          "departure_time": "10:30",
          "arrival_time": "15:30",
          "price": 350
        },
        {
          "bus_id": "B005",
          "operator": "Sree Travels",
          "type": "AC Sleeper",
          "departure_time": "12:00",
          "arrival_time": "17:00",
          "price": 550
        },
        {
          "bus_id": "B006",
          "operator": "Abhi Bus",
          "type": "Volvo AC Seater",
          "departure_time": "13:30",
          "arrival_time": "18:00",
          "price": 750
        },
        {
          "bus_id": "B007",
          "operator": "Metro Luxury",
          "type": "Non-AC Sleeper",
          "departure_time": "15:00",
          "arrival_time": "20:30",
          "price": 420
        },
        {
          "bus_id": "B008",
          "operator": "SR Travels",
          "type": "AC Sleeper",
          "departure_time": "16:30",
          "arrival_time": "21:30",
          "price": 650
        }
      ]
    },
    {
      "origin": "warangal",
      "destination": "visakhapatnam",
      "buses": [
        {
          "bus_id": "B009",
          "operator": "VRL Travels",
          "type": "Non-AC Sleeper",
          "departure_time": "18:00",
          "arrival_time": "06:00",
          "price": 800
        },
        {
          "bus_id": "B010",
          "operator": "Orange Travels",
          "type": "AC Seater",
          "departure_time": "20:00",
          "arrival_time": "07:00",
          "price": 900
        },
        {
          "bus_id": "B011",
          "operator": "Morning Star",
          "type": "AC Sleeper",
          "departure_time": "19:00",
          "arrival_time": "05:00",
          "price": 1000
        },
        {
          "bus_id": "B012",
          "operator": "Kaveri Travels",
          "type": "Non-AC Seater",
          "departure_time": "21:30",
          "arrival_time": "08:30",
          "price": 700
        },
        {
          "bus_id": "B013",
          "operator": "Sree Travels",
          "type": "AC Sleeper",
          "departure_time": "22:00",
          "arrival_time": "09:00",
          "price": 1050
        },
        {
          "bus_id": "B014",
          "operator": "Abhi Bus",
          "type": "Volvo AC Seater",
          "departure_time": "23:30",
          "arrival_time": "10:30",
          "price": 1200
        },
        {
          "bus_id": "B015",
          "operator": "Metro Luxury",
          "type": "Non-AC Sleeper",
          "departure_time": "00:00",
          "arrival_time": "11:30",
          "price": 750
        },
        {
          "bus_id": "B016",
          "operator": "SR Travels",
          "type": "AC Sleeper",
          "departure_time": "01:00",
          "arrival_time": "12:30",
          "price": 1100
        }
      ]
    },
    {
      "origin": "tirupati",
      "destination": "guntur",
      "buses": [
        {
          "bus_id": "B017",
          "operator": "VRL Travels",
          "type": "Non-AC Seater",
          "departure_time": "06:00",
          "arrival_time": "12:00",
          "price": 450
        },
        {
          "bus_id": "B018",
          "operator": "Orange Travels",
          "type": "AC Seater",
          "departure_time": "07:30",
          "arrival_time": "13:30",
          "price": 550
        },
        {
          "bus_id": "B019",
          "operator": "Morning Star",
          "type": "AC Sleeper",
          "departure_time": "09:00",
          "arrival_time": "15:00",
          "price": 700
        },
        {
          "bus_id": "B020",
          "operator": "Kaveri Travels",
          "type": "Non-AC Sleeper",
          "departure_time": "10:30",
          "arrival_time": "16:30",
          "price": 600
        },
        {
          "bus_id": "B021",
          "operator": "Sree Travels",
          "type": "Volvo AC Seater",
          "departure_time": "12:00",
          "arrival_time": "18:00",
          "price": 800
        },
        {
          "bus_id": "B022",
          "operator": "Abhi Bus",
          "type": "AC Sleeper",
          "departure_time": "13:30",
          "arrival_time": "19:30",
          "price": 850
        },
        {
          "bus_id": "B023",
          "operator": "Metro Luxury",
          "type": "Non-AC Sleeper",
          "departure_time": "15:00",
          "arrival_time": "21:00",
          "price": 650
        },
        {
          "bus_id": "B024",
          "operator": "SR Travels",
          "type": "AC Sleeper",
          "departure_time": "16:30",
          "arrival_time": "22:30",
          "price": 900
        }
      ]
    },
    {
      "origin": "hyderabad",
      "destination": "warangal",
      "buses": [
        {
          "bus_id": "B017",
          "operator": "Orange Travels",
          "type": "AC Seater",
          "departure_time": "20:00",
          "arrival_time": "22:30",
          "price": 400
        },
        {
          "bus_id": "B018",
          "operator": "Morning Star Travels",
          "type": "Non-AC Seater",
          "departure_time": "21:00",
          "arrival_time": "23:30",
          "price": 300
        },
        {
          "bus_id": "B019",
          "operator": "APSRTC",
          "type": "AC Sleeper",
          "departure_time": "19:45",
          "arrival_time": "22:15",
          "price": 500
        },
        {
          "bus_id": "B020",
          "operator": "Kaveri Travels",
          "type": "Non-AC Sleeper",
          "departure_time": "18:30",
          "arrival_time": "21:00",
          "price": 350
        },
        {
          "bus_id": "B021",
          "operator": "VRL Travels",
          "type": "AC Seater",
          "departure_time": "20:15",
          "arrival_time": "22:45",
          "price": 450
        },
        {
          "bus_id": "B022",
          "operator": "Sri Venkateswara Travels",
          "type": "Non-AC Seater",
          "departure_time": "20:45",
          "arrival_time": "23:15",
          "price": 350
        },
        {
          "bus_id": "B023",
          "operator": "Sai Krishna Travels",
          "type": "AC Sleeper",
          "departure_time": "21:15",
          "arrival_time": "23:45",
          "price": 500
        },
        {
          "bus_id": "B024",
          "operator": "Jabbar Travels",
          "type": "Non-AC Sleeper",
          "departure_time": "19:30",
          "arrival_time": "22:00",
          "price": 400
        }
      ]
    },

    {
      "origin": "vijayawada",
      "destination": "visakhapatnam",
      "buses": [
        {
          "bus_id": "B009",
          "operator": "Orange Travels",
          "type": "AC Sleeper",
          "departure_time": "22:30",
          "arrival_time": "06:30",
          "price": 850
        },
        {
          "bus_id": "B010",
          "operator": "Morning Star Travels",
          "type": "Non-AC Seater",
          "departure_time": "21:00",
          "arrival_time": "05:00",
          "price": 600
        },
        {
          "bus_id": "B011",
          "operator": "APSRTC",
          "type": "AC Seater",
          "departure_time": "20:30",
          "arrival_time": "04:30",
          "price": 750
        },
        {
          "bus_id": "B012",
          "operator": "Kaveri Travels",
          "type": "Non-AC Sleeper",
          "departure_time": "19:45",
          "arrival_time": "03:45",
          "price": 550
        },
        {
          "bus_id": "B013",
          "operator": "VRL Travels",
          "type": "AC Sleeper",
          "departure_time": "23:15",
          "arrival_time": "07:15",
          "price": 900
        },
        {
          "bus_id": "B014",
          "operator": "Sai Krishna Travels",
          "type": "Non-AC Seater",
          "departure_time": "20:15",
          "arrival_time": "04:15",
          "price": 500
        },
        {
          "bus_id": "B015",
          "operator": "Sri Venkateswara Travels",
          "type": "AC Sleeper",
          "departure_time": "21:45",
          "arrival_time": "05:45",
          "price": 850
        },
        {
          "bus_id": "B016",
          "operator": "Jabbar Travels",
          "type": "Non-AC Seater",
          "departure_time": "19:00",
          "arrival_time": "03:00",
          "price": 550
        }
      ]
    },
    {
      "origin": "khammam",
      "destination": "adilabad",
      "buses": [
        {
          "bus_id": "B017",
          "operator": "TSRTC",
          "type": "Non-AC Seater",
          "departure_time": "05:30",
          "arrival_time": "11:30",
          "price": 500
        },
        {
          "bus_id": "B018",
          "operator": "Orange Travels",
          "type": "AC Seater",
          "departure_time": "07:30",
          "arrival_time": "13:30",
          "price": 650
        },
        {
          "bus_id": "B019",
          "operator": "Morning Star",
          "type": "AC Sleeper",
          "departure_time": "09:30",
          "arrival_time": "15:30",
          "price": 800
        },
        {
          "bus_id": "B020",
          "operator": "Kaveri Travels",
          "type": "Non-AC Sleeper",
          "departure_time": "11:30",
          "arrival_time": "17:30",
          "price": 450
        },
        {
          "bus_id": "B021",
          "operator": "Sree Travels",
          "type": "AC Sleeper",
          "departure_time": "13:30",
          "arrival_time": "19:30",
          "price": 700
        },
        {
          "bus_id": "B022",
          "operator": "Abhi Bus",
          "type": "Volvo AC Seater",
          "departure_time": "15:30",
          "arrival_time": "21:30",
          "price": 900
        },
        {
          "bus_id": "B023",
          "operator": "Metro Luxury",
          "type": "Non-AC Sleeper",
          "departure_time": "17:30",
          "arrival_time": "23:30",
          "price": 500
        },
        {
          "bus_id": "B024",
          "operator": "SR Travels",
          "type": "AC Sleeper",
          "departure_time": "19:30",
          "arrival_time": "01:30",
          "price": 800
        }
      ]
    },
    {
      "origin": "hyderabad",
      "destination": "karimnagar",
      "buses": [
        {
          "bus_id": "B001",
          "operator": "TSRTC",
          "type": "AC Seater",
          "departure_time": "06:00",
          "arrival_time": "09:00",
          "price": 350
        },
        {
          "bus_id": "B002",
          "operator": "Orange Travels",
          "type": "Non-AC Sleeper",
          "departure_time": "07:30",
          "arrival_time": "10:30",
          "price": 300
        },
        {
          "bus_id": "B003",
          "operator": "Morning Star",
          "type": "AC Sleeper",
          "departure_time": "09:00",
          "arrival_time": "12:00",
          "price": 500
        },
        {
          "bus_id": "B004",
          "operator": "VRL Travels",
          "type": "Non-AC Seater",
          "departure_time": "10:30",
          "arrival_time": "13:30",
          "price": 250
        },
        {
          "bus_id": "B005",
          "operator": "Kaveri Travels",
          "type": "AC Sleeper",
          "departure_time": "12:00",
          "arrival_time": "15:00",
          "price": 450
        },
        {
          "bus_id": "B006",
          "operator": "Sree Travels",
          "type": "Volvo AC Seater",
          "departure_time": "13:30",
          "arrival_time": "16:30",
          "price": 600
        },
        {
          "bus_id": "B007",
          "operator": "Metro Luxury",
          "type": "Non-AC Sleeper",
          "departure_time": "15:00",
          "arrival_time": "18:00",
          "price": 300
        },
        {
          "bus_id": "B008",
          "operator": "Abhi Bus",
          "type": "AC Sleeper",
          "departure_time": "16:30",
          "arrival_time": "19:30",
          "price": 500
        }
      ]
    },
    {
      "origin": "karimnagar",
      "destination": "hyderabad",
      "buses": [
        {
          "bus_id": "B009",
          "operator": "TSRTC",
          "type": "Non-AC Seater",
          "departure_time": "06:30",
          "arrival_time": "09:30",
          "price": 300
        },
        {
          "bus_id": "B010",
          "operator": "Orange Travels",
          "type": "AC Seater",
          "departure_time": "08:00",
          "arrival_time": "11:00",
          "price": 400
        },
        {
          "bus_id": "B011",
          "operator": "Morning Star",
          "type": "AC Sleeper",
          "departure_time": "09:30",
          "arrival_time": "12:30",
          "price": 550
        },
        {
          "bus_id": "B012",
          "operator": "VRL Travels",
          "type": "Non-AC Sleeper",
          "departure_time": "11:00",
          "arrival_time": "14:00",
          "price": 350
        },
        {
          "bus_id": "B013",
          "operator": "Kaveri Travels",
          "type": "AC Sleeper",
          "departure_time": "12:30",
          "arrival_time": "15:30",
          "price": 500
        },
        {
          "bus_id": "B014",
          "operator": "Sree Travels",
          "type": "Volvo AC Seater",
          "departure_time": "14:00",
          "arrival_time": "17:00",
          "price": 650
        },
        {
          "bus_id": "B015",
          "operator": "Metro Luxury",
          "type": "Non-AC Sleeper",
          "departure_time": "15:30",
          "arrival_time": "18:30",
          "price": 300
        },
        {
          "bus_id": "B016",
          "operator": "Abhi Bus",
          "type": "AC Sleeper",
          "departure_time": "17:00",
          "arrival_time": "20:00",
          "price": 550
        }
      ]
    },
    {
      "origin": "vijayawada",
      "destination": "visakhapatnam",
      "buses": [
        {
          "bus_id": "B017",
          "operator": "TSRTC",
          "type": "AC Seater",
          "departure_time": "05:00",
          "arrival_time": "10:00",
          "price": 600
        },
        {
          "bus_id": "B018",
          "operator": "Orange Travels",
          "type": "Non-AC Sleeper",
          "departure_time": "06:30",
          "arrival_time": "11:30",
          "price": 500
        },
        {
          "bus_id": "B019",
          "operator": "Morning Star",
          "type": "AC Sleeper",
          "departure_time": "08:00",
          "arrival_time": "13:00",
          "price": 750
        },
        {
          "bus_id": "B020",
          "operator": "VRL Travels",
          "type": "Non-AC Seater",
          "departure_time": "09:30",
          "arrival_time": "14:30",
          "price": 450
        },
        {
          "bus_id": "B021",
          "operator": "Kaveri Travels",
          "type": "AC Sleeper",
          "departure_time": "11:00",
          "arrival_time": "16:00",
          "price": 800
        }
      ]
    },
    {
      "origin": "visakhapatnam",
      "destination": "vijayawada",
      "buses": [
        {
          "bus_id": "B022",
          "operator": "TSRTC",
          "type": "Non-AC Seater",
          "departure_time": "05:30",
          "arrival_time": "10:30",
          "price": 500
        },
        {
          "bus_id": "B023",
          "operator": "Orange Travels",
          "type": "AC Seater",
          "departure_time": "07:00",
          "arrival_time": "12:00",
          "price": 650
        },
        {
          "bus_id": "B024",
          "operator": "Morning Star",
          "type": "AC Sleeper",
          "departure_time": "08:30",
          "arrival_time": "13:30",
          "price": 800
        },
        {
          "bus_id": "B025",
          "operator": "VRL Travels",
          "type": "Non-AC Sleeper",
          "departure_time": "10:00",
          "arrival_time": "15:00",
          "price": 600
        },
        {
          "bus_id": "B026",
          "operator": "Kaveri Travels",
          "type": "AC Sleeper",
          "departure_time": "12:00",
          "arrival_time": "17:00",
          "price": 850
        }
      ]
    }
  ]

// let data=[
//       {
//         "origin": "hyderabad",
//         "destination": "bangalore",
//         "buses": [
//           {
//             "bus_id": "B001",
//             "operator": "ABC Travels",
//             "type": "AC Sleeper",
//             "departure_time": "22:00",
//             "arrival_time": "06:00",
//             "price": 800
//           },
//           {
//             "bus_id": "B002",
//             "operator": "XYZ Travels",
//             "type": "Non-AC Seater",
//             "departure_time": "23:00",
//             "arrival_time": "07:30",
//             "price": 600
//           },
//           {
//             "bus_id": "B003",
//             "operator": "PQR Travels",
//             "type": "AC Seater",
//             "departure_time": "21:00",
//             "arrival_time": "05:30",
//             "price": 750
//           },
//           {
//             "bus_id": "B004",
//             "operator": "MNO Travels",
//             "type": "Volvo Multi-Axle",
//             "departure_time": "20:30",
//             "arrival_time": "04:30",
//             "price": 900
//           }
//         ]
//       },
//       {
//         "origin": "bangalore",
//         "destination": "hyderabad",
//         "buses": [
//           {
//             "bus_id": "B001",
//             "operator": "ABC Travels",
//             "type": "AC Sleeper",
//             "departure_time": "22:00",
//             "arrival_time": "06:00",
//             "price": 800
//           },
//           {
//             "bus_id": "B002",
//             "operator": "XYZ Travels",
//             "type": "Non-AC Seater",
//             "departure_time": "23:00",
//             "arrival_time": "07:30",
//             "price": 600
//           },
//           {
//             "bus_id": "B003",
//             "operator": "PQR Travels",
//             "type": "AC Seater",
//             "departure_time": "21:00",
//             "arrival_time": "05:30",
//             "price": 750
//           },
//           {
//             "bus_id": "B004",
//             "operator": "MNO Travels",
//             "type": "Volvo Multi-Axle",
//             "departure_time": "20:30",
//             "arrival_time": "04:30",
//             "price": 900
//           }
//         ]
//       },
//       {
//         "origin": "karimnagar",
//         "destination": "hyderabad",
//         "buses": [
//           {
//             "bus_id": "B005",
//             "operator": "PQR Travels",
//             "type": "AC Sleeper",
//             "departure_time": "5:00",
//             "arrival_time": "8:30",
//             "price": 900
//           },
//           {
//             "bus_id": "B006",
//             "operator": "XYZ Travels",
//             "type": "Non-AC Seater",
//             "departure_time": "8:00",
//             "arrival_time": "12:00",
//             "price": 600
//           },
//           {
//             "bus_id": "B007",
//             "operator": "ABC Travels",
//             "type": "AC Seater",
//             "departure_time": "23:00",
//             "arrival_time": "2:00",
//             "price": 750
//           },
//           {
//             "bus_id": "B008",
//             "operator": "LMN Travels",
//             "type": "Volvo Multi-Axle",
//             "departure_time": "14:30",
//             "arrival_time": "17:30",
//             "price": 800
//           }
//         ]
//       },
//       {
//         "origin": "hyderabad",
//         "destination": "karimnagar",
//         "buses": [
//           {
//             "bus_id": "B005",
//             "operator": "PQR Travels",
//             "type": "AC Sleeper",
//             "departure_time": "5:00",
//             "arrival_time": "8:30",
//             "price": 900
//           },
//           {
//             "bus_id": "B006",
//             "operator": "XYZ Travels",
//             "type": "Non-AC Seater",
//             "departure_time": "8:00",
//             "arrival_time": "12:00",
//             "price": 600
//           },
//           {
//             "bus_id": "B007",
//             "operator": "ABC Travels",
//             "type": "AC Seater",
//             "departure_time": "23:00",
//             "arrival_time": "2:00",
//             "price": 750
//           },
//           {
//             "bus_id": "B008",
//             "operator": "LMN Travels",
//             "type": "Volvo Multi-Axle",
//             "departure_time": "14:30",
//             "arrival_time": "17:30",
//             "price": 800
//           }
//         ]
//       },
//       {
//         "origin": "guntur",
//         "destination": "hyderabad",
//         "buses": [
//           {
//             "bus_id": "B009",
//             "operator": "ST Travels",
//             "type": "AC Sleeper",
//             "departure_time": "23:00",
//             "arrival_time": "02:00",
//             "price": 400
//           },
//           {
//             "bus_id": "B010",
//             "operator": "AP Express",
//             "type": "Non-AC Seater",
//             "departure_time": "21:00",
//             "arrival_time": "00:00",
//             "price": 300
//           },
//           {
//             "bus_id": "B011",
//             "operator": "FastTrack Travels",
//             "type": "AC Seater",
//             "departure_time": "22:00",
//             "arrival_time": "01:00",
//             "price": 450
//           },
//           {
//             "bus_id": "B012",
//             "operator": "City Connect",
//             "type": "Volvo Multi-Axle",
//             "departure_time": "20:30",
//             "arrival_time": "23:30",
//             "price": 500
//           }
//         ]
//       },
//       {
//         "origin": "hyderabad",
//         "destination": "guntur",
//         "buses": [
//           {
//             "bus_id": "B009",
//             "operator": "ST Travels",
//             "type": "AC Sleeper",
//             "departure_time": "23:00",
//             "arrival_time": "02:00",
//             "price": 400
//           },
//           {
//             "bus_id": "B010",
//             "operator": "AP Express",
//             "type": "Non-AC Seater",
//             "departure_time": "21:00",
//             "arrival_time": "00:00",
//             "price": 300
//           },
//           {
//             "bus_id": "B011",
//             "operator": "FastTrack Travels",
//             "type": "AC Seater",
//             "departure_time": "22:00",
//             "arrival_time": "01:00",
//             "price": 450
//           },
//           {
//             "bus_id": "B012",
//             "operator": "City Connect",
//             "type": "Volvo Multi-Axle",
//             "departure_time": "20:30",
//             "arrival_time": "23:30",
//             "price": 500
//           }
//         ]
//       },
//       {
//         "origin": "hyderabad",
//         "destination": "vijayawada",
//         "buses": [
//           {
//             "bus_id": "B013",
//             "operator": "Raj Travels",
//             "type": "AC Sleeper",
//             "departure_time": "18:00",
//             "arrival_time": "22:00",
//             "price": 700
//           },
//           {
//             "bus_id": "B014",
//             "operator": "AP Express",
//             "type": "Non-AC Seater",
//             "departure_time": "19:00",
//             "arrival_time": "23:30",
//             "price": 500
//           },
//           {
//             "bus_id": "B015",
//             "operator": "FastLine Travels",
//             "type": "AC Seater",
//             "departure_time": "20:00",
//             "arrival_time": "00:30",
//             "price": 650
//           },
//           {
//             "bus_id": "B016",
//             "operator": "Pink City Express",
//             "type": "Volvo Multi-Axle",
//             "departure_time": "17:00",
//             "arrival_time": "21:30",
//             "price": 800
//           },
//           {
//             "bus_id": "B017",
//             "operator": "Comfort Ride",
//             "type": "AC Sleeper",
//             "departure_time": "21:00",
//             "arrival_time": "01:30",
//             "price": 750
//           }
//         ]
//       },
//       {
//         "origin": "vijayawada",
//         "destination": "hyderabad",
//         "buses": [
//           {
//             "bus_id": "B013",
//             "operator": "Raj Travels",
//             "type": "AC Sleeper",
//             "departure_time": "18:00",
//             "arrival_time": "22:00",
//             "price": 700
//           },
//           {
//             "bus_id": "B014",
//             "operator": "AP Express",
//             "type": "Non-AC Seater",
//             "departure_time": "19:00",
//             "arrival_time": "23:30",
//             "price": 500
//           },
//           {
//             "bus_id": "B015",
//             "operator": "FastLine Travels",
//             "type": "AC Seater",
//             "departure_time": "20:00",
//             "arrival_time": "00:30",
//             "price": 650
//           },
//           {
//             "bus_id": "B016",
//             "operator": "Pink City Express",
//             "type": "Volvo Multi-Axle",
//             "departure_time": "17:00",
//             "arrival_time": "21:30",
//             "price": 800
//           },
//           {
//             "bus_id": "B017",
//             "operator": "Comfort Ride",
//             "type": "AC Sleeper",
//             "departure_time": "21:00",
//             "arrival_time": "01:30",
//             "price": 750
//           }
//         ]
//       }
//     ]
    
let route_selection=document.getElementById("route_selection")
route_selection.addEventListener("submit",(e)=>{
  e.preventDefault()
  let from = document.getElementById('from').value.toLowerCase();
  let to = document.getElementById('to').value.toLowerCase();
  console.log(from);
  console.log(to);
  
  
  if((data.find(x=>x.destination==to) && data.find(x=>x.origin==from))){
    data.filter(x=>{
      if(x.origin===from && x.destination===to){
        location.href="./buses.html"
        localStorage.setItem("busData",JSON.stringify(x))
      }})
  }else{
    alert("route not found")
  }
})
let buses=document.getElementById("buses_info")
data.forEach((x,index)=>{
  setTimeout(()=>{
    let bus_route=document.createElement("div")
  bus_route.innerHTML=`
  <div id="route"><span>From:<br> ${x.origin.toUpperCase()}</span> <br><span>To: <br> ${x.destination.toUpperCase()}</span></div>
  `
  buses.appendChild(bus_route)
  },(index)*500)
  
})
    