// ASSESSMENT 2: Coding Practical Questions with Jest

// const { exportAllDeclaration } = require("@babel/types")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// RED
describe("divisibleByThree", () => {
    it("determines if the object's number is evenly divisible by three", () => {
        expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
        expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
        expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
    })
})


// b) Create the function that makes the test pass.

// GREEN
// Pseudocode:
// declare a function called divisibleByThree that takes in an object with a number inside as an argument
// use string interpolation to display the object's key within the string
// utilize the modulo operator to determine whether or not the number is evenly divisible by three
// input: object (labeled object1, object2, or object3) containing a key whose pair is a number
// output: string which declares whether or not the number is evenly divisible by three

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

const divisibleByThree = (value) => {
    if (value.number % 3 === 0) {
        return `${value.number} is divisible by three`
    } else if (value.number % 3 !== 0) {
        return `${value.number} is not divisible by three`
    }
}
console.log(divisibleByThree(object1))
// Actual output: "15 is divisible by three"
console.log(divisibleByThree(object2))
// Actual output: "0 is divisible by three"
console.log(divisibleByThree(object3))
// Actual output: "0 is divisible by three"




// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// RED
describe("allCaps", () => {
    it("takes in an array of strings and returns a new array with the first letter of each string capitalized", () => {
        expect(allCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(allCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

// b) Create the function that makes the test pass.

// GREEN
// Pseudocode:
// declare a function called allCaps that takes in an array of strings
// use the .map higher order function to touch every item in the array and then create a new array
// utilize .charAt(), .toUpperCase(), and .slice() to capitalize only the first letter of the string while still returning the entire string
// input: an array of strings
// output: a new array of strings with the first letter of each string capitalized 

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

const allCaps = (array) => {
    let newArray= array.map(value => {
        return value.charAt(0).toUpperCase() + value.slice(1)
    })
    return newArray
}
console.log(allCaps(randomNouns1))
// Actual output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
console.log(allCaps(randomNouns2))
// Actual output: ["Temperature", "Database", "Chopsticks", "Mango"]

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

// RED
describe("firstVowel", () => {
    it("logs the index of the first vowel in a given string", () => {
        expect(firstVowel(vowelTester1)).toEqual(1)
        expect(firstVowel(vowelTester2)).toEqual(0)
        expect(firstVowel(vowelTester3)).toEqual(2)
    })
})


// b) Create the function that makes the test pass.

// GREEN
// Pseudocode:
// declare a function called firstVowel that takes in a string
// use .indexOf() to determine the index of the first value within the string
// input: a string
// output: the index of the first vowel within the string

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

const firstVowel = (string) => {
    let vowels = string.search(/[a, e, i, o, u]/g)
    return vowels
}
console.log(firstVowel(vowelTester1))
// Actual output: 1
console.log(firstVowel(vowelTester2))
// Actual output: 0
console.log(firstVowel(vowelTester3))
// Actual output: 2

// Note: I utilized Google as well as the help of one of my classmates to find the solution to this problem after running unto the same blocker continuously. I was struggling to figure out how to log the first instance of any value, rather than the code searching one by one for each value I fed into the array I was calling on. With those resources, I was introduced to the .search(/[]/) method, which will search for the first instance of any given array value rather than searching in the order the values are listed.