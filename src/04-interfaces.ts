interface Animal {
    name: string;
    numberOfLegs: number;
}

//! Error cannot instantiate them, interfaces are NOT classes
// let a: Animal = new Animal();

//! Error because an interface was assigned, the variable expects to have the same properties within that interface
// let dog: Animal = {}

let dog: Animal = {
    name: 'Fido',
    numberOfLegs: 4
};

//* Methods
//? Interfaces have methods, but they can only have method signatures, not the implementation of the method

// Method Signature --- first line of the function
// sayHello(name: string): string 

// Method Implementation --- execution code for the function
// {
//     let fName = name;
//     return fName;
// }

interface Product {
    name: string;
    price: number;
    stock: number;
    setTimeOfPurchase(d: Date): void;
    stockCount(): void;
}

class Apples implements Product {
    name = 'Green Apples';
    price = 5.5;
    stock = 30;

    setTimeOfPurchase(d: Date) {
        console.log('Apples purchased on', d);
    }

    stockCount() {
        console.log(`Apples remaining: ${this.stock}`);
    }
}

let myApples: Apples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));
myApples.stockCount();

// Sharing interface types

// Put it in a types folder
type id = number | string;

interface UserObjInterface {
    id: id;
    username: string;
    avatar: string;
}

interface CommentObjInterface {
    id: id;
    user: UserObjInterface;
    text: string;
}

interface PostObjInterface {
    id: id;
    poster: UserObjInterface;
    title: string;
    text: string;
    comments: CommentObjInterface[];
}
// Simulates a get all fetch for posts
// Posts -> hasMany -> comments
// comment -> hasOne -> user
const Posts: PostObjInterface[] = [
  {
    id: 1,
    poster: {
      id: 1,
      username: "user1",
      avatar: "user1.png",
    },
    title: "My first post",
    text: "Hello World",
    comments: [
      {
        id: 1,
        user: {
          id: 3,
          username: "user3",
          avatar: "user3.png",
        },
        text: "Some comment!",
      },
      {
        id: 2,
        user: {
          id: 2,
          username: "user2",
          avatar: "user2.png",
        },
        text: "Another comment!",
      },
    ],
  },
  {
    id: 1,
    poster: {
      id: 1,
      username: "user1",
      avatar: "user1.png",
    },
    title: "My first post",
    text: "Hello World",
    comments: [
      {
        id: 1,
        user: {
          id: 3,
          username: "user3",
          avatar: "user3.png",
        },
        text: "Some comment!",
      },
      {
        id: 2,
        user: {
          id: 2,
          username: "user2",
          avatar: "user2.png",
        },
        text: "Another comment!",
      },
    ],
  },
  {
    id: 1,
    poster: {
      id: 1,
      username: "user1",
      avatar: "user1.png",
    },
    title: "My first post",
    text: "Hello World",
    comments: [
      {
        id: 1,
        user: {
          id: 3,
          username: "user3",
          avatar: "user3.png",
        },
        text: "Some comment!",
      },
      {
        id: 2,
        user: {
          id: 2,
          username: "user2",
          avatar: "user2.png",
        },
        text: "Another comment!",
      },
    ],
  },
];

// Interfaces and Classes
type year = number | string;

interface Colors {
    interior: string;
    exterior: string;
}

interface CarInterface {
    year: year;
    model: string;
    color: Colors;
    price: number;
    electric?: true;
    testDrive(): void;
}

class Car implements CarInterface {
    constructor(
        public year: year,
        public model: string,
        public color: Colors,
        public price: number,
    ){}

    testDrive(){
        console.log(`Test drove the ${this.model}`)
    }
}

class Tesla extends Car {
    private _owner: string = 'Tesla Dealership';
    public electric: true = true;
    constructor(
        public year: year,
        public model: string,
        public color: Colors,
        public price: number,
    ){
        super(year, model, color, price)
    }

    purchase(price: number, purchaser: string) {
        if(price >= this.price) {
            this.changeOwner(purchaser);
            console.log(`Bought the ${this.model}. Enjoy your purchase`);
            this.price = this.price - 15000;
        } else {
            console.log(`Need ${this.price - price} more!`);
        }
    }

    private changeOwner(newOwner) {
        this._owner = newOwner;
    }
}

let teslaForSale = new Tesla(
    2022,
    'Model S',
    {interior: 'Gray', exterior: 'Black'},
    94_900
);
console.log({teslaForSale});

//! Error Can't access a private property
// teslaForSale._owner = 'me';
//! Error Can't access a private function
// teslaForSale.changeOwner('me');

teslaForSale.testDrive();

//! Not enough money to purchase
// teslaForSale.purchase(50000, 'Gabrielle');
teslaForSale.purchase(100000, 'Gabrielle');
console.log({teslaForSale});