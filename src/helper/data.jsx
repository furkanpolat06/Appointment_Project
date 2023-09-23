export const appointmentData = [
  {
    id: 1,
    patient: "Barry Vermont",
    day: new Date().toISOString().slice(0,10),
    consulted: true,
    doctor: "Dr. Hazel Valery",
  },
  {
    id:2,
    patient: "Harry Coming",
    day: new Date().toISOString("tr-TR").slice(0,10),
    consulted: false,
    doctor: "Dr. Jessica White",
  },
  {
    id:3,
    patient: "Aaron Black",
    day: new Date().toISOString().slice(0,10),
    consulted: true,
    doctor: "Dr. Jasmine Carpanter",
  },
]

export const doctorData = [
  {
    id: 1,
    name: "Dr. George Valery",
    dep: "Cardiology",
    img: "./img/dr1.jpg",
  },
  {
    id: 2,
    name: "Dr. Jasmine Carpanter",
    dep: "Radiolgy",
    img: "./img/dr2.jpg",
  },
  {
    id: 3,
    name: "Dr. John Watson",
    dep: "Orthopedy",
    img: "./img/dr3.jpg",
  },
  {
    id: 4,
    name: "Dr. Adam White",
    dep: "Gastroentogoly",
    img: "./img/dr4.jpg",
  },
  {
    id: 5,
    name: "Dr. Harry Coming",
    dep: "Surgery",
    img: "./img/dr9.jpg",
  },
  {
    id: 6,
    name: "Dr. Alex David",
    dep: "Pulmonery",
    img: "./img/dr6.jpg",
  },
  {
    id: 7,
    name: "Dr. Asley Graham",
    dep: "Urgent",
    img: "./img/dr7.jpg",
  },
  {
    id: 8,
    name: "Dr. Martin Motley",
    dep: "Oncology",
    img: "./img/dr8.jpg",
  },
]
