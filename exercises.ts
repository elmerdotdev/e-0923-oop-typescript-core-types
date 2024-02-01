// 1. Create a tuple called coordinate with two elements: a number representing the x-coordinate and a number representing the y-coordinate.
// 2. Assign values to the tuple elements.
// 3. Print out the coordinates.

let coordinate: [number, number]
coordinate = [10, 20]
console.log(`X: ${coordinate[0]}, Y: ${coordinate[1]}`) // X: 10, Y: 20


// 1. Create an enum called Day with values representing the days of the week (e.g., Sunday, Monday, etc.).
// 2. Declare variables using the Day enum to represent the current day and print it.

enum Day {
  Sunday, // 0
  Monday, // 1
  Tuesday, // 2
  Wednesday, // 3
  Thursday, // 4
  Friday, // 5
  Saturday // 6
}

let today: Day = Day.Wednesday // 3
console.log(`Today is ${Day[today]}`) // Wednesday


// 1. Declare a variable dynamicValue with the type any.
// 2. Assign different types of values (string, number, object) to dynamicValue.
// 3. Try to access properties and methods on dynamicValue.

let dynamicValue: any
dynamicValue = "Hello"
console.log(dynamicValue.length) // 5

dynamicValue = 20
console.log(dynamicValue.toFixed(2)) // 20.00

dynamicValue = { name: "John" }
console.log(dynamicValue.name) // John


// 1. Create a function called printId that accepts either a number or a string as a parameter.
// 2. Inside the function, check the type of the parameter and print a message accordingly.

function printId(id: number | string): void {
  if (typeof printId === "number") {
    console.log(`${printId} is a number`)
  } else {
    console.log(`${printId} is a string`)
  }
}

printId(100)
printId("100")


// 1. Create a function called printDirection that accepts a direction parameter with a literal type of "left" or "right".
// 2. Inside the function, print a message based on the provided direction.

function printDirection(direction: "left" | "right"): void {
  console.log(`Moving to ${direction}`)
}

printDirection("left")
printDirection("right")


// 1. Create a function displayValue that takes a parameter of type unknown.
// 2. Use a type guard to check if the value is a string or a number and print it accordingly.

function displayValue(value: unknown): void {
  if (typeof value === "string" || typeof value === "number") {
    console.log(value)
  } else {
    console.log("Not a string or a number")
  }
}

displayValue(10)
displayValue("10")
displayValue(true)


// 1. Create a function throwError that throws an error.
// 2. Specify the return type of the function as never.
// 3. Call the function and catch the error.

function throwError(): never {
  throw new Error("This is an error")
}

try {
  throwError()
} catch (error) {
  console.log('Found error: ', error)
}