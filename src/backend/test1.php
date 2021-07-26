<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$input = $_POST["input"];

function is_palindrome($input) {
    $variable_type = gettype($input);
    if($variable_type == "string" and strlen($input) > 2) {
        $string_without_symbols = str_ireplace(
            [" ", "–", "-", ",", ".", "!", "#", "$", "%", "&", "@", "^", "*", "(", ")", "_", "+", "=", "¡", "¿", "?"],
            "",
            $input
        );
        $string_without_characters = str_ireplace(
            ["á", "é", "í", "ó", "ú"],
            ["a", "e", "i", "o", "u"],
            $string_without_symbols
        );
        $string_lowercase = strtolower($string_without_characters);

        $string_reverse = strrev($string_lowercase);

        return $string_reverse == $string_lowercase;
    }

    return false;
}

//$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
//var_dump(is_palindrome($input));

$response =  ['isPalindrome' => is_palindrome($input), 'input' => $input]; 
echo json_encode($response);
