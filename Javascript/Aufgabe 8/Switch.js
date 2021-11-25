//Erstelle eine Zufallszahl zwischen 5 und 10 
 let r1 = Math.random(); 
 let randomNumber = Math.round(r1) ; 
 randomNumber = Math.floor(Math.random(randomNumber) * 6) + 5;
 console.log(randomNumber);

 switch (randomNumber) {
     //Wenn der Wert 10 ist, gib "Ten" aus 
     case randomNumber = 10:
          console.log("Ten");
         break;

     //Wenn der Wert 9 ist, gib "Nine" aus
     case randomNumber = 9:
         console.log("Nine");
         break; 

     //Wenn der Wert 8 ist, gib "Eight" aus 
     case randomNumber = 8:
     console.log("Eight");
     break; 

     //Wenn der Wert 7 ist, gib "Seven" aus 
     case randomNumber = 7: 
     console.log("Seven"); 
     break; 

     //Wenn der Wert 6 ist, gib "Six" aus 
     case randomNumber = 6: 
     console.log("Six"); 
     break;

     //Wenn der Wert 5 ist, gib "Five" aus 
     case randomNumber = 5: 
     console.log("Five"); 
     break; 

     //Wenn der Wert 4 ist, gib "Four" aus 
     case randomNumber = 4: 
     console.log("Four"); 
     break; 

     //Wenn der Wert 3 ist, gib "Three" aus 
     case randomNumber = 3: 
     console.log("Three"); 
     break; 

     //Wenn der Wert 2 ist, gib "Two" aus
     case randomNumber = 2: 
     console.log("Two"); 
     break; 

     //Wenn der Wert 1 ist, gib "One" aus 
     case randomNumber = 1:
     console.log("One"); 
     default:
         break;
 }