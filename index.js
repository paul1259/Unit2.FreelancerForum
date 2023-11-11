const averagePriceSpan = document.getElementById("price")
const table = document.getElementById("table")
let totalPrice = 0
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
    freelancerName.textContent = freelancer.name
    const freelancerOccupation = document.createElement("td")
    freelancerOccupation.textContent = freelancer.occupation
    const freelancerPrice = document.createElement("td")
    freelancerPrice.textContent = freelancer.price
    tableRow.append(freelancerName,freelancerOccupation,freelancerPrice)
    table.append(tableRow)
    peopleAdded++
    averagePriceSpan.textContent = ((totalPrice + freelancer.price)/peopleAdded).toFixed(2)
    totalPrice = (totalPrice + freelancer.price)

  }
  setIntervalId = setInterval(() => {
    if(peopleAdded < freelancers.length){addFreelancer(freelancers[peopleAdded])}
      else{clearInterval(setIntervalId)}
  }, 3000);