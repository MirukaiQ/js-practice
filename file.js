`use strict`
class Worker {
  constructor(name, lastName, workingDay, salary) {
    this.name = name
    this.lastName = lastName
    this.workingDay = workingDay
    this.salary = salary
    if (salary  < 0) {
      throw new RangeError("Salary cannot be negative")
    }
    if (workingDay < 0) {
      throw new RangeError("Working days cannot be negative")
    }
  }
  getFullName() {
    return this.name + " " + this.lastName
  }
  getSalary() {
    return this.salary * this.workingDay
  }
  getPremium() {
    if (this.workingDay > 20) {
      let procent = (this.salary * 25) / 100
      this.salary = Math.round(this.salary + procent) 
    }
    return this.salary
  }
}

const worker1 = new Worker("Alexey", "Karpov", 25, 200)
