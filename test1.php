<?php

function is_palindrome($input) {
    //remove all spaces
    $input = str_replace(' ', '', $input);

    //remove special characters
    $input = preg_replace('/[^A-Za-z0-9\-]/', '', $input);

    //change case to lower
    $input = strtolower($input);

    //reverse the input
    $reverse = strrev($input);

    if ($input == $reverse) {
        return true
    } 
    else {
        return false
    }
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));
