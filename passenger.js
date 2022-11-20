var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, flightno) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerno = this.flightno;
    }
    return Passenger;
}());
var passenger = new Passenger("jsck", "Sparrow", 102);
console.log(passenger.firstName + " " + passenger.lastName + " " + passenger.frequentFlyerno);
