// Intentionally bad TypeScript code

// Function to calculate the area of a rectangle
function calculateArea(length, width): number { // Missing type annotations for parameters
    return length * width;
}

console.log(calculateArea(5, "10")); // Incorrect type passed for 'width'

// Overly permissive type
let user: any = { name: "John", age: 30 };
console.log(user.address); // Accessing a non-existent property without error

// Using an enum incorrectly
enum Colors {
    Red = "RED",
    Green = 1,
    Blue = "BLUE", // Mixing string and number types in the same enum
}

console.log(Colors.Red.toLowercase()); // Typo in method name, should be 'toLowerCase'

// Unused variable
let unusedVariable = "I'm never used!";

// Function with excessive optional chaining
function getUserProfile(user: { profile?: { name?: string } }) {
    return user?.profile?.name ?? "No name provided"; // Excessive optional chaining for shallow object
}

console.log(getUserProfile({})); // Works, but overly defensive design

// Incorrect promise handling
function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        resolve("Data received");
    });
}

fetchData()
    .then((response) => console.log(response.length)) // Assumes response is a string
    .catch((err) => console.error(err)) // No error handling in the function

// Broken type inference in a function
function multiplyValues(a: number, b: number): number {
    return a * b.toString(); // Incorrect conversion, type mismatch
}

console.log(multiplyValues(2, 3));

// Class with poor design and errors
class Animal {
    private species; // Missing type annotation
    readonly legs: number = 4;

    constructor(species: string) {
        this.species = species; // No constructor validation
    }

    setSpecies(newSpecies: string): void {
        this.species = newSpecies; // Modifies a private property directly
    }

    printDetails(): void {
        console.log("Species: " + this.species + ", Legs: " + this.legs);
    }
}

const dog = new Animal("Dog");
dog.printDetails();
dog.legs = 3; // Cannot assign to a readonly property

// Incorrect use of union types
function printId(id: string | number): void {
    console.log("ID: " + id.toUpperCase()); // Assumes 'id' is always a string
}

printId(123); // Runtime error: 'id.toUpperCase is not a function'
