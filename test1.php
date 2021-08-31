<?php
function clean($string) {
  $toRemove = array (" ", ",", "á","é","í","ó","ú","Á","É","Í","Ó","Ú","ñ","À","Ã","Ì","Ò","Ù","Ã™","Ã ","Ã¨","Ã¬","Ã²","Ã¹","ç","Ç","Ã¢","ê","Ã®","Ã´","Ã»","Ã‚","ÃŠ","ÃŽ","Ã”","Ã›","ü","Ã¶","Ã–","Ã¯","Ã¤","«","Ò","Ã","Ã„","Ã‹");
  $replacement= array ("", "", "a","e","i","o","u","A","E","I","O","U","n","N","A","E","I","O","U","a","e","i","o","u","c","C","a","e","i","o","u","A","E","I","O","U","u","o","O","i","a","e","U","I","A","E");
  return str_replace($toRemove, $replacement , strtolower($string));
}

function is_palindrome($input) {
  $inputCleaned = clean($input);

  for($i = 0; $i < floor(strlen($inputCleaned) / 2); $i++) {
    if($inputCleaned[$i] !== $inputCleaned[strlen($inputCleaned) -1 - $i]) {
      return false;
    }
  }

  return true;
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));
