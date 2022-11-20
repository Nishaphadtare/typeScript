class Passenger {
    firstName: string;
    lastName: string;
    frequentFlyerno: number
    constructor(firstName: string, lastName:string, flightno:number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerno = this.flightno;
    }
}


var passenger  =new Passenger("jsck", "Sparrow", 102);

console.log(passenger.firstName + " " + passenger.lastName + " " + passenger.frequentFlyerno);
