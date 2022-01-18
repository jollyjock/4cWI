function DoTheMagic(){
    let gewicht = document.getElementById("Gewicht").value;
    let größe = document.getElementById("Größe").value;

    let result = ((größe * 1.43)/gewicht) - 3.4;
    document.getElementById("output").innerHTML;

    if (result == 0){
        document.getElementById("output").innerHTML = "Null";
    }

    if(result > 0){
        document.getElementById("output").innerHTML="Postiv";
    }

    if(result < 0){
        document.getElementById("output").innerHTML="Negativ";
    }

    if(result == 4){
        document.getElementById("output").innerHTML="Positiv <br> 0,1,2,3,4"; 
    }

    if(result == -2){
        document.getElementById("output").innerHTML="Negativ <b> 0,-1,-2"
    }
}