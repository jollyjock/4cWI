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

//Aufgabe 1

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

//Aufgabe 2

let number420 = Math.random() * 100;
let number69 = Math.round(number420);
console.log(number69)

// Wenn die Zahl kleiner gleich 7 ist gib aus "Mini"
if (number69 <=7){
    console.log("Mini")
}

// Wenn die Zahl zwischen 7 und 90 ist gib  aus "Medium"

if (number69 > 9 && number69 < 90){
    console.log("Medium")
}

// Wenn die Zahl größer als 90 ist gib aus "Large"

if (number69 > 92){
    console.log("Large")
}

