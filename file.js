// 1)
// for
for (i = 25 ; i > -1 ; i--) {
    console.log(i)
}
// while
let ii = 26
while (ii > 1) {
    ii--
    console.log(ii)
}
// do... while
let iii = 26 
do {
    iii--
    console.log(iii)
} while (iii > 1)
// 2)
// for
for (i = 10 ; i < 51 ; i++) {
    if (i % 5 === 0) {
        console.log(i)
    }
}
// while
let ii = 5
while (ii < 50) {
    ii++
    if (ii % 5 === 0)
    console.log(ii)
}
// do... while
let iii = 5
do {
    iii++
    if (iii % 5 ===0)
    console.log(iii)
} while(iii < 50)
// 3)
// for
for (i = 0 ; i < 101 ; i++){
    console.log(i + i)
}
// while
let ii = 0
while (ii < 100){
    ii++
    console.log(ii + ii)
}
// do... while
let iii = 0 
do {
    iii++
    console.log(iii + iii)
} while (iii < 100)
// 4)
// do... while
let result;
do {
    result = prompt("2 + 2 * 2", "")
    
} while (result < 6  || result > 6)
// while
let result2 
while (true) {
    let result2 = prompt("2 + 2 * 2", "")
    if (result2 == 6) break
}
// for
for (result = 0 ; result < 6 || result > 6 ;) {
    result = prompt("2 + 2 * 2", "")
}   