function calcola(stringa){
    //stringa = stringa.toString();
    var nOccorrenze = -1;
    if(stringa.length == 0){
        alert("stringa vuota");
    }else{
        nOccorrenze = 0;
        for(var i = 0 ; i < stringa.length ; i++){
            if(stringa[i] == 'c' ){
                nOccorrenze++;
            }
        }
        alert(nOccorrenze);
    }
    return nOccorrenze;
}

$(document).ready(function(){
    calcola("");
    calcola("ciao");
    calcola("stai");
    
});