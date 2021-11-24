
let random = Math.random() * 1000; 
let randomAsInteger = Math.round(random);
console.log(randomAsInteger);

if(randomAsInteger > 500){
    console.log("Bigger than 500");
}




//Wenn größer als 800
if (randomAsInteger > 800){
    console.log("REALLY BIG");
}

//Wenn zwischen 500 und 800
if(randomAsInteger > 502 && randomAsInteger < 800){
    console.log("BIG");
}

//Wenn zwischen 200 und 500 
if(randomAsInteger > 202 && randomAsInteger < 500){
    console.log("MEDIUM");
}

//Wenn zwischen 0 und 200
if(randomAsInteger > 2 && randomAsInteger < 200){
    console.log("SMALL");
}