`use strict`
class Worker {
  constructor(name, lastName, workingDay, salary) {
    if (salary  < 0) {
      throw new RangeError("Salary cannot be negative")
    }
    if (workingDay < 0) {
      throw new RangeError("Working days cannot be negative")
    }
    this.name = name
    this.lastName = lastName
    this.workingDay = workingDay
    this.salary = salary
  }
  getFullName() {
    return `${this.name} ${this.lastName}`
  }
  getSalary() {
    return this.salary * this.workingDay
  }
  getPremium() {
    if (this.workingDay > 20) {
      const premium = Math.round(this.salary * 1.25)
      return  premium
    }
    return this.salary
  }
}

const worker1 = new Worker("Alexey", "Karpov", 25, 200)
