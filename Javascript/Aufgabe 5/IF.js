/*
let number = 33; 

if (number < 25){
    console.log(number)
} else if (number<50) {
    console.log("kleiner 50 " + number) 
} else {
    console.log("else")
}
*/

let number = Math.random() * 100;
let number15 = Math.round(number);
console.log(number15)

// Wenn die Zahl kleiner ist als 20  gib aus "Mini"
if (number15 <=20){
    console.log("Mini")
} 

if (number15 > 22 && number15 < 50){
    console.log("Medium")
}

if (number15 > 52){
    console.log("Large")
}


