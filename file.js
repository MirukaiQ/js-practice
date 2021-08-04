function Phone(model, manufacturer, price, color, inStock) {
  this.model = model;
  this.manufacturer = manufacturer;
  this.price = price;
  this.color = color;
  this.comments = [];
  this.inStock = inStock;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function getPhones(amount) {
  const newPhones = [];

  for (let i = 0; i < amount; i++) {
    newPhones.push(
      new Phone(
        `Model ${i}`,
        "Panasonic",
        getRandomInt(5000, 50000),
        "black",
        Math.random() >= 0.5
      )
    );
  }

  return newPhones;
}

const phones = getPhones(50);

console.table(phones);

// 1)
let sum = 0
phones.forEach(phone => {
  if (phone.inStock === true) {
    sum++
  }
})
console.log(sum)
// 1.1)

phones.forEach(phone => {
  const message = phone.inStock ? "в наличии" : "не в наличии"
  console.log(`${phone.manufacturer} ${phone.model} со стоимостью ${phone.price} ${message}`)
})
//2)

const stock = phones.filter(phone => phone.inStock)
//3

const blackFriday = stock.map(phone => {
  if (stock.price > 30000) {
    stock.price = Math.round(phone.price * 0.7)
  }
  return phone
})

//1. 

const sortedArray = phones.sort(function (firstPhone, secondPhone) {
  return secondPhone.price - firstPhone.price;
})