// Only in TypeScript (not in JavaScript) you can use interfaces
interface Car {
    make: string;
    model: string;
    miles: number;
}

// Creating an objects from the interface
let subaru: Car = {make: 'Subaru', model: 'Outback', miles: 58232};
console.log(subaru.make + " " + subaru.model + " with a mileage of " + subaru.miles);
// Subaru Outback with a mileage of 58232

