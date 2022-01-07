// Type-Declarations

//! Will not work
// let x = 7;
// x = 'seven';

// Declare Types w/out initialization
let address: string;
let phoneNumber: string;
let email: string;
let sS: number;
let isMarried: boolean;

// Declare types with initialization
let username: string = 'instructor';
let password: string = 'password';
let instructorId: number = 1;

let greeting = 'hello';

// Basic Types
// ** Primitives **

//* Number
let age: number = 40;
let currentYear: number = 2022;
let balance: number = 1_000_000;

//* String
let companyName: string;
companyName = 'Dunder Mifflin, Inc.';
let appName: string;
appName = 'Dunder Mifflin Infinity';

//* Boolean
let isLoggedIn: boolean = true;
let isAdmin: boolean = true;

//* Arrays
let studentList: string[] = ['Timmy', 'Bobby'];
let allScores: Array<number> = [0, 1, 2, 3, 4, 5];

//* Any
let dataFromThirdParty: any = 'fjlasjfd';
console.log(dataFromThirdParty);

//* Void
//? A void type has no type at all - this is not really seen in variables, but is more common to see in functions that return no value

function sayHelloToAll(): void {
    console.log('Hello all')
}

//* Null & Undefined
let undefinedVariable: undefined = undefined;
let nullVariable: null = null;

//* Tuple
//? Tuple type allows you to create an array with multiple different types

let userNameAndId: [string, number];
userNameAndId = ['string', 57];

//* Enum
//? Enums allow us to give names to numeric values

enum Color {
    'red', // 0
    'blue', // 1
    'purple' // 2
}

let selected: string = Color[Color.red]; // will return 0

enum CardType {
    Ace = 1,
    Two,
    Three,
    Four
}

let cardType: string = CardType[2];

//* Union Types
let x: number | string | boolean;
x = 'Michael Scott';
x = true;
x = 57;