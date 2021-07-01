<?php

function is_palindrome(string $input) : string {
    //solve this method that says if the sentence is palindrome or not
    $input =  prepareString($input);
    if($input === strrev($input))
      return 'It is Palindrome';
    return 'Not Palindrome';
}

function prepareString(string $input) : string{
  $input =  str_replace(' ','',$input);
  $input = strtolower($input);
  $input = replaceAccents($input);
  $input = preg_replace('/[^A-Za-z0-9\-]/','',$input);
  return $input; 
}

function replaceAccents(string $input) : string{
  $input = strtr($input,[
    'á' => 'a', 'Á' => 'a', 
    'í' => 'i','Í' => 'i',
    'é' =>'e', 'É' => 'e',
    'ó' => 'o', 'Ó' => 'o',
    'ú'=>'u', 'Ú' => 'ú'
  ]); 
  return $input;
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));
