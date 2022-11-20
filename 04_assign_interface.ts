// interface IProduct {
//     id: number,
//     name: string,
//     description: string,
//     price: number;
//     display(): void;
// }
 
// var objProduct : IProduct = {
//     id: 101,
//     name: "HP Laptop",
//     description: "IT's awesome",
//     price: 45000,
//     display(): void{
//         console.log(this.id + " " + this.name);
        
//     }
// }

interface IStudent {
    id: number,
    firstName: string,
    lastName: string,
    address: string,
    getFullName(): void;
}

const user1 : IStudent ={
    id: 101,
    firstName: "Nisha",
    lastName: "Kate",
    address: "mumbai",
    getFullName(): void{
        console.log(`Student name: ${this.fullname}, ${this.lastName}`);
        
    }
}

const user2 : IStudent ={
    id: 102, 
    firstName: "Sneha",
    lastName: "Phadtare",
    address: "Solapur",
    getFullName():  void{
        console.log(`Student name: ${this.fullName}, ${this.lastName}`);
        
    }
}

interface IPerson {
    name: string;
};
 
interface IEmployee{
    id: number,
    salary: number,

};

interface IDeveloper extends IPerson, IEmployee {
    language: string;
};

const dev: IDeveloper = {
    id: 1,
    name: "Nisha",
    salary: 50000, 
    language: "Angular",
    
}

console.warn("-------------------------------------------------* Interface *-----------------------------------------------------");
console.log(user1);
console.log(`student Information: \n Student id: ${this.id}, \n Student FirstName ${this.firstName}, \n Student LastName: ${this.lastName}, \n Student Address: ${this.addtess} `);
user1.getFullName();

console.log(user2);
console.log(`Student Information: \n Student id: ${this.id}, \n Student FirstName: ${this.firstname}, \n Student lastName: ${this.lastname}, \n Student Address: ${this.address}`);
user2.getFullName();

console.warn("-------------------* Extends interface *--------------------------");

console.log(dev);
console.log(`Devloper information: \n Developer id: ${dev.id} ,\n devloper name: ${dev.name}, \n Developer salary ${dev.salary}, \n Developer language ${dev.language}`);






