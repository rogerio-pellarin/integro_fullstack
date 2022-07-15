<?php

function is_palindrome($input) {
    //solve this method that says if the sentence is palindrome or not
    
    if (strlen($input)<2) {
        return false;
    }
 
    // eliminamos los espacios, comas, puntos y convertimos la cadena en minusculas
    $input=strtolower(str_replace([" ", ",", "."], "", $input));
 
    for ($i=0;$i<strlen($input);$i++) {
        if ($input[$i]!=$input[strlen($input)-$i-1]) {
            return false;
        }
    }
    return true;
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));

?>