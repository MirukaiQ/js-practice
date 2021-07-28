function MyArrayProto() {
    this.sleep = function() {
        return "zzzzzzzzzzzzzzzzzz"
    }
}
    

function UserProto(name, age, isMale) {
    this.name = name,
    this.age = age,
    this.isMale = isMale
}

const arrayProto = new MyArrayProto()

UserProto.prototype = arrayProto

const user1 = new UserProto("Alexey", 27, true)


function MyArray () {
    this.length = 0;
    this.push = function() {
        for (let i = 0 ; i < arguments.length ; i++ ) {
            this[this.length++] = arguments[i];
        }
        return this.length;
    }
    this.pop = function() {
        this.length--
        
        return this.length
    }
}
const arr = new MyArray()

const users = [
    {name: "Alexey", age: 27, isMale: true, cash: 50000},
    {name: "Sanya", age: 23, isMale: true, cash: 300},
    {name: "Dasha", age: 18, isMale: false, cash: 4000},
    {name: "Egor", age: 15, isMale: true, cash: 700},
    {name: "Anna", age: 12, isMale: false, cash: 500},
]
