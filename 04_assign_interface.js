// interface IProduct {
//     id: number,
//     name: string,
//     description: string,
//     price: number;
//     display(): void;
// }
var user1 = {
    id: 101,
    firstName: "Nisha",
    lastName: "Kate",
    address: "mumbai",
    getFullName: function () {
        console.log("Student name: ".concat(this.fullname, ", ").concat(this.lastName));
    }
};
var user2 = {
    id: 102,
    firstName: "Sneha",
    lastName: "Phadtare",
    address: "Solapur",
    getFullName: function () {
        console.log("Student name: ".concat(this.fullName, ", ").concat(this.lastName));
    }
};
;
;
;
var dev = {
    id: 1,
    name: "Nisha",
    salary: 50000,
    language: "Angular"
};
console.warn("-------------------------------------------------* Interface *-----------------------------------------------------");
console.log(user1);
console.log("student Information: \n Student id: ".concat(this.id, ", \n Student FirstName ").concat(this.firstName, ", \n Student LastName: ").concat(this.lastName, ", \n Student Address: ").concat(this.addtess, " "));
user1.getFullName();
console.log(user2);
console.log("Student Information: \n Student id: ".concat(this.id, ", \n Student FirstName: ").concat(this.firstname, ", \n Student lastName: ").concat(this.lastname, ", \n Student Address: ").concat(this.address));
user2.getFullName();
console.warn("-------------------* Extends interface *--------------------------");
console.log(dev);
console.log("Devloper information: \n Developer id: ".concat(dev.id, " ,\n devloper name: ").concat(dev.name, ", \n Developer salary ").concat(dev.salary, ", \n Developer language ").concat(dev.language));
