const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const start = this.journeys.map((journey) => {
    return journey.startLocation;;
  });
  return start;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const end = this.journeys.map((journey) => {
    return journey.endLocation;
  });
  return end;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const filterByTransport = this.journeys.filter((journey) => {
    return transport === journey.transport;
  });
  return filterByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const filterByMinDistance = this.journeys.filter((journey) => {
    return minDistance > journey.distance;
  });
  return filterByMinDistance;
    
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  // sum the contents of an array
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  // possibly slice

};


module.exports = Traveller;
