// In JavaScript
// function demoFunction(someNum) {
//     return someNum;
// }

// demoFunction(1);
// demoFunction('string');
// demoFunction(1, 'string', true);

// We can call the function with a number as an argument
// We can call the function with a string as an argument
// We can add arguments that were not originally declared

function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}

addNumbers(3, 54);
//! Error
// addNumbers(1, '');
// addNumbers('', true);
// addNumbers();

function hello(greetingString:string) {
    return greetingString;
}

hello('hello');

//* Function with optional parameters
function showNameOrAge(
    firstName: string,
    lastName: string,
    age?: number
    ) {
    console.log(firstName + '' + lastName)
    return age;
}

showNameOrAge('Michael', 'Scott');
showNameOrAge('Michael', 'Scott', 46);