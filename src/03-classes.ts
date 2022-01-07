//* Properties

class Person {
    firstName: string;
    lastName: string;
}

let user: Person = new Person();
user.firstName = 'Timmy';
user.lastName = 'Turner';

class User {
    firstName: string;
    lastName: string;

    sayHello() {
        console.log(`Hello, ${this.firstName}`)
    }
}

let ken: User = new User();
ken.firstName = 'Ken';
ken.sayHello();

// Constructors

class Game {
    name: string;
    maker: string;
    constructor(name: string, maker: string) {
        this.name = name,
        this.maker = maker
    }
}

// let battleShip: Game = new Game();

let battleShip: Game = new Game('Battleship', 'Hasbro');
console.log(battleShip);

// Inheritance
class Vehicle {
    type: string;
    make: string;
    model: string;
    manufacturerYear: number;
    runs: boolean;
    topSpeed: number;
}

class Automobile extends Vehicle {
    isSelfDriving: boolean;
}

let myCar: Automobile = new Automobile();

// console.log({myCar});

myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = 'Volvo';

console.log({myCar});

class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean;
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = false;
myMotorcycle.topSpeed = 250;

console.log({myMotorcycle});

// Accessors

// class Store {
//     name: string;
//     city: string;

//   constructor(name: string, city: string) {
//       this.name = name;
//       this.city = city;
//   }
// }

class Store {
    constructor(
        public name: string, 
        public city: string) {}
}

let ikea: Store = new Store('Ikea', 'Chicago');
console.log({ikea});

class Employee extends Person {
    private _salary: number;
    public badgeId: number;
    schedule: string[];

    getSalary(): number {
        return this._salary
    }

    setSalary(newSal: number) {
        this._salary = newSal;
    }
}

let newEmployee: Employee = new Employee();
newEmployee.badgeId = 38492;
newEmployee.schedule = ['monday', 'wednesday', 'friday'];
//! Error Trying to access a private property within the class
// newEmployee._salary

newEmployee.setSalary(30000);
console.log(newEmployee.getSalary());