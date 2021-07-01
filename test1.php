<?php

function is_palindrome($string){
    if (strrev($string) == $string) {
        return ['success' => true, 'result' => 'Es un palindromo'];
    }else {
        return ['success' => true, 'result' => 'No es un palindromo'];
    }
};

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));

//These return false, We can use string methods to change capitalization and be more exact in the desired assertion