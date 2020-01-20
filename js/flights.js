var helsinkiAirportDeparture = [
  {
    airlines: "finnair",
    destination: "spain",
    departure: "14.00"
  },
  {
    airlines: "norwegian",
    destination: "oslo",
    departure: "16.00"
  },
  {
    airlines: "cathay pacific",
    destination: "hongkong",
    departure: "18.00"
  }
];

helsinkiAirportDeparture.forEach(function(flight) {
  var newFlight = document.createElement("li");
  newFlight.innerHTML =
    '<div class="info"><h2 class="title">' +
    flight.airlines +
    '</h2><h2 class="desc">' +
    flight.destination +
    "</h2></div>;";

  document.getElementById("departure-list").appendChild(newFlight);
});
