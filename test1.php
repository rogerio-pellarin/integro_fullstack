<?php

function is_palindrome($input)
{
    $isPalindrome = false;
    //convierte toda la frase a minuscula incluyendo caraceteres especiales
    $phrase = mb_strtolower($input, 'UTF-8');

    //reemplaza los acentos por caracteres normales
    $phrase = removeAccents($phrase);

    //reemplaza caracteres de puntuación
    $pattern = '/[¿!¡;,:\.\?#@()"]/';
    $replace = '';
    $phrase = preg_replace($pattern, $replace, trim($phrase));

    //reemplaza los espacios
    $phrase = str_replace(" ", "", $phrase);

    if ($phrase == strrev($phrase)) {
        $isPalindrome = true;
    }
    return $isPalindrome;
}
function removeAccents($word)
{
    $conv = [
        'á' => 'a',
        'é' => 'e',
        'í' => 'i',
        'ó' => 'o',
        'ú' => 'u',
    ];
    return strtr($word, $conv);
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));
