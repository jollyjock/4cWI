//Erstelle zwei Zufallszahlen zwischen 0 und 100 

//1. Zufallszahl
let r1 = Math.random() * 100; 
let randomNum1 = Math.round(r1);
console.log (randomNum1);

//2. Zufallszahl
let r2 = Math.random() * 100; 
let randomNum2 = Math.round(r2); 
console.log(randomNum2);

//Wenn die erste Zahl kleiner is als die zweite UND die erste Zahl kleiner ist als 50
//dann gib aus "Zahl 1 ist kleiner als Zahl 2 und MINI"
if(randomNum1 < randomNum2  &&  randomNum1 < 50){
    console.log("Zahl 1 ist kleiner als Zahl 2 und MINI");
}


//Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl 
//kleiner ist als 30, dann gib aus "Eine der beiden ist kleiner als 30"
if(randomNum1 < 30 || randomNum2 < 30){
    console.log("Eine der beiden ist kleiner als 30"); 
}


//Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl 
//ungleich 50 ist, dann gib aus "Erste Zahl klein, zweite Zahl kein 50er "
if(randomNum1 < 50 && randomNum2 != 50){
    console.log("Zahl 1 = MINI, Zahl 2 ist nicht 50")
}