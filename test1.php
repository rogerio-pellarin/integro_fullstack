<?php

function is_palindrome($input) {
    //solve this method that says if the sentence is palindrome or not

    $text1 = clean_text($input);
    $text2 = strrev($text1);

    var_dump($text1);
    var_dump($text2);

    $response = false; 

    if($text1 == $text2)
    {
        $response = true;
    }

    return $response;
}

function clean_text($text)
{
    //eliminar caracteres adicionales
    $final_text = str_replace([',',' ','.','-','?','¿','!','¡'],'',$text); 

    //eliminar acentos
    $final_text = str_replace(['Á','É','Í','Ó','Ú','Ü','Ñ'],['a','e','i','o','u','u','n'],$final_text); 
    $final_text = str_replace(['á','é','í','ó','ú','ü','ñ'],['a','e','i','o','u','u','n'],$final_text);

    //convertir el texto a minusculas
    $final_text = strtolower($final_text);

    return $final_text;
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));