"use strict";

var rok = 1990;

while(rok <= 2030){
    console.log(mojeNarodky(rok)+ konciNulou(rok) + jePriestupny(rok) + rok);
    var list;
    list = list +"<br>" + mojeNarodky(rok)+ konciNulou(rok) + jePriestupny(rok) + rok;
    rok++;
}

document.write(list);

function jePriestupny(rok){
    if(rok % 100 == 0){
        if(rok % 400 == 0){
            return "P ";
        }
    }
    else{
        if(rok % 4 == 0){
            return "P ";
        }
    }
    return "";

}

function konciNulou(rok){
    var endsWithZero = rok % 10;

    if (endsWithZero !==0){
        return "";
    }
    else{
        return "O ";
    }
}

function mojeNarodky(rok){
    if(rok == 2001){
        return "M ";
    }
    else{
        return "";
    }
}