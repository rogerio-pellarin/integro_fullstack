<?php

function is_palindrome($input) {
  $input = str_replace(' ', '', $input);

    //remove special characters
    //$input = preg_replace('/[^A-Za-z0-9\-]/', '', $input);

  $input = remove_accents($input);
  $input = strtolower($input);
  $reverse = strrev($input);

  if ($input == $reverse) {
    echo "<p>It is Palindrome</p>";
  }else {
    echo "</p>Not Palindrome</p>";
  }
}

/* Función que elimina los acantos y letras ñ*/
function remove_accents($input){
  $lettersAccent = 'ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûýýþÿ';
  $letterWithoutAccent = 'aaaaaaaceeeeiiiidnoooooouuuuybsaaaaaaaceeeeiiiidnoooooouuuyyby';
  $input = utf8_decode($input);
  $input = strtr($input, utf8_decode($lettersAccent), $letterWithoutAccent);
  return utf8_encode($input);
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));