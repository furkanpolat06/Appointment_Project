export const appointmentData = [
  {
    id: 1,
    patient: "Furkan Polat",
    day: new Date().toISOString().slice(0,10),
    consulted: true,
    doctor: "Pt. Alina Brook",
  },
  {
    id:2,
    patient: "Ayse Akbal",
    day: new Date().toISOString("tr-TR").slice(0,10),
    consulted: false,
    doctor: "Dent. Jessica White",
  },
  {
    id:3,
    patient: "Ali Polat",
    day: new Date().toISOString().slice(0,10),
    consulted: true,
    doctor: "Dr. Jasmine Carpanter",
  },
]

export const doctorData = [
  {
    id: 1,
    name: "Dr. John Watson",
    dep: "Cardiology",
    img: "./img/dr1.jpg",
  },
  {
    id: 2,
    name: "Dr. Jasmine Carpanter",
    dep: "Pediatri",
    img: "./img/dr2.jpg",
  },
  {
   
    id: 5,
    name: "Dr. Harry Coming",
    dep: "Surgery",
    img: "./img/dr3.jpg",
  },
  {
    id: 4,
    name: "Dr. Adam White",
    dep: "Psychiatry",
    img: "./img/dr4.jpg",
  },
  {
    id: 5,
    name: "Rn. Hazel Valery",
    dep: "Orthopedy",
    img: "./img/dr9.jpg",
  },
  {
    id: 6,
    name: "Pt. Alina Brook",
    dep: "Geriatric Rehabilitation",
    img: "./img/dr6.jpg",
  },
  {
    id: 7,
    name: "Dent. Jardel Graham",
    dep: "Endodontics",
    img: "./img/dr7.jpg",
  },
  {
    id: 8,
    name: "Dent. Jessica White",
    dep: "Orthodontics",
    img: "./img/dr8.jpg",
  },
]
