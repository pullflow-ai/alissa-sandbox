// Intentionally bad TypeScript code

// Function with missing return type and incorrect type assumptions
function greet(name) {
    return "Hello, " + name.toUppercase(); // Typo: should be toUpperCase()
}

console.log(greet(42)); // Passing a number instead of a string

// Variable declared but never used
let unusedVar = "I'm just taking up space";

// Function with implicit 'any' return type
function add(a: number, b) {
    return a + b; // 'b' has no type annotation
}

console.log(add(5, "10")); // Incorrect type usage, will concatenate instead of add

// Incorrect use of interface
interface Person {
    name: string;
    age?: number;
}

const user: Person = { name: "Alice", age: "twenty" }; // Age should be a number, not a string

// Function that ignores null/undefined values incorrectly
function getLength(str: string | null): number {
    return str.length; // Will cause runtime error if 'str' is null
}

console.log(getLength(null)); // No null check

// Unchecked type assertions
let someValue: any = "Hello, world!";
let strLength: number = (someValue as number).length; // Wrong type assertion

// Poorly designed class with missing type safety
class Car {
    brand;
    model;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand; // No type annotation
        this.model = model; // No type annotation
        this.year = year;
    }

    getCarInfo() {
        return "Brand: " + this.brand + ", Model: " + this.model + ", Year: " + this.year;
    }
}

const myCar = new Car("Toyota", "Corolla", "2022"); // Passing string instead of number for 'year'
console.log(myCar.getCarInfo());

// Enum with inconsistent values
enum Status {
    Active = "ACTIVE",
    Inactive = 0,
    Pending = "PENDING" // Mixing strings and numbers
}

console.log(Status.Active.toLowercase()); // Another typo in method name

// Incorrectly using setTimeout with missing return type
function delayedMessage(message: string) {
    setTimeout(() => {
        console.log(message);
    }, 1000);
}

delayedMessage(123); // Wrong argument type

// Misuse of `never` type
function throwError(): never {
    throw "This is an error"; // Should throw an Error object, not a string
}

throwError();
