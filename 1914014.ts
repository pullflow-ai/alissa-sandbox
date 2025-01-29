// A TypeScript file with intentional errors and bad practices

// Function to add two numbers
function addNumbers(a, b) {
    return a + b; // Missing type annotations
}

console.log(addNumbers(5, "10")); // Mixing types, will concatenate instead of adding

// Function to greet a user
function greetUser(name: String): void { // Incorrect capitalization of 'string'
    console.log("Hello, " + name);
}

greetUser(123); // Passing the wrong type

// Unnecessary use of 'any'
function processData(data: any): any {
    data.map((item) => console.log(item)); // Assuming 'data' is an array, no type checking
    return data;
}

processData("NotAnArray"); // Passing incorrect data type

// Interface with redundant and invalid definitions
interface User {
    name: string;
    age: number;
    isActive: boolean;
    isActive: string; // Duplicate key
}

// Incorrect array type
const numbers: number[] = [1, 2, "3", 4]; // Mixing types in an array

// Class with errors
class Person {
    name: string;
    age; // Missing type annotation

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return "Name: " + this.name + ", Age: " + this.age; // Poor string concatenation
    }
}

const person = new Person("Alice", "Twenty-five"); // Passing wrong type for age
console.log(person.getDetails());

// Function that never returns
function infiniteLoop(): never {
    while (true) {
        console.log("Looping forever...");
    }
}

infiniteLoop(); // Intentionally locks the program
