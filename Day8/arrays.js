// You can declare empty or non-empty arrays
const fruits = ["Mango", "Banana"];
const cars = [];

// To add any element to array
fruits.push("Kiwi");
console.log(fruits);
// This will give ["Mango", "Banana", "Kiwi"]
// Kiwi gets added at last

fruits.pop();
console.log(fruits);
// This will give ["Mango", "Banana"]
fruits.pop();
console.log(fruits);
// This will give ["Mango"]

// Method 1 to delete all array elements
// for(let i = 0; i<2; i++){
//     fruits.pop();
// }

// Method 2
// fruits = []; // This method is not used because w eusually declare our array objects as constants

// Method 3
fruits.length = 0;
console.log(fruits);

// Now we will see slice and splice
const bikes = ["Activa", "Jupiter", "Access", "honda"];

const isActivaPresent = bikes.includes("activa");
console.log(isActivaPresent);

const indexOfActiva = bikes.indexOf("Activa");
console.log(indexOfActiva);

console.log(bikes);

// Slice will return you a copy
// ADDITIONAL FEATURE: if you specify start, end index, then it will copy only that much
const copyOfBikesArray = bikes.slice();
console.log("Bikes array: ", bikes);
console.log("copyOfBikesArray array: ", copyOfBikesArray);

const copy2 = bikes.slice(1,3);
console.log("Bikes array: ", bikes);
console.log("copy2 array: ", copy2);

// Splice 
const splicedArray = bikes.splice(1,2);
console.log("Bikes array: ", bikes);
console.log("splicedArray: ",splicedArray);



// Final usage of these functions together
// 
const animals = ["dog", "cat", 'horse', 'fish', 'parrot'];

// I want to remove fish from this array
const removedAnimals = animals.splice(3,1);
console.log("animals array : ", animals);

// If the location of 'fish' changes, then we will need a bit of different logic
const animals1 = ['fish',"dog", "cat", 'horse', 'parrot'];
const indexOfFish = animals1.indexOf('fish');
// I want to remove fish from this array
animals1.splice(indexOfFish,1);
console.log("animals1 array : ", animals1);


// User will give tasks
// Save each of those tasks in array

const tasks = ["Buy clothes", "Wash utensils", "buy groceries", 'buy toys'];


