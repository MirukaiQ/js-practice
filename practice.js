'use strict';

// 1)
function sum(n) {
  let sum = 0;
  for (let i = 0; i <= n ; i++) {
    sum += i
  }
  return sum
}
// 2
const student = {
  name: "Jhon",
  lastName: "Pitterson",
  gender: "male",
  contacts: 8800355355,
}
const utiversity = {
  faculty: "Bow",
  department: "linguistics"
}
student.faculty = utiversity.faculty;
student.department = utiversity.department;

function studentInfo(student) {
  return console.log(`Students info:
   name: ${student.name} lastName: ${student.lastName}, gender: ${student.gender}, 
   contacts: ${student.contacts}, faculty: ${student.faculty}, 
   department: ${student.department}
   `)
}
// 3)
const arr = [1,4,7,0,9,5,6,2,1,0,6,2,3,8,0,2,3,5,7,2,6,5,4,7,0]
function numbersOfArray (array) {
  for(let index = 0 ; index < array.length ; index++) {
    if (index % 2 === 0) {
      console.log(array[index])
    }
  }
  for(let index = 0 ; index < array.length ; index++) {
    if (array[index] % 2 === 0) {
      console.log(array[index])
    }
  }
  for(let index = 0 ; index < array.length ; index++) {
    if (array[index] === 0) {
      console.log(index)
    }
  }
  let sum = 0
  for(let index = 0 ; index < array.length ; index++) {
    if (array[index] === 0) {
      sum += 1
    }
  }
  return console.log(sum)
}

// 4)
class Book {
  constructor(author,title,year,publishing) {
    this.author = author
    this.title = title
    this.year = year
    this.publishing = publishing
  }
}
class eBook extends Book {
  constructor(author,title,year,publishing,format,number) {
    super(author,title,year,publishing)
    this.format = format
    this.number = number
  }
}
// 5)
function numbersRange(n) {
  for(let i = 0 ; i < n ; i++) {
    if (i % 3 === 0 & i % 5 === 0) {
      console.log("fizzbuzz")
    }
    if (i % 3 === 0) {
      console.log("fizz")
    }
    if (i % 5 === 0) {
      console.log("buzz")
    }
    else {
      console.log(i)
    }
  }
  return n
}


