<?php
function is_palindrome($input) {
  $newInput = strtolower(str_replace([" ", ",", "."], "", $input));
  $newInput = iconv( 'UTF-8', 'ASCII//TRANSLIT', $newInput );
  if(strlen($input)<2){
    return false;
  }
  else{
    if($newInput == strrev($newInput)){
      return true;
    }
    else{
      return false;
    }
  }
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));