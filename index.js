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
  let averageCost = 0

  function avePrice(data){
    let totalCost = 0
    for (let i = 0; i < data.length; i++) {
        totalCost = totalCost + data[i].price
      }
      averageCost = totalCost/data.length
      return averageCost
  }
  averageCost = avePrice(freelancers)

  document.getElementById("AvePrice").innerHTML = "The average starting price is " + averageCost ;