// Object Types
const person: {
  name: string;
  age: number;
} = {
  name: "John",
  age: 30
}

console.log(person.name)


// Array Types
let favoriteSports: string[]
favoriteSports = ["Basketball", "Football", "Tennis"]
favoriteSports.push('Baseball') // valid because baseball is a string
favoriteSports.push(10) // invalid because 10 is not a string

// Infer array type

const student = {
  name: "John",
  age: 30,
  hobbies: ["Swimming", "Dancing"]
}

for (const hobby of student.hobbies) {
  // hobby is a string
  console.log(hobby.toUpperCase()) // toUpperCase works with strings
  console.log(hobby.map()) // map() only works with arrays
}


// Tuples

const employee = {
  role: [3, "desk job"] // infer that this array can accept either a number or a string
}

employee.role.push("salary") // salary is a string
employee.role.push(100) // 100 is a number
employee.role.push(true) // true is not a number or a string

const teacher: {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string]
} = {
  name: "John",
  age: 30,
  hobbies: ["Gaming", "Walking"],
  role: [2, "author"]
}

teacher.role.push('admin')
teacher.role[1] = 20 // will only accept a string
teacher.role = [10, "author", "salad"] // these are 3 elements
teacher.role = [20, "salad"]


// Enums

enum Role {
  ADMIN, // 0
  INSTRUCTOR, // 1
  STUDENT // 2
}

const member = {
  name: "Joe",
  age: 30,
  hobbies: ["Swimming", "Drawing"],
  role: Role.INSTRUCTOR // 1
}

if (member.role === Role.INSTRUCTOR) {
  // some logic
}


// Any

let sports: any // Will accept any type for your variable
sports = "Golf"
sports = 30
sports = false
sports = []


// Union Types
let lastname: string | number
lastname = "Johnny"
lastname = 50
lastname = true // invalud because true is a boolean

function combine(input1: string | number, input2: string | number) {
  if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2
  } else if (typeof input1 === "string" && typeof input2 === "string") {
    return input1.toString() + input2.toString()
  } else {
    return null
  }
}

combine('Hello', 'World') // HelloWorld
combine(5, 10) // valid
combine(5, "Hello") // 5Hello


// Literal Types
function combine1(
  input1: number | string,
  input2: number | string,
  resultType: 'as-number' | 'as-text',
  status: 'single' | 'married' | 'widowed') {
}

combine1(1, 2, 'as-number', 'single') // Valid
combine1('Hello', 'World', 'as-text', 'married') // Valid
combine1(1, 2, 'as-number', 'open') // Invalid because status can only be single, married, widowed


// Type Aliases
type NumStr = string | number
type ResultType = "as-text" | "as-number"
type BoolStr = string | boolean

function dataCheck(input1: NumStr, input2: BoolStr, resultType: ResultType) {

}

// Unknown Type

let inputField: unknown
let userName: string

inputField = 5
inputField = "John"

if (typeof inputField === "string") {
  userName = inputField
}
