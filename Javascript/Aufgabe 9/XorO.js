// Aufgabe 1: Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert (Rechteckbeispiel adaptieren)
// % - Modulo gibt den Rest einer Division zurück

document.write("Aufgabe 1 : " + "<br>")

for (i = 0; i < 4; i++){
    if(i % 2){
        for(X = 0; X < 4; X++){
            document.write("X")
        }
        document.write ("<br>")
    }

    else{
        for (O = 0; O < 4; O++){
            document.write("O");
        }
        document.write("<br>")
    }
}
document.write("<br>")

//Ausgabe ist anders herum.... aber es funktioniert

//Aufgabe 2: Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren 
//zwei Lösungswege -> Zähler dahingehend verändern, dass er nur gerade Zahlen addiert -> Modulo

document.write("Aufgabe 2 : Wird in der Console ausgegeben" + "<br>")

var Sumi = 0
for (i = 1; i < 101; i++){
    if(i % 2 == 0){
        Sumi += i
    }
}
console.log(Sumi)

document.write("<br>")

//Aufgabe 3: Versuche mit einer for/while - Schleife den Anfangsbuchstaben deines Namens auszugeben

document.write("Aufgabe 3 : " + "<br>")

for(a = 0; a < 6; a++){
    switch(a){
        case 0:
            for(x = 1; x < 6; x++){
                document.write("X")
            }
            document.write("<br>")
            break;

        case 1: 
        for(y = 1; y < 2; y++){
            document.write("X")
        }
        document.write("<br>")
        break;

        case 2: 
        for(y = 1; y < 2; y++){
            document.write("X")
        }
        document.write("<br>")
        break;

        case 3: 
        for(b = 1; b < 6; b++){
            document.write("X")
        }
        document.write("<br>")
        break;

        case 4: 
        for(y = 1; y < 2; y++){
            document.write("X")
        }
        document.write("<br>")
        break;
    }
}







