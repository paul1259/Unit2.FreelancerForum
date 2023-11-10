const averagePriceSpan = document.getElementById("price")
const table = document.getElementById("table")
let avePrice = 0
let peopleAdded = 0
let setIntervalId

const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];

  const addFreelancer = (freelancer) =>{
    const tableRow = document.createElement("tr")
    const freelancerName = document.createElement("td")
    
  }