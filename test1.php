<?php

// i don't validate if the input is a string or not. Then you can pass a number
// like 101 and it will return True
function is_palindrome($input)
{
    $words_lone = str_replace([" ", ",", "."], "", $input);

    if($words_lone == strrev($words_lone)){
        return true;
    }else{
        return false;
    }
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));