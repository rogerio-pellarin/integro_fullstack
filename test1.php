<?php

function elimina_acentos($cadena){
    $originales = 'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûýýþÿ';
    $modificadas = 'aaaaaaaceeeeiiiidnoooooouuuuybsaaaaaaaceeeeiiiidnoooooouuuyyby';
    $cadena = utf8_decode($cadena);
    $cadena = strtr($cadena, utf8_decode($originales), $modificadas);
    return utf8_encode($cadena);
    }

function is_palindrome($input) {
   
    $searchString = " ";
    $replaceString = ""; 
    $searchString2 = ",";
    $input2= str_replace($searchString, $replaceString, $input);
    $input3= str_replace($searchString2, $replaceString, $input2);  

    if (strrev(elimina_acentos(strtolower($input3))) == strtolower(elimina_acentos($input3))) {
        return true;
    }else {
        return false;
    }
};


$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));