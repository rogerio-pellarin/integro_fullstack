<?php

// i don't validate if the input is a string or not. Then you can pass a number
// like 101 and it will return True
function is_palindrome($input)
{
    $words_lone = str_replace([" ", ",", "."], "", $input);
    //replace tildes
    $words_lone = str_replace(['á', 'Á'], "a", $words_lone);
    $words_lone = str_replace(['é', 'É'], "e", $words_lone);
    $words_lone = str_replace(['í', 'Í'], "i", $words_lone);
    $words_lone = str_replace(['ó', 'Ó'], "o", $words_lone);
    $words_lone = str_replace(['ú', 'Ú'], "u", $words_lone);
    $words_lone = strtolower($words_lone);
    
    if($words_lone == strrev($words_lone)){
        return true;
    }else{
        return false;
    }
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));