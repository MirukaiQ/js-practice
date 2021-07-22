// минимальное и максимальное число
function getMin (arrayOfNumbers) {
    let minNumber = arrayOfNumbers[0]

    for (let i = 1 ; i < arrayOfNumbers.length ; i++) {
        if (arrayOfNumbers[i] < minNumber) {
            minNumber = arrayOfNumbers[i]
        }
        
    }
    return minNumber
}
function getMax (arrayOfNumbers) {
    let maxNumber = arrayOfNumbers[0]

    for (i = 1 ; i < arrayOfNumbers.length ; i++) {
        if (arrayOfNumbers[i] > maxNumber) {
            maxNumber = arrayOfNumbers[i]
        }
       
    }
    return maxNumber
}
// среднее арифмнетическое элементов 
const arr = [
    12,
    15,
    20,
    25,
    59,
    79
]
function getAverage(arrrayOfNumbers) {
    let sumOfNumbers = arrrayOfNumbers[0]
    
    for (i = 1 ; i < arrrayOfNumbers.length ; i++) {
        sumOfNumbers = sumOfNumbers + arrrayOfNumbers[i]
    }
    return sumOfNumbers / arrrayOfNumbers.length
}
// случайные числа от 1 до 100
function getRandom () {
    return Math.floor(Math.random() * 100)
}
// 10 случайных целых чисел
function randomNumbers(array) {
    for (i = 0 ; i < 11 ; i++) {
        array.push(Math.floor(Math.random() * 10))
    }
}
// Задачи на работу с массивами 
// 1) 
const ar1 = [1, 2, 3]
const ar2 = [4, 5, 6]
const ar3 = ar1.concat(ar2) 
// 2)
const arr1 = [3, 2, 1]
const arrReverse = arr1.reverse()
// 3)
const rr = [1, 2, 3] 
rr.push(4, 5, 6)
const rr2 = [1, 2, 3]
rr2.unshift(4, 5, 6)
// 4) 
const arry = ["js", "css", "jq",]
console.log(arry[0])
arry.shift()
console.log(arry[arry.length -1])
arry.pop() 
// 5) 
const arry2 = [1, 2, 3, 4, 5]
const arry3 = arry2.slice(-5, 3)
const arry4 = arry2.slice(-2)