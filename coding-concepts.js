// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Hotel 2022"
console.log(cohort.split(""))

// a) Your answer: ["H", "o", "t", "e", "l", "2", "0", "2", "2"]
// b) Verify and explain:
// Actual output: ['H', 'o', 't', 'e', 'l', ' ', '2', '0', '2', '2']
// Explaination: the .split() mutator will change a string into an array, splitting according to how you tell it to within the parentheses. In this case, empty quotations ("") will tell it to split the string by each individual character. My answer is almost right, though I forgot that the space in the string also counts as a logged character. Also, the output is in single quotations rather than double as I put it, but it is still an array of strings.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: "Hello, LEARN Student"
// b) Verify and explain: 
// Actual output: undefined
// Explanation: The 'undefined' data type is logged when the code knows that something should be happening, but there is a part of the code that is not assigned correctly (or literally undefined). In this case, while the code should function, it is missing the 'return' within the function to tell it what to log. That is crucial to your function's output being properly defined!

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer:[8, 10, 12, 14, 16]
// b) Verify and explain:
// Actual output: [8, 10, 12, 14, 16]
// Explanation: .map is a higher order function that will run through the values in an array and then log a new array that follows whatever action you have asked it to take. In this case, the entire array of numbers was passed through and multiplied by two (* 2). Because the function is using .map, each value in the array was touched and multiplied by two.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain:
// Actual output: [11, 13, 15]
// Explanation: Similarly to the function in question 3, .filter is a higher order function that iterates through an array. It logs an outcome based on the action you have assigned the function to complete, though unlike .map, it will not always produce an array. In this case, however, it was prompted to return the array onlyOdds with only the numbers that have a non-zero remainder (indicating that it is odd). Because it iterates through the array, it filtered over each number and only returned the qualifying values.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain:
// Actual output: "JavaScript"
// Explanation: When working with objects, you have to call on them using dot notation. The dot notation here indicates that it is logging the value at the 0th index of the array paired to the 'languages' key within the object 'myCodingSkills'. This is specifically returning the called upon value as it is written within the array-- in this case, a string containing the word JavaScript.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: {student: "George", cohort: "Hotel", year: 2022}
// b) Verify and explain:
// Actual output: {student: "George", cohort: "Hotel", year: 2022}
// Explanation: When dealing with classes, the keyword 'new' will log an instance of the class. This instance will be comprised of everything within that class, including values assigned to variables if called upon. For this code, "George" was assigned to the variable 'name', which allowed it to be logged within the class. If you were to go further and return a string using string interpolation, you could include these values outside of the class format.
