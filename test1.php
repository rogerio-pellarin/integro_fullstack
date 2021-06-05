<?php

function is_palindrome($input)
{
    /** Constant variables */
    $NO_SPACE = '';
    $REGEX = '/[^A-Za-z0-9\-]/';
    $IN_CHARSET = "utf-8";
    $OUT_CHARSET = "ascii//TRANSLIT";

    /** Transform diacritics to base form */
    $inputBaseForm = iconv($IN_CHARSET, $OUT_CHARSET, $input);

    /** Remove special chars */
    $stringWithoutSpecialChars = preg_replace($REGEX, $NO_SPACE, $inputBaseForm);

    /** Change to capital letters */
    $finalInput = strtoupper($stringWithoutSpecialChars);

    /** Reverse the string*/
    $finalPalindrome = strrev($finalInput);

    return $finalPalindrome == $finalInput;
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));
